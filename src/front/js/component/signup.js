import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Signup = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('https://bug-free-palm-tree-4g5w47r4j49fjrjr-3001.app.github.dev/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Signup successful:', data);
            // Redirigir al usuario a /login
            navigate('/login');
        } else {
            const errorData = await response.json();
            console.error('Signup failed:', errorData);
            alert('Usuario ya existe');
            // Puedes mostrar un mensaje de error aquí si lo deseas
        }
    };

    return (
        <div className="container mt-auto py-3 text-center" style={{ maxWidth: '750px', width: '100%' }}>
            <p>Registro</p>
            <div className="border rounded p-4" style={{ backgroundColor: '#007bff', color: '#fff' }}>
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-12">
                        <label htmlFor="inputEmail" className="visually-hidden">Email</label>
                        <input
                            type="email"
                            className="form-control mb-2"
                            id="inputEmail"
                            value={email}
                            placeholder="Correo electrónico"
                            onChange={(e) => setEmail(e.target.value)} // Agrega onChange
                            required
                        />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputPassword" className="visually-hidden">Contraseña</label>
                        <input
                            type="password"
                            className="form-control mb-2"
                            id="inputPassword"
                            value={password}
                            placeholder="Contraseña"
                            onChange={(e) => setPassword(e.target.value)} // Agrega onChange
                            required
                        />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-light">Iniciar sesión</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
