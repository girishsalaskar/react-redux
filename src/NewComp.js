import React, { Component } from "react";
import { connect } from "react-redux";


class NewComp extends Component {
    constructor(props) {
        super(props);
        this.style = {
            fontStyle: 'italic',
            color: 'purple'
        }
    }

    render() { 
        return ( 
            <div className="App">
                <h3 style={this.style}>{this.props.message}</h3>
                <button onClick={this.props.buttonChange}>Click here</button>
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buttonChange: () => dispatch({type: 'Message Change'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (NewComp);