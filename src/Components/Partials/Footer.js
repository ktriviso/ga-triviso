import React from 'react';

export const Footer = (props) =>(
    <footer id="footer">
        <hr className="divider"/>
        <ul>
            <li className="icons"><a href="https://github.com/ktriviso" type="link"><i className="fab fa-github"></i></a></li>
            <li className="icons"><a href="https://codepen.io/ktriviso/" type="link"><i className="fab fa-codepen"></i></a></li>
            <li className="icons"><a href="https://www.linkedin.com/in/krista-triviso-a804b9128/" type="link"><i className="fab fa-linkedin-in"></i></a></li>
            <li className="icons"><a href="https://repl.it/@KristaTriviso" type="link"><i className="fa fa-terminal"></i></a></li>
            <li className="icons" id="invert"><i className="fa fa-info"></i></li>
        </ul>
    </footer>
)
