/**
 * Captura todos los eventos
 */
function Capturador() {
	this.atm = null;
	this.typeWriter = null;
    //this.divCubreTodo = null;
}

Capturador.prototype.setAtm = function(atm) {
	this.atm = atm;
}

Capturador.prototype.setTypeWriter = function(typeWriter) {
	this.typeWriter = typeWriter;
}

Capturador.prototype.render = function() {
	var pWidget = this;
	
	// Montamos un div que lo cubra todo
    /*
	this.divCubreTodo = document.createElement("div");
	YAHOO.util.Dom.addClass(this.divCubreTodo, "cubreTodo");
	document.body.appendChild(this.divCubreTodo);
	*/
	// Capturamos el click
	YAHOO.util.Event.addListener(this.divCubreTodo, "click", function(evt) {
		pWidget.atm.exec(evt);
	});

	// Capturamos todas las teclas pulsadas y, al apretar algunas, ejecutamos una acción del autómata.
	document.onkeydown  = function(e)
	{
	  // V. http://www.cambiaresearch.com/c4/702b8cd1-e5b0-42e6-83ac-25f0306e3e25/Javascript-Char-Codes-Key-Codes.aspx 
	  // 13 : Enter
	  // 17 : Ctrl
	  // 40 : Mouse Down
	  //alert(e.keyCode);
	  if ( e.keyCode==13 ) {
	    pWidget.atm.exec(e);
	  // Sin otras teclas, las mostramos en le textarea (es un poco chapuzas pero....)   
	  } else {
		  if ( pWidget.typeWriter.isActivo() ) {
			  pWidget.typeWriter.writeOne();
		  }
	  }
	  return false;
	};
	
	// 
	// 13 : enter
	// 17 : ctrl
	/*
	var key = new YAHOO.util.KeyListener(
					document,
					{ keys:[13,16, 17, 18, 40 ] },
					{fn    : function(evt) {
								pWidget.atm.exec(evt);
								alert(evt);
							 },
					 scope : divCubreTodo
					}
				);
	key.enable();
	*/
}