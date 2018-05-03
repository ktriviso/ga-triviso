import React from 'react';

export const Contact = (props) => (

    <section id="contact">
        <p className="title">CLIENT SITES | PERSONAL PROJECTS</p>
        <p className="ptag-edit">CMS integrations for all client sites</p>
        <div className="hover">
            <div className="edit">
                <figure><a href="https://voxfelis.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="/images/aleka2.jpg" alt=""/></a></figure>
            </div>
            <div className="edit">
                <figure><a href="https://www.pr-programming.com/" target="_blank" rel="noopener noreferrer"><img src="/images/paul.jpg" alt=""/></a></figure>
            </div>

            <div className="edit">
                <figure><a href="http://collision-game.netlify.com/" target="_blank" rel="noopener noreferrer"><img src="/images/collision.png" alt=""/></a></figure>
            </div>
            <div className="edit">
                <figure><a href="https://vice-feed.herokuapp.com/login" target="_blank" rel="noopener noreferrer"><img src="/images/vice.png" alt=""/></a></figure>
            </div>

            <div className="edit">
                <figure><a href="https://trump-project.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="/images/trump.png" alt=""/></a></figure>
            </div>
            <div className="edit">
                <figure><a href="https://typer-project.netlify.com/" target="_blank" rel="noopener noreferrer"><img src="/images/typer.png" alt=""/></a></figure>
            </div>
        </div>
        <span>scroll me</span><br/>
        <div className="bounce">
        <i className="fas fa-angle-down "></i>
        </div>
        <p className="ptag-edit scroll">The repositories for the following applicaitons are available on <a id="github" href="https://github.com/ktriviso">Github</a> and are hosted on Netlify.</p>
    </section>
)
