<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <CardSalary />
      </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import CardSalary from '@/components/CardSalary.vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    CardSalary,
  },
  data(){
    return {
      inquirys: [],
    }
  },
  methods: {
    setInquirys(data){
      this.inquirys = data
    },
  },
  // get data
  mounted(){
    axios
    .get('https://boss.smartlink.id/salary/inquiry')
    .then((response) => {
      console.log('sukses', response.data.data)
      this.setInquirys(response.data.data)
    })
    .catch((error) => console.log('error',error))
  },
}
</script>
