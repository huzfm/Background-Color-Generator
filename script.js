const btn = document.querySelector('#button');
var color1 = document.querySelector('.colour');
const div = document.querySelector('.simplediv')
const colour = [
      "red", "green", "blue", "yellow", "purple",
      "orange", "pink", "brown", "teal", "cyan",
      "maroon", "olive", "navy", "magenta", "indigo",
      "violet", "gold", "silver", "gray", "black",
      "white", "lime", "aqua", "fuchsia", "beige",
      "coral", "khaki", "tan", "salmon", "turquoise",
      "lavender", "plum", "sienna", "skyblue", "thistle",
      "chartreuse", "crimson", "darkcyan", "darkorange", "darkred",
      "darkslateblue", "deepskyblue", "dodgerblue", "firebrick", "forestgreen",
      "hotpink", "indianred", "lawngreen", "lightcoral", "lightseagreen",
      "lightslategray", "mediumaquamarine", "mediumorchid", "mediumpurple", "midnightblue",
      "orangered", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred",
      "peru", "powderblue", "rosybrown", "saddlebrown", "seashell",
      "slateblue", "springgreen", "steelblue", "tomato", "wheat",
      "burlywood", "cadetblue", "chocolate", "darkgoldenrod", "darkkhaki",
      "darkorchid", "darkseagreen", "darkslategray", "darkturquoise", "dimgray",
      "gainsboro", "ghostwhite", "honeydew", "ivory", "lavenderblush",
      "lemonchiffon", "lightblue", "lightcyan", "lightgoldenrodyellow", "lightgray",
      "lightgreen", "lightpink", "lightsalmon", "lightsteelblue", "lightyellow",
      "mintcream", "mistyrose", "oldlace", "papayawhip", "peachpuff"
]

btn.addEventListener('click', function () {
      const randomNumber = getRDM();
      div.style.background = colour[randomNumber]

      //document.body.style.background = colour[randomNumber];
      color1.textContent = colour[randomNumber];
})
function getRDM() {
      return Math.floor(Math.random() * colour.length);

}
