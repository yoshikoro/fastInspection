/**
 * ２次元配列のデータを返します
 * var data = csvChange(fileIterator);
 * @param {fileItelator} filelist ファイルイテレータ
 * @return {dataArray[][]} data 2次元配列データ
 *  
 */
function csvChange(filelist){
  var blob = filelist.getBlob().getDataAsString("Shift_JIS");
  var data = Utilities.parseCsv(blob);
  return data;
}

/**
 * フォルダー内のファイルを配列で返す関数
 * var filesArray = folderSearch(targetFolder)
 * @param {String} folderName フォルダー名 
 * @return {fileArray} file ファイルイテレータの配列
 */
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