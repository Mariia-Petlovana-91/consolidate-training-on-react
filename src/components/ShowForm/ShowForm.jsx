import '../sass/main.scss';
import '../ShowForm/ShowForm.scss'
import AddCommentForm from '../AddCommentForm/AddCommentForm'

export default function ShowForm({ isVisible, toggleVisibility, addIdComment }) {
	return (
		<div>
 		 <button className='btn show__btn' type="button" onClick={toggleVisibility}>{isVisible ? 'Hide form' : 'Add comment'}</button>
		 {isVisible && <AddCommentForm addIdComment={addIdComment} />}
		</div>
	)
}