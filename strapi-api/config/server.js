module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 8082),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "a2534dfad6b3898f07e36831899aed12"),
    },
  },
});
