/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
{
  "particles":{
    "number":{
      "value":130
    },
    "color":{
      "value":"#ff751a"
    },
    "shape":{
      "type":"circle",
      "stroke":{
        "width":1,
        "color":"#ccc"
      },
      // "image":{
      //   "src":"http://www.iconsdb.com/icons/preview/white/contacts-xxl.png"
      // }
    },
    "opacity":{
      "value":0.5,
      "random":true,
      "anim":{
        "enable":true,
        "speed":8
      }
    },
    "size":{
      "value": 7,
      "random":false,
      "anim":{
        "enable": true,
        "speed":30
      }
    },
    "line_linked":{
      "enable": true,
      "distance": 120,
      "color":"#fff",
      "width":1
    },
    "move":{
      "enable":true,
      "speed":2,
      "direction":"none",
      "straight":false
    }
  },
  "interactivity":{
    "events":{
      "onhover":{
        "enable":true,
        "mode":"repulse"
      },
      "onclick":{
        "enable": true,
        "mode":"push"
      }
    },
    "modes":{
      "repulse":{
        "distance":40,
        "duration":0.4
      },
      "bubble":{
        "distance":100,
        "size":10
      }
    }
  }
}

);