// config/plugins.js

module.exports = ({ env }) => ({
    upload: {
        provider: 'cloudinary',
        providerOptions: {
            cloud_name: env('CLOUDINARY_NAME', 'dszjcx6ai'),
            api_key: env('CLOUDINARY_KEY', '522564858775833'),
            api_secret: env('CLOUDINARY_SECRET', '9ZU7TjksBzMQoSJeKF9GtYeMf8A')
        }
    }
})
