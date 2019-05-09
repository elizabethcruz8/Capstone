<div id="respond" class="comment-respond">
              <h3 id="reply-title" class="comment-reply-title">Write a comment</h3>
              <form v-on:submit.prevent="createComment(post, index)">
                <div class="form-group comment-form-author">
                  <label for="author">Name<span class="required">*</span></label>
                  <input class="form-control" id="author" name="author" type="text" value="" />
                </div>
                <div class="form-group comment-form-email">
                  <label for="email">Email<span class="required">*</span></label>
                  <input class="form-control" id="email" name="email" type="email" value="" />
                </div>
                <div class="form-group comment-form-comment">
                  <label for="comment">Comment<span class="required">*</span></label>
                  <textarea class="form-control" id="comment" name="comment" aria-required="true"></textarea>
                </div>
                <button class="btn btn-primary" type="submit">Submit</button>
              </form>
            </div>

<!--   <h1>{{ user.first_name }} {{ user.last_name }} Posts</h1>
  <img v-bind:src="user.image" />
  >
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
    <form v-on:submit.prevent="createComment()">
          Comment:
          <input type="text" v-model="newCommentText[index]" />
          <input type="submit" value="Create" />
        </form> -->
<!-- want to "create" a comment on this user's post here -->
<!--     </div>
  </div>

  <h1>{{ user.first_name }} {{ user.last_name }} Hobbies</h1>
  <div v-for="hobby in user.hobbies">
    <router-link v-bind:to="`/hobbies/${hobby.id}`">
      <p>{{ hobby.name }}</p></router-link

  </div>  -->
