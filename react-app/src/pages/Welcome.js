import React from 'react';
import { Link } from "react-router-dom";

function Welcome(props) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <section className="jumbotron text-center">
                        <div className="container">
                            <h1 className="jumbotron-heading">Laravel Sanctum Example</h1>
                            <p className="lead text-muted">This is a an example of using Laravel Sanctum with React for authenticating a Single Page Application (SPA).</p>
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

export default Welcome;