import React from 'react';
import Aside from '../component/Aside';
import ProfileInformation from './ProfileInformation';
import styled from 'styled-components';

const Profile = () => {
  return (
    <Wrapper>
        <Aside/>
        <ProfileInformation/>
    </Wrapper>
  )
}
const Wrapper = styled.div`
`
export default Profile;