import './style.css'

const Container = () => {

    return (
        <div className="container">
            <div className="nav">
                <button id="menuToggle"><i class='bx bx-menu'></i></button>
                <div className="search">
                <i class='bx bx-search' ></i>
                <input type="text" placeholder="search" />
                </div>
                <button>Search</button>
            </div>
        </div>

    );
}

export default Container