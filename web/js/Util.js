function Util() {
}

Util.getEleByClassName = function(parent, className) {
	var lista = YAHOO.util.Dom.getElementsByClassName(className, null, parent);
    if ( lista.length!=1 ) {
        alert("Se han encontrado " + lista.length + " elementos con la clase '" + className + "'"); 
    } else {
        return lista[0];
    }
}

/**
 * Cuando nos movemos encima de un elemento, ponemos el icono de una mano, para
 * indicar que ese contenido el clickable
 */
Util.showElementAsClickable = function(ele) {
	YAHOO.util.Event.addListener(ele, "mouseover",function(e) {
   	 	e.target.style.cursor='pointer';
    });   
}

Util.resaltaImagen = function(img, escala) {
	if ( !escala ) escala = 1.2;
	
	YAHOO.util.Event.addListener(img , "mouseover",function(e, escala) {
		var img = e.target;
		
		var oldW = img.width;
		var oldH = img.height;
		// Vamos a calcular las nuevas dimensiones
		var newW = oldW * escala;
		var newH = oldH * escala;
		// ... y lo desplazamos
		var newTop = -(newH-oldH)/2;
		var newLeft = -(newW-oldW)/2;
		//alert("New margin-top : " + (-(newH-oldH)/2));
		YAHOO.util.Dom.setStyle(img,"margin-top" ,newTop+"px");
		YAHOO.util.Dom.setStyle(img,"margin-left",newLeft+"px");
		YAHOO.util.Dom.setStyle(img,"width" ,newW+"px");
		YAHOO.util.Dom.setStyle(img,"height",newH+"px");
		
	 	// Y venga, un sonidico :-)
		SOUND.play('beep');

	}, escala);
	YAHOO.util.Event.addListener(img , "mouseout",function(e, escala) {
		var img = e.target;
		var newW = img.width / escala;
		var newH = img.height / escala;

		// Lo desplazamos
		YAHOO.util.Dom.setStyle(img,"margin-top" ,0);
		YAHOO.util.Dom.setStyle(img,"margin-left",0);
		// Lo redimensionamos
		YAHOO.util.Dom.setStyle(img,"width" ,newW+"px");
		YAHOO.util.Dom.setStyle(img,"height",newH+"px");
		
		// La imagen se escala sola, proporcionalmente. Por eso no modificamos la altura ¿¿??
		//img.width = img.width / escala;
	}, escala);
}

Util.beepElemento = function(ele) {
	
	YAHOO.util.Event.addListener(ele, "mouseover",function(e) {
		SOUND.play('beep');
	}, null);
	
	YAHOO.util.Event.addListener(ele, "mouseout",function(e, escala) {
		SOUND.stop('beep');
	}, null);
}

Util.blink = function(eleName, tot, show) {
	  var ele = document.getElementById(eleName);
	  // Si no especificamos el total de veces, ponemos 10
	  if ( !tot ) tot=10;
	  
	  if ( show ) {
	    ele.style.visibility = "visible";
	  } else {
	    ele.style.visibility = "hidden";
	  }
	  show=!show;
	  --tot;
	  
	  if ( tot!=0 ) {
	    setTimeout(function() { Util.blink(eleName, tot, show) }, 300);
	  // Al salir, nos aseguramos de que siempre se vea  
	  } else {
	    ele.style.visibility = "visible";
	  }
}

Util.keepPreferencia = function(prefName, prefValue) {
	YAHOO.util.Connect.asyncRequest("POST", ACTIONS['keepUserPreferencia'], 
		{
			success: function(o) { },
      		failure: function(o) {  }
		}, "prefName=" + prefName + "&prefValue=" + prefValue);
}

Util.showEle = function(ele) {
	YAHOO.util.Dom.setStyle(ele,"display", "block");
}

Util.hideEle = function(ele) {
	YAHOO.util.Dom.setStyle(ele,"display", "none");
}