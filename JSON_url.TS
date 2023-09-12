// Replace 'SHEET_ID' with the actual ID of your Google Sheet
const SPREADSHEET_ID = '1m5d2uL5LxErDcrONuM1dDn9BfpDHINjbqsDVOY4Myug';
function getImageUrlsAsJson() {
  var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
  var dataRange = sheet.getDataRange();
  var data = dataRange.getValues();
  var jsonData = {};
  for (var i = 1; i < data.length; i++) {
    var imageUrl = data[i][1];
    jsonData['url' + i] = imageUrl;
  }
  return JSON.stringify(jsonData);
}
// This function will be triggered when someone accesses the Web App URL.
function doGet() {
  return ContentService.createTextOutput(getImageUrlsAsJson()).setMimeType(ContentService.MimeType.JSON);
}
