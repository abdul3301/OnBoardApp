import React from "react";
import styles from "./CreateWorkspaceBtn.module.css";

const CreateWorkspaceBtn = ({ moveNext, stepChangeHandler }) => {
  return (
    <div>
      <button
        onClick={() => moveNext && stepChangeHandler()}
        className={styles.CreateWorkspaceBtn}
      >
        Create Workspace
      </button>
    </div>
  );
};

export default CreateWorkspaceBtn;
