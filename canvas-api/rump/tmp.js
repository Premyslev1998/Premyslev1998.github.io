
function clone(obj){
    if (obj == null || typeof(obj) != 'object')
        return obj;
    let temp = new obj.constructor(); 
    for (let key in obj)
        temp[key] = clone(obj[key]);
    return temp;
}

function degrad(deg) {

	return deg*Math.PI/180;
}

function raddeg(rad) {

	return rad/Math.PI*180;
}

class Vec {

	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	set(x, y) {
		this.x = x;
		this.y = y;
		return this;
	}

	copy(v) {
		this.x = v.x;
		this.y = v.y;
		return this;
	}

	neg() {
		this.x = -this.x;
		this.y = -this.y;
		return this;
	}

	len() {
		return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y, 2));
	}

	len2() {
		return Math.pow(this.x,2) + Math.pow(this.y, 2);
	}

	dot(v) {
		return this.x*v.x + this.y*v.y;
	}

	dot1(v) {
		return this.x*v.x - this.y*v.y;
	}

	projectionof (v) {
		this.mult( this.dot(v) / this.len2() );
		return this;
	}

	normalize() {
		let l = this.len();
		this.x /= l;
		this.y /= l;
		return this;
	}

	normal(v0, v1) {
		// perpendicular
		let nx = v0.y - v1.y;
  		let ny = v1.x - v0.x;
		// normalize
		let len = 1.0 / Math.sqrt(nx * nx + ny * ny);
		this.x = nx * len;
		this.y = ny * len;
		return this;
	}

	add(v) {
		this.x += v.x;
		this.y += v.y;
		return this;
	}

	sub(v) {
		this.x -= v.x;
		this.y -= v.y;
		return this;
	}

	subcopy (v0, v1) {
		this.x = v0.x - v1.x;
		this.y = v0.y - v1.y;
		return this;
	}

	mult(n) {
		this.x *= n;
		this.y *= n;
		return this;
	}

	rotate(deg) {
		let x = this.x;
		let y = this.y;

		this.x = x * Math.cos(degrad(deg)) - y * Math.sin(degrad(deg));
    	this.y = x * Math.sin(degrad(deg)) + y * Math.cos(degrad(deg));

    	return this;
	}

	cos(v) {
		let b = this.len() * v.len();
		if (b) {
			let a = this.dot(v);
			return a/b;
		} else {
			return false;
		}
	}

	angle(v) {
		return Math.acos(this.cos(v));
	}

	bigangle(v) {
		let c = this.cos(v);
		let a = Math.acos(c);
		if (c < 0) a = -a;
		return a;
	}

	zero() {
		this.x = 0;
		this.y = 0;
		return this;
	}

	print(n) {
		console.log((n || "vec")+": x = "+this.x+"; y = "+this.y);
	}

	scale (v, s) {
		this.x = v.x * s;
		this.y = v.y * s;
		return this;
	}

	perp (v) {
		this.x = -v.y;
		this.y =  v.x;
		return this;
	}

	clone() {
		return new Vec(this.x, this.y);
	}
}

function round(x, e) {
	e = e || 0;
	let m = Math.pow(10,e);
	return Math.round(x*m)/m;
}

///////

function drawPoint(ctx, x, y, r, color) {
	ctx.save();
	if (color) ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc(x,y,r,0,Math.PI*2,true);
	ctx.fill();
	ctx.restore();
}

function rotate(deg, x, y, ctx) {
	ctx.translate(x, y);
	ctx.rotate(degrad(deg));
	ctx.translate(-x, -y);
}

//////////

window.validateInput = function(th) {
    let str = th.value + "";
    str = str.replace(new RegExp(",", "g"), ".");
    let match = str.match(/^[-0-9]+([.,]|([.,][0-9]*0))$/);
    let val = parseFloat(str) || 0;
    if (val < 0) val *= -1;
    th.mynumericvalue = val;
    if (!val) return;
    th.mynumericvalue = val;
    if (match === null) th.value = val;
};

