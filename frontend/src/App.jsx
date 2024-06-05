

import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

import Chat from './component/chat';
import Login from "./pages/login";

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/chat" element={<Chat/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
