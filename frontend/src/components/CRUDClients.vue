<template>
  <v-card>
    <v-toolbar dark>
      <v-btn
        icon
        dark
        :disabled="!isEditing"
        @click="disableCard()"
        color="red"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-spacer />
      <v-toolbar-items>
        <v-btn
          text
          dark
          :disabled="
            !isEditing ||
            !client.cpf ||
            !client.name ||
            !client.email ||
            !client.phone
          "
          @click="saveClient()"
          color="primary"
        >
          Salvar
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <v-text-field
            v-model="client.cpf"
            :disabled="!isEditing"
            :rules="[rules.required]"
            title="CPF"
            label="CPF"
            counter="11"
            maxLength="11"
            @change="searchRegister(client.cpf)"
          />
        </v-col>

        <v-col cols="12">
          <v-text-field
            v-model="client.name"
            :disabled="!isEditing"
            title="Nome"
            label="Nome"
            :rules="[rules.required]"
          />
        </v-col>

        <v-col cols="">
          <v-text-field
            v-model="client.email"
            :disabled="!isEditing"
            title="E-mail"
            label="E-mail"
            :rules="[rules.email, rules.required]"
          />
        </v-col>

        <v-col cols="">
          <v-text-field
            v-model="client.phone"
            :disabled="!isEditing"
            :rules="[rules.required, rules.minMax]"
            title="Telefone"
            label="Telefone (DDD + Número)"
            counter="11"
            maxLength="11"
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
    ...mapActions(useClientStore, [
      "saveClient",
      "disableCard",
      "searchRegister",
    ]),
  },
  computed: {
    ...mapState(useClientStore, ["isEditing", "client"]),
  },
  data: () => ({
    rules: {
      required: (value) => !!value || "Requerido",
      minCpf: (value) => value.length >= 11 || "CPF inválido",
      minMax: (value) => value.length >= 10 || "Telefone inválido",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "E-mail inválido";
      },
    },
  }),
};
</script>
