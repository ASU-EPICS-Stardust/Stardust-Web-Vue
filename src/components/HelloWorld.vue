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
		<v-card :color="computedColor" class="mx-auto" width=400>
			<v-card-title class="justify-center">
				Irradiance for Shanghai
			</v-card-title>
			<v-card-text class="text-center text-h5">
				{{shanghaiIrradiance}}
			</v-card-text>
			<v-overlay absolute :value="$apollo.loading">
				<v-progress-circular
						indeterminate
						size="64"
				></v-progress-circular>
			</v-overlay>
		</v-card>
		<v-card :color="computedColor" class="mx-auto" width=400>
			<v-card-title class="justify-center">
				Irradiance for Dubai
			</v-card-title>
			<v-card-text class="text-center text-h5">
				{{dubaiIrradiance}}
			</v-card-text>
			<v-overlay absolute :value="$apollo.loading">
				<v-progress-circular
						indeterminate
						size="64"
				></v-progress-circular>
			</v-overlay>
		</v-card>
		<v-card :color="computedColor" class="mx-auto" width=400>
			<v-card-title class="justify-center">
				Irradiance for Current Location
			</v-card-title>
			<v-card-text class="text-center text-h5">
				{{currentIrradiance}}
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
import { API } from '@aws-amplify/api';
import * as queries from '@/graphql/queries';
import gql from 'graphql-tag';


export default {
	name: "HelloWorld",
	data: () => ({
		irradiance: -1,
		shanghaiIrradiance: -1,
		dubaiIrradiance: -1,
		currentIrradiance: -1,
	}),
	async created() {
		this.getIrradiance();
		this.getDubaiIrradiance();
	},
	async mounted() {
		if (window.navigator.geolocation) {
			this.getCurrentIrradiance()
		}
	},
	methods: {
		async getIrradiance() {
			const result = await API.graphql({
				query: queries.getAprsIrradianceFor,
				variables: {
					lat: 33.4090,
					lon: -111.8685
				}
			}) //test
			this.irradiance = result.data.getAprsIrradianceFor;
		},
		async getDubaiIrradiance() {
			const result = await this.$apollo.query({
				query: gql(queries.getIrradianceDataFor),
				variables: {
					lat: 25.2048,
					lon: 55.2708
				}
			})
			this.dubaiIrradiance = result.data.getIrradianceDataFor;
		},
		async getCurrentIrradiance() {
			window.navigator.geolocation.getCurrentPosition(async position => {
				const result = await this.$apollo.query({
					query: gql(queries.getIrradianceDataFor),
					variables: {
						lat: position.latitude,
						lon: position.longitude
					}
				})
				this.currentIrradiance = result.data.getIrradianceDataFor;
			})
		}
	},
	computed: {
		computedColor: function() {
			const irradiance = this.irradiance;
			if (irradiance === -1) {
				return "yellow lighten-4"
			}
			return "green lighten-3"
		}
	},
	apollo: {
		shanghaiIrradiance: {
			query: gql(queries.getIrradianceDataFor),
			variables: {
				lat: 31.158256,
				lon: 121.6992
			},
			update: data => data.getIrradianceDataFor
		}
	}
};
</script>
