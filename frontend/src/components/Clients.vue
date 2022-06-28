<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="7">
        <TableClients />
      </v-col>

      <v-col cols="5">
        <CRUDClients />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TableClients from "../components/TableClients.vue";
import CRUDClients from "./CRUDClients.vue";

export default {
  name: "CRUD",
  components: {
    TableClients,
    CRUDClients,
  },
  actions: {},
  data: () => ({
    client: {
      cpf: "",
      name: "",
      email: "",
      phone: "",
    },
  }),
};
</script>
