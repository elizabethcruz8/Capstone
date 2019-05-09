<template>
  <div id="app">
    <!-- ==========================
      HEADER - START 
    =========================== -->
    <header class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a href="index.html" class="navbar-brand visible-xs">GamerGirls</a>
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <i class="fa fa-bars"></i>
          </button>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <!-- <a href="/" class="btn btn-primary">Home</a> -->
            <!-- <li><a href="/">Home</a></li> -->
          </ul>
          <div class="pull-right navbar-buttons hidden-xs">
            <a href="/" class="btn btn-primary">Home</a>
            <a href="/Signup" class="btn btn-primary">Sign Up</a>
            <a href="/Login" class="btn btn-primary">Login</a>
            <a href="/Logout" class="btn btn-primary">Logout</a>
            <a class="navbar-icon show2" id="open-search"><i class="fa fa-search"></i></a>
            <a class="navbar-icon hidden" id="close-search"><i class="fa fa-times"></i></a>
            <div class="hidden" id="navbar-search-form">
              <form role="search">
                <div class="form-group">
                  <div class="input-group">
                    <input
                      type="text"
                      value=""
                      name="navbar-search"
                      id="navbar-search"
                      class="form-control"
                      placeholder="Search"
                    />
                    <span class="input-group-btn"
                      ><button class="btn btn-primary" type="submit" id="navbar-search-submit">
                        <i class="fa fa-search"></i></button
                    ></span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- ==========================
      HEADER - END 
    =========================== -->

    <!-- ==========================
      TITLE - START 
    =========================== -->
    <div class="container hidden-xs">
      <img src="/assets/images/GirlGamers.png" class="img-responsive pull-right" alt="GirlGamers" />
      <div class="header-title">
        <div class="pull-left">
          <h2>
            <a href="/"><span class="text-primary">Girl</span>gamers</a>
          </h2>
        </div>
      </div>
    </div>
    <!-- ==========================
      TITLE - END 
    =========================== -->

    <!-- ==========================
      JUMBOTRON - START 
    =========================== -->
    <div class="container">
      <div class="jumbotron">
        <div class="jumbotron-panel">
          <div class="panel panel-primary collapse-horizontal">
            <!--  <a data-toggle="collapse" class="btn btn-primary collapsed" data-target="#toggle-collapse"
              >Check our Servers <i class="fa fa-caret-down"></i
            ></a> -->
            <div class="jumbotron-brands">
              <ul class="brands brands-sm brands-inline brands-circle">
                <li>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-twitch"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-steam"></i></a>
                </li>
              </ul>
            </div>
            <div id="toggle-collapse" class="panel-collapse collapse">
              <div class="panel-body">
                <table class="table table-bordered table-header">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>IP Address</th>
                      <th>Map</th>
                      <th>Players</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><img src="assets/icons/csgo.jpg" alt="" /></td>
                      <td>[EU] CS:GO #1 | pixelized.cz</td>
                      <td>123.221.45.12:29999</td>
                      <td>de_dust2</td>
                      <td>18/18</td>
                    </tr>
                    <tr>
                      <td><img src="assets/icons/csgo.jpg" alt="" /></td>
                      <td>[CZ/SK] CS:GO Public | pixelized.cz</td>
                      <td>45.184.170.200:27851</td>
                      <td>de_inferno</td>
                      <td>24/32</td>
                    </tr>
                    <tr>
                      <td><img src="assets/icons/lol.png" alt="" /></td>
                      <td>[EU] League of Legends</td>
                      <td>50.243.180.246:25429</td>
                      <td>normal</td>
                      <td>10/30</td>
                    </tr>
                    <tr>
                      <td><img src="assets/icons/gta.png" alt="" /></td>
                      <td>[EU] GTA Server</td>
                      <td>132.24.45.83:27852</td>
                      <td>classic</td>
                      <td>22/60</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div id="jumbotron-slider">
          <!-- JUMBOTRON ITEM - START -->
          <div class="item">
            <a href="single.html">
              <div class="overlay-wrapper">
                <img src="/assets/images/girl gamer tournament 7.jpeg" class="img-responsive" alt="" />
                <span class="overlay"></span>
              </div>
            </a>
          </div>
          <!-- JUMBOTRON ITEM - END -->

          <!-- c ITEM - START -->
          <div class="item">
            <a href="single.html">
              <div class="overlay-wrapper">
                <img src="/assets/images/girl gamer tournament 1.jpeg" class="img-responsive" alt="" />
                <span class="overlay"></span>
              </div>
            </a>
          </div>
          <!-- JUMBOTRON ITEM - END -->

          <!-- JUMBOTRON ITEM - START -->
          <div class="item">
            <a href="single.html">
              <div class="overlay-wrapper">
                <img src="/assets/images/girl gamer tournament 2.jpeg" class="img-responsive" alt="" />
                <span class="overlay"></span>
              </div>
            </a>
          </div>
          <!-- JUMBOTRON ITEM - END -->

          <!-- JUMBOTRON ITEM - START -->
          <div class="item">
            <a href="single.html">
              <div class="overlay-wrapper">
                <img src="/assets/images/girl gamer tournament 3.jpeg" class="img-responsive" alt="" />
                <span class="overlay"></span>
              </div>
            </a>
          </div>
          <!-- JUMBOTRON ITEM - END -->

          <!-- JUMBOTRON ITEM - START -->
          <div class="item">
            <a href="single.html">
              <div class="overlay-wrapper">
                <img src="/assets/images/girl gamer tournament 4.jpeg" class="img-responsive" alt="" />
                <span class="overlay"></span>
              </div>
            </a>
          </div>
          <!-- JUMBOTRON ITEM - END -->

          <!-- JUMBOTRON ITEM - START -->
          <div class="item">
            <a href="single.html">
              <div class="overlay-wrapper">
                <img src="/assets/images/girl gamer tournament 6.jpeg" class="img-responsive" alt="" />
                <span class="overlay"></span>
              </div>
            </a>
          </div>
          <!-- JUMBOTRON ITEM - END -->
        </div>
      </div>
    </div>
    <!-- ==========================
      JUMBOTRON - END 
    =========================== -->
    <!-- ==========================
      CONTENT - START 
    =========================== -->
    <router-view :key="$route.fullPath"></router-view>
    <!-- ==========================
      CONTENT - END 
    =========================== -->

    <!-- ==========================
      FOOTER - START 
    =========================== -->
    <div class="container">
      <div class="footer-boxes">
        <div class="row">
          <!-- FOOTER BOX - START -->
          <div class="col-md-4 hidden-xs hidden-sm">
            <div class="box">
              <h4>About Us</h4>
              <p>
                GirlGamers is about connecting girls/women beyond online gaming. Find another GirlGamer that you share
                common hobbies with, meet in person, and game online!
              </p>
            </div>
          </div>
          <!-- FOOTER BOX - END -->

          <!-- FOOTER BOX - START -->
          <div class="col-sm-6 col-md-4">
            <div class="box footer-tags">
              <h4>Tags</h4>
              <a href="#"><span class="text-12">Clean</span></a>
              <a href="#"><span class="text-12">CV</span></a>
              <a href="#"><span class="text-12">Flat</span></a>
              <a href="#"><span class="text-12">Freelance</span></a>
              <a href="#"><span class="text-12">Modern</span></a>
              <a href="#"><span class="text-12">One Page</span></a>
              <a href="#"><span class="text-12">Professional</span></a>
              <a href="#"><span class="text-12">Responsive</span></a>
              <a href="#"><span class="text-12">Resume</span></a>
              <a href="#"><span class="text-12">Business</span></a>
              <a href="#"><span class="text-12">Corporate</span></a>
              <a href="#"><span class="text-12">CSS3</span></a>
              <a href="#"><span class="text-12">HTML5</span></a>
              <a href="#"><span class="text-12">Mobile First</span></a>
              <a href="#"><span class="text-12">Multipurpose</span></a>
              <a href="#"><span class="text-12">Portfolio</span></a>
            </div>
          </div>
          <!-- FOOTER BOX - END -->

          <!-- FOOTER BOX - START -->
          <div class="col-sm-6 col-md-4 hidden-xs">
            <div class="box footer-posts">
              <h4>Recent Posts</h4>
              <ul class="list-unstyled">
                <li><a href="#">Pellentesque habitant morbi</a> <span class="post-date">6.2.2015</span></li>
                <li><a href="#">Tristique senectus et netus</a> <span class="post-date">31.1.2015</span></li>
                <li><a href="#">Et malesuada fames ac</a> <span class="post-date">9.12.2014</span></li>
                <li><a href="#">Turpis egestas nullam</a> <span class="post-date">1.12.2014</span></li>
                <li><a href="#">Posuere magna a dapibus luctus</a> <span class="post-date">25.11.2014</span></li>
              </ul>
            </div>
          </div>
          <!-- FOOTER BOX - END -->
        </div>
      </div>
      <footer class="navbar navbar-default">
        <div class="row">
          <div class="col-md-6 hidden-xs hidden-sm">
            <ul class="nav navbar-nav">
              <li><a href="index-2.html">Home</a></li>
              <li><a href="team.html">Admin team</a></li>
              <li><a href="profile.html">Profile</a></li>
              <li><a href="tournament.html">Tournament</a></li>
              <li><a href="gallery.html">Gallery</a></li>
              <li><a href="forum.html">Forum</a></li>
            </ul>
          </div>
          <div class="col-md-6">
            <p class="copyright">
              © Progaming 2015 All right reserved. Designed by
              <a href="http://pixelized.cz/" target="_blank">Pixelized Studio.</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
    <!-- ==========================
      FOOTER - END 
    =========================== -->

    <beautiful-chat
      :participants="participants"
      :titleImageUrl="titleImageUrl"
      :onMessageWasSent="onMessageWasSent"
      :messageList="messageList"
      :newMessagesCount="newMessagesCount"
      :isOpen="isChatOpen"
      :close="closeChat"
      :open="openChat"
      :showEmoji="true"
      :showFile="true"
      :showTypingIndicator="showTypingIndicator"
      :colors="colors"
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :messageStyling="messageStyling"
    />
  </div>
