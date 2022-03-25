<template>
    <div class="detailPembayaran">
        <Navbar />
            <div class="container">
                <CardDetailFaktur />
            </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import CardDetailFaktur from '@/components/CardDetailFaktur.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    CardDetailFaktur
  }
}
</script>

<style>

</style>