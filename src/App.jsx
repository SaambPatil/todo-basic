import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    completed: false,
  });

  const [todoslist, setTodoslist] = useState([]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.desc) {
      alert("All fields are required!");
      return;
    }
    const temp = { id: uuidv4(), title: formData.title, desc: formData.desc };
    setTodoslist([...todoslist, temp]);
    setFormData({ title: "", desc: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const deleteTodo = (id) => {
    setTodoslist(todoslist.filter((todo) => todo.id !== id));
  };

  const markComplete = (id) => {
    setTodoslist(
      todoslist.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <label>Enter Title: </label>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={formData.title}
        />
        <br />
        <label>Enter Description: </label>
        <input
          type="text"
          name="desc"
          placeholder="Description"
          onChange={handleChange}
          value={formData.desc}
        />
        <br />
        <button type="submit">Add Todo</button>
      </form>
      <div>
        <h1>Your Todo List</h1>
        <div>
          {todoslist.map((todo, index) => (
            <div key={todo.id}>
              <p>
                {index + 1}. Title: {todo.title}
              </p>
              <p>Description: {todo.desc}</p>
              <button onClick={() => markComplete(todo.id)}>
                {todo.completed ? "Mark As Incomplete" : "Mark As Complete"}
              </button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
