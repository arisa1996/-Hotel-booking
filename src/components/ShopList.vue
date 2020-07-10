<template>
  <div class="shopList container pt-md-5 pb-5">
    <h3 class="pb-3">客房介紹</h3>
    <ul class="row list-unstyled mt-5 justify-content-center justify-content-sm-start">
      <li class="col-10 col-sm-6 col-md-6 col-lg-4 col-xl-4 listItem mb-5" v-for="h in $root.hotelData" :key="h.id" @click.prevent="goRoomDetail(h.id)">
        <div class="card h-100">
          <img :src="h.imageUrl" :alt="h.name" class="w-100 d-block hotelImg">
          <div class="card-body">
            <h4>{{h.name}}</h4>
            <div class="card-body-price">
              <p class="card-text text-secondary">假日 <span class="firstPrice">${{h.holidayPrice}}</span></p>
              <p class="card-text text-secondary">平日 <span>${{h.normalDayPrice}}</span></p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    goRoomDetail (roomId) {
      this.$router.push({ name: 'Room', params: { id: roomId } })
    }
  }
}
</script>

<style lang="scss" scoped>
.shopList{
  h3{
    font-size: 24px;
    font-weight: 700;
    border-bottom: 0.5px solid #707070;
  }
}
.listItem{
  max-height: 300px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  .card{
    border: none;
  }
  .hotelImg{
    height: 90%;
  }
  .card-body{
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #e4e4e4;
    padding: 1.25rem 1.5rem 0rem;
    transform: translateY(40%);
    transition: transform .3s;
    .card-body-price{
      display: grid;
      grid-template-columns: repeat(2,auto);
      justify-content: space-between;
      align-items: baseline;
      grid-gap: .625rem;
      gap: .625rem;
    }
    .firstPrice{
      font-size: 20px;
    }
  }
  h4{
    font-size: 20px;
    margin-bottom: 1.875rem;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
}
.listItem:hover .card-body{
  transform: translateY(0);
}
</style>
