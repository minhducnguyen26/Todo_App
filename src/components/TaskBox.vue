<template>
  <div class="task_box_wrapper">
      <div class="check_box">
          <i class="check_mark las la-check"></i>
      </div>
      
      <div class="task_name"><slot></slot></div>
  </div>
</template>

<script>
export default {
    props: {
        todo: Object
    },
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
</style>