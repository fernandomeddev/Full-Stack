import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Task() {
  let { id } = useParams();
  const [taskObject, setTaskObject] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/tasks/byId/${id}`).then((response) => {
      setTaskObject(response.data);
    });
  });
  return (
    <div className="taskPage">
      <div className="leftSide">
        <div className="task" id="individual">
          <div className="title"> {taskObject.title} </div>
          <div className="body">{taskObject.taskText}</div>
          <div className="footer">{taskObject.username}</div>
        </div>
      </div>
      <div className="rightSide">Comment Section</div>
    </div>
  );
}

export default Task;