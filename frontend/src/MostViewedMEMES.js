import MEME1 from './Assets/MEME1.png'
import MEME2 from './Assets/MEME2.png'
import MEME3 from './Assets/MEME3.png'

const MostViewedMEMES = () => {
    return ( 
        <div className="container">
            <div className="d-flex my-5">
                <h2 className="description-title">
                    Most Viewed
                </h2>
            </div>
            <div className="row gy-5">
                <div className="col">
                    <img src={ MEME1 } alt="MEME1"/>
                </div>
                <div className="col">
                    <img src={ MEME2 } alt="MEME2"/>
                </div>
                <div className="col">
                    <img src={ MEME3 } alt="MEME3"/>
                </div>
            </div>
        </div>
     );
}
 
export default MostViewedMEMES;