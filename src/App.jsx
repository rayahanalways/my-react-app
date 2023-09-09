import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Player from "./Team";
import Users from "./User";
function App() {
  const buttonClick = () => {
    alert("button click");
  };
  const handleClick2 = () => {
    alert("handleClick2");
  };

  const handleClick3 = () => {
    alert("handleClick3");
  };

  const addToFive = (num) => {
    alert(num + 10);
  };

  const sum = (num) => {
    alert(num + 20);
  };
  const getTaka = (num) => {
    alert(num + 100);
  };

  const test = () => {
    alert("test button click");
  };

  return (
    <>
      <Friends></Friends>
      <Users></Users>
      <Player></Player>
      <Counter></Counter>
      <h3>React Core Concept 2</h3>
      <button onClick={buttonClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      {/* short anonymous function that is called when the button is clicked */}
      <button
        onClick={() => {
          alert("third button clicked");
        }}
      >
        third
      </button>
      <button
        onClick={() => {
          alert("hello world");
        }}
      >
        Button Click
      </button>
      {/* vajilla function */}
      <button onClick={() => addToFive(10)}>Add</button>
      <button onClick={() => sum(10)}>Sum</button>
      <button onClick={test}>Test</button>
      {/* <button onClick={() => {alert('hello self test')}}>self test</button> */}
      <button onClick={() => alert("hello")}>self test</button>
      <button onClick={() => getTaka(100)}>GetTaka</button>
    </>
  );
}

export default App;
