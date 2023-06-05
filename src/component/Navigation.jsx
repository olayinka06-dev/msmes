import React from 'react';
import {GrNotification} from 'react-icons/gr';
import styled from 'styled-components';
import logo from './Images/Ellipse 1.png';


const Navigation = () => {
  return (
    <Wrapper>
        <div className="container">
            <div className="search">
                <input type="search" placeholder='search' name="" id="" />
            </div>
            <div className="details">
                <span><GrNotification/></span>
                <img src={logo} alt="owner" />
                <p>hi, john doe</p>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
    .container{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        text-transform: capitalize;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        padding: 10px;
        height: 10vh;
    }
    .search{
        width: 100%;
        padding-right: 30px;
    }
    input{
        width: 100%;
        padding: 12px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        outline-color: var(--blue);
    }
    .details{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        gap: 7px;
    }
    .details img{
        height: 40px;
    }
`
export default Navigation;