import React from 'react';
import { Container, Box } from 'bloomer';
import './ProfileCardList.css';

const ProfileCard = props => {
  const { user } = props;
  return (
    <Container>
      <Box className="Info">
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
        />
        <i class="fas fa-user"></i>


        <p>
          {user.name.first} {user.name.last}
        </p>
        <p>
          {user.location.country}
        </p>
        <p className="Email">
          {user.email}
        </p>
      </Box>
    </Container>
  );
};

export default ProfileCard;
