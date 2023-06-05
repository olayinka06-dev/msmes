import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import ownerData from './Owner';
import { BiPlus } from 'react-icons/bi';

const OwnersInfo = () => {
  return (
    <Wrapper>
     <div className="navigation">
      <Navigation/>
     </div>
      <div className="container">
        <div className="top">
          <div className="left">
            <h3>owners information</h3>
            <span>add co-founders or partners to the platform</span>
          </div>
            <button data-toggle="modal" data-target="#exampleModal"><BiPlus/> add owner</button>
        </div>
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success">Submit</button>
                <button type="button" className="btn btn-light" data-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>
        <main>
          <div className='row'>
            <span>owners info.</span>
            <span>email</span>
            <span>phone no.</span>
            <span>address</span>
          </div>
          {
            ownerData.map((own, index)=> (
              <div className='row' key={index}>
                <span>
                   <span>{own.name}</span>
                </span>
                <span>{own.email}</span>
                <span>{own.phone}</span>
                <span>{own.address}</span>
              </div>
            ))
          }
        </main>
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
  padding-left: 250px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .navigation{
    padding: 0 15px;
  }
  .container{
    padding: 0 15px;
    text-transform: capitalize;
  }
  main{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
  }
  main div{
    width: 100%;
    display: flex;
    flex-direction: row;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  main div:nth-of-type(1){
    background-color: var(--accent);
  }
  span img{
    transform: scale(100%);
    transition: all .5s ease;
    cursor: pointer;
  }
  span img:hover{
    transform: scale(110%);
  }
  main div span:nth-of-type(1), main div span:nth-of-type(1){
    width: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
    text-transform: capitalize;
  }
  main div span:nth-of-type(2), main div span:nth-of-type(3), main div span:nth-of-type(4){
    width: 20%;
    text-align: left;
    padding: 18px;
    border-radius: 10px;
  }
  .top{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-transform: capitalize;
  }
  .left{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
  .left p, td{
    color: rgba(0, 0, 0, 0.5);
  }
  .right{
    width: 100%;
    display: flex;
    align-items: flex-end;
  }
  button{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    background-color: var(--blue);
    color: white;
    padding: 12px 25px;
    width: 15%;
    border: none;
    border-radius: 10px;
    transition: all .5s ease;
    cursor: pointer;
  }
  button:hover{
    background-color: var(--navy);
  }
  button svg{
    color: white;
  }
  .modal-open {
    overflow: hidden;
  }
  
  .modal-open .modal {
    overflow-x: hidden;
    overflow-y: auto;
  }
  
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    display: none;
    width: 100%;
    height: 100%;
    overflow: hidden;
    outline: 0;
    background-color: rgba(0,0,0,0.3);
  }
  
  .modal-dialog {
    position: relative;
    // width: auto;
    width: 50%;
    margin: 10px;
    pointer-events: none;
  }
  
  .modal.fade .modal-dialog {
    transition: transform 0.4s ease;
    transform: translate(0, -50px);
  }
  
  @media (prefers-reduced-motion: reduce) {
    .modal.fade .modal-dialog {
      transition: none;
    }
  }
  
  .modal.show .modal-dialog {
    transform: none;
  }
  
  .modal.modal-static .modal-dialog {
    transform: scale(1.02);
  }
  
  .modal-dialog-scrollable {
    display: flex;
    max-height: calc(100% - 20px);
  }
  
  .modal-dialog-scrollable .modal-content {
    max-height: calc(100vh - 20px);
    overflow: hidden;
  }
  
  .modal-dialog-scrollable .modal-header,
  .modal-dialog-scrollable .modal-footer {
    flex-shrink: 0;
  }
  
  .modal-dialog-scrollable .modal-body {
    overflow-y: auto;
  }
  
  .modal-dialog-centered {
    display: flex;
    align-items: center;
    min-height: calc(100% - 20px);
  }
  
  .modal-dialog-centered::before {
    display: block;
    height: calc(100vh - 20px);
    content: "";
  }
  
  .modal-dialog-centered.modal-dialog-scrollable {
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
  
  .modal-dialog-centered.modal-dialog-scrollable .modal-content {
    max-height: none;
  }
  
  .modal-dialog-centered.modal-dialog-scrollable::before {
    content: none;
  }
  
  .modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #ffffff;
    background-clip: padding-box;
    border: 1px solid #dde4e9;
    border-radius: 0.3rem;
    outline: 0;
  }
  
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
  }
  
  .modal-backdrop.fade {
    opacity: 0;
  }
  
  .modal-backdrop.show {
    opacity: 0.5;
  }
  
  .modal-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid #dde4e9;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
  }
  
  .modal-header .close {
    padding: 1rem 1rem;
  }
  
  .modal-title {
    margin-bottom: 0;
    line-height: 1.5;
  }
  
  .modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 0.9375rem;
  }
  
  .modal-footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    padding: 0.6875rem;
    border-top: 1px solid #dde4e9;
    border-bottom-right-radius: calc(0.3rem - 1px);
    border-bottom-left-radius: calc(0.3rem - 1px);
  }
  
  .modal-footer > * {
    margin: 0.25rem;
  }
  
  .modal-scrollbar-measure {
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll;
  }
  
  @media (min-width: 576px) {
    .modal-dialog {
      max-width: 500px;
      margin: 30px auto;
    }
    .modal-dialog-scrollable {
      max-height: calc(100% - 60px);
    }
    .modal-dialog-scrollable .modal-content {
      max-height: calc(100vh - 60px);
    }
    .modal-dialog-centered {
      min-height: calc(100% - 60px);
    }
    .modal-dialog-centered::before {
      height: calc(100vh - 60px);
    }
    .modal-sm {
      max-width: 300px;
    }
  }
  
  @media (min-width: 992px) {
    .modal-lg,
    .modal-xl {
      max-width: 90%;
    }
  }
  
  @media (min-width: 1200px) {
    .modal-xl {
      max-width: 1140px;
    }
  }

`
export default OwnersInfo;