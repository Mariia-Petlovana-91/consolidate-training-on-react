import '../sass/main.scss';
import '../App/App.scss';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Section from '../Section/Section';
import AddProfileForm from '../AddProfileForm/addProfileForm';

const PROFILES__DATA = [];

export default function App() {
	const [users, setUsers] = useState(PROFILES__DATA);

	function addProfile(data) {
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
					<AddProfileForm addIdProfile={addProfile} />
				</div>
			</Section>
		</>
	)
}