var i = 0
var images = [];

images[0] = "./imagess/o.jpg"
images[1] = "./imagess/a.jpg"
images[2] = "./imagess/b.jpg"
images[3] = "./imagess/c.jpg"
images[4] = "./imagess/d.jpg"
images[5] = "./imagess/e.jpg"
images[6] = "./imagess/g.jpg"
images[7] = "./imagess/p.jpg"
images[8] = "./imagess/f.jpg"

function pakeisfotke() {
  document.slide.src = images[i]

  if (i<images.length-1) {
    i++; }
    else {
      i = 0}

      setTimeout("pakeisfotke()", 4200);
    }

window.onload=pakeisfotke()
