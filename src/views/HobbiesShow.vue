<template>
  <div class="container">
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
