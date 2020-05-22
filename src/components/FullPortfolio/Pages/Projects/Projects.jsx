import React from "react";
import styles from "./Projects.module.css";
import Project from "./Project/Project";
import H2 from "../../H2/H2";

function Projects(props) {
    let projects = props.user.projects.map(project => <Project project={props.projects[project]} key={project.name}/>);

    return (
        <div className={styles.projects} id="projects">
            <div className={styles.myProjectsContainer}>
                <H2 name="Projects"/>
                <div className={styles.listOfMyProjects}>
                    {projects}
                </div>
            </div>
        </div>
    );
}

export default Projects;
