import BASE_URL from "../ApiManager";

const Authenticate = async (username, password, remenberMe) => {
    const response = await fetch(`${BASE_URL}/authenticate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, remenberMe }),
    });
    console.log(response);
    if (response.status === 200) {
        return response.data;
    }
    throw new Error('Invalid credentials');
    };

export default Authenticate;