import { Link } from 'react-router-dom'
import './styles.css'

 function Navbar() {

    return (
        <div className="sidebar">
    <Link className='link' to='/Home'>HOME</Link> 
    
    <div className="side-nav">
        <div className="item active">
            <i className='bx bx-leaf'></i>
            <Link className='link' to='/Home'>Comunidades</Link>
        </div>
        <div className="item active">
            <i className='bx bx-objects-vertical-bottom'></i>
            <Link className='link' to='/Dashbord'>Dados de Recurso</Link>
        </div>
        <div className="item">
            <i className='bx bx-bell'></i>
            <Link className='link' to='#'>Notifications</Link>
        </div>
        <div className="item">
            <i className='bx bx-cog'></i>
            <Link className='link' to='/Settings'>Settings</Link>
        </div>
    </div>
    
    <div className="side-profile">
        <i className='bx bx-user'></i>
        <Link className='link' to="/Login">Usuario</Link>
    </div>
</div>
    
    )
 }

 export default Navbar