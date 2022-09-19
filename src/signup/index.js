import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const SignUp = (props) => {
  const [email, setEmail] = useState({value:"", err:"",});
  const [psw, setPsw] = useState({value:"", err:"",});

  const handleClose = () => {
    props.setShowSignUp(false);
  };
  const handleShowSignIn = () => {
    props.setShowSignUp(false);
    props.setShowSignIn(true);
  };
  const handleEmail = (e) =>{
    setEmail({value: e.target.value, err:""});
  };
  const handlePsw = (e) =>{
    setPsw({value: e.target.value, err:""});
  };

  return (
    <Modal show={props.showSignUp} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> Sign up an account</Modal.Title>
        <Modal.Body>
          <p>
            email: <input type="text" id="signUpEmail" name="signUpEmail" onclick = {handleEmail}/>
          </p>
          <p>
            Password: <input type="text" id="signUpPsw" name="signUpPsw" onclick = {handlePsw}/>
          </p>
          <button onClick = {handleShowSignIn}> sign in </button>
          <p>
            <button> sign up </button>
          </p>
        </Modal.Body>
      </Modal.Header>
    </Modal>
  );
};

export default SignUp;
