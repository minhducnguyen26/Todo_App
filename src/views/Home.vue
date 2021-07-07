<template>
  <div class="main_wrapper">
    
    <div class="menu_and_search_and_notification">
      <div class="hambuger_menu">
        <i class="las la-bars"></i>
      </div>

      <div class="search_and_notification">
        <div class="search_icon">
          <i class="las la-search"></i>
        </div>

        <div class="notification_icon">
          <i class="las la-bell"></i>
        </div>
      </div>
    
    </div>

    <div class="greeting">What's up, Minh!</div>

    <div class="sections">
      <div class="section_titles">CATEGORIES</div>

      <div class="categoriy_boxes">
        <div class="category_box">
          <div class="task_amount">40 tasks</div>
          <div class="category_name">School</div>
          <div class="progress_lines">
            <div class="progress_amount_1"></div>
            <div class="cursor_1"></div>
          </div>
        </div>

        <div class="category_box">
          <div class="task_amount">20 tasks</div>
          <div class="category_name">Personal</div>
          <div class="progress_lines">
            <div class="progress_amount_2"></div>
            <div class="cursor_2"></div>
          </div>
        </div>
      </div>

    </div>

    <div class="sections">
      <div class="section_titles">TODAY'S TASKS</div>

      <div class="task_boxes">
        <TaskBox></TaskBox>
      </div>
    </div>
    
    <router-link to="/Menu"> 
      <div class="add_new_todo_button">
        <i class="las la-plus"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
import TaskBox from "../components/TaskBox.vue"

export default {
  components: {
    TaskBox
  }
}
</script>

<style scoped>
  .main_wrapper {
    padding: 30px 25px;
    border: 1px solid var(--lt-grey);
    border-radius: 50px;
    height: 100vh;
  }
  .menu_and_search_and_notification {
    display: grid;
    grid-template-columns: 4.5fr 1fr;
    font-size: 25px;
    color: var(--lt-grey);
  }
  .search_and_notification {
    display: flex;
    justify-content: space-between;
  }
  .search_icon {
    transform: rotateY(0);
  }
  .greeting {
    font-size: 30px;
    margin: 25px 0;
    font-weight: 700;
    color: var(--lt-grey-dark);
  }
  .sections {
    margin-bottom: 40px;
  }
  .section_titles {
    font-size: 11px;
    margin-bottom: 15px;
    color: var(--lt-grey);
  }
  .categoriy_boxes {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .category_box {
    padding: 20px 10px;
    border-radius: 20px;
    box-shadow: 3px 5px 10px var(--lt-grey-light);
  }
  .task_amount {
    font-size: 11px;
    color: var(--lt-grey);
  }
  .category_name {
    font-size: 20px;
    margin: 10px 0 15px;
    font-weight: 700;
    color: var(--lt-grey-dark);
  }
  .progress_lines {
    background-color: var(--lt-grey-light);
    height: 3px;
    display: flex;
  }
  .progress_amount_1 {
    height: 3px;
    width: 60%;
    background-color: var(--lt-purple-neon);
    box-shadow: 1px 3px 6px -1px var(--lt-purple-neon);
  }
  .cursor_1 {
    height: 5px;
    width: 3px;
    background-color: var(--lt-purple-neon);
    transform: translateY(-2px);
  }
  .progress_amount_2 {
    height: 3px;
    width: 40%;
    background-color: var(--lt-blue);
    box-shadow: 1px 3px 6px -1px var(--lt-blue);
  }
  .cursor_2 {
    height: 5px;
    width: 3px;
    background-color: var(--lt-blue);
    transform: translateY(-2px);
  }
  .add_new_todo_button {
    position: fixed;
    bottom: 40px;
    right: 30px;
    padding: 14px 16px;
    border-radius: 50%;
    font-size: 25px;
    color: white;
    background-color: var(--lt-blue);
    box-shadow: 0px 5px 13px -3px var(--lt-blue);
  }
</style>