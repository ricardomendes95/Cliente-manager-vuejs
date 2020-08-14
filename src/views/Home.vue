<template>
  <div class="home">
    <div id="top">
      <div id="txt">
        <h3>Clientes</h3>
      </div>
      <hr class="hr3" />
    </div>
    <div id="content">
      <TableClients />
    </div>
  </div>
</template>

<script>
import TableClients from "../components/TableClients.vue";

export default {
  name: "Home",
  components: {
    TableClients
  }
};
</script>
<style scoped>
.home {
  height: 100vmax;
}
#top {
  padding: 20px 20px 0 20px;
}

.hr3 {
  margin: 50px 0;
  border: 0;
  height: 2px;
  background-image: linear-gradient(to right, transparent, #ccc, transparent);
}
</style>
