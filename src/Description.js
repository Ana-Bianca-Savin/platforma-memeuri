import SaltyMEME from './SaltyMEME.png'

const Description = () => {
    return ( 
        <div className="container">
            <div className="row align-items-center g-0">
                <div className="col">
                    <div className="text-center">
                        <div className="row row-cols-1 align-items-center gy-3">
                            <div className="col">
                                <h1 className="description-title">Partajarea de meme-uri nu a fost niciodată mai simplă!</h1>
                                 <div className="description">
                                    Platforma ideală pentru studenții de la Politehnică, amuzați de câte materii o să pice semestrul asta.
                                </div>
                            </div>
                            <div className="col">
                                <button className="btn btn-dark btn-lg btn-block">
                                    Upload a MEME
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <img src={ SaltyMEME } alt="MEMEIT?"/>
                </div>
            </div>
        </div>
     );
}
 
export default Description;