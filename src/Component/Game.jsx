import { useState } from "react"


export const Game = () => {

const [board, setboard] = useState(Array(9).fill(null));
const [isxturn, setisxturn] = useState(true);
const [winner, setwinner] = useState(null)

const rendersquare = (index)=>{

    return (
        <button onClick={ ()=>handelclick(index)}   className="btn">{board[index]}</button>
    )

}

const handelclick =(index) =>{

    if (board[index] || winner) return;  
    const newboard= [...board];
    newboard[index] = isxturn ? "x": "o";
    setboard(newboard)
    setisxturn(!isxturn)
    const winnercombinatio = checkwinner(newboard);
  
     if(winnercombinatio){
            setwinner(newboard[winnercombinatio[0]]);
     }


}

const checkwinner =( newboard )=>{
   const combination = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

   ]

   for(let i=0;i<combination.length;i++){
    const [a,b,c] = combination[i];
    if(newboard[a] === newboard[b] && newboard[b] === newboard[c]){
      
        return combination[i]
        
        
    }
}


return null;
}




  return (

    <>
    <div className="content">
        <p>first chance for x <br></br> second chance for 0</p>
    </div>

{winner && <div className="winner"> <span>{winner}</span> Win</div>}
    <div className="board">
          <div className="board-row">
              {rendersquare(0)}
              {rendersquare(1)}
              {rendersquare(2)}
          </div>
          <div className="board-row">
              {rendersquare(3)}
              {rendersquare(4)}
              {rendersquare(5)}
          </div>
          <div className="board-row">
              {rendersquare(6)}
              {rendersquare(7)}
              {rendersquare(8)}
        </div>
    <button className="btn2" onClick={() => { 
        setboard(Array(9).fill(null)); 
        setwinner(null); 
        setisxturn(true); 
    }}>
  Reset Game
</button>
   

    </div>
    <div className="ft">
        <p>made by Himanshupal</p>
    </div>

    </>
  )
}
