import { Link } from 'react-router-dom'
import './styles.css'

function Login() {
    return (
        <>
        <body>
        <div className="containerLogin">
           <div className="wrapper">
            <form action="">
                <h1>LOGIN</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' required/>
                <i class='bx bxs-user'></i>
            </div>

            <div className="input-box">
                <input type="password" placeholder='Password' required/>
                <i class='bx bxs-lock-alt'></i>
            </div>


            <div className="remember-forgot">
                <label htmlFor="">
                    <input type="checkbox" /> Relembre-me
                </label>
                <a href="#">Esqueceu a Senha?</a>
            </div>

            
                <Link className='link' to='/Home'> 
                <button type='subimit' className='btn'>Login  </button> </Link>

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