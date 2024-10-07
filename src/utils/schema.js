import * as Yup from "yup";


const phoneValidationPattern = /^[\+]?[\d\s\-\(\)\.]{11,15}$/;
	
const formSchemaValidate = Yup.object({
	firstName: Yup.string()
		.min(2, "Ім'я має містити більше двох символів")
		.max(25, "Ім'я має містити менше 25 символів")
		.required("поле Ім'я не може бути пустим"),
	lastName: Yup.string()
		.min(2, "Прізвище має містити більше двох символів")
		.max(25, "Прізвище має містити менше 25 символів")
		.required("поле Прізвище не може бути пустим"),
	phone: Yup.string()
		.required("поле Телефон не може бути пустим")
		.matches(phoneValidationPattern, "Неправильний номер"),
	email: Yup.string()
		.required("поле Пошта не може бути пустим")
		.email("Неправильна пошта"),
	comment: Yup.string()
		.required("Залиште свій коментар"),
	gender: Yup.string()
		.required("Оберіть Вашу стать")
		.oneOf(['woman', 'man']),
	hasAddress: Yup.boolean(),
});

export default formSchemaValidate;