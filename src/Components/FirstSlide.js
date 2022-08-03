import React, { useState } from "react";
import CreateWorkspaceBtn from "./CreateWorkspaceBtn";
import styles from "./FirstSlide.module.css";
import MainPage from "./MainPage";

const FirstSlide = (props) => {
  const [fullname, setFullname] = useState("");
  const [displayName, setDisplayName] = useState("");
  return (
    <div className={styles.FirstSlide}>
      <div className={styles.header}>
        <h1>Welcome! First things First...</h1>
        <h3>You can always change them later</h3>
      </div>
      <form className={styles.section}>
        <div className={styles.FullName}>
          <label className={styles.fullNameLabel} htmlFor="Full Name">
            Full Name
          </label>
          <input
            value={fullname}
            required
            placeholder="Steve Jobs"
            type="text"
            id="Full Name"
            onChange={(e) => {
              setFullname(e.target.value);
            }}
          />
        </div>
        <div className={styles.DisplayName}>
          <label htmlFor="Display Name">Display Name</label>

          <input
            value={displayName}
            required
            placeholder="Steve"
            type="text"
            id="Display Name"
            onChange={(e) => {
              setDisplayName(e.target.value);
            }}
          />
          <br />
          <br />
          <CreateWorkspaceBtn
            moveNext={fullname && displayName}
            stepChangeHandler={props.stepChangeHandler}
          />
        </div>
      </form>
    </div>
  );
};

export default FirstSlide;
