<template>
    <div class="detailPembayaran">
        <Navbar />
            <div class="container">
                <CardPembayaran />
            </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import CardPembayaran from '@/components/CardPembayaran.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    CardPembayaran
  }
}
</script>

<style>

</style>