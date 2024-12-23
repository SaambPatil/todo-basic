const TodoItem = ({ todo, index, markComplete, deleteTodo }) => {
  return (
    <div key={todo._id}>
      <p>
        {index + 1}. Title: {todo.title}
      </p>
      <p>Description: {todo.description}</p>
      <p>Created on: {new Date(todo.createdOn).toDateString()}</p>
      <button
        onClick={() => deleteTodo(todo._id)}
        style={{ marginRight: "10px" }}
      >
        Delete
      </button>
      <button onClick={() => markComplete(todo._id, todo.completed)}>
        {todo.completed ? "Mark As Incomplete" : "Mark As Complete"}
      </button>
    </div>
  );
};

export default TodoItem;
