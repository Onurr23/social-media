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
        passwordAgain :'',
        birthday :'',
        name:'',
        image :'',
        bio : '',
        boo : false,
        visible  :false

    }
    handleSubmit=(e)=>{

        e.preventDefault();
        this.setState({
            boo : true
        })
        setTimeout(()=>{

            this.setState({
                boo :false
            })

        },600)
        this.props.signup(this.state);

    }
    handleChange=(e)=>{

        this.setState({
            [e.target.name] : e.target.value
        })

    }
    render() {

        if(this.props.uid) return <Redirect to='/'/>

        return (
            <div>

                <div className="row">

                    <div className="col-md-2">

                    </div>

                    <div className="col-md-8">

                            <h3 className='display-4 text-primary text-center mr-5 mt-2'>Sign Up For Onur Social</h3>
                        <form onSubmit={this.handleSubmit}>

                            <div className="form-group">
                                <label className='form-text'>Name Surname</label>
                                <input type="text" name='name' className="form-control" onChange={this.handleChange} placeholder="Enter Your Name and Surname" />
                            </div>

                            <div className="form-group">
                                <label className='form-text'>Birthday</label>
                                <input type="date" name='birthday' onChange={this.handleChange} className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label className='form-text'>Email </label>
                                <input type="email" name='email' className="form-control" onChange={this.handleChange} placeholder="Email Address"/>
                            </div>
                            <div className="form-group">
                                <label className='form-text'>Password</label>
                                <input type={this.state.visible?'text':'password'} name='password' onChange={this.handleChange} className="form-control" placeholder="Enter Your Password"/><i className="fas fa-eye" onClick={()=>{this.setState({visible : !this.state.visible})}}></i>
                            </div>
                            <div className="form-group">
                                <label className='form-text'>Password Again</label>
                                <input type={this.state.visible?'text':'password'} name='passwordAgain' onChange={this.handleChange} className="form-control" placeholder="Enter Your Password Again"></input><i className="fas fa-eye" onClick={()=>{this.setState({visible : !this.state.visible})}}></i>
                            </div>

                            <div className="form-group">
                                <label className='form-text'>Say Something About Yourself </label>
                                <textarea type="text" name='bio' onChange={this.handleChange} className="form-control" placeholder="Bio"/>
                            </div>

                            <div className="form-group">
                                <label className='form-text'>Image URL </label>
                                <input type="text" name='image' className="form-control"  onChange={this.handleChange} placeholder="Email URL"/>
                                <br/>
                                <img src={this.state.image} alt=""/>
                            </div>


                            <button type="submit" className="btn btn-dark"> {this.state.boo ?
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> :null} Signup</button>
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

function mapDispatchToProps(dispatch) {

    return{

        signup : bindActionCreators(authActions.signup,dispatch)

    }

}
function mapStateToProps(state) {

    return{

        auth : state.auth,
        uid : state.firebase.auth.uid

    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Signup);