/* eslint-disable no-undef */

import styled from "styled-components";

function Input({ isDark, addTask }) {
  const [taskText, setTaskText] = useState("");

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && taskText.trim() !== "") {
      addTask(taskText);
      setTaskText("");
    }
  };

  return (
    <InputMain isDark={isDark}>
      <input
        placeholder="Create a new todo..."
        type="text"
        value={taskText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <div className="circle"></div>
    </InputMain>
  );
}

const InputMain = styled.div`
  position: relative;
  margin-top: 40px;
  width: 320px; /* Set width of the input container */
  display: flex;

  input {
    background: ${(props) => (props.isDark ? "rgb(37, 39, 61)" : "#fff")};

    height: 48px;
    width: 325px;
    border-radius: 5px;
    border: none;

    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: -0.166667px;
    font-family: "Josefin Sans";
    color: rgb(200, 203, 231);
    padding-left: 40px; /* Adjusted padding */
  }

  .circle {
    width: 20px;
    height: 20px;
    border: ${(props) =>
      props.isDark
        ? "1px solid rgb(96 96 96)"
        : "1px solid rgb(227, 228, 241)  "};

    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 10px; /* Adjusted left position */
    transform: translateY(-50%);
  }
`;

export default Input;
