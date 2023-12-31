import CTA from './CTA'
import profileImg from '../images/profile-img.png'
function Profile(){
    return(
        <div className="profile">
            <div className="profile-img">
                <img src={profileImg} alt="profile-img" />
            </div>
            <div className="profile-info">
                <p className="profile-name">Alisha Bhale</p>
                <p className="profile-occupation">Frontend Developer</p>
                <p className="profile-website">https://alishabhale.github.io/portfolio/</p>
            </div>

            <CTA />
        </div>
    );
}
export default Profile;