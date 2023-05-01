import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { connect } from 'react-redux';
import TransitionsModal from './Modal';
import { ActionTypes } from './constants/action-types';
import { authenticationError, authenticationLoading, authenticationSuccess } from './actions/userActions';
const checkPwd = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
class Login extends Component {
    state = {
        loader: false,
        error: false,
        firstname: "",
        status: null,
        //lastname: "",
        email: "",
        password: "",
        confirmPas: "",
        //gender: "",
        //country: "",
        //city: "",
        typePassword: "text",
        token: null,
        openModal: false,
        
    }

    updateField = (field, value) => {
        // parent className change handler is always called with field name and value
        this.setState({[field]: value});
    }

    isPasswordValid = (pwd, isConfirm) => {
        if (isConfirm) {
            return this.state.password === pwd;
        }

        // Make password check here
        return checkPwd.test(pwd)
    }

    updateTypePassword = () => {
        this.setState(prevState =>({typePassword : prevState.typePassword === "password" ? "text" : "password"}))
        
    }

    handlingLoginForm = (e) => {
        e.preventDefault()
        const dataform= {
            email: this.state.email,
            password: this.state.password
        }
        console.log("data du formulaire ===> ",dataform)
        if (this.state.email && this.state.password) {
            // 
            this.props.authenticationLoading()
            
            //console.log('dada form login ===>>>> ', dataform)
            fetch('http://localhost:8000/api/utilisateur/connexion', {
                method: 'POST',
                body: JSON.stringify(dataform),
                headers: { 'Content-Type': 'application/json' },
            })
            .then(res => res.json())
            .then(data => {
                this.props.authenticationSuccess(data.utilisateur);
                localStorage.setItem('token', data.token)
            })
            .catch(error => {
                this.props.authenticationError(error)
            })
            //.catch((error) => console.log("his error ====>>>", error))
            // .then(data => this.setState({
            //     loader: false, email: data.utilisateur.email, firstname: data.utilisateur.name
            // }))
        }
    }

    

