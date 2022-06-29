<template>
  <v-container>
    <v-row>
      <v-col :cols="isEditing ? '7' : '12'">
        <TableClients />
      </v-col>

      <v-col v-if="isEditing" cols="5">
        <CRUDClients />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "pinia";
import { useClientStore } from "../store";

import TableClients from "../components/TableClients.vue";
import CRUDClients from "./CRUDClients.vue";

export default {
  name: "CRUD",
  components: {
    TableClients,
    CRUDClients,
  },
  computed: {
    ...mapState(useClientStore, ["isEditing"]),
  },
};
</script>
