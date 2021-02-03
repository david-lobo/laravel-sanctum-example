import React from "react";

function AuthLayout({ title, children }) {
    return (  
        <div className="container auth-layout">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">{title}</div>
                        <div className="card-body">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;