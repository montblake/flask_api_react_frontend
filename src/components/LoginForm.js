import { useState } from 'react';

function LoginForm(props){
    const [loginForm, setLoginForm] = useState({username: "", password: "", remember_me: false})

    function handleSubmit(event){
        event.preventDefault();
        props.login(loginForm);
        setLoginForm({username: "", password: "", remember_me: false});
        props.setShowLogin(false);
    }

    function handleChange(event) {
        setLoginForm(prevState => ({
          ...prevState,
          [event.target.name] : event.target.value
        }));
      }

      function handleCheckbox(event) {
          const newBool = !(loginForm.remember_me)
          setLoginForm(prevState => ({
              ...prevState,
              remember_me : newBool
          }));
      }

      function handleCancel(){
          props.setShowLogin(false);
      }
    
    return (
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="episodeForm">
                <input 
                    onChange={handleChange}
                    type="text" 
                    name="username" 
                    placeholder="Your name here." 
                    value={loginForm.username}
                />
                <input
                    type="password"
                    name="password" 
                    placeholder="password"
                    onChange={handleChange}
                    value={loginForm.password}
                />
                <fieldset>
                    <label htmlFor="remember">Remember Me</label>
                    <input
                        type="checkbox"
                        name="remember_me" 
                        onChange={handleCheckbox}
                        value={loginForm.remember_me}
                        id="remember"
                    />
                </fieldset>
            
                <input type="submit" value="submit information"/>
                <button onClick={handleCancel}>Cancel</button>
            </form>
        </div> 
    )
}

export default LoginForm;