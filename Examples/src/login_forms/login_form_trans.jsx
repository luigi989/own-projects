// import './login_form_trans.css';
import React from 'react';

export default function Login_form_trans() {
    return(
        <div>
            <div class="box_login">
                <input type="radio" class="radio" id="login_btn"  name="group" checked />
                <input type="radio" class="radio" id="register_btn" name="group" />
            
                <label class="tab" id="login_tab" for="login_btn">Login</label>
                <label class="tab" id="register_tab" for="register_btn">Register</label>

                <div class="panel" id="login_content">
                    <input type="text" name="" placeholder="Username" />
                    <input type="password" name="" placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    <input type="submit" name="" value="Login" />
                </div>
                <div class="panel" id="register_content">
                    <input type="text" name="" placeholder="Username" />
                    <input type="password" name="" placeholder="Password" />
                    <input type="password" name="" placeholder="Write password again" />
                    <input type="checkbox" id="accept" name="accept" />
                    <label for="accept">I hereby accept the conditions</label>
                    <input type="submit" name="" value="Create account" />
                </div>
            </div>
        </div>
    );
}