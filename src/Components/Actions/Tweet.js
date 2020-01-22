import React, {Component} from 'react';
import "../../App.css"
import {bindActionCreators} from "redux";
import * as tweetActions from "../../Store/Actions/tweetActions"
import {connect} from "react-redux";

class Tweet extends Component {

    state={

        content : ''

    }
    handleChange=(e)=>{

        this.setState({

            [e.target.name] : e.target.value

        })

    }
    handleSubmit=()=>{

        this.props.tweet(this.state);
        this.setState({
            content : ''
        })

    }

    render() {
        return (
            <div>


                <div className="form-group p-1">
                    <textarea type="text" name='content' className="form-control" value={this.state.content} onChange={this.handleChange} id='txt' placeholder="What is going on ?" />
                    <br/>
                    <button type="button" className="btn btn-outline-info float-right rounded-pill" onClick={()=>this.handleSubmit()}> Tweet</button>
                </div>

            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {

    return{

        tweet : bindActionCreators(tweetActions.tweet,dispatch)

    }

}
function mapStateToProps(state) {

    return{

    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Tweet);