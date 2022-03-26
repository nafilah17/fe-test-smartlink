<template>
    <b-modal id="modalGajiPokok" :title="title" size="xl">
        <b-form inline>
            <label class="sr-only" for="inline-form-input-nominal">Nominal</label>
            <b-input-group prepend="Rp" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input id="inline-form-input-nominal" placeholder="nominal"></b-form-input>
            </b-input-group> X
            <label class="sr-only" for="inline-form-input-periode">Periode</label>
            <b-input-group append="Periode" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input id="inline-form-input-periode" placeholder="periode"></b-form-input>
            </b-input-group>
        </b-form>
    </b-modal>
</template>

<script>
export default {
    name: 'ModalGajiPokok',
    props: {
        title:String,
    }
}
</script>

<style>

</style>