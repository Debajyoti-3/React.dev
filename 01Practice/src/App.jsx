import viteLogo from "/vite.svg";
const headerStyle ={
  backgroundColor:'#61DBFB',
  padding:10,
}
const colorNo = {
  backgroundColor: '#737',
  padding:5
}
const header =(
  <div style={headerStyle}>
      <h1>Frontend Learning Roadmap</h1>
      <ul > 
        <li>HTML</li>
        <li>CSS</li>
        <li>Projects</li>
        <li style={colorNo}>JS</li>
        <li>Projects</li>
        <li>Git & GitHub</li>
        <li>React/Angular </li>
        <li>Figma</li>
        <li>Projects...Projects...Projects...</li>
      </ul>
    </div>
)

function App() {
  
  return (
    <>
    {header}
    </>
  );

}

export default App;
