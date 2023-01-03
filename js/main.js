async function ip_via_country() {
    const request = await fetch("https://ipapi.co/json")
    const jsonResponse = await request.json()
    // console.log(jsonResponse.ip, jsonResponse.country_name)
    return jsonResponse.country_name;
}

async function jump_via_ip() {
    if( await ip_via_country() == "China") {
        window.location.href = "https://www.bilibili.com/video/BV1GJ411x7h7"
    }else {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
}

(async() => { 
   await jump_via_ip(); 
})();
