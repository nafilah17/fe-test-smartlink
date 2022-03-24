<template>
    <b-modal id="modalBonusTarget" :title="title">
        <p class="my-4">Hello from modal Bonus Target</p>
    </b-modal>
</template>

<script>
export default {
    name: 'ModalBonusTarget',
    props: {
        title:String,
    }
}
</script>

<style>

</style>