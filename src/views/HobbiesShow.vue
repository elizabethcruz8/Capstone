<template>
  <div class="container">
    <h1>Recommended for you!</h1>
    <h2>Hobby Name</h2>
    <h3>{{ hobby.name }}</h3>
    <div v-for="user in hobby.users" v-if="!user.is_current_user">
      <p>{{ user.first_name }} {{ user.last_name }} (Am I following? {{ user.is_following }})</p>
      <p>Relationship: {{ user.relationship }}</p>
      <div v-if="user.is_following">
        <button>Unfollow</button>
      </div>

      <div v-else>
        <button v-on:click="createRelationship(relationship)">Follow</button>
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
    createRelationship: function(relationship) {
      var params;
      console.log("this button works!");
    }
  }
};
</script>
