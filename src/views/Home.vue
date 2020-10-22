<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import IrradianceQuery from "@/graphql/IrradianceQuery"

export default {
	name: "Home",
	components: {
		HelloWorld,
	},
	data: function () {
		return {
			irradiance: -1
		};
	},
	apollo: {
		irradiance: {
			query: IrradianceQuery,
			variables: {
				lat: 33.4090,
				lon: -111.8685
			}
		}
	}
};
</script>
