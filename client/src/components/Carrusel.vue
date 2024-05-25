<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide
      ><div class="slide">
        <img src="../assets/images/carrousel1.jpg" alt="" />
      </div>
    </swiper-slide>
    <swiper-slide
      ><div class="slide">
        <img src="../assets/images/carousel2.jpg" alt="" />
      </div>
    </swiper-slide>
    <swiper-slide
      ><div class="slide">
        <img src="../assets/images/carousel3.jpg" alt="" />
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style>
.slide {
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 84px);
}
.slide img {
  height: 100%;
  width: 500px;
}
</style>