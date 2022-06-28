<template>
  <v-card>
    <v-toolbar dark>
      <v-btn text dark :disabled="!isEditing" color="red"> Cancel </v-btn>
      <v-spacer />
      <v-toolbar-items>
        <v-btn dark text :disabled="!isEditing" @click="save()" color="primary">
          Save
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <v-text-field
            v-model="client.cpf"
            :disabled="!isEditing"
            title="CPF"
            label="CPF"
            @change="searchRegister()"
          />
        </v-col>

        <v-col cols="12">
          <v-text-field
            v-model="client.name"
            :disabled="!isEditing"
            title="Nome"
            label="Nome"
          />
        </v-col>

        <v-col cols="">
          <v-text-field
            v-model="client.email"
            :disabled="!isEditing"
            title="E-mail"
            label="E-mail"
          />
        </v-col>

        <v-col cols="">
          <v-text-field
            v-model="client.phone"
            :disabled="!isEditing"
            title="Telefone"
            label="Telefone"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useClientStore } from "../store";

export default {
  name: "CRUD",
  methods: {
    ...mapActions(useClientStore, ["save", "searchRegister"]),
  },
  computed: {
    ...mapState(useClientStore, ["isEditing", "client"]),
  },
};
</script>
