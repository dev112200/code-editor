function run(){
    let htmlcode = document.getElementById("htmlcode").value;
    let csscode = document.getElementById("csscode").value;
    let jscode = document.getElementById("jscode").value;
    let output = document.getElementById("show");
    output.contentDocument.body.innerHTML = htmlcode;
    output.contentDocument.head.innerHTML = "<style>" + csscode + "</style>";
    output.contentWindow.eval(jscode);
    }