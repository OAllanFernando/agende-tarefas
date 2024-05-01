import ApiManager from "./ApiManager";

const findAllTag = async (user_id, token, page, pageSize) => {
    try {
        const response = await ApiManager(`/tags/user-tags/${user_id}?page=${page}&size=${pageSize}`, {
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
        const totalCount = response.headers['x-total-count']; // Quantidade total de itens
        return {
            data: response.data,
            totalCount: totalCount,
        };
    } catch (error) {
        return false;
    }
}

const findAllTagWithoutPages = async (user_id, token) => {
    try {
        const response = await ApiManager(`/tags/user-tags/${user_id}`, {
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
        const totalCount = response.headers['x-total-count']; // Quantidade total de itens
        return {
            data: response.data,
            totalCount: totalCount,
        };
    } catch (error) {
        return false;
    }
}

const deleteTag = async (tag_id, token) => {
    try {
        const response = await ApiManager(`/tags/${tag_id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        if (response.status === 204) {
            return response.status;
        }
    } catch (error) {
        console.error("Error deleting task:", error);
        return false;
    }
}

const createTag = async (tag, token) => {
    try {
        const response = await ApiManager(`/tags`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: tag
        });
        if (response.status === 201) {
            return response.status;
        }
    }
    catch (error) {
        console.error("Error creating task:", error);
        return false;
    }
}

const updateTag = async (tag, token) => {
    try {
        const response = await ApiManager(`/tags/${tag.id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: tag
        });
        if (response.status === 200) {
            return response.status;
        }
    }
    catch (error) {
        console.error("Error creating task:", error);
        return false;
    }
}

export {
    findAllTag, deleteTag, createTag, updateTag, findAllTagWithoutPages
}