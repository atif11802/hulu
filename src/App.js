import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Results from './components/Results';
import {useState} from "react";
import requests from './components/requests';


function App() {

  const [selectedOption,setSelectedOption]=useState(requests.fetchTrending);
  

  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* nav */}
      <Nav setSelectedOption={setSelectedOption} />
      {/* results */} 
      <Results 
      selectedOption={selectedOption}
      
      />
    </div>
  );
}

export default App;
