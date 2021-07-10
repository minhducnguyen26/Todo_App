<template>
  <div class="menu_page_wrapper">
    <div class="menu_infos_and_back_button">
      <div class="menu_infos">
        <div class="user_avatar">
          <img class="avatar_image" src="../assets/my_avatar.jpg" alt="User's avatar">
        </div>

        <div class="user_name">Minh Nguyen</div> 

        <div class="menu_options">
          <div class="single_option">
            <div class="option_icon">
              <i class="las la-bookmark"></i>
            </div>
            <div class="option_title">Templates</div>
          </div>

          <div class="single_option">
            <div class="option_icon">
              <i class="las la-tags"></i>
            </div>
            <div class="option_title">Categories</div>
          </div>

          <div class="single_option">
            <div class="option_icon">
              <i class="las la-chart-pie"></i>
            </div>
            <div class="option_title">Analytics</div>
          </div>

          <div class="single_option">
            <div class="option_icon">
              <i class="las la-cog"></i>
            </div>
            <div class="option_title">Settings</div>
          </div>
        </div>
      </div>

      <router-link class="link_to_home" to="/">
        <div class="back_button">
          <i class="las la-angle-left"></i>
        </div>
      </router-link>
    </div>

    <div class="analytic_and_status_comments">
      <div class="analytic_lines">
        <div class="line line_1"></div>
        <div class="line line_2"></div>
        <div class="line line_3"></div>
        <div class="line line_4"></div>
        <div class="line line_5"></div>
        <div class="line line_6"></div>
        <div class="line line_7"></div>
        <div class="line line_8"></div>
        <div class="line line_9"></div>
        <div class="line line_10"></div>
        <div class="line line_11"></div>
        <div class="line line_12"></div>
        <div class="line line_13"></div>
      </div>
      
      <div class="status_comments">
        <div class="general_comment">Good</div>
        <div class="detail_comment">Consistency</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scooped>
.menu_page_wrapper {
    background-color: var(--lt-navy);
    color: white;
    padding: 50px 40px 30px 50px;
    height: 100vh;
}

.menu_infos_and_back_button {
    display: grid;
    grid-template-columns: 3fr 1fr;
}

.back_button {
    border: 1px solid var(--lt-grey);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    width: 45px;
    font-size: 19px;
    margin: 0 auto;
}

.link_to_home:visited {
    color: white;
}

a:-webkit-any-link {
    text-decoration: none;
}

.user_avatar {
    border: 3px solid var(--lt-grey);
    border-radius: 50%;
    padding: 8px;
    width: 101px;
    height: 101px;
}

.avatar_image {
    height: 80px;
    width: 80px;
    border-radius: 50%;
}

.user_name {
    font-size: 40px;
    margin: 35px 0;
    font-weight: 700;
}

.menu_options {
  margin-left: 30px;
}

.single_option {
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin-bottom: 20px;
    font-size: 19px;
    font-weight: lighter;
}

.option_icon > i {
    font-size: 25px;
    color: var(--lt-grey);
}

.analytic_and_status_comments {
    margin-left: 27px;
    margin-top: 35px;
}

.analytic_lines {
    transform: rotate(-90deg);
    width: 100px;
    height: 100px;
}

.line {
    background-color: var(--lt-blue);
    margin-bottom: 10px;
    height: 10px;
    box-shadow: -13px 0px 13px -3px var(--lt-blue);
}

.line_1 {
    width : 10px;
}

.line_2 {
    width : 30px;
}

.line_3 {
    width : 50px;
}

.line_4 {
    width : 20px;
}

.line_5 {
    width : 30px;
}

.line_6 {
    width : 40px;
}

.line_7 {
    width : 50px;
}

.line_8 {
    width : 60px;
}

.line_9 {
    width : 30px;
}

.line_10 {
    width : 50px;
}

.line_11 {
    width : 30px;
}

.line_12 {
    width : 50px;
}

.line_13 {
    width : 30px;
}

.status_comments {
    margin: 25px 0 0;
}

.general_comment {
  color: var(--lt-grey);
}

.detail_comment {
    font-size: 22px;
    margin-top: 15px;
}
</style>