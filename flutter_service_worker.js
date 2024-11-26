'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b21c709d2ebd7d4fcbf60dc60f9347b7",
"assets/AssetManifest.bin.json": "7623dff0bd43bc1692ff05ba2bb34174",
"assets/AssetManifest.json": "1b5c2cd2282cc8306d5ea2b227083e17",
"assets/assets/Animations/characters/Bear.mov": "8d71a5dc54061140a2667723a4f661fa",
"assets/assets/Animations/characters/Deer.mov": "2d9da4f6d5d70339b782ac5aea0851d3",
"assets/assets/Animations/characters/Fox.mov": "ff5b567d05f13512b0f7636a737bf6b7",
"assets/assets/Animations/characters/Squirrel.mov": "c899938d54fe8e43190ff8476eac423f",
"assets/assets/Animations/characters/Worm.mov": "5791db36270ad6039a7d7e4c861128db",
"assets/assets/Animations/splashScreen/splashScreen.mp4": "225cd1ff8cbef5375615b52895db8058",
"assets/assets/fonts/IRANSansXNoEn-Medium.ttf": "c5d9cbdfa8402edfdaf23504ba772745",
"assets/assets/images/Characters/Bear.png": "e9dbbdf89a52c860186eea2470b36c6d",
"assets/assets/images/Characters/Deer.png": "6ebb88d4ccf87ad84398a3a14e2a10d5",
"assets/assets/images/Characters/Fox.png": "5a5ee5ba8c20a85af2ade7f596d8d665",
"assets/assets/images/Characters/Map/Bear-map.png": "5a92dbf975b942e531b0cb2364f2e702",
"assets/assets/images/Characters/Map/Deer-map.png": "04d4e5fb84ec3292b6762f4f3fe458db",
"assets/assets/images/Characters/Map/Fox-map.png": "484ddd382fa8271929a89e07b81990c9",
"assets/assets/images/Characters/Map/Squirrel-map.png": "be98e15a3896ba41bc9371dafdae8e54",
"assets/assets/images/Characters/Map/Worm-map.png": "82adb6c230500f150df5605d45664e74",
"assets/assets/images/Characters/Parrot.png": "62c2d74a7d7e564addb159a9fa1728af",
"assets/assets/images/Characters/Pin/Bear-pin.png": "4580279294e23188fcef2be4bc8047ad",
"assets/assets/images/Characters/Pin/Deer-pin.png": "8161a0d371cd922949e35c639263bb4c",
"assets/assets/images/Characters/Pin/Fox-pin.png": "879a54b8d9eec3202d0895eeb4816e71",
"assets/assets/images/Characters/Pin/Squirrel-pin.png": "57540dd2136ca2f944d3a1c8c9d6475e",
"assets/assets/images/Characters/Pin/Worm-pin.png": "0b3f7025e03cfb68c69ecc2c67f5b780",
"assets/assets/images/Characters/Squirrel.png": "63f342bc4deed242adf2e0e6fcca02d9",
"assets/assets/images/Characters/Worm.png": "28910b8fb1d02a94fb5ba52e517c3e3f",
"assets/assets/images/close.svg": "2d9e23c8239e012fefa863057fb6ef21",
"assets/assets/images/game10/backCover.png": "8333c22673740e2987a34d891fe153cb",
"assets/assets/images/game10/bookCoverImage.png": "53feef412c1b70c39a42a7d46b7798ee",
"assets/assets/images/game10/frontCover.png": "3f3f0183805a73707de06fd153390256",
"assets/assets/images/game10/quizButton.png": "95468d4a9c3efe47dd009228fdd11b09",
"assets/assets/images/game11/eye.png": "bfb7484be37359f58f136fefc932a776",
"assets/assets/images/game11/TooTak.png": "070433f82ec2be17783e7301bd088d6e",
"assets/assets/images/game12/bookImage.png": "b17a96fe3682a9d3b3f04be9e09216a8",
"assets/assets/images/game12/knobArrow.svg": "2021d5c35911e41581434290e6cc2d1f",
"assets/assets/images/game13/game13-Icon.png": "abd11cdb0c110de47701a069cc5847ec",
"assets/assets/images/game17/Cover-back.png": "2913ea2161e7732ff0c0a0390cc2421a",
"assets/assets/images/game17/Cover-front.png": "3f3f0183805a73707de06fd153390256",
"assets/assets/images/game6/game6_BI.png": "3d25ea3cc231ad595a42ff56d8f66eea",
"assets/assets/images/islands/island-completed.png": "c6b5c604142e72ad0605f88af944cf4d",
"assets/assets/images/islands/island-locked.png": "f443fc230720a29b7fc5edf3058809f2",
"assets/assets/images/islands/island-unlocked.png": "8a45963512528456989d03434f45da24",
"assets/assets/images/islands/MapDashed_Line.png": "acd864082fe3fd92832e19e9c4bf133c",
"assets/assets/images/islands/TooTak-Map.png": "0f9793f83aef88af4ea27119ee44a7ef",
"assets/assets/images/Lock.png": "4af88b0217f20f749eb8516d376bd774",
"assets/assets/images/logo.png": "9cccbc054cfdbd05faa1409777ac2c0c",
"assets/assets/images/logo_foreground.png": "28eca151464561a07266689adaffee31",
"assets/assets/images/Patterns/Card%2520pattern%25231.svg": "868e225d5693a80ccbbdbc39f1869bb8",
"assets/assets/images/Patterns/Card%2520pattern%252310.svg": "8b0ba8d791213b221e550081c8a3f525",
"assets/assets/images/Patterns/Card%2520pattern%252311.svg": "51e856baec18a86ff0fd73756d5cb38d",
"assets/assets/images/Patterns/Card%2520pattern%252312.svg": "ea0cab305e62d5821b0c6799830e6d39",
"assets/assets/images/Patterns/Card%2520pattern%252313.svg": "005f0aebef92161a44bf2e935743f372",
"assets/assets/images/Patterns/Card%2520pattern%252314.svg": "62c787a7a929d38daa47a77dc4e7ac95",
"assets/assets/images/Patterns/Card%2520pattern%252315.svg": "c788d3fa0f6579ddd001f0994edc287c",
"assets/assets/images/Patterns/Card%2520pattern%252316.svg": "8c203db5010b1e6d5490536198434676",
"assets/assets/images/Patterns/Card%2520pattern%25232.svg": "7599681526943732d2ee1d965cd6f507",
"assets/assets/images/Patterns/Card%2520pattern%25233.svg": "aa2129e51db49f0743d437ab610d5de4",
"assets/assets/images/Patterns/Card%2520pattern%25234.svg": "8e775b561e1a0ff11b4464d3075949c4",
"assets/assets/images/Patterns/Card%2520pattern%25235.svg": "c82e226a6b22f451d6cf48e22d554aae",
"assets/assets/images/Patterns/Card%2520pattern%25236.svg": "94d38055641e9ccd449a6a11cf083e15",
"assets/assets/images/Patterns/Card%2520pattern%25237.svg": "d207412b0e37c3a23705a617788b119c",
"assets/assets/images/Patterns/Card%2520pattern%25238.svg": "e78f8bb65ef1413e2b3d5359e39948d9",
"assets/assets/images/Patterns/Card%2520pattern%25239.svg": "922c462ef6cc48bd78ac6a131335bd81",
"assets/assets/images/speaker.svg": "1671bdc28e4d75424eec75d212fceec8",
"assets/assets/images/SvgIcons/Bulb-Off.svg": "eb397dc1b0febed17e5cacb8c8029d3f",
"assets/assets/images/SvgIcons/Bulb-On.svg": "ee725f7cc4c5c6d3fc04ffb2bb880738",
"assets/assets/images/SvgIcons/Next.svg": "71237b2f0a49fc25553c0d77e52c6cc4",
"assets/assets/images/SvgIcons/PurpleStar-Off.png": "1f6fa44b22de59c4bcdf5f16bec65b7c",
"assets/assets/images/SvgIcons/PurpleStar-On.png": "576f325dc2e417089f20f9480e397d77",
"assets/assets/images/SvgIcons/Star-Off.svg": "c2310317292b2c39796650d3a1a95959",
"assets/assets/images/SvgIcons/Star-On.svg": "8a7008a933bcc833e36239ad87e3d20c",
"assets/assets/images/Tootak_beach_img.png": "37092ce0c2a8a69056183f836d745822",
"assets/assets/lottieAnimation/Confetti/Confetti-circles.json": "e53d50782a38237f08f10df153e460cd",
"assets/assets/lottieAnimation/Confetti/Confetti-diamond.json": "9e2558a8626d00ddc784be977d86466b",
"assets/assets/lottieAnimation/Confetti/Confetti-mixed.json": "b4cf7949eec035f51a70c0001c9b13db",
"assets/assets/lottieAnimation/Confetti/Confetti-original.json": "0d9bf1e6b99ed11a94bc703acacaa586",
"assets/assets/lottieAnimation/d.json": "5351abb69955bfc6d9d38bb03ad77d61",
"assets/assets/lottieAnimation/loadingAnimation.json": "0e5bd47ceb2cc8a492f76c3c0b2d65ee",
"assets/assets/lottieAnimation/poofAnimation.json": "543f656085991b78b796e65f42dac93a",
"assets/assets/lottieAnimation/StarAnimation.json": "39dd03fe205395ed35d90c525050ba39",
"assets/assets/lottieAnimation/StarAnimation1.json": "7d27f1300d0ac0a7d6c3349dfe1902c7",
"assets/assets/lottieAnimation/starsAnimation.json": "f2768623e3b5a1b730b41aebd74762c4",
"assets/assets/lottieAnimation/tickAnimation.json": "cf8f9886e06872bc6955954e5a2b987b",
"assets/assets/sounds/beep.mp3": "26c823a2d4e88f9c383bb58e36dabfd9",
"assets/assets/sounds/goodJob1.mpeg": "8c653a26c00083ee546c0a7d519cb61c",
"assets/assets/sounds/ping.mp3": "7f9c4eebbd788db39983eb557cedd658",
"assets/FontManifest.json": "311e01c3e374e6e00c1ad7014b4e0478",
"assets/fonts/MaterialIcons-Regular.otf": "98a98efe4f76f7e4752305816e19b9c9",
"assets/NOTICES": "d0abb740e2570bb0ac8e59bd41ce45ec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "e172986db4572791725b2b0142f3f654",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cbf9f8d7bf362dae7c67c9b5ff6eccb8",
"/": "cbf9f8d7bf362dae7c67c9b5ff6eccb8",
"main.dart.js": "b3f70615e748816078549db0583fc283",
"manifest.json": "ff463e38856e49538cbc3bf41dc7c304",
"version.json": "459801f0d65d1047a7e2b0f4d0a8d0ab"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
