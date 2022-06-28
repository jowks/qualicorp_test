<template>
  <v-card>
    <v-toolbar dark>
      <v-spacer />

      <v-btn icon dark @click="newClient()" color="primary">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-toolbar>

    <v-data-table :headers="tableHeaders" :items="tableItems">
      <template v-slot:[`item.actions`]="{ item }">
        <v-btn icon @click="editClient(item.client)" color="orange">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useClientStore } from "../store";
// import axios from "axios";

export default {
  name: "TableClients",
  methods: {
    ...mapActions(useClientStore, ["newClient"]),
  },
  computed: {
    ...mapState(useClientStore, ["tableHeaders", "tableItems", "isEditing"]),
  },
  created() {},
};
</script>
