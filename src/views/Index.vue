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
                  <div class="row">
                    <div class="col-md-5">
                      <h3> Gamer Tag: </h3>
                    </div>
                    <div class="col-md-6" style="margin-left: -20px;">
                      <h2>{{user.Gamer_Tag}} </h2> 
                    </div>
                  </div>
                  <img v-bind:src="user.image" class="img-responsive">
              </div>

              <div class="box">

                    <div class="row">
                   <form v-on:submit.prevent="updateUser(user.id)">
                        <h1> Upload your profile picture </h1>
                        <div>
                           <b> Image:</b> <input type="file" v-on:change="setImage($event)" ref="fileImageInput">
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
                   <div class="col-md-5">
                      <h3>Followers: </h3>
                    </div>
                    <div class="col-md-6" style="margin-left: -20px;">
                     <small>({{ user.followers.length }} total)</small>
                    </div>
                   <center> <div v-for="follower in user.followers">
                        <img v-bind:src="follower.image" class="img-responsive img-circle center-block" style="width: 80%;">
                      <h2>{{ follower.first_name }} {{ follower.last_name }}</h2>
                      <h2> {{follower.Gamer_Tag}} </h2>
                      <router-link v-bind:to="`/users/${follower.id}`">View Profile!</router-link>
                    </div> </center>
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
                  <button type="submit" class="btn btn-primary">Create Post</button>
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
                            <a href="single.html" class="btn btn-inverse">View More</a>
                            <div class="post-info">
                                <span>Posted by: {{user.first_name}} {{user.last_name}}</span>

                              <b>  <p> Comments </p> </b>

                            <div> <small> ({{ post.comments.length }} total) </small>
                            </div>
                                <div v-for="comment in post.comments">
                                <h5> <b>{{ comment.user_first_name }} </b></h5>  
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
                          <img src="/assets/images/cod.jpeg" alt="cod">
                            <h2>Call of Duty returns to its roots with CoD: WWII</h2>
                            <p> The first Call of Duty game, released in 2003 for Windows PCs, was based in World War II and let players fight their way through D-Day and the Battle of the Bulge. Two sequels were also set in World War II, but subsequent releases have moved along the timeline to include action in the Vietnam War, the Cold War era, the near future and sci-fi futuristic settings.

                            Along the way, Call of Duty has appeared on a battery of platforms including Macintosh PCs and video game consoles from Xbox 360 and PlayStation 3 to today's Xbox One and PS4.

                            I've been a Call of Duty devotee ever since. Over the years, I've often traveled across the country to play the game before it's released in stores, ensconced in a hotel with a few dozen other video game critics and journalists.

                            This time, I holed up in my man cave for several multi-hour stints over the last week, watching on a Samsung big-screen TV and playing on an Xbox One S.

                            While I've enjoyed Call of Duty's visions of a militarized future, this journey to the past ranks among the series' best. You play as "Red" Daniels, a U.S. Army private about to cram into a Higgins boat for the D-Day assault.

                            </p>
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
                            <h2>Video Game Music Nerd</h2>
                            <div class="flex-video soundcloud">
                              <iframe height="166" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/122756510&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
                            </div>
                            <p>This song is a great song to game with. One of my main takeaways after seeing four NACVGMs (1, 4, 5, and 6) now is how the quality of presentations has grown.  To me that showcases the importance of a conference like this: by seeing and hearing other scholars’ work, there is a general elevation of the research and knowledge.  The conference has also grown physically as well.  I’d guess that keynotes at the first NACVGM had about 70 in attendance and that keynotes in the last two broke 100 attendees.  

                            Some of my favorite papers included the very first one, by Elizabeth Medina-Gray, analyzing the talking sound from the first Dragon Warrior/Quest.  Really interesting to consider this short sound that I’d only thought of as noise in relation to the key of the game, and as a musical entity.  I’ve often asked my students what the sound in the first Legend of Zelda is meant to represent— typing? talking?— so this was right up my alley.  Elizabeth's presentation really set a standard for the conference.  Two other highlights for me were Steven Reale and Isaac Hraga’s joint presentation about their work over the last year having composition and implementation lessons at Youngstown State.  Very inspiring and I’m hoping to implement some aspects of that work at U-M in the coming year.  Also, William Ayers had a paper that I found very fascinating about echolocation in video games.  While he started talking about games where players play as dolphins, most interesting to me was when he turned to the matter of horror games where the player’s in-game sight is restricted.  I show Lurking often in Video Game Music class if the students want to do horror games and I love how this sort of game design ties in the importance of sound to the gameplay mechanics.  Really awesome. 
</p>
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
                              <i class="fa fa-font"></i>
                            </div>
                        </div>
                        <div class="post-body">
                            <h2>THE MAIKELELE EFFECT</h2>
                            <div class="flex-video widescreen"><iframe width="1280" height="720" src="https://www.youtube.com/embed/ZgYWkbMRhz8?rel=0" allowfullscreen></iframe></div><p>Mikail "Maikelele" Bill was announced just before this years Starladder i-League StarSeries Season 2 as stand-in for Ninjas in Pjamas, replacing pyth who had been showing fantastic form before the untimely hand injury ruled him out of the competition. After NiP ended up winning the event, the first ever team to win a LAN with a stand-in, I decided to take a closer look at the return of Mikail and the effect it had on NiP, who have not reached the dizzy heights they were at a few years ago.

                            Out of the 5 LANs Maikelele has attended with Ninjas, they have reached 4 finals, winning 2 of them, a very good looking record on paper. Since his departure from the team in February 2015, NiP have looked slightly lost, culminating in a group stage exit at ESL One Cologne and being knocked out of ELeague by Virtus.pro. 

                            The return of Mikail to the NiP lineup was a announcement I was very excited about and one I thought would be interesting to watch over the course of the tournament.

                            At Starladder, NiP resoundingly won their group with the most standout result being a 16-5 win over GODSENT in a Swedish derby and a 16-10 win against Hellraisers on overpass and cache respectively. One thing I noted about the match against GODSENT was the way in which GeT_RiGhT showed the sort of form I have always thought about when he is involved. Since 1.6 I have followed his rise to becoming one of the main stars of CSGO, recent performances have been far from the normal standards, until this event with Maikelele in the team. GeT_RiGhT seemed to be back to his old ways, whether or not that is down to Mikail being back in the team is to be seen, but I saw many instances of both players laughing and chatting to each other mid-game, both seeming very relaxed, seemingly bouncing off one another.
                              </p>
                            <div class="post-info">
                                <span>Posted by: {{user.first_name}}</span>
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
