   
	/* When the openFullscreen() function is executed, open the video in fullscreen.
	Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */
	function mgOpenFullscreen() {
      player = document.getElementById("mgPlayer");
	  if (player !== null && typeof(player) !== "undefined")
	  {
		if (player.requestFullscreen) {
			player.requestFullscreen();
		  } else if (player.webkitRequestFullscreen) { /* Safari */
			player.webkitRequestFullscreen();
		  } else if (player.msRequestFullscreen) { /* IE11 */
			player.msRequestFullscreen();
		  }	
	  }
	}

	function mgGoFullscreen() {
		player = document.getElementById("mgPlayer");
		if (player !== null && typeof(player) !== "undefined")
		{
			player.webkitRequestFullscreen();
			player.style.display="";
		}
		playerOverlay = document.getElementById("mgPlayerOverlay");
		if (playerOverlay !== null && typeof(playerOverlay) !== "undefined")
		{
		    playerOverlay.style.display="none";
		}
	}
	
	function mgFullscreenChanged() {
		if (document.webkitFullscreenElement == null) {
			mf = document.getElementById("main_frame");
			if (mf !== null && typeof(mf) !== "undefined")
			{
				mf.style.display="none";
			}		
		}
	}

	document.onwebkitfullscreenchange = mgFullscreenChanged;
	document.documentElement.onclick = mgGoFullscreen;
	document.onkeydown = mgGoFullscreen;
	var curimg = 0;    

	function mgNextImage() {
	  var imgfile = "../images/onair/digital_0" + curimg + ".jpg";
   	  curimg++;
	  if (curimg>=5)  curimg=0;
	  return imgfile;
	}
	
	function mgChangeImage() {
   	    playerImage = document.getElementById("mgPlayerImage");
		if (playerImage !== null && typeof(playerImage) !== "undefined")
		{		
		  playerImage.src = mgNextImage();
		}
		setTimeout(mgChangeImage, 2000);
	}
	
	function mgStartPlayer() {
        setTimeout(mgChangeImage, 1000);
	}
	
    mgStartPlayer();