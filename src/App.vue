<template>
	<v-app>
		<NavBar />
		<v-main>
			<HelloWorld />
		</v-main>
	</v-app>
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
		formFields: [
			{
				type: 'email',
				label: 'Email*',
				placeholder: 'Enter email',
				required: true,
			},
			{
				type: 'name',
				label: 'Name*',
				placeholder: 'Enter your name',
				required: true,
			},
			{
				type: 'password',
				label: 'Password*',
				placeholder: 'Create a password',
				required: true,
			},
		]
	}),
};
</script>
