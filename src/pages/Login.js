import React from "react";

export default function Login(){
        return(
        <div>
          <div>
            <h1 class="logotop">Logo</h1>
            <a class="hometop">Home</a>
            <a class="freaturestop">Features</a>
            <a class="downloadtop">Download</a>
            <a class="abouttop">About</a> 
            <input type="button" class="logintop" value="Login"/>
            <input type="button" class="registertop" value="Register"/>
         </div>
         <form >
            <h1 class="login">LOGIN</h1>
            
            <input type="email" class="email" placeholder="Email" required/>
            <input type="password" class="password" placeholder="Password" required/>
            <p class="save">Remember me</p>
            <input type="checkbox" class="check"/>
            <input type="submit" class="Sign" value="Sign in"/>
            <p class="forgot">Forgot password?</p>
            <p class="link">Dont't have an account, <a>register</a> now!</p>
         </form>
     
         <img src="assets/images/3094350_Mesa de trabajo 1.png" class="img1"/>
         <img src="assets/images/Vector 2.png" class="img2"/>
         <img src="assets/images/Vector.png" class="img3"/> 
         <img src="assets/images/Line 5.png" class="img4"/> 
         <img src="assets/images/Group.png" class="img5"/> 
         <img src="assets/images/Rectangle 30.png" class="img6"/>
         <img src="assets/images/-1.png" class="img7"/>
      
         <div>
              <div>
                <h1 class="logobtm">Logo</h1>
                <h1 class="links">Links</h1>
                <a class="home">Home</a>
                <a class="freatures">Features</a>
                <a class="download">Download</a>
                <a class="about">About Us</a> 
                <a class=" contact">Contact Us</a>
                <a class="else">Something else</a>
              </div>
              <div class="color"><p class="powred">Powred,by SHIFT 2022-2022</p></div>
         </div>
      </div>
        );
    
}