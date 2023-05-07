import React,{useState} from 'react'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [college, setCollege] = useState('');

  return (
    <div>
      <form>

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
    <br/><br/>
    <label>College Name: </label>
    <input type= "text" value={college} onChange={(e)=>{
       setCollege(e.target.value)
    }}/>
       <p>
         {name} is studying in college {college}.
       </p>

       
     {/* <button type="button">Submit</button>
     <br/><br/> */}
     {/* <button type="button" onClick={()=>{
       setName("")
      }}>Clear</button> */}
      </form>
    </div>
  )
}

export default App
