/**
 * Escritorio, con iconos de aplicaciones y una barra de acceso rápido
 * Dispone de un div que captura todos los eventos
 */
function Desktop() {
    this.apps  = new Array();
}

/**
 * Registramos un icono y una aplicación asociada.
 */
Desktop.prototype.addApp = function(icono, app, blinker) {
    this.apps.push({icono:icono, app:app, blinker:blinker});
}

Desktop.prototype.render = function() {
    // Recorremos todas las apps registradas. 
    for (var ind=0; ind<this.apps.length; ++ind) {
        var icono = this.apps[ind].icono;
        var app = this.apps[ind].app;
        var blinker = this.apps[ind].blinker;
        
        // Hacemos clickable el icono...
        Util.showElementAsClickable(icono);	
        
        // ... y que al hacer click, se muestre la aplicación registrada
        YAHOO.util.Event.addListener(icono, "click",  function(event, info){
            var myApp = info.app;
            var myBlinker = info.blinker;
            if ( myBlinker!=null ) {
                myBlinker.stop();
            }
            myApp.show();	     
        }, {app:app,blinker:blinker});
    }
}

Desktop.prototype.show = function() {
}
