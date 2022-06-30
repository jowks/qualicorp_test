<template>
  <v-app>
    <v-app-bar app dark>
      <v-spacer />
      <span class="text-center text-h4"> Qualicorp </span>
      <v-spacer />
    </v-app-bar>

    <v-main>
      <Clients />
    </v-main>
  </v-app>
</template>

<script>
import Clients from "./components/Clients";

export default {
  name: "App",

  components: {
    Clients,
  },
};
</script>
