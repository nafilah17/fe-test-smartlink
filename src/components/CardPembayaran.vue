<template>
<div>
    <div class="cardPembayaran">
         <h4>Detail Pembayaran</h4>
        <hr />
        <b-row class="cardRow">
            <b-col>
                <p>Subtotal Gaji</p>
            </b-col>
            <b-col>
                <strong>Rp. 2.524.000</strong>
            </b-col>
        </b-row>
        <b-row class="cardRow">
            <b-col>
                <p>Subtotal Upah</p>
            </b-col>
            <b-col>
                <strong>Rp. 100.000</strong>
            </b-col>
        </b-row>
        <b-row class="cardRow">
            <b-col>
                <p>Subtotal Komisi</p>
            </b-col>
            <b-col>
                <strong>Rp. 200.000</strong>
            </b-col>
        </b-row>
        <hr />
        <b-row class="cardRow">
            <b-col>
                <p>Gaji Kotor</p>
            </b-col>
            <b-col>
                <strong>Rp. 2.824.000</strong>
            </b-col>
        </b-row>
        <b-row class="cardRow">
            <b-col>
                <p>Tanggungan</p>
            </b-col>
            <b-col>
                <strong>(-) Rp. 70.000</strong>
            </b-col>
        </b-row>
        <hr />
        <b-row class="cardRow">
            <b-col>
                <p>Total Gaji Bersih</p>
            </b-col>
            <b-col>
                <strong>Rp. 2.124.000</strong>
            </b-col>
        </b-row>
    </div>

    <div class="cardForm">
        <b-form @submit="onSubmit" v-if="show">
            <b-form-group id="input-group-3" label="Bayar dari Rekening" label-for="input-3">
                <b-form-select
                id="input-3"
                v-model="form.rekening"
                :options="rekenings"
                required
                >
                </b-form-select>
            </b-form-group>

            <b-form-group
                id="input-group-1"
                label="Dicatat pada tanggal"
                label-for="input-1"
               
            >
                <b-form-input
                id="input-1"
                v-model="form.date"
                type="date"
                placeholder="Pilih tanggal"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Keterangan" label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="form.keterangan"
                placeholder="Tambah keterangan"
                required
                ></b-form-input>
            </b-form-group>
        <b-button block type="submit" variant="primary" href="/detail-faktur" >Submit Gaji</b-button>
    </b-form>
    <b-button class="mt-2" block href="/" variant="outline-primary">Back</b-button>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
    </div>
</div>
</template>

<script>
export default {
    name: 'cardPembayaran',
    data() {
        return {
            form: {
                rekening: '',
                date:'',
                keterangan: '',
            },
            rekenings: [{ text: 'Select One', value: null}, 'BNI', 'BRI', 'Mandiri', 'BCA', 'Jago'],
            show: true
        }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
}
}
</script>

<style>
.cardForm {
    margin-top: 10px;
    padding: 10px;
    padding-left:20px;
    padding-bottom: 0px;
    padding-top: 10px;
    border: 1px solid #eee;
}
.cardPembayaran {
    text-align: center;
    margin-top: 10px;
    padding-top: 10px;
    padding-bottom: 0px;
    border: 1px solid #eee;
}

.cardRow {
    padding-left:40px;
}
</style>