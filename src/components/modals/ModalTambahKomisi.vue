<template>
    <b-modal id="modalTambahKomisi" :title="title">
        <p class="my-4">Hello from modal tambah komisi</p>
    </b-modal>
</template>

<script>
export default {
    name: 'ModalTambahKomisi',
    props: {
        title:String,
    }
}
</script>

<style>

</style>