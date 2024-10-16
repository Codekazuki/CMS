import React from "react";
import { useFetchProject } from "./fetchProject";
const Projects = () => {
  const { loading, projects } = useFetchProject();
  if (loading) {
    return (
      <section className='projects'>
        <h2>Loading...........</h2>
      </section>
    );
  }
  return (
    <section className='projects'>
      <div className='title'>
        <h2>Projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className='projects-center'>
        {projects.map((project) => {
          const { id, img, title, url } = project;
          return (
            <a
              target='_blank'
              rel='noreferrer'
              className='project'
              href={url}
              key={id}
            >
              <img alt={title} className='img' />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
