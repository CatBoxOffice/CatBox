import githubThumbnail from "../images/githubThumbnail.png";
import linkedinThumbnail from "../images/linkedinThumbnail.png";

function FooterBar() {
  return (
    <>
      <div className="spacer"></div>
      <div id="footerbar">
        <div id="copyright" align="center">
          &copy; 2023 - 2023 www.catboxoffice.com
        </div>
        {/* <script>
                (function(){
                    let cpr = document.getElementById("copyright");
                    cpr.innerHTML = "&copy; 2023 - "+new Date().getFullYear()+" www.catboxoffice.com - All Rights Reserved.";
                    cpr.innerHTML += "<br/>Last Updated : "+document.lastModified;
                })();
            </script> */}
        <div id="gitLinks">
          <div>
            <p>Robert Doroghazi: </p>
            <a href="https://github.com/robertd90" target="_blank">
              <img src={githubThumbnail} className="footerThumbnail" />
            </a>
            <a href="https://www.linkedin.com/in/loulianliu/" target="_blank">
              <img src={linkedinThumbnail} className="footerThumbnail" />
            </a>
          </div>
          <div>
            <p>Kevin Anderson: </p>
            <a href="https://github.com/ksacamera" target="_blank">
              <img src={githubThumbnail} className="footerThumbnail" />
            </a>
            <a href="https://www.linkedin.com/in/loulianliu/" target="_blank">
              <img src={linkedinThumbnail} className="footerThumbnail" />
            </a>
          </div>
          <div>
            <p>James Gauvreau: </p>
            <a href="https://github.com/JamesGauvreau" target="_blank">
              <img src={githubThumbnail} className="footerThumbnail" />
            </a>
            <a href="https://www.linkedin.com/in/loulianliu/" target="_blank">
              <img src={linkedinThumbnail} className="footerThumbnail" />
            </a>
          </div>
          <div>
            <p>Loulian Liu: </p>
            <a href="https://github.com/loulian444" target="_blank">
              <img src={githubThumbnail} className="footerThumbnail" />
            </a>
            <a href="https://www.linkedin.com/in/loulianliu/" target="_blank">
              <img src={linkedinThumbnail} className="footerThumbnail" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterBar;
