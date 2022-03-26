<template>
     <b-modal id="modalTanggunganHilang" :title="title" size="xl">
        <b-form inline>
            <label class="sr-only" for="inline-form-input-komisi">Nama Komisi</label>
            <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input id="inline-form-input-komisi" placeholder="komisi"></b-form-input>
            </b-input-group> 
            <label class="sr-only" for="inline-form-input-nominal">Nominal</label>
            <b-input-group prepend="Rp" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input id="inline-form-input-nominal" placeholder="nominal"></b-form-input>
            </b-input-group> 
            <label class="sr-only" for="inline-form-input-keterangan">Keterangan</label>
            <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input id="inline-form-input-keterangan" placeholder="keterangan"></b-form-input>
            </b-input-group> 
        </b-form>
    </b-modal>
</template>

<script>
export default {
    name: 'ModalTanggunganHilang',
    props: {
        title:String,
    }
}
</script>

<style>

</style>