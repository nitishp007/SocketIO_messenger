
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Chat from './component/chat';
import LandingPage from "./pages/landing";

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/chat" element={<Chat/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
