/**
 * Base class for all the applications
 */
function AppWindow(eWindow) {
	// HTML element representing the application window
	this.eWindow = eWindow;
	// HTML element representing the window close
	this.eClose = null;
}

// --------------------------------------------------------------------- Setters
AppWindow.prototype.setClose = function(eClose) {
	this.eClose = YAHOO.util.Dom.get(eClose);
}

AppWindow.prototype.setWindow = function(eWindow) {
	this.eWindow = YAHOO.util.Dom.get(eWindow);
}

// -------------------------------------------------------------- Public Methods
/* Close the window when click close button */
AppWindow.prototype.render= function() {
	YAHOO.util.Event.addListener(this.eClose, "click",  function(event, myself){
		myself.hide();	     
	}, this);
}

/**
 * Shows the window
 * 
 * @return
 */
AppWindow.prototype.show = function() {
	Util.showEle(this.eWindow);
}

/**
 * Hide the window
 * 
 * @return
 */
AppWindow.prototype.hide= function() {
	Util.hideEle(this.eWindow);
}