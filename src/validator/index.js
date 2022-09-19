import React, { useState } from "react";

const Validator = (props) => {
    let result = <></>
    
    const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);;
    };
    let matchResult = validateEmail(props.email);
    console.log(matchResult);
    if (!result) {
        
        result = <>not an email</>
    }

  return <>{result}</>;
};

export default Validator;