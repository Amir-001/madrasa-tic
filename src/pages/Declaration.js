import React from "react";

export default function Declaration(){
        return(
<div>
    <div class="page">
        <div class="navbar">
            <div class="logo">Logo</div>
            <div class="users">
                <div class="users_icon"><img src="assets/images/user.png"/></div>
                <div class="users_text"><a>Profile</a></div>
            </div>
            <div class="decs">
                <div class="decs_icon"><img src="assets/images/declaration.png"/></div>
                <div class="decs_text">Déclarations</div>
            </div>
            <div class="anns">
                <div class="anns_icon"><img src="assets/images/annonce.png"/></div>
                <div class="anns_text"><a>Announcements</a></div>
            </div>
        </div>
        <div class="header">
        <div class="current_path">Mes déclarations</div>
          <div class="full_name">Full name</div>
          <div class="notification"><img src="assets/images/notification.png"/></div>
          <div class="I"><img src="assets/images/Line.png"/></div>
          <div class="icon"><img src="assets/images/icon.png"/></div>
        </div>
        <div class="footer">
         <div class="footer_img"><img src="assets/images/footer_img.png"/></div>
         <div class="footer_container">
          <div class="links_dec">Links</div>
          <a class="home_dec">Home</a>
          <a class="freatures_dec">Freatures</a>
          <a class="download_dec">Download</a>
          <a class="about_dec">About Us</a>
          <a class="contact_dec">Contact Us</a>
          <a class="else_dec">Something else</a>
        </div>
        <div class="buttom_logo">Logo</div>
        <div class="buttom_bar"></div>
        <div class="buttom_bar_text">Powered by SHIFT 2022 - 2022</div>
       </div>
       <div class="tab">
       <div class="tab_header">
         <div class="tab_decs">
            <div class="tab_decs_icon"><img src="assets/images/declaration_2.png"/></div>
            <div class="tab_decs_text">Declarations</div>
         </div>
         <select name="filter" class="all">
            <option value="1">All</option>
            <option value="2">catégorie 1</option>
            <option value="3">catégorie 2</option>
            <option value="4">catégirie 3</option>
         </select>
         <input type="text" placeholder="Search a User" class="search"/>
       </div>
       <div class="sub_header">
         <div class="div_id"><div class="id">ID</div></div>
         <div class="div_tab_title"><div class="tab_title">Title</div></div>
         <div class="div_tab_user"><div class="tab_user">Date</div></div>
         <div class="div_status"><div class="status">Status</div></div>
       </div>
       <div class="tab_line"></div>
       <table class="tabl" width="763" height="100">
         <tbody> 
          <tr>
            <td width="60">001</td>
            <td width="155"><a>aaaa</a></td>
            <td width="120">15 june</td>
            <td width="320">jjjj</td>
            <td><img src="assets/images/Invalide.png"/> 
              <button class="tab-button" id="annuler-btn">
                <img src="assets/images/annuler.png"/>
                </button>
              </td>
          </tr>
          <tr>
            <td width="60">002</td>
            <td width="155"><a>aaaa</a></td>
            <td width="120">14 june</td>
            <td width="320">jjjj</td>
            <td><img src="assets/images/Invalide.png"/> 
              <button class="tab-button" id="annuler-btn">
                <img src="assets/images/annuler.png"/>
                </button>
                </td>
          </tr>
          <tr>
            <td width="60">003</td>
            <td width="155"><a>aaaa</a></td>
            <td width="120">08 mai</td>
            <td width="320">jjjj</td>
            <td><img src="assets/images/valide.png"/> 
              <button class="tab-button" id="annuler-btn">
                <img src="assets/images/annuler.png"/>
               </button>
                </td>
          </tr>
          <tr>
            <td width="60">004</td>
            <td width="155"><a>aaaa</a></td>
            <td width="120">06 avril</td>
            <td width="320">jjjj</td>
            <td><img src="assets/images/valide.png"/> 
              <button class="tab-button" id="annuler-btn">
                <img src="assets/images/annuler.png"/>
               </button> 
                </td>
          </tr>
          <tr>
            <td width="60">005</td>
            <td width="155"><a>aaaa</a></td>
            <td width="120">02 avril</td>
            <td width="320">jjjj</td>
            <td><img src="assets/images/valide.png"/> 
              <button class="tab-button" id="annuler-btn">
                <img src="assets/images/annuler.png"/>
               </button>
                </td>
          </tr>
          <tr>
            <td width="60">006</td>
            <td width="155"><a>aaaa</a></td>
            <td width="120">11 mars</td>
            <td width="320">jjjj</td>
            <td><img src="assets/images/valide.png"/> 
              <button class="tab-button" id="annuler-btn">
                <img src="assets/images/annuler.png"/>
               </button> 
                </td>
          </tr>
          </tbody>
         </table>
       </div>
    </div>
</div>
);
    
}