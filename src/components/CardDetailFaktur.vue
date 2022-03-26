<template>
    <div>
        <div class="cardSalary">
            <div class="titleCard">Gaji</div>
            <hr/>
            <b-row class="cardRow">
                <b-col>
                    <strong>Gaji Pokok</strong><br />
                    <small class="text-muted">800.000 x 1 periode</small>
                </b-col>
                <b-col >
                    <strong>800.000</strong>
                   
                </b-col>
            </b-row>
            <!-- modal gaji pokok -->
            <modal-gaji-pokok title="Gaji Pokok" />
            <b-row class="cardRow">
                <b-col >
                    <strong>Uang Makan</strong><br />
                    <small class="text-muted">10.000 x 22 kehadiran</small>
                </b-col>
                <b-col >
                    <strong>220.000</strong>
                   
                </b-col>
            </b-row>
            <!-- modal uang makan -->
            <modal-uang-makan title="Uang Makan" />
            <b-row class="cardRow">
                <b-col >
                    <strong>Uang Absen</strong><br />
                    <small class="text-muted">12.000 x 22 kehadiran</small>
                </b-col>
                <b-col >
                    <strong>264.000</strong>
                   
                </b-col>
            </b-row>
            <!-- modal uang absen -->
            <modal-uang-absen title="Uang Absen" />
            <b-row class="cardRow">
                <b-col >
                    <strong>Uang Transport</strong><br />
                    <small class="text-muted">15.000 x 22 kehadiran</small>
                </b-col>
                <b-col >
                    <strong>330.000</strong>
                   
                </b-col>
            </b-row>
            <!-- modal uang transport -->
            <modal-uang-transport title="Uang Transport" />
            <b-row class="cardRow"> 
                <b-col >
                    <strong>Uang Snack</strong><br />
                    <small class="text-muted">5.000 x 22 kehadiran</small>
                </b-col>
                <b-col >
                    <strong>110.000</strong>
                   
                </b-col>
            </b-row>
            <!-- modal uang snack -->
            <modal-uang-snack title="Uang Snack" />
            <hr/>
            <b-row class="cardRow">
                <b-col >
                    <h4>Subtotal Gaji</h4>
                    <p></p>
                </b-col>
                <b-col >
                    <h4>Rp. 2.524.000</h4>
                </b-col>
            </b-row>
        </div>

    <!-- card upah -->
        <div class="cardSalary">
            <div class="titleCard">Upah Borongan</div>
            <hr/>
            <b-row class="cardRow"> 
                <b-col >
                    <strong>Mencuci</strong><br />
                    <small class="text-muted">100KG</small>
                </b-col>
                <b-col >
                    <strong class="mr-3">20.000</strong>
                    <b-icon-dash-circle></b-icon-dash-circle>
                </b-col>
            </b-row>
            <b-row class="cardRow">
                <b-col >
                    <strong>Menyetrika</strong><br />
                    <small class="text-muted">50KG</small>
                </b-col>
                <b-col >
                    <strong class="mr-3">80.000</strong>
                    <b-icon-dash-circle></b-icon-dash-circle>
                </b-col>
            </b-row>
            <hr/>
            <b-row class="cardRow">
                <b-col >
                    <h4>Subtotal Upah</h4>
                    <p></p>
                </b-col>
                <b-col >
                    <h4>Rp. 100.000</h4>
                </b-col>
            </b-row>
        </div>

    <!-- Komisi -->
        <div class="cardSalary">
            <div class="titleCard">Komisi</div>
            <hr/>
            <div class="smallText">
               
            </div>
             <!-- modal tambah komisi -->
            <modal-tambah-komisi title="Tambah Komisi" /> 
            <b-row class="cardRow">
                <b-col>
                    <strong><p>Bonus Target 1</p></strong>
                </b-col>
                <b-col >
                    <strong>200.000</strong>
                   
                </b-col>
            </b-row>
            <!-- modal tambah bonus -->
            <modal-bonus-target title="Bonus Target 1" /> 
            <hr />
            <b-row class="cardRow">
                <b-col >
                    <h4>Subtotal Komisi</h4>
                </b-col >
                <b-col >
                    <h4>Rp. 200.000</h4>
                </b-col>
            </b-row>
            <hr />
            <b-row class="cardRow">
                <b-col >
                    <h4>Total Gaji Kotor</h4>
                </b-col>
                <b-col class="mb-3">
                    <h4>Rp. 2.824.000</h4>
                </b-col>
            </b-row>
        </div>

    <!-- Tanggungan -->
        <div class="cardSalary">
            <div class="titleCard">Tanggungan</div>
            <small class="smallText">Karyawan ini memiliki tanggungan Rp. 570.000</small>
            <hr/>
             <div class="smallText">
               
            </div>
            <!-- modal tanggungan -->
            <modal-tambah-tanggungan title="Tambah Tanggungan" />
            <b-row class="cardRow">
                <b-col >
                    <strong>Ganti Barang Hilang</strong><br />
                    <small class="text-muted">Baju yang hilang warna merah</small>
                </b-col>
                <b-col >
                    <strong>50.000</strong>
                   
                </b-col>
            </b-row>
            <!-- modal tanggungan hilang -->
            <modal-tanggungan-hilang title="Tambah Tanggungan Hilang" />
            <b-row class="cardRow">
                <b-col >
                    <strong>Denda Keterlambatan</strong><br />
                    <small class="text-muted">Karena terlambat 3 hari</small>
                </b-col>
                <b-col >
                    <strong>20.000</strong>
                   
                </b-col>
            </b-row>
            <!-- modal tanggungan denda -->
            <modal-tanggungan-denda title="Tambah Tanggungan Denda" />
            <hr />
            <b-row class="cardRow">
                <b-col >
                    <h4>Tanggungan Dibayar</h4>
                    <p></p>
                </b-col>
                <b-col >
                    <h4 class="font-color-red">(-) Rp. 70.000</h4>
                </b-col>
            </b-row>
        </div>

    <!-- Total gaji bersih -->
        <div class="cardSalary">
            <b-row class="cardRow">
                <b-col class="mt-3">
                    <h4>Total Gaji Bersih<b-icon-check-circle></b-icon-check-circle></h4>
                    <p></p>
                </b-col>
                <b-col class="mt-3">
                    <h4 class="font-color-red">Rp. 2.124.000</h4>
                </b-col>
            </b-row>
            <small class="smallText">Nominal aktif yang diterima karyawan setelah ditambah komisi dikurangi pembayaran tanggungan (jika ada)</small>
            
        </div>

        <!-- Total gaji bersih -->
        <div class="cardSalary">
           
            <small class="smallText">Keterangan</small>
            <p>Lebih Semangat Lagi ya!</p>
            <b-button class="mt-3" href="/detail-pembayaran" block variant="info">Cetak</b-button>
        </div>

        
    </div>
