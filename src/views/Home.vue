<template>
  <div>
    <div id="carouselExampleSlidesOnly" class="carousel slide mb-5" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="img/home_hero.png" class="d-block w-100" alt="hero1">
          <div class="carousel-caption d-block">
            <h2 class="text-white pb-md-5 mb-lg-5 pb-sm-3">舒適體驗的首選</h2>
            <div class="carousel-txt pt-3 pt-lg-5 mt-lg-5 d-flex flex-column justify-content-center align-items-center">
              <span class="bg-primary text-white rounded" @click.prevent="dropDown('porto')">開始探索</span>
              <i class="el-icon-caret-bottom text-primary"></i>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="img/home_hero2.jpeg" class="d-block w-100" alt="hero2">
          <div class="carousel-caption d-block">
            <h2 class="text-dark pb-5 mb-lg-5">舒適體驗的首選</h2>
            <div class="carousel-txt pt-3 pt-lg-5 mt-lg-5 d-flex flex-column justify-content-center align-items-center">
              <span class="bg-primary text-white rounded" @click.prevent="dropDown('porto')">開始探索</span>
              <i class="el-icon-caret-bottom text-primary"></i>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="img/home_hero3.jpeg" class="d-block w-100" alt="hero3">
          <div class="carousel-caption d-block">
            <h2 class="text-dark pb-5 mb-lg-5">舒適體驗的首選</h2>
            <div class="carousel-txt pt-3 pt-lg-5 mt-lg-5 d-flex flex-column justify-content-center align-items-center">
              <span class="bg-primary text-white rounded" @click.prevent="dropDown('porto')">開始探索</span>
              <i class="el-icon-caret-bottom text-primary"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ShopList ref="porto"/>
  </div>
</template>

<script>
import ShopList from '../components/ShopList'

export default {
  components: { ShopList },
  methods: {
    dropDown (refName) {
      // scroll 錨點
      var element = this.$refs[refName].$el
      var top = element.offsetTop
      window.scrollTo(0, top)
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel-inner{
  max-height: 768px;
}
.carousel-inner .carousel-caption{
  top: 40%;
  @media (max-width: 768px) {
    top: 30%;
  }
  h2{
    font-size: 56px;
    text-shadow: 1px 1px 0 black;
    @media (max-width: 768px) {
      font-size: 46px;
    }
    @media (max-width: 600px) {
      font-size: 36px;
    }
    @media (max-width: 414px) {
      font-size: 26px;
    }
  }
}
.carousel-txt{
  i{
    font-size: 30px;
  }
  span{
    width: 30%;
    font-size: 24px;
    padding: 8px 40px;
    box-shadow: 0 0 1px #fff;
    cursor: pointer;
    @media (max-width: 850px) {
      width: 40%;
    }
    @media (max-width: 768px) {
      font-size: 20px;
      padding: 8px 20px;
    }
    @media (max-width: 600px) {
      font-size: 16px;
    }
    @media (max-width: 414px) {
      width: 45%;
      font-size: 14px;
    }
  }
}
</style>
