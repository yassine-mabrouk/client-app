import React, { Component } from 'react'
import PropTypes from 'prop-types'


 class Article extends Component {
    
    render() {
        const {name_article} = this.props;
        return (
            <div>
                <h4>{name_article}</h4>
                <p className="lead">Lorem ipsum epellat accusantium eveniet ipsa dolore laborum, at dignissimos quibusdam eius nesciunt sapiente suscipit!
                </p>
                <button className="bnt btn-primary text-center ">Read more</button>
            </div>
        )
    }
}
Article.propTypes={
    name_article:PropTypes.string.isRequired
}
export default Article ;

