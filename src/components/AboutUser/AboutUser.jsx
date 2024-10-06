import './AboutUser.scss';

// export default function AboutUser({phone, email, grnder, hasAddress,}) {
// 	return (
// 		<div className=''>
// 			<p className=''>{phone}</p>
// 			<p className=''>{email}</p>
// 			<p className=''>{grnder}</p>
// 			<p className=''>{ hasAddress}</p>

// 		</div>
// 	)
// }


export default function AboutUser({ phone, email, gender, hasAddress }) {
	console.log('AboutUser props:', { phone, email, gender, hasAddress }); // Додаємо лог

	return (
		<div className='about-user'>
			<p><strong>Phone:</strong> {phone}</p>
			<p><strong>Email:</strong> {email}</p>
			<p><strong>Gender:</strong> {gender}</p>
			<p><strong>Has Address:</strong> {hasAddress ? 'Yes' : 'No'}</p>
		</div>
	);
}