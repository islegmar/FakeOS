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
	// TextChat
	var appTextChat = new AppTextChat();
	appTextChat.setWindow("chat");
	appTextChat.setClose("x_chat");
	appTextChat.render();
	desktop.addApp("iconChat" , appTextChat);
	
	// -----------------------------------------------------
	// STEP 3.
	// Render the desktop
	// -----------------------------------------------------
    desktop.render();
    desktop.show();

	// -----------------------------------------------------
	// STEP 4.
	// Configure the Automata (automatic actions)
	// -----------------------------------------------------
	// Configure a TypeWriter
    var typeWriter = new TypeWriter();
	typeWriter.setDiv("chatArea");
	typeWriter.setText("En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.");

	var atm = new Atm();
    atm.addLine(new AtmLineShowApp(appTextChat));
    atm.addLine(new AtmLineAutoStartTypeWriter(typeWriter));
    /*
    atm.addLine(new AtmLineShowDiv("step1", "ei, tu, estàs connectat o què? Va, posa la cam"));
    atm.addLine(new AtmLineShowDiv("step2", "No et sento, no et sento!!!"));
	atm.addLine(new AtmLineShowDiv("step3", "La connexió  espanyola és una PUTA MERDA!"));
	*/
    
	// Capture the keyboard
	var capturador = new Capturador();
    capturador.setAtm(atm);
    capturador.setTypeWriter(typeWriter);
    capturador.render();

    /*
    // Blinker delk botón "iconoTextChat"
    /*
	var bgBlinkerIconoTextChat = new BgBlinker();
	bgBlinkerIconoTextChat.setEle("bot_chat");
	bgBlinkerIconoTextChat.setTimeout(500);
	bgBlinkerIconoTextChat.addBgImage("url(img/icon_chat_2.png)");
	bgBlinkerIconoTextChat.addBgImage("url(img/icon_chat_1.png)");
	bgBlinkerIconoTextChat.render();
	

	// Automata
	// Here we set the automatic actions performed by the system 
	

	
	
	
	

    
	// VideoChat
	var appVideoChat = new AppVideoChat();
	appVideoChat.setWindow("videochat");
	appVideoChat.setClose("x_videochat");
	appVideoChat.render();
	appVideoChat.hide();
	*/
});

