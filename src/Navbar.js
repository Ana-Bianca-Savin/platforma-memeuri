import MEMEIT from './Assets/MEMEITTEXT.png'
import CLOSE from './Assets/CloseModal.png'

const Navbar = () => {
    return (
        <>
        <div className="modal fade" id="modalLogare">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <img src={ MEMEIT } alt="MEMEIT?"/>
                        <button className="btn" data-bs-dismiss="modal">
                            <img src={ CLOSE } alt="CloseModal"/> 
                        </button>
                    </div> 
                    <div className="modal-body uploadBox justify-content-center">
                        <div className="card shadow-lg rounded-3 m-3">
                            <div className="card-body py-5">
                                <h3 className="modalText text-center">Welcome back</h3>

                                <form className="mx-5 mt-4" action="">
                                    <label htmlFor="user" className="form-label modal-forms-title">Username</label>
                                    <input id="user" type="text" className="form-control formBox" 
                                    placeholder="username" required/>

                                    <label htmlFor="parola" className="form-label modal-forms-title mt-2">Parolă</label>
                                    <input id="parola" type="text" className="form-control formBox"
                                    placeholder="parolă" required/>


                                    <div className="d-flex justify-content-center">
                                        <button type="submit" className="btn btn-dark btnUpload m-4">Logare</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>

        <div className="modal fade" id="modalCreareCont">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <img src={ MEMEIT } alt="MEMEIT?"/>
                        <button className="btn" data-bs-dismiss="modal">
                            <img src={ CLOSE } alt="CloseModal"/> 
                        </button>
                    </div> 
                    <div className="modal-body uploadBox justify-content-center">
                        <div className="card shadow-lg rounded-3 m-3">
                            <div className="card-body py-5">
                                <h3 className="modalText text-center">Welcome</h3>

                                <form className="mx-5 mt-4" action="">
                                    <label htmlFor="user" className="form-label modal-forms-title">Username</label>
                                    <input id="user" type="text" className="form-control formBox" 
                                    placeholder="username" required/>

                                    <label htmlFor="email" className="form-label modal-forms-title mt-2">Email</label>
                                    <input id="email" type="text" className="form-control formBox"
                                    placeholder="email" required/>

                                    <label htmlFor="parola" className="form-label modal-forms-title mt-2">Parolă</label>
                                    <input id="parola" type="text" className="form-control formBox"
                                    placeholder="parolă" required/>


                                    <div className="d-flex justify-content-center">
                                        <button type="submit" className="btn btn-dark btnUpload m-4">Creare Cont</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
        
        <nav className="navbar navbar-expand fixed-top bg-white">
            <div className="container">
                <img src={ MEMEIT } alt="MEMEIT?" className="navbar-brand"/>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <button className="btn navbarButtons" data-bs-toggle="modal" data-bs-target="#modalLogare">
                                Logare
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="btn navbarButtons" data-bs-toggle="modal" data-bs-target="#modalCreareCont">
                                Creare cont
                        </button>
                    </li>
                </ul>
                
                
            </div>
        </nav>
        </>
     );
}
 
export default Navbar;