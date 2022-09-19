import React, { useState } from "react";
import SignIn from "../signin";
import SignUp from "../signup";
import ChangePsw from "../changepsw";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showChangePsw, setShowChangePsw] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);


  let signContent = <></>;

  if(showSignIn){
    signContent = <SignIn showSignIn={showSignIn} setShowSignIn={setShowSignIn} 
    showSignUp={showSignUp} setShowSignUp={setShowSignUp}
    showChangePsw={showChangePsw} setShowChangePsw={setShowChangePsw}/>
  };

  if(showSignUp){
    signContent = <SignUp showSignUp = {showSignUp} setShowSignUp = {setShowSignUp}
    setShowSignIn = {setShowSignIn}/>
  };

  if(showChangePsw){
    signContent = <ChangePsw showChangePsw = {showChangePsw} setShowChangePsw = {setShowChangePsw}/>
  };


  return (
    <div className="header">
      Management Chuwa
      <input type="text" id="search" name="search"/>
      <button
        onClick={() => {
          setShowSignIn(true);
        }}
      >
        Sign In
      </button>
        {signContent}
      <button> cart </button>
      <div id="modal"></div>
    </div>
  );
};

export default Header;
