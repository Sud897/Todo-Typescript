import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodoContextProvider from "./store/todos-context";
function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <TodoContextProvider>
        <NewTodo />
        <Todos />
      </TodoContextProvider>
    </div>
  );
}

export default App;
