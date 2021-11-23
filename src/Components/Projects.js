import ProjectCard from "./ProjectCard";

const Projects = () => {

    const projectsArray = [
        { title: 'Creative Agency', link: 'https://imeece.github.io/creative-agency-template/', id: 'project-0' },
        { title: 'Fishpedia', link: 'https://imeece.github.io/fishpedia/', id: 'project-1' },
        { title: 'title3', link: '', id: 'project-2' }
    ];

    return (
        <div id='projects'>
            <div id='projects-container' className='container'>
                <h2>Projects</h2>
                <div id='projects-card-container' className='flex'>
                    { projectsArray.map((project, index) => (
                        <ProjectCard title={ project.title } link={ project.link } classIndex={ index } key={ project.id }/>
                    )) }
                </div>
            </div>
        </div>
    );
}
 
export default Projects;