<!--
 * @Date: 2021-04-09 11:06:25
 * @Author: wwm
 * @LastEditTime: 2021-11-22 12:54:13
 * @LastEditors: wwm
 * @Description: ...
-->
<template>
  <div class="index" ref="index">index</div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100%;

  .content {
    width: 100%;
    height: 100%;
    display: flex;

    .content-left {
      width: 20%;
      height: 100%;
      overflow-y: auto;
      background: #eee;

      .content-left-item {
        width: 100%;
        background: #ccc;
        padding: 10px 0;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        border-bottom: 1px solid #eee;

        span {
          &:hover {
            color: #fff;
          }
        }

        .content-left-item-icon {
          position: absolute;
          right: 0;
          top: 0;
          width: 20px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          background: red;
          border-radius: 50%;
        }
      }
    }

    .content-right {
      width: 80%;
      height: 100%;
      background: #ccc;
      overflow-y: auto;

      .content-right-item {
        width: 100%;
        background: #eee;
        padding: 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          color: red;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
