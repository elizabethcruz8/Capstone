<template>
  <div id="app">
    <!-- ==========================
      HEADER - START 
    =========================== -->
    <header class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a href="index.html" class="navbar-brand visible-xs">GamerGirls</a>
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <i class="fa fa-bars"></i>
          </button>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li><a href="/">Home</a></li>
            <li><a href="team.html">Admin team</a></li>
            <li><a href="profile.html">Profile</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Gaming</a>
              <ul class="dropdown-menu">
                <li>
                  <a href="gaming-team.html"><i class="fa fa-plus"></i>Gaming team</a>
                </li>
                <li>
                  <a href="matches-list.html"><i class="fa fa-plus"></i>List of matches</a>
                </li>
                <li>
                  <a href="match-single.html"><i class="fa fa-plus"></i>Single match</a>
                </li>
                <li>
                  <a href="tournament.html"><i class="fa fa-plus"></i>Tournament</a>
                </li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Forum</a>
              <ul class="dropdown-menu">
                <li>
                  <a href="forum.html"><i class="fa fa-plus"></i>Forum Page</a>
                </li>
                <li>
                  <a href="forum-list.html"><i class="fa fa-plus"></i>Forum threads</a>
                </li>
                <li>
                  <a href="forum-single.html"><i class="fa fa-plus"></i>Single forum post</a>
                </li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Pages</a>
              <ul class="dropdown-menu">
                <li>
                  <a href="signup.html"><i class="fa fa-plus"></i>Sign up</a>
                </li>
                <li>
                  <a href="signin.html"><i class="fa fa-plus"></i>Sign in</a>
                </li>
                <li>
                  <a href="servers.html"><i class="fa fa-plus"></i>Servers</a>
                </li>
                <li>
                  <a href="404.html"><i class="fa fa-plus"></i>Error Page</a>
                </li>
              </ul>
            </li>
          </ul>
          <div class="pull-right navbar-buttons hidden-xs">
            <a href="/Signup" class="btn btn-primary">Sign Up</a>
            <a href="/Login" class="btn btn-inverse">Login</a>
            <a class="navbar-icon show2" id="open-search"><i class="fa fa-search"></i></a>
            <a class="navbar-icon hidden" id="close-search"><i class="fa fa-times"></i></a>
            <div class="hidden" id="navbar-search-form">
              <form role="search">
                <div class="form-group">
                  <div class="input-group">
                    <input
                      type="text"
                      value=""
                      name="navbar-search"
                      id="navbar-search"
                      class="form-control"
                      placeholder="Search"
                    />
                    <span class="input-group-btn"
                      ><button class="btn btn-primary" type="submit" id="navbar-search-submit">
                        <i class="fa fa-search"></i></button
                    ></span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- ==========================
      HEADER - END 
    =========================== -->

    <!-- ==========================
      TITLE - START 
    =========================== -->
    <div class="container hidden-xs">
      <div class="header-title">
        <div class="pull-left">
          <h2>
            <a href="index-2.html"><span class="text-primary">Pro</span>gaming</a>
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
    </div>
    <!-- ==========================
      TITLE - END 
    =========================== -->

    <!-- ==========================
      JUMBOTRON - START 
    =========================== -->
    <div class="container">
      <div class="jumbotron">
        <div class="jumbotron-panel">
          <div class="panel panel-primary collapse-horizontal">
            <a data-toggle="collapse" class="btn btn-primary collapsed" data-target="#toggle-collapse"
              >Check our Servers <i class="fa fa-caret-down"></i
            ></a>
            <div class="jumbotron-brands">
              <ul class="brands brands-sm brands-inline brands-circle">
                <li>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-twitch"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-steam"></i></a>
                </li>
              </ul>
            </div>
            <div id="toggle-collapse" class="panel-collapse collapse">
              <div class="panel-body">
                <table class="table table-bordered table-header">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>IP Address</th>
                      <th>Map</th>
                      <th>Players</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><img src="assets/icons/csgo.jpg" alt="" /></td>
                      <td>[EU] CS:GO #1 | pixelized.cz</td>
                      <td>123.221.45.12:29999</td>
                      <td>de_dust2</td>
                      <td>18/18</td>
                    </tr>
                    <tr>
                      <td><img src="assets/icons/csgo.jpg" alt="" /></td>
                      <td>[CZ/SK] CS:GO Public | pixelized.cz</td>
                      <td>45.184.170.200:27851</td>
                      <td>de_inferno</td>
                      <td>24/32</td>
                    </tr>
                    <tr>
                      <td><img src="assets/icons/lol.png" alt="" /></td>
                      <td>[EU] League of Legends</td>
                      <td>50.243.180.246:25429</td>
                      <td>normal</td>
                      <td>10/30</td>
                    </tr>
                    <tr>
                      <td><img src="assets/icons/gta.png" alt="" /></td>
                      <td>[EU] GTA Server</td>
                      <td>132.24.45.83:27852</td>
                      <td>classic</td>
                      <td>22/60</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div id="jumbotron-slider">
          <!-- JUMBOTRON ITEM - START -->
          <div class="item">
            <a href="single.html">
              <div class="overlay-wrapper">
                <img src="assets/images/image_001.jpg" class="img-responsive" alt="" />
                <span class="overlay"></span>
                <h2>Lorem Ipsum dolor<span>27 March 2014</span></h2>
              </div>
            </a>
          </div>
          <!-- JUMBOTRON ITEM - END -->

          <!-- c ITEM - START -->
          <div class="item">
            <a href="single.html">
              <div class="overlay-wrapper">
                <img src="assets/images/image_002.jpg" class="img-responsive" alt="" />
                <span class="overlay"></span>
                <h2>Lorem Ipsum dolor<span>27 March 2014</span></h2>
              </div>
            </a>
          </div>
          <!-- JUMBOTRON ITEM - END -->

          <!-- JUMBOTRON ITEM - START -->
          <div class="item">
            <a href="single.html">
              <div class="overlay-wrapper">
                <img src="assets/images/image_003.jpg" class="img-responsive" alt="" />
                <span class="overlay"></span>
                <h2>Lorem Ipsum dolor<span>27 March 2014</span></h2>
              </div>
            </a>
          </div>
          <!-- JUMBOTRON ITEM - END -->

          <!-- JUMBOTRON ITEM - START -->
          <div class="item">
            <a href="single.html">
              <div class="overlay-wrapper">
                <img src="assets/images/image_004.jpg" class="img-responsive" alt="" />
                <span class="overlay"></span>
                <h2>Lorem Ipsum dolor<span>27 March 2014</span></h2>
              </div>
            </a>
          </div>
          <!-- JUMBOTRON ITEM - END -->

          <!-- JUMBOTRON ITEM - START -->
          <div class="item">
            <a href="single.html">
              <div class="overlay-wrapper">
                <img src="assets/images/image_005.jpg" class="img-responsive" alt="" />
                <span class="overlay"></span>
                <h2>Lorem Ipsum dolor<span>27 March 2014</span></h2>
              </div>
            </a>
          </div>
          <!-- JUMBOTRON ITEM - END -->
        </div>
      </div>
    </div>
    <!-- ==========================
      JUMBOTRON - END 
    =========================== -->

    <div id="nav">
      <router-link to="/Signup">Signup</router-link> | <router-link to="/Login">Login</router-link> |
      <router-link to="/logout">Logout</router-link> | <router-link to="/">Index</router-link>
    </div>
    <!-- ==========================
      CONTENT - START 
    =========================== -->
    <router-view />
    <!-- ==========================
      CONTENT - END 
    =========================== -->

    <!-- ==========================
      FOOTER - START 
    =========================== -->
    <div class="container">
      <div class="footer-boxes">
        <div class="row">
          <!-- FOOTER BOX - START -->
          <div class="col-md-4 hidden-xs hidden-sm">
            <div class="box">
              <h4>About Us</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor dictum nibh, ac gravida orci
                porttitor et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac.
              </p>
            </div>
          </div>
          <!-- FOOTER BOX - END -->

          <!-- FOOTER BOX - START -->
          <div class="col-sm-6 col-md-4">
            <div class="box footer-tags">
              <h4>Tags</h4>
              <a href="#"><span class="text-10">Clean</span></a>
              <a href="#"><span class="text-20">CV</span></a>
              <a href="#"><span class="text-20">Flat</span></a>
              <a href="#"><span class="text-14">Freelance</span></a>
              <a href="#"><span class="text-20">Modern</span></a>
              <a href="#"><span class="text-12">One Page</span></a>
              <a href="#"><span class="text-14">Professional</span></a>
              <a href="#"><span class="text-14">Responsive</span></a>
              <a href="#"><span class="text-16">Resume</span></a>
              <a href="#"><span class="text-20">Business</span></a>
              <a href="#"><span class="text-16">Corporate</span></a>
              <a href="#"><span class="text-18">CSS3</span></a>
              <a href="#"><span class="text-12">HTML5</span></a>
              <a href="#"><span class="text-16">Mobile First</span></a>
              <a href="#"><span class="text-20">Multipurpose</span></a>
              <a href="#"><span class="text-14">Portfolio</span></a>
            </div>
          </div>
          <!-- FOOTER BOX - END -->

          <!-- FOOTER BOX - START -->
          <div class="col-sm-6 col-md-4 hidden-xs">
            <div class="box footer-posts">
              <h4>Recent Posts</h4>
              <ul class="list-unstyled">
                <li><a href="#">Pellentesque habitant morbi</a> <span class="post-date">6.2.2015</span></li>
                <li><a href="#">Tristique senectus et netus</a> <span class="post-date">31.1.2015</span></li>
                <li><a href="#">Et malesuada fames ac</a> <span class="post-date">9.12.2014</span></li>
                <li><a href="#">Turpis egestas nullam</a> <span class="post-date">1.12.2014</span></li>
                <li><a href="#">Posuere magna a dapibus luctus</a> <span class="post-date">25.11.2014</span></li>
              </ul>
            </div>
          </div>
          <!-- FOOTER BOX - END -->
        </div>
      </div>
      <footer class="navbar navbar-default">
        <div class="row">
          <div class="col-md-6 hidden-xs hidden-sm">
            <ul class="nav navbar-nav">
              <li><a href="index-2.html">Home</a></li>
              <li><a href="team.html">Admin team</a></li>
              <li><a href="profile.html">Profile</a></li>
              <li><a href="tournament.html">Tournament</a></li>
              <li><a href="gallery.html">Gallery</a></li>
              <li><a href="forum.html">Forum</a></li>
            </ul>
          </div>
          <div class="col-md-6">
            <p class="copyright">
              © Progaming 2015 All right reserved. Designed by
              <a href="http://pixelized.cz/" target="_blank">Pixelized Studio.</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
    <!-- ==========================
      FOOTER - END 
    =========================== -->
  </div>
</template>

<style>
body {
  color: white !important;
}
</style>
