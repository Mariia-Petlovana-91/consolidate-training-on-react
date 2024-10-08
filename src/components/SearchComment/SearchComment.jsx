import './SearchComment.scss';
import { sizeIcon } from '../../utils/sizeIcon';
import { FaSearch } from "react-icons/fa";

export default function SearchComment({searchTerm, handleSearchChange}) {
	return (
		<div className='search__container position__container'>
			<input className='input position__input'
			   type='text'
			   name='search'
			   placeholder='Пошук за іменем'
			   value={searchTerm}
                     onChange={handleSearchChange}
		     />
		    <FaSearch className='icon position__icon' size={sizeIcon.sm}/>	
		</div>
      )
}

