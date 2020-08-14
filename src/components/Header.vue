<template>
  <div class="Header">
    <div id="mySidebar" class="sidebar">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()"
        >&times;</a
      >
      <div class="card">
        <img
          src="https://www.w3schools.com/howto/img_avatar2.png"
          alt="Avatar"
          class="avatar"
        />
        <div class="container">
          <h4><b>John Doe</b></h4>
        </div>
      </div>
      <a href="#"><fa-icon :icon="['fas', 'user-plus']" /> Cadastrar</a>
      <a href="#"><fa-icon :icon="['fas', 'clipboard-list']" /> Clientes</a>
      <a href="#"><fa-icon :icon="['fas', 'sign-out-alt']" /> Sair</a>
    </div>

    <div id="main">
      <button class="openbtn" @click="openNav()">&#9776;</button>
      <router-link class="home" to="/About"
        >Gerenciador de Clientes</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    openNav() {
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    },

    /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    closeNav() {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    }
  }
};
</script>

<style scoped>
#Header {
  margin: 0;
  padding: 0;
}
.sidebar {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #1f2940;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
  z-index: 1000;
}

.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #efefef;
  display: block;
  transition: 0.3s;
}

.sidebar a:hover {
  color: #646af2;
}

.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.openbtn {
  font-size: 2rem;
  cursor: pointer;
  background-color: #141b2d;
  color: white;
  padding: 10px 15px;
  border: none;
}

.openbtn:hover {
  background-color: #141b2d;
}

#main {
  transition: margin-left 0.5s;
  width: 100%;
  background-color: #141b2d;
}

.home {
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
}

.card {
  transition: 0.3s;
  background-color: transparent;
  align-items: center;
  border: none;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 10px 16px;
  text-align: center;
  color: #efefef;
}

.avatar {
  width: 50%;
  border-radius: 50%;
}

@media screen and (max-heigth: 450px) {
  .sidebar {
    padding-top: 15px;
  }
  .sidebar a {
    font-size: 18px;
  }
}
</style>
