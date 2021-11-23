import SkillCard from "./SkillCard";
import { FaHtml5, FaCss3, FaJs, FaReact, FaJava, FaPython, FaGitAlt, FaNpm } from 'react-icons/fa';

const Skills = () => {

    const skillsArray = [
        { title: 'html', image: <FaHtml5 />, id: 'skill-0' },
        { title: 'css', image: <FaCss3 />, id: 'skill-1' },
        { title: 'javascript', image: <FaJs />, id: 'skill-2' },
        { title: 'react', image: <FaReact />, id: 'skill-3' },
        { title: 'java', image: <FaJava />, id: 'skill-4' },
        { title: 'python', image: <FaPython />, id: 'skill-5' },
        { title: 'git', image: <FaGitAlt />, id: 'skill-6' },
        { title: 'npm', image: <FaNpm />, id: 'skill-7' }
    ];

    return (
        <div id='skills'>
            <div id='skills-background'></div>
            <div id='skills-container' className='container'>
                <h2>Skills</h2>
                <div id='skills-card-container' className='flex'>
                    { skillsArray.map((skill) => (
                        <SkillCard image={ skill.image } key={ skill.id }/>
                    )) }
                </div>
            </div>
        </div>
    );
}
 
export default Skills;