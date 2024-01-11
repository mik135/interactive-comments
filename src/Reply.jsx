import './App.css'
import Counter from './Counter'

// eslint-disable-next-line react/prop-types
export default function Reply({id, score, img, name, date, text, parentName, currentUser }) {
  return (
    <div className="reply" id={id}>
        <Counter score={score}/>
        <div className='reply__full'>
            <div className='reply__top'>
                <img src={img} alt={name} className='reply__img'/>
                <h4 className='reply__name'>{name}</h4>
                {currentUser == name && <span className='you'>you</span>}
                <p className='reply__date'>{date}</p>
                {currentUser == name ? <div className='comment__options'>
                  <p className='comment__delete'><img src="images/icon-delete.svg" alt="delete icon" /> Delete</p>
                  <p className='comment__edit'><img src="images/icon-edit.svg" alt="edit icon" /> Edit</p>
                </div> : <p className="comment__reply"><img src="images/icon-reply.svg" alt="reply icon" />Reply</p>}
            </div>
            <p className='reply__content'><span className='repliee'>{"@" + parentName}</span> {text}</p>
        </div>
    </div>
  )
}

