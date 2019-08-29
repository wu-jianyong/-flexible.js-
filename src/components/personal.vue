<template>
    <div id="root" style="overflow: hidden">
      <div class="swiper-container" >
        <div class="swiper-wrapper" >
          <div class="swiper-slide" ><img src="../assets/logo.png" /></div>
          <div class="swiper-slide" ><img src="../assets/logo.png" /></div>
          <div class="swiper-slide" ><img src="../assets/logo.png" /></div>
          <div class="swiper-slide" ><img src="../assets/logo.png" /></div>
          <div class="swiper-slide" ><img src="../assets/logo.png" /></div>
        </div>
      </div>
    </div>
</template>

<script>

  export default {
    components: {

    },
    data(){
      return {
        }
    },
    mounted(){
      this.$nextTick(()=>{
        new Swiper('.swiper-container', {
          loop: true, // 循环模式选项
          loopedSlides: 5,
          // 如果需要分页器
          // pagination: {
          //   el: '.swiper-pagination',
          // },
        })
      })

    }
  }
</script>

<style >
  .swiper-container {
    overflow: visible!important;
    width: 600px;
    height: 300px;
  }
  .swiper-container .swiper-wrapper .swiper-slide{ width: 600px; border-radius: 20px;background: palegreen}
  .swiper-container .swiper-wrapper .swiper-slide img{ border-radius: 20px;}
  /*.swiper-container .swiper-wrapper .swiper-slide-prev{ margin-top: 18px; height: 284px!important;}*/
  /*.swiper-container .swiper-wrapper .swiper-slide-prev img{ height: 284px!important;}*/
  /*.swiper-container .swiper-wrapper .swiper-slide-next{ margin-top: 18px; height: 284px!important;}*/
  /*.swiper-container .swiper-wrapper .swiper-slide-next img{ height: 284px!important;}*/
  .swiper-container .swiper-wrapper .swiper-slide-active{ width: 600px;margin-right: 20px;margin-left: 20px}

</style>
