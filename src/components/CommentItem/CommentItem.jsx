import React, { useState } from 'react';
import './CommentItem.scss';
import AboutUser from '../AboutUser/AboutUser';

export default function CommentItem({ firstName, lastName, phone, email, comment, gender, hasAddress, id, onDeleteComment, isVisible, toggleVisibility }) {


	return (
		<>
			<h4 className=''>{firstName} {lastName}</h4>
			<p className=''>{comment}</p>
			<div className=''>
				<button className='' type='button' onClick={() => onDeleteComment(id)}>Delete</button>
				<button className='' type='button' onClick={toggleVisibility}>
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
			</div>
		</>
	);
}