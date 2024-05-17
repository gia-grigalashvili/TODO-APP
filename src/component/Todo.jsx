/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import check from "/public/images/icon-check.svg";
function Todo({ isDark, tasks, setTasks, task }) {
  const [filter, setfilter] = useState("All");

  let filters = ["All", "Active", "Completed"];
  ///cvlis  all actives da completeds
  function changetext(text) {
    setfilter(text);
  }

  const changeactive = () => {
    if (filter === "Active") {
      return tasks.filter((task) => !task.completed);
    } else if (filter === "Completed") {
      return tasks.filter((task) => task.completed);
    } else {
      return tasks;
    }
  };
  const clearcompleted = () => {
    const filtered = tasks.filter((task) => !task.completed);
    setTasks(filtered);
  };
  //  shlis
  const handledelete = (taskId) => {
    const clone = [...tasks];
    const deleteIndex = clone.findIndex((item) => item.id === taskId);
    clone.splice(deleteIndex, 1);
    setTasks(clone);
  };
  //gamoaq ticka

  const handleTaskClick = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const changecolor = (taskId) => {
    handleTaskClick(taskId);
  };
  return (
    <Information isDark={isDark} filter={filter} task={task} tasks={tasks}>
      <ul>
        {changeactive().map((task, index) => (
          <li key={index.id}>
            <div className="container">
              <label onClick={changecolor} className="circle" key={task.id}>
                {task.completed && (
                  <img src={check} alt="" className="check-image" />
                )}
                <input
                  type="text"
                  onClick={() => handleTaskClick(task.id)}
                  readOnly={task.completed}
                />
              </label>
              {task.completed ? (
                <p className="p">{task.text} </p>
              ) : (
                <p>{task.text}</p>
              )}
            </div>

            <div className="btn-container">
              <img src="/images/icon-cross.svg" alt="Delete icon" />
              <button onClick={() => handledelete(task.id)}>X</button>
            </div>
          </li>
        ))}
        <div className="onetext">
          <span className="items-left">
            {tasks.filter((task) => !task.completed).length} items left
          </span>
          <span onClick={clearcompleted} className="clear-items">
            Clear Completed
          </span>
        </div>
      </ul>

      <div className="stwotext">
        {filters.map((text, index) => (
          <div
            key={index}
            onClick={() => {
              changetext(text);
            }}
          >
            <Spanfilter filter={filter} text={text} className="filtertext">
              {text}
            </Spanfilter>
          </div>
        ))}
      </div>
    </Information>
  );
}

const Information = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;

  gap: 20px;
  align-items: center;

  ul {
    width: 327px;
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    background: ${(props) => (props.isDark ? "rgb(37, 39, 61)" : "#fff")};
    position: relative;
    top: -20px;
    li {
      background: ${(props) => (props.isDark ? "rgb(37, 39, 61)" : "#fff")};
      border-bottom: ${(props) =>
        props.isDark ? "0.5px  solid #aaa8a8 " : "0.5px solid#E3E4F1;"};
      padding: 16px 20px;
      display: flex;
      justify-content: space-between;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      align-items: center;
      font-size: 12px;
      font-weight: 400;
      line-height: 12px;
      letter-spacing: -0.166667px;
      text-align: left;
      color: #494c6b;
      cursor: pointer;
      .p {
        text-decoration: line-through;
      }
      .container {
        display: flex;
        align-items: center;
        color: ${(props) => (props.isDark ? "rgb(200, 203, 231)" : "#615858")};
        gap: 12px;
        position: relative;
        background: ${(props) => (props.isDark ? "rgb(37, 39, 61)" : "#fff")};
      }
      .circle {
        position: relative;
        display: flex;

        align-items: center;

        width: 20px;
        height: 20px;
        border: ${(props) =>
          props.isDark
            ? "1px solid rgb(96, 96, 96)"
            : "1px solid rgb(227, 228, 241)"};
        border-radius: 50%;
        background-color: #612424;

        cursor: pointer;
      }

      .circle img {
        width: 10.247px;
        height: 9px;
        margin-left: 4px;

        justify-content: center;
        align-items: center;
        text-align: center;
      }
      input {
        opacity: 0;
        width: 20px;
        height: 18px;
      }
    }
    .btn-container {
      position: relative;
      img {
        position: absolute;
        width: 11.79px;
        height: 11.79px;
        top: 2px;
      }
      button {
        opacity: 0;
        cursor: pointer;
      }
    }

    .onetext {
      padding: 16px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgb(255, 255, 255);
      border-radius: 5px;
      color: rgb(148, 149, 165);
      background: ${(props) => (props.isDark ? "rgb(37, 39, 61)" : "#fff")};
      font-size: 12px;
      line-height: 12px;
      letter-spacing: -0.166667px;
    }
  }
  .stwotext {
    display: flex;
    gap: 19px;
    background: ${(props) => (props.isDark ? "rgb(37, 39, 61)" : "#fff")};
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: -0.194444px;
    padding: 15px 80px;
    border-radius: 5px;
    cursor: pointer;
  }
`;
const Spanfilter = styled.span`
  color: ${(props) =>
    props.filter === props.text ? "rgb(94, 102, 209)" : "rgb(148, 149, 165)"};
`;
export default Todo;
