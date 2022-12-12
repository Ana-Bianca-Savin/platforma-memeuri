import SaltyMEME from './Assets/SaltyMEME.png'

const Description = () => {

    const handleUpload = () => {
        document.getElementById('UploadFormular').scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center'
        });
    }

    return ( 
        <div className="container mt-5">
            <div className="row align-items-center g-0">
                <div className="col text-center mt-5">
                    <h1 className="description-title">Partajarea de meme-uri nu a fost niciodată mai simplă!</h1>
                    <div className="description">
                        Platforma ideală pentru studenții de la Politehnică, amuzați de câte materii o să pice semestrul asta.
                    </div>
                    <button onClick={ handleUpload } className="btn btn-dark btnUpload btn-lg btn-block mt-3">
                        Upload a MEME
                    </button>
                </div>
                <div className="col">
                    <img src={ SaltyMEME } alt="MEMEIT?"/>
                </div>
            </div>
        </div>
     );
}
 
export default Description;