<template>
  <div class="hello">
    <h1>
      <p @click="$router.push('/msite')">首页</p>
      <p @click="$router.push('/detail')">详情</p>
      <p @click="$router.push('/personal')"> 个人中心</p>
      <p @click="$router.push('/shop')">商城</p>
    </h1>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1{
  font-weight: normal;
  width:750px;
  height:400px;
  background: red;
  font-size: 50px;
}
h1 p{
  margin-bottom: 25px;
}
</style>
