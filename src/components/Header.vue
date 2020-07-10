<template>
  <div class="container header">
    <div class="row justify-content-between align-items-center">
      <router-link to="/" class="d-block col-6 col-sm-4 col-lg-2 logo bg-primary text-white text-center pt-2 pb-2">FANCY MARBLE</router-link>
      <div class="languageArea border rounded">
        <p class="language text-white text-center mb-0 rounded">繁中</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 9999;
}
.logo{
  height: 48px;
  @media (max-width: 576px) {
    height: 40px;
    font-size: 14px;
  }
  &:hover{
    text-decoration: none;
  }
}
.languageArea{
  width: 60px;
  height: 40px;
  background-image: url('https://public-v2links.adobecc.com/0444feef-4df6-412c-747e-04f2eca268af/component?params=component_id%3A595b46a7-16c4-4a1c-a9fe-c22939260e6f&params=version%3A0&token=1594440950_da39a3ee_36cfdb55336299e45179f8755f92bb2209919b7d&api_key=CometServer1');
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1;
  @media (max-width: 576px) {
    width: 50px;
    height: 30px;
    font-size: 14px;
  }
  .language{
    opacity: .6;
    line-height: 40px;
    background-color: #212529;
    @media (max-width: 576px) {
      line-height: 30px;
      font-size: 12px;
    }
  }
}
</style>
