import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './styles.css'

function Login() {

    const[username, setUser] = useState('');
    const[password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const handleSubimit = (event) => {
        event.preventDefault();


        if( !username || !password) {
            setError('Prencha o formulario')
            return;
        }

        setError('')

        navigate('/home', {state: {username}});
    };
        

    return (
        <>
        <body>
        <div className="containerLogin">
           <div className="wrapper">
            <form onSubmit={handleSubimit}>
                <h1>LOGIN</h1>
            <div className="input-box">
                <input type="text" 
                value={username} 
                onChange={(e) => setUser(e.target.value)} />
                <i class='bx bxs-user'></i>
            </div>

            <div className="input-box">
                <input type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}/>
                <i class='bx bxs-lock-alt'></i>
            </div>


            <div className="remember-forgot">
                <label htmlFor="">
                    <input type="checkbox" /> Relembre-me
                </label>
                <a href="#">Esqueceu a Senha?</a>
            </div>

            
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type='subimit' className='btn'>  
                    <Link className='link' to='/Home'/> Login</button>

            <div className="register-link">
                <p>Não tem uma conta? <a href="#">REGISTRE-SE</a></p>
            </div>

            </form>

           </div>
           </div>
     </body>
        </>
    )
}

export default Login