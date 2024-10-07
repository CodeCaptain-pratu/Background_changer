import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [color,setColor]=useState("white");

  return (
    <>
    <div className='w-full h-screen p-5' style={{backgroundColor:color}}>
      <div className='w-full h-16 rounded-full flex justify-center items-center gap-2 font-semibold border-black border-2' style={{backgroundColor:"white"}}>
        <button className='w-20 p-2 rounded-full border-black border-2' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
        <button className='w-20 p-2 rounded-full border-black border-2' style={{backgroundColor:"Green"}} onClick={()=>setColor("green")}>Green</button>
        <button className='w-20 p-2 rounded-full border-black border-2' style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
        <button className='w-20 p-2 rounded-full border-black border-2' style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
        <button className='w-20 p-2 rounded-full border-black border-2' style={{backgroundColor:"violet"}}onClick={()=>setColor("violet")}>Violet</button>
        <button className='w-20 p-2 rounded-full border-black border-2 text-white' style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>Black</button>
        <button className='w-20 p-2 rounded-full border-black border-2' style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
        <button className='w-20 p-2 rounded-full border-black border-2' style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>Purple</button>
        <button className='w-20 p-2 rounded-full border-black border-2' style={{backgroundColor:"white"}} onClick={()=>setColor("white")}>White</button>
        <button className='w-20 p-2 rounded-full border-black border-2' style={{backgroundColor:"olive"}}onClick={()=>setColor("olive")}>Olive</button>
        <button className='w-20 p-2 rounded-full border-black border-2' style={{backgroundColor:"pink"}}onClick={()=>setColor("pink")}>Pink</button>
        <button className='w-20 p-2 rounded-full border-black border-2' style={{backgroundColor:"brown"}}onClick={()=>setColor("brown")}>Brown</button>
        <button className='w-20 p-2 rounded-full border-black border-2' style={{backgroundColor:"lime"}} onClick={()=>setColor("lime")}>Lime</button>
      </div>
    </div>
    </>
  )
}

export default App
