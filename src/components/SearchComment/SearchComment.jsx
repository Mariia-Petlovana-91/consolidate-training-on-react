import './SearchComment.scss';

export default function SearchComment({searchTerm, handleSearchChange}) {
	return (<>
		<input className='input search__input' type='text'
			name='search'
			placeholder='Пошук за іменем'
			value={searchTerm}
                  onChange={handleSearchChange}
		/>
	</>)
}

