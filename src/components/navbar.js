import '../styles/navbar.css'

function navbar(){
    return(
        <div className='navbar-top'>
            <ul className="nav-list">
                <li className="nav-item">
                <a href="">Logo</a>
                </li>
                <li className="nav-item">
                <a href="">About</a>
                </li>
                <li className="nav-item">
                <a href="">Work</a>
                </li>
                <li className="nav-item">
                <a href="">Contact</a>
                </li>
                <li className="nav-item">
                    <button className='btn-primary'> Donate </button>
                </li>
            </ul>
        </div>

    );
}

export default navbar;