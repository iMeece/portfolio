import { FaHome, FaUser, FaCode, FaFolder } from 'react-icons/fa';

const Nav = () => {
    return (
        <div id='nav'>
            <div id='nav-icons-container' className='flex container'>
                <div className='nav-icon'><a href='#home'><FaHome /></a></div>
                <div className='nav-icon'><a href='#about-home'><FaUser /></a></div>
                <div className='nav-icon'><a href='#skills'><FaCode /></a></div>
                <div className='nav-icon'><a href='#projects'><FaFolder /></a></div>
            </div>
        </div>
    );
}
 
export default Nav;