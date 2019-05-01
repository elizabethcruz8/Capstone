<template>
  <div class="container">
    <h1>{{ user.first_name }} {{ user.last_name }} Posts</h1>
    <div v-for="(post, index) in user.posts">
      <h2>{{ post.title }}</h2>
      <p>{{ post.text }}</p>
      <form v-on:submit.prevent="createComment(post, index)">
        Comment:
        <input type="text" v-model="newCommentText[index]" />
        <input type="submit" value="Create" />
      </form>
      <h4>Comments ({{ post.comments.length }} total)</h4>
      <div v-for="comment in post.comments">
        <h5>{{ comment.user_first_name }}</h5>
        <p>{{ comment.text }}</p>
      </div>
    </div>

    <h1>{{ user.first_name }} {{ user.last_name }} Followers</h1>
    <h4>({{ user.followers.length }} total)</h4>
    <div v-for="follower in user.followers">
      <h2>{{ follower.first_name }} {{ follower.last_name }}</h2>
      <div v-for="post in follower.posts">
        <h4>{{ post.title }}</h4>
        <p>{{ post.text }}</p>
        <!-- <form v-on:submit.prevent="createComment()">
          Comment:
          <input type="text" v-model="newCommentText[index]" />
          <input type="submit" value="Create" />
        </form> -->
        <!-- want to "create" a comment on this user's post here -->
      </div>
    </div>

    <h1>{{ user.first_name }} {{ user.last_name }} Hobbies</h1>
    <div v-for="hobby in user.hobbies">
      <router-link v-bind:to="`/hobbies/${hobby.id}`">
        <p>{{ hobby.name }}</p></router-link
      >
    </div>
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
