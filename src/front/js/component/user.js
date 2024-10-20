import React, {useEffect} from "react";
import "../../styles/home.css";


export const User = () => {

    const fetchProtectedData = async () => {
        const token = localStorage.getItem('token');
    
        const response = await fetch('https://bug-free-palm-tree-4g5w47r4j49fjrjr-3001.app.github.dev/api/private', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Protected data:', data);
        } else {
            const errorData = await response.json();
            console.error('Failed to fetch protected data:', errorData);
        }
    };
    
    useEffect(() => {
        fetchProtectedData();
    }, []);

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
				Login exitoso
			</p>
            <h1>El secreto es: <strong>Odio a Arnaldo!! jaja</strong></h1>
		</div>
	);
};
