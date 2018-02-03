import React from 'react';

export const Splash = (props) => (

    <section id="splash">
        <ul>
            <li><a onClick={(e)=>{e.preventDefault(); return props.enterSite()}}className="button">Enter</a></li>
        </ul>
    </section>

)
