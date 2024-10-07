import './CommentsList.scss'
import CommentItem from "../CommentItem/CommentItem";
import SearchComment from '../SearchComment/SearchComment';

export default function CommentsList({ array, onDeleteComment, isVisible, toggleVisibility}) {
	return (
		<ul className=''>
			{
				array.map(ar => (
					<li className='' key={ar.id}>
						<CommentItem 
							firstName={ar.firstName}
							lastName={ar.lastName}
							comment={ar.comment} 
							gender={ar.gender}
							hasAddress={ar.hasAddress}
							id={ar.id}
							phone={ar.phone}
							email={ar.email}
							onDeleteComment={onDeleteComment}
							isVisible={isVisible}
							toggleVisibility={toggleVisibility}
						/>
					</li>
				))
			}
		</ul>
	);
}