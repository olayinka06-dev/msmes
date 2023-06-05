import React from 'react';
import styled from 'styled-components'
import Navigation from '../component/Navigation';
import SideCompliance from '../SideCompliance';
import { BsBoombox, BsBuildings } from 'react-icons/bs';

const ProfileInformation = () => {
  return (
    <Wrapper>
        <Navigation/>
        <div className="container">
           <div className="top">
                <div className="left">
                    <h1>compliance</h1>
                    <p>fill your business personal information</p>
                </div>
                <div className="right"></div>
           </div>
            <main>
                <div className="first">
                    <SideCompliance/>
                </div>
                <div className="second">
                    <div className="doc-head">
                        <h1>documents</h1>
                        <p>your business documents stay here</p>
                    </div>
                    <div className="upload-container">
                        <div className="upload">
                            <div className="cover">
                               <div className='icon'><BsBoombox/></div> 
                                <div className="content">
                                    <h3>proof of address</h3>
                                    <p>upload your proof of your address to identify your information. you have options to choose from e.g nepa bills etc.</p>
                                    <div className="btn-group">
                                        <button>+ Upload</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="upload">
                            <div className="cover">
                                <div className='icon'><BsBuildings/></div>
                                <div className="content">
                                    <h3>business certificate</h3>
                                    <p>upload business certificate or any documents relevant to your business</p>
                                    <div className="btn-group">
                                        <button className='two'>+ Upload</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  padding-left: 250px;
  display: flex;
  flex-direction: column;
  gap: 20px;
main{
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 0 30px;
}
.first{
    width: 30%;
}
.second{
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.doc-head{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
p{
    color: rgba(0, 0, 0, 0.5);
}
.upload-container{
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
}
.upload{
    padding: 20px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}
.cover{
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
}
.icon{
    margin-top: 20px;
}
.icon svg{
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    font-size: 30px;
    cursor: pointer;
    color: var(--blue);
}
.btn-group{
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
}
.btn-group button{
    padding: 12px 25px;
    background-color: var(--blue);
    color: white;
    border-radius: 10px;
    border: none;
    cursor: pointer;
}
.two{
    position: relative;
    top: 25px;
}
.btn-group button:hover{
    background-color: #3939f7;
}
.content{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
`
export default ProfileInformation;