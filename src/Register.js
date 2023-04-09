import React, { Component } from 'react';
import { json, Link } from 'react-router-dom';

class Register extends Component {
    state = {
        loader: false,
        error: false,
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        gender: "",
        country: "",
        city: ""
    }

    updateField = (field, value) => {
        // parent className change handler is always called with field name and value
        this.setState({[field]: value});
    }
    handlingForm = (e) => {
        e.preventDefault()
        const formdata = new FormData();
        //formdata.append('lastname',this.state.lastname);
        formdata.append('name', this.state.firstname);
        formdata.append('password', this.state.password);
        formdata.append('email',this.state.email);
        //formdata.append('gender', this.state.gender);
        //formdata.append('country', this.state.country);
        //formdata.append('city', this.state.city);
        const dataForm = {
            name: this.state.firstname,
            password: this.state.password,
            email: this.state.email
        }

        if (this.state.firstname && this.state.email && this.state.password) {
            console.log('bond')
            console.log({
                "name": "zaza",
                "email": "alex@gmail.org",
                "password": "Admin0"
            })

            fetch('http://127.0.0.1:8000/api/utilisateur/inscription', {
                method: 'POST',
                body: JSON.stringify(dataForm),
                headers: { 'Content-Type': 'application/json' },
              })
                .then(res => console.log(res.json()) )
                //.then(json => this.setState(res.))
        }

        //console.log(...formdata);
    }
    render() {
        console.log(this.state.firstname)
        // const {loader, error, firstname, lastname, email, password, gender, country, city} = this.state;
        return (
            <>
                <div className="container">
                <br/>  <p className="text-center">More bootstrap 4 components on <Link to="http://bootstrap-ecommerce.com/"> Bootstrap-ecommerce.com</Link></p>
                <hr/>
                <div className="row justify-content-center">
                <div className="col-md-6">
                <div className="card">
                <header className="card-header">
                    <Link to="" className="float-right btn btn-outline-primary mt-1">Log in</Link>
                    <h4 className="card-title mt-2">Sign up</h4>
                </header>
                <article className="card-body">
                <form onSubmit={this.handlingForm}>
                    <div className="form-row">
                        <div className="col form-group">
                            <label>First name </label>   
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder=""
                                onChange={e => this.updateField("firstname", e.target.value)}
                                />
                        </div> 
                        {/* <div className="col form-group">
                            <label>Last name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder=" "
                                onChange={e => this.updateField("lastname", e.target.value)}
                            />
                        </div>  */}
                    </div>
                    {/* <!-- form-row end.// --> */}
                    <div className="form-group">
                        <label>Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="" 
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
                        <input 
                            className="form-control" 
                            type="password"
                            onChange={e => this.updateField("password", e.target.value)}
                            />
                    </div> 
                    <div className="form-group">
                        <div className='position-relative'>
                            <label>Confirm Password</label>
                            <input 
                                className="form-control" 
                                type="password"
                                onChange={e => this.updateField("password", e.target.value)}
                                />
                            <div className="position-absolute" style={{fontSize: "35px",top: "-60px", right: "1%"}}>
                                <i className="fa fa-eye" ></i>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block"> Register  </button>
                    </div> 
                    <small className="text-muted">By clicking the 'Sign Up' button, you confirm that you accept our <br/> Terms of use and Privacy Policy.</small>                                          
                </form>
                </article> 
                <div className="border-top card-body text-center">Have an account? <Link to="">Log In</Link></div>
                </div> 
                </div> 

                </div> 
                </div> 

                <br/><br/>
                <article className="bg-secondary mb-3">  
                <div className="card-body text-center">
                    <h3 className="text-white mt-3">Bootstrap 4 UI KIT</h3>
                <p className="h5 text-white">Components and templates  <br/> for Ecommerce, marketplace, booking websites 
                and product landing pages</p>   <br/>
                <p><Link className="btn btn-warning" target="_blank" to="http://bootstrap-ecommerce.com/"> Bootstrap-ecommerce.com  
                <i className="fa fa-window-restore "></i></Link></p>
                </div>
                <br/><br/>
                </article>
            </>
        );
    }
}

export default Register;