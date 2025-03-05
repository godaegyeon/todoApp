import classNames from "classnames";
import React from "react";

function TodoLists({todos}) {
  return (
    <>
      <ul className="todo_list container mx-auto mt-5  round-1">
        {
          todos.map(todo => 
            <li key={todo.id} className="p-1 mt-2">
              <div className="main">
                <h2>{todo.category}</h2>
                <hr />
                <div className="content">
                  <h3 className="text-overflow-ellipsis overflow-hidden color-333">{todo.title}</h3>
                  <p className="color-333">{todo.desc}</p>
                </div>
              </div>
              <div>
                <div className="d-flex gap-3">
                  <div className="d-flex gap-1 fs-15 color-333">
                    <i className="bi bi-calendar-heart"></i>
                    <p>d - {(Math.round(new Date(todo.end).getTime() - new Date(todo.start).getTime())) / (1000*60*60*24)}</p>
                    <i className="bi bi-calendar-check"></i>
                  </div>
                  <div className="d-flex gap-1 fs-15 color-333">
                    <p>{todo.end}</p>
                    <i className="bi bi-people-fill"></i>
                  </div>
                  <div className="d-flex gap-1 fs-15 color-333">
                    <p>{todo.members}</p>
                    <p className="fs-15 color-333">{todo.guest}</p>
                  </div>
                </div>
              </div>
            </li>
          )
        }
      </ul>
    </>
  );
}

export default TodoLists;
