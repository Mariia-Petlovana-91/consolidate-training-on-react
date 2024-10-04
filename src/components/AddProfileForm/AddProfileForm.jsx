import './AddProfileForm.scss'

export default function AddProfileForm({addIdProfile}) {
      function handleSabmit(e) {
	 	e.preventDefault();
		const form = e.currentTarget;
		const firstName = form.elements.firstName.value;
		const lastName = form.elements.lastName.value;
		const phone = form.elements.phone.value;
		const email = form.elements.email.value;
		const comment = form.elements.comment.value;
		const gender = form.elements.gender.value;
		const hasAddress = form.elements.hasAddress.checked;

		const formData = {
			firstName,
			lastName,
			phone,
			email,
			comment,
			gender,
			hasAddress,
		}
		return addIdProfile(formData);
		
	}

	return (
		<form onSubmit={handleSabmit} className='form'>
			<label className='form__label'>
				<span className='form__span'>Ім1я</span>
				<input className='form__input' type='text' name='firstName' placeholder='Введіть Ваше Ім1я'/>
			</label>
			<label className='form__label'>
				<span className='form__span'>Прізвище</span>
				<input className='form__input' type='text' name='lastName' placeholder='Введіть Ваше Прізвище'/>
			</label>
			<label className='form__label'>
				<span className='form__span'>Телефон</span>
				<input className='form__input' type='text' name='phone' placeholder='+38xxxxxxxxxx'/>
			</label>
			<label className='form__label'>
				<span className='form__span'>Ел.Пошта</span>
				<input className='form__input' type='email' name='email' placeholder='your@email.com'/>
			</label>
			<label className='form__label'>
				<span className='form__span'>Коментар</span>
				<textarea className='form__textarea' id="comment" name="comment" rows="4" cols="50" placeholder="Введіть ваш коментар тут..."></textarea>
			</label>
			<div>
      			<h3 className='form__genderTitle'>Вкажіть стать:</h3>
				<div className='form__genderContainerLabel' >
		      		<label className='form__genderLabel'>
					      <input className='form__genderInput' type='radio' name='gender' value='woman' required />
					      <span className='form__genderSpan'>Жінка</span>
			            </label>
			            <label className='form__genderLabel'>
					      <input className='form__genderInput' type='radio' name='gender' value='man' required />
					      <span className='form__genderSpan'>Чоловік</span>
			            </label>
				</div>
			</div>
			<label className='form__checkLabel'>
				<input className='form__checkInput' type='checkbox' name='hasAddress'/>
				<span className='form__checkSpan'>У Вас є фізична адресу користувача?</span>
				
			</label>
			<button className='form__btn' type='submit'>Надіслати</button>
		</form>
	)
}