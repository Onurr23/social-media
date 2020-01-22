import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import "../App.css"
import {connect} from "react-redux"

class Navi extends Component {

    renderNav=()=>{

        return(
            <div className="collapse navbar-collapse" id="navbarMenu">
                <ul className="navbar-nav mr-auto">

                    <NavLink to='/signin' className="nav-item">
                        <a href="#" className="nav-link">Signin</a>
                    </NavLink>

                    <NavLink to='/signup' className="nav-item">
                        <a href="#" className="nav-link"> Signup </a>
                    </NavLink>

                </ul>

                <form className="form-inline">
                    <input type="search" className="form-control mr-sm-2 " placeholder="Arama"/>
                    <button className="btn btn-sm btn-outline-success my-2 " type="submit"> Ara</button>
                </form>
            </div>

        )


    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-light navbar-expand-md bg-danger border-primary">
            <NavLink to='/' className="navbar-brand mb-0 h1">
              <img src="https://www.onur.net/com/ui/logow.png" width="70" height="35"/>
            </NavLink>
                    {!this.props.auth?this.renderNav():null}

                </nav>
            </div>
        );
    }
}
function mapStateToProps(state) {

    return{
        auth : state.firebase.auth.uid
    }
}
export default connect(mapStateToProps)(Navi);