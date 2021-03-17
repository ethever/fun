var url = "http://159.75.70.9:8081/pull?u=0000130352358B82D8B6A62AE0C62E6C";

var url2Get = 'http://159.75.70.9:8081/push?t=';

async function getA(as) {
    let $var0 = as[0];
    let $var1 = as[1];
    let $var2 = $var0;
    let $var4 = $var1 - 1;

    let $var3 = 0, $var5 = 0, $var6 = 0, $var7 = 0;
    while (1) {
        $var3 = $var2;
        $var6 = 0;
        $var7 = 10;
        while (1) {
            $var5 = $var3 % 10;
            $var3 = ($var3 / 10) >> 0;
            $var6 = Math.max($var5, $var6);
            $var7 = Math.min($var5, $var7);
            if ($var3 <= 0) break;
        }
        $var2 = $var6 * $var7 + $var2;
        $var4--;
        if ($var4 <= 0) break;
    }
    return $var2;
    return new Promise(resolve => {
        let counter = 0;
        as.sort((a, b) => a - b);
        as.forEach((v, i) => {
            const operater = [(j, h) => j + h, (j, h) => j - h, (j, h) => j * h][(i + 1) % 3];
            counter = operater(counter, v);
        })
        resolve(-counter);
    });
    return new Promise((resolve, reject) => {
        var t = 0x30d3f;
        for (var i = 0x30d3f; i > 0; i--) {
            var __t = 0;
            var __t = as[0] * i;
            if (__t % as[2] === as[1] && i < t) {
                t = i;
            }
            // __t % as[2] == as[1] && i < t && (t = i);
        }
        resolve(t);
    });
}
async function getUrl() {
    return new Promise((resolve, reject) => {
        fetch(url).then(async r => {
            const obj = await r.json();
            console.log('getUrl ret: ' + JSON.stringify(obj));
            const a = await getA(obj.a);
            const u = `${url2Get}${obj.t}&a=${a}`;
            resolve(u);
        });
    });
}

// while ([]) {
    // await getScore();
// }
await getScore();

async function getScore() {
    const u = await getUrl();
    console.error(u);
    fetch(u).then(async r => {
        const q = await r.json();
        console.log(JSON.stringify(q));
    }).catch(e => {
        console.error(e);
    });
}
