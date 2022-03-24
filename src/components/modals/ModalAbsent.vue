<template>
    <b-modal id="modal-a" :title="title">
        <p class="my-4">Hello from modal 1 gaji pokok</p>
    </b-modal>
</template>

<script>
export default {
    name: 'ModalAbsent',
    props: {
        title:String,
    }
}
</script>

<style>

</style>