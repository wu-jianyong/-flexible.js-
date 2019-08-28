<template>
    <div id="root" style="overflow: hidden">
      <div class="swiper-container" style="width: 200px;height:150px;">
        <div class="swiper-wrapper" style="height: 150px;">
          <div v-for='el in arrItem' class="swiper-slide" style="width: 190px;margin: 10px">
            <img class="img" :src="el.imgUrl" style="width: 100%;height: 150px">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
</template>

<script>

  export default {
    components: {

    },
    data(){
      return {
          arrItem:[
            {
              name:'swiperSlide5',
              imgUrl:'http://image.qmango.com/hotelimg/dl1210/125708/181.jpeg'
            },
            {
              name:'swiperSlide1',
              imgUrl:'http://image.qmango.com/hotelimg/dl1210/109490/109.jpeg'
            },
            {
              name:'swiperSlide51',
              imgUrl:'http://image.qmango.com/hotelimg/dl1210/125708/181.jpeg'
            },
            {
              name:'swiperSlide1111115',
              imgUrl:'http://image.qmango.com/hotelimg/dl1210/109490/109.jpeg'
            },
            {
              name:'swiperSlide5',
              imgUrl:'http://image.qmango.com/hotelimg/dl1210/125708/181.jpeg'
            }
          ]
        }
    },
    mounted(){
      new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
    }
  }
</script>

<style >

</style>
