(()=>{const t="s-cfp-app-v2",a="d-cfp-app-v2",e=["/index.html","/game","/leaderboard","/login","/signup","/forum"];self.addEventListener("install",(async a=>{console.log(a,"install");const c=await caches.open(t);await c.addAll(e)})),self.addEventListener("activate",(async a=>{console.log(a,"activate");const e=await caches.keys();await Promise.all(e.filter((a=>a!==t)).map((t=>caches.delete(t))))})),self.addEventListener("fetch",(t=>{console.log("fetch1",t.request.url);const{request:e}=t;new URL(e.url).origin===location.origin?t.respondWith(async function(t){return await caches.match(t)??fetch(t)}(e)):t.respondWith(async function(t){const e=await caches.open(a);try{const a=await fetch(t);return await e.put(t,a.clone()).catch((()=>{})),a}catch(a){const c=await e.match(t);if(c)return c;throw a}}(e))}))})();
//# sourceMappingURL=sw.js.map