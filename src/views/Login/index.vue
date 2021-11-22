<template>
  <!--  -->
  <div class="login">
    <div class="login-bg"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  position: relative;

  .login-bg {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: -1;
    background: url("../../assets/images/bg.jpg");
    background-size: cover;
    filter: blur(10px);
  }
}
</style>
