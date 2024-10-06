import './SearchComment.scss';

export default function SearchComment({searchTerm, handleSearchChange}) {
	return (<>
		<input className='' type='text'
			name='search'
			placeholder='Знайти коментар за іменем'
			value={searchTerm}
                  onChange={handleSearchChange}
		/>
	</>)
}