    render() {
        const {loader, firstname, email, password, openModal} = this.state;
        // const {user} = this.props
        // console.log("my user ====>>> ", user)
        console.log("bref ==> ",{loader, firstname, email});
        return (
            <>
            {/* {user.itsRegistered && ( */}
            <TransitionsModal />
            {/* )} */}
            <div className='d-flex justify-content-center'>
                {this.props.user.loading && (
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                )}
            </div>
                
            <div className="container">
            {/* <br/>  <p className="text-center">More bootstrap 4 components on <Link to="http://bootstrap-ecommerce.com/"> Bootstrap-ecommerce.com</Link></p> */}
            <hr/>
            <div className="row justify-content-center">
            <div className="col-md-6">
            <div className="card">
            <header className="card-header">
                <Link to={"/register"} className="float-right btn btn-outline-primary mt-1">Register</Link>
                <h4 className="card-title mt-2">Login</h4>
            </header>
            <article className="card-body">
            {window.localStorage.getItem('token') && <Navigate to='/user'/>}
            <form onSubmit={this.handlingLoginForm}>
                {/* <div className="form-row">
                    <div className="col form-group">
                        <label>First name </label>   
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder=""
                            onChange={e => this.updateField("firstname", e.target.value)}
                            />
                    </div> 
                    <div className="col form-group">
                        <label>Last name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder=" "
                            onChange={e => this.updateField("lastname", e.target.value)}
                        />
                    </div> 
                </div> */}
                {/* <!-- form-row end.// --> */}
                <div className="form-group">
                    <label>Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        value={this.state.email}
                        onChange={e => this.updateField("email", e.target.value)}    
                    />
                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                {/* <!-- form-group end.// --> */}
                {/* <div className="form-group">
                        <label className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="gender" 
                        value="option1"
                        onChange={e => this.updateField("gender", e.target.value)} 
                    />
                    <span className="form-check-label"> Male </span>
                    </label>
                    <label className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" name="gender" 
                        value="option2" 
                        onChange={e => this.updateField("gender", e.target.value)}
                    />
                    <span className="form-check-label"> Female</span>
                    </label>
                </div>  */}
                {/* <!-- form-group end.// --> */}
                {/* <div className="form-row">
                    <div className="form-group col-md-6">
                    <label>City</label>
                    <input 
                        type="text" 
                        className="form-control"
                        onChange={e => this.updateField("city", e.target.value)} />
                    </div> 
                    <div className="form-group col-md-6">
                    <label>Country</label>
                    <select 
                        id="inputState" 
                        className="form-control"
                        onChange={e => this.updateField("country", e.target.value)}>
                        <option> Choose...</option>
                        <option>Uzbekistan</option>
                        <option>Russia</option>
                        <option selected="">United States</option>
                        <option>India</option>
                        <option>Afganistan</option>
                    </select>
                    </div> 
                </div>  */}
                <div className="form-group">
                    
                        <label>Password</label>
                        <div className="position-relative">
                            <input 
                                className="form-control" 
                                value={this.state.password}
                                ref={this.inputRef}
                                type={this.state.typePassword}
                                onFocus={(e) => this.updateField('password', e.target.value)}
                                onBlur={(e) => this.updateField('password', e.target.value)}
                                onChange={e => this.updateField("password", e.target.value)}
                                />
                            <div className="position-absolute" style={{fontSize: "35px",top: "-18%", right: "3%"}}>
                                <i className="fa fa-eye"  onClick={this.updateTypePassword}></i>
                            </div>
                        </div> 
                        <p
                            id="pwdnote"
                            className={this.state.password && !this.isPasswordValid(password, false)/*password*/ ? "instructions" : "offscreen"}>
                            {/* <FontAwesomeIcon icon={faInfoCircle}/> */}
                            <span> At least 6 characters </span>
                            <span>Must include uppercase and lowercase letters, a number and a special character </span>
                            <span aria-label="exclamation mark">!</span>
                            <span aria-label="at symbol">@ </span>
                            <span aria-label="hashtag"># </span>
                            <span aria-label="dollar sign">$ </span>
                            <span aria-label="percent">%</span>
                        </p>
                      
                   
                </div> 
                {/* <div className="form-group">
                    <label>Confirm Password</label>
                    <div className='position-relative'>
                        <input 
                            className="form-control" 
                            type={this.state.typePassword}
                            value={this.state.confirmPas}
                            onFocus={(e) => this.updateField('confirmPas', e.target.value)}
                            onBlur={(e) => this.updateField('confirmPas', e.target.value)}
                            onChange={e => this.updateField("confirmPas", e.target.value)}
                            />
                        
                    </div>
                    <p
                        id="pwdnote"
                        className={!this.isPasswordValid(confirmPas, true) ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        <span> At least 6 characters </span>
                        <span>Must match the first password input field</span>
                        <span aria-label="exclamation mark">!</span>
                        <span aria-label="at symbol">@ </span>
                        <span aria-label="hashtag"># </span>
                        <span aria-label="dollar sign">$ </span>
                        <span aria-label="percent">%</span>
                    </p>
                   

                </div> */}
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block"> Login  </button>
                </div> 
                <small className="text-muted">By clicking the 'Sign Up' button, you confirm that you accept our <br/> Terms of use and Privacy Policy.</small>                                          
            </form>
            </article> 
            <div className="border-top card-body text-center">Haven't an account? <Link to="/register">Register</Link></div>
            </div> 
            </div> 

            </div> 
            </div> 

            <br/><br/>
            
            <br/><br/>
            
        </>
        );
    }
}
const mapStateToProps =(state) => {
    const { user } = state
    return { user }
}

const mapDispatchToProps = (dispatch) => {
    return {
      authenticationLoading: () => dispatch(authenticationLoading()),
      authenticationSuccess: (user) => dispatch(authenticationSuccess(user)),
      authenticationError: (error) => dispatch(authenticationError(error)),
      doDisappearModal: () => dispatch({ type: ActionTypes.I_JUST_REGISTERED }),
      //decrement: () => dispatch({ type: 'DECREMENT' }),
      //reset: () => dispatch({ type: 'RESET' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
//export default connect(mapStateToProps, mapDispatchToProps)(Login);