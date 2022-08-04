function onEdit() {

    var guiaAtiva = SpreadsheetApp.getActive().getSheetName();
    
    if(guiaAtiva == "Página1"){
    
      var guia = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Página1");
    
      var linha = guia. getActiveCell().getRow();
      var coluna = guia. getActiveCell().getColumn();
    
      if(coluna == 2){
          if(linha > 2){
                var produto = guia.getRange(linha,2).getValue();
    
                if(produto != ""){
    
                  var hora = Utilities.formatDate(new Date(), Session.getScriptTimeZone(),"hh:mm:ss a");
                  var data = Utilities.formatDate(new Date(), Session.getScriptTimeZone(),"dd/MM/yyyy");
                  guia.getRange(linha,5).setValue(data);
                  guia.getRange(linha,6).setValue(hora);
    
                }
    
                if(produto == ""){
                  guia.getRange(linha,5).setValue("");
                  guia.getRange(linha,6).setValue("");
    
                }
          }
      }
    }
    }