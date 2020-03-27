import React from 'react';
import ProfileCard from './ProfileCard';
import './ProfileCardList.css';
import { Container, Box } from 'bloomer';

const ProfileCardList = props => {
  const { userData } = props;
  return (
    <ul className="ProfileCardList">
      {userData.length > 0 ? (
        userData.map(user => (
          <li className="ProfileCard" key={user.login.uuid}>
            <ProfileCard user={user} />
          </li>
        ))
      ) : (
          <li>No User Data</li>
        )}
    </ul>
  );
};

export default ProfileCardList;
