
function FooterBar() {
    return (
        <div>
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
                <h3>Contributors</h3>
                <p><b>Robert Doroghazi: </b><a href="https://github.com/robertd90">github.com/RobertD90</a></p>
                <p><b>Kevin Anderson: </b><a href="https://github.com/ksacamera">github.com/ksacamera</a></p>
                <p><b>James Gauvreau: </b><a href="https://github.com/JamesGauvreau">github.com/JamesGauvreau</a></p>
                <p><b>Loulian Liu: </b><a href="https://github.com/loulian444">github.com/loulian444</a></p>                
            </div>
        </div>
    )
}

export default FooterBar

