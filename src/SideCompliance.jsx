import React from 'react'
import styled from 'styled-components';

const SideCompliance = () => {
  return (
    <Wrapper>
        <div className="container">
            <div className="center">
                <div className="label">
                    <span>1</span>
                    <p>business information</p>
                </div>
                <div className="label">
                    <span>2</span>
                    <p>owners information</p>
                </div>
                <div className="label">
                    <span>3</span>
                    <p>contact details</p>
                </div>
                <div className="label">
                    <span>4</span>
                    <p>documents</p>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
.container{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}
.center{
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 50px 30px;
}
.label{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
}
`
export default SideCompliance;