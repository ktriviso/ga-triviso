import React, {Component} from 'react'

export default class Contact extends Component {

    render() {

        return (
            <section id="contact">
                <p className="title">Looking for Custom React Apps?</p>
                <p className="ptag-edit">CMS integration available</p>
                <div className="hover">
                    <div className="edit">
                        <figure><a href="https://voxfelis.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="/images/aleka2.jpg" alt=""/></a></figure>
                    </div>
                    <div className="edit">
                        <figure><a href="https://paulproduction.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="/images/paul.jpg" alt=""/></a></figure>
                    </div>
                </div>
                <p className="ptag-edit">In search of collaborative projects, internships, employment oppertunities and networking events.<br/>Please contact krista.triviso91@gmail.com</p>
            </section>
        )
    }
}
