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
    background-color: var(--lt-navy);
    margin-bottom: 10px;
    height: 10px;
}

.line_1 {
    width : 10px;
    animation: fade_in_1 0.3s ease;
    animation-fill-mode: forwards;
}

@keyframes fade_in_1 {
    0% {
      opacity: 0;
      width: 0;
    }
    100% {
      opacity: 1;
      width: 10px;
      background-color: var(--lt-blue);
      box-shadow: -13px 0px 13px -3px var(--lt-blue);
    }
}

.line_2 {
    width : 30px;
    animation-name: fade_in_2;
    animation-duration: 0.3s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
}

@keyframes fade_in_2 {
    0% {
      opacity: 0;
      width: 0;
    }
    100% {
      opacity: 1;
      width: 30px;
      background-color: var(--lt-blue);
      box-shadow: -13px 0px 13px -3px var(--lt-blue);
    }
}

.line_3 {
    width : 50px;
    animation-name: fade_in_3;
    animation-duration: 0.3s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
}

@keyframes fade_in_3 {
    0% {
      opacity: 0;
      width: 0;
    }
    100% {
      opacity: 1;
      width: 50px;
      background-color: var(--lt-blue);
      box-shadow: -13px 0px 13px -3px var(--lt-blue);
    }
}

.line_4 {
    width : 20px;
    animation-name: fade_in_4;
    animation-duration: 0.3s;
    animation-delay: 0.3s;
    animation-fill-mode: forwards;
}

@keyframes fade_in_4 {
    0% {
      opacity: 0;
      width: 0;
    }
    100% {
      opacity: 1;
      width: 20px;
      background-color: var(--lt-blue);
      box-shadow: -13px 0px 13px -3px var(--lt-blue);
    }
}

.line_5 {
    width : 30px;
    animation-name: fade_in_5;
    animation-duration: 0.3s;
    animation-delay: 0.4s;
    animation-fill-mode: forwards;
}

@keyframes fade_in_5 {
    0% {
      opacity: 0;
      width: 0;
    }
    100% {
      opacity: 1;
      width: 30px;
      background-color: var(--lt-blue);
      box-shadow: -13px 0px 13px -3px var(--lt-blue);
    }
}

.line_6 {
    width : 40px;
    animation-name: fade_in_6;
    animation-duration: 0.3s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
}

@keyframes fade_in_6 {
    0% {
      opacity: 0;
      width: 0;
    }
    100% {
      opacity: 1;
      width: 40px;
      background-color: var(--lt-blue);
      box-shadow: -13px 0px 13px -3px var(--lt-blue);
    }
}

.line_7 {
    width : 50px;
    animation-name: fade_in_7;
    animation-duration: 0.3s;
    animation-delay: 0.6s;
    animation-fill-mode: forwards;
}

@keyframes fade_in_7 {
    0% {
      opacity: 0;
      width: 0;
    }
    100% {
      opacity: 1;
      width: 50px;
      background-color: var(--lt-blue);
      box-shadow: -13px 0px 13px -3px var(--lt-blue);
    }
}

.line_8 {
    width : 60px;
    animation-name: fade_in_8;
    animation-duration: 0.3s;
    animation-delay: 0.7s;
    animation-fill-mode: forwards;
}

@keyframes fade_in_8 {
    0% {
      opacity: 0;
      width: 0;
    }
    100% {
      opacity: 1;
      width: 60px;
      background-color: var(--lt-blue);
      box-shadow: -13px 0px 13px -3px var(--lt-blue);
    }
}

.line_9 {
    width : 30px;
    animation-name: fade_in_9;
    animation-duration: 0.3s;
    animation-delay: 0.8s;
    animation-fill-mode: forwards;
}

@keyframes fade_in_9 {
    0% {
      opacity: 0;
      width: 0;
    }
    100% {
      opacity: 1;
      width: 30px;
      background-color: var(--lt-blue);
      box-shadow: -13px 0px 13px -3px var(--lt-blue);
    }
}

.line_10 {
    width : 50px;
    animation-name: fade_in_10;
    animation-duration: 0.3s;
    animation-delay: 0.9s;
    animation-fill-mode: forwards;
}

@keyframes fade_in_10 {
    0% {
      opacity: 0;
      width: 0;
    }
    100% {
      opacity: 1;
      width: 50px;
      background-color: var(--lt-blue);
      box-shadow: -13px 0px 13px -3px var(--lt-blue);
    }
}

.line_11 {
    width : 30px;
    animation-name: fade_in_11;
    animation-duration: 0.3s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
}

@keyframes fade_in_11 {
    0% {
      opacity: 0;
      width: 0;
    }
    100% {
      opacity: 1;
      width: 30px;
      background-color: var(--lt-blue);
      box-shadow: -13px 0px 13px -3px var(--lt-blue);
    }
}
.line_12 {
    width : 50px;
    animation-name: fade_in_12;
    animation-duration: 0.3s;
    animation-delay: 1.1s;
    animation-fill-mode: forwards;
}

@keyframes fade_in_12 {
    0% {
      opacity: 0;
      width: 0;
    }
    100% {
      opacity: 1;
      width: 50px;
      background-color: var(--lt-blue);
      box-shadow: -13px 0px 13px -3px var(--lt-blue);
    }
}

.line_13 {
    width : 30px;
    animation-name: fade_in_13;
    animation-duration: 0.3s;
    animation-delay: 1.2s;
    animation-fill-mode: forwards;
}

@keyframes fade_in_13 {
    0% {
      opacity: 0;
      width: 0;
    }
    100% {
      opacity: 1;
      width: 30px;
      background-color: var(--lt-blue);
      box-shadow: -13px 0px 13px -3px var(--lt-blue);
    }
}

.status_comments {
    margin: 25px 0 0;
}

@keyframes fade_in {
    0% {opacity: 0;}
    100% {opacity: 1;}
}

.general_comment {
  color: var(--lt-grey);
}

.detail_comment {
    font-size: 22px;
    margin-top: 15px;
}
</style>