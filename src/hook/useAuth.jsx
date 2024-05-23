import Cookies from "js-cookie"

export const RegisterAuth = async (credentials, setAuth, setError) => {
    try {
        const response = await fetch('http://localhost:3000/auth/tienda/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        const data = await response.json();

        if (!response.ok) {
            return setError(data.message)
        }

        const token = data.token;

        setAuth(true);

        // Store static values in Cookies
        Cookies.set('token-tienda', token, { expires: 5 });
    } catch (err) {
        setError('Error en el login: ' + err.message);
    }
};

export const LoginAuth = async (credentials, setAuth, setError) => {
    try {
        const response = await fetch('http://localhost:3000/auth/tienda/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        const data = await response.json();

        if (!response.ok) {
            return setError(data.message)
        }

        const token = data.token;

        setAuth(true);

        // Store static values in Cookies
        Cookies.set('token-tienda', token, { expires: 5 });
    } catch (err) {
        setError('Error en el login: ' + err.message);
    }
};

export const LogoutAuth = async (setAuth, setError) => {
    try {
        const response = await fetch('http://localhost:3000/auth/logout', {
            method: 'GET',
        });

        const data = await response.json();

        if (!response.ok) {
            return setError(data.message)
        }

        setAuth(false);

        Cookies.remove("token-tienda");
    } catch (err) {
        setError("Error al cerrar sesion: " + err.message )
    }
}