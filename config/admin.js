module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cf359c7c6335d3342f4088c7b7285673'),
  },
});
