import React, {Component} from 'react'

export default class About extends Component {

    render() {

        return (
            <section id="about">
                <div>
                    <p className="title">About</p>

                    <p>NYC based Software Engineer student<br/>Formally educated in HTML, CSS, Javascript, JQuery, API implementation, GitHub, CMS, Firebase, Heroku and introductory React.</p>

                    <hr className="small-divider"/>

                    <p className="ptag-edit">Front-end Web Development | General Assembly<br/>
                    Javascript 101 New York City | General Assembly<br/>Hack Reactor Structured Study Program | Hack Reactor</p>

                </div>
            </section>
        )
    }
}
