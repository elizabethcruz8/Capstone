<template>
  <!-- prettier-ignore -->
  <div class="container">

    <section class="content-wrapper">
      <div class="row">
        
          <!-- SIDEBAR - START -->
          <div class="col-sm-4 hidden-xs">
      
                <!-- SIDEBAR BOX - START -->
                <div class="box sidebar-box widget-wrapper">
                  <h3>Upcoming tournament</h3>
                    <div class="tournament">
                      <a href="tournament.html"><img src="/assets/images/GirlGamers.png" class="img-responsive" alt=""></a>
                        <h4>ESL 2015</h4>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam posuere magna a dapibus luctus.</p>
                        <div class="date">21 - 29 June 2015</div>
                        <div class="text-center"><a href="tournament.html" class="btn btn-primary">More info</a></div>
                    </div>
                </div>
                <!-- SIDEBAR BOX - END -->
                
                <!-- SIDEBAR BOX - START -->
                
                <!-- SIDEBAR BOX - END -->
                
                <!-- SIDEBAR BOX - START -->
                
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
                
              <div class="box">
                  <ul class="list-unstyled list-inline team-categories">
                      <li><a href="#" class="btn btn-primary active">Admins</a></li>
                        <li><a href="#" class="btn btn-primary ">Moderators</a></li>
                        <li><a href="#" class="btn btn-primary ">Users</a></li>
                    </ul>
                    
                  <div class="team-members-wrapper">
                        
                        <!-- TEAM MEMBER - START -->   
                        <div class="team-member" v-for="user in hobby.users" v-if="!user.is_current_user">
                            <div class="row">
                                <div class="col-xs-3"><img src="/assets/images/member-01.jpg" class="img-responsive center-block img-circle" alt=""></div>
                                <div class="col-xs-9">
                                    <h2>GirlGamer Name:<small>{{ user.first_name }} {{ user.last_name }}</small></h2>
                                    <ul class="list-unstyled">

                                        <li><strong>Hobbies:</strong>{{ hobby.name }}</li>
                            
                                    </ul>
                                    <router-link v-bind:to="`/users/${user.id}`">View Profile!</router-link>
                                        <div v-if="user.is_following">
                                          <button v-on:click="destroyRelationship(user)">UnFollow</button>
                                        </div>

      <div v-else>
        <button v-on:click="createRelationship(user)">Follow</button> </div>
                                  
                                    <ul class="brands brands-tn brands-circle brands-colored brands-inline">
                                       <li><a href="https://www.facebook.com/pixelized.cz" target="_blank" class="brands-facebook"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="https://twitter.com/Pixelizedcz" target="_blank" class="brands-twitter"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="https://plus.google.com/+PixelizedCz/" target="_blank" class="brands-google-plus"><i class="fa fa-google-plus"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- TEAM MEMBER - END --> 
                        
                  </div>
              </div>
            </div>
            <!-- CONTENT BODY - END -->
            
        </div>
    </section>


    <h1>Recommended for you!</h1>
    <h2>Hobby Name</h2>
    <h3>{{ hobby.name }}</h3>
    <div v-for="user in hobby.users" v-if="!user.is_current_user">
      <p>
        {{ user.first_name }} {{ user.last_name }} (Am I following? {{ user.is_following }})

        <router-link v-bind:to="`/users/${user.id}`">View Profile!</router-link>
      </p>
      <p>Relationship: {{ user.relationship }}</p>
      <div v-if="user.is_following">
        <button v-on:click="destroyRelationship(user)">UnFollow</button>
      </div>

      <div v-else>
        <button v-on:click="createRelationship(user)">Follow</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      hobby: []
    };
  },
  created: function() {
    axios.get("/api/hobbies/" + this.$route.params.id).then(response => {
      console.log(response);
      this.hobby = response.data;
    });
  },
  methods: {
    createRelationship: function(user) {
      console.log("I want to follow this user", user);
      var params = {
        leader_id: user.id
      };
      axios.post("/api/relationships", params).then(response => {
        console.log("Successfully following!");
        user.relationship = response.data;
        user.is_following = true;
      });
    },

    destroyRelationship: function(user) {
      axios.delete("/api/relationships/" + user.relationship.id).then(response => {
        console.log("Successfully unfollowing!");
        user.relationship = response.data;
        user.is_following = false;
      });
    }
  }
};
</script>
