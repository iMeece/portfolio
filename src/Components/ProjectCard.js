const ProjectCard = (props) => {
    return (
        <div className='project-card flex'>
            <h5 className='project-card-title'>
                <a href={ props.link }>{ props.title }</a>
            </h5>
            <div className='project-card-thumbnail-link flex' >
                <a href={ props.link }><div className={'project-card-thumbnail project-card-thumbnail-' + props.classIndex}></div></a>
            </div>
        </div>
    );
}
 
export default ProjectCard;