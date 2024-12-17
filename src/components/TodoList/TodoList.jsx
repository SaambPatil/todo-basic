import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todoslist, markComplete, deleteTodo }) => {
  return (
    <div>
      {todoslist.map((todo, index) => (
        <TodoItem
          todo={todo}
          key={todo._id}
          index={index}
          markComplete={markComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
