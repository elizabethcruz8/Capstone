<template>
  <div class="container">
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
      {{ post }}
    </div>

    <h1>Followers:</h1>
    <div v-for="follower in user.followers">
      <h2>{{ follower.first_name }} {{ follower.last_name }}</h2>
      <div v-for="post in follower.posts">
        {{ post }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      relationships: [],
      user: [],
      errors: [],
      newPostTitle: "",
      newPostText: "",
      newPostPhoto: "",
      newPostVideo: ""
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
          this.user.posts.push(response.data);
          this.$router.push("/");
        })
        .catch(error => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