</template>

<script>
import ModalUangAbsen from './modals/ModalUangAbsen.vue'
import ModalGajiPokok from './modals/ModalGajiPokok.vue'
import ModalUangTransport from './modals/ModalUangTransport.vue'
import ModalUangMakan from './modals/ModalUangMakan.vue'
import ModalUangSnack from './modals/ModalUangSnack.vue'
import ModalTambahKomisi from './modals/ModalTambahKomisi.vue'
import ModalBonusTarget from './modals/ModalBonusTarget.vue'
import ModalTambahTanggungan from './modals/ModalTambahTanggungan.vue'
import ModalTanggunganHilang from './modals/ModalTanggunganHilang.vue'
import ModalTanggunganDenda from './modals/ModalTanggunganDenda.vue'



export default {
  components: {  ModalUangAbsen, ModalUangTransport, ModalGajiPokok, ModalUangMakan, ModalUangSnack, ModalTambahKomisi, ModalTambahTanggungan, ModalTanggunganHilang, ModalTanggunganDenda,  ModalBonusTarget},
    name: 'cardSalary'

}
</script>

<style>
.cardSalary {
    text-align: center;
    border: 1px solid #eee;
    margin-top: 10px;
    margin-bottom: 10px;
}

.titleCard {
    font-size: 25px;
    text-align: left;
    font-weight: bold;
    padding: 10px;
    padding-left:40px;
    padding-bottom: 0px
}
.smallText {
    font-size: 15px;
    text-align: left;
    padding-left:40px;
    padding-bottom: 0px
}

.cardRow {
    padding-left:40px;
}
</style>