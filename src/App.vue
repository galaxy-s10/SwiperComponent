<template>
  <div>
    <!-- <div class="container">
      <h2>移动端轮播图</h2>
      <div v-if="imgList.length>0">
        <Swiper :delay="delay" :duration="duration" :moveRatio="moveRatio">
          <swiper-item v-for="(item,index) in imgList" :key="index">
            <img :src="item.img" alt height="200" />
          </swiper-item>
        </Swiper>
      </div>
    </div>-->

    <div class="container">
      <h2>Pc端轮播图</h2>
      <div v-if="imgList.length>0">
        <Swiper :delay="delay" :duration="duration" :mode="mode">
          <swiper-item v-for="(item,index) in imgList" :key="index">
            <img :src="item.img" alt height="300" />
          </swiper-item>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script>
// 移动端轮播图
// import { Swiper, SwiperItem } from "./components/SwiperApp/index";

// Pc端轮播图
import { Swiper, SwiperItem } from "./components/Swiper/index";

export default {
  name: "App",
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      imgList: [],
      mode: "vertical", // 轮播模式，默认：horizontal，可选：vertical
      delay: 1500, // 轮播间隔，默认1000
      duration: 400, // 动画时长，默认300
      moveRatio: 0.2, // 触控比率，默认0.3
    };
  },
  created() {},
  mounted() {
    fetch("/api/article/page?type=前端&nowpage=2&pagesize=5")
      .then((response) => response.json())
      .then((data) => {
        this.imgList = data.pagelist.rows;
      })
      .catch((e) => console.log("Oops, error", e));
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  margin: 100px auto 0;
  box-shadow: 0 0 4px 1px rgba(232, 237, 250, 0.5);
  border: 1px solid #ebebeb;
  border-radius: 3px;
  padding: 20px;
  box-sizing: border-box;
}
</style>