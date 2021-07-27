import React from 'react'
import axios from "axios";
import {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";

function Home() {
    const[listOfTasks, setListOfTasks] = useState([]);
    let history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:3001/tasks").then((response) => {
          setListOfTasks(response.data);
        });
      }, []);

      return (
        <div>
          {listOfTasks.map((value, key) => {
            return (
              <div
                className="task"
                onClick={() => {
                  history.push(`/task/${value.id}`);
                }}
              >
                <div className="title"> {value.title} </div>
                <div className="body">{value.taskText}</div>
                <div className="footer">{value.username}</div>
              </div>
            );
          })}
        </div>
      );
    }

export default Home
