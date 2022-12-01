import MEMEIT from './MEMEITTEXT.png'

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand">
            <div className="container">
                <img src={ MEMEIT } alt="MEMEIT?" class="navbar-brand"/>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <button className="btn">Logare</button>
                    </li>
                    <li className="nav-item">
                        <button className="btn">Creare cont</button>
                    </li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;