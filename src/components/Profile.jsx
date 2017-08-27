import { h } from 'preact';
import './Profile.less';
const Profile = ({ children,...props }) => {
    return(
      <div class="profile">
        <img class="profile__photo" src="https://ichef.bbci.co.uk/images/ic/960x540/p05341jk.jpg" alt=""/>
        <p className="profile__name">Leanna</p>
        <p className="profile__nick">leaweller</p>
        <p className="profile__bio">
          Front-end Engineer & UI/UX Designer at @YouScan • Organiser of @reactkyiv meetup •
          In love with ReactJS ⚛, coffee :coffee: and baking :cake:
        </p>
      </div>
  );
}

export default Profile;
