import React, { useState } from "react";
import CreateWorkspaceBtn from "./CreateWorkspaceBtn";
import MainPage from "./MainPage";
import styles from "./SecondSlide.module.css";
import { Input } from "antd";

const SecondSlide = (props) => {
  const [workName, setWorkName] = useState("");
  const [workUrl, setWorkUrl] = useState("");
  return (
    <div className={styles.SecondSlide}>
      <div className={styles.ssheader}>
        <h1>Let's set up a home for all your work</h1>
        <h3>You can always create another workspace later.</h3>
      </div>
      <div className={styles.ssSection}>
        <div className={styles.ssFullName}>
          <label htmlFor="Full Name">Workspace Name</label>
          <input
            value={workName}
            placeholder="Eden"
            type="text"
            id="Full Name"
            onChange={(e) => setWorkName(e.target.value)}
          />
        </div>
        <div className={styles.ssDisplayName}>
          <label htmlFor="Display Name" style={{ marginBottom: "5px" }}>
            Workspace URL <small>(optional)</small>
          </label>

          <Input
            value={workUrl}
            style={{ width: "91%" }}
            addonBefore="www.eden.com/"
            onChange={(e) => setWorkUrl(e.target.value)}
          />
          <br />
          <CreateWorkspaceBtn
            moveNext={workName && workUrl}
            stepChangeHandler={props.stepChangeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondSlide;
