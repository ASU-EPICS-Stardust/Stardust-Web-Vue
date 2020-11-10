# AppSync GraphQL Schema
For getting the appsync graph ql schema down from appsync into this project, use the following commands

The following commands download the introspection schema from AppSync and then generate typescript types for the queries to be used in this project.
Make sure to replace the API ID with the actual API ID of the AppSync API you want to use. Run these in the project root.
```
mkdir -p src/graphql
aws appsync get-introspection-schema --api-id ti3r6iyhbfdfrfcpv5ddmm7giu --format JSON --include-directives src/graphql/schema.json
amplify-graphql-docs-generator --schema "src/graphql/schema.json" --output "src/graphql/" --separateFiles --language typescript
amplify-graphql-docs-generator --schema "src/graphql/schema.json" --output "src/graphql/operations.graphql"
amplify-graphql-types-generator "src/graphql/operations.graphql" --schema "src/graphql/schema.json" --target "typescript" --output "src/graphql/API.ts" --add-typename true
```

