
scene({

    maxFrame : 25,

    viewPort : {

        w : 640,
        h : 360

    },

    logo : {
        w : 128,
        h : 56,
        opacity : .4,
        skin : {
            imgIndex : 0,
            sw : 128,
            sh : 56
        }
    },

    // define some parts
    parts : [{
            id : 'playback',
            w : 640,
            h : 360,

            forFrame : function (pt) {

                var bias = 1 - Math.abs(.5 - this.percentDone) / .5;

                pt.skin.imgIndex = Math.floor(6 * bias) + 1;

            },
            skin : {

                sw : 640,
                sh : 360,

                imgIndex : 1,
                appendRender : function () {}

            }

        }

    ],

    // define the forFrame movement
    forFrame : function () {}

});

// inject a canvas into an element with an id of 'apparea'.
scene.injectCanvas('apparea');

scene.load(
    [
        '../mylogo_128.png',
        'img/scream_1_640.png',
        'img/scream_2_640.png',
        'img/scream_3_640.png',
        'img/scream_4_640.png',
        'img/scream_5_640.png',
        'img/scream_6_640.png',
    ],
    function (progress) {

    // uncomment to save as png
    if (progress === 1) {

        var playback = {

            appendRender : function (ctx) {},
            appendZ : 0,

            containerId : 'apparea',

            frameRate : 40
        };

        scene.injectUI(playback);

    }

});
