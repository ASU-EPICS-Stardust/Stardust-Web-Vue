import Vue from "vue";
import AWSAppSyncClient, {AUTH_TYPE} from "aws-appsync";
import VueApollo from "vue-apollo";
import Amplify from "@aws-amplify/core";
import aws_exports from "@/aws-exports";
import {Auth} from "@aws-amplify/auth";

// Set up Amplify
Amplify.configure(aws_exports);
Auth.configure(aws_exports);

// Set up AppSync Client
const config = {
	url: aws_exports.aws_appsync_graphqlEndpoint,
	region: aws_exports.aws_appsync_region,
	auth: {
		type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
		jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
	}
};
const options = {
	defaultOptions: {
		watchQuery: {
			fetchPolicy: "cache-first"
		}
	}
};

const defaultClient = new AWSAppSyncClient(config, options);

const apolloProvider = new VueApollo({
	defaultClient
});

Vue.use(VueApollo);

export default apolloProvider;