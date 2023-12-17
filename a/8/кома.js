(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"кома_atlas_1", frames: [[0,0,1392,1123]]},
		{name:"кома_atlas_2", frames: [[0,0,1392,1123]]},
		{name:"кома_atlas_3", frames: [[0,0,1392,1123],[1394,0,512,512],[1394,514,512,512]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.крылья = function() {
	this.initialize(ss["кома_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.одниноги = function() {
	this.initialize(ss["кома_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.тело = function() {
	this.initialize(ss["кома_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.croppedlampa101 = function() {
	this.initialize(ss["кома_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.croppedlampa101pngкопия = function() {
	this.initialize(ss["кома_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.тело_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.тело();
	this.instance.setTransform(0,40.75,0.1085,0.1085,-15.6509);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.тело_1, new cjs.Rectangle(0,0,178.3,158.1), null);


(lib.Символ2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.одниноги();
	this.instance.setTransform(0,0,0.0938,0.0938);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,130.5,105.3), null);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.крылья();
	this.instance.setTransform(0,0,0.1193,0.1193);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,166,134), null);


(lib.ноги1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ2();
	this.instance.setTransform(65.2,52.6,1,1,0,0,0,65.2,52.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:65.3,scaleY:0.9922,rotation:1.1091,x:65.3,y:52.35},0).wait(1).to({scaleY:0.9844,rotation:2.2181,y:52.05},0).wait(1).to({scaleY:0.9766,rotation:3.3272,x:65.25,y:51.75},0).wait(1).to({scaleY:0.9687,rotation:4.4362,y:51.4},0).wait(1).to({scaleY:0.9609,rotation:5.5453,y:51.1},0).wait(1).to({scaleY:0.9531,rotation:6.6544,x:65.3,y:50.8},0).wait(1).to({scaleY:0.9453,rotation:7.7634,y:50.45},0).wait(1).to({scaleY:0.9375,rotation:8.8725,x:65.25,y:50.15},0).wait(1).to({scaleY:0.9297,rotation:9.9816,y:49.85},0).wait(1).to({rotation:7.8412,x:65.3,y:50.45},0).wait(1).to({rotation:5.7008,y:51},0).wait(1).to({scaleY:0.9296,rotation:3.5604,x:65.25,y:51.5},0).wait(1).to({scaleY:0.9297,rotation:1.42,x:65.3,y:52.05},0).wait(1).to({rotation:-0.7204,y:52.6},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-9.5,145.4,119);


(lib.ноги = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.ноги1();
	this.instance.setTransform(47.8,37.7,0.6438,0.5187,0,-15.6511,164.3484,65.3,52.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ноги, new cjs.Rectangle(0,0,95.7,75.3), null);


(lib.крылья_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ1();
	this.instance.setTransform(58.5,95.8,1,1,0,0,0,58.5,95.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:83,regY:67,scaleY:0.9818,rotation:3.3332,x:84.6,y:69.05},0).wait(1).to({scaleY:0.9637,rotation:6.6665,x:86.05,y:71.15},0).wait(1).to({scaleY:0.9455,rotation:9.9997,x:87.35,y:73.25},0).wait(1).to({scaleY:0.9273,rotation:13.333,x:88.45,y:75.5},0).wait(1).to({scaleY:0.9091,rotation:16.6662,x:89.45,y:77.75},0).wait(1).to({scaleY:0.891,rotation:19.9995,x:90.3,y:80.1},0).wait(1).to({scaleY:0.8728,rotation:23.3327,x:90.9,y:82.45},0).wait(1).to({scaleY:0.8546,rotation:26.666,x:91.35,y:84.8},0).wait(1).to({scaleY:0.8364,rotation:29.9992,x:91.75,y:87.25},0).wait(1).to({scaleY:0.8528,rotation:26.9993,x:91.4,y:85.1},0).wait(1).to({scaleY:0.8692,rotation:23.9994,x:91,y:82.9},0).wait(1).to({scaleY:0.8855,rotation:20.9994,x:90.5,y:80.8},0).wait(1).to({scaleY:0.9019,rotation:17.9995,x:89.8,y:78.7},0).wait(1).to({scaleY:0.9183,rotation:14.9996,x:88.95,y:76.65},0).wait(1).to({scaleY:0.9346,rotation:11.9997,x:88.05,y:74.6},0).wait(1).to({scaleY:0.951,rotation:8.9998,x:87,y:72.65},0).wait(1).to({scaleY:0.9674,rotation:5.9998,x:85.8,y:70.7},0).wait(1).to({scaleY:0.9837,rotation:2.9999,x:84.45,y:68.8},0).wait(1).to({scaleY:1.0001,rotation:0,x:83,y:67},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-4.4,200.1,181.70000000000002);


(lib.Анимация15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.тело_1();
	this.instance.setTransform(0,0.1,1.1508,1.1508,105.6557,0,0,89.2,79);

	this.instance_1 = new lib.ноги();
	this.instance_1.setTransform(-16.6,19.3,1.4975,1.1508,0,90.9277,-89.0717,47.6,37.6);

	this.instance_2 = new lib.ноги();
	this.instance_2.setTransform(-16.9,7.55,1.1508,1.1508,105.6557,0,0,48.1,37.6);

	this.instance_3 = new lib.крылья_1();
	this.instance_3.setTransform(60.45,-23.85,0.5969,0.5969,90.0059,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.2,-123.3,230.5,246.6);


(lib.Анимация14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.тело_1();
	this.instance.setTransform(0.05,0.15,1.4034,1.4034,9.4256,0,0,89.2,79.1);

	this.instance_1 = new lib.ноги();
	this.instance_1.setTransform(25.4,17.8,1.8261,1.4034,0,-5.3029,174.6979,47.7,37.7);

	this.instance_2 = new lib.ноги();
	this.instance_2.setTransform(11.25,19.65,1.4034,1.4034,9.4256,0,0,48,37.7);

	this.instance_3 = new lib.крылья_1();
	this.instance_3.setTransform(-37.05,-69.95,0.7279,0.7279,-6.2252,0,0,0.1,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.5,-129.8,283.1,259.70000000000005);


(lib.Анимация13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.тело_1();
	this.instance.setTransform(0.05,0.15,1.4034,1.4034,9.4256,0,0,89.2,79.1);

	this.instance_1 = new lib.ноги();
	this.instance_1.setTransform(25.4,17.8,1.8261,1.4034,0,-5.3029,174.6979,47.7,37.7);

	this.instance_2 = new lib.ноги();
	this.instance_2.setTransform(11.25,19.65,1.4034,1.4034,9.4256,0,0,48,37.7);

	this.instance_3 = new lib.крылья_1();
	this.instance_3.setTransform(-37.05,-69.95,0.7279,0.7279,-6.2252,0,0,0.1,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.5,-129.8,283.1,259.70000000000005);


(lib.Анимация12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.тело_1();
	this.instance.setTransform(0.1,-0.1,1.4439,1.4439,-27.98,0,0,89.2,79);

	this.instance_1 = new lib.ноги();
	this.instance_1.setTransform(31.75,-1.45,1.8789,1.4439,0,-42.708,137.2929,47.8,37.7);

	this.instance_2 = new lib.ноги();
	this.instance_2.setTransform(21.25,9,1.4439,1.4439,-27.98,0,0,47.8,37.7);

	this.instance_3 = new lib.крылья_1();
	this.instance_3.setTransform(-74.05,-34.2,0.749,0.749,-43.6305,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167.1,-161.1,334.29999999999995,322.29999999999995);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Анимация12("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-139.5,-138.9,279.2,277.8), null);


// stage content:
(lib.Безымянный1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.movieClip_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://www.doshkolka.rybakovfond.ru/poymay_komara");
			window.open("https://www.doshkolka.rybakovfond.ru/poymay_komara");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(121));

	// комар
	this.movieClip_1 = new lib.Symbol1();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(688.25,-8.55);

	this.instance = new lib.Анимация13("synched",0);
	this.instance.setTransform(459.75,481.5);

	this.instance_1 = new lib.Анимация14("synched",0);
	this.instance_1.setTransform(459.75,481.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация15("synched",0);
	this.instance_2.setTransform(84.75,411.45);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movieClip_1}]}).to({state:[{t:this.instance}]},23).to({state:[{t:this.instance_1}]},12).to({state:[{t:this.instance_2}]},14).to({state:[{t:this.instance_2}]},15).to({state:[{t:this.instance_2}]},25).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},14).to({state:[{t:this.instance_2}]},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).to({_off:true,x:459.75,y:481.5,mode:"synched",startPosition:0},23).wait(98));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({_off:false},0).to({_off:true,x:84.75,y:411.45},14).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({_off:false},14).wait(15).to({startPosition:0},0).to({regX:0.1,regY:0.1,scaleX:1.4611,scaleY:1.4611,rotation:68.4518,x:339.95,y:139.95},25).wait(10).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({scaleX:0.8649,scaleY:0.8649,rotation:-68.8096,x:390.05,y:330},14).to({x:-80,y:750},6).wait(1));

	// лампа3
	this.instance_3 = new lib.croppedlampa101();
	this.instance_3.setTransform(373.2,146.2,0.2953,0.2953,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(121));

	// свет3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,51,0.776)","rgba(255,255,204,0)"],[0,1],0,0,0,0,0,146.1).s().p("AwAQBQmpmoAApZQAApYGpmoQGompJYAAQJZAAGoGpQGpGoAAJYQAAJZmpGoQmoGppZAAQpYAAmompg");
	this.shape.setTransform(300,110);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(121));

	// лампа2
	this.instance_4 = new lib.croppedlampa101pngкопия();
	this.instance_4.setTransform(29.65,369.3,0.1953,0.1953,44.7024);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(121));

	// свет2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,51,0.776)","rgba(255,255,204,0)"],[0,1],0,0,0,0,0,146.1).s().p("AwAQBQmpmpAApYQAApXGpmpQGpmpJXAAQJZAAGoGpQGpGpAAJXQAAJYmpGpQmoGppZAAQpXAAmpmpg");
	this.shape_1.setTransform(19.9,433.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(121));

	// лампа
	this.instance_5 = new lib.croppedlampa101();
	this.instance_5.setTransform(424,490,0.2227,0.2227);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(121));

	// свет
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,51,0.776)","rgba(255,255,204,0)"],[0,1],0,0,0,0,0,146.1).s().p("AwBQBQmompAApYQAApXGomqQGpmoJYAAQJYAAGpGoQGpGqAAJXQAAJYmpGpQmpGppYAAQpYAAmpmpg");
	this.shape_2.setTransform(475,545);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(121));

	// фон
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#001515").s().p("EgvpAu4MAAAhdvMBfTAAAMAAABdvg");
	this.shape_3.setTransform(305,300);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("EgvpAu4MAAAhdvMBfTAAAMAAABdvg");
	this.shape_4.setTransform(305,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},119).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(127.9,130.3,727.6,703.5);
// library properties:
lib.properties = {
	id: '48F08643CAE4904B902D2A32547F62A5',
	width: 600,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/кома_atlas_1.png", id:"кома_atlas_1"},
		{src:"images/кома_atlas_2.png", id:"кома_atlas_2"},
		{src:"images/кома_atlas_3.png", id:"кома_atlas_3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['48F08643CAE4904B902D2A32547F62A5'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;