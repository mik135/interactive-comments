/* eslint-disable react/prop-types */
import './App.css'
import Counter from './Counter'
import { useState } from "react"
import Dialog from './Dialog';

// eslint-disable-next-line react/prop-types
export default function Reply({id, score, img, name, date, text, parentName, currentUser, handleDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [replyEditValue, setReplyEditValue] = useState(text);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isOpened, setIsOpened] = useState(false);


  function handleEdit() {
    setIsEditing(state => !state);
  }

  function handleEditInputChange(e) {
    setReplyEditValue(e.target.value);
  }

  function handleEditClick() {
    setIsEditing(false);
  }

  function handleDel() {
    handleDelete(id);
  }

  function openModal() {
    setIsOpened(true);
    setIsDeleting(true)
  }

  function onClose() {
    setIsOpened(false);
    setIsDeleting(false);
  }


  return (
    <div className="reply" id={id}>
        <Counter score={score}/>
        <div className='reply__full'>
            <div className='reply__top'>
                <img src={img} alt={name} className='reply__img'/>
                <h4 className='reply__name'>{name}</h4>
                {currentUser == name && <span className='you'>you</span>}
                <p className='reply__date'>{date}</p>
                {currentUser == name ? 
                <div className='comment__options'>
                  <p className={isDeleting ? "comment__delete__off" : "comment__delete__on"} onClick={openModal}><img src="images/icon-delete.svg" alt="delete icon" /> Delete</p>
                  <p className={isEditing ? "comment__edit__off" : "comment__edit__on"} onClick={handleEdit}><img src="images/icon-edit.svg" alt="edit icon" /> Edit</p>
                </div> : <p className="comment__reply"><img src="images/icon-reply.svg" alt="reply icon" />Reply</p>}
            </div>
            {isEditing ? 
            <div className='edit__div'>
                  <textarea className='comm__box__textarea' name="" id="" cols="45" rows="5" onChange={handleEditInputChange}>{`${replyEditValue}`}</textarea>
                  <button className='comm__box__button' onClick={handleEditClick}>Update</button>
                </div> : <p className='reply__content'><span className='repliee'>{"@" + parentName}</span> {replyEditValue}</p>}
        </div>
        {isOpened &&<Dialog open={isOpened} onClose={onClose} handleDel={handleDel}/>}
    </div>
  )
}