HTMLElement.prototype.click = function() {
   var evt = this.ownerDocument.createEvent('MouseEvents');
   evt.initMouseEvent('click', true, true, this.ownerDocument.defaultView, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
   this.dispatchEvent(evt);
}

window.floatSpaceFormat = function(val){
    val = (val+"").replace(/[,]/g, '.');
	while (/^0\d+/.test(val)) val = val.slice(1);
	var fr = val.split('.');
	var int = fr[0];
	if (fr.length > 1) {
		fr.splice(0, 1);
		fr = fr.join('');
	} else fr = null;
	if (int.length > 3) {
		var j = 0;
		int = int.split('');
		for (var i = int.length - 1; i >= 0; i--) {
			j++;
			if (j > 2) {
				j=0;
				int.splice(i, 0, ' ');
			}
		}
		int = int.join('').trim();
	}
	val = int + (fr == null ? '' : '.' + fr);
	return val;
}

function isMetric(val) {
	return (val == 'cm' || val == 'm');
}

function floatConverter(value, from, to) {
	if (!value || (from == to)) return value;
	value = new BigNumber(value);
	if (isMetric(from) && isMetric(to)) {
		if (from == 'm') {
			value = value.multipliedBy(100);
		} else {
			value = value.multipliedBy(0.01);
		}
	} else if (!isMetric(from) && !isMetric(to)) {
		switch (from) {
			case 'in':
				switch (to) {
					case 'ft':
						value = value.dividedBy(12);
						break;
					case 'yd':
						value = value.dividedBy(36);
						break;
				}
				break;
			case 'ft':
				switch (to) {
					case 'in':
						value = value.multipliedBy(12);
						break;
					case 'yd':
						value = value.dividedBy(3);
						break;
				}
				break;
			case 'yd':
				switch (to) {
					case 'in':
						value = value.multipliedBy(36);
						break;
					case 'ft':
						value = value.multipliedBy(3);
						break;
				}
				break;
		}
	} else {
		switch (from) { // to m
			case 'in': value = value.multipliedBy(0.0254); break;
			case 'ft': value = value.multipliedBy(0.3048); break;
			case 'yd': value = value.multipliedBy(0.9144); break;
			case 'cm': value = value.multipliedBy(0.01); break;
		}
		switch (to) { // from m
			case 'in': value = value.dividedBy(0.0254); break;
			case 'ft': value = value.dividedBy(0.3048); break;
			case 'yd': value = value.dividedBy(0.9144); break;
			case 'cm': value = value.multipliedBy(100); break;
		}
	}
	return value.toNumber();
}

function squareConverter(value, from, to) {
	if (!value || (from == to)) return value;
	value = new BigNumber(value);
	if (isMetric(from) && isMetric(to)) {
		if (from == 'm') {
			value = value.multipliedBy(10000);
		} else {
			value = value.multipliedBy(0.0001);
		}
	} else {
		switch (from) { //to yd
			case 'in': value = value.multipliedBy(0.0007716049382); break;
			case 'ft': value = value.dividedBy(9); break;
			case 'ac': value = value.multipliedBy(4840); break;
			case 'mi': value = value.multipliedBy(3097600); break;
			case 'cm': value = value.multipliedBy(0.000119599); break;
			case 'm': value = value.multipliedBy(1.1959900463); break;
		}
		switch (to) { //from yd
			case 'in': value = value.multipliedBy(1296); break;
			case 'ft': value = value.multipliedBy(9); break;
			case 'ac': value = value.multipliedBy(0.00020661167736184); break;
			case 'mi': value = value.multipliedBy(0.00000032283); break;
			case 'cm': value = value.multipliedBy(8361.2736); break;
			case 'm': value = value.multipliedBy(0.83612736); break;}
	}
	return value.toNumber();
}

function cubicConverter(value, from, to) {
	if (!value || (from == to)) return value;
	value = new BigNumber(value);
	if (isMetric(from) && isMetric(to)) {
		if (from == 'm') {
			value = value.multipliedBy(1000000);
		} else {
			value = value.multipliedBy(0.000001);
		}
	} else if (!isMetric(from) && !isMetric(to)) {
		switch (from) {
			case 'in':
				switch (to) {
					case 'ft':
						value = value.dividedBy(1728);
						break;
					case 'yd':
						value = value.dividedBy(46656);
						break;
				}
				break;
			case 'ft':
				switch (to) {
					case 'in':
						value = value.multipliedBy(1728);
						break;
					case 'yd':
						value = value.dividedBy(27);
						break;
				}
				break;
			case 'yd':
				switch (to) {
					case 'in':
						value = value.multipliedBy(46656);
						break;
					case 'ft':
						value = value.multipliedBy(27);
						break;
				}
				break;
		}
	} else {
		switch (from) { // to m
			case 'in': value = value.multipliedBy(0.00001638706); break;
			case 'ft': value = value.multipliedBy(0.028316846592); break;
			case 'yd': value = value.multipliedBy(0.764554857984); break;
			case 'cm': value = value.multipliedBy(0.000001); break;
		}
		switch (to) { // from m
			case 'in': value = value.multipliedBy(61023.758990325); break;
			case 'ft': value = value.multipliedBy(35.314666721489); break;
			case 'yd': value = value.multipliedBy(1.307950619); break;
			case 'cm': value = value.multipliedBy(1000000); break;
		}
	}
	return value.toNumber();
}

function massConverter(value, from, to) {
	if (!value || (from == to)) return value;
	value = new BigNumber(value);
	switch (from) { // to kg
		case 'lb': value = value.multipliedBy(0.45359237); break;
		case 'ut': value = value.multipliedBy(907.18474); break;
		case 't': value = value.multipliedBy(1000); break;
	}
	switch (to) { // from kg
		case 'lb': value = value.dividedBy(0.45359237); break;
		case 'ut': value = value.dividedBy(907.18474); break;
		case 't': value = value.dividedBy(1000); break;
	}
	return value.toNumber();
}

function cubicFtToWater(value, to) {
    // 1 cu.ft = 28.3168466 L
    if (to == "l") return value * 28.3168466;
    if (to == "galus") return value * 7.4805195;
    if (to == "galuk") return value * 6.2288355;
    if (to == "bbl") return value * 0.17810761;
}

/////////

function drawPoint(ctx, x, y, r, color, o) {
	ctx.save();
	if (o) ctx.globalAlpha = o;
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.arc(x,y,r,0,Math.PI*2,true);
	ctx.fill();
	ctx.restore();
}

function drawArrow(ctx, pos, dir, size, color) {
	let midv = dir.clone().mult(size);
	let aftervert = dir.clone().mult(size*0.3);
	let side1 = dir.clone().rotate(90).mult(size*0.5);
	let side2 = side1.clone().neg();

	let mid = pos.clone().add(midv);
	let p1 = mid.clone().add(aftervert);
	let p2 = p1.clone();
	p1.add(side1);
	p2.add(side2);

	ctx.save();
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.moveTo(pos.x, pos.y);
	ctx.lineTo(p1.x, p1.y);
	ctx.lineTo(mid.x, mid.y);
	ctx.lineTo(p2.x, p2.y);
	ctx.closePath();
	ctx.fill();
	ctx.restore();
}

function drawSize(o){

	let ctx, p1, p2, linesize, arrowsize, color, text, textpos, fontsize;

	ctx = o.ctx; p1 = o.p1; p2 = o.p2; linesize = o.linesize;
	arrowsize = o.arrowsize; color = o.color; text = o.text;
	textpos = o.textpos; fontsize = o.fontsize;

	let arr1dir = p2.clone().sub(p1).normalize();
	let arr2dir = arr1dir.clone().neg();
	
	let len = p1.clone().sub(p2).len();
    let minlen = arrowsize * 4;

    ctx.save();
	ctx.strokeStyle = color;
	ctx.lineWidth = linesize;
	ctx.lineCap = "square";

	if (o.vv) {
		ctx.save();
		ctx.lineWidth = linesize*0.5;
		ctx.beginPath();
		ctx.moveTo(p1.x, p1.y);
		ctx.lineTo(p1.x - o.vv.x, p1.y - o.vv.y);
		ctx.moveTo(p2.x, p2.y);
		ctx.lineTo(p2.x - o.vv.x, p2.y - o.vv.y);
		ctx.stroke();
		ctx.restore();
	}
    
    let pp1, pp2;
    
    if (len > minlen) {
	    pp1 = p1.clone().add(arr1dir.clone().mult(arrowsize));
	    pp2 = p2.clone().add(arr2dir.clone().mult(arrowsize));
    } else {
        pp1 = p1.clone().sub(arr1dir.clone().mult(arrowsize*0.5));
	    pp2 = p2.clone().sub(arr2dir.clone().mult(arrowsize*0.5));

	    p1.add(arr1dir.clone().mult(linesize*2));
	    p2.add(arr2dir.clone().mult(linesize*2));
    }

	
	ctx.beginPath();
	ctx.moveTo(pp1.x, pp1.y);
	ctx.lineTo(pp2.x, pp2.y);
	ctx.stroke();
	
	if (len > minlen) {
    	drawArrow(ctx, p1, arr1dir, arrowsize, color);
    	drawArrow(ctx, p2, arr2dir, arrowsize, color);
	} else {
	    drawArrow(ctx, p1, arr2dir, arrowsize, color);
    	drawArrow(ctx, p2, arr1dir, arrowsize, color);
	}

	//rotate(deg, x, y, ctx)

	if (text) {

		let horiz = new Vec(1,0);
		let vert = new Vec(0,1);

		let dot1 = horiz.dot(arr1dir);
		let dot2 = vert.dot(arr1dir);

		let rad = Math.acos(dot1);
		if (dot2 < 0) rad *= -1;

		fontsize = (fontsize || 15);
		ctx.font = fontsize +"px sans-serif";
		ctx.textAlign = "center";
		ctx.textBaseline = "alphabetic";
		ctx.fillStyle = color;

		let textposv = p1.clone().add(p2).mult(0.5);
		if (textpos == "top") textposv.add(arr1dir.clone().rotate(-90).mult(linesize*7));
		else textposv.add(arr1dir.clone().rotate(90).mult(linesize*2.5+fontsize));

		if (o.textmove) textposv.add(o.textmove);

		rotate(raddeg(rad), textposv.x, textposv.y, ctx);
		ctx.fillText(text, textposv.x, textposv.y);
	}

	ctx.restore();
}

function drawRectSize(o){
	let ctx = o.ctx;
	let p1 = o.p1;
	let p2 = o.p2;
	let linesize = o.linesize;
	let type = o.type || 0;
	let dir = o.dir || 0;
	let color = o.color || "#333";
	let text = o.text;
	
	let fontsize = o.fontsize;
	let len = o.len;
	let pp1, pp2;

	let valign = "alphabetic";//o.valign ? "top" : 
	let align = "left";//o.align ? "right" : 

	let tmovelen = linesize * 5;
	let tmove;
	let drotate = 0;
	let textpos;
	let startpos;

	if (type == 0) {

		let y = Math.min(p1.y, p2.y) - len;
		pp1 = new Vec(p1.x, y);
		pp2 = new Vec(p2.x, y);

		if (dir) {
			align = "right";
			tmove = new Vec(-tmovelen, 0);

			if (p1.x < p2.x) {
				textpos = pp1.clone().add(tmove);
				startpos = pp2;
			} else {
				textpos = pp2.clone().add(tmove);
				startpos = pp1;
			}
		} else {
			tmove = new Vec(tmovelen, 0);

			if (p1.x < p2.x) {
				textpos = pp2.clone().add(tmove);
				startpos = pp1;
			} else {
				textpos = pp1.clone().add(tmove);
				startpos = pp2;
			}
		}
	} else if (type == 1) {
		let x = Math.max(p1.x, p2.x) + len;
		pp1 = new Vec(x, p1.y);
		pp2 = new Vec(x, p2.y);
		drotate = -90;
		valign = "top";

		if (dir) {
			align = "left";
			tmove = new Vec(0, -tmovelen);

			if (p1.y < p2.y) {
				textpos = pp1.clone().add(tmove);
				startpos = pp2;
			} else {
				textpos = pp2.clone().add(tmove);
				startpos = pp1;
			}
		} else {
			tmove = new Vec(0, tmovelen);
			align = "right";

			if (p1.y < p2.y) {
				textpos = pp2.clone().add(tmove);
				startpos = pp1;
			} else {
				textpos = pp1.clone().add(tmove);
				startpos = pp2;
			}
		}
	} else if (type == 2) {
		let y = Math.max(p1.y, p2.y) + len;
		pp1 = new Vec(p1.x, y);
		pp2 = new Vec(p2.x, y);

		valign = "top";
		if (dir) {
			align = "right";
			tmove = new Vec(-tmovelen, 0);

			if (p1.x < p2.x) {
				textpos = pp1.clone().add(tmove);
				startpos = pp2;
			} else {
				textpos = pp2.clone().add(tmove);
				startpos = pp1;
			}
		} else {
			tmove = new Vec(tmovelen, 0);

			if (p1.x < p2.x) {
				textpos = pp2.clone().add(tmove);
				startpos = pp1;
			} else {
				textpos = pp1.clone().add(tmove);
				startpos = pp2;
			}
		}
	} else if (type == 3) {
		let x = Math.min(p1.x, p2.x) - len;
		pp1 = new Vec(x, p1.y);
		pp2 = new Vec(x, p2.y);
		drotate = -90;

		if (dir) {
			align = "right";
			tmove = new Vec(0, tmovelen);

			if (p1.y < p2.y) {
				textpos = pp2.clone().add(tmove);
				startpos = pp1;
			} else {
				textpos = pp1.clone().add(tmove);
				startpos = pp2;
			}
		} else {
			tmove = new Vec(0, -tmovelen);

			if (p1.y < p2.y) {
				textpos = pp1.clone().add(tmove);
				startpos = pp2;
			} else {
				textpos = pp2.clone().add(tmove);
				startpos = pp1;
			}
		}
	}

	let textline;
	if (startpos == pp1) {
		textline = pp2.clone().sub(pp1);
	} else {
		textline = pp1.clone().sub(pp2);
	}

	ctx.save();
	ctx.lineWidth = linesize;
	ctx.strokeStyle = color;
	ctx.fillStyle = color;
	ctx.textBaseline = valign;
	ctx.textAlign = align;
	ctx.font = (o.nobold ? "" : "bold ") + fontsize + "px sans-serif";

	let textlineNormal = textline.clone().normalize();
	textline.add(textlineNormal.clone().mult((ctx.measureText(text).width + tmovelen) * (o.linek || 1)));
	let endpos = startpos.clone().add(textline);

	let smalltextline = textlineNormal.clone().mult(linesize * 4);

	startpos = startpos.clone().sub(smalltextline);
	let d90 = 90;
	if (type == 0) d90 = dir ? -90 : 90;
	if (type == 2) d90 = dir ? 90 : -90;
	if (dir && type == 1) d90 = -90;
	if (dir && type == 3) d90 = -90;

	smalltextline.rotate(d90);

	startpos.add(smalltextline);
	endpos.add(smalltextline);

	let osmalltextline = smalltextline.clone().rotate(-d90);
	let d45 = 45;
	if (dir) d45 = -45;
	if (!dir && type == 2) d45 = -45;
	smalltextline.rotate(d45);

	
	ctx.beginPath();
	ctx.moveTo(p1.x, p1.y);
	ctx.lineTo(pp1.x, pp1.y);
	ctx.moveTo(p2.x, p2.y);
	ctx.lineTo(pp2.x, pp2.y);

	ctx.moveTo(pp2.x + osmalltextline.x, pp2.y + osmalltextline.y);
	ctx.lineTo(pp2.x + smalltextline.x*2.5 + osmalltextline.x, pp2.y + smalltextline.y*2.5 + osmalltextline.y);

	ctx.moveTo(pp1.x + osmalltextline.x, pp1.y + osmalltextline.y);
	ctx.lineTo(pp1.x + smalltextline.x*2.5 + osmalltextline.x, pp1.y + smalltextline.y*2.5 + osmalltextline.y);

	ctx.moveTo(startpos.x, startpos.y);
	ctx.lineTo(endpos.x, endpos.y);
	ctx.stroke();
	if (drotate) rotate(drotate, textpos.x, textpos.y, ctx);
	ctx.fillText(text, textpos.x, textpos.y);
	ctx.restore();
}

function fillPolygon(ctx, points, color, txtr, overcolor) {
	if (txtr && txtr.ready2use) {
		let minx = 9999, miny = 9999;
		let maxx = -9999, maxy = -9999;
		for (let i in points) {
			if (points[i].x < minx) minx = points[i].x;
			if (points[i].y < miny) miny = points[i].y;
			if (points[i].x > maxx) maxx = points[i].x;
			if (points[i].y > maxy) maxy = points[i].y;
		}
		let rect = texturedCanvas(maxx-minx,maxy-miny,txtr);
		if (overcolor) {
			rect[1].fillStyle = overcolor;
			rect[1].fillRect(0,0,rect[0].width,rect[0].height);
		}
		rect[1].globalCompositeOperation = "destination-in";
		rect[1].fillStyle = "#000";
		rect[1].beginPath();
	    rect[1].moveTo(points[0].x - minx, points[0].y - miny);
	    for (let i = 1; i < points.length; i++) {
	        rect[1].lineTo(points[i].x - minx, points[i].y - miny);
	    }
	    rect[1].closePath();
	    rect[1].fill();
	    ctx.drawImage(rect[0], minx, miny);
	} else {
	    if (color) {
	        ctx.save();
	        ctx.fillStyle = color;
	    }
	    ctx.beginPath();
	    ctx.moveTo(points[0].x, points[0].y);
	    for (let i = 1; i < points.length; i++) {
	        ctx.lineTo(points[i].x, points[i].y);
	    }
	    ctx.closePath();
	    if (color) {
	        ctx.fill();
	        ctx.restore();
	    }
	}
}

function ctxScale(scale, x, y, ctx) {
	ctx.translate(x, y);
	ctx.scale(scale, scale);
	ctx.translate(-x, -y);
}

function texturedCanvas(w,h,texture){
	let c = document.createElement("canvas");
	c.width = w; c.height = h;
	let ctx = c.getContext("2d");

	let x = 0, y = 0;
	let startx = 0;
	let maxx = w, maxy = h;
	let texture_scale = texture.scale || 1;

	ctx.save();
	if (texture.skew) {
		x = startx = -h;
		ctx.transform(1, 0, 1, 1, 0, 0);
	}
			
	while (y < maxy) {
	    ctx.drawImage(texture, x, y, texture.width * texture_scale, texture.height * texture_scale);
	    if (x >= maxx) {
			x = startx;
			y += texture.height * texture_scale;
		} else {
			x += texture.width * texture_scale;
		}
	}

	ctx.restore();
		
	return [c, ctx];
}

let c11 = document.querySelector(".calc_1 .calc_canvas_1");   
let ctx11 = c11.getContext("2d");                             

function drawResult1(o) {

	let parent = o.parent;
	
	let cssw = parseInt(parent.offsetWidth);    
	let dpr = window.devicePixelRatio || 1;    

	let cw, ch, ocw, c, ctx, use_w, use_h, max_use_h, drawratio;

	c = o.canvases[0][0];       
	ctx = o.canvases[0][1];     

	cw = Math.max(cssw * dpr, 800);    
	ch = cw;                           
	ocw = cw;     

	let bgcolor = "#E6E6FF";      
	let sizescolor = "#333333";   
	let linesize = cw * 0.003;    
	let arrowsize = linesize * 6;     
	let fontsize = arrowsize * 1.7;   

	
	let padding_side = Math.round(0.1 * cw);    
	let padding_vert = Math.round(0.1 * cw);    
	o.fullw = o.run;
	o.oldrun = o.run;  

	let interdata = {};

	{
			
		let wallw = Math.round(padding_side); 

		use_w = cw - padding_side * 2 - wallw; 
		use_h = use_w * o.rise / o.fullw;

		max_use_h = use_w * 1.0;
		if (use_h > max_use_h) {
		    let ratio = max_use_h / use_h;  
		    use_w *= ratio;
		    use_h *= ratio;
		}
		use_w = Math.max(use_w, 1);
		use_h = Math.max(use_h, 1);

		drawratio = use_w / o.fullw; 

		cw = use_w + padding_side * 2 + wallw;  
		ch = use_h + padding_vert * 2;
		
		c.width = Math.round(cw);
		c.height = Math.round(ch);

		let run = drawratio * o.run;
		let oldrun = drawratio * o.oldrun;

		let stairw = run / (o.n*2); 
		let stairh = use_h / (o.below ? o.n + 4 : o.n); 
		let th = o.below ? use_h - stairh : use_h; 

		let angletan = th / run; 
		let anglerad = Math.atan(angletan); 
		let angledeg = raddeg(anglerad); 

		interdata.angletan = angletan;
		interdata.anglerad = anglerad;
		interdata.angledeg = angledeg;

		let strw1 = stairw * Math.sin(anglerad); 
		let strw = drawratio * o.fstrw - strw1; 
		let strwy = strw / Math.cos(anglerad);
		let understrx = use_h / angletan;
				

			ctx.translate(padding_side * -0.01 + wallw*0.31, -5);

			ctx.fillStyle = "#CCCCCC";     // цвет заливки области 
			ctx.strokeStyle = "#CCCCCC";   // цвет контура

			// ПЛАТФОРМА ПАНДУСА //
			ctx.beginPath();               
			ctx.moveTo(200, 180);              
			ctx.lineTo(-wallw+120, 180);
			//console.log(-wallw);         
			ctx.lineTo(-wallw+120, use_h);     
			ctx.lineTo(200, use_h);
			ctx.translate(padding_side-205, 0);          
			ctx.closePath();               
			ctx.fill();                    
			ctx.stroke();
			// ПЛАТФОРМА ПАНДУСА //                  

			ctx.strokeStyle = "#4E5153";   
			// ЛИНИЯ ПОЛА //
			ctx.beginPath();
			ctx.moveTo(-wallw+235, use_h);
			ctx.lineTo(use_w+280, use_h);
			ctx.closePath();
			ctx.stroke();
			// ЛИНИЯ ПОЛА //

			let r = wallw / 5; // радиус чтобы нарисовать дугу угла
			if (angledeg < 45) r *= (1 + Math.cos(anglerad));

			ctx.strokeStyle = sizescolor;	
			// ЛИНИЯ ДУГИ //
			ctx.beginPath();
			ctx.arc(understrx + 170, use_h, r, Math.PI, Math.PI+anglerad, false);  
			ctx.stroke();
			ctx.closePath();
			// ЛИНИЯ ДУГИ //

			// ЛИНИЯ УГЛА //
			ctx.strokeStyle = "#0026FF";
			ctx.fillStyle = "#0026FF";
			ctx.beginPath();
			ctx.moveTo(315, 200);
			ctx.lineTo(understrx+175, use_h);
			ctx.lineTo(understrx+205, use_h);
			ctx.lineTo(315, 180);
			ctx.closePath();
			ctx.fill();
			ctx.stroke();
			// ЛИНИЯ УГЛА //

			ctx.fillStyle = "#A9C2D4";
			ctx.strokeStyle = "#A9C2D4";

			// ОТРИСОВКА СТУПЕНЕЙ //
			ctx.beginPath();
			ctx.moveTo(315, use_h);
			ctx.lineTo(run, use_h);
			ctx.translate(0, -10);
			for (let i = 0; i < o.n; i++) {            
				let y = use_h - (i+1) * stairh;
				let x = run - i * stairw;
				ctx.lineTo(x, y);
				ctx.lineTo(x - stairw, y);
			}
			
			ctx.closePath();
			ctx.fill();
			ctx.stroke();
			// ОТРИСОВКА СТУПЕНЕЙ //
		
		let v = new Vec(-r - wallw/2, 0);
		v.rotate(angledeg * 0.4);

		ctx.fillStyle = sizescolor;
		ctx.textAlign = "right";
		ctx.font = fontsize +"px sans-serif";
		ctx.textBaseline = "alphabetic";
		ctx.fillText(" " + (o.angletxt || o.slopetxt), understrx + 190 + v.x, use_h + 15 + v.y); 

		let vv, pp1, pp2;

    	vv = new Vec(-1,0).normalize().mult(ocw * 0.05);
    	pp1 = new Vec(175 + vv.x, use_h + 10 + vv.y);
    	pp2 = new Vec(175 + vv.x, 190 + vv.y);
    
    	drawSize({
    		ctx: ctx,
    		p1: pp1, p2: pp2,
    		linesize: linesize, arrowsize: arrowsize, color: sizescolor,
    		text: o.trisetxt || o.risetxt, fontsize: fontsize, textpos: "top"
    	});

		vv = new Vec(-1,0).normalize().mult(ocw * 0.05);
    	pp2 = new Vec(995 + vv.x, use_h - 2 + vv.y);
    	pp1 = new Vec(375 + vv.x, 180 + vv.y);
    
    	drawSize({
    		ctx: ctx,
    		p1: pp1, p2: pp2,
    		linesize: linesize, arrowsize: arrowsize, color: sizescolor,
    		text: o.trisetxt || o.lentxt, fontsize: fontsize, textpos: "top"
    	});    	

    	vv = new Vec(0,1).normalize().mult(ocw * 0.03);
    	pp1 = new Vec(315 + vv.x, use_h + vv.y);
    	pp2 = new Vec(180 + oldrun + 130 + vv.x, use_h + vv.y);
    
    	drawSize({
    		ctx: ctx,
    		p1: pp1, p2: pp2,
    		linesize: linesize, arrowsize: arrowsize, color: sizescolor,
    		text: o.truntxt || o.runtxt, fontsize: fontsize, textpos: "bottom"
    	});
	}
}

let run = 3000;
let rise = 2600;
let below = true;
let n = 3;
let fstrw = 300;
var risetxt = 'Rise';
var runtxt = 'Ramp Run';
var lentxt = 'Ramp Length';
var slopetxt = '°Slope Degree';


// calculated:

let strw = 100;

drawResult1({
	canvases: [[c11, ctx11]],
	parent: document.querySelector(".calc_1"),
	run: run,
	rise: rise,
	below: below,
	n: n,
	strw: strw,
	fstrw: fstrw,
	risetxt: risetxt,
	runtxt: runtxt,
	lentxt: lentxt,
	slopetxt: slopetxt,
	overlapinside: false,//true,
	wl3: "123",
	wl4: "456"
});
