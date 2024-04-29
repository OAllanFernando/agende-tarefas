import React from "react";
import * as Style from "./styles";
import { findAllTask } from "../../services/task";
import useAuth from "../../hooks/useAuth";
import { format } from 'date-fns';

const Index = () => {
    const { user } = useAuth();
    const [tasks, setTasks] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState("");

    const [page, setPage] = React.useState(0);
    const [pageSize, setPageSize] = React.useState(5);

    const [maxPage, setMaxPage] = React.useState(0);

    React.useEffect(() => {
        const fetchData = async () => {
            try {

                console.log(user);
                setLoading(true);
                setError("");
                const mytasks = await findAllTask(user.id, user.token, page, pageSize);
                console.log(mytasks);
                if (mytasks.data.length === 0) {
                    setError("Nenhuma tarefa cadastrada.");
                }
                setTasks(mytasks.data);
                setMaxPage(Math.ceil(mytasks.totalCount / pageSize) - 1 );
                console.log(maxPage, "aaaaaaaaaaaaaaaaaaaaaaaa", Math.ceil(mytasks.totalCount / pageSize));
            } catch (error) {
                setError("Erro ao buscar tarefas.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [user, page, pageSize]);

    // Função para atualizar o tamanho da página
    const handlePageSizeChange = (e) => {
        console.log(e.target.value);
        setPage(0)
        setPageSize(parseInt(e.target.value)); // Parse para garantir que é um número inteiro
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
                            Allan Fernando software engineer
                        </a>
                    </Style.Strong>
                </Style.LabelMinor>
            </Style.Header>
            <Style.Body>
                <Style.BodyHeader>
                    <Style.Label>Tarefas Cadastradas</Style.Label>&nbsp;<Style.ButtonNewTask>Cadastrar nova tarefa</Style.ButtonNewTask>
                </Style.BodyHeader>
                <Style.Content>
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
                                            {format(new Date(task.executionTime), "dd/MM/yyyy HH:mm:ss")}
                                        </Style.TableCell>
                                        <Style.TableCell>
                                            {task.durationMin} Min
                                        </Style.TableCell>
                                        <Style.TableButtonCell>
                                            <Style.Button>Edit</Style.Button>
                                            <Style.Button>Delete</Style.Button>
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
