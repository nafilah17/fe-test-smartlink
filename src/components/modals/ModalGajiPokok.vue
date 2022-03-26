<template>
    <b-modal id="modalGajiPokok" :title="title">
        <b-form inline>
            <label class="sr-only" for="inline-form-input-nominal">800000</label>
            <b-input-group prepend="Rp">
            <b-form-input id="inline-form-input-nominal" placeholder="nominal"></b-form-input>
            </b-input-group>
            x
            <label class="sr-only" for="inline-form-input-username">1</label>
            <b-input-group append="P" >
            <b-form-input id="inline-form-input-username" placeholder="Periode"></b-form-input>
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