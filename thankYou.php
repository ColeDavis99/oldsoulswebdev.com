<!DOCTYPE html><html>  <head>    <!-- Stylesheet-->    <link rel="stylesheet" href="CSS/index.min.css">    <!--  Font for the jumboText-->    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
    <meta name="viewport" content="width=device-width">    <meta charset="utf-8">

    <!-- The ever-holy JQuery. -->
    <script src="3rd_Party_Libraries/JQuery.js"></script>
    <!-- The libraries for using super dank scroll functionality and GSAP libraries (which is used for parallaxing images)-->
    <script src="3rd_Party_Libraries\ScrollMagic\ScrollMagic.min.js"></script>
    <script src="3rd_Party_Libraries\ScrollMagic\plugins\GSAP_Tweening.js"></script>
    <script src="3rd_Party_Libraries\ScrollMagic\plugins\animation.gsap.min.js"></script>
    <!--  Custom Logic Script-->
    <script src="SCRIPTS/main.js"></script>  </head>  <body>    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~ HEADER ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->    <div id="headerWrapper">      <header>        <button class="hamburger hamburger--elastic" type="button">          <span class="hamburger-box">            <span class="hamburger-inner"></span>          </span>        </button>        <img src="IMAGES/logo_2.png" id="logo">      </header>    </div>
    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~ NAVIGATION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
    <!--  Mobile Navigation-->    <nav class="slideOutUp" id="mobileNav">      <ul class="mobileNav">        <li style="padding-top: 42px;"><a  href="http://oldsoulswebdev.com">Home</a></li>      </ul>    </nav>
    <!--  Desktop Navigation -->    <nav id="desktopNav">      <a href="http://oldsoulswebdev.com">Home</a>    </nav>
    <!--~~~~~~~~~~~~~~~~~~~~~ MAIN (pretty much everything) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->

    <main role="main">      <!-- Pretty Parallax Intro-->      <div id="bcg-parallax">        <div id="bcg"></div>        <div id="content-wrapper">          <h1 id="jumboText">Thank You For Contacting Us</h1>          <h1 id="jumboText">We Will Get In Touch With You Shortly</h1>        </div>      </div><!--~~~~~~~~~~~~~~~~~~~~~   FOOTER   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->      <footer>        <h1 class="footerPhrase">Old Souls, New Ideas</h1><br>        <h2> Copyright 2017 &copy; Old Souls Website Development. All Rights Reserved. </h2><br>        <a href="http://oldsoulswebdev.com" class="backToTop">Back To Home</a>      </footer>    </main>  </body></html>