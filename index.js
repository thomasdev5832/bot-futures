require("dotenv").config();
const { default: axios } = require("axios");
const WebSocket = require("ws");

const ws = new WebSocket(process.env.STREAM_URL + "btcusdt@bookTicker");

//let isOpened = false;

ws.onmessage = async (event) => {
    const obj = JSON.parse(event.data);
    console.log("Symbol: " + obj.s);
    console.log("Price: " + obj.a);

    /*
    const price = parseFloat(obj.a);
        // && !isOpened
     if(price < 19430 ){
        consolde.log("Buy");
        //newOrder("BTCUSDT", "0.001", "BUY");
        //isOpened = true;
    }
    // && isOpened
    else if(price > 19440 ){
        console.log("Sell");
       //newOrder("BTCUSDT", "0.001", "SELL");
        //isOpened = false;
    } */
    

}

/*
async function newOrder(symbol, quantity, side){
    const data = { symbol, quantity, side };
    data.type = "MARKET";
    data.timestamp = Date.now();
    const signature = crypto
        .createHmac("sha256", process.env.SECRET_KEY)
        .update(new URLSearchParams(data).toString())
        .digest("hex");
    data.signature = signature;

    const result = await axios({
        method: "POST",
        url: process.env.API_URL + "/v3/order?" + new URLSearchParams(data),
        headers: { "X-MBX-APIKEY": process.env.API_KEY } 
    })
    console.log(result.data);
} 
*/