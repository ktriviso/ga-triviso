import React, {Component} from 'react'

export default class Home extends Component {

    render() {

        return (
            <section id="home">
                <div className="image"><img src="/images/profile.jpg" alt=""/></div>
                <h1>Krista Triviso</h1>
                <hr className="small-divider"/>
                <p>Aspiring Web Developer<br/>Brooklyn, New York</p>
            </section>
        )
    }
}
