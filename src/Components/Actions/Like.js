import React, {Component} from 'react';
import {like} from "../../Store/Actions/LikeAndCommentActions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux"
import "../../App.css"


class Like extends Component {

    state={

        didLike : false,
        likeCount : this.props.likeList.length
    }

    like=()=>{

       let likes = this.props.likeList;

        let liked = this.props.likeList.filter(l=>{
            return l === this.props.uid;
        })
      if(liked.length === 0){

            likes.push(this.props.uid);

              this.setState({
                  didLike : true
              })

          this.props.like(likes,this.props.id);

        }else if(liked.length>0){


          let disliked = this.props.likeList.filter(l=>{
              return l !== this.props.uid;
          })

          this.setState({
              didLike : false
          })

       this.props.like(disliked,this.props.id);

        }

    }
    componentDidMount() {

        if(this.props.likeList!=0){

            let liked = this.props.likeList.filter(l=>{

                return l === this.props.uid;

            })
            if(liked.length === 0){

               this.setState({
                   didLike : false
               })

            }else if(liked.length>0){

                this.setState({
                    didLike : true
                })

            }
        }
    }
    render() {

        return (
            <div>
                <span className='text-muted mr-3'> <i className="fas fa-heart" id={this.state.didLike ? 'like' : null}  onClick={this.like}></i> {this.props.likeList.length}</span>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {

    return{

        like : bindActionCreators(like,dispatch)
    }

}

export default connect(null,mapDispatchToProps)(Like);