import React, { useEffect, useState } from "react";
import './App.css';

function App() {
    const audioSoundQ = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3");
    const audioSoundW = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3");
    const audioSoundE = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3");
    const audioSoundA = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3");
    const audioSoundS = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3");
    const audioSoundD = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3");
    const audioSoundZ = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3");
    const audioSoundX = new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3");
    const audioSoundC = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3");

    const [name, setName] = useState("");


    // const audioName1 = 'heatwave1'

    useEffect(() => {
        function handleKeyDown(e) {
          if (e.keyCode === 81){
            setName('Heater-1');
            audioSoundQ.play();
        } else if (e.keyCode === 87){
            setName('Heater-2');
            audioSoundW.play();
        } else if (e.keyCode === 69){
            setName('Heater-3');
            audioSoundE.play();
        } else if (e.keyCode === 65){
            setName('Heater-4_1');
            audioSoundA.play();
        } else if (e.keyCode === 83){
            setName('Heater-6');
            audioSoundS.play();
        } else if (e.keyCode === 68){
            setName('Dsc_Oh');
            audioSoundD.play();
        } else if (e.keyCode === 90){
            setName('Kick_n_Hat');
            audioSoundZ.play();
        } else if (e.keyCode === 88){
            setName('RP4_KICK_1');
            audioSoundX.play();
        } else if (e.keyCode === 67){
            setName('Cev_H2');
            audioSoundC.play();
        }

        }
    
        document.addEventListener("keydown", handleKeyDown);
    
      }, []);
    


    const handleClickQ = () => {
        setName('Heater-1');
    return ( 
        <div>{audioSoundQ.play()} 
            </div>    
        )
}

const handleClickW = () => {
    setName('Heater-2');
    return ( 
        <div>{audioSoundW.play()} 
            </div>
        )
}
const handleClickE = () => {
    setName('Heater-3');
    return ( 
        <div>{audioSoundE.play()} 
            </div>    
        )
}
const handleClickA = () => {
    setName('Heater-4_1');
    return ( 
        <div>{audioSoundA.play()} 
            </div>    
        )
}
const handleClickS = () => {
    setName('Heater-6');
    return ( 
        <div>{audioSoundS.play()} 
            </div>    
        )
}
const handleClickD = () => {
    setName('Dsc_Oh');
    return ( 
        <div>{audioSoundD.play()} 
            </div>    
        )
}
const handleClickZ = () => {
    setName('Kick_n_Hat');
    return ( 
        <div>{audioSoundZ.play()} 
            </div>    
        )
}
const handleClickX = () => {
    setName('RP4_KICK_1');
    return ( 
        <div>{audioSoundX.play()} 
            </div>    
        )
}
const handleClickC = () => {
    setName('Cev_H2');
    return ( 
        <div>{audioSoundC.play()} </div>    
        
        )
}

  return (
    <div   className="App">
 
        <div   className="inner-container" id="drum-machine" tabIndex="0">
            <div   className="pad-bank" >
                <div   className="d-flex flex-row">
                    <div   className="p-2 drum-pad" id="Heater-1" onClick={handleClickQ} >
                        <audio    className="clip" id="Q" ></audio>Q</div>
                    <div   className="p-2 drum-pad" id="Heater-2" onClick={handleClickW}   >
                        <audio   className="clip" id="W"></audio>W</div>
                    <div   className="p-2 drum-pad" id="Heater-3"  onClick={handleClickE}  >
                        <audio   className="clip" id="E" ></audio>E</div>
                </div>
                <div   className="d-flex flex-row">
                    <div   className="p-2 drum-pad" id="Heater-4_1" onClick={handleClickA}   >
                        <audio   className="clip" id="A" ></audio>A</div>
                    <div   className="p-2 drum-pad" id="Heater-6" onClick={handleClickS}   >
                        <audio   className="clip" id="S" ></audio>S</div>
                    <div   className="p-2 drum-pad" id="Dsc_Oh" onClick={handleClickD}   >
                        <audio   className="clip" id="D" ></audio>D</div>
                </div>
                <div   className="d-flex flex-row">
                    <div   className="p-2 drum-pad" id="Kick_n_Hat" onClick={handleClickZ}   >
                        <audio   className="clip" id="Z" ></audio>Z</div>
                    <div   className="p-2 drum-pad" id="RP4_KICK_1" onClick={handleClickX}   >
                        <audio   className="clip" id="X" ></audio>X</div>
                    <div   className="p-2 drum-pad" id="Cev_H2" onClick={handleClickC}   >
                        <audio   className="clip" id="C" ></audio>C</div>
                </div>
                <div className="display">
                    <h1> {name} </h1>
                </div>
            </div>
            
        </div>
 
    </div>
  );
}

export default App;
