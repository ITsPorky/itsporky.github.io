import React from 'react';

const ProjectCard = ({image, imageAlt, title, description, link1Text, link1, link2Text, link2, skills}) => {
    let isLink1 = false;
    let isLink2 = false;

    if(link1) {
        isLink1 = true;
    }

    if(link2) {
        isLink2 = true;
    }

    return (
        <div class="card shadow-sm">
            <img
            src={image}
            alt={imageAlt}
            width="450"
            height="244"
            class="img-fluid project-img"
            />
            <div class="card-body">
                <h4 class="card-text">{title}</h4>
                <p class="card-text">
                    {description}
                </p>
                <div
                    class="d-flex justify-content-between align-items-center"
                >
                    <div class="btn-group">
                        { isLink1 ?
                        <a
                          href={link1}
                          target="_blank"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          {link1Text}
                        </a>
                        : null }
                        { isLink2 ?
                        <a
                            href={link2}
                            target="_blank"
                            class="btn btn-sm btn-outline-secondary"
                        >
                            {link2Text}
                        </a>
                        : null }
                    </div>
                    <small class="text-muted"
                    >{skills}</small>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;