import React from "react";
import styled from "styled-components";
import { Steps } from "antd";

const MainPage = ({ currentStep }) => {
  const { Step } = Steps;
  return (
    <MainPageWrapper>
      <div className="mainpage">
        <img className="edenLogo" src="eden.png" alt="logo" />
        <Steps style={{ marginBottom: "20px" }} current={currentStep}>
          <Step />
          <Step />
          <Step />
          <Step />
        </Steps>
      </div>
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.div`
  margin-bottom: -50px;
  .mainpage {
    height: 150px;
    width: 400px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .edenLogo {
    width: 110px;
    height: 50px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default MainPage;
