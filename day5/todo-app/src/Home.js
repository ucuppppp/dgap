import axios from "axios";
import {useEffect, useState} from "react";
import {Alert, Container, Spinner} from "react-bootstrap";
import { API_URL } from "./lib/contants";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const req = await axios.get(`${API_URL}/todos`);
        setTodos(req.data.slice(0, 10));
      } catch (err) {
        setError("Failed to load todos.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getTodos();
  }, []);

  const handleAdd = async () => {
    const title = prompt("Enter new todo title:");
    if (title) {
      try {
        const req = await axios.post(`${API_URL}/todos`, {
          title,
          completed: false,
        });
        setTodos([...todos, req.data]);
      } catch (err) {
        console.error("Failed to add todo:", err);
        alert("Failed to add todo.");
      }
    }
  };

  const handleEdit = async (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    const newTitle = prompt("Edit todo title:", todoToEdit.title);
    if (newTitle) {
      try {
        const req = await axios.put(`${API_URL}/todos/${id}`, {
          ...todoToEdit,
          title: newTitle,
        });
        setTodos(todos.map((todo) => (todo.id === id ? req.data : todo)));
        alert("Edit Complete");
      } catch (err) {
        console.error("Failed to edit todo:", err);
        alert("Failed to edit todo.");
      }
    }
  };

  const handleComplete = async (id) => {
    try {
      const req = await axios.patch(`${API_URL}/todos/${id}`, {
        ...todos.find((todo) => todo.id === id),
        completed: !todos.find((todo) => todo.id === id).completed,
      });
      setTodos(todos.map((todo) => (todo.id === id ? req.data : todo)));
    } catch (err) {
      console.error("Failed to complete todo:", err);
      alert("Failed to complete todo.");
    }
}

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      try {
        await axios.delete(`${API_URL}/todos/${id}`);
        setTodos(todos.filter((todo) => todo.id !== id)); 
        alert("Delete Complete");
      } catch (err) {
        console.error("Failed to delete todo:", err);
        alert("Failed to delete todo.");
      }
    }
  };

  if (loading) {
    return (
      <Container className="d-flex justify-content-center mt-3">
        <Spinner animation="border" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="d-flex justify-content-center mt-3">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-3">
      <h1>Todo List</h1>
      <button className="btn btn-success mb-3" onClick={handleAdd}>
        Add Todo
      </button>
      <Container className="d-flex flex-column gap-2">
        {todos.sort((a, b) => b.id - a.id).map((todo) => (
          <div
            key={todo.id}
            className="d-flex bg-light p-3 justify-content-between align-items-center"
          >
            <div className="d-flex align-items-center">
              <p className="m-0">{todo.title}</p>
            </div>
            <div className="d-flex gap-2">
              {todo.completed ? (
                <span className="text-success">Completed</span>
              ) : (
                <span className="text-danger">Pending</span>
              )}
              <button
                className="btn btn-primary"
                onClick={() => handleEdit(todo.id)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
              <button>
                {todo.completed ? (
                  <span
                    onClick={() => handleComplete(todo.id)}
                  >
                    Pending
                  </span>
                ) : (
                  <span
                    onClick={() => handleComplete(todo.id)}
                  >
                    Complete
                  </span>
                )}
              </button>
            </div>
          </div>
        ))}
      </Container>
    </Container>
  );
}
