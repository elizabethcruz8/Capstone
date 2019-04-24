<template>
  <div class="container">
    <h1>User info</h1>
    <p>{{ user.first_name }}</p>
    <h1>Followers:</h1>
    <div v-for="follower in user.followers">
      {{ follower }}
    </div>

    <h1>All Relationships</h1>
    <div v-for="relationship in relationships">
      <h2>Id: {{ relationship.follower.id }}</h2>
      <h2>First Name: {{ relationship.follower.first_name }}</h2>
      <h2>Last Name: {{ relationship.follower.last_name }}</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      relationships: [],
      user: {}
    };
  },
  created: function() {
    axios.get("/api/users/current_user").then(response => {
      console.log("created", response.data);
      this.user = response.data;
    });
  },
  methods: {}
};
</script>
