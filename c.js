window.A661E542 = async function ({ a: A }) {
    return (
        await WebAssembly.instantiate(
            await WebAssembly.compile(
                await (
                    await fetch(
                        "data:application/octet-binary;base64,AGFzbQEAAAABBwFgAn9/AX8CFwIETWF0aANtaW4AAARNYXRoA21heAAAAwIBAAcHAQNSdW4AAgpgAV4BBn8gACECIAFBAWsiBARAA0AgAiEDQQAhBkEKIQcDQCADQQpwIQUgA0EKbiEDIAUgBhABIQYgBSAHEAAhByADQQBLDQALIAIgBiAHbGohAiAEQQFrIgQNAAsLIAIL"
                    )
                ).arrayBuffer()
            ),
            { Math: Math }
        )
    ).exports.Run(...A)
}

var f = async function({a:A}){
    let $var0 = A[0];
    let $var1 = A[1];
    let $var2 = $var0;
    let $var4 = $var1-1;

    let $var3=0, $var5=0, $var6=0, $var7=0;
    while(1){
        $var3 = $var2;
        $var6 = 0;
        $var7 = 10;
        while(1){
            $var5 = $var3 % 10;
            $var3 = ($var3 / 10) >> 0;
            $var6 = Math.max($var5, $var6);
            $var7 = Math.min($var5, $var7);
            if($var3 <= 0) break; 
        }
        $var2 = $var6 * $var7 + $var2;
        $var4--;
        if($var4 <= 0) break;
    }
    return $var2;
}