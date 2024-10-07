import React, { useState } from 'react';
import './CommentItem.scss';
import AboutUser from '../AboutUser/AboutUser';

export default function CommentItem({ firstName, lastName, phone, email, comment, gender, hasAddress, id, onDeleteComment, isVisible, toggleVisibility }) {


	return (
		<>
			<button className='btn comment__but' type='button' onClick={() => onDeleteComment(id)}>Delete</button>
			<h4 className='title__fourth comment__title'>{firstName} {lastName}</h4>
			<p className='comment__text'>{comment}</p>
			<button className='btn comment__but comment__but-show' type='button' onClick={toggleVisibility}>
				{isVisible ? 'Hide Info' : 'Show Info'}
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