import React from 'react';
import styled from 'styled-components';
import Aside from './Aside';
import OwnersInfo from './OwnersInfo';

const Home = () => {
  return (
    <Wrapper>
        <Aside/>
        <OwnersInfo/>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    
`
export default Home;