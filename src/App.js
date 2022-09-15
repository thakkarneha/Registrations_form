
import { useState } from 'react';
import './component/style.css';

function App() {
  const[cValue,setValues]=useState({
    fName:"",
email:"",
password:""
  })
  const[formsub,setformsub]=useState(false)

  const checkValues=(event)=>{
    setValues({...cValue, [event.target.name]:event.target.value})

  }
 
  const CheckSuccessRate=(event)=>{
    event.preventDefault();
    setformsub(true);
    
    setValues({
      fName:"",
      email:"",
      password:"",
       })

  }
  return (
    <>
    <div className="App">
    <div className="container">
    <form onSubmit={CheckSuccessRate}>
    {formsub ?<span className="success">You have Successfully Submit the form.</span>:null}
    <div className="form-group">
    <label>Name</label>
    <input type="text" className="form-control"  placeholder="Enter Name" name="fName" value={cValue.fName} onChange={checkValues} required/>
    {/* //{formsub && !cValue.fName?<span>Please Enter The Name</span>:null} */}
    </div>
  <div className="form-group">
 <label >Email address</label>
    <input type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email" name="email" value={cValue.email} onChange={checkValues} required/ >
   {/* // {formsub && !cValue.email?<span>Please Enter The Email</span>:null} */}
    </div>
  <div className="form-group">
    <label >Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"  name="password" value={cValue.password} onChange={checkValues} required/>
   {/* // {formsub && !cValue.password? <span>Please Enter The Password</span>:null} */}
  </div>
 
  <button type="submit" className="btn btn-warning">Submit</button>
</form>
    </div>
    </div>
    </>
  );
}

export default App;
