import ApiManager from "./ApiManager";


const getGraphic = async (userId, token) => {
    try {
        const response = await ApiManager(`/tasks/rel/${userId}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response) {
            return [];
        }
        if (response.data.length === 0) {
            return [];
        }
        return response.data;
    }
    catch (error) {
        return false;
    }
}

const getTagGraphic = async (userId, token) => {
    try {
        const response = await ApiManager(`/tasks/rel/${userId}/solved`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response) {
            return [];
        }
        if (response.data.length === 0) {
            return [];
        }
        return response.data;
    }
    catch (error) {
        return false;
    }
}

export {
    getGraphic,
    getTagGraphic
};

