import React, {useEffect} from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey = '';


function App() {

  useEffect(() => {
    alanBtn({
      key: 'YOUR_KEY_FROM_ALAN_STUDIO_HERE',
      onCommand: (commandData) => {
        if (commandData.command === 'go:back') {
          // Call the client code that will react to the received command
        }
      }
    });
  }, []);


  return (
   <div>
     <h1> AI News Application</h1>
   </div>
      
  );
}

export default App;
