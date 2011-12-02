/**
 * Blinker de un elemento cambiando su imagen de bg.
 *  
 * @return
 */
function BgBlinker() {
	/* Elemento cuyo bg se cambia */
	this.ele = null;
	/* Array con las urls a las imágenes de bg. La 0 es la de defecto */
	this.bgImages = new Array();
	/* Intervalo del blinking (en ms) */
	this.timeout = 300;
	/* Interno: es el índice de bgImages[] que se está mostrando */  
	this.indCurrImg = 0;
	/* Interno: timer */
	this.idTimer = null; 
}

BgBlinker.prototype.setEle = function(ele) {
	this.ele = YAHOO.util.Dom.get(ele);
}

BgBlinker.prototype.setTimeout = function(timeout) {
	this.timeout = timeout;
}

BgBlinker.prototype.addBgImage = function(img) {
	this.bgImages.push(img);
}

BgBlinker.prototype.render = function() {
}

/**
 * Empieza el parapadero
 * @return
 */
BgBlinker.prototype.start = function()  {
	if ( this.idTimer!=null ) return;
	
	var myself = this;
	
	function doBlink() {
		// Obtenemos la imagen de bg que toca ahora
		++myself.indCurrImg;
		if ( myself.indCurrImg>= myself.bgImages.length ) {
			myself.indCurrImg=0;
		}
		YAHOO.util.Dom.setStyle(myself.ele, "backgroundImage", myself.bgImages[myself.indCurrImg]);
		//alert("Nuevo BG : " + myself.bgImages[myself.indCurrImg]);
		//myself.ele.style.backgroundImage = myself.bgImages[myself.indCurrImg];
	}
	doBlink();
	this.idTimer = setInterval(doBlink, this.timeout);
	
}

/**
 * Finaliza el parapadero
 * @return
 */
BgBlinker.prototype.stop = function()  {
	if ( this.idTimer ) {
		clearInterval(this.idTimer);
		this.idTimer=null;
	}
	YAHOO.util.Dom.setStyle(this.ele, "backgroundImage", this.bgImages[0]);
	//this.ele.style.backgroundImage = this.bgImages[this.indCurrImg];
}