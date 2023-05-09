import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class Navbar extends Component {
    authentication = () => {
        const token = window.localStorage.getItem('token')
        if(token) {
            localStorage.clear('token')
            return <Navigate to='/login' />
        }
    }
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#">Group 2</a>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <form class="form-inline my-2 my-lg-0">
                        {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
                        <div className='p-absolute' style={{right: "0%", position: "absolute"}}> 
                            <button class="btn btn-outline-danger my-2 my-sm-0"  type="submit" onClick={(e) => this.authentication()}>Logout</button>
                        </div>
                        
                    </form>
                </div>
            </nav>
        );
    }
}

export default Navbar;