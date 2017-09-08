import { h } from 'preact';
import * as utils from '../../utils';
import './Profile.less';

const Profile = ({ children,...props }) => {
  const {user} =props;
    return(
      <div class="profile">
        <img class="profile__photo" src={user.avatar_url} alt=""/>
        <p className="profile__name">{user.name}</p>
        <p className="profile__nick">{user.login}</p>
        {
          user.bio && <p className="profile__bio">
            {utils.trimText(user.bio,315)}
          </p>
        }
      </div>
  );
}

export default Profile;
