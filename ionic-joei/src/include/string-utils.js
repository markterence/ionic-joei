/* global window, exports, define */

!function() {
    'use strict'
 
    function limit_str(str, count) {
        // `arguments` is not an array, but should be fine for this call
        return str.substring(0,count);
    }

    if (typeof exports !== 'undefined') {
        exports['limit_str'] = limit_str;
    }
    if (typeof window !== 'undefined') {
        window['limit_str'] = sprintf

        if (typeof define === 'function' && define['amd']) {
            define(function() {
                return {
                    'limit_str': limit_str,
                }
            })
        }
    }
}()