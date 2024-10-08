import './AddComentForm.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import formSchemaValidate from '../../utils/schema';
import { sizeIcon } from '../../utils/sizeIcon';
import { MdPeopleAlt } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { FaComments } from "react-icons/fa6";
import { FaTransgender } from "react-icons/fa";

export default function AddCommentForm({ addIdComment }) {
	
	const INITIAL__VALUES = {
	firstName: "",
	lastName: "",
	phone: "",
	email: "",
	comment: "",
	gender: "",
	hasAddress: false,
}
	function handleSabmit(values, actions) {
		addIdComment(values);
		actions.resetForm();
		return;
		
	}



	return (
		<Formik initialValues={INITIAL__VALUES} onSubmit={handleSabmit} validationSchema={formSchemaValidate}>
			{(form) => (
				<Form className='form'>
					{form.values.firstName === "#heppyday2025" && (
						<h2 className='promo'>Вітаємо!🎊 Ви отримуєте знижку у нашому кафе 50%!✨ Ось Ваш промокод: {''}
							<code className='code'>#heggg456</code>{''}
						</h2>)
					}
			                 <label className='form__label'>
						<span className='form__span'>Ім'я
						
						</span>
						<div className='position__container'>
							<Field className='input position__input
							  ' type='text'
							   name='firstName'
							   placeholder='Введіть Ваше Ім1я'
							/>
							<MdPeopleAlt className='icon position__icon'
								size={sizeIcon.sm}
							/>
						</div>
						<ErrorMessage
							className='error'
							name="firstName"
							component="span"
						/>
			                  </label>
			            <label className='form__label'>
			            	<span className='form__span'>Прізвище</span>
						<div className='position__container'>
							<Field className='input position__input'
							   type='text'
							   name='lastName'
							   placeholder='Введіть Ваше Прізвище'
							/>
							<MdPeopleAlt className='icon position__icon'
								size={sizeIcon.sm}
							/>
						</div>
						<ErrorMessage className='error'
							name="lastName"
							component="span"
						/>
			            </label>
			            <label className='form__label'>
			            	<span className='form__span'>Телефон</span>
						<div className='position__container'>
							<Field className='input position__input'
							  type='text'
							  name='phone'
							  placeholder='+38xxxxxxxxxx'
							/>
							<AiFillPhone className='icon position__icon'
								size={sizeIcon.sm}
							/>
						</div>
						<ErrorMessage className='error'
							name="phone"
							component="span"
						/>
			            </label>
			            <label className='form__label'>
			            	<span className='form__span'>Ел.Пошта</span>
						<div className='position__container'>
							<Field className='input position__input'
							  type='email'
							  name='email'
							  placeholder='your@email.com'
							/>
							<IoIosMail className='icon position__icon'
								size={sizeIcon.sm}
							/>
						</div>
						<ErrorMessage className='error'
							name="email"
							component="span"
						/>
			            </label>
			            <label className='form__label'>
						<span className='form__span form__span--comment'>
							Коментар
							<FaComments className='icon'
								size={sizeIcon.sm}
							/>
						</span>
						<Field className='textarea'
							type='textarea'
							name="comment"
							rows="4"
							cols="50"
							placeholder="Введіть ваш коментар тут..."
						/>
						<ErrorMessage className='error'
							name="comment"
							component="span"
						/>
			            </label>
			            <div>
						<h3 className='form__genderTitle'>Вкажіть стать:
							<FaTransgender className='icon form__iconGender'
								size={sizeIcon.sm}
								
							/>
						</h3>
			            	<div className='form__genderContainerLabel' >
		                  		<label className='form__genderLabel'>
								<Field className='form__genderInput'
									type='radio'
									name='gender'
									value='woman'
									required
								/>
								<span className='form__genderSpan'>
									Жінка
								</span>
								<ErrorMessage className='error'
									name="woman"
									component="span"
								/>
			                        </label>
			                        <label className='form__genderLabel'>
								<Field className='form__genderInput'
									type='radio'
									name='gender'
									value='man'
									required
								/>
								<span className='form__genderSpan'>
									Чоловік
								</span>
								<ErrorMessage className='error'
									name="man"
									component="span"
								/>
			                        </label>
			            	</div>
			            </div>
			            <label className='form__checkLabel'>
						<Field className='form__checkInput'
							type='checkbox'
							name='hasAddress'
						/>
						<span className='form__checkSpan'>
							У Вас є фізична адресу користувача?
						</span>
			            	
			            </label>
					<button className='form__btn'
						type='submit'>
						Надіслати
					</button>
		            </Form>
	            )}
		</Formik>	
	)
}