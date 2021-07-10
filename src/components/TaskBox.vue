<template>
    <div class="task_box_wrapper" v-if="!show_action_buttons_box || edit_done_show_todo"
        @click="open_action_buttons_box">
        <div class="check_box">
            <i class="check_mark las la-check"></i>
        </div>
        
        <div class="task_name"><slot></slot></div>
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
        }
    }
}
</script>

<style scoped>
.task_box_wrapper {
    border-radius: 25px;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 7fr;
    background-color: white;
    margin-bottom: 10px;
}

.check_box {
    border: 2px solid var(--lt-purple-neon);
    border-radius: 50%;
    text-align: center;
    padding: 3px 0;
    margin-right: 19px;
    font-size: 10px;
}

.check_mark {
    color: white;
}

.task_name {
    display: flex;
    align-items: center;
    font-size: 17px;
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
    background-color: var(--lt-purple-neon);
    border: 1px solid var(--lt-purple-neon);
    color: white;
}
</style>