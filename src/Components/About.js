import React from 'react';

export default class about extends React.Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        // document.getElementById('js-ul').style.animationPlayState = "paused";
        // function delayAnimation(){
        //     document.getElementById('js-ul').style.animationPlayState = "running";
        // }
        // setTimeout(delayAnimation, 1000);
    }

    render(){
        return (
            <section id="about">
                <div>
                    <p className="title">About</p>

                    <p>
                    NYC based Full-stack developer experienced in deploying and building websites from wire-frame to production. Comprehensive understanding of class-based object oriented programming, RESTful architecture and NERD stack (Node, Express, React, SQL).
                    </p>

                    <div className="about-technologies">
                        <ul id="js-ul">
                            <li><img src="/images/javascript.svg" alt=""/><br/>Javascript</li>
                            <li><img src="/images/ruby.png" alt=""/><br/>Ruby</li>
                            <li><img src="/images/sql.svg" alt=""/><br/>SQL</li>
                            <li><img src="/images/html.png" alt=""/><br/>HTML5</li>
                            <li><img src="/images/css.png" alt=""/><br/>CSS3</li>
                            <li><img src="/images/react.png" alt=""/><br/>React</li>
                            <li><img src="/images/node.png" alt=""/><br/>Node</li>
                            <li><img src="/images/jquery.png" alt=""/><br/>JQuery</li>
                            <li><img src="/images/PostsgreSQL.png" alt=""/><br/>PostsgreSQL</li>
                            <li><img src="/images/redux.png" alt=""/><br/>Redux</li>
                            <li><img src="/images/rails.png" alt=""/><br/>Ruby on Rails</li>
                            <li><img src="/images/express.Default" alt=""/><br/>Express</li>
                            <li><img src="/images/materialize.png" alt=""/><br/>Materialize</li>
                            <li><img src="/images/bootstrap.png" alt=""/><br/>Bootstrap</li>
                            <li><img src="/images/github.png" alt=""/><br/>Github</li>
                            <li><img src="/images/firebase.png" alt=""/><br/>Firebase</li>
                            <li><img src="/images/heroku.png" alt=""/><br/>Heroku</li>
                            <li><img src="/images/netlify.png" alt=""/><br/>Netlify</li>
                            <li><img src="/images/contentful.png" alt=""/><br/>Contentful</li>
                            <li><img src="/images/npm.png" alt=""/><br/>NPM</li>
                            <li><img src="/images/axios.jpg" alt=""/><br/>Axios</li>
                            <li><img src="/images/fetch.png" alt=""/><br/>Fetch</li>
                            <li><img src="/images/flux.jpg" alt=""/><br/>Flux</li>
                            <li><img src="/images/trello.png" alt=""/><br/>Trello</li>
                        </ul>
                    </div>

                    <div id="mobile">
                        <span>scroll me</span><br/>
                        <div className="bounce">
                        <i className="fas fa-angle-down "></i>
                        </div>
                    </div>

                    <hr className="small-divider"/>

                    <p className="ptag-edit">In search of collaborative projects, internships, employment opportunities and networking events. Please contact krista.triviso91@gmail.com</p>

                </div>
            </section>
        )
    }
}
//
//
// Fluent in the following <b>Languages</b> Javascript, Ruby, SQL, HTML5, CSS3 <b>Frameworks and Libraries</b> React, JQuery, PostsgreSQL, Node, Materialize, Bootstrap, Redux, Ruby on Rails, Express <b>Deployment and Services</b> GitHub, Firebase, Heroku, Netlify <b>Tools</b> CMS, NPM, Axios, Fetch, Flux, Trello, Nodemailer, Bcrypt.

 // Networking opportunist and creative visionary with a perpetual drive to learn new languages and tools.
