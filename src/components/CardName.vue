<template>
    <div class="cardName">
        <h4>Faktur Gaji</h4>
        <hr/>
        <h4>Nama: Andara</h4>
        <p>01 Januari 2021 - 31 Januari 2021</p>
        <hr/>
        <b-row class="justify-flex-end">
            <b-col><p>Masuk 22 hari</p></b-col>
            <b-col><b-button variant="link">Ubah Kehadiran</b-button></b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'cardName'
}
</script>

<style>
.cardName {
    text-align: center;
    margin-top: 10px;
    border: 1px solid #eee;
}
</style>