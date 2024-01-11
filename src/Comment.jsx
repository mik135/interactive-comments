/* eslint-disable react/prop-types */
import { useState } from 'react'
import Counter from './Counter'
import Reply from './Reply'
import CommInputBox from './CommInputBox';
import { v4 as uuidv4} from 'uuid'




// eslint-disable-next-line react/prop-types
export default function Comment({ img, name, date, text, id, score, replies, currentUser, textValue, changeHandler }) {
  const [replying, setReplying] = useState(false);
  const [userReplies, setUserReplies] = useState(replies);
  function handleReply() {
    setReplying(bool => !bool);
  }
  function handleSendClick() {
    setUserReplies(prevState => {
      return [...prevState, {
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
    }]})
    setReplying(bool => !bool);
  }
  return (
    <>
    <div className="comment" id={id}>
        <Counter score={score}/>
        <div className='comment__full'>
            <div className='comment__top'>
                <img src={img} alt={name} className='comment__img'/>
                <h4 className='comment__name'>{name}</h4>
                {currentUser.username == name && <span className='you'>you</span>}
                <p className='comment__date'>{date}</p>
                {currentUser.username == name ? <div className='comment__options'>
                  <p className='comment__delete'><img src="images/icon-delete.svg" alt="delete icon" /> Delete</p>
                  <p className='comment__edit'><img src="images/icon-edit.svg" alt="edit icon" /> Edit</p>
                </div> : <p className="comment__reply" onClick={handleReply}><img src="images/icon-reply.svg" alt="reply icon" />Reply</p>}
            </div>
            <p className='comment__content'>{text}</p>
        </div>
    </div>

    {replying && <CommInputBox curr={currentUser} handleClick={handleSendClick} textValue={textValue} handleChange={changeHandler} comm_function="reply"/>}

    <div className="replyDiv">
        {userReplies.map(reply => {
           return <Reply key={reply.id} id={reply.id} score={reply.score} img={reply.user.image.webp} name={reply.user.username} date={reply.createdAt} text={reply.content} parentName={name} currentUser = {currentUser.username}/>
        })}
    </div>
    </>
  )
}
