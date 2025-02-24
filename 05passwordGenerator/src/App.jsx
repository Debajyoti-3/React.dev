import {useState, useCallback, useEffect, useRef} from 'react'

import './index.css'

function App() {
  const [length, setLength] = useState(8)
    const [numAllowed, setNumAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState("")

    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(()=>{
        let pass= "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(numAllowed){
            str += "0123456789"
        }
        if(charAllowed){
            str += "~!@#$%^&*()_+={}[]-`";
        }

        for( let i = 0; i < length; i++){
            let char = Math.floor(Math.random()* str.length +1);
            pass += str.charAt(char);

        }
        setPassword(pass);

    }, [length, charAllowed,setPassword,numAllowed])
    const copyPasswordToClipboard = useCallback(()=>{
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0,15)
        window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(() => {
        passwordGenerator()
    },[numAllowed,length, charAllowed, passwordGenerator])


  return (
    <>
      <div className='w-full max-w-md mx-auto text-3xl  shadow-md rounded-lg
       px-4 my-8 text-orange-500 bg-gray-700 text-center'>
          <h1 className='text-white text-center'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
              <input
                  type="text"
              value={password}
              className='outline-none text-gray-400 bg-white w-full mt-5 mb-4 py-2 px-4 rounded-l-2xl'
              placeholder= "password"
                  readOnly
                  ref = {passwordRef}
              />
              <button
                  onClick={copyPasswordToClipboard}
                  className='outline-none bg-blue-700 text-white
                  px-2 py-0.5 shrink-0 mr-3 w-20 h-14 mt-4.5  rounded-lg
                  cursor-pointer'>
                  Copy</button>

          </div>
          <div className='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
                  <input type="range"
                  min={5}
                  max={15}
                         value={length}
                  className='cursor-pointer mb-2'
                         onChange={(e)=>{setLength(e.target.value)}}
                  />
                  <label  className='mb-2'>Length: {length}</label>

              </div>
              <div className='flex items-center gap-x-1 mb-2 ml-5'>
                  <input type="checkbox"
                  defaultChecked={numAllowed}
                  id='numberInput'
                  onChange={()=>{
                      setNumAllowed((prev)=>!prev);
                  }}/>
                  <label >Number</label>
              </div>
              <div className='flex items-center gap-x-1 mb-2 ml-2'>
                  <input type="checkbox"
                         defaultChecked={charAllowed}
                         id='charInput'
                         onChange={()=>{
                             setCharAllowed((prev)=>!prev);
                         }}/>
                  <label >Character</label>
              </div>
          </div>
      </div>
    </>
  );
}

export default App
