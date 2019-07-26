function convertFLO_BIGMAC() {
    var HttpClient = function() {
        this.get = function(aUrl, aCallback) {
            var anHttpRequest = new XMLHttpRequest();
            anHttpRequest.onreadystatechange = function() {
                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                    aCallback(anHttpRequest.responseText);
            }
            anHttpRequest.open("GET", aUrl, true);
            anHttpRequest.send(null);
        }
    }
    var theurl = 'https://api.coinmarketcap.com/v1/ticker/florincoin/';
    var client = new HttpClient();
    client.get(theurl, function(response) {
        var response1 = JSON.parse(response);
        var flo_price = response1[0].price_usd;
        var r_flo_price = Math.round(flo_price*10000)/10000;
        document.getElementById("flo-value").innerHTML = r_flo_price;
        if(r_flo_price>3.99){
        	document.getElementById("ans").innerHTML = 'YES';
        	document.getElementById('ans').style.color = 'green';
        }
        else{
        	document.getElementById("ans").innerHTML = 'NO';
        	document.getElementById('ans').style.color = 'red';
        }
        var mac_quantity = Math.round((3.99/r_flo_price)*100)/100;
        document.getElementById("bigmac").innerHTML = mac_quantity;
    });
}

window.onload = convertFLO_BIGMAC;