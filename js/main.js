/** 
 * TODOs:
 * 1. Request Address Poll for Large Request.
    * IP Request via: https://stackoverflow.com/questions/9802046
        * https://ip-api.io/json
        * https://ipapi.co/json
        * api_key/token REQUIRED
            * https://ipinfo.io/json?token=$TOKEN
            * https://ipgeolocation.abstractapi.com/v1/?api_key=YOUR_UNIQUE_API_KEY
            * https://api.kickfire.com/v1/ip2country?key=[YOUR-API-KEY-HERE]&ip=[IP-ADDRESS-HERE]
 * 
 * 2. Summerize JS Request Ways and Details.
 * 
 * 3. Is it possible to build a dispatcher with Serverless 
 * in lowest cost?
 * 
 * NOTE: await is only valid in async function 
 * via: https://stackoverflow.com/questions/49432579
 * 
 */

async function ip_via_country() {
    const request = await fetch("https://ipapi.co/json")
    const jsonResponse = await request.json()

    // console.log(jsonResponse.ip, jsonResponse.country_name)
    return jsonResponse.country_name;
}

async function jump_via_ip() {
    /**
     * NOTE:
     * Also point that we don't use async keyword on the function because
     *  we can simply returns the promise returned by myfunction
     */

    if( await ip_via_country() == "China") {
        /**
         * NOTE:
         * MUST await!!! need to wait myfunction all finish.
         */
        window.location.href = "https://www.bilibili.com/video/BV1GJ411x7h7"
    }else {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
}

// Call start
(async() => {
    // console.log('before start');
    await jump_via_ip();
    // console.log('after start');
})();
