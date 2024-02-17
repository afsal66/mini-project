// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Userrouter from "./Routers/Userrouter";
import Adminrouter from "./Routers/Adminrouter";

function App() {
  return (
    <>
    <BrowserRouter><Routes>
      <Route path="/*" element={<Userrouter/>}/>
      <Route path="/admin/*" element={<Adminrouter/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
