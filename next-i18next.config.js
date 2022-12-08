const I18NextHttpBackend = require("i18next-http-backend/cjs");

module.exports = {
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
  },
  backend: {
    loadPath: `http://localhost:3333/{{lng}}/{{ns}}.json`,
  },
  debug: true,
  ns: ["en", "de", "common"],
  serializeConfig: false,
  use: [I18NextHttpBackend],
};
