<template>
	<amplify-authenticator username-alias="email">
		<amplify-sign-up slot="sign-up" username-alias="email" :form-fields.prop="formFields"></amplify-sign-up>
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
