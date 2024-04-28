import ApiManager from "../ApiManager";

const Authenticate = async (username, password, rememberMe) => {
    try {
        // Calcular o comprimento do corpo da solicitação
        const response = await ApiManager("/authenticate", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            data: JSON.stringify({ username, password, rememberMe }),
            timeout: 10000,
        });

        console.log(response);
        if (response.status === 200) {
            return response.data;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
};

const findMyUser = async (token) => {
    try {
        const response = await ApiManager("/account", {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        if (response.status === 200) {
            return response.data;
        } else {
            return false;
        }
    }
    catch (error) {
        console.error('Error:', error);
        return false;
    }
}

export {
    Authenticate,
    findMyUser
};