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
                  <img v-bind:src="user.image" class="img-responsive">
              </div>

              <div class="box">

                    <div class="row">
                   <form v-on:submit.prevent="updateUser(user.id)">
                        <h1> Upload your profile picture </h1>

                        <div>
                            Image: <input type="file" v-on:change="setImage($event)" ref="fileImageInput">
                         </div>
                         <input type="submit" value="Upload">
                     </form>
                 </div>

                </div>
                <!-- SIDEBAR BOX - END -->
                
                <!-- SIDEBAR BOX - START -->
                <div class="box sidebar-box widget-wrapper widget-matches">
                  <form v-on:submit.prevent="createHobbyUser()">
                     <div>
                 <h3>Choose a Hobby!</h3>
                 <select v-model="hobby_id">
                 <option value="" disabled="disabled" selected="selected"> Select Hobby:</option>
                <option v-for="hobby in hobbies" v-bind:value="hobby.id">{{ hobby.name }}</option>
                </select>
                 <input class="btn btn-primary" type="submit" value="Create" />
                    </div>
                 </form>
                </div>
                <!-- SIDEBAR BOX - END -->
                
                
                <!-- SIDEBAR BOX - START -->
                <div class="box sidebar-box widget-wrapper">
                  <h3>My Hobbies</h3>
                    <ul class="nav nav-sidebar">
                      <li v-for="hobby in user.hobbies">
                        <router-link v-bind:to="`/hobbies/${hobby.id}`">
                          {{ hobby.name }}
                          <button class="btn btn-primary pull-right" v-on:click="destroyHobby(hobby)"><i class="fa fa-trash-o"></i></button>
                        </router-link>
                      </li>
                    </ul>
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
                  <h3>
                    Followers 
                    </h3>
                    <small>({{ user.followers.length }} total)</small>
                    <div v-for="follower in user.followers">
                        <img v-bind:src="follower.image" class="img-responsive img-circle center-block" style="width: 80%;">
                      <h2>{{ follower.first_name }} {{ follower.last_name }}</h2>
                      <router-link v-bind:to="`/users/${follower.id}`">View Profile!</router-link>
                      <div v-for="post in follower.posts">
                        <h4>{{ post.title }}</h4>
                        <p>{{ post.text }}</p>
                      </div>
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






                
                <div class="box registration-form">

                        <h2>Create a Post!</h2>
                    <form v-on:submit.prevent="createPost()">
                          <ul>
                            <li v-for="error in errors">{{ error }}</li>
                          </ul>
                      <div class="form-group">
                        <label for="Title">Title</label>
                        <input type="text" v-model="newPostTitle" class="form-control" id="newPostTitle" aria-describedby="newPostTitle" placeholder="Enter Title">
                      </div>
                    <div class="form-group">
                        <label for="Text">Text</label>
                        <input type="text" v-model="newPostText" class="form-control" id="newPostText" aria-describedby="newPostText" placeholder="Enter Text">
                    </div>
                    <div class="form-group">
                        <b> Photo </b>
                        <input type="file" class="form-control" v-on:change="setPostPhoto($event)" ref="filePostPhotoInput">
                       </div>

                        <div class="form-group">
                      <b>  Video </b>
                        <input type="file" class="form-control" v-on:change="setPostVideo($event)" ref="filePostVideoInput">
                       </div>
                       <div>
                  <button type="submit" class="btn btn-primary">Create Post!!!</button>
                </div>
                    </form>
                    
                </div>
          
                  <!-- POST - START -->
                <div class="box">
                  <article class="post" v-for="post in user.posts">
                      <div class="post-date-wrapper">
                          <div class="post-date">
                              <div class="day">24</div>
                              <div class="month">April 2019</div>
                            </div>
                            <div class="post-type">
                              <i class="fa fa-video-camera"></i>
                            </div>
                        </div>
                        <div class="post-body"> 
                            <button class="btn btn-primary pull-right" v-on:click="destroyPost(post)">Destroy Post</button>
                            <h2>{{ post.title }} </h2>
                            <img v-bind:src="post.photo">
                            <p>{{ post.text }} </p>
                            <div class="post-info">
                                <span>Posted by: {{user.first_name}} {{user.last_name}}</span>
                             <h4>Comments ({{ post.comments.length }} total)</h4>
                                <div v-for="comment in post.comments">
                                <h5>{{ comment.user_first_name }}</h5> 
                                <p>{{ comment.text }}</p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <!-- POST - END -->
                    
                    <!-- POST - START -->
                    <article class="post">
                      <div class="post-date-wrapper">
                          <div class="post-date">
                              <div class="day">25</div>
                              <div class="month">April 2019</div>
                            </div>
                            <div class="post-type">
                              <i class="fa fa-font"></i>
                            </div>
                        </div>
                        <div class="post-body">
                            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor dictum nibh, ac gravida orci porttitor et.</h2>
                            <div class="flex-video widescreen"><iframe src="https://player.vimeo.com/video/48443133"></iframe></div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor dictum nibh, ac gravida orci porttitor et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam posuere magna a dapibus luctus. Curabitur posuere vel nisi et scelerisque. Praesent imperdiet sed enim et ornare. In congue quis enim ut gravida. Aenean non justo varius, dapibus ipsum eu, mattis urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor dictum nibh, ac gravida orci porttitor et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam posuere magna a dapibus luctus. Curabitur posuere vel nisi et scelerisque. Praesent imperdiet sed enim et ornare. In congue quis enim ut gravida. Aenean non justo varius, dapibus ipsum eu, mattis urna.</p>
                            <div class="post-info">
                                <span>Posted by: {{user.first_name}}</span>
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
                                <span>Posted by: {{user.first_name}}</span>
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
      hobbies: [{}],
      image: "",
      user_id: "",
      test: ""
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
    setImage: function(event) {
      if (event.target.files.length > 0) {
        this.image = event.target.files[0];
      }
    },
    setPostPhoto: function(event) {
      if (event.target.files.length > 0) {
        this.newPostPhoto = event.target.files[0];
      }
    },
    setPostVideo: function(event) {
      if (event.target.files.length > 0) {
        this.newPostVideo = event.target.files[0];
      }
    },
    updateUser: function(user_id) {
      var formData = new FormData();
      formData.append("image", this.image);
      // formData.append("video", this.video);
      // formData.append("id", user_id);
      console.log("formData: ", formData);
      axios.patch("/api/users/" + user_id, formData).then(response => {
        this.image = "";
        // this.video = "";
        this.$refs.fileImageInput.value = "";
        this.user.image = response.data.image;
      });
    },
    createPost: function() {
      var formData = new FormData();
      formData.append("title", this.newPostTitle);
      formData.append("text", this.newPostText);
      formData.append("photo", this.newPostPhoto);
      formData.append("video", this.newPostVideo);
      axios
        .post("/api/posts", formData)
        .then(response => {
          console.log("Successfully made post!!!");
          console.log(response.data);
          this.$refs.filePostPhotoInput.value = "";
          this.$refs.filePostVideoInput.value = "";
          this.newPostTitle = "";
          this.newPostText = "";
          this.user.posts.unshift(response.data);
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
      axios.delete("/api/hobbyusers/" + hobby.hobbyuser_id).then(response => {
        var index = this.user.hobbies.indexOf(hobby);
        this.user.hobbies.splice(index, 1);
        this.$router.push("/");
      });
    }
  }
};
</script>
