import axios from "axios";
import { useEffect, useState } from "react";
import AddTodo from "../components/AddTodo/AddTodo";
import TodoList from "../components/TodoList/TodoList";

const API_URL = "https://fake-api-kf7b.onrender.com";

const Todo = () => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    completed: false,
  });

  const [todoslist, setTodoslist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getTodos = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${API_URL}/todos`);
      console.log("Fetched Todos:", res.data);
      setTodoslist(res.data);
    } catch (error) {
      console.log(error);
      setError("Unable to get todos");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // axios
    //   .get(`${API_URL}/todos`)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err));

    getTodos();
  }, []);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.desc) {
      alert("All fields are required!");
      return;
    }
    const temp = { title: formData.title, description: formData.desc };

    // setTodoslist([...todoslist, res.data]);
    axios
      .post(`${API_URL}/todos`, temp)
      .then((res) => {
        // console.log(res.data);
        setTodoslist([...todoslist, res.data]);
      })
      .catch((err) => console.log(err));

    setFormData({ title: "", desc: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const deleteTodo = async (id) => {
    console.log("Deleting todo with ID:", id);
    try {
      await axios.delete(`${API_URL}/todos/${id}`);
      setTodoslist(todoslist.filter((todo) => todo.id !== id));
    } catch (error) {
      console.log("Error deleting todo:", error);
    }
  };

  const markComplete = async (id, completed) => {
    try {
      const updatedTodo = { completed: !completed };
      await axios.patch(`${API_URL}/todos/${id}`, updatedTodo);
      setTodoslist(
        todoslist.map((todo) => {
          if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        })
      );
    } catch (error) {
      console.log("Error marking todo as complete:", error);
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <AddTodo
        formData={formData}
        handleChange={handleChange}
        onSubmitForm={onSubmitForm}
      />
      <div>
        <h1>Your Todo List</h1>

        <TodoList
          todoslist={todoslist}
          markComplete={markComplete}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  );
};

export default Todo;
