import React,{useState} from 'react'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      <h1>Form Handling</h1>
      <label>Name : </label>
      <input type="text" value={name} onChange={(e)=>{
       setName(e.target.value)
      }}/>
      <br/><br/>
      <label>Email Id : </label>
      <input type="text" value={email} onChange={(e)=>{
       setEmail(e.target.value)
      }}/>
      <h3>Name: {name}</h3>
      <h3>Email: {email}</h3>
     <button type="button">Submit</button>
     <br/><br/>
     <button type="button" onClick={()=>{
      setName("")
     }}>Clear</button>
    </div>
  )
}

export default App
