import React from  'react';
import ResultScreen from '../ResultScreen/ResultScreen';
import ComputationScreen from '../ComputationScreen/ComputationScreen';



const Screen = (props) => (
 
    <div className= "screen">
     <ResultScreen>{props.result}</ResultScreen>
<ComputationScreen>{props.equation}</ComputationScreen>
  
    </div>


);

export default Screen;