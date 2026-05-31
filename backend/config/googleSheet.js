const { GoogleSpreadsheet } = require("google-spreadsheet");
const { JWT } = require("google-auth-library");

const creds = require("./service-account.json");

const serviceAccountAuth = new JWT({
  email: creds.client_email,
  key: creds.private_key,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const getSheet = async () => {
  const doc = new GoogleSpreadsheet(
    process.env.SHEET_ID,
    serviceAccountAuth
  );

  await doc.loadInfo();

  return doc.sheetsByTitle["Sheet1"];
};

module.exports = getSheet;