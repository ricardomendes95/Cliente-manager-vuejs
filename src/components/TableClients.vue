<template>
  <div class="ListClients">
    <header>
      <input type="text" placeholder="Buscar" />
    </header>
    <body>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Código</th>
            <th scope="col">Nome</th>
            <th scope="col">Descrição</th>
            <th scope="col">ação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(client, index) in clients" v-bind:key="`client-${index}`">
            <td>{{ client.cod }}</td>
            <td>{{ client.name }}</td>
            <td class="text-capitalize">{{ client.description }}</td>
            <td>
              <button class="btn ">
                <fa-icon :icon="['fas', 'ellipsis-v']" style="color: #111" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
    <footer>
      <div id="pagination">
        <select id="pagination">
          <option value="10">10 Itens</option>
          <option value="20">20 Itens</option>
          <option value="50">50 Itens</option>
        </select>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "ListClients",
  data() {
    return {
      clients: [
        { cod: 1, name: "jose", description: "pegou emprestimo" },
        { cod: 3, name: "maria", description: "pegou emprestimo" },
        { cod: 4, name: "corno", description: "pegou emprestimo" }
      ]
    };
  }
};
</script>

<style>
header {
  padding-top: 5px;
  padding-bottom: 1rem;
}
footer {
  display: flex;
  justify-content: flex-end;
}

h3 {
  font-family: Arial, Helvetica, sans-serif;
  color: #efefef;
  font-size: 100px;
}

.ListClients {
  height: 100vh;
  background-color: #141b2d;
  padding: 5%;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  overflow: auto;
}

th,
td {
  text-align: left;
  padding: 8px;
}

th {
  background-color: #0e1423;
  color: #efefef;
}

tr {
  background-color: #294277;
  color: #efefef;
}

tr:nth-child(even) {
  background-color: #1f2940;
  color: #efefef;
}

#pagination {
  display: flex;
  justify-content: flex-end;
}

select {
  border-radius: 5px;
  background-color: #0e1423;
  color: #efefef;
}
input {
  width: 20rem;
  background-color: #1f2945;
  border-radius: 5px;
  color: #efefef;
}
::-webkit-input-placeholder {
  color: #cfcfcf;
}
@media screen and (max-width: 450px) {
  input {
    width: 100%;
  }
  select option {
    font-size: 14px;
    max-width: 30px;
  }
}
</style>
