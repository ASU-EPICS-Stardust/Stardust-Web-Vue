<template>
	<v-container> 
		<v-card :color="computedColor" class="mx-auto" width=400>
			<v-card-title class="justify-center">
				Irradiance for Stardust
			</v-card-title>
			<v-card-text class="text-center text-h5">
				{{irradiance}}
			</v-card-text>
			<v-overlay absolute :value="$apollo.loading">
				<v-progress-circular
					indeterminate
					size="64"
				></v-progress-circular>
			</v-overlay>
		</v-card>
	</v-container>
</template>

<script>
import IrradianceQuery from "@/graphql/IrradianceQuery"

export default {
	name: "HelloWorld",
	data: () => ({
		irradiance: -1
	}),
	computed: {
		computedColor: function() {
			var irradiance = this.irradiance
			if (irradiance == -1) {
				return "yellow lighten-4"
			}
			return "green lighten-3"
		}
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
