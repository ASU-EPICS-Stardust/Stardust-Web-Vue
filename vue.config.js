module.exports = {
  "pluginOptions": {
    "apollo": {
      "lintGQL": "true"
    },
    "s3Deploy": {
      "awsProfile": "default",
      "overrideEndpoint": false,
      "region": "us-east-2",
      "bucket": "stardust-website-bucket",
      "createBucket": false,
      "staticHosting": false,
      "staticIndexPage": "index.html",
      "staticErrorPage": "index.html",
      "assetPath": "dist",
      "assetMatch": "**",
      "deployPath": "/",
      "acl": "public-read",
      "pwa": false,
      "enableCloudfront": false,
      // "cloudFrontId": "dyy2o3vaeht0p",
      // "cloudFrontMatchers": "/*",
      "pluginVersion": "4.0.0-rc3",
      "uploadConcurrency": 5
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}