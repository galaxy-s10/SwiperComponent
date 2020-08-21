<template>
  <div class="panels-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SwiperItem",
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
};
</script>

<style scoped>
.panels-item {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.panels-item img {
  width: 100%;
  height: 100%;
}
</style>