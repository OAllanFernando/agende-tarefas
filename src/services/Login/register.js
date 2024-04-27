import BASE_URL from "../ApiManager";

const Register = async (firstName, lastName, login, password, email) => {
    const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, login, password, email }),
    });
    console.log(response);
    if (response.status === 200) {
        return true;
    } else {
        return false;
    }
}

export default Register;