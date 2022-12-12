import InstagramIcon from './Assets/InstagramIcon.png'
import TwitchIcon from './Assets/TwitchIcon.png'
import FacebookIcon from './Assets/FacebookIcon.png'

const Footer = () => {
    return ( 
        <div className="container-fluid footerBox mt-5 p-0">
            <div className="d-flex justify-content-center">
                <div className="row align-items-center pt-5 g-2">
                    <div className="col">
                        <a href="https://www.instagram.com/lsacbucuresti/"><img src={ InstagramIcon } alt="Instagram link"/></a>
                    </div>
                    <div className="col">
                        <a href="https://www.twitch.tv/lsac_bucuresti"><img src={ TwitchIcon } alt="Twitch link"/></a>
                    </div>
                    <div className="col">
                        <a href="https://www.facebook.com/LsacBucuresti/"><img src={ FacebookIcon } alt="Facebook link"/></a>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center copyright mt-3 pb-5">
                Copyright 2022 | La muncă, nu la întins mâna.
            </div>
        </div>
     );
}
 
export default Footer;