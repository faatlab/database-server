const { google } = require("googleapis");

const auth = new google.auth.GoogleAuth({
   credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || ""),
   scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

async function appendToSheet(data) {
   await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A1", // update range if needed
      valueInputOption: "USER_ENTERED",
      requestBody: {
         values: [data],
      },
   });
}

// Controller to handle adding data to Google Sheets for Rawscholar Free Consultation
// This function will be called when a POST request is made to the /rawscholar/register
exports.addToSheets = async (req, res) => {
   try {
      const {
         firstName,
         phoneNumber,
         email,
         studyDestination,
         typeOfStudy,
         preferredSubject,
         yearOfStudy,
         state,
         qualification,
      } = req.body;

      await appendToSheet([
         firstName,
         phoneNumber,
         email,
         studyDestination,
         typeOfStudy,
         preferredSubject,
         yearOfStudy,
         state,
         qualification,
      ])
         .then(() => {
            res.status(200).json({
               message: "Form submitted successfully! We will contact you soon.",
               data:{firstName}
            });
         })
         .catch((error) => {
            res.status(500).json({
               message: "Failed to submit the form. Please try again later.",
               error: error.message,
            });
         });
   } catch (error) {
      res.status(500).json({
         message: "Error processing request",
         error: error.message,
      });
   }
};
