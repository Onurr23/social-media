import React, {Component} from 'react';
import "../App.css"
import {bindActionCreators} from "redux";
import * as authActions from "../Store/Actions/authActions";
import {connect} from "react-redux";
import moment from "moment";

class Profile extends Component {
    state ={

        boo :false

    }

    render() {

        const profile = this.props.profile;

        return (
            <div>
                <div className="card">
                    <img src={profile.imageURL} className="card-img-top"/>
                        <div className="card-body">
                            <h4 className="card-title">{profile.name} </h4>
                            <p className="my-3">
                           <strong> BIO </strong>  :  {profile.bio}
                            </p>
                          <strong>Birthday</strong>  :  {moment(profile.birthday).format('MMMM Do YYYY')}
                            <br/><br/>

                        </div>
                </div>
                <br/>
                <button type="button" className="btn btn-outline-info" onClick={()=>this.props.signout()}> {this.state.boo ?
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> :null} <i className="fas fa-times"></i> EXIT</button>

            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {

    return{
        signout : bindActionCreators(authActions.signout,dispatch)
    }
}
function mapStateToProps(state) {

    return{
        profile : state.firebase.profile
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);