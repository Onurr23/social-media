import React, {Component} from 'react';
import Profile from "./Profile";
import "../App.css"
import Tweets from "./Tweets";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Dashboard extends Component {
    render() {

       if(!this.props.uid) return  <Redirect to='/signin'/>

        return (
            <div>

                <div className="row">

                    <div className="col-md-1">


                    </div>

                    <div className="col-md-2 mt-5">

                       <Profile/>

                    </div>

                    <div className="col-md-8 mt-5">

                       <Tweets/>

                    </div>

                </div>


            </div>
        );
    }
}

function mapStateToProps(state) {

    return{

        uid : state.firebase.auth.uid

    }

}

export default connect(mapStateToProps)(Dashboard);