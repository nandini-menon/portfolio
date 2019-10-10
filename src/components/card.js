import React from 'react'
import { GoMarkGithub } from 'react-icons/go'

class Button extends React.Component {
render() {
    return (
    <a className="button button-primary" href={this.props.link} target='_blank' rel="noopener noreferrer">
        <GoMarkGithub /> Find out more
    </a>
    )
}
}

class CardBody extends React.Component {
render() {
    return (
    <div className="card-body">
        <p className="date">March 20 2015</p>

        <h2>{this.props.title}</h2>

        <p className="body-content">{this.props.text}</p>

        <Button link={this.props.link} />
    </div>
    )
}
}

class Card extends React.Component {
render() {
    return (
    <article className="card">
        {/* <CardHeader image={this.props.image}/> */}
        <CardBody title={this.props.title} text={this.props.text} link={this.props.link}/>
    </article>
    )
}
}

export default Card