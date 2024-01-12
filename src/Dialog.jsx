/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react" 


export default function Dialog({ onClose, open, handleDel}) {
const dialogRef = useRef(null);

useEffect(() => {
    if (open) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [open]);

  return (
    <dialog className='delete__modal' ref={dialogRef}>
          <h1>Delete Comment</h1>
          <p>Are you sure you want to delete this comment? This will remove the comment and cannot be undone.</p>
          <div className="delete__modal__buttons__div">
            <button className="cancel" onClick={onClose}>no, cancel</button>
            <button className="delete" onClick={handleDel}>yes, delete</button>
          </div>
    </dialog>
  )
}
