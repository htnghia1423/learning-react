import React from "react";
import Cell from "./Cell";
import { caculateWinner } from "../helpers";

const Board = (props) => {
  // Array(9).fill() -> [undefined, ]
  //   const cells = [null, null, null, "X", "X", "X", null, null, null];
  //   console.log(caculateWinner(cells));
  return (
    <div className="game-board">
      {props.cells.map((item, index) => {
        return (
          <Cell
            key={index}
            value={item}
            onClick={() => props.onClick(index)}
            className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
          ></Cell>
        );
      })}
    </div>
  );
};

export default Board;
