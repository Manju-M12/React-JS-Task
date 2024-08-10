import React from "react";

function Personal() {
  let detail = () => {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let Phone = document.getElementById("Phone").value;
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value;
    alert("Thank you"+name +"have been registered");
  }
  return (
    <>
      <h1>Personal Detials</h1>
      <label>Name</label>
      <input type="text" id="name" name="name" />
      <br></br>
      <label>Age</label>
      <input type="num" id="age" name="age" />
      <br></br>
      <label>Phone Number</label>
      <input type="number" id="Phone" name="Phone" />
      <br></br>
      <label>DOB</label>
      <input type="date" id="dob" name="dob" />
      <br></br>
      <label>Email</label>
      <input type="email" id="email" name="email" />
      <br></br>
      <button onClick={detail}>Sumbit</button>
    </>
  )
}
export default Personal;