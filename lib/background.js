chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({"data":{
    "templates" : {
      "temp1" : [
        {
          "x" : 0,
          "y" : 0,
          "width" : 0.5,
          "height" : 1
        },
        {
          "x" : 0.5,
          "y" : 0,
          "width" : 0.5,
          "height" : 1
        }
      ],
      "temp2" : [
        {
          "x" : 0,
          "y" : 0,
          "width" : 0.5,
          "height" : 1
        },
        {
          "x" : 0.5,
          "y" : 0,
          "width" : 0.5,
          "height" : 0.5
        },
        {
          "x" : 0.5,
          "y" : 0.5,
          "width" : 0.5,
          "height" : 0.5
        }
      ],
      "temp3" : [
        {
          "x" : 0,
          "y" : 0,
          "width" : 0.5,
          "height" : 0.5
        },
        {
          "x" : 0.5,
          "y" : 0,
          "width" : 0.5,
          "height" : 0.5
        },
        {
          "x" : 0.5,
          "y" : 0.5,
          "width" : 0.5,
          "height" : 0.5
        },
        {
          "x" : 0,
          "y" : 0.5,
          "width" : 0.5,
          "height" : 0.5
        }
      ],
      "temp4" : [
        {
          "x" : 0.0,
          "y" : 0.0,
          "width" : 0.5,
          "height" : 0.5
        },
        {
          "x" : 0.0,
          "y" : 0.5,
          "width" : 0.5,
          "height" : 0.5
        },
        {
          "x" : 0.5,
          "y" : 0.0,
          "width" : 0.5,
          "height" : 1.0
        }
      ],
      "temp5" : [
        {
          "x" : 0.0,
          "y" : 0.0,
          "width" : 1.0,
          "height" : 0.5
        },
        {
          "x" : 0.0,
          "y" : 0.5,
          "width" : 1.0,
          "height" : 0.5
        }
      ],
      "temp6" : [
        {
          "x" : 0,
          "y" : 0,
          "width" : 0.5,
          "height" : 1
        },
        {
          "x" : 0.5,
          "y" : 0,
          "width" : 0.5,
          "height" : 0.5
        }
      ],
      "temp7" : [
        {
          "x" : 0.0,
          "y" : 0.0,
          "width" : 0.33,
          "height" : 1.0
        },
        {
          "x" : 0.33,
          "y" : 0.0,
          "width" : .33,
          "height" : 1.0
        },
        {
          "x" : 0.66,
          "y" : 0.0,
          "width" : .33,
          "height" : 1.0
        }
      ],
      "temp8" : [
        {
          "x" : 0,
          "y" : 0,
          "width" : 0.5,
          "height" : 0.5
        },
        {
          "x" : 0.5,
          "y" : 0,
          "width" : 0.5,
          "height" : 1.0
        }
      ]
    },
    "custom" : {
  
    },
    "favorites" : {
      "fav1" : {
        "template" : "temp3",
        "paths" : [
          "https://www.yahoo.com/",
          "https://www.google.com/",
          "https://www.youtube.com/",
          "https://www.facebook.com/"
        ]
      },
      "fav2" : {
        "template" : "temp1",
        "paths" : [
          "https://www.imgur.com/",
          "https://canvas.rice.edu/"
        ]
      },
      "fav3" : {
        "template" : "temp2",
        "paths" : [
          "https://www.netflix.com/",
          "https://www.github.com/",
          "https://www.reddit.com/"
        ]
      },
      "fav4" : {
        "template" : "temp5",
        "paths" : [
          "https://www.amazon.com/",
          "https://www.reddit.com/"
        ]
      }
    }
  }
});
});