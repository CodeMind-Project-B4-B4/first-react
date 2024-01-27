// src/App.jsx
import React from 'react';
import Routess from './Routes';

function App() {
  return (
    <div>
      <h1>ViteReact App</h1>
      
      <Routess />
    </div>
  );
}

export default App;




// import Navbar from "./components/navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './components/Navbar.css'
// function App(){
//   return(
//     <div className="content">
//       <h1>Navigations</h1>
//       <Navbar/>
//       <Router>
//         <Switch>
//           <Route path="/home" Component={Home}/>
//           <Route path="/about" Component={About}/>
//         </Switch>
//       </Router>
//     </div>
//   ) 
// }

// export default App;