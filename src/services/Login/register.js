import ApiManager from "../ApiManager";

const Register = async (firstName, lastName, login, password, email) => {

    try {
        console.log(firstName, lastName, login, password, email);

        const user = {
            "password": password,
            "email": email,
            "login": login,
            "firstName": firstName,
            "lastName": lastName,
        }

        const response = await ApiManager("/register-user-for-tasks", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(user),
        });
        // console.log(response.data);
        if (response.status === 200) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log('Error:', error.response.data.message);
        if (error.response.data.message === "error.userexists") {
            // console.log('Login já em uso, tente um diferente');
            return 1;
        }
        if (error.response.data.message === "error.emailexists") {
            return 2;
        }
        return false;
    }


}

export default Register;