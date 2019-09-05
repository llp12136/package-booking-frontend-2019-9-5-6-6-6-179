<template>
  <div class="firstpage">
   <h1>菜鸟驿站</h1>
 <a-button
        type="primary"
        html-type="submit"
      >
        ALL
      </a-button>
      <a-button
        type="primary"
        html-type="submit"
      >
        已预约
      </a-button>
      <a-button
        type="primary"
        html-type="submit"
      >
        已取件
      </a-button>
       <a-button
        type="primary"
        html-type="submit"
      >
        未预约
      </a-button>
       <a-button
        type="primary"
        html-type="submit"
      >
        +添加
      </a-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'fiestpage',
  components: {
    HelloWorld
  }
}
</script>
