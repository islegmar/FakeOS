/**
 * Main
 */
// Startup
YAHOO.util.Event.onDOMReady( function() {
	// -----------------------------------------------------
	// STEP 1.
	// Create the Desktop where we will place the applications
	// -----------------------------------------------------
    var desktop = new Desktop();

	// -----------------------------------------------------
	// STEP 2.
	// Create the applications, configure them and add them 
    // to the Desktop
	// -----------------------------------------------------
    
	// VideoMail
    var appVideoMail = new AppVideoMail();
	appVideoMail.setWindow("videomail");
	appVideoMail.setClose("x_videomail");
	/*
	appVideoMail.setBtnRec("btnRec");
	appVideoMail.setBtnSend("btnSend");
	appVideoMail.setPanelWebcam("webCam");
	appVideoMail.setPanelSending("sending");	
	*/
	appVideoMail.render();
    desktop.addApp("iconVideomail", appVideoMail);

	// TextChat
	var appTextChat = new AppTextChat();
	appTextChat.setWindow("chat");
	appTextChat.setClose("x_chat");
	/*
    appTextChat.setAppVideoChat("apDiv1", appVideoChat);
    appTextChat.setAppVideoMail(appVideoMail);
    appTextChat.setAtm(atm);
	*/
	appTextChat.render();
    //desktop.addApp("bot_chat" , appTextChat, bgBlinkerIconoTextChat);
	desktop.addApp("iconChat" , appTextChat);
	
	// -----------------------------------------------------
	// STEP 3.
	// Render the desktop
	// -----------------------------------------------------
    desktop.render();
    desktop.show();

    /*
    // Blinker delk botón "iconoTextChat"
    /*
	var bgBlinkerIconoTextChat = new BgBlinker();
	bgBlinkerIconoTextChat.setEle("bot_chat");
	bgBlinkerIconoTextChat.setTimeout(500);
	bgBlinkerIconoTextChat.addBgImage("url(img/icon_chat_2.png)");
	bgBlinkerIconoTextChat.addBgImage("url(img/icon_chat_1.png)");
	bgBlinkerIconoTextChat.render();
	
	// TypeWriter (para la TextArea)
	var typeWriter = new TypeWriter();
	typeWriter.setDiv("text_type");
	typeWriter.setText("No et sento, no et sento!!!");
	// Automata
	// Here we set the automatic actions performed by the system 
	

	
    var atm = new Atm();
    atm.addLine(new AtmLineBlinker(bgBlinkerIconoTextChat));
    atm.addLine(new AtmLineShowDiv("step1", "ei, tu, estàs connectat o què? Va, posa la cam"));
    atm.addLine(new AtmLineAutoStartTypeWriter(typeWriter));
    atm.addLine(new AtmLineShowDiv("step2", "No et sento, no et sento!!!"));
	atm.addLine(new AtmLineShowDiv("step3", "La connexió  espanyola és una PUTA MERDA!"));
	
	
    // Capturador
    var capturador = new Capturador();
    capturador.setAtm(atm);
    capturador.setTypeWriter(typeWriter);
    capturador.render();
	

    
	// VideoChat
	var appVideoChat = new AppVideoChat();
	appVideoChat.setWindow("videochat");
	appVideoChat.setClose("x_videochat");
	appVideoChat.render();
	appVideoChat.hide();
	*/
});

