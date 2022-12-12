const UploadMEME = () => {
    return ( 
        <div className="container-fluid mt-5 p-0">
            <div className="d-flex uploadBox justify-content-center">
                <div className="card shadow-lg rounded-4 my-5">
                    <div className="card-body">
                        <div className="row align-items-center p-3">
                            <div className="col">
                                <h3 className="description-title" id="UploadFormular">Ai tupeu și crezi că ești amuzant?</h3>
                                <div className="description">
                                    Trimite-ne un mail și poate ai noroc să ne apuce râsul când îți vedem meme-ul.
                                </div>
                            </div>
                            <div className="col">
                                <div className="col">
                                    <form action="">
                                        <label htmlFor="desc" className="form-label description-title">Descriere</label>
                                        <input id="desc" type="text" className="form-control formBox" 
                                        placeholder="descriere" required/>

                                        <label htmlFor="MEME" className="form-label description-title mt-3">Meme(jpg, jpeg, png, gif)</label>
                                        <textarea id="MEME" type="" alt="your image" className="form-control formBox" 
                                        placeholder="drag & drop image or click to upload" rows="4" required/>

                                        <div className="d-flex justify-content-center">
                                            <button type="submit" className="btn btn-dark btnUpload m-4">Trimitere</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default UploadMEME;