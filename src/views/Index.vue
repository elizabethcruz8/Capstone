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
      <h2>{{ post.title }}</h2>
      <p>{{ post.text }}</p>
      <button v-on:click="destroyPost(post)">Destroy Post</button>
      <h4>Comments ({{ post.comments.length }} total)</h4>
      <div v-for="comment in post.comments">
        <h5>{{ comment.user_first_name }}</h5>
        <p>{{ comment.text }}</p>
      </div>
    </div>

    {{ user.posts }}

    <h1>
      Followers
    </h1>
    <h4>({{ user.followers.length }} total)</h4>
    <div v-for="follower in user.followers">
      <h2>{{ follower.first_name }} {{ follower.last_name }}</h2>
      <div v-for="post in follower.posts">
        <h4>{{ post.title }}</h4>
        <p>{{ post.text }}</p>
      </div>
    </div>

    <h1>Create a Hobby!</h1>
    <form v-on:submit.prevent="createHobby()">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="newHobbyName" />
      <input type="submit" value="Create" />
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
      newHobbyName: ""
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
        this.$router.push("/");
      });
    },

    createHobby: function() {
      var params = {
        name: this.newHobbyName
      };
      axios
        .post("/api/hobbies", params)
        .then(response => {
          console.log("Successfully created a hobby!");
          this.user.hobbies.push(response.data);
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
