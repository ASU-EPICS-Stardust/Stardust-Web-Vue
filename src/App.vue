<template>
  <amplify-authenticator>
    <v-app>
      <NavBar />
      <v-main>
        <HelloWorld />
      </v-main>
    </v-app>
    <amplify-sign-out></amplify-sign-out>
  </amplify-authenticator>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import NavBar from "./components/NavBar";

export default {
	name: "App",

	components: {
		HelloWorld,
		NavBar,
	},

	data: () => ({
		//
	}),
};
</script>
