import React, { useState } from "react";
import CreateWorkspaceBtn from "./CreateWorkspaceBtn";

// import styles from "./ThirdSlide.module.css";
import styled from "styled-components";
import MainPage from "./MainPage";

const ThirdSlide = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const selectHandler = () => {
    setIsSelected(true);
    console.log("selected");
  };

  return (
    <ThirdslideWrapper isSelected={isSelected}>
      <div className="thirdSlide">
        <div className="tsheader">
          <h1>How are you planning to use Eden?</h1>
          <h4>We'll streamline your setup experience accordingly</h4>
          <div className="tsContainers">
            <div onClick={selectHandler} tabIndex="0" className="tsContainer">
              <img
                className="userIcon"
                src="userBlack.png"
                alt=""
                width={25}
                height={25}
                style={{ marginRight: "100px" }}
              />
              <p>
                <strong>For myself</strong>
              </p>
              <p
                style={{
                  color: "GrayText",
                }}
              >
                Write better. Think more clearly. Stay organized.
              </p>
            </div>
            <div tabIndex="0" onClick={selectHandler} className="tsContainer">
              <img
                className="groupIcon"
                src="groupBlack.png"
                alt=""
                width={25}
                height={25}
                style={{ marginRight: "100px" }}
              />
              <p>
                <strong>With my team</strong>
              </p>
              <p
                style={{
                  color: "GrayText",
                }}
              >
                Wikis, docs, tasks & <br /> project, all in one <br />
                place.
              </p>
            </div>
          </div>
          <CreateWorkspaceBtn
            moveNext={isSelected}
            stepChangeHandler={props.stepChangeHandler}
          />
        </div>
      </div>
    </ThirdslideWrapper>
  );
};

const ThirdslideWrapper = styled.div`
  .thirdSlide {
    display: flex;
    flex-direction: column;
    width: 600px;
    height: fit-content;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // border: 1px solid black;
    align-items: center;
    margin-top: 50px;
  }
  .tsheader > h1 {
    margin-bottom: 10px;
  }
  .tsheader > h4 {
    text-align: center;
    color: gray;
  }
  .tsContainers {
    display: flex;
    // margin-left: 60px;
    margin-bottom: 30px;
  }
  .tsContainer {
    border: 0.1px solid gray;
    margin: 9px;
    height: 200px;
    width: 185px;
    cursor: pointer;
    border-radius: 5px;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;
  }
  .tsContainer:focus {
    border: 2px solid #7c4ddb;
  }
  .tsContainer:hover .userIcon {
    color: blue;
  }

  .tsButton {
    height: 55px;
    width: 73%;
    position: relative;
    left: 70px;
    color: white;
    background-color: #7c4ddb;
    border-radius: 8px;
  }
`;

export default ThirdSlide;
