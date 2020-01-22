import React, {Component} from 'react';
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import {connect} from "react-redux";
import "../../App.css"
import Comment from "./Comment";
import moment from "moment";
import Like from "./Like";

class TweetDetails extends Component {

    render() {

        let comments = this.props.comments;

        if(comments){

            return (

                <div className='container'>

                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-3"><img src={this.props.location.state.content.user.imageURL}
                                    className="card-img-top twit-img" alt=""/></div>
                                <div className="col-md-9"><h5 className="mt-4 text-lead">Halit Onur Kara </h5>
                                    <p>{this.props.location.state.content.content}</p><span className="text-muted mr-5">{moment(this.props.location.state.content.date.seconds*1000).format('LLLL')}</span></div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <Like likeList={this.props.location.state.likeList} id={this.props.location.state.content.id} uid={this.props.uid} />
                            <span className="text-muted"> <i className="fas fa-comment"></i> {comments.length} </span><a href="/details"></a></div>

                    </div>
                    <Comment id={this.props.location.search} yorum={this.props.location.state.content.comment} />
                    {
                        comments.map(c=>(
                            <div className="card w-75 mb-2 mt-4" key={c.id}>
                                <div className="card-body">

                                    <div className='row'>
                                        <div className="col-md-3">
                                            <img src={c.user.imageURL} className='card-img-top rply-img' alt=""/>
                                        </div>
                                        <div className="col-md-9">
                                            <h6 className='mt-4 text-lead'>{c.user.name}  </h6>
                                            <p>
                                                {c.comment}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            );
        }else{
            return (
                <div>

                </div>
            )

        }
    }
}
function mapStateToProps(state) {

    return{

        comments : state.firestore.ordered.comments,
        uid : state.firebase.auth.uid
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect((props)=>[

        {collection : 'comments',
         where : ['replyTo','==',props.location.search.slice(1)] }

    ])
)(TweetDetails);