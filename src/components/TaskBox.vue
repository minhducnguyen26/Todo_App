<template>
    <div class="task_box_wrapper" v-if="!show_action_buttons_box || edit_done_show_todo"
        :class="{ task_box_wrapper_done: todo.done }">

        <div class="check_box" @click="toggle_todo_status"
            :class="{ check_box_done: todo.done }">
            <i class="check_mark las la-check"></i>
        </div>
        
        <div class="task_name" :class="{ task_name_done: todo.done }"><slot></slot></div>

        <div class="edit_icon"  @click="open_action_buttons_box">
            <i class="las la-edit"></i>
        </div>
    </div>

    <div class="action_buttons_wrapper" v-else>
        <div class="action_buttons">
            
            <div class="single_button edit_task"
                @click="edit_todo">Edit</div>

            <div class="single_button delete_task"
                @click="delete_todo">Delete</div>

            <div class="single_button cancel_changes"
                @click="close_action_buttons_box">Cancel</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        todo: Object,
        edit_done_show_todo: Boolean
    },
    data() {
        return {
            url: "http://localhost:8080",
            show_action_buttons_box: false
        }
    },
    methods: {
        open_action_buttons_box() {
            this.show_action_buttons_box = true;
            this.$emit("try_to_open_action_buttons_box");
        },
        close_action_buttons_box() {
            this.show_action_buttons_box = false;
        },
        delete_todo() {
            let todo_id = this.todo._id;
            fetch(`${this.url}/todo/` + todo_id, {
                method: "DELETE",
                headers: {"Content-Type": "application/json"}
            }).then((response) => {
                this.$emit("deleted_one_task");
            })
        },
        edit_todo() {
            this.$emit("need_to_open_edit_todo_modal");
        },
        toggle_todo_status(){
            this.todo.done = !this.todo.done;

            fetch(`${this.url}/todo/`+ this.todo._id,{
                method:"PATCH",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify( { done: this.todo.done } )
            });
        },
    }
}
</script>

<style scoped>
.task_box_wrapper {
    border-radius: 25px;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 6fr 1fr;
    background-color: white;
    margin-bottom: 10px;
}

.task_box_wrapper_done {
    background-color: var(--lt-grey-light);
}

.check_box {
    border: 2px solid var(--lt-purple-neon);
    border-radius: 50%;
    text-align: center;
    padding: 3px 0;
    margin-right: 19px;
    font-size: 10px;
    margin-top: auto;
    margin-bottom: auto;
}

.check_box_done {
    border: 2px solid var(--lt-blue-light);
    background-color: var(--lt-blue-light);
}

.check_mark {
    color: white;
}

.task_name {
    display: flex;
    align-items: center;
    font-size: 17px;
}

.task_name_done {
    text-decoration: line-through;
}

.edit_icon {
    font-size: 22px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: var(--lt-grey);
}

.action_buttons_wrapper {
    border-radius: 25px;
    padding: 20px;
    margin-bottom: 10px;
}

.action_buttons {
    display: flex;
    justify-content: space-between;
    color: var(--lt-black);
}

.single_button {
    border: 1px solid var(--lt-grey);
    border-radius: 25px;
    padding: 6px 20px;
}

.edit_task {
    background-color: var(--lt-blue);
    border: 1px solid var(--lt-blue);
    color: white;
}

.delete_task {
    background-color: var(--lt-red);
    border: 1px solid var(--lt-red);
    color: white;
}
</style>