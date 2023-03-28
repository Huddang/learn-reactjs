import TodoList from "./Component/TodoList";

function TodoFeature(props) {
  const todoList = [
    {
      id: 1,
      title: "Eat",
    },
    {
      id: 2,
      title: "Sleep",
    },
    {
      id: 3,
      title: "code",
    },
  ];
  return (
    <did>
      <h3>Todo List</h3>
      <TodoList todoList={todoList} />
    </did>
  );
}
export default TodoFeature;
