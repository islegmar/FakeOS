function doWrite(myself) {
	myself.div.innerHTML = myself.div.innerHTML + myself.text.charAt(myself.current++);		
	if ( myself.current<myself.text.length ) {
		setTimeout(function() {doWrite(myself);},20);
	}
}

function TypeWriter() {
  this.div = null;
  this.text = null;
  this.current = 0;
  this.leftToPrint = 0;
  this.speed = 0;
  this.activo = false;
  
  var printChar = function() {
    this.div.innerHTML = this.div.innerHTML + this.text.charAt(this.current++);
    if ( !this.leftToPrint ) {
      --this.leftToPrint;
      setTimeout("this.printChar", this.speed);
    }
  } 
}

TypeWriter.prototype.setDiv = function(div) {
  this.div = YAHOO.util.Dom.get(div);
}

TypeWriter.prototype.setText = function(text) {
  this.text = text;
}

TypeWriter.prototype.setIsActivo = function(activo) {
	  this.activo = activo;
}

TypeWriter.prototype.isActivo = function() {
	  return this.activo;
}

TypeWriter.prototype.sleep = function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

TypeWriter.prototype.write = function() {
	if ( !this.activo ) return;
	
	var myself = this;
	setTimeout(function() {doWrite(myself);},20);
}

TypeWriter.prototype.writeOne = function() {
	if ( !this.activo ) return;
	
	this.div.innerHTML = this.div.innerHTML + this.text.charAt(this.current++);
}
