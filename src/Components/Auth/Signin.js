import React, {Component} from 'react';
import "../../App.css"
import {connect} from "react-redux";
import * as authActions from "../../Store/Actions/authActions"
import {bindActionCreators} from "redux";
import {Link, Redirect} from "react-router-dom";

class Signup extends Component {

    state={

        email :'',
        password :'',
        boo :false,
        visible :false

    }
    handleSubmit=(e)=>{

        e.preventDefault();
        this.setState({
            boo :true
        })
        setTimeout(()=>{

            this.setState({
                boo :false
            })

        },600)
        this.props.signin(this.state);
    }
    handleChange=(e)=>{

        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {

       if(this.props.uid) return <Redirect to='/' />

        return (
            <div>

                <div className="row">

                    <div className="col-md-2">
                    </div>

                    <div className="col-md-8">

                        <h3 className='display-4 text-primary text-center mr-5 mt-2'>Sign In For Onur Social</h3>
                        <form onSubmit={this.handleSubmit}>

                            <div className="form-group">
                                <label className='form-text'>Email </label>
                                <input type="email" name='email' className="form-control" onChange={this.handleChange} placeholder="Email Address"/>
                            </div>
                            <div className="form-group">
                                <label className='form-text'>Password</label>
                                <input type={this.state.visible?'text':'password'} name='password' onChange={this.handleChange} className="form-control" placeholder="Enter Your Password"/><i className="fas fa-eye" onClick={()=>{this.setState({visible : !this.state.visible})}}></i>
                            </div>

                            <button type="submit" className="btn btn-dark"> {this.state.boo ?
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> :null} Sign In</button>
                        </form>

                        <br/><br/>
                        {this.props.auth ?<div className='alert alert-danger'>

                            <i className="fas fa-exclamation-triangle"></i>  {this.props.auth}

                        </div> : null
                        }
                    </div>
                    <div className="col-md-2">
                    </div>

                </div>

            </div>
        );
    }
}
function mapStateToProps(state) {

    return{

        auth : state.auth,
        uid : state.firebase.auth.uid
    }
}
function mapDispatchToProps(dispatch) {

    return{

        signin : bindActionCreators(authActions.signin,dispatch)

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Signup);