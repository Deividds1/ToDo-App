import Footer from './component/footer';
import TodoList from './component/todoList';
import './App.css';
import Header from './component/Header';
import React, { useState } from "react";

function App() {
  const [themeLight, setThemeLight] = useState(true);
  const themeClass = themeLight ? "light" : "dark";

  const [todos, setTodos] = useState([
    { id: 1, text: 'Comprar leche', completed: false },
    { id: 2, text: 'Hacer ejercicio', completed: false },
    { id: 3, text: 'Enviar correo electrónico', completed: false }
  ]);


  const handleTodoListChange = (newTodos) => {
    setTodos(newTodos);
  };

  return (
    <div className={`container ${themeClass}`}>
      <div className={`App ${themeClass}`}>

        <Header themeLight={themeLight} setThemeLight={setThemeLight} />
        <TodoList todos={todos} onTodosChange={handleTodoListChange} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
