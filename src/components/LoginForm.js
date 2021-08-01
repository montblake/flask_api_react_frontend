import { useState } from 'react';

function LoginForm(props){
    const [loginForm, setLoginForm] = useState({username: "", password: "", remember_me: false})

    function handleSubmit(event){
        event.preventDefault();
        props.login(loginForm);
        setLoginForm({username: "", password: "", remember_me: false});
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
    
    return (
        <div className="episodeCreator">
            <h2 className="contribute_title">Login</h2>
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
                <label htmlFor="remember">Remember Me</label>
                <input
                    type="checkbox"
                    name="remember_me" 
                    onChange={handleCheckbox}
                    value={loginForm.remember_me}
                    id="remember"
                />
                <input type="submit" value="submit information"/>
            </form>
        </div> 
    )
}

export default LoginForm;