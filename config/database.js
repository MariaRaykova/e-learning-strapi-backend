// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', '127.0.0.1'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'd86hdnj7mdpjeu'),
//       user: env('DATABASE_USERNAME', ''),
//       password: env('DATABASE_PASSWORD', '4fa65869713d083eb99c7fa7369f546c5925af4b0874aceb8523a0a4a7c19938'),
//       ssl: env.bool('DATABASE_SSL', true),
//     },
//   },
// });

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "ec2-3-212-143-188.compute-1.amazonaws.com"
      ),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "d6jm7iihvnjq1t"),
      user: env("DATABASE_USERNAME", "whboeugrzokvyy"),
      password: env(
        "DATABASE_PASSWORD",
        "3a0cae04dc3e40580f1fd0b369185baf376a1753678a1792f0aad9a874002d5c"
      ),
      // ssl: env.bool('DATABASE_SSL', true), //тук смених със следното, иначе излизаше грешка
      ssl: { rejectUnauthorized: false },
    }
  }
});

