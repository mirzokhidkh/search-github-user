import React, {Fragment} from "react";

export const Repos =({repos})=>(
    <Fragment>
        {
            repos.map(repo=>(
                <div className="repos mb-3" key={repo.id}>
                        <h3>
                            <a href={`${repo.html_url}`}
                               rel="noopener noreferrer"
                               target="_blank"
                            >
                                {repo.name}
                            </a>
                        </h3>
                </div>
            ))
        }
    </Fragment>
)