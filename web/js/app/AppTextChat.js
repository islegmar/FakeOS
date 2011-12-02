/**
 * App de video char 
 */
function AppTextChat(eWindow) {
	AppTextChat.superclass.constructor.call(this);
   	this.btnStartVideoChat = null;
    this.appVideoMail = null;
    this.appVideoChat = null;
    // TODO : No mola mucho tener aquí el Atm
    this.atm = null;
}

YAHOO.lang.extend(AppTextChat, AppWindow);

// --------------------------------------------------------------------- Setters
AppTextChat.prototype.setAppVideoMail = function(appVideoMail) {
    this.appVideoMail = appVideoMail;
}

AppTextChat.prototype.setAppVideoChat = function(btnStartVideoChat, appVideoChat) {
	this.btnStartVideoChat = YAHOO.util.Dom.get(btnStartVideoChat);
    this.appVideoChat = appVideoChat;
}

AppTextChat.prototype.setAtm  = function(atm) {
    this.atm = atm;
}

// ------------------------------------------------------------------- AppWindow
AppTextChat.prototype.render = function() {
	AppTextChat.superclass.render.call(this);
    
    // Click "Start Video Chat"
	if ( this.btnStartVideoChat ) {
		Util.showElementAsClickable(this.btnStartVideoChat);	
		YAHOO.util.Event.addListener(this.btnStartVideoChat, "click",  function(event, myself){
			if ( myself.appVideoChat ) {
				myself.appVideoChat.show();	     
			}
		}, this);
	}
}

AppTextChat.prototype.show  = function() {
	AppTextChat.superclass.show.call(this);

    // Cerramos el Video Mail
	if ( this.appVideoMail ) {
		this.appVideoMail.hide();
	}
    
    // La primera línea se ve al iniciar el TextChat
    if ( this.atm ) {
		this.atm.exec();
	}
}

AppTextChat.prototype.hide = function() {
	AppTextChat.superclass.hide.call(this);
}