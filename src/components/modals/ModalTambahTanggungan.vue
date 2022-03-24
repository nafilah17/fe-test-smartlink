<template>
    <b-modal id="modalTambahTanggungan" :title="title">
        <p class="my-4">Hello from modal Tambah Tanggungan</p>
    </b-modal>
</template>

<script>
export default {
    name: 'ModalTambahTanggungan',
    props: {
        title:String,
    }
}
</script>

<style>

</style>