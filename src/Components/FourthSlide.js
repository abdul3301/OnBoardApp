import React from "react";
import styles from "./FourthSlide.module.css";
import { CheckCircleFilled } from "@ant-design/icons";
import MainPage from "./MainPage";

const FourthSlide = () => {
  return (
    <div className={styles.fourthSlide}>
      {/* <MainPage /> */}
      {/* <img className={styles.edenLogo} src="eden.png" alt="logo" /> */}
      <CheckCircleFilled style={{ color: "#7c4ddb", fontSize: "50px" }} />

      <div className={styles.fsHeader}>
        <p>Congratulations, Eren!</p>
        <a>You have completed onboarding, you can start using Eden!</a>
      </div>
      <button className={styles.fsButton}>Launch Eden</button>
    </div>
  );
};

export default FourthSlide;
