<template>
  <div class="container">
    <section class="content-wrapper">
      <div class="row forum-header">
        <div class="col-sm-2 col-xs-3">
          <h1>Create Post</h1>
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
            <button class="btn btn-primary" type="submit"><i class="fa fa-edit"></i> Create Post</button>
          </form>
        </div>
        <div class="col-sm-10 col-xs-9">
          <ul class="pagination">
            <li class="disabled">
              <a href="#"><i class="fa fa-angle-left"></i></a>
            </li>
            <li class="active"><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li>
              <a href="#"><i class="fa fa-angle-right"></i></a>
            </li>
          </ul>
        </div>
      </div>

      <!-- FORUM POST - START -->
      <div class="box forum-post-wrapper">
        <div class="row">
          <div class="col-sm-3">
            <div class="author-detail">
              <h3><a href="profile.html">Admin</a></h3>
              <p class="function">Moderator</p>
              <ul class="list-unstyled">
                <li><strong>Join Date</strong>24/10/2014</li>
                <li><strong>Reputation</strong>2616</li>
                <li><strong>Posts</strong>5578</li>
              </ul>
            </div>
          </div>
          <div class="col-sm-9">
            <article class="forum-post">
              <div class="date">04-12-2012, 10:18 AM</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor dictum nibh, ac gravida orci
                porttitor et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Nullam posuere magna a dapibus luctus. Curabitur posuere vel nisi et scelerisque. Praesent
                imperdiet sed enim et ornare. In congue quis enim ut gravida. Aenean non justo varius, dapibus ipsum eu,
                mattis urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor dictum nibh, ac gravida
                orci porttitor et.
              </p>
              <a href="#" class="btn btn-primary">Quote</a>
            </article>
          </div>
        </div>
      </div>
      <!-- FORUM POST - END -->

      <!-- FORUM POST - START -->
      <div class="box forum-post-wrapper">
        <div class="row">
          <div class="col-sm-3">
            <div class="author-detail">
              <h3><a href="profile.html">Admin</a></h3>
              <p class="function">Moderator</p>
              <ul class="list-unstyled">
                <li><strong>Join Date</strong>24/10/2014</li>
                <li><strong>Reputation</strong>2616</li>
                <li><strong>Posts</strong>5578</li>
              </ul>
            </div>
          </div>
          <div class="col-sm-9">
            <article class="forum-post">
              <div class="date">04-12-2012, 10:18 AM</div>
              <blockquote>
                <div class="author">
                  Originally Posted by <b>admin</b> <span class="date">(04-12-2012, 10:18 AM)</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor dictum nibh, ac gravida orci
                  porttitor et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                  egestas. Nullam posuere magna a dapibus luctus.
                </p>
              </blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor dictum nibh, ac gravida orci
                porttitor et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Nullam posuere magna a dapibus luctus. Curabitur posuere vel nisi et scelerisque. Praesent
                imperdiet sed enim et ornare. In congue quis enim ut gravida. Aenean non justo varius, dapibus ipsum eu,
                mattis urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor dictum nibh, ac gravida
                orci porttitor et.
              </p>
              <a href="#" class="btn btn-primary">Quote</a>
            </article>
          </div>
        </div>
      </div>
      <!-- FORUM POST - END -->

      <!-- FORUM POST - START -->
      <div class="box forum-post-wrapper">
        <div class="row">
          <div class="col-sm-3">
            <div class="author-detail">
              <h3><a href="profile.html">Admin</a></h3>
              <p class="function">Moderator</p>
              <ul class="list-unstyled">
                <li><strong>Join Date</strong>24/10/2014</li>
                <li><strong>Reputation</strong>2616</li>
                <li><strong>Posts</strong>5578</li>
              </ul>
            </div>
          </div>
          <div class="col-sm-9">
            <article class="forum-post">
              <div class="date">04-12-2012, 10:18 AM</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="#" class="btn btn-primary">Quote</a>
            </article>
          </div>
        </div>
      </div>
      <!-- FORUM POST - END -->

      <div class="row forum-header forum-footer">
        <div class="col-sm-2 col-xs-3">
          <a href="#" class="btn btn-primary"><i class="fa fa-edit"></i> New Thread</a>
        </div>
        <div class="col-sm-10 col-xs-9">
          <ul class="pagination">
            <li class="disabled">
              <a href="#"><i class="fa fa-angle-left"></i></a>
            </li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li>
              <a href="#"><i class="fa fa-angle-right"></i></a>
            </li>
          </ul>
        </div>
      </div>

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
      hobbies: [{}]
    };
  },
  created: function() {
    axios.get("/api/users/current_user").then(response => {
      console.log("created", response.data);
      this.user = response.data;
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
    }
  }
};
</script>
