import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const checkPwd = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
class Login extends Component {
    state = {
        loader: false,
        error: false,
        firstname: "",
        //lastname: "",
        email: "",
        password: "",
        confirmPas: "",
        //gender: "",
        //country: "",
        //city: "",
        typePassword: "text",
        
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
        if(this.state.typePassword === "text"){
            this.setState({typePassword : "password"});
            //this.inputRef.current.focus();
        }
        else {
            this.setState({typePassword : "text"});
            //this.inputRef.current.focus();
        }
        console.log('typePassword ===>>', this.state.typePassword)
    }

    

    render() {
        const {loader, firstname, email, password, confirmPas} = this.state;
        return (
            <>
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
            <form onSubmit={this.handlingForm}>
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
            {/* <article className="bg-secondary mb-3">   */}
            {/* <div className="card-body text-center"> */}
                {/* <h3 className="text-white mt-3">Bootstrap 4 UI KIT</h3> */}
            {/* <p className="h5 text-white">Components and templates  <br/> for Ecommerce, marketplace, booking websites  */}
            {/* and product landing pages</p>   <br/> */}
            {/* <p><Link className="btn btn-warning" target="_blank" to="http://bootstrap-ecommerce.com/"> Bootstrap-ecommerce.com   */}
            {/* <i className="fa fa-window-restore "></i></Link></p> */}
            {/* </div> */}
            <br/><br/>
            {/* </article> */}
        </>
        );
    }
}

export default Login;