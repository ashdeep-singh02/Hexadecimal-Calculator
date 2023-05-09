import '../styles/App.css';
import {react, useState} from "react"
import Display from './Display';
import Digits from './Digits';
import Operators from './Operators';

function App() {
  const [calc, setCalc] = useState("");
  
  let operatorSymbols = ["/", "*", "+", "-"];
  let digitSymbols = [1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"];

  const updateCalc = value => {
    if(
      operatorSymbols.includes(value) && calc == "" ||
      operatorSymbols.includes(value) && operatorSymbols.includes(calc.slice(-1))
    ){
      return; //return if the very first enrty is an operator or the very last is an operator
    }
    
    setCalc(calc + value);
  }

  const calculate = () =>{
    let stringLength = calc.length;
    let counter = 0;
    let newCalc = "";
    let strToParse = "";
    while(counter < stringLength){
      if(operatorSymbols.includes(calc[counter])){
        newCalc += hexToDec(strToParse);
        newCalc += calc[counter];
        strToParse = "";
      }
      else if(counter+1 == stringLength){
        newCalc += hexToDec(`${strToParse}${calc[counter]}`);
      }
      else{
        strToParse += calc[counter];
      }
      counter++
    }
    console.log(newCalc)
    console.log(eval(newCalc))
    if(eval(newCalc).toFixed(2).toString().length > 18){
      setCalc("OverFlow")
    }
    else{
      let answer = eval(newCalc).toFixed(2).toString();
      if (answer == "Infinity") answer = "ERR"
      setCalc(answer);
    }
  }

  const deleteLast = () =>{
    if(calc === "") return;
    const value = calc.slice(0, -1);
    setCalc(value);
  }

  const clear = () => {
    setCalc("");
  }

  const hexToDec = hexNum => parseInt(hexNum, 16);

  return (
    <div className='App'>
      <div className='calculator'>
        <Display
          calc = {calc}
        />
        <Operators
          operatorSymbols = {operatorSymbols}
          updateCalc = {updateCalc}
          deleteLast = {deleteLast}
        />
        <Digits
          digitSymbols = {digitSymbols}
          updateCalc = {updateCalc}
          calculate = {calculate}
          clear = {clear}
        />
      </div>
    </div>
  );
}

export default App;
