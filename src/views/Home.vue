<template>
  <div class="home_wrapper">
    
    <div class="menu_and_search_and_notification">
      <router-link class="link_to_menu" to="/Menu">
        <div class="hambuger_menu">
          <i class="las la-bars"></i>
        </div>
      </router-link>

      <div class="search_and_notification">
        <div class="search_icon">
          <i class="las la-search"></i>
        </div>

        <div class="notification_icon" @click="toggle_notification">
          <i class="notification_on las la-bell" v-if="notification"></i>
          <i class="notification_off las la-bell-slash" v-if="!notification"></i>
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

    <div class="sections today_task">
      <div class="section_titles">TODAY'S TASKS</div>

      <div class="task_boxes">
        <TaskBox v-for="todo in todos" :key="todo._id" 
          :todo=todo :edit_done_show_todo=edit_done_show_todo
          @deleted_one_task="get_all_todos_from_the_server"
          @need_to_open_edit_todo_modal="toggle_show_edit_todo_modal(todo)"
          @try_to_open_action_buttons_box="show_action_buttons_box">{{ todo.name }}</TaskBox>
      </div>
    </div>
    
    <router-link to="/CreateTodo"> 
      <div class="add_new_todo_button">
        <i class="las la-plus"></i>
      </div>
    </router-link>
  </div>

  <EditTodo v-if="show_edit_todo_modal" :todo="target_todo_to_edit"
    @close_edit_todo_modal="edit_todo_done"
    @updated_todo="saved_new_todo_edit"></EditTodo>
</template>

<script>
import TaskBox  from "../components/TaskBox.vue"
import EditTodo from "../components/EditTodo.vue"

export default {
  components: {
    TaskBox,
    EditTodo
  },
  data() {
    return {
      url: "http://localhost:8080",

      todos: [],

      notification: true,

      show_edit_todo_modal: false,

      target_todo_to_edit: "",

      edit_done_show_todo: false
    }
  },
  created() {
    this.get_all_todos_from_the_server();
  },
  methods: {
    get_all_todos_from_the_server() {
        fetch(`${this.url}/todo`).then((response) => {
            response.json().then((data) => {
                this.todos = data;
            })
        })
    },
    toggle_notification() {
      this.notification = ! this.notification;
    },
    toggle_show_edit_todo_modal(todo) {
      this.show_edit_todo_modal = true;
      this.target_todo_to_edit = todo;
    },
    edit_todo_done() {
      this.show_edit_todo_modal = false;
      this.edit_done_show_todo  = true;
    },
    show_action_buttons_box() {
      this.edit_done_show_todo  = false;
    },
    saved_new_todo_edit() {
      this.get_all_todos_from_the_server();
      this.show_edit_todo_modal = false;
      this.edit_done_show_todo  = true;
    }
  }
  
}
</script>

<style scoped>
  .home_wrapper {
    padding: 30px 25px;
    height: 100vh;
    background-color: var(--lt-white);
    overflow: hidden;
    overflow-y: scroll;
  }
  .menu_and_search_and_notification {
    display: grid;
    grid-template-columns: 4.5fr 1fr;
    font-size: 25px;
    color: var(--lt-grey);
  }
  .link_to_menu:visited {
    color: var(--lt-grey);
  }
  .search_and_notification {
    display: flex;
    justify-content: space-between;
  }
  .search_icon {
    transform: scaleX(-1);
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
  .today_task {
    margin-bottom: -9px;
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
    background-color: white;
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