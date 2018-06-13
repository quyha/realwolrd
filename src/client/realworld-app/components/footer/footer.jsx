import React, { Component } from 'react';

export class Footer extends Component{
    render() {
        return(
            <footer>
                <div className="container">
                    <a href="/" className="logo-font">conduit</a>
                    <span className="attribution">
                      An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code & design licensed under MIT.
                    </span>
                </div>
            </footer>
        );
    }
}