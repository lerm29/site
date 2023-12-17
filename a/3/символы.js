(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"символы_atlas_1", frames: [[0,0,1392,1123]]},
		{name:"символы_atlas_2", frames: [[0,0,1392,1123]]},
		{name:"символы_atlas_3", frames: [[1394,539,192,143],[1394,0,628,537],[0,0,1392,1123]]}
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
	this.initialize(ss["символы_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.крылья = function() {
	this.initialize(ss["символы_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.машина = function() {
	this.initialize(ss["символы_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.одниноги = function() {
	this.initialize(ss["символы_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.тело = function() {
	this.initialize(ss["символы_atlas_3"]);
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
	this.instance.setTransform(1361.05,498.1,1,1,-8.7231,0,0,149.6,127.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:143.2,scaleX:0.9984,scaleY:0.9984,rotation:-7.2296,x:1353.15,y:516.35},0).wait(1).to({scaleX:0.9969,scaleY:0.9969,rotation:-5.9761,x:1342.3,y:518.55},0).wait(1).to({scaleX:0.9954,scaleY:0.9954,rotation:-4.942,x:1331.15,y:520.55},0).wait(1).to({scaleX:0.9938,scaleY:0.9938,rotation:-4.0773,x:1319.65,y:522.5},0).wait(1).to({scaleX:0.9922,scaleY:0.9922,rotation:-3.3466,x:1307.95,y:524.25},0).wait(1).to({scaleX:0.9907,scaleY:0.9907,rotation:-2.7242,x:1296.05,y:525.9},0).wait(1).to({scaleX:0.9891,scaleY:0.9891,rotation:-2.1915,x:1284,y:527.5},0).wait(1).to({scaleX:0.9876,scaleY:0.9876,rotation:-1.7345,x:1271.95,y:529},0).wait(1).to({scaleX:0.986,scaleY:0.986,rotation:-1.3428,x:1259.9,y:530.35},0).wait(1).to({scaleX:0.9845,scaleY:0.9845,rotation:-1.0091,x:1247.95,y:531.65},0).wait(1).to({scaleX:0.9829,scaleY:0.9829,rotation:-0.7284,x:1236.1,y:532.9},0).wait(1).to({scaleX:0.9814,scaleY:0.9814,rotation:-0.4978,x:1224.4,y:534},0).wait(1).to({scaleX:0.9798,scaleY:0.9798,rotation:-0.3163,x:1213.05,y:535.1},0).wait(1).to({scaleX:0.9782,scaleY:0.9782,rotation:-0.1857,x:1202.05,y:536.15},0).wait(1).to({scaleX:0.9767,scaleY:0.9767,rotation:-0.1106,x:1191.45,y:537.05},0).wait(1).to({scaleX:0.9751,scaleY:0.9751,rotation:-0.0997,x:1181.45,y:538},0).wait(1).to({scaleX:0.9736,scaleY:0.9736,rotation:-0.036,x:1169.95,y:538.95},0).wait(1).to({scaleX:0.972,scaleY:0.972,rotation:0.0176,x:1158.5,y:540},0).wait(1).to({scaleX:0.9705,scaleY:0.9705,rotation:0.0735,x:1147.15,y:541},0).wait(1).to({scaleX:0.9689,scaleY:0.9689,rotation:0.1318,x:1135.85,y:542},0).wait(1).to({scaleX:0.9674,scaleY:0.9674,rotation:0.1924,x:1124.6,y:542.9},0).wait(1).to({scaleX:0.9658,scaleY:0.9658,rotation:0.2554,x:1113.45,y:543.9},0).wait(1).to({scaleX:0.9642,scaleY:0.9642,rotation:0.3209,x:1102.3,y:544.75},0).wait(1).to({scaleX:0.9627,scaleY:0.9627,rotation:0.3887,x:1091.15,y:545.75},0).wait(1).to({scaleX:0.9611,scaleY:0.9611,rotation:0.459,x:1080.15,y:546.6},0).wait(1).to({scaleX:0.9596,scaleY:0.9596,rotation:0.5318,x:1069.15,y:547.5},0).wait(1).to({scaleX:0.958,scaleY:0.958,rotation:0.6071,x:1058.15,y:548.35},0).wait(1).to({scaleX:0.9565,scaleY:0.9565,rotation:0.685,x:1047.25,y:549.15},0).wait(1).to({scaleX:0.9549,scaleY:0.9549,rotation:0.7653,x:1036.45,y:550},0).wait(1).to({scaleX:0.9533,scaleY:0.9533,rotation:0.8483,x:1025.65,y:550.75},0).wait(1).to({scaleX:0.9518,scaleY:0.9518,rotation:0.9338,x:1014.85,y:551.55},0).wait(1).to({scaleX:0.9502,scaleY:0.9502,rotation:1.022,x:1004.15,y:552.35},0).wait(1).to({scaleX:0.9487,scaleY:0.9487,rotation:1.1128,x:993.5,y:553},0).wait(1).to({scaleX:0.9471,scaleY:0.9471,rotation:1.2062,x:982.85,y:553.8},0).wait(1).to({scaleX:0.9456,scaleY:0.9456,rotation:1.3023,x:972.25,y:554.45},0).wait(1).to({scaleX:0.944,scaleY:0.944,rotation:1.401,x:961.8,y:555.15},0).wait(1).to({scaleX:0.9425,scaleY:0.9425,rotation:1.5025,x:951.25,y:555.8},0).wait(1).to({scaleX:0.9409,scaleY:0.9409,rotation:1.6067,x:940.8,y:556.45},0).wait(1).to({scaleX:0.9393,scaleY:0.9393,rotation:1.7136,x:930.4,y:557.05},0).wait(1).to({scaleX:0.9378,scaleY:0.9378,rotation:1.8232,x:920.05,y:557.6},0).wait(1).to({scaleX:0.9362,scaleY:0.9362,rotation:1.9356,x:909.7,y:558.25},0).wait(1).to({scaleX:0.9347,scaleY:0.9347,rotation:2.0508,x:899.45,y:558.75},0).wait(1).to({scaleX:0.9331,scaleY:0.9331,rotation:2.1687,x:889.2,y:559.3},0).wait(1).to({scaleX:0.9316,scaleY:0.9316,rotation:2.2894,x:878.95,y:559.75},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:2.4128,x:868.8,y:560.2},0).wait(1).to({scaleX:0.9285,scaleY:0.9285,rotation:2.5391,x:858.65,y:560.65},0).wait(1).to({scaleX:0.9269,scaleY:0.9269,rotation:2.6682,x:848.5,y:561.1},0).wait(1).to({scaleX:0.9254,scaleY:0.9254,rotation:2.8001,x:838.5,y:561.5},0).wait(1).to({scaleX:0.9238,scaleY:0.9238,rotation:2.9348,x:828.45,y:561.85},0).wait(1).to({scaleX:0.9223,scaleY:0.9223,rotation:3.0722,x:818.4,y:562.2},0).wait(1).to({scaleX:0.9207,scaleY:0.9207,rotation:3.2125,x:808.45,y:562.55},0).wait(1).to({scaleX:0.9191,scaleY:0.9191,rotation:3.3556,x:798.55,y:562.85},0).wait(1).to({scaleX:0.9176,scaleY:0.9176,rotation:3.5015,x:788.65,y:563.15},0).wait(1).to({scaleX:0.916,scaleY:0.916,rotation:3.6502,x:778.75,y:563.35},0).wait(1).to({scaleX:0.9145,scaleY:0.9145,rotation:3.8017,x:768.9,y:563.55},0).wait(1).to({scaleX:0.9129,scaleY:0.9129,rotation:3.956,x:759.15,y:563.75},0).wait(1).to({scaleX:0.9114,scaleY:0.9114,rotation:4.1131,x:749.35,y:563.95},0).wait(1).to({scaleX:0.9098,scaleY:0.9098,rotation:4.2729,x:739.6,y:564.1},0).wait(1).to({scaleX:0.9082,scaleY:0.9082,rotation:4.4355,x:729.85,y:564.2},0).wait(1).to({scaleX:0.9067,scaleY:0.9067,rotation:4.6008,x:720.15,y:564.3},0).wait(1).to({scaleX:0.9052,scaleY:0.9052,rotation:4.7688,x:710.5},0).wait(1).to({scaleX:0.9036,scaleY:0.9036,rotation:4.9396,x:700.8,y:564.35},0).wait(1).to({scaleX:0.902,scaleY:0.902,rotation:5.1131,x:691.2,y:564.4},0).wait(1).to({scaleX:0.9005,scaleY:0.9005,rotation:5.289,x:681.6,y:564.3},0).wait(1).to({scaleX:0.8989,scaleY:0.8989,rotation:5.468,x:672.05,y:564.25},0).wait(1).to({scaleX:0.8974,scaleY:0.8974,rotation:5.649,x:662.5,y:564.2},0).wait(1).to({scaleX:0.8958,scaleY:0.8958,rotation:5.833,x:652.95,y:564},0).wait(1).to({scaleX:0.8943,scaleY:0.8943,rotation:6.02,x:643.45,y:563.9},0).wait(1).to({scaleX:0.8927,scaleY:0.8927,rotation:6.209,x:634,y:563.75},0).wait(1).to({scaleX:0.8911,scaleY:0.8911,rotation:6.401,x:624.55,y:563.45},0).wait(1).to({scaleX:0.8896,scaleY:0.8896,rotation:6.595,x:615.05,y:563.25},0).wait(1).to({scaleX:0.888,scaleY:0.888,rotation:6.792,x:605.6,y:562.95},0).wait(1).to({scaleX:0.8865,scaleY:0.8865,rotation:6.991,x:596.25,y:562.65},0).wait(1).to({scaleX:0.8849,scaleY:0.8849,rotation:7.192,x:586.85,y:562.25},0).wait(1).to({scaleX:0.8834,scaleY:0.8834,rotation:7.396,x:577.45,y:561.95},0).wait(1).to({scaleX:0.8818,scaleY:0.8818,rotation:7.602,x:568.1,y:561.5},0).wait(1).to({scaleX:0.8803,scaleY:0.8803,rotation:7.81,x:558.7,y:561.1},0).wait(1).to({scaleX:0.8787,scaleY:0.8787,rotation:8.021,x:549.4,y:560.6},0).wait(1).to({scaleX:0.8771,scaleY:0.8771,rotation:8.233,x:540.05,y:560.1},0).wait(1).to({scaleX:0.8756,scaleY:0.8756,rotation:8.448,x:530.8,y:559.55},0).wait(1).to({scaleX:0.874,scaleY:0.874,rotation:8.665,x:521.5,y:559},0).wait(1).to({scaleX:0.8725,scaleY:0.8725,rotation:8.884,x:512.25,y:558.35},0).wait(1).to({scaleX:0.8709,scaleY:0.8709,rotation:9.105,x:502.95,y:557.7},0).wait(1).to({scaleX:0.8694,scaleY:0.8694,rotation:9.328,x:493.7,y:557.05},0).wait(1).to({scaleX:0.8678,scaleY:0.8678,rotation:9.552,x:484.5,y:556.3},0).wait(1).to({scaleX:0.8663,scaleY:0.8663,rotation:9.779,x:475.25,y:555.55},0).wait(1).to({scaleX:0.8647,scaleY:0.8647,rotation:10.007,x:466.05,y:554.8},0).wait(1).to({scaleX:0.8632,scaleY:0.8632,rotation:10.237,x:456.8,y:553.95},0).wait(1).to({scaleX:0.8616,scaleY:0.8616,rotation:10.469,x:447.6,y:553.05},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:10.702,x:438.4,y:552.15},0).wait(1).to({scaleX:0.8585,scaleY:0.8585,rotation:10.937,x:429.25,y:551.2},0).wait(1).to({scaleX:0.8569,scaleY:0.8569,rotation:11.173,x:419.95,y:550.25},0).wait(1).to({scaleX:0.8554,scaleY:0.8554,rotation:11.411,x:410.8,y:549.2},0).wait(1).to({scaleX:0.8538,scaleY:0.8538,rotation:11.649,x:401.65,y:548.2},0).wait(1).to({scaleX:0.8523,scaleY:0.8523,rotation:11.89,x:392.45,y:547.05},0).wait(1).to({scaleX:0.8507,scaleY:0.8507,rotation:12.131,x:383.25,y:545.95},0).wait(1).to({scaleX:0.8491,scaleY:0.8491,rotation:12.373,x:374.15,y:544.75},0).wait(1).to({scaleX:0.8476,scaleY:0.8476,rotation:12.617,x:364.95,y:543.6},0).wait(1).to({scaleX:0.8461,scaleY:0.8461,rotation:12.861,x:355.8,y:542.3},0).wait(1).to({scaleX:0.8445,scaleY:0.8445,rotation:13.107,x:346.65,y:541.05},0).wait(1).to({scaleX:0.8429,scaleY:0.8429,rotation:13.353,x:337.4,y:539.7},0).wait(1).to({scaleX:0.8414,scaleY:0.8414,rotation:13.6,x:328.25,y:538.35},0).wait(1).to({scaleX:0.8398,scaleY:0.8398,rotation:13.848,x:319.1,y:536.9},0).wait(1).to({scaleX:0.8383,scaleY:0.8383,rotation:14.096,x:309.9,y:535.45},0).wait(1).to({scaleX:0.8367,scaleY:0.8367,rotation:14.345,x:300.7,y:534},0).wait(1).to({scaleX:0.8352,scaleY:0.8352,rotation:14.595,x:291.5,y:532.5},0).wait(1).to({scaleX:0.8336,scaleY:0.8336,rotation:14.845,x:282.35,y:530.9},0).wait(1).to({scaleX:0.8321,scaleY:0.8321,rotation:15.095,x:273.15,y:529.25},0).wait(1).to({scaleX:0.8305,scaleY:0.8305,rotation:15.345,x:264,y:527.65},0).wait(1).to({scaleX:0.8289,scaleY:0.8289,rotation:15.596,x:254.8,y:525.9},0).wait(1).to({scaleX:0.8274,scaleY:0.8274,rotation:15.847,x:245.55,y:524.15},0).wait(1).to({scaleX:0.8258,scaleY:0.8258,rotation:16.098,x:236.3,y:522.3},0).wait(1).to({scaleX:0.8243,scaleY:0.8243,rotation:16.349,x:227.1,y:520.5},0).wait(1).to({scaleX:0.8227,scaleY:0.8227,rotation:16.6,x:217.85,y:518.6},0).wait(1).to({scaleX:0.8212,scaleY:0.8212,rotation:16.851,x:208.6,y:516.7},0).wait(1).to({scaleX:0.8196,scaleY:0.8196,rotation:17.101,x:199.35,y:514.75},0).wait(1).to({scaleX:0.818,scaleY:0.818,rotation:17.351,x:190.05,y:512.75},0).wait(1).to({scaleX:0.8165,scaleY:0.8165,rotation:17.601,x:180.85,y:510.7},0).wait(1).to({scaleX:0.8149,scaleY:0.8149,rotation:17.851,x:171.55,y:508.6},0).wait(1).to({scaleX:0.8134,scaleY:0.8134,rotation:18.1,x:162.15,y:506.4},0).wait(1).to({scaleX:0.8118,scaleY:0.8118,rotation:18.348,x:152.85,y:504.25},0).wait(1).to({scaleX:0.8103,scaleY:0.8103,rotation:18.596,x:143.55,y:502},0).wait(1).to({scaleX:0.8087,scaleY:0.8087,rotation:18.843,x:134.2,y:499.7},0).wait(1).to({scaleX:0.8072,scaleY:0.8072,rotation:19.09,x:124.8,y:497.4},0).wait(1).to({scaleX:0.8056,scaleY:0.8056,rotation:19.335,x:115.4,y:495},0).wait(1).to({scaleX:0.8041,scaleY:0.8041,rotation:19.58,x:106.05,y:492.6},0).wait(1).to({scaleX:0.8025,scaleY:0.8025,rotation:19.824,x:96.65,y:490.1},0).wait(1).to({scaleX:0.8009,scaleY:0.8009,rotation:20.067,x:87.2,y:487.6},0).wait(1).to({scaleX:0.7994,scaleY:0.7994,rotation:20.309,x:77.7,y:485},0).wait(1).to({scaleX:0.7978,scaleY:0.7978,rotation:20.55,x:68.3,y:482.45},0).wait(1).to({scaleX:0.7963,scaleY:0.7963,rotation:20.789,x:58.8,y:479.75},0).wait(1).to({scaleX:0.7947,scaleY:0.7947,rotation:21.028,x:49.25,y:477},0).wait(1).to({scaleX:0.7932,scaleY:0.7932,rotation:21.265,x:39.75,y:474.3},0).wait(1).to({scaleX:0.7916,scaleY:0.7916,rotation:21.501,x:30.2,y:471.45},0).wait(1).to({scaleX:0.7901,scaleY:0.7901,rotation:21.736,x:20.6,y:468.6},0).wait(1).to({scaleX:0.7885,scaleY:0.7885,rotation:21.969,x:11,y:465.7},0).wait(1).to({scaleX:0.7869,scaleY:0.7869,rotation:22.201,x:1.35,y:462.75},0).wait(1).to({scaleX:0.7854,scaleY:0.7854,rotation:22.432,x:-8.3,y:459.75},0).wait(1).to({scaleX:0.7838,scaleY:0.7838,rotation:22.661,x:-18,y:456.7},0).wait(1).to({scaleX:0.7688,scaleY:0.7688,rotation:22.888,x:-27.6,y:453.35},0).wait(1).to({scaleX:0.7538,scaleY:0.7538,rotation:23.114,x:-37.25,y:449.95},0).wait(1).to({scaleX:0.7387,scaleY:0.7387,rotation:23.338,x:-47,y:446.6},0).wait(1).to({scaleX:0.7237,scaleY:0.7237,rotation:23.561,x:-56.65,y:443.15},0).wait(1).to({scaleX:0.7087,scaleY:0.7087,rotation:23.781,x:-66.4,y:439.55},0).wait(1).to({scaleX:0.6937,scaleY:0.6937,rotation:24.001,x:-76.15,y:436},0).wait(1).to({scaleX:0.6786,scaleY:0.6786,rotation:24.218,x:-85.95,y:432.4},0).wait(1).to({scaleX:0.6636,scaleY:0.6636,rotation:24.434,x:-95.75,y:428.7},0).wait(1).to({scaleX:0.6486,scaleY:0.6486,rotation:24.647,x:-105.65,y:425},0).wait(1));

	// Слой_7
	this.instance_1 = new lib.комар();
	this.instance_1.setTransform(19.5,-183.5,0.3542,0.3833,0,45.0016,-134.9983,142.6,116);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:147.7,regY:117.7,scaleX:0.3546,scaleY:0.3837,skewX:45.2126,skewY:-134.7874,x:21.6,y:-176.15},0).wait(1).to({scaleX:0.3549,scaleY:0.384,skewX:45.4045,skewY:-134.5955,x:25.45,y:-168.1},0).wait(1).to({scaleX:0.3552,scaleY:0.3844,skewX:45.5682,skewY:-134.4318,x:29.2,y:-160.15},0).wait(1).to({scaleX:0.3555,scaleY:0.3847,skewX:45.7024,skewY:-134.2975,x:32.9,y:-152.3},0).wait(1).to({scaleX:0.3558,scaleY:0.385,skewX:45.8062,skewY:-134.1938,x:36.45,y:-144.5},0).wait(1).to({scaleX:0.3561,scaleY:0.3853,skewX:45.8784,skewY:-134.1216,x:40.05,y:-136.8},0).wait(1).to({scaleX:0.3564,scaleY:0.3857,skewX:45.9176,skewY:-134.0823,x:43.55,y:-129.15},0).wait(1).to({scaleX:0.3567,scaleY:0.386,skewX:45.9231,skewY:-134.0769,x:47,y:-121.7},0).wait(1).to({scaleX:0.357,scaleY:0.3863,skewX:45.8936,skewY:-134.1063,x:50.45,y:-114.2},0).wait(1).to({scaleX:0.3573,scaleY:0.3867,skewX:45.8283,skewY:-134.1716,x:53.85,y:-106.9},0).wait(1).to({scaleX:0.3576,scaleY:0.387,skewX:45.726,skewY:-134.274,x:57.2,y:-99.6},0).wait(1).to({scaleX:0.3579,scaleY:0.3873,skewX:45.5857,skewY:-134.4142,x:60.55,y:-92.45},0).wait(1).to({scaleX:0.3582,scaleY:0.3876,skewX:45.4068,skewY:-134.5931,x:63.85,y:-85.3},0).wait(1).to({scaleX:0.3585,scaleY:0.388,skewX:45.1881,skewY:-134.8118,x:67.2,y:-78.3},0).wait(1).to({scaleX:0.3588,scaleY:0.3883,skewX:44.9292,skewY:-135.0707,x:70.5,y:-71.4},0).wait(1).to({scaleX:0.3591,scaleY:0.3886,skewX:44.6291,skewY:-135.3708,x:73.8,y:-64.5},0).wait(1).to({scaleX:0.3594,scaleY:0.3889,skewX:44.2873,skewY:-135.7126,x:77.15,y:-57.7},0).wait(1).to({scaleX:0.3597,scaleY:0.3893,skewX:43.9033,skewY:-136.0966,x:80.5,y:-51},0).wait(1).to({scaleX:0.36,scaleY:0.3896,skewX:43.4765,skewY:-136.5233,x:83.85,y:-44.35},0).wait(1).to({scaleX:0.3603,scaleY:0.3899,skewX:43.0069,skewY:-136.993,x:87.25,y:-37.8},0).wait(1).to({scaleX:0.3606,scaleY:0.3903,skewX:42.4942,skewY:-137.5057,x:90.65,y:-31.35},0).wait(1).to({scaleX:0.3609,scaleY:0.3906,skewX:41.9382,skewY:-138.0616,x:94.15,y:-24.95},0).wait(1).to({scaleX:0.3612,scaleY:0.3909,skewX:41.3393,skewY:-138.6606,x:97.6,y:-18.55},0).wait(1).to({scaleX:0.3615,scaleY:0.3912,skewX:40.6976,skewY:-139.3022,x:101.1,y:-12.3},0).wait(1).to({scaleX:0.3618,scaleY:0.3916,skewX:40.0137,skewY:-139.9861,x:104.75,y:-6.1},0).wait(1).to({scaleX:0.3621,scaleY:0.3919,skewX:39.2883,skewY:-140.7116,x:108.45,y:0.05},0).wait(1).to({scaleX:0.3624,scaleY:0.3922,skewX:38.5221,skewY:-141.4777,x:112.15,y:6},0).wait(1).to({scaleX:0.3627,scaleY:0.3925,skewX:37.7164,skewY:-142.2834,x:115.95,y:12.05},0).wait(1).to({scaleX:0.363,scaleY:0.3929,skewX:36.8723,skewY:-143.1276,x:119.8,y:18},0).wait(1).to({scaleX:0.3633,scaleY:0.3932,skewX:35.9913,skewY:-144.0085,x:123.8,y:23.8},0).wait(1).to({scaleX:0.3636,scaleY:0.3935,skewX:35.0752,skewY:-144.9246,x:127.85,y:29.6},0).wait(1).to({scaleX:0.364,scaleY:0.3939,skewX:34.1259,skewY:-145.8739,x:131.95,y:35.3},0).wait(1).to({scaleX:0.3643,scaleY:0.3942,skewX:33.1456,skewY:-146.8542,x:136.2,y:41},0).wait(1).to({scaleX:0.3646,scaleY:0.3945,skewX:32.1366,skewY:-147.8632,x:140.55,y:46.6},0).wait(1).to({scaleX:0.3649,scaleY:0.3948,skewX:31.1012,skewY:-148.8986,x:145,y:52.15},0).wait(1).to({scaleX:0.3652,scaleY:0.3952,skewX:30.0425,skewY:-149.9573,x:149.55,y:57.6},0).wait(1).to({scaleX:0.3655,scaleY:0.3955,skewX:28.9629,skewY:-151.0368,x:154.25,y:63.05},0).wait(1).to({scaleX:0.3658,scaleY:0.3958,skewX:27.8657,skewY:-152.1341,x:159.1,y:68.4},0).wait(1).to({scaleX:0.3661,scaleY:0.3962,skewX:26.7537,skewY:-153.2461,x:164,y:73.7},0).wait(1).to({scaleX:0.3664,scaleY:0.3965,skewX:25.6299,skewY:-154.3698,x:169.1,y:78.9},0).wait(1).to({scaleX:0.3667,scaleY:0.3968,skewX:24.4976,skewY:-155.5022,x:174.4,y:84.1},0).wait(1).to({scaleX:0.367,scaleY:0.3971,skewX:23.3597,skewY:-156.64,x:179.75,y:89.2},0).wait(1).to({scaleX:0.3673,scaleY:0.3975,skewX:22.2195,skewY:-157.7802,x:185.35,y:94.3},0).wait(1).to({scaleX:0.3676,scaleY:0.3978,skewX:21.0799,skewY:-158.9199,x:191.05,y:99.25},0).wait(1).to({scaleX:0.3679,scaleY:0.3981,skewX:19.9436,skewY:-160.0561,x:196.9,y:104.2},0).wait(1).to({scaleX:0.3682,scaleY:0.3984,skewX:18.8137,skewY:-161.186,x:202.95,y:109.1},0).wait(1).to({scaleX:0.3685,scaleY:0.3988,skewX:17.6926,skewY:-162.3071,x:209.2,y:113.95},0).wait(1).to({scaleX:0.3688,scaleY:0.3991,skewX:16.5829,skewY:-163.4168,x:215.65,y:118.7},0).wait(1).to({scaleX:0.3691,scaleY:0.3994,skewX:15.4869,skewY:-164.5128,x:222.2,y:123.45},0).wait(1).to({scaleX:0.3694,scaleY:0.3998,skewX:14.4065,skewY:-165.5932,x:229.05,y:128.15},0).wait(1).to({scaleX:0.3697,scaleY:0.4001,skewX:13.3437,skewY:-166.656,x:236.05,y:132.75},0).wait(1).to({scaleX:0.37,scaleY:0.4004,skewX:12.3002,skewY:-167.6994,x:243.25,y:137.35},0).wait(1).to({scaleX:0.3703,scaleY:0.4007,skewX:11.2776,skewY:-168.7221,x:250.7,y:141.85},0).wait(1).to({scaleX:0.3706,scaleY:0.4011,skewX:10.277,skewY:-169.7227,x:258.35,y:146.35},0).wait(1).to({scaleX:0.3709,scaleY:0.4014,skewX:9.2995,skewY:-170.7002,x:266.2,y:150.7},0).wait(1).to({scaleX:0.3712,scaleY:0.4017,skewX:8.346,skewY:-171.6537,x:274.3,y:155.15},0).wait(1).to({scaleX:0.3715,scaleY:0.4021,skewX:7.4172,skewY:-172.5824,x:282.7,y:159.4},0).wait(1).to({scaleX:0.3718,scaleY:0.4024,skewX:6.5137,skewY:-173.4859,x:291.3,y:163.7},0).wait(1).to({scaleX:0.3721,scaleY:0.4027,skewX:5.6359,skewY:-174.3638,x:300.1,y:167.9},0).wait(1).to({scaleX:0.3724,scaleY:0.403,skewX:4.7838,skewY:-175.2158,x:309.2,y:172.05},0).wait(1).to({scaleX:0.3727,scaleY:0.4034,skewX:3.9577,skewY:-176.0419,x:318.5,y:176.25},0).wait(1).to({scaleX:0.373,scaleY:0.4037,skewX:3.1575,skewY:-176.8421,x:328.15,y:180.3},0).wait(1).to({scaleX:0.3733,scaleY:0.404,skewX:2.3831,skewY:-177.6165,x:338,y:184.35},0).wait(1).to({scaleX:0.3736,scaleY:0.4043,skewX:1.6343,skewY:-178.3653,x:348.2,y:188.35},0).wait(1).to({scaleX:0.3739,scaleY:0.4047,skewX:0.9106,skewY:-179.089,x:358.7,y:192.3},0).wait(1).to({scaleX:0.3742,scaleY:0.405,skewX:0.2119,skewY:-179.7877,x:369.4,y:196.25},0).wait(1).to({scaleX:0.3746,scaleY:0.4053,skewX:-0.4625,skewY:-180.4621,x:380.5,y:200.1},0).wait(1).to({scaleX:0.3749,scaleY:0.4057,skewX:-1.113,skewY:-181.1126,x:391.8,y:204},0).wait(1).to({scaleX:0.3752,scaleY:0.406,skewX:-1.7401,skewY:-181.7397,x:403.45,y:207.75},0).wait(1).to({scaleX:0.3755,scaleY:0.4063,skewX:-2.3444,skewY:-182.344,x:415.45,y:211.5},0).wait(1).to({scaleX:0.3758,scaleY:0.4066,skewX:-2.9266,skewY:-182.9261,x:427.7,y:215.2},0).wait(1).to({scaleX:0.3761,scaleY:0.407,skewX:-3.4871,skewY:-183.4867,x:440.35,y:218.9},0).wait(1).to({scaleX:0.3764,scaleY:0.4073,skewX:-4.0267,skewY:-184.0263,x:453.3,y:222.5},0).wait(1).to({scaleX:0.3767,scaleY:0.4076,skewX:-4.546,skewY:-184.5456,x:466.65,y:226.05},0).wait(1).to({scaleX:0.377,scaleY:0.408,skewX:-5.0456,skewY:-185.0452,x:480.3,y:229.7},0).wait(1).to({scaleX:0.3773,scaleY:0.4083,skewX:-5.5263,skewY:-185.5258,x:494.35,y:233.2},0).wait(1).to({scaleX:0.3776,scaleY:0.4086,skewX:-5.9885,skewY:-185.988,x:508.7,y:236.7},0).wait(1).to({scaleX:0.3779,scaleY:0.4089,skewX:-6.433,skewY:-186.4325,x:523.45,y:240.15},0).wait(1).to({scaleX:0.3782,scaleY:0.4093,skewX:-6.8604,skewY:-186.8599,x:538.55,y:243.5},0).wait(1).to({scaleX:0.3785,scaleY:0.4096,skewX:-7.2712,skewY:-187.2707,x:554.05,y:246.9},0).wait(1).to({scaleX:0.3788,scaleY:0.4099,skewX:-7.6662,skewY:-187.6657,x:569.95,y:250.3},0).wait(1).to({scaleX:0.3791,scaleY:0.4102,skewX:-8.0458,skewY:-188.0453,x:586.25,y:253.65},0).wait(1).to({scaleX:0.3794,scaleY:0.4106,skewX:-8.4107,skewY:-188.4102,x:602.9,y:256.95},0).wait(1).to({scaleX:0.3797,scaleY:0.4109,skewX:-8.7615,skewY:-188.7609,x:620,y:260.2},0).wait(1).to({scaleX:0.38,scaleY:0.4112,skewX:-9.0986,skewY:-189.098,x:637.6,y:263.45},0).wait(1).to({scaleX:0.3803,scaleY:0.4115,skewX:-11.5419,skewY:-191.5414,x:647.55,y:265.1},0).wait(1).to({scaleX:0.3806,scaleY:0.4119,skewX:-13.9608,skewY:-193.9603,x:657.6,y:266.3},0).wait(1).to({scaleX:0.3809,scaleY:0.4122,skewX:-16.2739,skewY:-196.2733,x:667.75,y:267.1},0).wait(1).to({scaleX:0.3812,scaleY:0.4125,skewX:-18.4727,skewY:-198.4722,x:677.95,y:267.55},0).wait(1).to({scaleX:0.3815,scaleY:0.4129,skewX:-20.5511,skewY:-200.5505,x:688.2,y:267.6},0).wait(1).to({scaleX:0.3818,scaleY:0.4132,skewX:-22.5052,skewY:-202.5046,x:698.55,y:267.25},0).wait(1).to({scaleX:0.3821,scaleY:0.4135,skewX:-24.3327,skewY:-204.3322,x:709,y:266.55},0).wait(1).to({scaleX:0.3824,scaleY:0.4138,skewX:-26.0333,skewY:-206.0327,x:719.55,y:265.5},0).wait(1).to({scaleX:0.3827,scaleY:0.4142,skewX:-27.6073,skewY:-207.6067,x:730.1,y:264.15},0).wait(1).to({scaleX:0.383,scaleY:0.4145,skewX:-29.0568,skewY:-209.0562,x:740.8,y:262.55},0).wait(1).to({scaleX:0.3833,scaleY:0.4148,skewX:-30.384,skewY:-210.3834,x:751.5,y:260.55},0).wait(1).to({scaleX:0.3836,scaleY:0.4152,skewX:-31.592,skewY:-211.5914,x:762.35,y:258.4},0).wait(1).to({scaleX:0.3839,scaleY:0.4155,skewX:-32.6844,skewY:-212.6838,x:773.2,y:255.9},0).wait(1).to({scaleX:0.3842,scaleY:0.4158,skewX:-33.6644,skewY:-213.6638,x:784.25,y:253.25},0).wait(1).to({scaleX:0.3845,scaleY:0.4161,skewX:-34.5361,skewY:-214.5354,x:795.25,y:250.4},0).wait(1).to({scaleX:0.3848,scaleY:0.4165,skewX:-35.3027,skewY:-215.3021,x:806.45,y:247.3},0).wait(1).to({scaleX:0.3851,scaleY:0.4168,skewX:-35.968,skewY:-215.9674,x:817.65,y:244},0).wait(1).to({scaleX:0.3854,scaleY:0.4171,skewX:-36.5354,skewY:-216.5347,x:829,y:240.65},0).wait(1).to({scaleX:0.3857,scaleY:0.4174,skewX:-37.0079,skewY:-217.0073,x:840.35,y:237.1},0).wait(1).to({scaleX:0.3861,scaleY:0.4178,skewX:-37.3886,skewY:-217.3879,x:851.85,y:233.35},0).wait(1).to({scaleX:0.3864,scaleY:0.4181,skewX:-37.68,skewY:-217.6793,x:863.4,y:229.65},0).wait(1).to({scaleX:0.3867,scaleY:0.4184,skewX:-37.8847,skewY:-217.8841,x:875.05,y:225.7},0).wait(1).to({scaleX:0.387,scaleY:0.4187,skewX:-38.0049,skewY:-218.0042,x:886.75,y:221.85},0).wait(1).to({scaleX:0.3873,scaleY:0.4191,skewX:-38.0425,skewY:-218.0418,x:898.55,y:217.85},0).wait(1).to({scaleX:0.3876,scaleY:0.4194,skewX:-37.9992,skewY:-217.9985,x:910.45,y:213.8},0).wait(1).to({scaleX:0.3879,scaleY:0.4197,skewX:-37.8764,skewY:-217.8757,x:922.45,y:209.75},0).wait(1).to({scaleX:0.3882,scaleY:0.4201,skewX:-37.6753,skewY:-217.6746,x:934.4,y:205.8},0).wait(1).to({scaleX:0.3885,scaleY:0.4204,skewX:-37.3973,skewY:-217.3966,x:946.6,y:201.8},0).wait(1).to({scaleX:0.3888,scaleY:0.4207,skewX:-37.0429,skewY:-217.0422,x:958.8,y:197.85},0).wait(1).to({scaleX:0.3891,scaleY:0.4211,skewX:-36.613,skewY:-216.6122,x:971.1,y:193.95},0).wait(1).to({scaleX:0.3894,scaleY:0.4214,skewX:-36.1082,skewY:-216.1075,x:983.55,y:190.15},0).wait(1).to({scaleX:0.3897,scaleY:0.4217,skewX:-35.5289,skewY:-215.5282,x:996,y:186.5},0).wait(1).to({scaleX:0.39,scaleY:0.422,skewX:-34.8758,skewY:-214.875,x:1008.55,y:182.9},0).wait(1).to({scaleX:0.3903,scaleY:0.4224,skewX:-34.149,skewY:-214.1483,x:1021.25,y:179.45},0).wait(1).to({scaleX:0.3906,scaleY:0.4227,skewX:-33.3491,skewY:-213.3483,x:1033.95,y:176.15},0).wait(1).to({scaleX:0.3909,scaleY:0.423,skewX:-32.4764,skewY:-212.4756,x:1046.8,y:173.05},0).wait(1).to({scaleX:0.3912,scaleY:0.4233,skewX:-31.5314,skewY:-211.5307,x:1059.7,y:170.1},0).wait(1).to({scaleX:0.3915,scaleY:0.4237,skewX:-30.5149,skewY:-210.5141,x:1072.7,y:167.45},0).wait(1).to({scaleX:0.3918,scaleY:0.424,skewX:-29.4275,skewY:-209.4267,x:1085.75,y:165},0).wait(1).to({scaleX:0.3921,scaleY:0.4243,skewX:-28.2704,skewY:-208.2696,x:1098.95,y:162.8},0).wait(1).to({scaleX:0.3924,scaleY:0.4247,skewX:-27.0446,skewY:-207.0438,x:1112.2,y:160.75},0).wait(1).to({scaleX:0.3927,scaleY:0.425,skewX:-25.7517,skewY:-205.7509,x:1125.6,y:159.1},0).wait(1).to({scaleX:0.393,scaleY:0.4253,skewX:-24.3938,skewY:-204.393,x:1139,y:157.75},0).wait(1).to({scaleX:0.3933,scaleY:0.4256,skewX:-22.973,skewY:-202.9722,x:1152.5,y:156.65},0).wait(1).to({scaleX:0.3936,scaleY:0.426,skewX:-21.492,skewY:-201.4911,x:1166.1,y:156},0).wait(1).to({scaleX:0.3939,scaleY:0.4263,skewX:-19.9539,skewY:-199.9531,x:1179.8,y:155.6},0).wait(1).to({scaleX:0.3942,scaleY:0.4266,skewX:-18.3623,skewY:-198.3615,x:1193.6,y:155.65},0).wait(1).to({scaleX:0.3945,scaleY:0.4269,skewX:-16.7214,skewY:-196.7205,x:1207.5,y:156.05},0).wait(1).to({scaleX:0.3948,scaleY:0.4273,skewX:-15.0355,skewY:-195.0347,x:1221.5,y:156.9},0).wait(1).to({scaleX:0.3951,scaleY:0.4276,skewX:-13.3095,skewY:-193.3086,x:1235.55,y:158.15},0).wait(1).to({scaleX:0.3954,scaleY:0.4279,skewX:-11.5488,skewY:-191.5479,x:1249.7,y:159.8},0).wait(1).to({scaleX:0.3957,scaleY:0.4283,skewX:-9.759,skewY:-189.7582,x:1263.9,y:161.9},0).wait(1).to({scaleX:0.396,scaleY:0.4286,skewX:-7.9461,skewY:-187.9452,x:1278.2,y:164.55},0).wait(1).to({scaleX:0.3963,scaleY:0.4289,skewX:-6.116,skewY:-186.1151,x:1292.65,y:167.7},0).wait(1).to({scaleX:0.4262,scaleY:0.4612,skewX:8.9848,skewY:-171.0143,x:1306.8,y:172.9},0).wait(1).to({scaleX:0.456,scaleY:0.4934,skewX:18.4289,skewY:-161.5702,x:1321.25,y:182.35},0).wait(1).to({scaleX:0.4858,scaleY:0.5257,skewX:23.8252,skewY:-156.1739,x:1335.75,y:194.85},0).wait(1).to({scaleX:0.5156,scaleY:0.5579,skewX:26.5095,skewY:-153.4896,x:1350.45,y:209.4},0).wait(1).to({scaleX:0.5454,scaleY:0.5902,skewX:27.141,skewY:-152.8581,x:1365.1,y:225},0).wait(1).to({scaleX:0.5752,scaleY:0.6224,skewX:25.9032,skewY:-154.0959,x:1379.95,y:240.6},0).wait(1).to({scaleX:0.605,scaleY:0.6547,skewX:22.5862,skewY:-157.4129,x:1394.8,y:255.2},0).wait(1).to({scaleX:0.6348,scaleY:0.6869,skewX:16.5389,skewY:-163.4602,x:1409.85,y:267.8},0).wait(1).to({scaleX:0.6646,scaleY:0.7192,skewX:6.5707,skewY:-173.4285,x:1424.95,y:277.7},0).wait(1));

	// тело_png
	this.instance_2 = new lib.комар();
	this.instance_2.setTransform(1280.5,220.6,0.5058,0.5058,0,0,0,144.5,117.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:147.7,regY:117.7,scaleX:0.5081,scaleY:0.5081,rotation:-0.475,x:1276.1,y:220.65},0).wait(1).to({scaleX:0.5103,scaleY:0.5103,rotation:-0.954,x:1270},0).wait(1).to({scaleX:0.5125,scaleY:0.5125,rotation:-1.421,x:1263.85,y:220.7},0).wait(1).to({scaleX:0.5147,scaleY:0.5147,rotation:-1.878,x:1257.7,y:220.85},0).wait(1).to({scaleX:0.5169,scaleY:0.5169,rotation:-2.324,x:1251.35,y:221.05},0).wait(1).to({scaleX:0.5192,scaleY:0.5192,rotation:-2.76,x:1245,y:221.3},0).wait(1).to({scaleX:0.5214,scaleY:0.5214,rotation:-3.186,x:1238.55,y:221.5},0).wait(1).to({scaleX:0.5236,scaleY:0.5236,rotation:-3.602,x:1232,y:221.9},0).wait(1).to({scaleX:0.5259,scaleY:0.5259,rotation:-4.01,x:1225.45,y:222.3},0).wait(1).to({scaleX:0.5281,scaleY:0.5281,rotation:-4.408,x:1218.75,y:222.7},0).wait(1).to({scaleX:0.5303,scaleY:0.5303,rotation:-4.797,x:1212,y:223.2},0).wait(1).to({scaleX:0.5325,scaleY:0.5325,rotation:-5.177,x:1205.2,y:223.75},0).wait(1).to({scaleX:0.5348,scaleY:0.5348,rotation:-5.55,x:1198.3,y:224.35},0).wait(1).to({scaleX:0.537,scaleY:0.537,rotation:-5.914,x:1191.3,y:225},0).wait(1).to({scaleX:0.5392,scaleY:0.5392,rotation:-6.27,x:1184.25,y:225.7},0).wait(1).to({scaleX:0.5414,scaleY:0.5414,rotation:-6.619,x:1177.15,y:226.45},0).wait(1).to({scaleX:0.5436,scaleY:0.5436,rotation:-6.961,x:1169.9,y:227.2},0).wait(1).to({scaleX:0.5459,scaleY:0.5459,rotation:-7.295,x:1162.6,y:228.1},0).wait(1).to({scaleX:0.5481,scaleY:0.5481,rotation:-7.622,x:1155.3,y:229},0).wait(1).to({scaleX:0.5503,scaleY:0.5503,rotation:-7.942,x:1147.85,y:229.95},0).wait(1).to({scaleX:0.5526,scaleY:0.5526,rotation:-8.256,x:1140.35,y:231},0).wait(1).to({scaleX:0.5548,scaleY:0.5548,rotation:-8.563,x:1132.8,y:232.05},0).wait(1).to({scaleX:0.557,scaleY:0.557,rotation:-8.864,x:1125.15,y:233.15},0).wait(1).to({scaleX:0.5592,scaleY:0.5592,rotation:-9.158,x:1117.45,y:234.35},0).wait(1).to({scaleX:0.5615,scaleY:0.5615,rotation:-9.447,x:1109.6,y:235.6},0).wait(1).to({scaleX:0.5637,scaleY:0.5637,rotation:-9.73,x:1101.7,y:236.85},0).wait(1).to({scaleX:0.5659,scaleY:0.5659,rotation:-10.008,x:1093.75,y:238.15},0).wait(1).to({scaleX:0.5681,scaleY:0.5681,rotation:-10.28,x:1085.75,y:239.55},0).wait(1).to({scaleX:0.5704,scaleY:0.5704,rotation:-10.546,x:1077.65,y:241},0).wait(1).to({scaleX:0.5726,scaleY:0.5726,rotation:-10.808,x:1069.45,y:242.45},0).wait(1).to({scaleX:0.5748,scaleY:0.5748,rotation:-11.064,x:1061.2,y:243.95},0).wait(1).to({scaleX:0.577,scaleY:0.577,rotation:-11.315,x:1052.85,y:245.6},0).wait(1).to({scaleX:0.5792,scaleY:0.5792,rotation:-11.562,x:1044.45,y:247.2},0).wait(1).to({scaleX:0.5815,scaleY:0.5815,rotation:-11.804,x:1036,y:248.9},0).wait(1).to({scaleX:0.5837,scaleY:0.5837,rotation:-12.041,x:1027.5,y:250.6},0).wait(1).to({scaleX:0.5859,scaleY:0.5859,rotation:-12.274,x:1018.85,y:252.45},0).wait(1).to({scaleX:0.5882,scaleY:0.5882,rotation:-12.503,x:1010.15,y:254.3},0).wait(1).to({scaleX:0.5904,scaleY:0.5904,rotation:-12.728,x:1001.35,y:256.2},0).wait(1).to({scaleX:0.5926,scaleY:0.5926,rotation:-12.948,x:992.55,y:258.15},0).wait(1).to({scaleX:0.5948,scaleY:0.5948,rotation:-13.164,x:983.65,y:260.1},0).wait(1).to({scaleX:0.5971,scaleY:0.5971,rotation:-13.377,x:974.65,y:262.15},0).wait(1).to({scaleX:0.5993,scaleY:0.5993,rotation:-13.585,x:965.6,y:264.25},0).wait(1).to({scaleX:0.6015,scaleY:0.6015,rotation:-13.79,x:956.45,y:266.4},0).wait(1).to({scaleX:0.6037,scaleY:0.6037,rotation:-13.991,x:947.25,y:268.65},0).wait(1).to({scaleX:0.606,scaleY:0.606,rotation:-14.189,x:937.95,y:270.9},0).wait(1).to({scaleX:0.6082,scaleY:0.6082,rotation:-14.383,x:928.6,y:273.25},0).wait(1).to({scaleX:0.6104,scaleY:0.6104,rotation:-14.574,x:919.2,y:275.6},0).wait(1).to({scaleX:0.6126,scaleY:0.6126,rotation:-14.762,x:909.65,y:278.05},0).wait(1).to({scaleX:0.6149,scaleY:0.6149,rotation:-14.946,x:900.1,y:280.5},0).wait(1).to({scaleX:0.6171,scaleY:0.6171,rotation:-15.127,x:890.5,y:282.95},0).wait(1).to({scaleX:0.6193,scaleY:0.6193,rotation:-15.306,x:880.8,y:285.55},0).wait(1).to({scaleX:0.6215,scaleY:0.6215,rotation:-15.481,x:871,y:288.2},0).wait(1).to({scaleX:0.6238,scaleY:0.6238,rotation:-15.653,x:861.1,y:290.9},0).wait(1).to({scaleX:0.626,scaleY:0.626,rotation:-15.823,x:851.2,y:293.6},0).wait(1).to({scaleX:0.6282,scaleY:0.6282,rotation:-15.989,x:841.2,y:296.4},0).wait(1).to({scaleX:0.6305,scaleY:0.6305,rotation:-16.153,x:831.15,y:299.2},0).wait(1).to({scaleX:0.6327,scaleY:0.6327,rotation:-16.314,x:821,y:302.05},0).wait(1).to({scaleX:0.6349,scaleY:0.6349,rotation:-16.473,x:810.8,y:305},0).wait(1).to({scaleX:0.6371,scaleY:0.6371,rotation:-16.629,x:800.5,y:307.95},0).wait(1).to({scaleX:0.6394,scaleY:0.6394,rotation:-16.783,x:790.2,y:311.05},0).wait(1).to({scaleX:0.6416,scaleY:0.6416,rotation:-16.934,x:779.75,y:314.1},0).wait(1).to({scaleX:0.6438,scaleY:0.6438,rotation:-17.083,x:769.25,y:317.25},0).wait(1).to({scaleX:0.646,scaleY:0.646,rotation:-17.229,x:758.7,y:320.4},0).wait(1).to({scaleX:0.6482,scaleY:0.6482,rotation:-17.373,x:748.1,y:323.6},0).wait(1).to({scaleX:0.6505,scaleY:0.6505,rotation:-17.515,x:737.35,y:326.95},0).wait(1).to({scaleX:0.6527,scaleY:0.6527,rotation:-17.655,x:726.6,y:330.25},0).wait(1).to({scaleX:0.6549,scaleY:0.6549,rotation:-17.793,x:715.8,y:333.65},0).wait(1).to({scaleX:0.6571,scaleY:0.6571,rotation:-17.928,x:704.9,y:337.05},0).wait(1).to({scaleX:0.6594,scaleY:0.6594,rotation:-18.062,x:693.9,y:340.55},0).wait(1).to({scaleX:0.6616,scaleY:0.6616,rotation:-18.193,x:682.9,y:344.1},0).wait(1).to({scaleX:0.6638,scaleY:0.6638,rotation:-18.323,x:671.75,y:347.7},0).wait(1).to({scaleX:0.659,scaleY:0.659,rotation:-17.13,x:656.5,y:352.5},0).wait(1).to({scaleX:0.6542,scaleY:0.6542,rotation:-15.888,x:641.45,y:356.9},0).wait(1).to({scaleX:0.6494,scaleY:0.6494,rotation:-14.633,x:626.45,y:360.9},0).wait(1).to({scaleX:0.6446,scaleY:0.6446,rotation:-13.366,x:611.7,y:364.55},0).wait(1).to({scaleX:0.6398,scaleY:0.6398,rotation:-12.089,x:597,y:367.8},0).wait(1).to({scaleX:0.635,scaleY:0.635,rotation:-10.802,x:582.5,y:370.65},0).wait(1).to({scaleX:0.6302,scaleY:0.6302,rotation:-9.506,x:568.2,y:373.2},0).wait(1).to({scaleX:0.6254,scaleY:0.6254,rotation:-8.204,x:553.95,y:375.35},0).wait(1).to({scaleX:0.6206,scaleY:0.6206,rotation:-6.895,x:539.9,y:377.15},0).wait(1).to({scaleX:0.6158,scaleY:0.6158,rotation:-5.582,x:526,y:378.65},0).wait(1).to({scaleX:0.611,scaleY:0.611,rotation:-4.267,x:512.25,y:379.8},0).wait(1).to({scaleX:0.6061,scaleY:0.6061,rotation:-2.949,x:498.6,y:380.6},0).wait(1).to({scaleX:0.6013,scaleY:0.6013,rotation:-1.632,x:485.2,y:381.05},0).wait(1).to({scaleX:0.5965,scaleY:0.5965,rotation:-0.315,x:471.85,y:381.25},0).wait(1).to({scaleX:0.5917,scaleY:0.5917,rotation:0.9989,x:458.7,y:381.15},0).wait(1).to({scaleX:0.5869,scaleY:0.5869,rotation:2.3088,x:445.65,y:380.7},0).wait(1).to({scaleX:0.5821,scaleY:0.5821,rotation:3.6134,x:432.8,y:380},0).wait(1).to({scaleX:0.5773,scaleY:0.5773,rotation:4.9113,x:420.05,y:379},0).wait(1).to({scaleX:0.5725,scaleY:0.5725,rotation:6.2012,x:407.45,y:377.75},0).wait(1).to({scaleX:0.5677,scaleY:0.5677,rotation:7.4818,x:395.05,y:376.2},0).wait(1).to({scaleX:0.5629,scaleY:0.5629,rotation:8.7519,x:382.7,y:374.45},0).wait(1).to({scaleX:0.5581,scaleY:0.5581,rotation:10.0105,x:370.6,y:372.4},0).wait(1).to({scaleX:0.5533,scaleY:0.5533,rotation:11.2563,x:358.6,y:370.05},0).wait(1).to({scaleX:0.5485,scaleY:0.5485,rotation:12.4885,x:346.75,y:367.5},0).wait(1).to({scaleX:0.5437,scaleY:0.5437,rotation:13.706,x:335,y:364.7},0).wait(1).to({scaleX:0.5388,scaleY:0.5388,rotation:14.9079,x:323.45,y:361.8},0).wait(1).to({scaleX:0.534,scaleY:0.534,rotation:16.0936,x:312.05,y:358.55},0).wait(1).to({scaleX:0.5292,scaleY:0.5292,rotation:17.2622,x:300.7,y:355.15},0).wait(1).to({scaleX:0.5244,scaleY:0.5244,rotation:18.4132,x:289.6,y:351.45},0).wait(1).to({scaleX:0.5196,scaleY:0.5196,rotation:19.5458,x:278.55,y:347.65},0).wait(1).to({scaleX:0.5148,scaleY:0.5148,rotation:20.6598,x:267.7,y:343.65},0).wait(1).to({scaleX:0.51,scaleY:0.51,rotation:21.7545,x:257,y:339.4},0).wait(1).to({scaleX:0.5052,scaleY:0.5052,rotation:22.8297,x:246.45,y:335.05},0).wait(1).to({scaleX:0.5004,scaleY:0.5004,rotation:23.885,x:236.05,y:330.45},0).wait(1).to({scaleX:0.4956,scaleY:0.4956,rotation:24.9202,x:225.75,y:325.8},0).wait(1).to({scaleX:0.4908,scaleY:0.4908,rotation:25.9352,x:215.65,y:320.9},0).wait(1).to({scaleX:0.486,scaleY:0.486,rotation:26.9297,x:205.65,y:315.9},0).wait(1).to({scaleX:0.4812,scaleY:0.4812,rotation:27.9039,x:195.8,y:310.7},0).wait(1).to({scaleX:0.4764,scaleY:0.4764,rotation:28.8575,x:186.1,y:305.4},0).wait(1).to({scaleX:0.4716,scaleY:0.4716,rotation:29.7907,x:176.6,y:300},0).wait(1).to({scaleX:0.4667,scaleY:0.4667,rotation:30.7034,x:167.1,y:294.5},0).wait(1).to({scaleX:0.4619,scaleY:0.4619,rotation:31.5959,x:157.85,y:288.8},0).wait(1).to({scaleX:0.4571,scaleY:0.4571,rotation:32.4681,x:148.7,y:283.05},0).wait(1).to({scaleX:0.4523,scaleY:0.4523,rotation:33.3204,x:139.75,y:277.2},0).wait(1).to({scaleX:0.4475,scaleY:0.4475,rotation:34.1527,x:130.95,y:271.2},0).wait(1).to({scaleX:0.4427,scaleY:0.4427,rotation:34.9654,x:122.25,y:265.15},0).wait(1).to({scaleX:0.4379,scaleY:0.4379,rotation:35.7587,x:113.7,y:259},0).wait(1).to({scaleX:0.4331,scaleY:0.4331,rotation:36.5327,x:105.3,y:252.85},0).wait(1).to({scaleX:0.4283,scaleY:0.4283,rotation:37.2877,x:97.05,y:246.5},0).wait(1).to({scaleX:0.4235,scaleY:0.4235,rotation:38.0241,x:88.9,y:240.25},0).wait(1).to({scaleX:0.4187,scaleY:0.4187,rotation:38.7419,x:80.95,y:233.85},0).wait(1).to({scaleX:0.4139,scaleY:0.4139,rotation:39.4415,x:73.05,y:227.4},0).wait(1).to({scaleX:0.4091,scaleY:0.4091,rotation:40.1231,x:65.35,y:220.95},0).wait(1).to({scaleX:0.4043,scaleY:0.4043,rotation:40.7871,x:57.85,y:214.45},0).wait(1).to({scaleX:0.3994,scaleY:0.3994,rotation:41.4335,x:50.5,y:207.9},0).wait(1).to({scaleX:0.3946,scaleY:0.3946,rotation:42.0628,x:43.2,y:201.4},0).wait(1).to({scaleX:0.3898,scaleY:0.3898,rotation:42.675,x:36.1,y:194.85},0).wait(1).to({scaleX:0.385,scaleY:0.385,rotation:43.2705,x:29.1,y:188.25},0).wait(1).to({scaleX:0.3802,scaleY:0.3802,rotation:43.8495,x:22.3,y:181.65},0).wait(1).to({scaleX:0.3754,scaleY:0.3754,rotation:44.4121,x:15.6,y:175.1},0).wait(1).to({scaleX:0.3706,scaleY:0.3706,rotation:44.9585,x:9.1,y:168.6},0).wait(1).to({scaleX:0.3658,scaleY:0.3658,rotation:45.4889,x:2.75,y:162.15},0).wait(1).to({scaleX:0.361,scaleY:0.361,rotation:46.0034,x:-3.5,y:155.6},0).wait(1).to({scaleX:0.3562,scaleY:0.3562,rotation:46.5021,x:-9.65,y:149.15},0).wait(1).to({scaleX:0.3514,scaleY:0.3514,rotation:46.9851,x:-15.6,y:142.75},0).wait(1).to({scaleX:0.3466,scaleY:0.3466,rotation:47.4524,x:-21.4,y:136.4},0).wait(1).to({scaleX:0.3418,scaleY:0.3418,rotation:47.904,x:-27.05,y:130.1},0).wait(1).to({scaleX:0.337,scaleY:0.337,rotation:48.3399,x:-32.6,y:123.9},0).wait(1).to({scaleX:0.3322,scaleY:0.3322,rotation:-47.005,x:-37.75,y:122.3},0).wait(1).to({scaleX:0.3274,scaleY:0.3274,rotation:-71.525,x:-43.15,y:132.4},0).wait(1).to({scaleX:0.3225,scaleY:0.3225,rotation:-77.354,x:-48,y:150.1},0).wait(1).to({scaleX:0.3177,scaleY:0.3177,rotation:-79.373,x:-52.7,y:172.25},0).wait(1).to({scaleX:0.3129,scaleY:0.3129,rotation:-79.681,x:-57.1,y:195.75},0).wait(1).to({scaleX:0.3081,scaleY:0.3081,rotation:-78.38,x:-61.45,y:217.55},0).wait(1).to({scaleX:0.3033,scaleY:0.3033,rotation:-73.66,x:-65.6,y:234.8},0).wait(1).to({scaleX:0.2985,scaleY:0.2985,rotation:-49.474,x:-69.4,y:244.5},0).wait(1).to({scaleX:0.2937,scaleY:0.2937,rotation:60.4699,x:-73.85,y:244.7},0).wait(1));

	// Слой_15
	this.instance_3 = new lib.Безымянный2();
	this.instance_3.setTransform(-3,-11,0.3079,0.2339);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(149));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(415.8,119.3,1112.7,600.8000000000001);
// library properties:
lib.properties = {
	id: '069DAAF672E74544B04DC64C2199D1BF',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Безымянный2.png", id:"Безымянный2"},
		{src:"images/символы_atlas_1.png", id:"символы_atlas_1"},
		{src:"images/символы_atlas_2.png", id:"символы_atlas_2"},
		{src:"images/символы_atlas_3.png", id:"символы_atlas_3"}
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