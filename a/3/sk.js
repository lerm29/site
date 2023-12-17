(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Безымянный_4_atlas_1", frames: [[1394,539,192,143],[1394,0,628,537],[0,0,1392,1123]]},
		{name:"Безымянный_4_atlas_2", frames: [[0,0,1392,1123]]},
		{name:"Безымянный_4_atlas_3", frames: [[0,0,1392,1123]]}
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



(lib.Безымянный2 = function() {
	this.initialize(img.Безымянный2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4167,3125);


(lib.колесо = function() {
	this.initialize(ss["Безымянный_4_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.крылья = function() {
	this.initialize(ss["Безымянный_4_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.машина = function() {
	this.initialize(ss["Безымянный_4_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.одниноги = function() {
	this.initialize(ss["Безымянный_4_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.тело = function() {
	this.initialize(ss["Безымянный_4_atlas_1"]);
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


(lib.Символ3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.колесо();
	this.instance.setTransform(0,0,0.4854,0.4702);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,93.2,67.3), null);


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


(lib.комар = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(25,20,0.1739,0.1739);

	this.instance_1 = new lib.ноги1();
	this.instance_1.setTransform(170.65,144.2,1.0322,0.8317,0,0,180,65.2,52.6);

	this.instance_2 = new lib.ноги1();
	this.instance_2.setTransform(180.25,144.2,0.8317,0.8317,0,0,0,65.3,52.6);

	this.instance_3 = new lib.крылья_1();
	this.instance_3.setTransform(110.95,33.1,0.8317,0.8317);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.комар, new cjs.Rectangle(25,20,242.10000000000002,195.4), null);


(lib.колесоо = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Символ3();
	this.instance.setTransform(51,42.5,1,1,0,0,0,51,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:46.6,regY:33.6,rotation:5.625,x:47.5,y:33.25},0).wait(1).to({rotation:11.25,x:48.4,y:32.95},0).wait(1).to({rotation:16.875,x:49.35,y:32.75},0).wait(1).to({rotation:22.5,x:50.3,y:32.65},0).wait(1).to({rotation:28.125,x:51.3},0).wait(1).to({rotation:33.75,x:52.25,y:32.75},0).wait(1).to({rotation:39.375,x:53.2,y:32.85},0).wait(1).to({rotation:45,x:54.15,y:33.15},0).wait(1).to({rotation:50.625,x:55.05,y:33.5},0).wait(1).to({rotation:56.25,x:55.9,y:33.95},0).wait(1).to({rotation:61.875,x:56.7,y:34.5},0).wait(1).to({rotation:67.5,x:57.5,y:35.1},0).wait(1).to({rotation:73.125,x:58.2,y:35.8},0).wait(1).to({rotation:78.75,x:58.8,y:36.5},0).wait(1).to({rotation:84.375,x:59.35,y:37.35},0).wait(1).to({rotation:90,x:59.85,y:38.15},0).wait(1).to({rotation:96.9231,x:60.3,y:39.25},0).wait(1).to({rotation:103.8462,x:60.65,y:40.4},0).wait(1).to({rotation:110.7692,x:60.85,y:41.55},0).wait(1).to({rotation:117.6923,y:42.75},0).wait(1).to({rotation:124.6154,x:60.75,y:43.95},0).wait(1).to({rotation:131.5385,x:60.45,y:45.1},0).wait(1).to({rotation:138.4615,x:60.05,y:46.25},0).wait(1).to({rotation:145.3846,x:59.55,y:47.3},0).wait(1).to({rotation:152.3077,x:58.95,y:48.35},0).wait(1).to({rotation:159.2308,x:58.2,y:49.25},0).wait(1).to({rotation:166.1538,x:57.25,y:50.1},0).wait(1).to({rotation:173.0769,x:56.35,y:50.75},0).wait(1).to({rotation:180,x:55.3,y:51.4},0).wait(1).to({rotation:153,x:58.85,y:48.4},0).wait(1).to({rotation:126,x:60.65,y:44.2},0).wait(1).to({rotation:99,x:60.35,y:39.65},0).wait(1).to({rotation:72,x:58.05,y:35.65},0).wait(1).to({rotation:45,x:54.15,y:33.15},0).wait(1).to({rotation:18,x:49.5,y:32.7},0).wait(1).to({rotation:-9,x:45.3,y:34.35},0).wait(1).to({rotation:-36,x:42.2,y:37.85},0).wait(1).to({rotation:-63,x:41.1,y:42.35},0).wait(1).to({rotation:-90,x:42.05,y:46.85},0).wait(1).to({rotation:-81.8182,x:41.5,y:45.5},0).wait(1).to({rotation:-73.6364,x:41.25,y:44.15},0).wait(1).to({rotation:-65.4545,x:41.05,y:42.7},0).wait(1).to({rotation:-57.2727,x:41.15,y:41.3},0).wait(1).to({rotation:-49.0909,x:41.4,y:39.95},0).wait(1).to({rotation:-40.9091,x:41.85,y:38.6},0).wait(1).to({rotation:-32.7273,x:42.5,y:37.3},0).wait(1).to({rotation:-24.5455,x:43.3,y:36.2},0).wait(1).to({rotation:-16.3636,x:44.25,y:35.15},0).wait(1).to({rotation:-8.1818,x:45.45,y:34.25},0).wait(1).to({rotation:0,x:46.6,y:33.6},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.3,-23.8,132.6,126.2);


(lib.машина_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.колесоо();
	this.instance.setTransform(77.95,217.6,1,1,0,0,0,46.6,33.6);

	this.instance_1 = new lib.колесоо();
	this.instance_1.setTransform(210.6,217.6,1,1,0,0,0,46.6,33.6);

	this.instance_2 = new lib.машина();
	this.instance_2.setTransform(0,0,0.4764,0.4764);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.машина_1, new cjs.Rectangle(0,0,299.2,255.9), null);


// stage content:
(lib.Безымянный4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_23
	this.instance = new lib.машина_1();
	this.instance.setTransform(1341.9,511.25,1,1,-8.7231,0,0,149.6,127.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:143.2,scaleX:0.9976,scaleY:0.9976,rotation:-6.105,x:1333.95,y:528.8},0).wait(1).to({scaleX:0.9953,scaleY:0.9953,rotation:-3.6677,x:1323.75,y:530.5},0).wait(1).to({scaleX:0.9929,scaleY:0.9929,rotation:-1.5102,x:1313.75,y:531.75},0).wait(1).to({scaleX:0.9905,scaleY:0.9905,rotation:0.3592,x:1303.9,y:532.65},0).wait(1).to({scaleX:0.9881,scaleY:0.9881,rotation:1.936,x:1294.1,y:533.2},0).wait(1).to({scaleX:0.9858,scaleY:0.9858,rotation:3.219,x:1284.45,y:533.6},0).wait(1).to({scaleX:0.9834,scaleY:0.9834,rotation:4.2083,x:1274.9,y:533.8},0).wait(1).to({scaleX:0.981,scaleY:0.981,rotation:4.9051,x:1265.5},0).wait(1).to({scaleX:0.9786,scaleY:0.9786,rotation:5.31,x:1256.1},0).wait(1).to({scaleX:0.9763,scaleY:0.9763,rotation:5.425,x:1246.8,y:533.65},0).wait(1).to({scaleX:0.9739,scaleY:0.9739,rotation:5.248,x:1237.5,y:533.55},0).wait(1).to({scaleX:0.9715,scaleY:0.9715,rotation:4.7781,x:1228.25,y:533.65},0).wait(1).to({scaleX:0.9692,scaleY:0.9692,rotation:4.0137,x:1219,y:533.75},0).wait(1).to({scaleX:0.9668,scaleY:0.9668,rotation:2.9517,x:1209.75,y:534},0).wait(1).to({scaleX:0.9644,scaleY:0.9644,rotation:1.5895,x:1200.45,y:534.45},0).wait(1).to({scaleX:0.962,scaleY:0.962,rotation:-0.0749,x:1191.15,y:535.15},0).wait(1).to({scaleX:0.9596,scaleY:0.9596,rotation:-0.0696,x:1179.7,y:536.2},0).wait(1).to({scaleX:0.9573,scaleY:0.9573,rotation:-0.0389,x:1168.3,y:537.2},0).wait(1).to({scaleX:0.9549,scaleY:0.9549,rotation:-0.0058,x:1156.9,y:538.2},0).wait(1).to({scaleX:0.9525,scaleY:0.9525,rotation:0.0298,x:1145.65,y:539.15},0).wait(1).to({scaleX:0.9501,scaleY:0.9501,rotation:0.0678,x:1134.35,y:540.1},0).wait(1).to({scaleX:0.9478,scaleY:0.9478,rotation:0.1082,x:1123.15,y:541.05},0).wait(1).to({scaleX:0.9454,scaleY:0.9454,rotation:0.1512,x:1112,y:542.05},0).wait(1).to({scaleX:0.943,scaleY:0.943,rotation:0.1968,x:1100.8,y:543},0).wait(1).to({scaleX:0.9407,scaleY:0.9407,rotation:0.2449,x:1089.75,y:543.9},0).wait(1).to({scaleX:0.9383,scaleY:0.9383,rotation:0.2956,x:1078.7,y:544.75},0).wait(1).to({scaleX:0.9359,scaleY:0.9359,rotation:0.3489,x:1067.75,y:545.65},0).wait(1).to({scaleX:0.9335,scaleY:0.9335,rotation:0.4048,x:1056.8,y:546.6},0).wait(1).to({scaleX:0.9312,scaleY:0.9312,rotation:0.4634,x:1045.85,y:547.45},0).wait(1).to({scaleX:0.9288,scaleY:0.9288,rotation:0.5248,x:1035.05,y:548.25},0).wait(1).to({scaleX:0.9264,scaleY:0.9264,rotation:0.5888,x:1024.25,y:549.1},0).wait(1).to({scaleX:0.924,scaleY:0.924,rotation:0.6556,x:1013.4,y:549.95},0).wait(1).to({scaleX:0.9216,scaleY:0.9216,rotation:0.7251,x:1002.7,y:550.7},0).wait(1).to({scaleX:0.9193,scaleY:0.9193,rotation:0.7975,x:991.95,y:551.55},0).wait(1).to({scaleX:0.9169,scaleY:0.9169,rotation:0.8726,x:981.35,y:552.3},0).wait(1).to({scaleX:0.9145,scaleY:0.9145,rotation:0.9506,x:970.75,y:553.05},0).wait(1).to({scaleX:0.9121,scaleY:0.9121,rotation:1.0315,x:960.15,y:553.75},0).wait(1).to({scaleX:0.9098,scaleY:0.9098,rotation:1.1152,x:949.6,y:554.5},0).wait(1).to({scaleX:0.9074,scaleY:0.9074,rotation:1.2018,x:939.15,y:555.2},0).wait(1).to({scaleX:0.905,scaleY:0.905,rotation:1.2913,x:928.65,y:555.85},0).wait(1).to({scaleX:0.9027,scaleY:0.9027,rotation:1.3838,x:918.25,y:556.5},0).wait(1).to({scaleX:0.9003,scaleY:0.9003,rotation:1.4791,x:907.85,y:557.1},0).wait(1).to({scaleX:0.8979,scaleY:0.8979,rotation:1.5775,x:897.45,y:557.8},0).wait(1).to({scaleX:0.8955,scaleY:0.8955,rotation:1.6788,x:887.15,y:558.35},0).wait(1).to({scaleX:0.8931,scaleY:0.8931,rotation:1.7832,x:876.85,y:558.95},0).wait(1).to({scaleX:0.8908,scaleY:0.8908,rotation:1.8905,x:866.65,y:559.5},0).wait(1).to({scaleX:0.8884,scaleY:0.8884,rotation:2.0008,x:856.35,y:560.05},0).wait(1).to({scaleX:0.886,scaleY:0.886,rotation:2.1142,x:846.2,y:560.55},0).wait(1).to({scaleX:0.8837,scaleY:0.8837,rotation:2.2306,x:836.1,y:561.05},0).wait(1).to({scaleX:0.8813,scaleY:0.8813,rotation:2.3501,x:826,y:561.5},0).wait(1).to({scaleX:0.8789,scaleY:0.8789,rotation:2.4726,x:815.8,y:561.95},0).wait(1).to({scaleX:0.8765,scaleY:0.8765,rotation:2.5981,x:805.75,y:562.4},0).wait(1).to({scaleX:0.8741,scaleY:0.8741,rotation:2.7268,x:795.7,y:562.75},0).wait(1).to({scaleX:0.8718,scaleY:0.8718,rotation:2.8585,x:785.7,y:563.15},0).wait(1).to({scaleX:0.8694,scaleY:0.8694,rotation:2.9933,x:775.75,y:563.55},0).wait(1).to({scaleX:0.867,scaleY:0.867,rotation:3.1312,x:765.8,y:563.8},0).wait(1).to({scaleX:0.8647,scaleY:0.8647,rotation:3.2721,x:755.9,y:564.15},0).wait(1).to({scaleX:0.8623,scaleY:0.8623,rotation:3.4161,x:746,y:564.4},0).wait(1).to({scaleX:0.8599,scaleY:0.8599,rotation:3.5632,x:736.15,y:564.65},0).wait(1).to({scaleX:0.8575,scaleY:0.8575,rotation:3.7133,x:726.25,y:564.9},0).wait(1).to({scaleX:0.8552,scaleY:0.8552,rotation:3.8666,x:716.45,y:565.1},0).wait(1).to({scaleX:0.8528,scaleY:0.8528,rotation:4.0228,x:706.65,y:565.2},0).wait(1).to({scaleX:0.8504,scaleY:0.8504,rotation:4.1822,x:696.85,y:565.4},0).wait(1).to({scaleX:0.848,scaleY:0.848,rotation:4.3445,x:687.1,y:565.5},0).wait(1).to({scaleX:0.8456,scaleY:0.8456,rotation:4.5099,x:677.4,y:565.55},0).wait(1).to({scaleX:0.8433,scaleY:0.8433,rotation:4.6784,x:667.7,y:565.65},0).wait(1).to({scaleX:0.8409,scaleY:0.8409,rotation:4.8498,x:658,y:565.7},0).wait(1).to({scaleX:0.8385,scaleY:0.8385,rotation:5.0242,x:648.35,y:565.65},0).wait(1).to({scaleX:0.8362,scaleY:0.8362,rotation:5.202,x:638.65},0).wait(1).to({scaleX:0.8338,scaleY:0.8338,rotation:5.382,x:629.05,y:565.55},0).wait(1).to({scaleX:0.8314,scaleY:0.8314,rotation:5.565,x:619.45,y:565.45},0).wait(1).to({scaleX:0.829,scaleY:0.829,rotation:5.751,x:609.85,y:565.35},0).wait(1).to({scaleX:0.8267,scaleY:0.8267,rotation:5.94,x:600.3,y:565.2},0).wait(1).to({scaleX:0.8243,scaleY:0.8243,rotation:6.132,x:590.75,y:564.95},0).wait(1).to({scaleX:0.8219,scaleY:0.8219,rotation:6.327,x:581.2,y:564.8},0).wait(1).to({scaleX:0.8195,scaleY:0.8195,rotation:6.524,x:571.65,y:564.55},0).wait(1).to({scaleX:0.8172,scaleY:0.8172,rotation:6.725,x:562.15,y:564.2},0).wait(1).to({scaleX:0.8148,scaleY:0.8148,rotation:6.928,x:552.7,y:563.9},0).wait(1).to({scaleX:0.8124,scaleY:0.8124,rotation:7.133,x:543.2,y:563.6},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:7.342,x:533.75,y:563.2},0).wait(1).to({scaleX:0.8077,scaleY:0.8077,rotation:7.553,x:524.3,y:562.8},0).wait(1).to({scaleX:0.8053,scaleY:0.8053,rotation:7.766,x:514.8,y:562.35},0).wait(1).to({scaleX:0.8029,scaleY:0.8029,rotation:7.983,x:505.4,y:561.85},0).wait(1).to({scaleX:0.8005,scaleY:0.8005,rotation:8.201,x:496,y:561.3},0).wait(1).to({scaleX:0.7982,scaleY:0.7982,rotation:8.422,x:486.55,y:560.75},0).wait(1).to({scaleX:0.7958,scaleY:0.7958,rotation:8.646,x:477.15,y:560.15},0).wait(1).to({scaleX:0.7934,scaleY:0.7934,rotation:8.872,x:467.75,y:559.5},0).wait(1).to({scaleX:0.791,scaleY:0.791,rotation:9.1,x:458.4,y:558.85},0).wait(1).to({scaleX:0.7887,scaleY:0.7887,rotation:9.33,x:449,y:558.2},0).wait(1).to({scaleX:0.7863,scaleY:0.7863,rotation:9.563,x:439.65,y:557.45},0).wait(1).to({scaleX:0.7839,scaleY:0.7839,rotation:9.798,x:430.25,y:556.6},0).wait(1).to({scaleX:0.7815,scaleY:0.7815,rotation:10.035,x:420.95,y:555.8},0).wait(1).to({scaleX:0.7792,scaleY:0.7792,rotation:10.274,x:411.6,y:554.95},0).wait(1).to({scaleX:0.7768,scaleY:0.7768,rotation:10.515,x:402.2,y:554.05},0).wait(1).to({scaleX:0.7744,scaleY:0.7744,rotation:10.758,x:392.85,y:553.1},0).wait(1).to({scaleX:0.7721,scaleY:0.7721,rotation:11.003,x:383.55,y:552.1},0).wait(1).to({scaleX:0.7697,scaleY:0.7697,rotation:11.249,x:374.25,y:551.1},0).wait(1).to({scaleX:0.7673,scaleY:0.7673,rotation:11.498,x:364.9,y:550.05},0).wait(1).to({scaleX:0.7649,scaleY:0.7649,rotation:11.748,x:355.6,y:549},0).wait(1).to({scaleX:0.7626,scaleY:0.7626,rotation:11.999,x:346.25,y:547.8},0).wait(1).to({scaleX:0.7602,scaleY:0.7602,rotation:12.253,x:336.95,y:546.7},0).wait(1).to({scaleX:0.7578,scaleY:0.7578,rotation:12.507,x:327.6,y:545.45},0).wait(1).to({scaleX:0.7554,scaleY:0.7554,rotation:12.764,x:318.25,y:544.15},0).wait(1).to({scaleX:0.753,scaleY:0.753,rotation:13.021,x:308.95,y:542.85},0).wait(1).to({scaleX:0.7507,scaleY:0.7507,rotation:13.28,x:299.6,y:541.5},0).wait(1).to({scaleX:0.7483,scaleY:0.7483,rotation:13.54,x:290.3,y:540.1},0).wait(1).to({scaleX:0.7459,scaleY:0.7459,rotation:13.801,x:280.9,y:538.65},0).wait(1).to({scaleX:0.7435,scaleY:0.7435,rotation:14.063,x:271.65,y:537.2},0).wait(1).to({scaleX:0.7412,scaleY:0.7412,rotation:14.327,x:262.3,y:535.7},0).wait(1).to({scaleX:0.7388,scaleY:0.7388,rotation:14.591,x:252.95,y:534.1},0).wait(1).to({scaleX:0.7364,scaleY:0.7364,rotation:14.856,x:243.6,y:532.5},0).wait(1).to({scaleX:0.7341,scaleY:0.7341,rotation:15.122,x:234.25,y:530.8},0).wait(1).to({scaleX:0.7317,scaleY:0.7317,rotation:15.388,x:224.9,y:529.1},0).wait(1).to({scaleX:0.7293,scaleY:0.7293,rotation:15.655,x:215.5,y:527.35},0).wait(1).to({scaleX:0.7269,scaleY:0.7269,rotation:15.923,x:206.1,y:525.55},0).wait(1).to({scaleX:0.7246,scaleY:0.7246,rotation:16.191,x:196.75,y:523.65},0).wait(1).to({scaleX:0.7222,scaleY:0.7222,rotation:16.46,x:187.35,y:521.8},0).wait(1).to({scaleX:0.7198,scaleY:0.7198,rotation:16.729,x:177.95,y:519.85},0).wait(1).to({scaleX:0.7174,scaleY:0.7174,rotation:16.998,x:168.55,y:517.85},0).wait(1).to({scaleX:0.7151,scaleY:0.7151,rotation:17.268,x:159.1,y:515.85},0).wait(1).to({scaleX:0.7127,scaleY:0.7127,rotation:17.538,x:149.7,y:513.75},0).wait(1).to({scaleX:0.7103,scaleY:0.7103,rotation:17.807,x:140.25,y:511.6},0).wait(1).to({scaleX:0.7079,scaleY:0.7079,rotation:18.077,x:130.85,y:509.35},0).wait(1).to({scaleX:0.7056,scaleY:0.7056,rotation:18.347,x:121.35,y:507.15},0).wait(1).to({scaleX:0.7032,scaleY:0.7032,rotation:18.616,x:111.85,y:504.9},0).wait(1).to({scaleX:0.7008,scaleY:0.7008,rotation:18.886,x:102.35,y:502.55},0).wait(1).to({scaleX:0.6984,scaleY:0.6984,rotation:19.155,x:92.85,y:500.2},0).wait(1).to({scaleX:0.6961,scaleY:0.6961,rotation:19.423,x:83.3,y:497.75},0).wait(1).to({scaleX:0.6937,scaleY:0.6937,rotation:19.692,x:73.8,y:495.15},0).wait(1).to({scaleX:0.6913,scaleY:0.6913,rotation:19.959,x:64.2,y:492.65},0).wait(1).to({scaleX:0.6889,scaleY:0.6889,rotation:20.227,x:54.7,y:490.05},0).wait(1).to({scaleX:0.6865,scaleY:0.6865,rotation:20.493,x:45.15,y:487.45},0).wait(1).to({scaleX:0.6842,scaleY:0.6842,rotation:20.759,x:35.55,y:484.75},0).wait(1).to({scaleX:0.6818,scaleY:0.6818,rotation:21.025,x:25.85,y:482},0).wait(1).to({scaleX:0.6794,scaleY:0.6794,rotation:21.289,x:16.25,y:479.15},0).wait(1).to({scaleX:0.6771,scaleY:0.6771,rotation:21.553,x:6.6,y:476.25},0).wait(1).to({scaleX:0.6747,scaleY:0.6747,rotation:21.816,x:-3.1,y:473.4},0).wait(1).to({scaleX:0.6723,scaleY:0.6723,rotation:22.077,x:-12.85,y:470.4},0).wait(1).to({scaleX:0.6699,scaleY:0.6699,rotation:22.338,x:-22.55,y:467.4},0).wait(1).to({scaleX:0.6676,scaleY:0.6676,rotation:22.598,x:-32.3,y:464.3},0).wait(1).to({scaleX:0.6652,scaleY:0.6652,rotation:22.857,x:-42.05,y:461.15},0).wait(1).to({scaleX:0.6628,scaleY:0.6628,rotation:23.114,x:-51.85,y:457.95},0).wait(1).to({scaleX:0.6604,scaleY:0.6604,rotation:23.37,x:-61.65,y:454.7},0).wait(1).to({scaleX:0.6581,scaleY:0.6581,rotation:23.625,x:-71.5,y:451.45},0).wait(1).to({scaleX:0.6557,scaleY:0.6557,rotation:23.879,x:-81.35,y:448.05},0).wait(1).to({scaleX:0.6533,scaleY:0.6533,rotation:24.131,x:-91.3,y:444.65},0).wait(1).to({scaleX:0.6509,scaleY:0.6509,rotation:24.382,x:-101.2,y:441.15},0).wait(1).to({scaleX:0.6486,scaleY:0.6486,rotation:24.632,x:-111.15,y:437.6},0).wait(1));

	// Слой_7
	this.instance_1 = new lib.комар();
	this.instance_1.setTransform(19.5,-183.5,0.3542,0.3833,0,45.0016,-134.9983,143.2,116);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:147.7,regY:117.7,scaleX:0.3564,scaleY:0.3856,skewX:45.2129,skewY:-134.7871,x:21.75,y:-176},0).wait(1).to({scaleX:0.3585,scaleY:0.3879,skewX:45.4052,skewY:-134.5948,x:25.6,y:-167.95},0).wait(1).to({scaleX:0.3606,scaleY:0.3902,skewX:45.5692,skewY:-134.4308,x:29.3,y:-160.05},0).wait(1).to({scaleX:0.3626,scaleY:0.3925,skewX:45.7038,skewY:-134.2962,x:33,y:-152.15},0).wait(1).to({scaleX:0.3647,scaleY:0.3947,skewX:45.8079,skewY:-134.1921,x:36.6,y:-144.35},0).wait(1).to({scaleX:0.3668,scaleY:0.397,skewX:45.8804,skewY:-134.1196,x:40.15,y:-136.65},0).wait(1).to({scaleX:0.3689,scaleY:0.3993,skewX:45.92,skewY:-134.08,x:43.65,y:-129.05},0).wait(1).to({scaleX:0.371,scaleY:0.4015,skewX:45.9258,skewY:-134.0742,x:47.1,y:-121.55},0).wait(1).to({scaleX:0.3731,scaleY:0.4038,skewX:45.8967,skewY:-134.1033,x:50.5,y:-114.05},0).wait(1).to({scaleX:0.3752,scaleY:0.4061,skewX:45.8317,skewY:-134.1683,x:53.9,y:-106.75},0).wait(1).to({scaleX:0.3773,scaleY:0.4083,skewX:45.7297,skewY:-134.2703,x:57.25,y:-99.5},0).wait(1).to({scaleX:0.3794,scaleY:0.4106,skewX:45.5898,skewY:-134.4102,x:60.65,y:-92.35},0).wait(1).to({scaleX:0.3815,scaleY:0.4129,skewX:45.4112,skewY:-134.5888,x:63.95,y:-85.25},0).wait(1).to({scaleX:0.3836,scaleY:0.4151,skewX:45.1929,skewY:-134.8071,x:67.2,y:-78.2},0).wait(1).to({scaleX:0.3857,scaleY:0.4174,skewX:44.9343,skewY:-135.0657,x:70.5,y:-71.25},0).wait(1).to({scaleX:0.3878,scaleY:0.4197,skewX:44.6345,skewY:-135.3655,x:73.85,y:-64.4},0).wait(1).to({scaleX:0.3899,scaleY:0.4219,skewX:44.2931,skewY:-135.7069,x:77.15,y:-57.6},0).wait(1).to({scaleX:0.392,scaleY:0.4242,skewX:43.9094,skewY:-136.0906,x:80.5,y:-50.95},0).wait(1).to({scaleX:0.3941,scaleY:0.4265,skewX:43.483,skewY:-136.517,x:83.85,y:-44.3},0).wait(1).to({scaleX:0.3962,scaleY:0.4288,skewX:43.0137,skewY:-136.9863,x:87.25,y:-37.7},0).wait(1).to({scaleX:0.3983,scaleY:0.431,skewX:42.5013,skewY:-137.4987,x:90.7,y:-31.25},0).wait(1).to({scaleX:0.4004,scaleY:0.4333,skewX:41.9457,skewY:-138.0543,x:94.05,y:-24.85},0).wait(1).to({scaleX:0.4025,scaleY:0.4356,skewX:41.3471,skewY:-138.6529,x:97.6,y:-18.45},0).wait(1).to({scaleX:0.4046,scaleY:0.4378,skewX:40.7058,skewY:-139.2942,x:101.15,y:-12.2},0).wait(1).to({scaleX:0.4067,scaleY:0.4401,skewX:40.0222,skewY:-139.9778,x:104.75,y:-6.05},0).wait(1).to({scaleX:0.4088,scaleY:0.4424,skewX:39.2971,skewY:-140.7029,x:108.35,y:0.1},0).wait(1).to({scaleX:0.4109,scaleY:0.4446,skewX:38.5313,skewY:-141.4687,x:112.1,y:6.15},0).wait(1).to({scaleX:0.413,scaleY:0.4469,skewX:37.7259,skewY:-142.2741,x:115.85,y:12.1},0).wait(1).to({scaleX:0.4151,scaleY:0.4492,skewX:36.8821,skewY:-143.1179,x:119.7,y:18.05},0).wait(1).to({scaleX:0.4172,scaleY:0.4514,skewX:36.0015,skewY:-143.9985,x:123.7,y:23.9},0).wait(1).to({scaleX:0.4193,scaleY:0.4537,skewX:35.0857,skewY:-144.9143,x:127.75,y:29.65},0).wait(1).to({scaleX:0.4214,scaleY:0.456,skewX:34.1368,skewY:-145.8632,x:131.9,y:35.4},0).wait(1).to({scaleX:0.4235,scaleY:0.4583,skewX:33.1568,skewY:-146.8432,x:136.1,y:41.05},0).wait(1).to({scaleX:0.4255,scaleY:0.4605,skewX:32.1481,skewY:-147.8519,x:140.45,y:46.65},0).wait(1).to({scaleX:0.4276,scaleY:0.4628,skewX:31.1131,skewY:-148.8869,x:144.85,y:52.2},0).wait(1).to({scaleX:0.4297,scaleY:0.4651,skewX:30.0547,skewY:-149.9453,x:149.45,y:57.7},0).wait(1).to({scaleX:0.4318,scaleY:0.4673,skewX:28.9755,skewY:-151.0245,x:154.15,y:63.1},0).wait(1).to({scaleX:0.4339,scaleY:0.4696,skewX:27.8786,skewY:-152.1214,x:158.95,y:68.45},0).wait(1).to({scaleX:0.436,scaleY:0.4719,skewX:26.7669,skewY:-153.2331,x:163.9,y:73.75},0).wait(1).to({scaleX:0.4381,scaleY:0.4741,skewX:25.6435,skewY:-154.3565,x:169,y:79},0).wait(1).to({scaleX:0.4402,scaleY:0.4764,skewX:24.5115,skewY:-155.4885,x:174.25,y:84.2},0).wait(1).to({scaleX:0.4423,scaleY:0.4787,skewX:23.374,skewY:-156.626,x:179.65,y:89.3},0).wait(1).to({scaleX:0.4444,scaleY:0.4809,skewX:22.2341,skewY:-157.7659,x:185.2,y:94.35},0).wait(1).to({scaleX:0.4465,scaleY:0.4832,skewX:21.0948,skewY:-158.9052,x:190.85,y:99.35},0).wait(1).to({scaleX:0.4486,scaleY:0.4855,skewX:19.9589,skewY:-160.0411,x:196.7,y:104.35},0).wait(1).to({scaleX:0.4507,scaleY:0.4878,skewX:18.8293,skewY:-161.1707,x:202.75,y:109.2},0).wait(1).to({scaleX:0.4528,scaleY:0.49,skewX:17.7086,skewY:-162.2914,x:209,y:114.05},0).wait(1).to({scaleX:0.4549,scaleY:0.4923,skewX:16.5992,skewY:-163.4008,x:215.4,y:118.85},0).wait(1).to({scaleX:0.457,scaleY:0.4946,skewX:15.5035,skewY:-164.4965,x:222,y:123.6},0).wait(1).to({scaleX:0.4591,scaleY:0.4968,skewX:14.4235,skewY:-165.5765,x:228.85,y:128.25},0).wait(1).to({scaleX:0.4612,scaleY:0.4991,skewX:13.361,skewY:-166.639,x:235.85,y:132.85},0).wait(1).to({scaleX:0.4633,scaleY:0.5014,skewX:12.3179,skewY:-167.6821,x:243,y:137.45},0).wait(1).to({scaleX:0.4654,scaleY:0.5036,skewX:11.2956,skewY:-168.7044,x:250.45,y:142},0).wait(1).to({scaleX:0.4675,scaleY:0.5059,skewX:10.2953,skewY:-169.7047,x:258.05,y:146.45},0).wait(1).to({scaleX:0.4696,scaleY:0.5082,skewX:9.3181,skewY:-170.6818,x:265.95,y:150.85},0).wait(1).to({scaleX:0.4717,scaleY:0.5104,skewX:8.365,skewY:-171.635,x:274.05,y:155.25},0).wait(1).to({scaleX:0.4738,scaleY:0.5127,skewX:7.4366,skewY:-172.5634,x:282.4,y:159.6},0).wait(1).to({scaleX:0.4759,scaleY:0.515,skewX:6.5334,skewY:-173.4666,x:290.95,y:163.85},0).wait(1).to({scaleX:0.478,scaleY:0.5173,skewX:5.6559,skewY:-174.3441,x:299.8,y:168.15},0).wait(1).to({scaleX:0.4801,scaleY:0.5195,skewX:4.8042,skewY:-175.1958,x:308.9,y:172.3},0).wait(1).to({scaleX:0.4822,scaleY:0.5218,skewX:3.9784,skewY:-176.0216,x:318.25,y:176.4},0).wait(1).to({scaleX:0.4843,scaleY:0.5241,skewX:3.1786,skewY:-176.8214,x:327.9,y:180.55},0).wait(1).to({scaleX:0.4864,scaleY:0.5263,skewX:2.4045,skewY:-177.5955,x:337.75,y:184.6},0).wait(1).to({scaleX:0.4885,scaleY:0.5286,skewX:1.656,skewY:-178.344,x:347.9,y:188.6},0).wait(1).to({scaleX:0.4905,scaleY:0.5309,skewX:0.9327,skewY:-179.0673,x:358.35,y:192.5},0).wait(1).to({scaleX:0.4927,scaleY:0.5331,skewX:0.2343,skewY:-179.7657,x:369.1,y:196.45},0).wait(1).to({scaleX:0.4947,scaleY:0.5354,skewX:-0.4398,skewY:-180.4398,x:380.15,y:200.3},0).wait(1).to({scaleX:0.4968,scaleY:0.5377,skewX:-1.0899,skewY:-181.0899,x:391.5,y:204.15},0).wait(1).to({scaleX:0.4989,scaleY:0.5399,skewX:-1.7167,skewY:-181.7167,x:403.15,y:207.95},0).wait(1).to({scaleX:0.501,scaleY:0.5422,skewX:-2.3207,skewY:-182.3207,x:415.1,y:211.75},0).wait(1).to({scaleX:0.5031,scaleY:0.5445,skewX:-2.9024,skewY:-182.9024,x:427.4,y:215.45},0).wait(1).to({scaleX:0.5052,scaleY:0.5467,skewX:-3.4627,skewY:-183.4627,x:440,y:219.15},0).wait(1).to({scaleX:0.5073,scaleY:0.549,skewX:-4.0019,skewY:-184.0019,x:452.95,y:222.8},0).wait(1).to({scaleX:0.5094,scaleY:0.5513,skewX:-4.5209,skewY:-184.5209,x:466.3,y:226.4},0).wait(1).to({scaleX:0.5115,scaleY:0.5536,skewX:-5.0202,skewY:-185.0202,x:479.95,y:229.95},0).wait(1).to({scaleX:0.5136,scaleY:0.5558,skewX:-5.5004,skewY:-185.5004,x:493.95,y:233.45},0).wait(1).to({scaleX:0.5157,scaleY:0.5581,skewX:-5.9623,skewY:-185.9623,x:508.3,y:237},0).wait(1).to({scaleX:0.5178,scaleY:0.5604,skewX:-6.4065,skewY:-186.4065,x:523.05,y:240.5},0).wait(1).to({scaleX:0.5199,scaleY:0.5626,skewX:-6.8335,skewY:-186.8335,x:538.2,y:243.9},0).wait(1).to({scaleX:0.522,scaleY:0.5649,skewX:-7.244,skewY:-187.244,x:553.7,y:247.25},0).wait(1).to({scaleX:0.5241,scaleY:0.5672,skewX:-7.6387,skewY:-187.6387,x:569.55,y:250.65},0).wait(1).to({scaleX:0.5262,scaleY:0.5694,skewX:-8.018,skewY:-188.018,x:585.85,y:254},0).wait(1).to({scaleX:0.5283,scaleY:0.5717,skewX:-8.3825,skewY:-188.3825,x:602.55,y:257.25},0).wait(1).to({scaleX:0.5304,scaleY:0.574,skewX:-8.7329,skewY:-188.7329,x:619.6,y:260.55},0).wait(1).to({scaleX:0.5325,scaleY:0.5762,skewX:-9.0697,skewY:-189.0697,x:637.2,y:263.8},0).wait(1).to({scaleX:0.5346,scaleY:0.5785,skewX:-10.8392,skewY:-190.8392,x:647.1,y:265.5},0).wait(1).to({scaleX:0.5367,scaleY:0.5808,skewX:-12.5915,skewY:-192.5915,x:657.2,y:266.95},0).wait(1).to({scaleX:0.5388,scaleY:0.5831,skewX:-14.2648,skewY:-194.2648,x:667.3,y:268},0).wait(1).to({scaleX:0.5409,scaleY:0.5853,skewX:-15.8558,skewY:-195.8558,x:677.45,y:268.85},0).wait(1).to({scaleX:0.543,scaleY:0.5876,skewX:-17.3619,skewY:-197.3619,x:687.75,y:269.4},0).wait(1).to({scaleX:0.5451,scaleY:0.5899,skewX:-18.7815,skewY:-198.7815,x:698.1,y:269.65},0).wait(1).to({scaleX:0.5472,scaleY:0.5921,skewX:-20.1135,skewY:-200.1135,x:708.5,y:269.7},0).wait(1).to({scaleX:0.5492,scaleY:0.5944,skewX:-21.3577,skewY:-201.3577,x:719.05,y:269.5},0).wait(1).to({scaleX:0.5514,scaleY:0.5967,skewX:-22.5142,skewY:-202.5142,x:729.6,y:269.05},0).wait(1).to({scaleX:0.5534,scaleY:0.5989,skewX:-23.5838,skewY:-203.5838,x:740.25,y:268.4},0).wait(1).to({scaleX:0.5555,scaleY:0.6012,skewX:-24.5674,skewY:-204.5674,x:750.95,y:267.5},0).wait(1).to({scaleX:0.5576,scaleY:0.6035,skewX:-25.4664,skewY:-205.4664,x:761.85,y:266.45},0).wait(1).to({scaleX:0.5597,scaleY:0.6057,skewX:-26.2823,skewY:-206.2823,x:772.7,y:265.25},0).wait(1).to({scaleX:0.5618,scaleY:0.608,skewX:-27.0166,skewY:-207.0166,x:783.65,y:263.9},0).wait(1).to({scaleX:0.5639,scaleY:0.6103,skewX:-27.6712,skewY:-207.6712,x:794.75,y:262.4},0).wait(1).to({scaleX:0.566,scaleY:0.6125,skewX:-28.2479,skewY:-208.2479,x:805.85,y:260.7},0).wait(1).to({scaleX:0.5681,scaleY:0.6148,skewX:-28.7484,skewY:-208.7484,x:817.1,y:258.9},0).wait(1).to({scaleX:0.5702,scaleY:0.6171,skewX:-29.1746,skewY:-209.1746,x:828.4,y:257},0).wait(1).to({scaleX:0.5723,scaleY:0.6193,skewX:-29.5281,skewY:-209.5281,x:839.8,y:255.05},0).wait(1).to({scaleX:0.5744,scaleY:0.6216,skewX:-29.8106,skewY:-209.8106,x:851.25,y:253},0).wait(1).to({scaleX:0.5765,scaleY:0.6239,skewX:-30.0238,skewY:-210.0238,x:862.85,y:250.85},0).wait(1).to({scaleX:0.5786,scaleY:0.6262,skewX:-30.1692,skewY:-210.1692,x:874.45,y:248.6},0).wait(1).to({scaleX:0.5807,scaleY:0.6284,skewX:-30.2481,skewY:-210.2481,x:886.15,y:246.4},0).wait(1).to({scaleX:0.5828,scaleY:0.6307,skewX:-30.2621,skewY:-210.2621,x:897.95,y:244.1},0).wait(1).to({scaleX:0.5849,scaleY:0.633,skewX:-30.2122,skewY:-210.2122,x:909.85,y:241.85},0).wait(1).to({scaleX:0.587,scaleY:0.6352,skewX:-30.0999,skewY:-210.0999,x:921.8,y:239.6},0).wait(1).to({scaleX:0.5891,scaleY:0.6375,skewX:-29.926,skewY:-209.926,x:933.85,y:237.3},0).wait(1).to({scaleX:0.5912,scaleY:0.6398,skewX:-29.6918,skewY:-209.6918,x:945.95,y:235},0).wait(1).to({scaleX:0.5933,scaleY:0.642,skewX:-29.3982,skewY:-209.3982,x:958.2,y:232.85},0).wait(1).to({scaleX:0.5954,scaleY:0.6443,skewX:-29.0461,skewY:-209.0461,x:970.45,y:230.7},0).wait(1).to({scaleX:0.5975,scaleY:0.6466,skewX:-28.6365,skewY:-208.6365,x:982.85,y:228.6},0).wait(1).to({scaleX:0.5996,scaleY:0.6488,skewX:-28.1703,skewY:-208.1703,x:995.35,y:226.55},0).wait(1).to({scaleX:0.6017,scaleY:0.6511,skewX:-27.6483,skewY:-207.6483,x:1007.9,y:224.75},0).wait(1).to({scaleX:0.6038,scaleY:0.6534,skewX:-27.0715,skewY:-207.0715,x:1020.55,y:222.95},0).wait(1).to({scaleX:0.6059,scaleY:0.6556,skewX:-26.4407,skewY:-206.4407,x:1033.3,y:221.25},0).wait(1).to({scaleX:0.608,scaleY:0.6579,skewX:-25.757,skewY:-205.757,x:1046.15,y:219.7},0).wait(1).to({scaleX:0.61,scaleY:0.6602,skewX:-25.0212,skewY:-205.0212,x:1059,y:218.3},0).wait(1).to({scaleX:0.6122,scaleY:0.6625,skewX:-24.2346,skewY:-204.2346,x:1072,y:217.1},0).wait(1).to({scaleX:0.6143,scaleY:0.6647,skewX:-23.3981,skewY:-203.3981,x:1085.1,y:216.05},0).wait(1).to({scaleX:0.6163,scaleY:0.667,skewX:-22.5132,skewY:-202.5132,x:1098.25,y:215.15},0).wait(1).to({scaleX:0.6184,scaleY:0.6693,skewX:-21.5812,skewY:-201.5812,x:1111.5,y:214.55},0).wait(1).to({scaleX:0.6205,scaleY:0.6715,skewX:-20.6035,skewY:-200.6035,x:1124.85,y:214.1},0).wait(1).to({scaleX:0.6226,scaleY:0.6738,skewX:-19.5818,skewY:-199.5818,x:1138.3,y:213.85},0).wait(1).to({scaleX:0.6247,scaleY:0.6761,skewX:-18.5179,skewY:-198.5179,x:1151.75,y:213.9},0).wait(1).to({scaleX:0.6268,scaleY:0.6783,skewX:-17.4137,skewY:-197.4137,x:1165.4,y:214.25},0).wait(1).to({scaleX:0.6289,scaleY:0.6806,skewX:-16.2713,skewY:-196.2713,x:1179.1,y:214.8},0).wait(1).to({scaleX:0.631,scaleY:0.6829,skewX:-15.0929,skewY:-195.0929,x:1192.9,y:215.6},0).wait(1).to({scaleX:0.6331,scaleY:0.6851,skewX:-13.8811,skewY:-193.8811,x:1206.75,y:216.8},0).wait(1).to({scaleX:0.6352,scaleY:0.6874,skewX:-12.6383,skewY:-192.6383,x:1220.7,y:218.25},0).wait(1).to({scaleX:0.6373,scaleY:0.6897,skewX:-11.3672,skewY:-191.3672,x:1234.75,y:220},0).wait(1).to({scaleX:0.6394,scaleY:0.692,skewX:-10.0708,skewY:-190.0708,x:1248.85,y:222.1},0).wait(1).to({scaleX:0.6415,scaleY:0.6942,skewX:-8.7519,skewY:-188.7519,x:1263.1,y:224.55},0).wait(1).to({scaleX:0.6436,scaleY:0.6965,skewX:-7.4137,skewY:-187.4137,x:1277.45,y:227.35},0).wait(1).to({scaleX:0.6457,scaleY:0.6988,skewX:-6.0593,skewY:-186.0593,x:1291.8,y:230.55},0).wait(1).to({scaleX:0.6478,scaleY:0.701,skewX:-4.6919,skewY:-184.6919,x:1306.3,y:234.1},0).wait(1).to({scaleX:0.6499,scaleY:0.7033,skewX:-3.3146,skewY:-183.3146,x:1320.85,y:238.05},0).wait(1).to({scaleX:0.652,scaleY:0.7056,skewX:-1.9307,skewY:-181.9307,x:1335.55,y:242.4},0).wait(1).to({scaleX:0.6541,scaleY:0.7078,skewX:-0.5434,skewY:-180.5434,x:1350.3,y:247.15},0).wait(1).to({scaleX:0.6562,scaleY:0.7101,skewX:0.8443,skewY:-179.1557,x:1365.1,y:252.35},0).wait(1).to({scaleX:0.6583,scaleY:0.7124,skewX:2.2293,skewY:-177.7707,x:1380.05,y:258.05},0).wait(1).to({scaleX:0.6604,scaleY:0.7146,skewX:3.6087,skewY:-176.3913,x:1395.05,y:264.15},0).wait(1).to({scaleX:0.6625,scaleY:0.7169,skewX:4.9797,skewY:-175.0203,x:1410.2,y:270.7},0).wait(1).to({scaleX:0.6646,scaleY:0.7192,skewX:6.3398,skewY:-173.6602,x:1425.35,y:277.75},0).wait(1));

	// тело_png
	this.instance_2 = new lib.комар();
	this.instance_2.setTransform(1280.5,220.6,0.5058,0.5058,0,0,0,144.5,117.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:147.7,regY:117.7,scaleX:0.5081,scaleY:0.5081,rotation:-0.475,x:1276.1,y:220.65},0).wait(1).to({scaleX:0.5103,scaleY:0.5103,rotation:-0.954,x:1270},0).wait(1).to({scaleX:0.5125,scaleY:0.5125,rotation:-1.421,x:1263.85,y:220.7},0).wait(1).to({scaleX:0.5147,scaleY:0.5147,rotation:-1.878,x:1257.7,y:220.85},0).wait(1).to({scaleX:0.5169,scaleY:0.5169,rotation:-2.324,x:1251.35,y:221.05},0).wait(1).to({scaleX:0.5192,scaleY:0.5192,rotation:-2.76,x:1245,y:221.3},0).wait(1).to({scaleX:0.5214,scaleY:0.5214,rotation:-3.186,x:1238.55,y:221.5},0).wait(1).to({scaleX:0.5236,scaleY:0.5236,rotation:-3.602,x:1232,y:221.9},0).wait(1).to({scaleX:0.5259,scaleY:0.5259,rotation:-4.01,x:1225.45,y:222.3},0).wait(1).to({scaleX:0.5281,scaleY:0.5281,rotation:-4.408,x:1218.75,y:222.7},0).wait(1).to({scaleX:0.5303,scaleY:0.5303,rotation:-4.797,x:1212,y:223.2},0).wait(1).to({scaleX:0.5325,scaleY:0.5325,rotation:-5.177,x:1205.2,y:223.75},0).wait(1).to({scaleX:0.5348,scaleY:0.5348,rotation:-5.55,x:1198.3,y:224.35},0).wait(1).to({scaleX:0.537,scaleY:0.537,rotation:-5.914,x:1191.3,y:225},0).wait(1).to({scaleX:0.5392,scaleY:0.5392,rotation:-6.27,x:1184.25,y:225.7},0).wait(1).to({scaleX:0.5414,scaleY:0.5414,rotation:-6.619,x:1177.15,y:226.45},0).wait(1).to({scaleX:0.5436,scaleY:0.5436,rotation:-6.961,x:1169.9,y:227.2},0).wait(1).to({scaleX:0.5459,scaleY:0.5459,rotation:-7.295,x:1162.6,y:228.1},0).wait(1).to({scaleX:0.5481,scaleY:0.5481,rotation:-7.622,x:1155.3,y:229},0).wait(1).to({scaleX:0.5503,scaleY:0.5503,rotation:-7.942,x:1147.85,y:229.95},0).wait(1).to({scaleX:0.5526,scaleY:0.5526,rotation:-8.256,x:1140.35,y:231},0).wait(1).to({scaleX:0.5548,scaleY:0.5548,rotation:-8.563,x:1132.8,y:232.05},0).wait(1).to({scaleX:0.557,scaleY:0.557,rotation:-8.864,x:1125.15,y:233.15},0).wait(1).to({scaleX:0.5592,scaleY:0.5592,rotation:-9.158,x:1117.45,y:234.35},0).wait(1).to({scaleX:0.5615,scaleY:0.5615,rotation:-9.447,x:1109.6,y:235.6},0).wait(1).to({scaleX:0.5637,scaleY:0.5637,rotation:-9.73,x:1101.7,y:236.85},0).wait(1).to({scaleX:0.5659,scaleY:0.5659,rotation:-10.008,x:1093.75,y:238.15},0).wait(1).to({scaleX:0.5681,scaleY:0.5681,rotation:-10.28,x:1085.75,y:239.55},0).wait(1).to({scaleX:0.5704,scaleY:0.5704,rotation:-10.546,x:1077.65,y:241},0).wait(1).to({scaleX:0.5726,scaleY:0.5726,rotation:-10.808,x:1069.45,y:242.45},0).wait(1).to({scaleX:0.5748,scaleY:0.5748,rotation:-11.064,x:1061.2,y:243.95},0).wait(1).to({scaleX:0.577,scaleY:0.577,rotation:-11.315,x:1052.85,y:245.6},0).wait(1).to({scaleX:0.5792,scaleY:0.5792,rotation:-11.562,x:1044.45,y:247.2},0).wait(1).to({scaleX:0.5815,scaleY:0.5815,rotation:-11.804,x:1036,y:248.9},0).wait(1).to({scaleX:0.5837,scaleY:0.5837,rotation:-12.041,x:1027.5,y:250.6},0).wait(1).to({scaleX:0.5859,scaleY:0.5859,rotation:-12.274,x:1018.85,y:252.45},0).wait(1).to({scaleX:0.5882,scaleY:0.5882,rotation:-12.503,x:1010.15,y:254.3},0).wait(1).to({scaleX:0.5904,scaleY:0.5904,rotation:-12.728,x:1001.35,y:256.2},0).wait(1).to({scaleX:0.5926,scaleY:0.5926,rotation:-12.948,x:992.55,y:258.15},0).wait(1).to({scaleX:0.5948,scaleY:0.5948,rotation:-13.164,x:983.65,y:260.1},0).wait(1).to({scaleX:0.5971,scaleY:0.5971,rotation:-13.377,x:974.65,y:262.15},0).wait(1).to({scaleX:0.5993,scaleY:0.5993,rotation:-13.585,x:965.6,y:264.25},0).wait(1).to({scaleX:0.6015,scaleY:0.6015,rotation:-13.79,x:956.45,y:266.4},0).wait(1).to({scaleX:0.6037,scaleY:0.6037,rotation:-13.991,x:947.25,y:268.65},0).wait(1).to({scaleX:0.606,scaleY:0.606,rotation:-14.189,x:937.95,y:270.9},0).wait(1).to({scaleX:0.6082,scaleY:0.6082,rotation:-14.383,x:928.6,y:273.25},0).wait(1).to({scaleX:0.6104,scaleY:0.6104,rotation:-14.574,x:919.2,y:275.6},0).wait(1).to({scaleX:0.6126,scaleY:0.6126,rotation:-14.762,x:909.65,y:278.05},0).wait(1).to({scaleX:0.6149,scaleY:0.6149,rotation:-14.946,x:900.1,y:280.5},0).wait(1).to({scaleX:0.6171,scaleY:0.6171,rotation:-15.127,x:890.5,y:282.95},0).wait(1).to({scaleX:0.6193,scaleY:0.6193,rotation:-15.306,x:880.8,y:285.55},0).wait(1).to({scaleX:0.6215,scaleY:0.6215,rotation:-15.481,x:871,y:288.2},0).wait(1).to({scaleX:0.6238,scaleY:0.6238,rotation:-15.653,x:861.1,y:290.9},0).wait(1).to({scaleX:0.626,scaleY:0.626,rotation:-15.823,x:851.2,y:293.6},0).wait(1).to({scaleX:0.6282,scaleY:0.6282,rotation:-15.989,x:841.2,y:296.4},0).wait(1).to({scaleX:0.6305,scaleY:0.6305,rotation:-16.153,x:831.15,y:299.2},0).wait(1).to({scaleX:0.6327,scaleY:0.6327,rotation:-16.314,x:821,y:302.05},0).wait(1).to({scaleX:0.6349,scaleY:0.6349,rotation:-16.473,x:810.8,y:305},0).wait(1).to({scaleX:0.6371,scaleY:0.6371,rotation:-16.629,x:800.5,y:307.95},0).wait(1).to({scaleX:0.6394,scaleY:0.6394,rotation:-16.783,x:790.2,y:311.05},0).wait(1).to({scaleX:0.6416,scaleY:0.6416,rotation:-16.934,x:779.75,y:314.1},0).wait(1).to({scaleX:0.6438,scaleY:0.6438,rotation:-17.083,x:769.25,y:317.25},0).wait(1).to({scaleX:0.646,scaleY:0.646,rotation:-17.229,x:758.7,y:320.4},0).wait(1).to({scaleX:0.6482,scaleY:0.6482,rotation:-17.373,x:748.1,y:323.6},0).wait(1).to({scaleX:0.6505,scaleY:0.6505,rotation:-17.515,x:737.35,y:326.95},0).wait(1).to({scaleX:0.6527,scaleY:0.6527,rotation:-17.655,x:726.6,y:330.25},0).wait(1).to({scaleX:0.6549,scaleY:0.6549,rotation:-17.793,x:715.8,y:333.65},0).wait(1).to({scaleX:0.6571,scaleY:0.6571,rotation:-17.928,x:704.9,y:337.05},0).wait(1).to({scaleX:0.6594,scaleY:0.6594,rotation:-18.062,x:693.9,y:340.55},0).wait(1).to({scaleX:0.6616,scaleY:0.6616,rotation:-18.193,x:682.9,y:344.1},0).wait(1).to({scaleX:0.6638,scaleY:0.6638,rotation:-18.323,x:671.75,y:347.7},0).wait(1).to({scaleX:0.659,scaleY:0.659,rotation:-17.937,x:656.55,y:352.6},0).wait(1).to({scaleX:0.6542,scaleY:0.6542,rotation:-17.523,x:641.45,y:357.35},0).wait(1).to({scaleX:0.6494,scaleY:0.6494,rotation:-17.099,x:626.45,y:361.9},0).wait(1).to({scaleX:0.6446,scaleY:0.6446,rotation:-16.664,x:611.65,y:366.3},0).wait(1).to({scaleX:0.6398,scaleY:0.6398,rotation:-16.22,x:597.05,y:370.5},0).wait(1).to({scaleX:0.635,scaleY:0.635,rotation:-15.764,x:582.55,y:374.55},0).wait(1).to({scaleX:0.6302,scaleY:0.6302,rotation:-15.297,x:568.2,y:378.5},0).wait(1).to({scaleX:0.6254,scaleY:0.6254,rotation:-14.819,x:554.05,y:382.25},0).wait(1).to({scaleX:0.6206,scaleY:0.6206,rotation:-14.329,x:540,y:385.75},0).wait(1).to({scaleX:0.6158,scaleY:0.6158,rotation:-13.827,x:526.1,y:389.15},0).wait(1).to({scaleX:0.6109,scaleY:0.6109,rotation:-13.312,x:512.35,y:392.45},0).wait(1).to({scaleX:0.6061,scaleY:0.6061,rotation:-12.784,x:498.8,y:395.5},0).wait(1).to({scaleX:0.6013,scaleY:0.6013,rotation:-12.243,x:485.35,y:398.4},0).wait(1).to({scaleX:0.5965,scaleY:0.5965,rotation:-11.688,x:472.1,y:401.15},0).wait(1).to({scaleX:0.5917,scaleY:0.5917,rotation:-11.118,x:459,y:403.75},0).wait(1).to({scaleX:0.5869,scaleY:0.5869,rotation:-10.534,x:446,y:406.15},0).wait(1).to({scaleX:0.5821,scaleY:0.5821,rotation:-9.935,x:433.15,y:408.4},0).wait(1).to({scaleX:0.5773,scaleY:0.5773,rotation:-9.319,x:420.45,y:410.5},0).wait(1).to({scaleX:0.5725,scaleY:0.5725,rotation:-8.688,x:407.95,y:412.45},0).wait(1).to({scaleX:0.5677,scaleY:0.5677,rotation:-8.04,x:395.5,y:414.15},0).wait(1).to({scaleX:0.5629,scaleY:0.5629,rotation:-7.375,x:383.25,y:415.8},0).wait(1).to({scaleX:0.5581,scaleY:0.5581,rotation:-6.692,x:371.15,y:417.25},0).wait(1).to({scaleX:0.5533,scaleY:0.5533,rotation:-5.991,x:359.2,y:418.45},0).wait(1).to({scaleX:0.5485,scaleY:0.5485,rotation:-5.271,x:347.4,y:419.6},0).wait(1).to({scaleX:0.5437,scaleY:0.5437,rotation:-4.532,x:335.75,y:420.55},0).wait(1).to({scaleX:0.5388,scaleY:0.5388,rotation:-3.773,x:324.2,y:421.3},0).wait(1).to({scaleX:0.534,scaleY:0.534,rotation:-2.994,x:312.85,y:421.95},0).wait(1).to({scaleX:0.5292,scaleY:0.5292,rotation:-2.193,x:301.65,y:422.4},0).wait(1).to({scaleX:0.5244,scaleY:0.5244,rotation:-1.372,x:290.6,y:422.7},0).wait(1).to({scaleX:0.5196,scaleY:0.5196,rotation:-0.528,x:279.6,y:422.85},0).wait(1).to({scaleX:0.5148,scaleY:0.5148,rotation:0.3385,x:268.85,y:422.8},0).wait(1).to({scaleX:0.51,scaleY:0.51,rotation:1.2279,x:258.15,y:422.6},0).wait(1).to({scaleX:0.5052,scaleY:0.5052,rotation:2.1408,x:247.7,y:422.25},0).wait(1).to({scaleX:0.5004,scaleY:0.5004,rotation:3.0777,x:237.35,y:421.7},0).wait(1).to({scaleX:0.4956,scaleY:0.4956,rotation:4.039,x:227.1,y:421.05},0).wait(1).to({scaleX:0.4908,scaleY:0.4908,rotation:5.0253,x:217,y:420.25},0).wait(1).to({scaleX:0.486,scaleY:0.486,rotation:6.0369,x:207.1,y:419.25},0).wait(1).to({scaleX:0.4812,scaleY:0.4812,rotation:7.0741,x:197.35,y:418.05},0).wait(1).to({scaleX:0.4764,scaleY:0.4764,rotation:8.1372,x:187.65,y:416.7},0).wait(1).to({scaleX:0.4716,scaleY:0.4716,rotation:9.2265,x:178.15,y:415.25},0).wait(1).to({scaleX:0.4667,scaleY:0.4667,rotation:10.3422,x:168.8,y:413.65},0).wait(1).to({scaleX:0.4619,scaleY:0.4619,rotation:11.4843,x:159.55,y:411.8},0).wait(1).to({scaleX:0.4571,scaleY:0.4571,rotation:12.6529,x:150.5,y:409.8},0).wait(1).to({scaleX:0.4523,scaleY:0.4523,rotation:13.8479,x:141.5,y:407.7},0).wait(1).to({scaleX:0.4475,scaleY:0.4475,rotation:15.0692,x:132.7,y:405.4},0).wait(1).to({scaleX:0.4427,scaleY:0.4427,rotation:16.3166,x:124.1,y:402.9},0).wait(1).to({scaleX:0.4379,scaleY:0.4379,rotation:17.5896,x:115.6,y:400.3},0).wait(1).to({scaleX:0.4331,scaleY:0.4331,rotation:18.8878,x:107.2,y:397.5},0).wait(1).to({scaleX:0.4283,scaleY:0.4283,rotation:20.2106,x:99,y:394.55},0).wait(1).to({scaleX:0.4235,scaleY:0.4235,rotation:21.5572,x:90.9,y:391.45},0).wait(1).to({scaleX:0.4187,scaleY:0.4187,rotation:22.9269,x:82.95,y:388.2},0).wait(1).to({scaleX:0.4139,scaleY:0.4139,rotation:24.3186,x:75.15,y:384.7},0).wait(1).to({scaleX:0.4091,scaleY:0.4091,rotation:25.7313,x:67.5,y:381.1},0).wait(1).to({scaleX:0.4043,scaleY:0.4043,rotation:27.1635,x:59.95,y:377.35},0).wait(1).to({scaleX:0.3994,scaleY:0.3994,rotation:28.6141,x:52.6,y:373.35},0).wait(1).to({scaleX:0.3946,scaleY:0.3946,rotation:30.0813,x:45.35,y:369.3},0).wait(1).to({scaleX:0.3898,scaleY:0.3898,rotation:31.5637,x:38.25,y:365.05},0).wait(1).to({scaleX:0.385,scaleY:0.385,rotation:33.0593,x:31.3,y:360.6},0).wait(1).to({scaleX:0.3802,scaleY:0.3802,rotation:34.5665,x:24.45,y:356},0).wait(1).to({scaleX:0.3754,scaleY:0.3754,rotation:36.0832,x:17.85,y:351.25},0).wait(1).to({scaleX:0.3706,scaleY:0.3706,rotation:37.6074,x:11.3,y:346.3},0).wait(1).to({scaleX:0.3658,scaleY:0.3658,rotation:39.137,x:4.95,y:341.25},0).wait(1).to({scaleX:0.361,scaleY:0.361,rotation:40.6698,x:-1.35,y:336},0).wait(1).to({scaleX:0.3562,scaleY:0.3562,rotation:42.2038,x:-7.45,y:330.55},0).wait(1).to({scaleX:0.3514,scaleY:0.3514,rotation:43.7366,x:-13.4,y:325},0).wait(1).to({scaleX:0.3466,scaleY:0.3466,rotation:45.2663,x:-19.25,y:319.15},0).wait(1).to({scaleX:0.3418,scaleY:0.3418,rotation:46.7906,x:-24.9,y:313.3},0).wait(1).to({scaleX:0.337,scaleY:0.337,rotation:48.3074,x:-30.45,y:307.2},0).wait(1).to({scaleX:0.3322,scaleY:0.3322,rotation:49.8147,x:-35.85,y:300.95},0).wait(1).to({scaleX:0.3273,scaleY:0.3273,rotation:51.3105,x:-41.1,y:294.5},0).wait(1).to({scaleX:0.3225,scaleY:0.3225,rotation:52.7931,x:-46.25,y:287.85},0).wait(1).to({scaleX:0.3177,scaleY:0.3177,rotation:54.2606,x:-51.2,y:281.1},0).wait(1).to({scaleX:0.3129,scaleY:0.3129,rotation:55.7113,x:-56,y:274.15},0).wait(1).to({scaleX:0.3081,scaleY:0.3081,rotation:57.1439,x:-60.65,y:267.05},0).wait(1).to({scaleX:0.3033,scaleY:0.3033,rotation:58.5568,x:-65.2,y:259.7},0).wait(1).to({scaleX:0.2985,scaleY:0.2985,rotation:59.9488,x:-69.55,y:252.3},0).wait(1).to({scaleX:0.2937,scaleY:0.2937,rotation:61.3189,x:-73.9,y:244.7},0).wait(1));

	// Слой_15
	this.instance_3 = new lib.Безымянный2();
	this.instance_3.setTransform(-3,-11,0.3079,0.2339);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(149));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(410.3,119.4,1103.8,600.7);
// library properties:
lib.properties = {
	id: '069DAAF672E74544B04DC64C2199D1BF',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Безымянный2.png?1677512993850", id:"Безымянный2"},
		{src:"images/Безымянный_4_atlas_1.png?1677512993784", id:"Безымянный_4_atlas_1"},
		{src:"images/Безымянный_4_atlas_2.png?1677512993784", id:"Безымянный_4_atlas_2"},
		{src:"images/Безымянный_4_atlas_3.png?1677512993784", id:"Безымянный_4_atlas_3"}
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
an.compositions['069DAAF672E74544B04DC64C2199D1BF'] = {
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