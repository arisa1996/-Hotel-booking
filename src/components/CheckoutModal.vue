<template>
  <div class="modal fade" id="checkoutModalCenter" tabindex="-1" role="dialog" aria-labelledby="checkoutModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document" ref='closeShow'>
      <div class="modal-content">
        <div class="modal-header border-bottom-0">
          <h5 class="modal-title font-weight-bold" id="checkoutModalCenterTitle">預訂資料</h5>
        </div>
        <div class="modal-checkout bg-light">
          <div class="w-100">
            <p>日期</p>
            <h6>{{timeValue[0]}} → {{timeValue[1]}}</h6>
          </div>
          <div class="d-flex mt-3">
            <div class="w-50">
              <p>房型</p>
              <h6>{{singleData.name}}</h6>
            </div>
            <div class="w-50">
              <p>房客</p>
              <h6>{{peopleValue}} 位</h6>
            </div>
          </div>
        </div>
        <div class="modal-body row flex-column">
          <div class="col-12 d-flex align-items-baseline">
            <label class="modalName">姓名</label>
            <input type="text" class="form-control" placeholder="請輸入姓名" v-model="ruleForm.name" v-on:input="inputName()">
          </div>
          <div class="col-12 text-danger pt-2 errTxt" v-if="errName">* 請輸入姓名</div>
          <div class="col-12 d-flex align-items-baseline pt-4">
            <label class="modalName">電話</label>
            <input type="text" class="form-control" placeholder="請輸入電話" v-model="ruleForm.phone" v-on:input="inputPhone()">
          </div>
          <div class="col-12 text-danger pt-2 errTxt" v-if="errPhone">* 請輸入電話</div>
        </div>
        <div class="modal-footer justify-content-around pb-1 border-top-0 pt-0">
          <button type="button" class="btn btn-light text-dark w-25" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary text-white w-25" @click.prevent="reserveBtn(singleData.id)">預訂</button>
        </div>
        <span class="footerTag">您暫時不會被收款</span>
      </div>
    </div>
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body successBody bg-primary text-white d-flex flex-column align-items-center justify-content-center">
          <i class="el-icon-success pb-3"></i>
          <h3>預訂成功</h3>
          <button type="button" class="btn btn-dark w-25 mt-3" data-dismiss="modal" @click.prevent="$router.push('/')">回首頁</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        phone: null
      },
      errName: false,
      errPhone: false
    }
  },
  props: ['timeValue', 'peopleValue', 'singleData'],
  methods: {
    reserveBtn (roomId) {
      if (this.ruleForm.name === '' && this.ruleForm.phone === null) {
        this.errName = true
        this.errPhone = true
      } else if (this.ruleForm.phone === null) {
        this.errPhone = true
      } else if (this.ruleForm.name === '') {
        this.errName = true
      } else {
        this.postData(roomId)
      }
    },
    inputName () {
      this.errName = false
    },
    inputPhone () {
      this.errPhone = false
    },
    postData (roomId) {
      const token = 'FA8NTAvl3ZuJrMsOseNx4wnG2ln13rhRJoKCcmsFsqAQSePzYt8NMro6M5I8'
      const api = `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${roomId}`
      this.$http.post(api, {
        name: this.ruleForm.name,
        tel: this.ruleForm.phone,
        date: this.timeValue
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          accept: 'application/json'
        }
      }).then(res => {
        if (res.status === 200 && res.data.success === true) {
          // 關掉預訂資訊框
          this.$refs.closeShow.className = 'modal fade'
          this.ruleForm.name = ''
          this.ruleForm.phone = null
        }
      }).catch(err => {
        this.ruleForm.name = ''
        this.ruleForm.phone = null
        this.$notify.error({
          title: '預約失敗',
          message: err.response.data.message
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-checkout{
  padding: 1rem;
  margin: 1rem;
  p{
    font-size: 14px;
    color: #707070;
    margin-bottom: .3rem;
  }
  h6{
    font-size: 20px;
    padding-left: 1rem;
  }
  .priceArea{
    border-bottom: 1px solid #707070;
  }
}
.modal-body{
  .modalName{
    width: 12%;
  }
  .form-control{
    width: 88%;
  }
  .errTxt{
    font-size: 12px;
  }
}
.footerTag{
  padding: 0rem 4.6rem 2rem 0rem;
  color: #707070;
  text-align: end;
  font-size: 12px;
}
.successBody{
  padding: 3rem;
  .el-icon-success{
    font-size: 70px;
  }
}
</style>
