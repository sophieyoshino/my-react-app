import { useState } from 'react';

function Square({value}) {
  return <button className="square">{value}</button>;
}
//   const [value, setValue] = useState(null);

//   function handleClick() {
//     setValue('X');
//   }
//   return (
//     <button className="square"
//     onClick={handleClick}
//     >
//       {value}
//     </button>
//   );
// }
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <>
      <div className="board-row">
      <Square value={squres[0]}/>
      <Square value={squres[1]}/>
      <Square value={squres[2]}/>
      </div>
      <div className="board-row">
      <Square value={squres[3]}/>
      <Square value={squres[4]}/>
      <Square value={squres[5]}/>
      </div>
      <div className="board-row">
      <Square value={squres[6]}/>
      <Square value={squres[7]}/>
      <Square value={squres[8]}/>
      </div>
    </>
  );
}
