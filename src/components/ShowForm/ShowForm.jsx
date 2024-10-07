import '../ShowForm/ShowForm.scss'
import AddCommentForm from '../AddCommentForm/AddCommentForm'

export default function ShowForm({ isVisible, toggleVisibility, addIdComment }) {
	return (
		<div className=''>
 		 <button className='' type="button" onClick={toggleVisibility}>{isVisible ? 'Hide form' : 'Add comment'}</button>
		 {isVisible && <AddCommentForm addIdComment={addIdComment} />}
		</div>
	)
}