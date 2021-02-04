import React from 'react';
import { Link } from "react-router-dom";

function About(props) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <section className="jumbotron text-center">
                        <div className="container">
                            <h1 className="jumbotron-heading">About Page</h1>
                            <p className="lead text-muted">This is a public page that is visible without authentication.  The homepage is a protected page that requires a user to login.</p>
                            <p>
                                <Link to="/login" className="btn btn-primary my-2 mr-2">Login</Link>
                                <Link to="/register" className="btn btn-success my-2">Register</Link>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default About;