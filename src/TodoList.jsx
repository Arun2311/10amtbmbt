import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./Todolist.css";
import axios from "axios";

export default function TodoList() {
  const [inputtodo, setinputtodo] = useState("");
  const [tododata, settododata] = useState([]);

  const handleinput = (event) => {
    console.log(event.target);

    setinputtodo(event.target.value);
  };

  useEffect(() => {
    handleapiget();
  }, []);

  const handleapiget = async () => {
    let todolist = await axios.get("http://localhost:3000/todoList");
    settododata(todolist.data);
  };

  const handleadd = async () => {
    let body = {
      task: inputtodo,
    };

    let senddata = await axios.post("http://localhost:3000/todoList", body);

    setinputtodo("");
    handleapiget();
  };

  const handledelete = async (id) => {
    let deletedata = await axios.delete("http://localhost:3000/todoList/" + id);
    handleapiget();
  };

  const handleedit =async (data) => {
 let promptdata =  prompt("edit u r edit data",data.task)

 let body = {
  id:data.id,
  task:promptdata
 }


let editdata = await axios.put("http://localhost:3000/todoList/" + data.id,body)
     handleapiget();

  };

  return (
    <div>
      <h1>Todo List</h1>

      <input
        value={inputtodo}
        onChange={handleinput}
        placeholder="Enter U r Todo"
      />

      <button className="btn btn-primary mb-2 ms-4" onClick={handleadd}>
        Submit
      </button>

      <ol>
        {tododata.map((da,index) => (
          <li key={index}>
            {da.task}

            <button
              className="btn btn-danger mt-3 ms-4"
              onClick={() => handledelete(da.id)}
            >
              Delete
            </button>

            <button
              onClick={() => handleedit(da)}
              className="btn btn-info mt-3 ms-4"
            >
              Edit
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
