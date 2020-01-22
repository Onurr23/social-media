import React, {Component} from 'react';
import "../App.css"
import {connect} from "react-redux";
import Tweet from "./Actions/Tweet";
import {firestoreConnect} from "react-redux-firebase";
import {bindActionCreators, compose} from "redux";
import moment from "moment";
import Like from "./Actions/Like";
import {createComment} from "../Store/Actions/LikeAndCommentActions";
import {Link} from "react-router-dom";

class Tweets extends Component {

    state={
        comment : false,
        detail : false
    }

    render() {

        const tweets = this.props.tweets;
        let comments = this.props.comments;
        return (
            <div>
                <Tweet/>
                <br/>
                {
                    tweets.map(tweet=>(

                        <div key={tweet.id}>
                            <div className="card mb-3"  onClick={()=>{this.setState({detail : !this.state.detail})}}>
                                <div className="card-body">

                                    <div className='row'>
                                        <div className="col-md-3">
                                            <img src={tweet.user.imageURL} className='card-img-top twit-img' alt=""/>
                                        </div>
                                        <div className="col-md-9">
                                            <h5 className='mt-4 text-lead'>{tweet.user.name}  </h5>
                                            <p>
                                                {tweet.content}
                                            </p>
                                            <span className='text-muted mr-5'>{moment(tweet.date.seconds*1000).format('LLLL')}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <Like likeList={tweet.like} id={tweet.id} uid={this.props.uid} />
                                    <span className='text-muted' onClick={()=>{this.props.create(!tweet.createComment,tweet.id)}}> <i className="fas fa-comment"></i> <Link to={{pathname:'/details',search:tweet.id, state: {comment :this.props.comments,  content : tweet, likeList : tweet.like}}}> {tweet.comment}  </Link> </span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

function mapStateToProps(state) {

    return{

        tweets: state.firestore.ordered.tweets || state.tweetReducer,
        uid : state.firebase.auth.uid,
        comments : state.firestore.ordered.comments

    }
}
function mapDispatchToProps(dispatch) {

    return{

        create : bindActionCreators(createComment,dispatch)

    }
}
export default compose(

    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([

        {collection : 'tweets',
        orderBy: ['date','desc']
        },
        {collection :'users'},
        {collection : 'comments'}

    ])
)(Tweets);