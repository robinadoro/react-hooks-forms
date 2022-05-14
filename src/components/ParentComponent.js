import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DiplayData";

function ParentComponent(){
    const [firstName, setFirstName]= useState("John");
    const [lastName, setLastName]= useState("Robinson");

    function handleFirstNameChange(event){
        setFirstName(event.target.value);
    }

    function handleSecondNameChange(event){
        setLastName (event.target.value);
    }

    return(
        <div>
            <Form
            firstName={firstName}
            lastName={lastName}
            handleFirstNameChange={handleFirstNameChange}
            handleSecondNameChange={handleSecondNameChange}
        />
        <DisplayData firstName={firstName} lastName={lastName} />

        </div>
    )

}
export default ParentComponent;                                                                                                                                                                                                                                                                                                                                                                                                                     