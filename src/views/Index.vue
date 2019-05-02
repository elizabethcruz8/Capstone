<template>
    <!-- prettier-ignore -->
    <div class="container">

    <section class="content-wrapper">
      <div class="row">
        
          <!-- SIDEBAR - START -->
          <div class="col-sm-4 hidden-xs">
      
                <!-- SIDEBAR BOX - START -->
                <div class="box sidebar-box widget-wrapper">
                  <h3>Hello {{ user.first_name }} {{ user.last_name }} !</h3>
                    <div class="tournament">
                      <a href="tournament.html"><img src="assets/images/esl.png" class="img-responsive" alt=""></a> //add profile picture here 
                        <h4>ESL 2015</h4>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam posuere magna a dapibus luctus.</p>
                        <div class="date">21 - 29 June 2015</div>
                        <div class="text-center"><a href="tournament.html" class="btn btn-primary">More info</a></div>
                    </div>
                </div>
                <!-- SIDEBAR BOX - END -->
                
                <!-- SIDEBAR BOX - START -->
                <div class="box sidebar-box widget-wrapper widget-matches">
                  <h3>Upcoming matches <a href="matches-list.html" class="btn btn-primary pull-right btn-sm">All matches</a></h3>
                    
                    <a href="/match-single.html">
                        <table class="table match-wrapper">
                            <tbody>
                                <tr>
                                    <td class="game">
                                        <img src="/assets/icons/dota2.png" alt="">
                                        <span>Dota 2</span>
                                    </td>
                                    <td class="game-date">
                                        <span>5/10/2015 - 19:30</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="team-name"><img src="/assets/icons/cze.png" alt="">Czech Republic</td>
                                    <td class="team-score">-</td>
                                </tr>
                                <tr>
                                    <td class="team-name"><img src="/assets/icons/swe.png" alt="">Sweden</td>
                                    <td class="team-score">-</td>
                                </tr>
                            </tbody>
                        </table>
                    </a>
                    
                    <a href="/match-single.html">
                        <table class="table match-wrapper">
                            <tbody>
                                <tr>
                                    <td class="game">
                                        <img src="assets/icons/csgo.jpg" alt="">
                                        <span>CS GO</span>
                                    </td>
                                    <td class="game-date">
                                        <span>22/11/2015 - 22:00</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="team-name"><img src="/assets/icons/den.png" alt="">Fnatic</td>
                                    <td class="team-score">-</td>
                                </tr>
                                <tr>
                                    <td class="team-name"><img src="/assets/icons/swe.png" alt="">Ninjas in Pyjamas</td>
                                    <td class="team-score">-</td>
                                </tr>
                            </tbody>
                        </table>
                    </a>
                </div>
                <!-- SIDEBAR BOX - END -->
                
                <!-- SIDEBAR BOX - START -->
                <div class="box sidebar-box widget-wrapper widget-matches">
                    <h3>Latest matches <a href="matches-list.html" class="btn btn-primary pull-right btn-sm">All matches</a></h3>
                    
                    <a href="match-single.html">
                        <table class="table match-wrapper">
                            <tbody>
                                <tr>
                                    <td class="game">
                                        <img src="/assets/icons/lol.png" alt="">
                                        <span>LoL</span>
                                    </td>
                                    <td class="game-date">
                                        <span>18/02/2015 - 14:00</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="team-name"><img src="/assets/icons/usa.png" alt=""><b>Ninjas in Pyjamas</b></td>
                                    <td class="team-score win">9</td>
                                </tr>
                                <tr>
                                    <td class="team-name"><img src="/assets/icons/den.png" alt="">Natus Vincere</td>
                                    <td class="team-score lose">5</td>
                                </tr>
                            </tbody>
                        </table>
                    </a>
                    
                    <a href="/match-single.html">
                        <table class="table match-wrapper">
                            <tbody>
                                <tr>
                                    <td class="game">
                                        <img src="/assets/icons/gta.png" alt="">
                                        <span>GTA</span>
                                    </td>
                                    <td class="game-date">
                                        <span>8/6/2015 - 12:00</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="team-name"><img src="/assets/icons/swe.png" alt=""><b>Ninjas in Pyjamas</b></td>
                                    <td class="team-score win">9</td>
                                </tr>
                                <tr>
                                    <td class="team-name"><img src="/assets/icons/usa.png" alt="">Natus Vincere</td>
                                    <td class="team-score lose">5</td>
                                </tr>
                            </tbody>
                        </table>
                    </a>
                </div>
                <!-- SIDEBAR BOX - END -->
                
                <!-- SIDEBAR BOX - START -->
                <div class="box sidebar-box widget-wrapper">
                  <h3>Categories</h3>
                    <ul class="nav nav-sidebar">
                      <li><a href="#">Tournaments<span>45</span></a></li>
                        <li><a href="#">Leagues<span>122</span></a></li>
                        <li><a href="#">Counter Strike<span>684</span></a></li>
                        <li><a href="#">Dota 2<span>1242</span></a></li>
                        <li><a href="#">World of Warcraft<span>112</span></a></li>
                        <li><a href="#">Minecraft<span>18</span></a></li>
                    </ul>
                </div>
                <!-- SIDEBAR BOX - END -->
                
                <!-- SIDEBAR BOX - START -->
                <div class="box sidebar-box widget-wrapper">
                  <h3>Latest Tweets</h3>
                    <div id="twitter-wrapper">
                    </div>
                </div>
                <!-- SIDEBAR BOX - END -->
                
            </div>
            <!-- SIDEBAR - END -->
            
            <!-- CONTENT BODY - START -->
            <div class="col-sm-8">
              
                <div class="box colored tournament-partner">
                    <div class="row">
                        <div class="col-xs-4"><a href="#"><img src="/assets/images/partner_1.png" class="img-responsive center-block" alt=""></a></div>
                        <div class="col-xs-4"><a href="#"><img src="/assets/images/partner_2.png" class="img-responsive center-block" alt=""></a></div>
                        <div class="col-xs-4"><a href="#"><img src="/assets/images/partner_3.png" class="img-responsive center-block" alt=""></a></div>
                    </div>
                </div>
                
              <div class="box">
                
                  <!-- POST - START -->
                  <article class="post">
                      <div class="post-date-wrapper">
                          <div class="post-date">
                              <div class="day">25</div>
                              <div class="month">Jan 2014</div>
                            </div>
                            <div class="post-type">
                              <i class="fa fa-video-camera"></i>
                            </div>
                        </div>
                        <div class="post-body">
                            <h2>Blog post with Vimeo video</h2>
                            <p><img src="assets/images/image_005.jpg" class="img-responsive" alt="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor dictum nibh, ac gravida orci porttitor et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam posuere magna a dapibus luctus. Curabitur posuere vel nisi et scelerisque. Praesent imperdiet sed enim et ornare. In congue quis enim ut gravida. Aenean non justo varius, dapibus ipsum eu, mattis urna.</p>
                            <div class="post-info">
                                <span>Posted by: admin</span>
                                <a href="single.html" class="btn btn-inverse">View More</a>
                            </div>
                        </div>
                    </article>
                    <!-- POST - END -->
                    
                    <!-- POST - START -->
                    <article class="post">
                      <div class="post-date-wrapper">
                          <div class="post-date">
                              <div class="day">25</div>
                              <div class="month">Jan 2014</div>
                            </div>
                            <div class="post-type">
                              <i class="fa fa-font"></i>
                            </div>
                        </div>
                        <div class="post-body">
                            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor dictum nibh, ac gravida orci porttitor et.</h2>
                            <div class="flex-video widescreen"><iframe src="https://player.vimeo.com/video/48443133"></iframe></div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor dictum nibh, ac gravida orci porttitor et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam posuere magna a dapibus luctus. Curabitur posuere vel nisi et scelerisque. Praesent imperdiet sed enim et ornare. In congue quis enim ut gravida. Aenean non justo varius, dapibus ipsum eu, mattis urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor dictum nibh, ac gravida orci porttitor et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam posuere magna a dapibus luctus. Curabitur posuere vel nisi et scelerisque. Praesent imperdiet sed enim et ornare. In congue quis enim ut gravida. Aenean non justo varius, dapibus ipsum eu, mattis urna.</p>
                            <div class="post-info">
                                <span>Posted by: admin</span>
                                <a href="single.html" class="btn btn-inverse">View More</a>
                            </div>
                        </div>
                    </article>
                    <!-- POST - END -->
                    
                    <!-- POST - START -->
                    <article class="post gallery-post">
                      <div class="post-date-wrapper">
                          <div class="post-date">
                              <div class="day">25</div>
                              <div class="month">Jan 2014</div>
                            </div>
                            <div class="post-type">
                              <i class="fa fa-soundcloud"></i>
                            </div>
                        </div>
                        <div class="post-body">
                            <h2>Blog post with Gallery Carousel</h2>
                            <div class="owl-carousel owl-theme">       
                                    <div class="item"><img src="assets/images/image_001.jpg" class="img-responsive" alt=""></div>
                                    <div class="item"><img src="assets/images/image_002.jpg" class="img-responsive" alt=""></div>
                                    <div class="item"><img src="assets/images/image_003.jpg" class="img-responsive" alt=""></div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor dictum nibh, ac gravida orci porttitor et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam posuere magna a dapibus luctus. Curabitur posuere vel nisi et scelerisque. Praesent imperdiet sed enim et ornare. In congue quis enim ut gravida. Aenean non justo varius, dapibus ipsum eu, mattis urna.</p>
                            <div class="post-info">
                                <span>Posted by: admin</span>
                                <a href="single.html" class="btn btn-inverse">View More</a>
                            </div>
                        </div>
                    </article>
                    <!-- POST - END -->
                    
                    <!-- POST - START -->
                    <article class="post">
                      <div class="post-date-wrapper">
                          <div class="post-date">
                              <div class="day">25</div>
                              <div class="month">Jan 2014</div>
                            </div>
                            <div class="post-type">
                              <i class="fa fa-photo"></i>
                            </div>
                        </div>
                        <div class="post-body">
                            <h2>Blog post with Soundcloud</h2>
                            <div class="flex-video soundcloud">
                              <iframe height="166" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/122756510&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor dictum nibh, ac gravida orci porttitor et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam posuere magna a dapibus luctus. Curabitur posuere vel nisi et scelerisque. Praesent imperdiet sed enim et ornare. In congue quis enim ut gravida. Aenean non justo varius, dapibus ipsum eu, mattis urna.</p>
                            <div class="post-info">
                                <span>Posted by: admin</span>
                                <a href="single.html" class="btn btn-inverse">View More</a>
                            </div>
                        </div>
                    </article>
                    <!-- POST - END -->
                    
                    <!-- POST - START -->
                    <article class="post">
                      <div class="post-date-wrapper">
                          <div class="post-date">
                              <div class="day">25</div>
                              <div class="month">Jan 2014</div>
                            </div>
                            <div class="post-type">
                              <i class="fa fa-font"></i>
                            </div>
                        </div>
                        <div class="post-body">
                            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor dictum nibh, ac gravida orci porttitor et.</h2>
                            <div class="flex-video widescreen"><iframe width="1280" height="720" src="https://www.youtube.com/embed/ZgYWkbMRhz8?rel=0" allowfullscreen></iframe></div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor dictum nibh, ac gravida orci porttitor et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam posuere magna a dapibus luctus. Curabitur posuere vel nisi et scelerisque. Praesent imperdiet sed enim et ornare. In congue quis enim ut gravida. Aenean non justo varius, dapibus ipsum eu, mattis urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor dictum nibh, ac gravida orci porttitor et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam posuere magna a dapibus luctus. Curabitur posuere vel nisi et scelerisque. Praesent imperdiet sed enim et ornare. In congue quis enim ut gravida. Aenean non justo varius, dapiis urna.</p>
                            <div class="post-info">
                                <span>Posted by: admin</span>
                                <a href="single.html" class="btn btn-inverse">View More</a>
                            </div>
                        </div>
                    </article>
                    <!-- POST - END -->
                    
                </div>
                
                <ul class="pagination">
                    <li class="disabled"><a href="#"><i class="fa fa-angle-left"></i></a></li>
                    <li class="active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
                </ul>
                
            </div>
            <!-- CONTENT BODY - END -->
            
        </div>
    </section>




    <h1>Hello {{ user.first_name }} {{ user.last_name }} !</h1>

    <h1>Create a Post!</h1>
    <form v-on:submit.prevent="createPost()">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      Title:
      <input type="text" v-model="newPostTitle" />
      Text:
      <input type="text" v-model="newPostText" />
      Photo:
      <input type="text" v-model="newPostPhoto" />
      Video:
      <input type="text" v-model="newPostVideo" />
      <input type="submit" value="Create" />
    </form>

    <h1>My posts</h1>
    <div v-for="post in user.posts">
      <h2>{{ post.title }}</h2>
      <p>{{ post.text }}</p>
      <button v-on:click="destroyPost(post)">Destroy Post</button>
      <h4>Comments ({{ post.comments.length }} total)</h4>
      <div v-for="comment in post.comments">
        <h5>{{ comment.user_first_name }}</h5>
        <p>{{ comment.text }}</p>
      </div>
    </div>

    <h1>
      Followers
    </h1>
    <h4>({{ user.followers.length }} total)</h4>
    <div v-for="follower in user.followers">
      <h2>{{ follower.first_name }} {{ follower.last_name }}</h2>
      <router-link v-bind:to="`/users/${follower.id}`">View Profile!</router-link>
      <div v-for="post in follower.posts">
        <h4>{{ post.title }}</h4>
        <p>{{ post.text }}</p>
      </div>
    </div>

    <form v-on:submit.prevent="createHobbyUser()">
      <div>
        <h1>Choose a Hobby!</h1>
        <select v-model="hobby_id">
          <option value="" disabled="disabled" selected="selected"> Select Hobby:</option>
          <option v-for="hobby in hobbies" v-bind:value="hobby.id">{{ hobby.name }}</option>
        </select>
        <input type="submit" value="Create" />
      </div>
    </form>

    <h1>My Hobbies</h1>
    <div v-for="hobby in user.hobbies">
      <router-link v-bind:to="`/hobbies/${hobby.id}`">
        <p>{{ hobby.name }}</p></router-link
      >
      <button v-on:click="destroyHobby(hobby)">Destroy Hobby</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
    data: function() {
        return {
            relationships: [],
            user: { followers: [] },
            errors: [],
            newPostTitle: "",
            newPostText: "",
            newPostPhoto: "",
            newPostVideo: "",
            hobby_id: "",
            hobbies: [{}]
        };
    },
    created: function() {
        axios.get("/api/users/current_user").then(response => {
            console.log("created", response.data);
            this.user = response.data;
        });
        axios.get("/api/hobbies?new=true").then(response => {
            this.hobbies = response.data;
            console.log(this.hobbies);
        });
    },
    methods: {
        createPost: function() {
            var params = {
                title: this.newPostTitle,
                text: this.newPostText,
                photo: this.newPostPhoto,
                video: this.newPostVideo
            };
            axios
                .post("/api/posts", params)
                .then(response => {
                    console.log("Successfully made post!!!");
                    console.log(response.data);
                    this.user.posts.push(response.data);
                    this.$router.push("/");
                })
                .catch(error => {
                    console.log(error.response);
                    this.errors = error.response.data.errors;
                });
        },

        destroyPost: function(post) {
            axios.delete("/api/posts/" + post.id).then(response => {
                var index = this.user.posts.indexOf(post);
                this.user.posts.splice(index, 1);
                this.$router.push("/");
            });
        },

        createHobbyUser: function() {
            var params = {
                hobby_id: this.hobby_id
            };
            axios
                .post("/api/hobbyusers", params)
                .then(response => {
                    console.log("Successfully created a hobby!");
                    this.user.hobbies.push(response.data.hobby);
                    this.$router.push("/");
                })
                .catch(error => {
                    console.log(error.response);
                    this.errors = error.response.data.errors;
                });
        },
        destroyHobby: function(hobby) {
            axios.delete("/api/hobbies/" + hobby.id).then(response => {
                var index = this.user.hobbies.indexOf(hobby);
                this.user.hobbies.splice(index, 1);
                this.$router.push("/");
            });
        }
    }
};
</script>
