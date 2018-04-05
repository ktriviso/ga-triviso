import React from 'react';

export const Header = (props) => (

    <header id="header">
        <ul>
            <li><a onClick={(e)=>{e.preventDefault(); return props.setActiveComponent('Home')}}className="button">Home</a></li>
            <li><a onClick={(e)=>{e.preventDefault(); return props.setActiveComponent('About')}}className="button">About</a></li>
            <li><a onClick={(e)=>{e.preventDefault(); return props.setActiveComponent('Contact')}}className="button">Works</a></li>
        </ul>
        <hr className="divider"/>
    </header>

)
