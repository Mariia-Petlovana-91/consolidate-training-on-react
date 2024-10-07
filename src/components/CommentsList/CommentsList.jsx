import './CommentsList.scss'
import CommentItem from "../CommentItem/CommentItem";

export default function CommentsList({ array, onDeleteComment, isVisible, toggleVisibility}) {
	return (
		<ul className='comment__list'>
			{
				array.map(ar => (
					<li className='comment__item' key={ar.id}>
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
                                          isVisible={isVisible === ar.id}
                                          toggleVisibility={() => toggleVisibility(ar.id)}
						/>
					</li>
				))
			}
		</ul>
	);
}