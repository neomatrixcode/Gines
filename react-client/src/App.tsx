import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  import('wasm').then(({ add_two_ints, fib, net }) => {
      // off-loading computations to WASM
      const sumResult = add_two_ints(10, 20);
      const fibResult = fib(10);
      const netResult = net();
      // updating our sumResult and fibResult values (declared below)
      setSum(sumResult);
      setFib(fibResult);
      setnet(netResult);
  });
   const [sum, setSum] = React.useState<number>(0);
   const [fib, setFib] = React.useState<number>(0);
   const [net, setnet] = React.useState<number>(0);
   return (
      // I cut out the fluff
      // Displaying our sum and fib values that're updated by WASM
      <div className="App" >
         <div>Sum Results: {sum}</div>
         <div>Fib Results: {fib}</div>
         <div>Net Results: {net}</div>
      </div>
   );
}

export default App;
