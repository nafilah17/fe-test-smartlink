<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <CardName />

      <CardSalary />
      </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import CardName from '@/components/CardName.vue'
import CardSalary from '@/components/CardSalary.vue'


export default {
  name: 'HomeView',
  components: {
    Navbar,
    CardName,
    CardSalary,
  }
}
</script>
