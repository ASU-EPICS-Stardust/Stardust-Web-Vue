<template>
	<v-app-bar
			app
			color="primary"
			dark
	>
		<div class="d-flex align-center">
			<v-img
					src="../assets/solar-panel-solid.svg"
					width=40
					class = "mr-4"
			> </v-img>
			<v-toolbar-title>
				Stardust Panel Testing
			</v-toolbar-title>
		</div>

		<v-spacer></v-spacer>

		<v-btn icon v-on:click="signin">
			Sign In
		</v-btn>

		<v-app-bar-nav-icon>
		</v-app-bar-nav-icon>
	</v-app-bar>
</template>

<script>
import {Auth} from '@aws-amplify/auth';

export default {
	methods: {
		signin: function() {
			Auth.federatedSignIn();
		}
	}
};
</script>

<style>
</style>