import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Test extends Component {
    render() {
        return (
            <div>
                {this.props.context}
            </div>
        )
    }
}
Test.protoType = {
    context: PropTypes.string
}