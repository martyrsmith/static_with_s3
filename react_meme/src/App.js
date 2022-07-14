import './App.css';
import Footer from './Footer';
import Header from "./Header";
import Meme from "./Meme";
import {useState} from "react";


function App() {
    const [userName, setUserName] = useState('Martin')

    return (
        <div>
            < Header/>
            < Meme />
            {/* < Footer name={userName} /> */}
        </div>
    )
}

export default App;
