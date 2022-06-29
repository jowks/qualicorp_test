import { defineStore } from "pinia";
// import axios from "axios";

export const useClientStore = defineStore("client", {
  state: () => ({
    isEditing: false,

    client: {
      id: 0,
      cpf: "",
      name: "",
      email: "",
      phone: "",
    },
    defaultClient: {
      id: 0,
      cpf: "",
      name: "",
      email: "",
      phone: "",
    },

    tableHeaders: [
      { text: "CPF", value: "cpf" },
      { text: "Nome", value: "name", width: "60%" },
      { text: "Ações", value: "actions", align: "right", sortable: false },
    ],

    tableItems: [],
  }),

  getters: {
    // double: (state) => state.count * 2,
  },

  actions: {
    saveClient() {},

    deleteClient(item) {
      this.disableCard();

      console.log(item);
    },

    enableCard(client) {
      this.isEditing = true;

      Object.assign(this.client, this.defaultClient);

      if (client) Object.assign(this.client, client);
    },

    disableCard() {
      this.isEditing = false;

      Object.assign(this.client, this.defaultClient);
    },

    searchRegister(cpf) {
      console.log(cpf);
    },
  },
});
