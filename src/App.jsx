import "./App.css"
import Comment from "./Comment"
import CommInputBox from "./CommInputBox"
import { useState } from "react"
import { v4 as uuidv4} from 'uuid'
import data from './data.json'


function App() {
  const [dataState, setDataState] = useState(data);
  const [textValue, setTextValue] = useState("");
  

  function handleSendClick() {
    setDataState(prevState => {
      return {
        ...prevState,
        "comments": [...prevState.comments, {
          id: uuidv4(),
          "content": textValue,
          "createdAt": "1 month ago",
          "score": 0,
          "user": {
            "image": { 
              "png": "./images/avatars/image-juliusomo.png",
              "webp": "./images/avatars/image-juliusomo.webp"
            },
            "username": "juliusomo"
          },
          "replies": []
        }]
      }
    })
    setTextValue("");
}
const changeHandler = e => setTextValue(e.target.value)

  return (
    <div className="app">
      {dataState.comments.map(comment => {
        return <Comment key={comment.id} name={comment.user.username} img={comment.user.image.webp} date={comment.createdAt} text={comment.content} id={comment.id} score={comment.score} replies={comment.replies} currentUser={dataState.currentUser} handleSendClick={handleSendClick} textValue={textValue} changeHandler={changeHandler}/>
      })}

      <CommInputBox curr={dataState.currentUser} handleClick={handleSendClick} textValue={textValue} handleChange={changeHandler} comm_function="send" />
    </div>
  )
}

export default App
