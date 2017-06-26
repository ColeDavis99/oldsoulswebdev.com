<!DOCTYPE html>
<html>
  <head>
    <title>Old Souls Website Developers - Serving Businesses near Springfield, Mo.</title>
    <!-- Stylesheet-->
    <link rel="stylesheet" href="CSS/index.min.css">
    <!-- Animate.css-->
    <link rel="stylesheet" href="3rd_Party_Libraries/animate.css">

    <!-- The ever-holy JQuery. -->
    <script src="3rd_Party_Libraries/JQuery.js"></script>
    <!-- The libraries for using super dank scroll functionality and GSAP libraries (which is used for parallaxing images)-->
    <script src="3rd_Party_Libraries\ScrollMagic\ScrollMagic.min.js"></script>
    <script src="3rd_Party_Libraries\ScrollMagic\plugins\GSAP_Tweening.js"></script>
    <script src="3rd_Party_Libraries\ScrollMagic\plugins\animation.gsap.min.js"></script>
    <!--  Custom Logic Script-->
    <script src="SCRIPTS/main.js"></script>



    <!-- Font for the category introductions-->
    <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
    <!--  Font for the jumboText-->
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
    <!--  Name Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Oregano" rel="stylesheet">
    <!--  Radical Font -->
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
    <!--  Improves SEO-->
    <meta name="description" content="Professional web developers serving businesses near Springfield, Mo.">
    <!--  Responsive Design-->
    <meta name="viewport" content="width=device-width">
    <!--  Character Encoding -->
    <meta charset="utf-8">

  </head>
  <body>
    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~ HEADER ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
    <div id="headerWrapper">
      <header>
        <button class="hamburger hamburger--elastic" type="button">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
        <img src="IMAGES/logo_2.png" id="logo" alt="A broken image?!?! This is our logo though! This shouldn't be broken!">
      </header>
    </div>

    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~ NAVIGATION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
    <!--  Mobile Navigation-->
    <nav id="mobileNav">
      <ul class="mobileNav ">
        <li> <a  href="#bcg-parallax">    Home          </a></li>
        <li> <a  href="#pinned-trigger1"> Meet The Team </a></li>
        <li> <a  href="#pinned-trigger2"> Why Choose Us?</a></li>
        <li> <a  href="#portfolio">       Portfolio     </a></li>
        <li> <a  href="#pinned-trigger3"> Contact Us    </a></li>
      </ul>
    </nav>
    <!--  Desktop Navigation -->
    <nav id="desktopNav">
      <a href="#bcg-parallax">Home</a>
      <a href="#pinned-trigger1">Meet the Team</a>
      <a href="#pinned-trigger2">Why Choose Us?</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#pinned-trigger3">Contact Us</a>
    </nav>

    <!--~~~~~~~~~~~~~~~~~~~~~ MAIN (pretty much everything) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->

      <!-- Pretty Parallax Intro-->
      <div id="bcg-parallax">
        <div id="bcg"></div>
        <div id="content-wrapper">
          <h1 id="jumboText">Think&nbsp;of us&nbsp;as&nbsp;your personal online architects...</h1>
        </div>
      </div>



      <main role="main">
      <!-- This is for our Bio's about each of us. -->
      <section class="aboutUs" id="pinned-trigger1">
          <h1 class="introText"> Meet The Team</h1>
        <div id="about" class="about">

        <!-- Here are the different divs for each of us.-->
        <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ COLE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
          <div class="bio">
            <img src="IMAGES/Cole.jpg" alt="Cole Davis" class="mugshot">
            <h1 class="name" style="font-family: 'Oregano', cursive;">Cole&nbsp;Davis</h1>
            <div class= "desc cole">
              <p>
                <span class="subject">
                  Hobbies:
                </span>
                Just recently, I discovered within myself a love
                for mountain biking. I also enjoy tooting my
                tenor sax, tinkering with robotics, and the occasional paintball game.

                <span class="subject">
                  Interesting Skills:
                </span>
                I can juggle 3 of almost any object you give me, except cylinders. I can't juggle
                cylinders yet.

                <span class="subject">
                  Favorite Quote:
                </span>
                "Whenever you find yourself on the side of the majority, it
                 is time to pause and reflect." -Mark Twain
              </p>
            </div>
            <img src="IMAGES/bioArrow.png" class="bioArrow">
          </div>

          <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ZACH ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
          <div class="bio">
            <img src="IMAGES/Zach.jpg" alt="Zach Bingham" class="mugshot">
            <h1 class="name" style="font-family: 'Oregano', cursive;">Zach&nbsp;Bingham</h1>
            <div class= "desc  zach">
              <p>
                <span class="subject">
                  Hobbies:
                </span>
                   I enjoy playing video games, reading books,
                    writing/drawing, and learning. Knowledge fuels my day to day life.
                <span class="subject">
                  Interesting Skills:
                </span>
                  Writing short stories and poetry

                <span class="subject">
                  Favorite Quote:
                </span>
                "Genius is one percent inspiration and ninety-nine percent
                perspiration." -Thomas Edison
              </p>
            </div>
            <img src="IMAGES/bioArrow.png" class="bioArrow">
          </div>

          <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~ lARRY ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
          <div class="bio">
            <img src="IMAGES/Larry.jpg" alt="Larry Fry III" class="mugshot">
            <h1 class="name" style="font-family: 'Oregano', cursive;">Larry&nbsp;Fry&nbsp;III</h1>
            <div class= "desc larry">
              <p>
                <span class="subject">
                  Hobbies:
                </span>
                I play guitar off and on and enjoy playing video games.
                I have a decently large record collection and am constanly hunting for more.
                 I love to code and am ready to find the next best thing technology wise.

                <span class="subject">
                  Interesting Skills:
                </span>
                I practice calligraphy using fountian pens and can spin rope tops pretty well.

                <span class="subject">
                  Favorite Quote:
                </span>
                "Time you enjoyed wasting, was not wasted." -John Lennon
              </p>
            </div>
            <img src="IMAGES/bioArrow.png" class="bioArrow">
          </div>
      </section>

      <!--  Here is the Why Us? section. -->
      <section class="why" id="pinned-trigger2">

        <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ WHY CHOOSE US SECTION  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
        <h1 class="introText">Why Choose Us?</h1>

        <div class="reason-wrapper2" id="fade-left1">
          <img src="IMAGES/ruler.png" id="ruler" alt="A broken image?!?! Someone is getting fired.">
          <h2 class="reason-subject">Personalied Websites</h2>
          <div class="reason-left">
            <ul>
              <li>
                <h3 class="reason-text">- Your website deserves to have an original and creative look</h3>
              </li>
              <li>
                <h3 class="reason-text">- No cookie cutter presets</h3>
              </li>
              <li>
                <h3 class="reason-text">- Personal customization</h3>
              </li>
            </ul>
          </div>
        </div>


          <div class="reason-wrapper2" id="fade-right">
            <img src="IMAGES/phone.png" id="phone" alt="A broken image?!?! Someone is getting fired.">
            <h2 class="reason-subject">Exceptional Customer Service</h2>
            <div class="reason-right">
              <!-- <h3 class="reason-text">Have any burning questions that need answering? Want to make a design change? Need some design advice?</h3> -->
              <ul>
                <li>
                  <h3 class="reason-text">- Clear and simple&nbsp;communication</h3>
                </li>
                <li>
                  <h3 class="reason-text"> - Personal customer support </h3>
                </li>
                <li>
                  <h3 class="reason-text">- You are the boss</h3>
                </li>
              </ul>
            </div>
          </div>

          <div class="reason-wrapper2" id="fade-left2">
            <img src="IMAGES/rose.png" id="rose" alt="A broken image?!?! Someone is getting fired.">
            <h2 class="reason-subject">Reasonable Prices, Beautiful Results</h2>
            <div class="reason-left">
              <ul>
                <li>
                  <h3 class="reason-text">- The website of your dreams, without breaking the bank</h3>
                </li>
                <li>
                  <h3 class="reason-text">- Yet even with our prices, you don't have to sacrifice quality</h3>
                </li>
                <li>
                  <h3 class="reason-text">- Everyone on our team is a certified Website Developer</h3>
                </li>
              </ul>
            </div>
          </div>
      </section>

      <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PORTFOLIO SECTION  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <section class="portfolio" id="portfolio">
        <h1 class="introText">Portfolio</h1>
        <h3>Oh yeah... we just launched our company.</h3>
        <h3> We don't have any clients yet.</h3>
        <h3>That means you could be first!</h3>

        <br>
        <h3>Let's make a breathtaking site together!</h3>
        <br><br>
      </section>

      <!-- ~~~~~~~~~~~~~~~~~~~~~~~ CONTACT US SECTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~- -->
      <section class="contact" id="pinned-trigger3">
        <h1 class="introText" style="padding-bottom: 0;">Contact Us</h1>
        <p id="dontBite">(we don't bite)</p>
        <form action="form-to-email.php" method="post" enctype="text/plain">

        <!--  Name and Email and Phone-->
          <h2>Name<span>*</span></h2>
          <input id="formName" type="text" name="name" required>

          <h2 class="formGutters">Email<span>*</span></h2>
          <input id="formEmail" type="email" name="email" required>

          <h2 class="formGutters">Phone<span>*</span></h2>
          <input id="formPhone" type="number" name="phone" placeholder="417-867-5309" onfocus="this.placeholder = ''" onblur="this.placeholder = '417-867-5309'"required>


        <!--  How they heard of us-->
        <!-- <div id="radioWrapper_1">
          <h2 id="howYouHear">How Did You Hear About Us?</h2>
          <div id="radioWrapper_2">
            <label id="mouth" class="radioText">
              <input id="mouth" type="radio" name="type" value="Word Of Mouth">
              Word Of Mouth
            </label><br>

            <label id="google" class="radioText">
              <input id="google" type="radio" name="type" value="Googling for Web Devs">
              Online Research
            </label><br>

            <label id="inPerson" class="radioText">
              <input id="inPerson" type="radio" name="type" value="Contacted By Us">
              Contacted In Person
            </label><br>

            <label id="other" class="radioText">
              <input id="other" type="radio" name="type" value="other">
              Other
              <input id="other" type="text" name="type" placeholder="E.g. Messenger Pigeon"value="">
            </label><br>
          </div>
        </div> -->

        <!--  Their Message -->
          <h2 class="formGutters">Comment/Request:</h2>
          <textarea id="formComment" name="paragraph" cols="60" rows="7"></textarea><br>

          <input id="formSubmit" type="submit" value="Submit">
        </form>
      </section>

      <!-- ~~~~~~~~~~~~~~~~~~~~~~~  FOOTER ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~- -->
      <footer>
        <h1 class="footerPhrase">Old Souls, New Ideas</h1><br>
        <h2> Copyright 2017 &copy; Old Souls Website Development. All Rights Reserved. </h2><br>
        <a href="#bcg-parallax" class="backToTop">Back to Top</a>
      </footer>

    </main>
  </body>
</html>