</template>

<style>
h2 {
  color: purple !important;
}

h4 {
  color: purple !important;
}
li {
  color: crimson !important;
}

small {
  color: crimson !important;
}
strong {
  color: purple !important;
}

button {
  /*color: purple !important;*/
}
</style>

<script>
import axios from "axios";
import Chat from "vue-beautiful-chat";
import ActionCable from "actioncable";

export default {
  name: "app",
  data() {
    return {
      participants: [
        {
          id: "user1",
          name: "Matteo",
          imageUrl: "https://avatars3.githubusercontent.com/u/1915989?s=230&v=4"
        },
        {
          id: "user2",
          name: "Support",
          imageUrl: "https://avatars3.githubusercontent.com/u/37018832?s=200&v=4"
        }
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl: "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png",
      messageList: [
        { type: "text", author: `me`, data: { text: `Say yes!` } },
        { type: "text", author: `user1`, data: { text: `No.` } }
      ], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: false, // to determine whether the chat window should be open or closed
      showTypingIndicator: "", // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: "#4e8cff",
          text: "#ffffff"
        },
        launcher: {
          bg: "#4e8cff"
        },
        messageList: {
          bg: "#ffffff"
        },
        sentMessage: {
          bg: "#4e8cff",
          text: "#ffffff"
        },
        receivedMessage: {
          bg: "#eaeaea",
          text: "#222222"
        },
        userInput: {
          bg: "#f4f7f9",
          text: "#565867"
        }
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
    };
  },
  created: function() {
    axios.get("/api/messages").then(response => {
      console.log("MESSAGES", response.data);
      this.participants = response.data.participants;
      this.messageList = response.data.messages;
    });

    var cable = ActionCable.createConsumer("ws://localhost:3000/cable");
    cable.subscriptions.create("MessagesChannel", {
      connected: () => {
        // Called when the subscription is ready for use on the server
        console.log("Connected to MessagesChannel");
      },
      disconnected: () => {
        // Called when the subscription has been terminated by the server
      },
      received: data => {
        // Called when there's incoming data on the websocket for this channel
        console.log("Data from MessagesChannel:", data);
        // this.messages.unshift(data); // update the messages in real time
        this.messageList = [...this.messageList, data];
      }
    });
  },
  methods: {
    sendMessage(text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1;
        this.onMessageWasSent({ author: "me", type: "text", data: { text } });
      }
    },
    onMessageWasSent(message) {
      // called when the user sends a message
      // this.messageList = [...this.messageList, message];
      console.log(this.messageList);
      var params = {
        body: message.data.text
      };

      axios.post("/api/messages", params).then(response => {
        console.log("Successfully sent message!!!");
        console.log(response.data);
        // post.messages.push(response.data);
        this.message = "";
      });

      // Make a web request to your backend
      // (send params of {body: message})
      // axios.post("/api/messages", params).then()
    },
    openChat() {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true;
      this.newMessagesCount = 0;
    },
    closeChat() {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false;
    }
  }
};
</script>
