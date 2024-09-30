import { Link } from 'react-router-dom'
import './styles.css'

 function Navbar() {

    return (
        <body>
        <div className="sidebar">
        <Link className='link' to='/Home'>HOME</Link> 
        
      <div className="side-nav">

        <div className="item active">
          <i class='bx bx-leaf'></i>
            <Link className='link' to='/Home'>Comunidades</Link>
        </div>

        <div className="item active">
          <i class='bx bx-objects-vertical-bottom'></i>
            <Link className='link' to='/Dashbord'>Dados de Recurso</Link>
        </div>

        <div className="item">
          <i class='bx bx-bell'></i>
            <Link className='link' to='#'>Notifications</Link>
        </div>

        <div className="item">
          <i class='bx bx-cog'></i>
            <Link className='link' to='#'>Settings</Link>
        </div>

      </div>
        
        <div className="side-profile">
            <i class='bx bx-user' ></i>
            <Link className='link' to="/Login">Usuario</Link>
        </div>

      </div>
      </body>
    )
 }

 export default Navbar