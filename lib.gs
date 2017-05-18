function csvChange(filelist){
  var blob = filelist.getBlob().getDataAsString("Shift_JIS");
  var data = Utilities.parseCsv(blob);
  return data;
}

function folderSearch(folderName){
  if (!DriveApp.getFoldersByName(folderName).hasNext()){return}
  var files = DriveApp.getFoldersByName(folderName).next().getFiles();
  if (!files.hasNext()){return}
  var file = [];
    while (files.hasNext()){
      file.push(files.next());
    }
  return file;
}

//日付処理エンジン