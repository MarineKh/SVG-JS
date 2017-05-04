var svgLink = 'http://www.w3.org/2000/svg';
var Llink = 'http://www.w3.org/1999/xlink';

var svg = document.createElementNS(svgLink, 'svg:svg');
document.body.append(svg);

var rects = json.rects;
 	
for(var m in rects) {
	var rect = document.createElementNS(svgLink, 'svg:rect');
		svg.append(rect);

		rect.setAttribute('x', rects[m].x);
		rect.setAttribute('y', rects[m].y);

	texts = rects[m].text;

	for(var n in texts) {
		var text = document.createElementNS(svgLink, 'svg:text');
		svg.append(text);

		text.textContent = texts[n].content;
		text.setAttribute('x', texts[n].x);
		text.setAttribute('y', texts[n].y);
		text.setAttribute('dy', "1.2em");
		text.setAttribute('class', texts[n].class);
    }
}

var tbls = json.tbl;

for(var i in tbls) {
	a = document.createElementNS(Llink, "svg:a");
	text = document.createElementNS(svgLink, 'svg:text');
	title = document.createElementNS(svgLink, 'svg:title');

	a.setAttribute("xlink:href", "https://en.wikipedia.org/wiki/" + tbls[i].href);

	text.setAttribute('x', tbls[i].x);
	text.setAttribute('y', tbls[i].y);
	// text.setAttribute('dy', "1.2em");
	text.setAttribute('class', tbls[i].class);
	text.textContent = tbls[i].content;

	title.textContent = tbls[i].title;

	svg.append(a);
	svg.append(text);
	text.append(title);
}