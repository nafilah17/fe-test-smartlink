<template>
     <b-modal id="modalUangTransport" :title="title" size="xl">
        <b-form inline>
            <label class="sr-only" for="inline-form-input-nominal">Nominal</label>
            <b-input-group prepend="Rp" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input id="inline-form-input-nominal" placeholder="nominal"></b-form-input>
             </b-input-group> <p>X 22 Hari</p>
            <hr />
        </b-form>
    </b-modal>
</template>

<script>
export default {
    name: 'ModalUangTransport',
    props: {
        title:String,
    }
}
</script>

<style>

</style>