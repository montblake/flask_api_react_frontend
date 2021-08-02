import { useState } from 'react';


function RegistrationForm(props){
    const [registrationForm, setRegistrationForm] = useState({username: "", email: "", password: "", password2: ""})
    

    function handleCancel(){
        props.setShowRegistration(false);
    }


    function handleSubmit(event){
        event.preventDefault();
        props.register(registrationForm);
        setRegistrationForm({username: "", email: "", password: "", password2: ""});
        props.setShowRegistration(false);
        props.setShowLogin(true);
    }


    function handleChange(event) {
        setRegistrationForm(prevState => ({
          ...prevState,
          [event.target.name] : event.target.value
        }));
    }


    return(
        <div className="login">
            <h2 className="contribute_title">Register</h2>
            <form onSubmit={handleSubmit} className="episodeForm">
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Your name here..." 
                    onChange={handleChange}
                    value={registrationForm.username}
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="yourname@example.com" 
                    onChange={handleChange}
                    value={registrationForm.email}
                />
                <input
                    type="password"
                    name="password" 
                    placeholder="enter password"
                    onChange={handleChange}
                    value={registrationForm.password}
                />
                <input
                    type="password"
                    name="password2" 
                    placeholder="confirm password"
                    onChange={handleChange}
                    value={registrationForm.password2}
                />
                <input type="submit" value="Submit Registration"/>
                <button onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    )
}

export default RegistrationForm;