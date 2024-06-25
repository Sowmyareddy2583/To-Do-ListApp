import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import deleteIcon from "../assets/delete.png";

const TodoItems = ({ text, id, isCompleted, deleteTodo, toogle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => toogle(id)}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img src={isCompleted ? tick : not_tick} alt="" className="w-7" />
        <p
          className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${
            isCompleted ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => deleteTodo(id)}
        src={deleteIcon}
        alt=""
        className="w-3.5 cursor-pointer"
      />
    </div>
  );
};

export default TodoItems;
