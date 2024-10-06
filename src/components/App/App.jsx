import '../sass/main.scss';
import '../App/App.scss';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import PROFILES__DATA from '/comments.json'
import Section from '../Section/Section';
import AddComent from '../AddCommentForm/AddCommentForm';
import CommentsList from '../CommentsList/CommentsList';


export default function App() {
    function getInitialState() {
        const savedComments = localStorage.getItem('comments');
        return savedComments ? JSON.parse(savedComments) : PROFILES__DATA;
    }

    const [users, setUsers] = useState(getInitialState);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(users));
    }, [users]);


    function addIdComment(data) {
        const finishAddProfile = {
            ...data,
            id: nanoid(),
        };
        setUsers((prev) => [...prev, finishAddProfile]);
    }

    function onDeleteComment(commentId) {
        const updateUsers = users.filter((user) => user.id !== commentId);
        setUsers(updateUsers);
    }

    function handleSearchChange(e) {
	    setSearchTerm(e.target.value);
    }

    const filteredUsers = users.filter(user =>
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) // Пошук по firstName
    );

	return (
		<>
			<Section title="Коментарі">
				<div className='commentContainer'>
					<AddComent addIdComment={addIdComment} />
					<CommentsList array={filteredUsers}
						onDeleteComment={onDeleteComment}
						searchTerm={searchTerm}
						handleSearchChange={handleSearchChange}
					/>
				</div>
				
			</Section>
		</>
	)
}