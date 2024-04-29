import ApiManager from "./ApiManager";

const findAllTask = async (user_id, token, page, pageSize) => {
    try {
        const response = await ApiManager(`/tasks/user-tasks/${user_id}?page=${page}&size=${pageSize}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        if (!response) {
            return [];
        }
        if (response.data.length === 0) {
            return [];
        }

        // Acessar os cabeçalhos da resposta para obter informações de paginação
        const totalCount = response.headers['x-total-count']; // Quantidade total de itens

        console.log(response);
        return {
            data: response.data,
            totalCount: totalCount,
        };
    } catch (error) {
        return false;
    }
}

const createTask = async (task, token) => {
    try {

        if (task.executionTime) {
            task.executionTime = new Date(task.executionTime).toISOString();
        }

        console.log(task, token);
        const response = await ApiManager("/tasks", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            data: task
        });

        // Verificar se a resposta foi bem-sucedida (código de status 201)
        if (response.status === 201) {
            return response.status;
        }
        return false;
    } catch (error) {
        console.error("Error creating task:", error);
        return false;
    }
};

const updateTask = async (task, token) => {
    try {
        if (task.executionTime) {
            task.executionTime = new Date(task.executionTime).toISOString();
        }

        const response = await ApiManager(`/tasks/${task.id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            data: task
        });

        // Verificar se a resposta foi bem-sucedida (código de status 200)
        if (response.status === 200) {
            return response.status;
        }
        return false;
    } catch (error) {
        console.error("Error updating task:", error);
        return false;
    }
}

const deleteTask = async (task, token) => {
    try {
        const response = await ApiManager(`/tasks/${task}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if(response.status === 204) {
            return response.status;
        }
    } catch (error) {
        console.error("Error deleting task:", error);
        return false;
    }
}

export { findAllTask, createTask, updateTask, deleteTask };