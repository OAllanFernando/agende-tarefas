import React from "react";
import * as Style from "./styles";
import { createTask, deleteTask, findAllTask, getTaskByTitle, updateTask } from "../../services/task";
import useAuth from "../../hooks/useAuth";
import { format } from 'date-fns';
import Input from "../../components/Inputs";

const Index = () => {
    const { user } = useAuth();
    const [tasks, setTasks] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState("");
    const [errorEdit, setErrorEdit] = React.useState("");
    const [isCadOpem, setIsCadOpem] = React.useState(false);
    const [flush, setFlush] = React.useState(0);
    const [search, setSearch] = React.useState("");


    const [formData, setFormData] = React.useState({
        id: null,
        title: "",
        description: "",
        executionTime: "",
        durationMin: "",
        user: {
            id: user.id,
        }
    });


    const [page, setPage] = React.useState(0);
    const [pageSize, setPageSize] = React.useState(5);

    const [maxPage, setMaxPage] = React.useState(0);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError("");
                let mytasks;
                if (search !== "") {
                    mytasks = await getTaskByTitle(user.id, search, user.token, page, pageSize);
                } else {
                    mytasks = await findAllTask(user.id, user.token, page, pageSize);
                }
                if (mytasks.data.length === 0) {
                    setError("Nenhuma tarefa cadastrada.");
                }
                setTasks(mytasks.data);
                setMaxPage(Math.ceil(mytasks.totalCount / pageSize) - 1);
            } catch (error) {
                setError("Erro ao buscar tarefas.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [user, page, pageSize, maxPage, flush, search]);

    // Função para atualizar o tamanho da página
    const handlePageSizeChange = (e) => {
        console.log(e.target.value);
        setPage(0)
        setPageSize(parseInt(e.target.value)); // Parse para garantir que é um número inteiro
    }

    const openModal = () => {
        console.log("open modal");
        setFormData({
            id: null,
            title: "",
            description: "",
            executionTime: "",
            durationMin: "",
            user: {
                id: user.id,
            }
        });
        setIsCadOpem(true);
    };

    const closeModal = () => {
        setIsCadOpem(false);
    };

    const handleChange = (e) => {
        console.log("change", e.target.name, e.target.value);
        setErrorEdit("");
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submit", formData);
        let response;
        if (formData.id) {
            response = await updateTask(formData, user.token);
        } else {
            response = await createTask(formData, user.token);
        }

        if (response !== 201 && response !== 200) {
            setErrorEdit("Erro ao salvar tarefa.");
            return;
        }

        closeModal();
        setFlush(flush + 1);
    }

    const editTask = (task) => {
        console.log("edit", task);

        const originalDateTime = new Date(task.executionTime);
        originalDateTime.setHours(originalDateTime.getHours() - 3);


        const formattedDateTime = originalDateTime.toISOString().slice(0, 16);

        const taskEdit = {
            id: task.id,
            title: task.title,
            description: task.description,
            executionTime: formattedDateTime,
            durationMin: task.durationMin,
            user: {
                id: user.id,
            }
        }
        setFormData(taskEdit);
        setIsCadOpem(true);
    }

    const deleteTaskAsk = async (task) => {
        console.log("delete", task);
        const ask = window.confirm("Deseja realmente excluir a tarefa?");

        console.log(ask);
        if (ask) {
            const response = await deleteTask(task.id, user.token);
            if (response !== 204) {
                setError("Erro ao excluir tarefa.");
                return;
            }
            setFlush(flush + 1);
        }

    }



    return (
        <Style.Container>
            <Style.Header>
                <Style.Label>Sistema de Cadastro de Tarefas</Style.Label>
                <Style.LabelMinor>
                    Desenvolvido por:{" "}
                    <Style.Strong>
                        <a
                            href="https://www.linkedin.com/in/allan-fernando-software-engineer/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Allan Fernando engenheiro de software
                        </a>
                    </Style.Strong>
                </Style.LabelMinor>
            </Style.Header>
            <Style.Body>

                <Style.BodyHeader>
                    <Style.Label>Tarefas Cadastradas</Style.Label>&nbsp;<Style.ButtonNewTask onClick={openModal}>Cadastrar nova tarefa</Style.ButtonNewTask>
                </Style.BodyHeader>


                {isCadOpem && (
                    <Style.Content>
                        <Style.LabelError>{errorEdit}</Style.LabelError>
                        <Style.Form onSubmit={handleSubmit}>
                            <Style.FormGroup>
                                <label htmlFor="title">Título:</label>
                                <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
                            </Style.FormGroup>
                            <Style.FormGroup>
                                <label htmlFor="description">Descrição:</label>
                                <textarea id="description" name="description" value={formData.description} onChange={handleChange} />
                            </Style.FormGroup>
                            <Style.FormGroup>
                                <label htmlFor="executionTime">Data/Hora:</label>
                                <input type="datetime-local" id="executionTime" name="executionTime" value={formData.executionTime} onChange={handleChange} />
                            </Style.FormGroup>
                            <Style.FormGroup>
                                <label htmlFor="durationMin">Duração (em minutos):</label>
                                <input type="number" id="durationMin" name="durationMin" value={formData.durationMin} onChange={handleChange} />
                            </Style.FormGroup>
                            <Style.SubmitButton type="submit">Salvar</Style.SubmitButton>
                        </Style.Form>
                    </Style.Content>
                )}
                <Style.Content>

                    <Input
                        type="text"
                        placeholder="Pesquisar"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    {loading ? (
                        <Style.Label>Loading...</Style.Label>
                    ) : error ? (
                        <Style.LabelError>{error}</Style.LabelError>
                    ) : (
                        <Style.Table>
                            <thead>
                                <tr>
                                    <th>Título</th>
                                    <th>Descrição</th>
                                    <th>Data/Hora</th>
                                    <th>Duração</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task, index) => (
                                    <Style.TableRow key={index}>
                                        <Style.TableCell>
                                            {task.title}
                                        </Style.TableCell>
                                        <Style.TableCell>
                                            {task.description}
                                        </Style.TableCell>
                                        <Style.TableCell>
                                            {format(new Date(task.executionTime), "dd/MM/yyyy HH:mm")}
                                        </Style.TableCell>
                                        <Style.TableCell>
                                            {task.durationMin} Min
                                        </Style.TableCell>
                                        <Style.TableButtonCell>
                                            <Style.EditButton onClick={() => { editTask(task) }}>Editar</Style.EditButton>
                                            <Style.DeleteButton onClick={() => { deleteTaskAsk(task) }}>Excluir</Style.DeleteButton>
                                        </Style.TableButtonCell>
                                    </Style.TableRow>
                                ))}
                                <div>
                                    <Style.Button disabled={page <= 0 ? true : false} onClick={() => { setPage(page - 1) }}>Página anterior</Style.Button>&nbsp;{page}&nbsp;<Style.Button disabled={page < maxPage ? false : true} onClick={() => { setPage(page + 1) }}>Próxima página</Style.Button>
                                    <span> Página: </span>
                                    <select value={pageSize} onChange={handlePageSizeChange}>
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="15">15</option>
                                    </select>

                                </div>
                            </tbody>
                        </Style.Table>
                    )}
                </Style.Content>
            </Style.Body>
            <Style.Footer>
                {/* Rodapé aqui */}
            </Style.Footer>
        </Style.Container>
    );
};

export default Index;
