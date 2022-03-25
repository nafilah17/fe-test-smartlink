import Vue from "vue";
import VueRouter from "vue-router";
import FakturGaji from "../views/FakturGaji.vue";
import DetailFaktur from "../views/DetailFaktur.vue";
import DetailPembayaran from "../views/DetailPembayaran.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "faktur",
    component: FakturGaji,
  },
  {
    path: "/detail-pembayaran",
    name: "detail-pembayaran",
    component: DetailPembayaran,
  },
  {
    path: "/detail-faktur",
    name: "detail-faktur",
    component: DetailFaktur,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
