import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

function Task() {
  let { id } = useParams();
  const [taskObject, setTaskObject] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  let history = useHistory();

  useEffect(() => {
    axios.get(`http://localhost:3001/Tasks/byId/${id}`).then((response) => {
      setTaskObject(response.data);
    });

    axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
      setComments(response.data);
    });
  }, []);

  const addComment = () => {
    axios
      .post("http://localhost:3001/comments", {
        commentbody: newComment,
        TaskId: id,
      })
      .then((response) => {
        const commentToAdd = { commentbody: newComment };
        setComments([...comments, commentToAdd]);
        setNewComment("");
      });
  };

  const deleteComment = (id) => {
    axios
      .delete(`http://localhost:3001/comments/${id}`)
      .then(() => {
        setComments(
          comments.filter((val) => {
            return val.id != id;
          })
        );
      });
  };

  const deleteTask = (id) => {
    axios
      .delete(`http://localhost:3001/Tasks/${id}`)
      .then(() => {
        history.push("/");
      });
  };
  return (
    <div className="taskPage">
      <div className="leftSide">
        <div className="task" id="individual">
          <div className="title"> {taskObject.title} </div>
          <div className="body">{taskObject.taskText}</div>
          <div className="footer">{taskObject.username} <button onClick={() => {
            deleteTask(taskObject.id);
            }}>Delete task</button></div>
        </div>
      </div>
      <div className="rightSide">
        <div className="addCommentContainer">
          <input
            type="text"
            placeholder="Comment..."
            autoComplete="off"
            value={newComment}
            onChange={(event) => {
              setNewComment(event.target.value);
            }}
          />
          <button onClick={addComment}> Add Comment</button>
        </div>
        <div className="listOfComments">
          {comments.map((comment, key) => {
            return (
              <div key={key} className="comment">
                {comment.commentbody}
                <button
                    onClick={() => {
                      deleteComment(comment.id);
                    }}
                  >
                    X
                  </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Task;