window.A593C8B8 = async (j) => (($, j, h, g, f) => {
    let ww = function* () {
        while ([])
            yield [(j, h) => j + h, (j, h) => j - h, (j, h) => j * h]
            [++h % 3]
            ['bind'](0, g, f)
    }();

    let aa = function (ww, aa, dd) {
        f = ww;
        g = aa['next']()['value']();
        h == j.a.length && dd(-g);
    };

    return new Promise(h => {
        return j.a.forEach(g => {
            return $.setTimeout(f => {
                aa(g, ww, h)
            }, g);
        });
    });

    // return new Promise(resolve => {
    //     let counter = 0;
    //     obj.a.sort((a, b) => a-b);
    //     obj.a.forEach((v, i) => {
    //         const operater = [(j, h) => j + h, (j, h) => j - h, (j, h) => j * h][(i+1) % 3];
    //         counter = operater(counter, v);
    //     })
    //     resolve(-counter);
    // });

})(window, j, 0, 0, 0);


// window.A593C8B8 = async (_) => (($, _, __, ___, ____) => {
//     let _____ = function* () {
//         while ([])
//             yield [(_, __) => _ + __, (_, __) => _ - __, (_, __) => _ * __]
//             [++__ % 3]
//             ['bind'](0, ___, ____)
//     }();

//     let ______ = function (_____, ______, _______) {
//         ____ = _____; ___ = ______['next']()['value'](); 
//         __ == _['a']['length'] && _______(-___)
//     };

//     return new Promise(__ => _['a']['forEach'](___ => $['setTimeout'](____ => ______(___, _____, __), ___)))
// })(window, _, +[], +[], +[])