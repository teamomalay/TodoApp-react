import React, { useState } from "react";
import img from "../Images/img.jpg";
import "./Css/Todostyle.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/Index.jsx";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={img} alt="imglogo" />
            <figcaption>Add Your List Here ✌️</figcaption>
          </figure>
          <div className="addItems">
            <input
              onChange={(e) => {
                setInputData(e.target.value);
              }}
              value={inputData}
              type="text"
              placeholder="✍️ Add Items..."
            />
            <i
              className="fa fa-plus add-btn"
              title="Add Item"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            ></i>
          </div>

          <div className="showItems">
            {list.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.data}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-trash-alt add-btn"
                      title="Delete Item"
                      onClick={() => dispatch(deleteTodo(elem.id))}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button
              className=" btn effect04"
              data-sm-link-text="Remove All"
              onClick={() => dispatch(removeTodo())}
            >
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
