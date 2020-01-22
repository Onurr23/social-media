import React, {Component} from 'react';
import {connect} from "react-redux";
import {comment} from "../../Store/Actions/LikeAndCommentActions";
import {bindActionCreators} from "redux";

class Comment extends Component {

    state={

        comment : '',
        saved : true

    }
    changeHandler=(e)=>{

        this.setState({
            [e.target.name] : e.target.value
        })

    }

    submitHandler=(e)=>{

        e.preventDefault();

     this.setState({
            saved :false
        })

        setTimeout(()=>{

            this.setState({
                saved :true
            })

        },2000);

     let count = this.props.yorum

     let newCount = count++;

        this.props.comment(this.state.comment,this.props.id.slice(1),count);

    }

    render() {
        return (
            <div>
                {this.state.saved?<form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label className='text-muted'>Comment</label>
                        <textarea type="text" name='comment' onChange={this.changeHandler} className="form-control" placeholder="Type Your Comment"/>

                    </div>
                    <button type="submit" className="btn btn-primary">Kaydet</button>
                </form>: <div className="alert alert-success" role="alert">
                    <h3 className="alert-heading"> Your Comment Has Been Saved !</h3>
                </div>  }
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {

    return{

        comment : bindActionCreators(comment,dispatch)
    }
}
export default connect(null,mapDispatchToProps)(Comment);