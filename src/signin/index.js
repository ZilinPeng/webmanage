import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Validator from "../validator";

const SignIn = (props) => {
  const [email, setEmail] = useState({value:"", err:"",});
  const [psw, setPsw] = useState({value:"", err:"",});

  const handleClose = () => {
    props.setShowSignIn(false);
  };
  const handleShowSignUp = ()=>{
    props.setShowSignUp(true);
    props.setShowSignIn(false);
  };
  const handleShowChangePsw = ()=>{
    props.setShowChangePsw(true);
    props.setShowSignIn(false);
  };

  const handleEmail = (e) =>{
    setEmail({value: e.target.value, err:""});
  };
  const handlePsw = (e) =>{
    setPsw({value: e.target.value, err:""});
  };

  return (
    <Modal show={props.showSignIn} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> Sign in to your account</Modal.Title>
        <Modal.Body>
          <p>
            email: <input type="text" id="signInEmail" name="signInEmail" onChange = {handleEmail}/>
            <Validator email = {email} setEmail = {setEmail}/>
          </p>
          <p>
            Password: <input type="text" id="signInPsw" name="signInPsw" onClick = {handlePsw}/>
          </p>
          <button> sign in </button>
          <p>
            <button onClick = {handleShowSignUp}> sign up </button>
            <button onClick = {handleShowChangePsw}> change password </button>
          </p>
        </Modal.Body>
      </Modal.Header>
    </Modal>
  );
};

export default SignIn;
