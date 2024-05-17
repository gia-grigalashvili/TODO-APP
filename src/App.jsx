// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./component/Header";
import Input from "./component/Input";
import Todo from "./component/Todo";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [tasks, setTasks] = useState([]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  const addTask = (taskText) => {
    setTasks([
      ...tasks,
      { text: taskText, completed: false, id: Math.random() },
    ]);
  };

  return (
    <>
      <GlobalStyle isDark={isDark} />
      <Bodys isDark={isDark}>
        <Header toggleDarkMode={toggleDarkMode} isDark={isDark} />
        <Input isDark={isDark} addTask={addTask} />
        <Todo isDark={isDark} setTasks={setTasks} tasks={tasks} />
      </Bodys>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) =>
      props.isDark ? "#171823;" : "rgb(240, 240, 240)"};
      font-family: "Josefin Sans";
  }
`;

const Bodys = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: ${(props) =>
    props.isDark
      ? "url(/public/images/bg-mobile-dark.jpg)"
      : "url(/public/images/bg-mobile-light.jpg)"};
  background-repeat: no-repeat;
  padding: 46px 24px;
  flex-direction: column;
`;

export default App;
