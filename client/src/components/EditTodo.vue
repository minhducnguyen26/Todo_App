<template>
    <div class="background">
        <div class="edit_todo_wrapper">
            <div class="todo_infos">
                <div class="single_info">
                    <div class="title">Name:</div>
                    <input class="text_input" type="text" :placeholder="todo.name"
                        v-model="edited_todo_name">
                </div>

                <div class="single_info">
                    <div class="title">Description:</div>
                    <input class="text_input" type="text" :placeholder="todo.description"
                        v-model="edited_todo_description">
                </div>

                <div class="single_info">
                    <div class="title">Deadline:</div>
                    <input class="text_input" type="text" :placeholder="formatted_deadline"
                        v-model="edited_todo_deadline">
                </div>
            </div>

            <div class="action_buttons">
                <div class="single_button save"
                    @click="edit_todo">Save</div>
                <div class="single_button cancel"
                    @click="close_edit_todo_modal">Cancel</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        todo: Object
    },
    data() {
        return {
            url: "http://localhost:8080",

            formatted_deadline: "",

            edited_todo_name       : "",
            edited_todo_description: "",
            edited_todo_deadline   : ""
        }
    },
    created() {
        this.change_date_format();
    },
    methods: {
        change_date_format() {
            let raw_deadline = new Date(this.todo.deadline); 
            let month = raw_deadline.getUTCMonth() + 1;
            let date  = raw_deadline.getUTCDate();
            let year  = raw_deadline.getUTCFullYear();

            this.formatted_deadline = month + "/" + date + "/" + year;
        },
        close_edit_todo_modal() {
            this.$emit("close_edit_todo_modal");
        },
        edit_todo() {
            var updated_body = {
                name       : this.edited_todo_name,
                description: this.edited_todo_description,
                deadline   : this.edited_todo_deadline,
                done       : this.todo.done
            };
            fetch(`${this.url}/todo/`+ this.todo._id, {
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(updated_body)
            }).then((response) => {
                if(response.status == 400) {
                    response.json().then((data) => {
                        alert(data.msg)
                    })
                } else if(response.status == 200) {
                    this.edited_todo_name        = "";
                    this.edited_todo_description = "";
                    this.edited_todo_deadline    = "";

                    this.$emit("updated_todo");
                }
            });
        }
    }
}
</script>

<style scoped>
.background {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(10, 21, 90, 0.3);
    padding-top: 35%;
}

.edit_todo_wrapper {
    background-color: var(--lt-white);
    margin: auto;
    border: 1px solid var(--lt-grey-dark);
    border-radius: 25px;
    width: 85%;
    height: 66%;
    padding: 30px;
}

.title {
    color: var(--lt-grey-dark);
    font-size: 20px;
    font-weight: 700;
}

.text_input {
    padding: 10px 0;
    font-size: 17px;
    margin: 10px 0 15px;
    width: 100%;
    background-color: var(--lt-white);
    color: var(--lt-black);
    border: none;
}

.action_buttons {
    display: flex;
    justify-content: space-evenly;
    margin-top: 30px;
}

.action_buttons {
    display: flex;
    justify-content: space-evenly;
    margin-top: 10px;
}

.single_button {
    padding: 10px 20px;
    border: 1px solid var(--lt-grey);
    color: var(--black);
    border-radius: 25px;
}

.save {
    background-color: var(--lt-blue);
    border: 1px solid var(--lt-blue);
    color: white;
}
</style>