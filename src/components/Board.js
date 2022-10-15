import React from "react";
import Card from "./Card";
import "../styles/Board.css";

const Board = () => {
  return (
    <div className="Board">
      <Card number="1" />
      <Card number="4" />
      <Card number="5" />
      <Card number="6" />
      <Card number="7" />
      <Card number="8" />
      <Card number="9" />
      <Card number="10" />
      <Card number="11" />
      <Card number="15" />
      <Card number="17" />
      <Card number="19" />
    </div>
  );
};

export default Board;
