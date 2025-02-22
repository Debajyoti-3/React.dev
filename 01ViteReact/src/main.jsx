
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'

// function MyDm(){
//   return (
//     <div>
//       <h1>Debajyoti Mitra</h1>
//     </div>
//   )
// }


// const reactElement ={      // It will not render 
//   type: 'a',
//   props:{
//       href:'https://google.com',
//       target: '_blank',
//   },
//   children: 'Click me to visit google'
// } 
const newUser = "Subhajit"
const reactElement = React.createElement(
  'a',
  {href: "https://google.com", target:'_blank'},
  'Visit Google',
  newUser
)


const anotherElement = (
  <a href="https://google.com" target='_blank'>Google</a>
)

createRoot(document.getElementById('root')).render(
 
    //<MyDm />
    // anotherElement

    reactElement
 
)
