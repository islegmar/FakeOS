/**
 * App de video char 
 */
function AppVideoMail(eWindow) {
	//AppVideoMail.superclass.constructor.call(this, eWindow); 
	AppVideoMail.superclass.constructor.call(this);
	
	// Botón REC
	this.btnRec = null;
	// Botón SEND
	this.btnSend = null;
	// Panel con la WebCam
	this.pWebCam = null;
	// Panel con el mensaje de SENDING....
	this.pSending = null;
	// Blinker Uploading
	this.blinkerUploading = null;
}

YAHOO.lang.extend(AppVideoMail, AppWindow);

// --------------------------------------------------------------------- Setters
AppVideoMail.prototype.setBtnRec = function(ele) {
	this.btnRec = YAHOO.util.Dom.get(ele);
}

AppVideoMail.prototype.setBtnSend = function(ele) {
	this.btnSend = YAHOO.util.Dom.get(ele);
}

AppVideoMail.prototype.setPanelWebcam = function(ele) {
	this.pWebCam = YAHOO.util.Dom.get(ele);
}

AppVideoMail.prototype.setPanelSending = function(ele) {
	this.pSending = YAHOO.util.Dom.get(ele);
}

/**
 * Configuramos los botones de REC y SEND
 * @return
 */
AppVideoMail.prototype.render = function() {
	AppVideoMail.superclass.render.call(this);
	
	// Blinker del botón REC
	if ( this.btnRec ) {
		var blinkerRec = new BgBlinker();
		blinkerRec.setEle(this.btnRec);
		blinkerRec.setTimeout(500);
		blinkerRec.addBgImage("url(img/rec.png)");
		blinkerRec.addBgImage("url(img/rec_2.png)");
		blinkerRec.render();
	}
	
	// Blinker del botón Uploading
	if ( this.pSending) {
		this.blinkerUploading = new BgBlinker();
		this.blinkerUploading.setEle(this.pSending);
		this.blinkerUploading.setTimeout(500);
		this.blinkerUploading.addBgImage("url(img/upload.png)");
		this.blinkerUploading.addBgImage("url(img/upload_2.png)");
		this.blinkerUploading.render();
	}
	
	// -------------------------------
	// BOTÓN REC
	// -------------------------------
	if ( this.btnRec ) {
		Util.showElementAsClickable(this.btnRec);
		YAHOO.util.Event.addListener(this.btnRec, "click",  function(event, myself){
			// El botón click parpadea
			blinkerRec.start();
			
			// Ocultamos el div con la imagen de Sending .... y mostramos la webcam
			Util.showEle(myself.pWebCam);
			Util.hideEle(myself.pSending);
		}, this);
	}
	
	// -------------------------------
	// BOTÓN SEND
	// -------------------------------
	if ( this.btnSend) {
		Util.showElementAsClickable(this.btnSend);
		YAHOO.util.Event.addListener(this.btnSend, "click",  function(event, myself){
			// Paramos el parpadeo
			blinkerRec.stop();
			
			// Ocultamos el div con la imagen de la webcam y mostramos el de Sending....
			Util.hideEle(myself.pWebCam);
			Util.showEle(myself.pSending);
			
			// Parpadea Uploading
			myself.blinkerUploading.start();
		}, this);
	}
}

AppVideoMail.prototype.hide = function() {
	AppVideoMail.superclass.hide.call(this);
	if ( this.blinkerUploading ) this.blinkerUploading.stop();	
	if ( this.pWebCam ) Util.showEle(this.pWebCam);
	if ( this.pSending ) Util.hideEle(this.pSending);
}