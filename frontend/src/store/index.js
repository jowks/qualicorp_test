import { defineStore } from "pinia";
import axios from "axios";

export const useClientStore = defineStore("client", {
  state: () => ({
    isEditing: false,

    client: {
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

    tableItems: [
      {
        cpf: "45242368802",
        name: "Joaquim",
        email: "joaquim.camael@hotmail.com",
        phone: "19 998400814",
      },
    ],
  }),

  getters: {
    // double: (state) => state.count * 2,
  },

  actions: {
    newClient() {
      this.isEditing = true;
    },
  },
});
