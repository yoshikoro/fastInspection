function inspectionManage() {
  var sp = SpreadsheetApp.getActiveSpreadsheet();
  var data = csvChange(DriveApp.getFilesByName(folderSearch("2017csvDataForInsp")[0]).next());
  var vdata = [];
  var localRow = 0;
    for (var i = 0;i <= data.length - 1;i++){
　　   if ((data[i][4] == 41.0 || data[i][4] == 42.0 || data[i][4] == 46.0 || data[i][4] == 47.0 || data[i][4] == 48.0 || data[i][4] == 50.0
       || data[i][4] == 54.0 || data[i][4] == 55.0 || data[i][4] == 66.0) ) {  //array >> 2Dim array     
        vdata[localRow] = new Array();//２次元配列化
        vdata[localRow].push(data[i][13]);//a
        vdata[localRow].push(data[i][0]);//b
        vdata[localRow].push(data[i][8]);//c
        vdata[localRow].push(data[i][5]);//d
        vdata[localRow].push(data[i][44]);//e
        vdata[localRow].push("");//f
        vdata[localRow].push("");//g
        vdata[localRow].push("");//h
        vdata[localRow].push("");//i
        vdata[localRow].push("");//j
        vdata[localRow].push(data[i][26]);//K
        vdata[localRow].push("");//L
        vdata[localRow].push(data[i][46]);//M
        localRow++
       }//if
      }//i
       var rowLen = vdata.length;
    var colLen = vdata[localRow-1].length;
    sp.getSheets()[0].getRange(2, 1,rowLen ,colLen ).setValues(vdata);
    
    }  

