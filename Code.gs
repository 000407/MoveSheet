// global
var app = SpreadsheetApp.getUi();
var ss = SpreadsheetApp.getActiveSpreadsheet();

// create menu entry in spreadsheet upon opening
function onOpen() {
  app.createMenu('Move Sheet')
    .addItem('To beginning', 'moveToBeginning')
    .addItem('Before..', 'moveBefore')
    .addItem('After..', 'moveAfter')
    .addToUi();  
}

// move active sheet to position zero
function moveToBeginning() {
  ss.moveActiveSheet(0);  
}

// select sheet number (correct for zero-based array) and move to front
function moveBefore() {
  var targetIndex = getTargetIndex();
  ss.moveActiveSheet(targetIndex - 1);
}

function moveAfter() {
  var targetIndex = getTargetIndex();
  ss.moveActiveSheet(targetIndex);
}

function getTargetIndex(){
  var name = app.prompt('Sheet name', 'Enter name of the target sheet...', app.ButtonSet.OK_CANCEL)
    .getResponseText();
  var target = SpreadsheetApp.getActive().getSheetByName(name);
  
  if(!target){
    app.alert("Sheet not found!");
    return;
  }
  
  return target.getIndex();
  //ss.setActiveSheet(ss.getSheets()[int-1]);
}
