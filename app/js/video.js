/**
 * Created by Tawfique on 17/08/16.
 */
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Video;
    return {
        setters:[],
        execute: function() {
            Video = (function () {
                function Video(id, title, videoCode, describtion) {
                    this.id = id;
                    this.title = title;
                    this.videoCode = videoCode;
                    this.describtion = describtion;
                }
                return Video;
            }());
            exports_1("Video", Video);
        }
    }
});
//# sourceMappingURL=video.js.map