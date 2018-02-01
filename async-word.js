let slowWord = (function() {
    const wait = (delay) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, delay);
        });
    };

    function getData(a, b, c) {
        return wait(1000)
        .then(() => {
            return stringCheck(a, b, c);
        }).then((shouldResolve) => {
            if (shouldResolve) {
                return Promise.resolve([a, b, c]);
            } else {
                return Promise.reject(new Error(`That aint no word haha.`));
            }
        });
    }
    function addBang(a, b, c) {
        return wait(1000)
        .then(() => {
            return arrayCheck(a, b, c);
        }).then((shouldResolve) => {
            if (shouldResolve) {
                return Promise.resolve([a[0] + '!', a[1] + '!', a[2] + '!']);
        } else {
                return Promise.reject(new Error('Not this time.'));
        }
        }); 
    }
    function uppercase(a, b, c) {
        return wait(1000)
        .then(() => {
            return arrayCheck(a, b, c);
        }).then((shouldResolve) => {
            if (shouldResolve) {
                return Promise.resolve([a[0].toUpperCase(), a[1].toUpperCase(), a[2].toUpperCase()]);
        } else {
                return Promise.reject(new Error('Not this time.'));
        }
        }); 
    }
    function pluralize(a, b, c) {
        return wait(1000)
        .then(() => {
            return arrayCheck(a, b, c);
        }).then((shouldResolve) => {
            if (shouldResolve) {
                return Promise.resolve([a[0].replace('!', 's').toLowerCase(), a[1].replace('!', 's').toLowerCase(), a[2].replace('!', 's').toLowerCase()]);
        } else {
                return Promise.reject(new Error('Not this time.'));
        }
        }); 
    }
    function stringCheck(a, b, c) {
        return typeof(a) == "string" && typeof(b) == "string" && typeof(c) == "string";
    }
    function arrayCheck(a, b, c) {
        return a.constructor === Array;
        return b.constructor === Array;
        return c.constructor === Array;
    }
    return { getData, addBang, uppercase, pluralize};
})();