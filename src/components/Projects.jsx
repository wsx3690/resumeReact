import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects">
        <div className="container">
            <h2 className="section-title">Projects</h2>
            <div className="project-grid">
                <div className="project-card">
                    <div className="card-content">
                        <h3>Project Name</h3>
                        <p>[Placeholder: Project description.]</p>
                        <div className="project-tags">
                            <span className="tag">Tech Stack</span>
                        </div>
                        <a href="#" className="project-link">View Project</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Projects;
