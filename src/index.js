if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration =>{
        console.log(registration)
    }).catch(error =>{
        console.log("SW registration failed");
        console.log(error);
    });
    
}