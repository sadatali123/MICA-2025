$(function () {
  var headerHtml =
    "" +
    '<div class="header">' +
    '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />' +
    '    <header class="top">' +
    '       <div class="row">' +
    '           <div class="col">' +
    '					<div class="logoes">' +
    '						<img class="curaj-logo" src="images/common/icfai_logo.png" alt="icacie2017">' +
    "					</div>" +
    '					<div class="site-info">' +
    '             		<div id="siteShort"><b>MICA 2025</b></div>' +
    '             		<div id="siteName">International Conference on<br> Advanced Communications and Machine Intelligence</div>' +
    '             		<div id="siteDescribe">22th December - 24th December 2025, The ICFAI University, Tripura, India</div>' +
    "					</div>" +
    '					<div class="logoer">' +
    '						<img class="spinger-logo" src="images/common/spinger.png" alt="icacie2017">' +
    "					<div>" +
    "           </div>" +
    "        </div>" +
    "    </header>" +
    '    <div class="nav">' +
    '        <ul class="nav-list container">' +
    '            <li class="nav-item">' +
    '                <a href="index.html" title="MICA 2025">HOME</a>' +
    "            </li>" +
    '			  <li class="nav-div"><img src="images/common/vline.png" alt="|"></img></li>' +
    '            <li class="nav-item">' +
    '                <a  class="nav-drop">ABOUT</a>' +
    '                <ul class="nav-dropmenu">' +
    '                    <li><a href="about.html" title="Overview">Overview</a></li>' +
    '                    <li><a href="Kenote.html" title="Keynotes">Keynotes</a></li>' +
    '                    <li><a href="pastspeakers.html" title="Keynotes">Past Speakers</a></li>' +
    '                    <li><a href="commitee.html" title="Organizing Committee">Organizing Committee</a></li>' +
    // +'                    <li><a href="tpc" title="Technical Program Committee">Technical Program Committee</a></li>'
    "                </ul>" +
    "            </li>" +
    '					<li class="nav-div"><img src="images/common/vline.png" alt="|"></img></li>' +
    '            <li class="nav-item">' +
    '                <a  class="nav-drop">AUTHORS</a>' +
    '                <ul class="nav-dropmenu">' +
    '                    <li><a href="impt_dates.html" title="Important Dates">Important Dates</a></li>' +
    '                    <li><a href="registration.html" title="Registration">Registration</a></li>' +
    '                    <li><a href="agl.html" title="Author Guidelines">Author Guidelines</a></li>' +
    '                    <li><a href="awards.html" title="Awards">Awards</a></li>' +
    //        +'                    <li><a href="travel" title="Travel">Travel</a></li>'
    //        +'                    <li><a href="accommodation" title="Accommodation">Accommodation</a></li>'

    "                </ul>" +
    "            </li>" +
    '					<li class="nav-div"><img src="images/common/vline.png" alt="|"></img></li>' +
    '            <li class="nav-item">' +
    '                <a  class="nav-drop">PAPER</a>' +
    '                <ul class="nav-dropmenu">' +
    '                    <li><a href="cfp.html" title="Call for Papers">Call for Papers</a></li>' +
    '                    <li><a href="pap_submission.html" title="Submission">Submission</a></li>' +
    "                </ul>" +
    "            </li>" +
    '					<li class="nav-div"><img src="images/common/vline.png" alt="|"></img></li>' +
    '            <li class="nav-item">' +
    '                <a  class="nav-drop">REVIEWERS</a>' +
    '                <ul class="nav-dropmenu">' +
    '                    <li><a href="reviewers.html" title="Call for Reviewers">Call for Reviewers</a></li>' +
    //        +'                    <li><a href="rg" title="Reviewers Guideline">Reviewers Guideline</a></li>'
    //        +                   <li><a href="special" title="Sponsorship Program">Call for Special Sessions</a></li>
    "                </ul>" +
    "            </li>" +
    '				<li class="nav-div"><img src="images/common/vline.png" alt="|"></img></li>' +
    '            <li class="nav-item">' +
    '                <a  class="nav-drop">TRAVEL</a>' +
    '                <ul class="nav-dropmenu">' +
    '                    <li><a href="travel.html" title="Travel">Travel</a></li>' +
    '                    <li><a href="accommodation.html" title="Accommodation">Accommodation</a></li>' +
    "                </ul>" +
    "            </li>" +
    '				<li class="nav-div"><img src="images/common/vline.png" alt="|"></img></li>' +
    '				<li class="nav-item"><a href="sponsherships.html" title="Sponsorship">SPONSORSHIP</a></li>' +
    // +'				<li class="nav-div"><img src="images/common/vline.png" alt="|"></img></li>'
    //  +'				<li class="nav-item"><a href="specialses.html" title="Contact">SPECIAL SESSION</a></li>'

    // +'				<li class="nav-item"><a href="approval" title="Ministry Approval">MINISTRY APPROVAL</a></li>'

    '				<li class="nav-div"><img src="images/common/vline.png" alt="|"></img></li>' +
    '				<li class="nav-item"><a href="contact.html" title="Contact">CONTACT</a></li>' +
    "        </ul>" +
    "    </div>" +
    "</div>";

  $("body").prepend(headerHtml);
});
