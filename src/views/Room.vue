<template>
  <div class="maxLayout">
    <div class="loading vh-100" v-if="loading"><img src="img/Dual Ring-1s-87px.gif" alt="loading"></div>
    <div v-if="singleData && singleData.imageUrl">
      <div class="container-fluid roomHero">
        <div class="row roomHero">
          <div class="topImg">
            <img :src="singleData.imageUrl[0]" alt="1" data-toggle="modal" data-target="#openedImg" @click.prevent="openImg(singleData.imageUrl[0])">
          </div>
          <div class="secondImg">
            <img :src="singleData.imageUrl[1]" alt="2" data-toggle="modal" data-target="#openedImg" @click.prevent="openImg(singleData.imageUrl[1])">
            <img :src="singleData.imageUrl[2]" alt="3" data-toggle="modal" data-target="#openedImg" @click.prevent="openImg(singleData.imageUrl[2])">
          </div>
        </div>
      </div>
      <div class="container pt-5 pb-5">
        <div class="row flex-column flex-lg-row">
          <RoomInfo :singleData="singleData"/>
          <div class="col-12 col-lg-4">
            <div class="bookingBox">
              <div class="chooseDate mb-4">
                <h6>日期</h6>
                <el-date-picker
                  v-model="timeValue"
                  type="daterange"
                  value-format="yyyy-MM-dd"
                  range-separator="至"
                  start-placeholder="開始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions"
                  @focus="changeDate()"
                  class="w-100">
                </el-date-picker>
                <p class="text-danger pt-2" v-if="errChoosed">請正確選擇日期</p>
              </div>
              <div class="choosePeople mb-4">
                <h6>房客</h6>
                <el-select v-model="peopleValue" placeholder="請選擇人數" class="w-100">
                  <el-option
                    v-for="item in 10"
                    :key="item"
                    :label="item"
                    :value="item"
                    class="w-100">
                  </el-option>
                </el-select>
              </div>
              <div class="chooseBtn mb-3">
                <button type="button" class="btn btn-primary w-100 text-white" data-toggle="modal" data-target="#checkoutModalCenter" @click.prevent="checkout (timeValue, peopleValue)" :disabled="isOpenModel">預訂</button>
              </div>
              <p class="text-center mb-0 tips">您暫時不會被收款</p>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="openedImg" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <img :src="imgUrl" class="w-100 block">
        </div>
      </div>
      <CheckoutModal :timeValue="timeValue" :peopleValue="peopleValue" :singleData="singleData"/>
    </div>
  </div>
</template>

<script>
import RoomInfo from '../components/RoomInfo'
import CheckoutModal from '../components/CheckoutModal'

export default {
  data () {
    return {
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一個月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三個月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }],
        disabledDate (time) {
          // 限制不能選今天以前的日期,但可選今天 || 90天內可選取
          const curDate = (new Date()).getTime()
          const day = 90 * 24 * 3600 * 1000
          const dateRegion = curDate + day
          return time.getTime() < Date.now() - 8.64e7 || time.getTime() > dateRegion
        }
      },
      timeValue: '',
      peopleValue: 1,
      singleData: {},
      loading: false,
      imgUrl: '',
      isOpenModel: false,
      errChoosed: false
    }
  },
  components: { RoomInfo, CheckoutModal },
  created () {
    this.getSingleData()
  },
  methods: {
    getSingleData () {
      this.loading = true
      const roomId = this.$route.params.id
      const token = 'FA8NTAvl3ZuJrMsOseNx4wnG2ln13rhRJoKCcmsFsqAQSePzYt8NMro6M5I8'
      const api = `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${roomId}`
      this.$http.get(api, {
        headers: {
          Authorization: `Bearer ${token}`,
          accept: 'application/json'
        }
      })
        .then(res => {
          this.singleData = res.data.room[0]
          this.loading = false
        })
    },
    openImg (url) {
      this.imgUrl = url
    },
    changeDate () {
      this.isOpenModel = false
      this.errChoosed = false
    },
    checkout (timeValue, peopleValue) {
      if (timeValue === '' || peopleValue === 0) {
        this.errChoosed = true
        this.isOpenModel = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.roomHero{
  height: 440px;
  box-shadow: 2px 2px 9px 0 rgba(0,0,0,.18);
  max-height: 440px;
  img{
    cursor: pointer;
    display: block;
    object-fit: cover;
    opacity: .7;
    transition: all .3s;
    &:hover{
      opacity: 1;
    }
  }
  .topImg{
    width: 70%;
    height: 100%;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .secondImg{
    flex: 0 0 30%;
    height: 100%;
    img{
        width: 100%;
        height: 50%;
    }
  }
}
.bookingBox{
  box-shadow: 0px 3px 6px #00000029;
  padding: 1rem;
  .el-date-editor .el-range-separator{
    padding: 0px;
    width: 0%;
  }
  .tips{
    font-size: 14px;
  }
}
</style>
