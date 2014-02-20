(function (elements, prefix, clazz, fetchURL, text) {
   var css = ".btc-button{-webkit-border-radius: 50px;-moz-border-radius: 50px;-ms-border-radius: 50px;-o-border-radius: 50px;border-radius: 50px;-webkit-box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.5), 0px 1px 2px rgba(0, 0, 0, 0.15);-moz-box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.5), 0px 1px 2px rgba(0, 0, 0, 0.15);box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.5), 0px 1px 2px rgba(0, 0, 0, 0.15);background-color: #eeeeee;background: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #fbfbfb), color-stop(100%, #e1e1e1));background: -webkit-linear-gradient(top, #fbfbfb, #e1e1e1);background: -moz-linear-gradient(top, #fbfbfb, #e1e1e1); background: -o-linear-gradient(top, #fbfbfb, #e1e1e1); background: linear-gradient(top, #fbfbfb, #e1e1e1);display: -moz-inline-stack;display: inline-block;vertical-align: middle;*vertical-align: auto;zoom: 1;*display: inline;border: 1px solid #d4d4d4;height: 32px;line-height: 32px;padding: 0px 25.6px;font-weight: 300;font-size: 14px;font-family: 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;color: #666666;text-shadow: 0 1px 1px white;margin: 0;text-decoration: none;text-align: center;background: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #00b5e5), color-stop(100%, #008db2));background: -webkit-linear-gradient(top, #00b5e5, #008db2);background: -moz-linear-gradient(top, #00b5e5, #008db2);background: -o-linear-gradient(top, #00b5e5, #008db2);background: linear-gradient(top, #00b5e5, #008db2);background-color: #00a1cb;border-color: #007998;color: white;text-shadow: 0 -1px 1px rgba(0, 40, 50, 0.35)}.btc-button i{border-radius: 50px;background: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #8fcf00), color-stop(100%, #6b9c00));background: -webkit-linear-gradient(top, #8fcf00, #6b9c00);background: -moz-linear-gradient(top, #8fcf00, #6b9c00);background: -o-linear-gradient(top, #8fcf00, #6b9c00);background: linear-gradient(top, #8fcf00, #6b9c00);background-color: #7db500;border-color: #5a8200;color: white;text-shadow: 0 -1px 1px rgba(19, 28, 0, 0.35)}";
    var styleElement = document.createElement("style");
    styleElement.type = "text/css";
      if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText = css;
    } else {
        styleElement.appendChild(document.createTextNode(css));
    }
    document.getElementsByTagName("head")[0].appendChild(styleElement);
   

    var magic = function (button, address) {
        
        var r = new XMLHttpRequest(); 
            r.open("GET", fetchURL + address, true);
            r.onreadystatechange = function () {
        	    if (r.status != 200 || r.readyState != 4) return; 
                
                button.innerHTML += "<i> 已赏 " + (Math.round(r.responseText / 10000) / 10000) + " BTC</i>";
            };
            r.send();
        
        button.className += " " + clazz;
        button.innerHTML = text;
        
    };
    
    for(var i = elements.length - 1; i >= 0; i--) {
        if(elements[i].href.substring(0, prefix.length) === prefix) {
            magic(elements[i], elements[i].href.substring(prefix.length), text);
        }
    }
}(document.getElementsByTagName("a"), "bitcoin:", "btc-button", "https://blockchain.info/q/getreceivedbyaddress/", "打赏 "));
