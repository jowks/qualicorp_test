<template>
  <v-card>
    <v-toolbar dark>
      <v-spacer />

      <v-btn icon dark @click="enableCard()" color="primary">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-toolbar>

    <v-data-table :headers="tableHeaders" :items="tableItems">
      <template v-slot:[`item.actions`]="{ item }">
        <v-btn icon @click="enableCard(item)" color="orange">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon @click="deleteClient(item.cpf)" color="red">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useClientStore } from "../store";

export default {
  name: "TableClients",
  methods: {
    ...mapActions(useClientStore, [
      "enableCard",
      "deleteClient",
      "getAllClients",
    ]),
  },
  computed: {
    ...mapState(useClientStore, ["tableHeaders", "tableItems", "isEditing"]),
  },
  created() {
    this.getAllClients();
  },
};
</script>
