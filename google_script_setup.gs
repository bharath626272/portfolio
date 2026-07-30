/**
 * Google Apps Script for Google Sheet Contact Form Integration
 * Spreadsheet ID: 1F7GvXhXL0IuLLqTQO6iuFhCzQ8Dm3vQ4iVraSxSkEGo
 * Spreadsheet URL: https://docs.google.com/spreadsheets/d/1F7GvXhXL0IuLLqTQO6iuFhCzQ8Dm3vQ4iVraSxSkEGo/edit
 * 
 * SETUP STEPS TO DEPLOY:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1F7GvXhXL0IuLLqTQO6iuFhCzQ8Dm3vQ4iVraSxSkEGo/edit
 * 2. Click on the top menu: "Extensions" > "Apps Script".
 * 3. Delete any code currently in Code.gs and paste this entire file code.
 * 4. Click the Save icon (or press Ctrl+S / Cmd+S).
 * 5. Click the blue "Deploy" button at the top right > select "New deployment".
 * 6. Click the gear icon next to "Select type" and choose "Web app".
 * 7. Configure deployment settings:
 *    - Description: Portfolio Contact Form API
 *    - Execute as: Me (your Google account)
 *    - Who has access: Anyone  <-- (CRITICAL: Select "Anyone", NOT "Only myself")
 * 8. Click "Deploy", then click "Authorize access" and complete Google permissions.
 * 9. Copy the generated Web App URL (looks like https://script.google.com/macros/s/AKfycb.../exec).
 * 10. Paste the Web App URL into your frontend/.env file as:
 *     REACT_APP_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYED_URL_HERE/exec
 */

var SPREADSHEET_ID = "1F7GvXhXL0IuLLqTQO6iuFhCzQ8Dm3vQ4iVraSxSkEGo";

function getSheet() {
  try {
    return SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
  } catch (err) {
    return SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  }
}

function doPost(e) {
  try {
    var sheet = getSheet();
    var data = {};

    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var timestamp = new Date().toLocaleString();
    var name = data.name || '';
    var email = data.email || '';
    var subject = data.subject || '';
    var message = data.message || '';

    // Create header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Email", "Subject", "Message"]);
      var headerRange = sheet.getRange(1, 1, 1, 5);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#10b981");
      headerRange.setFontColor("#ffffff");
    }

    // Append submission row
    sheet.appendRow([timestamp, name, email, subject, message]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success", message: "Submission recorded successfully" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "Google Apps Script Contact API for sheet 1F7GvXhXL0IuLLqTQO6iuFhCzQ8Dm3vQ4iVraSxSkEGo is running!" }))
    .setMimeType(ContentService.MimeType.JSON);
}
