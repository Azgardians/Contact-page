import React,{ Component } from 'react';
import Aux from '../../HOC/Aux';
import Home from '../Home/Home';
import './Contact.css';

const initialState ={
        title:"",
        name:"",
        email:"",
        password:"",
        phone:"",
        address:"",
        checkValue:false,
        titlerror:"",
        nameerror:"",
        emailerror:"",
        passworderror:"",
        phoneerror:"",
        addresserror:"",

    }
class Contact extends Component{
    state=initialState;

    handleChange = (event) => {

        this.setState({
            [event.target.name] : event.target.value
        });
    };
    
    validateHandler = () => {
        let nameerror = "";
        let emailerror = "";
        let titleerror = "";
        let passworderror = "";
        let phoneerror = "";
        let addresserror = "";

        if(!this.state.email.includes("@")){
            emailerror= "invalid email";
        }
        if(emailerror){
            this.setState({emailerror});
            return false;
        }
        if (this.state.name === ""){
            nameerror="invalid name";
        }
        if(nameerror){
            this.setState({nameerror});
            return false;
        }
        if (this.state.title === ""){
            titleerror="invalid title";
        }
        if(titleerror){
            this.setState({titleerror});
            return false;
        }
        if (this.state.password === ""){
            passworderror="invalid password";
        }
        if(passworderror){
            this.setState({passworderror});
            return false;
        }
        if (this.state.phone === ""){
            phoneerror="invalid phone";
        }
        if(phoneerror){
            this.setState({phoneerror});
            return false;
        }
        if (this.state.address === ""){
            addresserror="invalid address";
        }
        if(addresserror){
            this.setState({addresserror});
            return false;
        }

        return true;
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validateHandler();
        if (isValid){
            this.setState({checkValue:true});
            this.setState(initialState);

        }
        
    };

    render(){
        
        return(
            <Aux>{
                this.state.checkValue 
                ? <Home head={this.state.name}/>
                :<div className="contact-section">
                    <nav>
                        <ul>
                            {/* eslint-disable-next-line */}
                            <li><a href="#">Home</a></li>
                            {/* eslint-disable-next-line */}
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="border"></div>
                    <form 
                        className="contact-form" 
                        action="index.html" 
                        onSubmit={this.handleSubmit}>
                        <div>
                            <select className="contact-form-text" 
                                name="title"
                                value={this.state.title}
                                onChange={this.handleChange}>
                                <option>Select a title</option>
                                <option>Mr.</option>
                                <option>Mrs.</option>
                                <option>Ms</option>
                            </select>
                            <div className="error">{this.state.titleerror}</div>
                        </div>
                        <div>
                            <input type="text"  className="contact-form-text" placeholder="Your name"
                            name = "name"
                            value={this.state.name}
                            onChange={this.handleChange}/>
                            <div className="error">{this.state.nameerror}</div>
                        </div>
                        <div>
                            <input type="email" className="contact-form-text" placeholder="Your email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}/>
                            <div className="error">{this.state.emailerror}</div>
                        </div>
                        <div>
                            <input 
                            type="password"
                            name="password"
                            placeholder="type your password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            className="contact-form-text"/>
                            <div className="error">{this.state.passworderror}</div>
                        </div>
                        <div>
                            <input 
                                type="number" 
                                className="contact-form-text" 
                                name="phone"
                                placeholder="Your phone"
                                value={this.state.phone}
                                onChange={this.handleChange}/>
                                <div className="error">{this.state.phoneerror}</div>
                        </div>
                        <div>
                            <textarea 
                                className="contact-form-text" 
                                placeholder="Your address"
                                name="address"
                                value={this.state.address}
                                onChange={this.handleChange}
                                >
                            </textarea>
                            <div className="error">{this.state.addresserror}</div>
                        </div>
                        <input type="submit" className="contact-form-btn" value="Send"/>
                    </form>
                </div>
            }              
                
                
            </Aux>
            
        );
    }
}

export default Contact;