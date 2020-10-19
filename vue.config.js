//vue.config.js
module.exports = {
	pluginOptions: {
      apollo: {
        lintGQL: 'true'
      },
      s3Deploy: {
        registry: undefined,
        awsProfile: 'default',
        overrideEndpoint: false,
        region: 'us-east-2',
        bucket: 'stardust-pv-website',
        createBucket: false,
        staticHosting: true,
        staticIndexPage: 'index.html',
        staticErrorPage: 'index.html',
        assetPath: 'dist',
        assetMatch: '**',
        deployPath: '/',
        acl: 'public-read',
        pwa: false,
        enableCloudfront: false,
        pluginVersion: '4.0.0-rc3',
        uploadConcurrency: 5
      }
    }
}
