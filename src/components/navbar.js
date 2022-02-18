import '../styles/navbar.css'

function navbar(){
    return(
        <div className='navbar-top'>
            <nav className='navbar'>
                <div className='brand-title'> LOGO </div>
                <div className='navbar-links'>
                    <ul>
                        <li><a href='#'> Home </a></li>
                        <li><a href='#'> About </a></li>
                        <li><a href='#'> Contact </a></li>
                    </ul>
                </div>

            </nav>
        </div>

    );
}

export default navbar;