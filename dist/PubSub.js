var PubSub = (function() {

    // vars
    var listeners = [];

    // helpers
    function _forEach(arr, fn) {
        var i = 0;
        var total = arr.length;
        for (i = 0; i < total; i++) {
            fn(i, arr[i]);
        }
    }


    // functions
    function subscribe(topic, fn, id) {

        if (!listeners[topic]) {
            listeners[topic] = [];
        }

        listeners[topic].push({
        	fn: fn,
        	id: id
        });
    }

    function unsubscribe(topic, id) {
        if (listeners[topic]) {
            _forEach(listeners[topic], function(i, listener) {
                if (id == listener.id) {
                    listeners[topic].splice(i, 1);
                }
            });
        }
    }


    function publish(topic, data) {
        if (listeners[topic]) {
            _forEach(listeners[topic], function(i, listener) {
                listener.fn(data);
            });
        }
    }


    // api
    return {
        subscribe: subscribe,
        publish: publish,
        unsubscribe: unsubscribe
    };


})();