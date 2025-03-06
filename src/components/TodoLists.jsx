import classNames from "classnames";
import React from "react";

function TodoLists({ todos, btnToggle, onDelete }) {
  return (
    <>
      <ul className="todo_list container mx-auto mt-5  round-1">
        {todos.map((todo) => (
          <li key={todo.id} className="p-1 mt-2">
            <div className="main">
              <div className="d-flex justify-content-between ">
                <h2 className={classNames("category", todo.category)}>
                  {todo.category}
                </h2>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-modify">
                    <i className="bi bi-pencil-fill"></i>
                  </button>
                  <button className="btn btn-delete" onClick={onDelete}>
                    <i className="bi bi-trash3"></i>
                  </button>
                  <button className="btn btn-menu " onClick={btnToggle}>
                    <i className="bi bi-three-dots"></i>
                  </button>
                </div>
              </div>
              <hr />
              <div className={classNames("content", todo.category)}>
                <h3 className="todo_title">{todo.title}</h3>
                <p className="color-333 mt-1">{todo.desc}</p>
              </div>
            </div>
            <div>
              <div className="d-flex gap-3 mt-2">
                <div className="d-flex gap-1 fs-15 color-333">
                  <i className="bi bi-calendar-heart"></i>
                  <p>
                    d -{" "}
                    {Math.round(
                      new Date(todo.end).getTime() -
                        new Date(todo.start).getTime()
                    ) /
                      (1000 * 60 * 60 * 24)}
                  </p>
                </div>
                <div className="d-flex gap-1 fs-15 color-333">
                  <i className="bi bi-pin-angle"></i>
                  <p>{todo.end}</p>
                </div>
                <div className="d-flex gap-1 fs-15 color-333">
                  <i className="bi bi-people-fill"></i>
                  <p>{todo.members}</p>
                  <p className="fs-15 color-333">{todo.guest}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoLists;
