import { FaCopyright } from 'react-icons/fa';

const Footer = () => {
    return (
        <div id='footer' className='flex'>
            <div id='footer-background'></div>
            <h6>Copyright <FaCopyright size={10} /> 2021 - <a href='https://github.com/iMeece'> iMeece</a></h6>
        </div>
    );
}
 
export default Footer
