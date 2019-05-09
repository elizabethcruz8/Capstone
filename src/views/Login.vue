<template>
  <div class="container">
    <section class="content-wrapper">
      <div class="row">
        <!-- SIDEBAR - START -->
        <div class="col-sm-2 hidden-xs"></div>
        <!-- SIDEBAR - END -->

        <!-- CONTENT BODY - START -->
        <div class="col-sm-8">
          <div class="box registration-form">
            <h2>Login</h2>
            <form v-on:submit.prevent="submit()">
              <div class="form-group">
                <label for="login_email">Email</label>
                <input v-model="email" type="email" class="form-control" id="login_email" placeholder="Enter email" />
              </div>
              <div class="form-group">
                <label for="login_pass">Password</label>
                <input v-model="password" type="password" class="form-control" id="login_pass" placeholder="Password" />
              </div>
              <button type="submit" class="btn btn-primary login-btn">Login</button>
              <div class="checkbox remember">
                <!-- <label><input type="checkbox" /> Remember me on this computer</label> -->
              </div>
              <!-- <a id="reset-password-toggle" class="">Did you forget your password?</a> -->
            </form>
          </div>

          <div class="box registration-form" id="reset-password">
            <h2>Frogotten password</h2>
            <p>
              If you've forgotten your password use this form to reset your password. New password will be send to your
              email.
            </p>
            <form>
              <div class="form-group">
                <label for="forg_email">Email address</label>
                <input type="email" class="form-control" id="forg_email" placeholder="Enter email" />
              </div>
              <button type="submit" class="btn btn-primary">Reset password</button>
            </form>
          </div>
        </div>
        <!-- CONTENT BODY - END -->
      </div>
    </section>
  </div>

  <!-- 
  <div class="login">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Login</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email" />
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password" />
        </div>
        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
    </div>
  </div> -->
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>
