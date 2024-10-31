function intro() {

  var cmLogo = document.getElementById("cosMariaLogo").style;
  var cmBtn = document.getElementById("startBtn").style;
  var bdblur = document.getElementById("bdblur").style;

  cmBtn.pointerEvents = "none";

  setTimeout(() => {

    cmLogo.transition = "2.5s";
    cmLogo.transform = "translateY(25px) scale(1)";
    cmLogo.filter = "blur(0) drop-shadow(0 4px 8px #3d374c80)";
    cmLogo.opacity = "1";
    bdblur.transition = "2.5s"
    bdblur.backdropFilter = "blur(15px)"

    setTimeout(() => {

      cmLogo.transition = "1s";
      cmLogo.transform = "translateY(0) scale(1)";

      setTimeout(() => {

        cmBtn.transition = "1";
        cmBtn.transform = "translateY(0)";
        cmBtn.opacity = "1";
        cmBtn.pointerEvents = "initial";

      }, 0);

    }, 2500);

  }, 0);

}

function enterSite() {

  var cmBlock = document.getElementById("cosMariaIntro").style;

  cmBlock.transition = "2.5s";
  cmBlock.transform = "translateY(-105vh)";
  
  setTimeout(() => {

    cmBlock.display = "none";
    introduce();
    
  }, 2500);

}

function introduce() {

  var intro1 = document.getElementById("intro1").style;
  var intro2 = document.getElementById("intro2").style;
  var intro3 = document.getElementById("intro3").style;

  setTimeout(() => {
    
    intro1.transition = "1.5s";
    intro1.transform = "translateY(0)";
    intro1.opacity = "1";

    setTimeout(() => {
    
      intro2.transition = "1.5s";
      intro2.transform = "translateY(0)";
      intro2.opacity = "1";

      setTimeout(() => {
    
        intro3.transition = "1.5s";
        intro3.transform = "translateY(0)";
        intro3.opacity = "1";

        setTimeout(() => {
          
          intro1.pointerEvents = "initial";
          intro2.pointerEvents = "initial";
          intro3.pointerEvents = "initial";

        }, 0);
        
      }, 375);
      
    }, 375);

  }, 0);

}

function meetIncumbent() {

  var introHost = document.getElementById("introHost").style;
  var meetCosMarias = document.getElementById("meetCosMarias").style;

  var maria1 = document.getElementById("maria1").style;
  var maria2 = document.getElementById("maria2").style;
  var maria3 = document.getElementById("maria3").style;
  var maria4 = document.getElementById("maria4").style;
  var maria5 = document.getElementById("maria5").style;
  var maria6 = document.getElementById("maria6").style;

  meetCosMarias.pointerEvents = "none";
  meetCosMarias.opacity = "0";

  setTimeout(() => {
    
    document.body.scrollTop = 0;
    introHost.pointerEvents = "none";
    introHost.transition = "1.5s";
    introHost.opacity = "0";
    meetCosMarias.display = "block";

    setTimeout(() => {
      
      introHost.display = "none";

      setTimeout(() => {
        
        meetCosMarias.transition = "1.5s";
        meetCosMarias.opacity = "1";

        setTimeout(() => {
          
          maria1.opacity = "1";
          maria1.transform = "translateY(0)";

          setTimeout(() => {
          
            maria2.opacity = "1";
            maria2.transform = "translateY(0)";

            setTimeout(() => {
          
              maria3.opacity = "1";
              maria3.transform = "translateY(0)";

              setTimeout(() => {
          
                maria4.opacity = "1";
                maria4.transform = "translateY(0)";

                setTimeout(() => {
          
                  maria5.opacity = "1";
                  maria5.transform = "translateY(0)";

                  setTimeout(() => {
          
                    maria6.opacity = "1";
                    maria6.transform = "translateY(0)";

                    setTimeout(() => {

                      meetCosMarias.pointerEvents = "initial";
                      
                    }, 125);
                    
                  }, 125);
                  
                }, 125);
                
              }, 125);
              
            }, 125);
            
          }, 125);

        }, 1000);

      }, 0);

    }, 1500);

  }, 0);

}

function eventDetails() {

  var meetCosMarias = document.getElementById("meetCosMarias").style;
  var eventDeets = document.getElementById("eventDeets").style;
  var FAB = document.getElementById("FAB").style;

  eventDeets.pointerEvents = "none";
  eventDeets.opacity = "0";

  setTimeout(() => {
    
    document.body.scrollTop = 0;
    meetCosMarias.pointerEvents = "none";
    meetCosMarias.transition = "1.5s";
    meetCosMarias.opacity = "0";
    eventDeets.display = "block";

    setTimeout(() => {

      meetCosMarias.display = "none";

      setTimeout(() => {

        eventDeets.transition = "1.5s";
        eventDeets.opacity = "1";

        setTimeout(() => {

          eventDeets.pointerEvents = "initial";
          FAB.pointerEvents = "none";
          FAB.transition = "0.5s";
          FAB.opacity = "0";

          setTimeout(() => {

            FAB.display = "none";
            
          }, 500);
          
        }, 1000);
        
      }, 0);
      
    }, 1500);
    
  }, 0);

}