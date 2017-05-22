/**
 * シートを編集する関数です
 * return {void}
 */
function inspectionManage() {
  var sp = SpreadsheetApp.getActiveSpreadsheet();
  var data = csvChange(DriveApp.getFilesByName(folderSearch("2017csvDataForInsp")[0]).next());
  var vdata = [];
  var localRow = 0;
    for (var i = 0;i <= data.length - 1;i++){
      //if(data[i][26] ==
　　   if ((data[i][4] == 42.0 || data[i][4] == 46.0 || data[i][4] == 47.0 || data[i][4] == 48.0) ) {  //条件分岐     
       //ap区分,aq納入日,az営業担当->>追加
        vdata[localRow] = new Array();//２次元配列化
        vdata[localRow].push(data[i][13]);//a
        vdata[localRow].push(data[i][0]);//b
        vdata[localRow].push(data[i][8]);//c
        vdata[localRow].push(data[i][5]);//d
        vdata[localRow].push(data[i][44]);//e
        vdata[localRow].push(data[i][46]);//f
        vdata[localRow].push(data[i][41]);//g
        vdata[localRow].push(data[i][42]);//h
        vdata[localRow].push(data[i][51]);//i
        vdata[localRow].push("");//j
        vdata[localRow].push(data[i][26]);//K
        localRow++
       }//if
      }//i
       var rowLen = vdata.length;
    var colLen = vdata[localRow-1].length;
    sp.getSheets()[0].getRange(2, 1,rowLen ,colLen ).setValues(vdata);
    sp.getSheets()[0].sort(1);
    sp.getSheets()[0].getDataRange().setBorder(true, true, true, true, true, true);
    
    }  

