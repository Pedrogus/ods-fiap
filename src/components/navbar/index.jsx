import './navbar.css'

 function Navbar() {

    return (
        <body>
        <div className="sidebar">
        <a href='/Home'>HOME</a> 
        
      <div className="side-nav">

        <div className="item active">
          <i class='bx bx-leaf'></i>
            <a href='/Home'>Comunidades</a>
        </div>

        <div className="item active">
          <i class='bx bx-objects-vertical-bottom'></i>
            <a href='/Dashbord'>Dados de Recurso</a>
        </div>

        <div className="item">
          <i class='bx bx-bell'></i>
            <a href='#'>Notifications</a>
        </div>

        <div className="item">
          <i class='bx bx-cog'></i>
            <a href='#'>Settings</a>
        </div>

      </div>
        
        <div className="side-profile">
            <i class='bx bx-user' ></i>
            <a href="/Login">Usuario</a>
        </div>

      </div>
      </body>
    )
 }

 export default Navbar