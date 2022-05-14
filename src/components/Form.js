import React from "react";
// import DisplayData from "./DiplayData";
function Form(props) {
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");

  // function handleFirstNameChange(event){
  //   setFirstName(event.target.value);
  // }

  // function handleSecondNameChange(event){
  //   setLastName(event.target.value);
  // }

  // return (
  //   <form>
  //     <input type="text" onChange={handleFirstNameChange} value={firstName} />
  //     <input type="text" onChange={handleSecondNameChange} value={lastName} />
  //     <button type="submit">Submit</button>
  //   </form>
  // );

  return(
    <form>
      <input
      type="text"
      onChange={props.handleFirstNameChange}
      value={props.firstName}
      />
      <input
      type="text"
      onChange={props.handleSecondNameChange}
      value={props.lastName}
      />
      <button type="submit">
        Submit
      </button>
      

    </form>
  )
}

export default Form;
