import logo from "./logo.svg";
import "./App.css";
import FirstSlide from "./Components/FirstSlide";
import SecondSlide from "./Components/SecondSlide";
import ThirdSlide from "./Components/ThirdSlide";
import FourthSlide from "./Components/FourthSlide";
import "antd/dist/antd.css";
import { Steps } from "antd";
import { useState } from "react";
import MainPage from "./Components/MainPage";
import CreateWorkspaceBtn from "./Components/CreateWorkspaceBtn";

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const stepChangeHandler = () => {
    // if (currentStep < 4) {
    setCurrentStep((prevState) => prevState + 1);
    // } else {
    //   setCurrentStep(0);
    // }
  };
  const getContents = () => {
    console.log(currentStep);
    let component;
    switch (currentStep) {
      case 0:
        component = <FirstSlide stepChangeHandler={stepChangeHandler} />;
        break;
      case 1:
        return <SecondSlide stepChangeHandler={stepChangeHandler} />;
        break;
      case 2:
        return <ThirdSlide stepChangeHandler={stepChangeHandler} />;
        break;
      case 3:
        return <FourthSlide />;
        break;
      default:
        return;
    }
    console.log(component);
    return component;
  };
  return (
    <div className="App">
      <MainPage currentStep={currentStep} />
      {getContents()}
    </div>
  );
}

export default App;
