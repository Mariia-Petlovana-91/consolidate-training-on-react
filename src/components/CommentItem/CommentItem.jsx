import './CommentItem.scss';
import React, { useState } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { sizeIcon } from '../../utils/sizeIcon';
import { toggleVisibility } from '../../utils/changeVisibiliti';
import AboutUser from '../AboutUser/AboutUser';

export default function CommentItem({ firstName,
	lastName, phone, email, comment,
	gender, hasAddress, id, onDeleteComment }) {
	
      const [visibleId, setVisibleItemId] = useState(null);
	const isVisible = visibleId === id;
	
	return (
		<>
			<button className='comment__btnDelete'
				type='button'
				onClick={() => onDeleteComment(id)}>
				<AiFillDelete className='icon'
					size={sizeIcon.sm}
				/>
			</button>
			<h4 className='title__fourth comment__title'>
				{firstName}&#8194;
				{lastName}
			</h4>
			<p className='comment__text'>{comment}</p>
			<button className='btn'
				type='button'
				onClick={()=>toggleVisibility(setVisibleItemId, id)}>
				{isVisible ? 'Hide' : 'Show more'}
			</button>
			{isVisible && (
				<AboutUser 
					phone={phone}
					email={email}
					gender={gender}
					hasAddress={hasAddress} 
					/>
			)}
			
		</>
	);
}