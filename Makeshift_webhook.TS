// Replace 'SHEET_ID' with the actual ID of your Google Sheet
const SPREADSHEET_ID = '1m5d2uL5LxErDcrONuM1dDn9BfpDHINjbqsDVOY4Myug';

function doPost(e) {
  const json = e.postData.contents;
  try {
    const data = JSON.parse(json);
    appendDataToSheet(data);
    return ContentService.createTextOutput('Data added to the Google Sheet successfully!');
  } catch (error) {
    return ContentService.createTextOutput('Error: Invalid JSON data received');
  }
}

function appendDataToSheet(data) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const rowValues = headers.map(header => data[header] || '');
  sheet.appendRow(rowValues);
}
