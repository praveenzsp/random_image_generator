import './App.css';
import React,{useEffect,useState} from 'react';


function App() {
  const [url,setUrl]=useState('')
  const [count,setCount]=useState(0)
  useEffect(()=>{
    fetch('https://api.unsplash.com/photos/random',{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
        'Authorization':'Client-ID KWdc-WIBSN84n7QrOOkLGELnxdKB__OhXGhvnpjJtzg'
      }
    })
    .then(res=>res.json())
    .then(result=>{
      // console.log(result.urls.raw);
      setUrl(result.urls.full)
    })
    .catch(err=>{
      console.log(err);
    })
  },[count])
  const handleSubmit=(e)=>{
    e.preventDefault()
    setCount(count+1)
  }
  return (
    <div className="App">
        <img src={url} alt='a random pic' />
        <button style={{float:"right"}} onClick={e=>handleSubmit(e)}><i class="fas fa-arrow-right"></i></button>
    </div>
  );
}

export default App;
