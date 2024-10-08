import './AboutUser.scss';

export default function AboutUser({ phone, email, gender, hasAddress }) {
	return (
		<div className='about'>
			<p className='about__text'>
				<strong className='about__strong'>
					Phone:</strong>
				{phone}
			</p>
			<p className='about__text'>
				<strong className='about__strong'>
					Email:</strong>
				{email}
			</p>
			<p className='about__text'>
				<strong className='about__strong'>
					Gender:</strong>
				{gender}
			</p>
			<p className='about__text'>
				<strong className='about__strong'>
					Has Address:</strong>
				{hasAddress ? 'Yes' : 'No'}
			</p>
		</div>
	);
}