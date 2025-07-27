$(function () {
  var rightHtml =
    "" +
    '<div class="right">' +
    '  <div class="right-box">' +
    '      <div class="_container">' +
    '          <p id="countdown"></p>' +
    "      </div>" +
    '      <div class="dcontainer">' +
    '          <p id="cdtext"></p>' +
    "      </div>" +
    '      <div class="icontainer">' +
    '          <p style="color: red; font-weight: bold;">MICA 2025</p>' + // Style the text here
    "      </div>" +
    "  </div>" +
    '  <div class="right-box">' +
    '      <div class="right-heading">' +
    "          IMPORTANT DATES" +
    '          <img src="images/common/hl.png" style="margin-top:2px; width: 100%; height: 7px">' +
    '          <div class="title1">Paper Submission:</div>' +
    '          <div class="date" style="color: blue;">20th August 2025</div>' + // Style the text here
    // +'          <div class="date_small">[HARD DEADLINE]</div><br>'
    '          <div class="title1">Acceptance notification:</div>' +
    '          <div class="date" style="color: blue;">30th September 2025</div><br>' +
    '          <div class="title1">Author Registration: </div>' +
    '          <div class="date" style="color: blue;">5th October 2025</div>' +
    '          <div class="title1">Deadline for final papers:</div>' +
    '          <div class="date" style="color: blue;">15th October 2025</div><br>' +
    '          <div class="title1">Conference Dates</div>' +
    '          <div class="date" style="color: blue;"> 22th - 24th December 2025</div><br>' +
    '          <div class="title1">Conference Place:</div>' +
    '          <div class="date" style="color: blue;">ICFAI University Tripura</div><br>' +
    "      </div>" +
    "  </div>" +
    '  <div class="right-box">' +
    '      <div class="right-heading">' +
    "          NEWS &amp; UPDATES" +
    '          <img src="images/common/hl.png" style="margin-top:2px; width: 100%; height: 7px">' +
    '          <ul class="conferences">' +
    "              <li><br>" +
    '          <div class="date" style="color: blue;"><a href="pdfs/MICA2025.pdf">Call for papers</a></div><br>' +
    "              </li>" +
    "          </ul>" +
    "      </div>" +
    "  </div>" +
    '  <div class="right-box">' +
    '      <div class="right-heading">' +
    "          CONFERENCE MANAGEMENT" +
    '          <img src="images/common/hl.png" style="margin-top:2px; width: 100%; height: 7px">' +
    '          <div class="title1"></div><br>' +
    '                    <div class="support"> <br>' +
    '              <center><img src="images/common/logov.png" style="width:40%;" alt="Springer"></center>' +
    "          </div>" +
    "      </div>" +
    "  </div>" +
    '  <div class="right-box">' +
    '      <div class="right-heading">' +
    "          PUBLICATION PARTNERS" +
    '          <img src="images/common/hl.png" style="margin-top:2px; width: 100%; height: 7px">' +
    '          <div class="support"> <br>' +
    '              <img src="images/common/Springer.jpg" style="width:100%" alt="Springer">' +
    "          </div>" +
    "      </div>" +
    "  </div>" +
    '  <div class="right-box">' +
    '      <div class="right-heading">' +
    "          PREVIOUS CONFERENCE" +
    '          <img src="images/common/hl.png" style="margin-top:2px; width: 100%; height: 7px">' +
    '          <ul class="conferences">' +
    "              <li><br>" +
    '          <div class="date" style="color: blue;"><a href="/pdfs/MICA2024.pdf">MICA 2024</div><br>' +
    '          <div class="date" style="color: blue;"><a href="/pdfs/MICA2023.pdf">MICA 2023</a></div><br>' +
    '          <div class="date" style="color: blue;"><a href="/pdfs/MICA2022.pdf">MICA 2022</div><br>' +
    "              </li>" +
    "          </ul>" +
    "      </div>" +
    "  </div>" +
    '  <div class="right-box">' +
    '      <div class="right-heading">' +
    "          SPONSORS" +
    '          <img src="images/common/hl.png" style="margin-top:2px; width: 100%; height: 7px">' +
    '          <div class="title1"></div><br>' +
    '                    <div class="support"> <br>' +
    '              <center><img src="images/gallery/MITSQUARE.jpg" style="width:60%;" alt="Springer"></center>' +
    "          </div><br>" +
    "  </div>" +
    "</div>";

  $(".main > .container").append(rightHtml);
});

var targetDate = new Date("December 25, 2025 00:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = targetDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    "📅 " +
    days +
    " Days | " +
    hours +
    " H | " +
    minutes +
    " M | " +
    seconds +
    " S";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "🎉 EXPIRED 🎉";
  }
}, 1000);
