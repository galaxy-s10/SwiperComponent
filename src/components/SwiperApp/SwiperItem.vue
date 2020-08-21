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
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 10;
}
.panels-item img {
  width: 100%;
}
</style>