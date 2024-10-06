import '../sass/main.scss';
import '../App/App.scss';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Section from '../Section/Section';
import AddComent from '../AddCommentForm/AddCommentForm';


const PROFILES__DATA = [];

export default function App() {
	const [users, setUsers] = useState(PROFILES__DATA);

	function addIdComment(data) {
		const finishAddProfile = {
			...data,
			id: nanoid(),
		}
		return finishAddProfile;
	}

	return (
		<>
			<Section title="Коментарі">
				<div className='commentContainer'>
					<AddComent addIdComment={addIdComment} />
				</div>
			</Section>
		</>
	)
}