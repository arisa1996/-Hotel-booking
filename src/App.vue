<template>
  <div class="maxLayout">
    <div class="loading vh-100" v-if="loading"><img src="img/Dual Ring-1s-87px.gif" alt="loading"></div>
    <div v-else>
      <Header />
      <router-view></router-view>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

export default {
  data () {
    return {
      loading: false
    }
  },
  components: { Header, Footer },
  created () {
    this.getHotelData()
  },
  methods: {
    getHotelData () {
      this.loading = true
      const token = 'FA8NTAvl3ZuJrMsOseNx4wnG2ln13rhRJoKCcmsFsqAQSePzYt8NMro6M5I8'
      const api = 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms'
      this.$http.get(api, {
        headers: {
          Authorization: `Bearer ${token}`,
          accept: 'application/json'
        }
      })
        .then(res => {
          this.$root.hotelData = res.data.items
          this.loading = false
        }).catch(err => {
          this.$message({
            message: err.response.data.message,
            type: 'warning'
          })
        })
    }
  }
}
</script>

<style lang="scss">
@import './assets/all';
.maxLayout{
  max-width: 1440px;
  margin: auto;
  font-family: "Microsoft YaHei";
  .loading > img{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    z-index: 999;
  }
}
</style>
