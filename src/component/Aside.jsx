import React, { useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import logo from './Images/Ellipse 1.png';
import {AiFillProfile, AiOutlineContacts, AiOutlineCustomerService, AiOutlineTeam, AiOutlineWeiboCircle} from 'react-icons/ai'
import { BiPhone } from 'react-icons/bi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TiDocumentText } from 'react-icons/ti';
import { BsPersonCheck, BsBuildings } from 'react-icons/bs'
import { AiOutlineSetting } from 'react-icons/ai';
import { GrGroup, GrDocumentVerified, GrProjects } from 'react-icons/gr'

const Aside = () => {
    const [dropDown, setDropDown] = useState(false);
    const [activeLink, setActiveLink] = useState("compliance");
    const [dropActive, setDropActive] = useState("owner");
  return (
    <Wrapper>
        <div className="container">
            <div className='logo_div'>
                Logo
            </div>
            <div className="profile">
                <div>
                <img src={logo} alt="owner" />
                </div>
                <h3>john doe</h3>
                <span>owner</span>
            </div>
            <div className="aside_menu">
                <h3>ACCOUNT</h3>
                <div className="menu">
                    <li className={activeLink ==='compliance' ? "active" : ""} onClick={()=> setDropDown(!dropDown)}>
                        <Link onClick={()=> setActiveLink("compliance")}><GrProjects className='icon'/> compliance <span style={{float: "right", marginTop: "5px"}}>{dropDown ? <MdKeyboardArrowDown/> : <MdKeyboardArrowDown/>}</span></Link>
                    </li>
                    <li className={`${dropDown ? "isdrop notdrop" : "isdrop"}`}>
                        <span className={dropActive ==='business' ? "inner_active" : ""}>
                            <Link onClick={()=> setDropActive("business")}><BsBuildings/> business information</Link>
                        </span>
                        <span className={dropActive ==='owner' ? "inner_active" : ""}>
                            <Link onClick={()=> setDropActive("owner")}><BsPersonCheck/> Owners information</Link>
                        </span>
                        <span className={dropActive ==='contact' ? "inner_active" : ""}>
                            <Link onClick={()=> setDropActive("contact")}><BiPhone/> contact details</Link>
                        </span>
                        <span className={dropActive ==='document' ? "inner_active" : ""}>
                            <Link onClick={()=> setDropActive("document")}><TiDocumentText/> documents</Link>
                        </span>
                    </li>
                    <li className={activeLink ==='profile' ? "active" : ""}>
        
                        <Link to={'/profile'} onClick={()=> setActiveLink("profile")}><AiFillProfile className='icon'/> profile</Link>
                    </li>
                    <li className={activeLink ==='datails' ? "active" : ""}>
                        <Link onClick={()=> setActiveLink("datails")}><GrDocumentVerified className='icon'/> business detail</Link>
                    </li>
                    <li className={activeLink ==='team' ? "active" : ""}>
                        <Link onClick={()=> setActiveLink("team")}><GrGroup className='icon'/> team</Link>
                    </li>
                    <li className={activeLink ==='settings' ? "active" : ""}>
                        <Link onClick={()=> setActiveLink("settings")}><AiOutlineSetting className='icon'/> settings </Link>
                    </li>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.aside`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
    .container{
        width: 250px;
        padding: 10px;
        position: fixed;
        top: 0;
        left: 0;
        overflow: hidden;
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        text-transform: capitalize;
        min-height: 100vh;
    }
    .logo_div{
        text-align: center;
        width: 100%;
        background-color: var(--accent);
        padding: 10px;
    }
    .logo{
        text-align: center;
        width: 100% !important;
    }
    .profile{
        text-align: center;
        margin-top: 5px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .profile span {
        padding: 10px;
        text-align: center;
        background-color: var(--accent);
    }
    .aside_menu{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .aside_menu h3{
        color: rgba(0, 0, 0, 0.4);
    }
    .menu{
        width: 100%;
        display: flex;
        flex-direction: column;
        /* gap: 20px; */
    }
    li{
        list-style: none;
    }
    li a{
        color: black;
        font-size: 18px;
        text-decoration: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        margin-top: 15px;
        transition: all .5s ease;
    }
    li a:hover{
        color: var(--blue);
    }
    li a .icon:hover{
        color: var(--blue);
    }
    li.active{
        color: var(--blue);
    }
    li.active a{
        color: var(--blue);
    }
    li a.active .icon{
        color: var(--blue);
    }
    span a{
        color: rgba(0, 0, 0, 0.5) !important;
        font-size: 16px;
        text-decoration: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        line-height: 7px;
        padding: 10px;
        margin-top: 0px !important;
        transition: all .5s ease;
    }
    span.inner_active a, span a:hover{
        background-color: var(--accent);
    }
    .isdrop{
        height: 0;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        width: 100%;
        transition: all 1s ease;
        padding-left: 10px;
    }
    .notdrop{
        height: 22vh;
    }
`
export default Aside;