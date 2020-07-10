<template>
  <div class="col-12 col-lg-8 d-flex flex-column flex-sm-row">
    <div class="information">
      <h3 class="mb-5">{{singleData.name}}</h3>
      <h6 class="pb-2 pt-2 border-bottom border-light">客房資訊</h6>
      <div class="mt-4">
        <div>
          <h6>描述</h6>
          <p>{{singleData.description}}</p>
        </div>
        <div class="mt-4">
          <h6>入住資訊</h6>
          <p>Check-in <span class="ml-2">{{singleData.checkInAndOut.checkInEarly}} ~ {{singleData.checkInAndOut.checkInLate}}</span></p>
          <p>Check-out <span class="ml-2">{{singleData.checkInAndOut.checkOut}}</span> 前</p>
          <p>人數限制 <span class="ml-2">{{singleData.descriptionShort.GuestMax}}</span> 人</p>
          <p>客房大小 <span class="ml-2">{{singleData.descriptionShort.Footage}}</span> 平方公尺</p>
        </div>
        <div class="mt-4">
          <h6>客房設備</h6>
          <ul class="bg-light room-features">
            <li :style="{ opacity: isFeature(features['Wi-Fi']) }"><img class="room-features__icon" src="img/wifi.svg" />Wi-Fi</li>
            <li :style="{ opacity: isFeature(features['Television']) }"><img class="room-features__icon" src="img/tv-solid.svg" />電視</li>
            <li :style="{ opacity: isFeature(features['Great-View']) }"><img class="room-features__icon" src="img/mountain-range.svg" />漂亮的視野</li>
            <li :style="{ opacity: isFeature(features['Breakfast']) }"><img class="room-features__icon" src="img/breakfast.svg" />早餐</li>
            <li :style="{ opacity: isFeature(features['Air-Conditioner']) }"><img class="room-features__icon" src="img/breeze.svg" />空調</li>
            <li :style="{ opacity: isFeature(features['Smoke-Free']) }"><img class="room-features__icon" src="img/no-smoke-symbol.svg" />禁止吸煙</li>
            <li :style="{ opacity: isFeature(features['Mini-Bar']) }"><img class="room-features__icon" src="img/bar.svg" />Mini Bar</li>
            <li :style="{ opacity: isFeature(features['Refrigerator']) }"><img class="room-features__icon" src="img/refrigerator.svg" />冰箱</li>
            <li :style="{ opacity: isFeature(features['Child-Friendly']) }"><img class="room-features__icon" src="img/crawling-baby-silhouette.svg" />適合兒童</li>
            <li :style="{ opacity: isFeature(features['Room-Service']) }"><img class="room-features__icon" src="img/room_service.svg" />Room Service</li>
            <li :style="{ opacity: isFeature(features['Sofa.']) }"><img class="room-features__icon" src="img/couch-solid.svg" />沙發</li>
            <li :style="{ opacity: isFeature(features['Pet-Friendly']) }"><img class="room-features__icon" src="img/dog.svg" />寵物攜帶</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="priceArea text-right pr-sm-5">
      <h3>＄{{singleData.normalDayPrice}}</h3>
      <p class="mb-1">平日(ㄧ～四)</p>
      <h6>＄{{singleData.holidayPrice}}</h6>
      <p class="mb-1">假日(五～日)</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['singleData'],
  computed: {
    features () {
      return this.singleData.amenities
    }
  },
  methods: {
    isFeature (feature) {
      return feature ? 1 : 0.2
    }
  }
}
</script>

<style lang="scss" scope>
.information{
  width: 75%;
  @media (max-width: 576px) {
    width: 100%;
  }
  p{
    font-size: 14px;
    color: #707070;
    margin-bottom: 0.25rem;
  }
}
.room-features {
  padding: 1.2rem 1.2rem 0rem;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  li {
    flex: 0 0 33.333%;
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 300;
    padding-bottom: 28px;
    padding-left: 10px;
    @media (max-width: 500px) {
      flex: 0 0 50%;
    }
  }
  &__icon {
    width: 25px;
    height: 25px;
    margin-right: 12px;
  }
}
.priceArea{
  width: 25%;
  @media (max-width: 576px) {
    width: 100%;
  }
  p{
    color: #707070;
    font-size: 14px;
  }
}
</style>
