import React, { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoLists from "./components/TodoLists";
import "./App.css";

function App() {
  const [id, setId] = useState(0);
  const [todos, setTodos] = useState([]);
  const [formData, setFormData] = useState({
    id: 0,
    category: "",
    title: "",
    desc: "",
    start: new Date().toISOString().split("T")[0],
    end: new Date().toISOString().split("T")[0],
    members: 0,
    guest: "",
  });

  function onChangeData(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function onSubmit(e) {
    e.preventDefault();
    if(formData.category == ""){
      alert("카탈로그를 선택해주세요.");
      return
    };
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        ...formData,
        id: id,
        category: formData.category,
        title: formData.title,
        desc: formData.desc,
        start: formData.start,
        end: formData.end,
        members: formData.members,
        guest: formData.guest,
      },
    ]);
    setId((prevId) => prevId + 1);
    setFormData({
      id: 0,
      category: "",
      title: "",
      desc: "",
      start: new Date().toISOString().split("T")[0],
      end: new Date().toISOString().split("T")[0],
      members: 0,
      guest: "",
    });
  }

  function onClick(e) {
    e.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      ["category"]: e.target.innerText,
    }));
  };
  
  function btnToggle(e) {
    e.preventDefault();
  };

  function onDelete (todoId){
    console.dir(todoId.value);
    
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId))
  };

  return (
    <>
      <div className="background mx-auto">
        <TodoHeader />
        <TodoInput
          onClick={onClick}
          formData={formData}
          onChangeData={onChangeData}
          onSubmit={onSubmit}
        />
        <TodoLists todos={todos} btnToggle={btnToggle} onDelete={onDelete}/>
      </div>
    </>
  );
}

export default App;
