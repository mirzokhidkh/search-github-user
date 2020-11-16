import React, {Fragment, useContext} from "react";
import {Search} from "../../components/search/search";
import {Card} from "../../components/card/card";
import {GithubContext} from "../../context/github/githubContext";
import {Loader} from "../../components/loader/loader";

export const Home = () => {
    const {loading, users} = useContext(GithubContext);

    return (
        <Fragment>
            <Search/>
            <div className="row">
                {
                    loading
                        ? <Loader/>
                        : users.map(user => (
                            <div className="col-md-4 col-sm-6 col-6 mb-4" key={user.id}>
                                <Card user={user}/>
                            </div>
                        ))
                }

            </div>
        </Fragment>
    )
}
