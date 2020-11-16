import React, {Fragment, useEffect, useContext} from "react";
import {GithubContext} from "../../context/github/githubContext";
import {Link} from "react-router-dom";
import {Repos} from "../../components/repos/repos";
import {Loader} from "../../components/loader/loader";
import "./profile.css";

export const Profile = ({match}) => {

    const {getUser, getRepos, loading, user, repos} = useContext(GithubContext);
    const urlName = match.params.name;

    useEffect(() => {
        getRepos(urlName);
        getUser(urlName)
        // eslint-disable-next-line
    }, [])

    if (loading) {
        return <Loader/>
    }


    const {
        name, company, login, avatar_url,
        html_url, location, followers,
        following, public_repos, bio,
        public_gists, twitter_username,
    } = user;

    return (
        <Fragment>
            <Link to="/">Go to Home</Link>

            <div className="card mt-3">
                <div className="card-header">
                    <h2>{name}</h2>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3">
                            <img className="card-img-top mb-2" src={avatar_url} alt={login}/>

                         <div className="">
                             {
                                 bio && <span className="w-100"><strong>Bio: </strong>{bio}</span>
                             }

                             <a
                                 href={html_url}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="btn btn-primary mt-3"
                             >Open Profile</a>
                         </div>

                        </div>
                        <div className="col-md-9 col-sm-12 col-12">


                                    <ul className="list-group list-group-flush">
                                        {login && <li className="list-group-item">
                                            <strong>login : </strong>{login}
                                        </li>
                                        }
                                        {location && <li className="list-group-item">
                                            <strong>company : </strong>{company}
                                        </li>
                                        }
                                        {location && <li className="list-group-item">
                                            <strong>location : </strong>{location}
                                        </li>
                                        }
                                        {twitter_username && <li className="list-group-item">
                                            <strong>twitter_username : </strong>{twitter_username}
                                        </li>
                                        }
                                    </ul>
                            <div className="badges">
                                <h4>
                                    <span className="badge badge-pill badge-primary">followers: {followers}</span>
                                </h4>
                                <h4>
                                    <span className="badge badge-pill badge-success">following: {following}</span>
                                </h4>
                                <h4>
                                        <span
                                            className="badge badge-pill badge-secondary">public_repos: {public_repos}</span>
                                </h4>
                                <h4>
                                        <span
                                            className="badge badge-pill badge-dark">public_gists: {public_gists}</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <h3 className="text-center">Repositories</h3>
                    <Repos repos={repos}/>
                </div>
            </div>
        </Fragment>
    )
}