self.addEventListener("install", e=>{
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll(["./", "./img/logo192.png"]);
        })
    );
});

self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request);
        })
    )
});

self.addEventListener("push",(event)=>{
    event.waitUntil(
        self.registration.showNotification('Sieeema',{
            body:"kurde faja ale jaja",
            icon: "img/logo192.png",
        })
    );
});