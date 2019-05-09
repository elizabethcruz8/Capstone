<template>
  <div class="container">
    <section class="content-wrapper">
      <div class="row">
        <!-- SIDEBAR - START -->
        <div class="col-sm-4 hidden-xs">
          <!-- SIDEBAR BOX - START -->
          <div class="box sidebar-box widget-wrapper">
            <h3>{{ user.first_name }}'s Hobbies</h3>
            <div class="tournament">
              <ul class="list-unstyled">
                <div v-for="hobby in user.hobbies">
                  <router-link v-bind:to="`/hobbies/${hobby.id}`">
                    <p>{{ hobby.name }}</p></router-link
                  >
                </div>
              </ul>
            </div>
          </div>
          <!-- SIDEBAR BOX - END -->

          <!-- SIDEBAR BOX - START -->
          <div class="box sidebar-box widget-wrapper widget-matches">
            <h3>{{ user.first_name }} {{ user.last_name }}'s Followers</h3>
            <small>({{ user.followers.length }} total)</small>
            <div v-for="follower in user.followers">
              <h2>{{ follower.first_name }} {{ follower.last_name }}</h2>
              <img v-bind:src="follower.image" class="img-responsive img-circle center-block" />
              <div v-for="post in follower.posts">
                <h3>{{ post.title }}</h3>
                <p>{{ post.text }}</p>
                <form v-on:submit.prevent="createComment()">
                  Comment:
                  <input type="text" v-model="newCommentText[index]" />
                  <input type="submit" value="Create" />
                </form>
              </div>
            </div>
          </div>
          <!-- SIDEBAR BOX - END -->

          <!-- SIDEBAR BOX - START -->
          <div class="box sidebar-box widget-wrapper widget-matches">
            <h3>
              Latest matches <a href="matches-list.html" class="btn btn-primary pull-right btn-sm">All matches</a>
            </h3>

            <a href="match-single.html">
              <table class="table match-wrapper">
                <tbody>
                  <tr>
                    <td class="game">
                      <img src="assets/icons/lol.png" alt="" />
                      <span>LoL</span>
                    </td>
                    <td class="game-date">
                      <span>18/02/2015 - 14:00</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="team-name"><img src="assets/icons/usa.png" alt="" /><b>Ninjas in Pyjamas</b></td>
                    <td class="team-score win">9</td>
                  </tr>
                  <tr>
                    <td class="team-name"><img src="assets/icons/den.png" alt="" />Natus Vincere</td>
                    <td class="team-score lose">5</td>
                  </tr>
                </tbody>
              </table>
            </a>

            <a href="match-single.html">
              <table class="table match-wrapper">
                <tbody>
                  <tr>
                    <td class="game">
                      <img src="assets/icons/gta.png" alt="" />
                      <span>GTA</span>
                    </td>
                    <td class="game-date">
                      <span>8/6/2015 - 12:00</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="team-name"><img src="assets/icons/swe.png" alt="" /><b>Ninjas in Pyjamas</b></td>
                    <td class="team-score win">9</td>
                  </tr>
                  <tr>
                    <td class="team-name"><img src="assets/icons/usa.png" alt="" />Natus Vincere</td>
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
              <li>
                <a href="#">Tournaments<span>45</span></a>
              </li>
              <li>
                <a href="#">Leagues<span>122</span></a>
              </li>
              <li>
                <a href="#">Counter Strike<span>684</span></a>
              </li>
              <li>
                <a href="#">Dota 2<span>1242</span></a>
              </li>
              <li>
                <a href="#">World of Warcraft<span>112</span></a>
              </li>
              <li>
                <a href="#">Minecraft<span>18</span></a>
              </li>
            </ul>
          </div>
          <!-- SIDEBAR BOX - END -->
        </div>
        <!-- SIDEBAR - END -->

        <!-- CONTENT BODY - START -->
        <div class="col-sm-8">
          <div class="box">
            <!-- TEAM MEMBER - START -->

            <div class="team-member single">
              <div class="row">
                <div class="col-sm-4 col-md-3">
                  <img v-bind:src="user.image" class="img-responsive img-circle center-block" alt="" />
                  <ul class="brands brands-tn brands-circle brands-colored brands-inline text-center">
                    <li>
                      <a href="https://www.facebook.com/pixelized.cz" target="_blank" class="brands-facebook"
                        ><i class="fa fa-facebook"></i
                      ></a>
                    </li>
                    <li>
                      <a href="https://twitter.com/Pixelizedcz" target="_blank" class="brands-twitter"
                        ><i class="fa fa-twitter"></i
                      ></a>
                    </li>
                    <li>
                      <a href="https://plus.google.com/+PixelizedCz/" target="_blank" class="brands-google-plus"
                        ><i class="fa fa-google-plus"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div class="col-sm-8 col-md-9">
                  <h2>
                    GamerGirl Name <small> {{ user.first_name }} {{ user.last_name }}</small>
                  </h2>
                  <ul class="list-unstyled">
                    <li><strong>Member since:</strong>08/21/2015</li>
                    <li><strong>Team:</strong><a href="gaming-team.html">Ninjas in Pyjamas</a></li>
                    <li><strong>Birthday:</strong> {{ user.date_of_birth }}</li>
                    <li><strong>Email:</strong> {{ user.email }}</li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- TEAM MEMBER - END -->
          </div>

          <div class="box colored config">
            <p>Here you can download player's config. <a href="#" class="btn btn-simple">Download</a></p>
          </div>

          <div class="box hardware">
            <h3>{{ user.first_name }}'s Posts</h3>
            <div class="row">
              <div class="col-md-6">
                <div class="team-member">
                  <ul class="list-unstyled">
                    <div v-for="(post, index) in user.posts">
                      <h2>{{ post.title }}</h2>
                      <p>{{ post.text }}</p>
                      <form v-on:submit.prevent="createComment(post, index)">
                        Comment:
                        <input type="text" v-model="newCommentText[index]" />
                        <input type="submit" value="Create" />
                      </form>
                      <h2>Comments ({{ post.comments.length }} total)</h2>
                      <div v-for="comment in post.comments">
                        <h3>{{ comment.user_first_name }}: {{ comment.text }}</h3>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>

              <div class="col-md-6">
                <img src="assets/images/pc.jpg" class="img-responsive center-block" alt="" />
              </div>
            </div>
          </div>

          <div class="box profile-gallery">
            <h2>Profile gallery</h2>
            <div class="gallery-page">
              <div class="row">
                <div class="col-md-4 col-xs-6">
                  <a href="/assets/images/girl gamer tournament 1.jpeg"
                    ><img src="/assets/images/girl gamer tournament 1.jpeg" class="img-responsive" alt=""
                  /></a>
                </div>
                <div class="col-md-4 col-xs-6">
                  <a href="/assets/images/girl gamer tournament 3.jpeg"
                    ><img src="/assets/images/girl gamer tournament 3.jpeg" class="img-responsive" alt=""
                  /></a>
                </div>
                <div class="col-md-4 col-xs-6">
                  <a href="/assets/images/girl gamer tournament 6.jpeg"
                    ><img src="/assets/images/girl gamer tournament 6.jpeg" class="img-responsive" alt=""
                  /></a>
                </div>
                <div class="col-md-4 col-xs-6">
                  <a href="/assets/images/girl gamer tournament 4.jpg"
                    ><img src="/assets/images/girl gamer tournament 4.jpeg" class="img-responsive" alt=""
                  /></a>
                </div>
                <div class="col-md-4 col-xs-6">
                  <a href="/assets/images/girl gamer tournament 2.jpg"
                    ><img src="/assets/images/girl gamer tournament 2.jpeg" class="img-responsive" alt=""
                  /></a>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="box sidebar-box widget-wrapper">
                <h3>Last comments by {{ user.first_name }}</h3>

                <div v-for="comment in user.comments">
                  <div>
                    {{ comment.post.title }}
                    {{ comment.post.user_id }}
                  </div>
                  <p>
                    <router-link v-bind:to="`/users/${comment.post.user_id}`"> {{ comment.text }} </router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- COMMENT FORM - END -->

          <!-- COMMENT FORM - END -->
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
      user: { followers: [] },
      newCommentText: []
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
    });
  },
  methods: {
    createComment: function(post, index) {
      console.log(this.newCommentText);
      var params = {
        text: this.newCommentText[index],
        post_id: post.id
      };

      axios
        .post("/api/comments", params)
        .then(response => {
          console.log("Successfully made comment!!!");
          console.log(response.data);
          post.comments.push(response.data);
          this.newCommentText[index] = "";
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
