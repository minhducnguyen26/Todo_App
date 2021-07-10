<template>
    <div class="create_todo_page_wrapper">
        <div class="top">
            <router-link to="/">
                <div class="close_button">
                    <i class="las la-times"></i>
                </div>
            </router-link>
        </div>

        <div class="middle">
            <div class="input_section">
                <div class="input_todo_name">
                    <input type="text" placeholder="Enter new task">
                </div>

                <div class="input_todo_description">
                    <input type="text" placeholder="Enter description">
                </div>
            </div>

            <div class="deadline_and_category_options_section">
                <div class="date_option">
                    <div class="date_placeholder">
                        <div class="date">{{ today }}</div>
                        <div class="calendar_icon">
                            <i class="las la-calendar"></i>
                        </div>
                    </div>
                    <input type="date" v-model="today">
                </div>

                <div class="category_options">
                    <div class="school">
                        <div class="circle">
                            <div class="center"></div>
                        </div>
                    </div>
                    <div class="personal">
                        <div class="circle">
                            <div class="center"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="other_options_section">
                <div class="thumbtrack_icon">
                    <i class="las la-thumbtack"></i>
                </div>

                <div class="note_icon">
                    <i class="las la-sticky-note"></i>
                </div>

                <div class="mute_icon">
                    <i class="las la-volume-mute"></i>
                </div>
            </div>
        </div>

        <div class="bottom">
            <div class="create_new_todo_button">
                <p>Add task</p>
                <div class="arrow_right_icon">
                    <i class="las la-angle-right"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            today : (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
        }
    }
}
</script>

<style scoped>
    .create_todo_page_wrapper {
        display: grid;
        grid-template-rows: 2fr 5fr 2fr;
        height: 100vh;
        padding: 50px 30px;
        background-color: var(--lt-white);
    }
    .top {
        display: flex;
        justify-content: flex-end;
        height: 50px;
    }
    .close_button {
        border: 2px solid var(--lt-grey-light);
        color: var(--lt-purple-neon);
        font-size: 22px;
        padding: 10px 12px;
        border-radius: 50%;
    }
    .middle {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 25px 0;
    }
    input {
        background-color: var(--lt-white);
        border: 1px solid var(--lt-white);
        color: var(--lt-black);
        font-size: 25px;
        padding: 10px;
        width: 100%;
        outline: none;
    }
    .input_todo_name {
        margin-bottom: 15px;
    }
    .date_option {
        border: 2px solid var(--lt-grey-light);
        border-radius: 25px;
        padding: 10px;
        width: 55%;
    }
    .date_placeholder {
        border: 1px solid var(--lt-white);
        color: var(--lt-grey-dark);
        border-radius: 25px;
        font-size: 18px;
        display: flex;
        align-items: center;
        position: fixed;
        top: 53.2%;
        left: 12%;
    }
    .calendar_icon {
        font-size: 30px;
        margin-left: 30px;
    }
    .date_option > input,
    input[type="date"]::-webkit-calendar-picker-indicator {
        opacity: 0;
        font-size: 5px;
    }
    .deadline_and_category_options_section {
        display: flex;
    }
    .category_options {
        display: flex;
        align-items: center;
        margin-left: 30px;
    }
    .school, .personal {
        border: 2px solid var(--lt-grey-light);
        padding: 10px;
        border-radius: 50%;
        margin-left: 15px;
    }
    .circle {
        border: 2px solid;
        border-radius: 50%;
    }
    .school > .circle {
        border-color: var(--lt-purple-neon);
    }
    .personal > .circle {
        border-color: var(--lt-blue);
    }
    .center {
        height: 15px;
        width: 15px;
        border-radius: 50%;
        margin: 3px;
    }
    .school > .circle > .center {
        background-color: var(--lt-purple-neon);
    }
    .personal > .circle > .center {
        background-color: var(--lt-blue);
    }
    .other_options_section {
        display: flex;
        justify-content: space-between;
        width: 160px;
        font-size: 28px;
        margin: 0 auto;
        color: var(--lt-grey-dark);;
    }
    .bottom {
        display: flex;
        justify-content: flex-end;
        height: 50px;
        align-self: flex-end;
    }
    .create_new_todo_button {
        background-color: var(--lt-blue);
        color: white;
        border-radius: 25px;
        padding: 25px 40px;
        display: flex;
        align-items: center;
        box-shadow: 0px 4px 20px -4px var(--lt-blue);
    }
</style>