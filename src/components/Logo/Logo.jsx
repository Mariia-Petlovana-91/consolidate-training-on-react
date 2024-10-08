import '../Logo/Logo.scss';
import { IoLogoReact } from "react-icons/io5";
import { sizeIcon } from '../../utils/sizeIcon';

export default function () {
	return (
		<div className="logo">
			<IoLogoReact className='icon logo__icon'
				size={sizeIcon.xxl}
			/>
		</div>
	)
}