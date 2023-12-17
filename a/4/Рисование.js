(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Рисование_atlas_1", frames: [[1402,0,326,323],[0,0,1400,957]]}
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



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Рисование_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Растровоеизображение8 = function() {
	this.initialize(ss["Рисование_atlas_1"]);
	this.gotoAndStop(1);
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
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.363,0.363);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,118.4,117.3), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEB372").s().p("AiUjHIEpAAIAAGPQhSlHjXhIg");
	this.shape.setTransform(14.925,20.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF7101").s().p("AkrG4IAAneIAAmQQIRgZA9KfIABAMQAEA1ACA6QACA1gBA4g");
	this.shape_1.setTransform(59.8071,43.9784);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DE2533").s().p("Akqm3IJVAAIABAAIAAL5IgBB1IgGAAIgBAAIgfABQo/AAAQtvg");
	this.shape_2.setTransform(59.7782,131.9311);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,89.8,175.9), null);


(lib.Анимация8 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C1AF81").s().p("AoQhTIIDAAIAKAAIACAAIISAAItOCng");
	this.shape.setTransform(30.1817,30.536,0.181,0.181,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3B094").s().p("AncGmIO5tLIg+BiIgCACIneLngAjdEWIhlBZICDAAIBmi9gACMhVIAtBLIBzi7g");
	this.shape_1.setTransform(37.2814,-9.0667,0.181,0.181,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0E9D9").s().p("AD/E5Iq7hoIN5oKIi7JyIAAABgAh6DnIF5A1IivhagAAhgfIChATIAOhvg");
	this.shape_2.setTransform(37.8651,-23.0671,0.181,0.181,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE9C0").s().p("AncntIK7BpIADABIAAgBID7AmIu5NLgAmeF4IBRhOIhRgvgAjVgYIBpB0IDGijgADsjaICbhqIibAAgAmelEIB1hdIh1AAg");
	this.shape_3.setTransform(37.2814,-10.3563,0.181,0.181,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E6DFB5").s().p("AqaAvIAhAAIScliIB4JmgADhC2IDvApIhbhagAlNAvIEvAAICuiKgADhiYIDMB2Igrihg");
	this.shape_4.setTransform(-9.2943,34.3415,0.181,0.181,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BEB28A").s().p("Aqii4IgBgBIVHARIycFigAnVBNIF0hzIkRAAg");
	this.shape_5.setTransform(-6.9685,31.8347,0.181,0.181,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAAB0IgJAAQgOgCgOgDQgYgJgUgUQgigiAAgwIAAgEQACgtAgggQAUgUAYgIQAOgEAOgBIAJgBQAwAAAiAiQANAMAHANQAOAaAAAeQAAAwgiAiQghAhguABg");
	this.shape_6.setTransform(30.2586,26.916,0.181,0.181,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ECD2AF").s().p("AAUhuIgGgpIEPADIFgEDIjYEVgAGlEaICBjNIiBAAgAClAJIgFhnIhfgagAmLmDIGZDsIqKIbgAoUCpIAABaICWh8gAmgicIBXg4IgjhsgAAOiXIAzifIBcBEIiPBbg");
	this.shape_7.setTransform(28.2314,21.9883,0.181,0.181,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#746256").s().p("AL3MSIl4kVIlfkEIiAheIhchEIhXhBISNL8gAm2iJInDm8IAAjMIJmMng");
	this.shape_8.setTransform(23.6431,14.789,0.181,0.181,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#894427").s().p("A10l9MAroAFsIiRAjIAAgCI1BFOIgKABIABABIh+Aeg");
	this.shape_9.setTransform(3.3666,22.106,0.181,0.181,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#87452B").s().p("AOEa2ICUgxIBbBbgAaRYBIDqApIieBbgAVBWVICOC7IhxA1gAFVYwIHeiLIivCLgEAgXAWuIDzAAIhjBPgAOEVoIChgrIArChgACvVPIERAAIl0B0gAYkU+IFXA6IiWA2gAOdSHIAAgBIgdARIAxhYIC2A9IjoAdgAyhSZIAAhoIBvBogAvQOjICBAAIiBDNgA+KP+ICVgiIiVB9gA01LdIBgAaIAEBngAFV0DIZbPZIpUR0gA7iIVIAiBsIhXA4gA3UJUIAxgcIAyBWgA5vGoIBWgxIBMBGgEgisgHuIBlhZICDhkIhlC9gEgkJgKpIBSAvIhSBOgEghAgO9IEwgvIjGCkgA7duzICfhwIhzC7gA59zpICbAAIibBqgEgkJgVGIB1AAIh1BdgEggFgV7IDLgmICvBbgA9o6CICuhdIgNBwg");
	this.shape_10.setTransform(2.9186,6.5355,0.181,0.181,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F0DEB8").s().p("ArikzIXED1I1MFxgAjKCFICdhbIjqgpgApKCFIBxg1IiOi7gAD+gCIBjhPIjzAAgAjChRICVg3IlXg5g");
	this.shape_11.setTransform(-32.5709,34.3415,0.181,0.181,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E79C87").s().p("AtwtwIbhAAI7hbhg");
	this.shape_12.setTransform(12.6971,-0.7588,0.181,0.181,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A8503C").s().p("A6eQiIbh7hMAQHAhNgABDq/IOsrOIEkLOIE7MUIBRDEg");
	this.shape_13.setTransform(-2.0317,-3.958,0.181,0.181,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C6AC8B").s().p("AwmaZIAKgBIVClOIAAACIgFFegAgHZlIgeARIDngcIi2g9IgwBYIAdgSgAJ/slIGoAAIhsMVgAmI6pIBHDbIqsApg");
	this.shape_14.setTransform(-13.9687,-2.1118,0.181,0.181,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F3B4A3").s().p("AtwE4IPNpvIMUJvg");
	this.shape_15.setTransform(12.6971,-22.3566,0.181,0.181,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D68872").s().p("A55GwIBHhuIHernIADgCIA+hiIAAbhgAhFx6IF6gUIgFAFIKsgpIKeglIusLOg");
	this.shape_16.setTransform(9.7468,-7.2522,0.181,0.181,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#ECDCB8").s().p("A8TdwQAugBAhghQAigiAAgxQAAgfgOgZQgHgOgNgMQgigigwAAIgKABQgOABgOAFQgYAHgUAUQggAggCAuIAAAEQAAAxAiAiQAUAUAYAIQAOAEAOACIoDAAIKLocImajtIDSiTICjCgIBYBAIgzCgICPhcICABfIkPgDIAGAoIGRH0gA3ScuIBvAAIhvhngA8ETpIBiA6IgyhWgA+fQ+ICiAVIhMhGgAabpuIKJizIr1PIgAl0zyIKDp9IgjF9IplEEg");
	this.shape_17.setTransform(-2.5928,-5.4377,0.181,0.181,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.9,-39.9,91.8,79.8);


(lib.Хвост = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(89.8,88,1,1,0,0,0,89.8,88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:44.9,rotation:-3.7363,x:39.5,y:92.1},0).wait(1).to({rotation:-7.4727,x:34.2,y:96.3},0).wait(1).to({rotation:-11.209,x:29.1,y:100.45},0).wait(1).to({rotation:-14.9454,x:24.25,y:104.55},0).wait(1).to({rotation:-18.6817,x:19.55,y:108.65},0).wait(1).to({rotation:-22.4181,x:14.95,y:112.7},0).wait(1).to({rotation:-26.1544,x:10.65,y:116.6},0).wait(1).to({rotation:-23.0721,x:14.35,y:113.3},0).wait(1).to({rotation:-19.9899,x:18.25,y:109.95},0).wait(1).to({rotation:-16.9076,x:22.2,y:106.55},0).wait(1).to({rotation:-13.8254,x:26.3,y:103.1},0).wait(1).to({rotation:-10.7431,x:30.5,y:99.65},0).wait(1).to({rotation:-7.6609,x:34.9,y:96.15},0).wait(1).to({rotation:-4.5786,x:39.3,y:92.65},0).wait(1).to({rotation:-1.4964,x:43.95,y:89.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.4,0,159.4,183.7);


(lib.Символ4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Хвост();
	this.instance.setTransform(44.9,145.45,1,1,0,0,0,44.9,88);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D82731").s().p("AlnE+IAAgCIATgpQCpk/ERkRQCFFRB9EqgAloDIIABgCIAAACg");
	this.shape.setTransform(125.8,201.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE2533").s().p("AjNl9QDxBNCqCEQk0D3hZECQgIAYgGAZg");
	this.shape_1.setTransform(169,38.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("ADrAsQgSgRAAgbQAAgZASgUQATgRAaAAQAaAAATARQASAUAAAZQAAAbgSARQgTATgaAAQgaAAgTgTgAlEAsQgSgRAAgbQAAgZASgUQASgRAbAAQAbAAARARQATAUAAAZQAAAbgTARQgRATgbAAQgbAAgSgTg");
	this.shape_2.setTransform(225.1,112.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag5A5QgGgHgFgHQgLgRAAgUIgBgGQAAghAXgXQASgSAXgEQAHgCAJAAIAAAAQAJAAAIABQAWAFASASQAYAXAAAhIAAADQgBAfgXAXQgTAUgbADIgLABQggAAgZgYg");
	this.shape_3.setTransform(224.85,136.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6E00").s().p("AmZiYQEgkQFYg4QBYADBXgEQABAUALARQjFCRiHDTIAAADQicDyhIFFQh+kqiFlQg");
	this.shape_4.setTransform(176.975,185.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6F01").s().p("AGYMQIAAt4IALAAQAzF1CBDjQBnC2CaBXIhfAOQgyAHhwAAIgXABQhIAAhggDgACYiyQjtgHjxg5QhKgTgrgCQkqgMhyhbQAxgRAsgVQDGhcCJi1QAhgsAegyIAIgOIABgBIALAAIAFABIA2AOQCVAoB4A2QA3AaAwAcQCfBdBYB+QAiAwAXBcQgXAFgSARQgXAYAAAhIABAGQg2ACg2AAIhEgBgABVnVQgRATAAAaQAAAbARARQATATAaAAQAbAAASgTQATgRgBgbQABgagTgTQgSgSgbAAQgaAAgTASg");
	this.shape_5.setTransform(184.05,154.9536);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DE2628").s().p("AEuB5QhXh9ifhdQgxgcg3gaQh3g2iWgoIg2gOIgEgBILvAAIAAABIAAIGQgJAAgIACQgXhcgigwg");
	this.shape_6.setTransform(187.2,102.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7F0033").s().p("ADAFNQhZkCk0j2QCpiFDyhNIAAL7QgHgZgHgYg");
	this.shape_7.setTransform(280.6,38.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#760021").s().p("Al8EDIAAAAIAAoGIL5AAIgKACIg6APQiSAmh0A1Qg7Abg0AeQhHAqg5AwQhEA5gwBEQgjAxgYBaQgIgBgJAAg");
	this.shape_8.setTransform(262.925,102.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6F0C").s().p("AF8EWIr5AAQACgaAFgYQAPhXAhhDIATgjQAzhbBDhMQBGhSBYhBIABgCIABABQE0D3BZEBQAHAYAHAZIAAABg");
	this.shape_9.setTransform(263,48.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FBB570").s().p("AsdQmQBJlFCcjzIAAgDQCHjSDFiRQAFAHAGAHQAZAYAhAAIAAN4gAOgEXIAEgDIAAAAIAAADgAuYn7IgLAAQAGgZAIgYQBYkCE2j3IABABQBvBTBTBtQA5BJAsBVQAhBEAQBWQAEAYADAZg");
	this.shape_10.setTransform(241.65,127.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEB372").s().p("AouEtIAAgDQAAghgYgYQgRgSgXgEQAYhbAjgxQAwhDBEg5QA5gxBHgpQA0gfA8gbQB0g0CRgnIA6gOIAKgDIACADIAIAOQAdAwAgArQBvCUCXBYQAhATAjARQAwAXA0ASQg7AwhtAaQhlAYiPAGQlSBJlAAFIgtAAIhCgBgAmRAOQgSATAAAaQAAAbASARQASATAbAAQAaAAASgTQATgRAAgbQAAgagTgTQgSgRgaAAQgbAAgSARg");
	this.shape_11.setTransform(288.825,106.595);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,351.1,233.6), null);


(lib.Птичка = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(59.2,58.6,1,1,0,0,0,59.2,58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:49.4},0).wait(1).to({y:40.2},0).wait(1).to({y:30.95},0).wait(1).to({y:21.75},0).wait(1).to({y:12.5},0).wait(1).to({y:3.3},0).wait(1).to({y:-5.95},0).wait(1).to({y:-15.15},0).wait(1).to({y:-24.4},0).wait(1).to({y:-15.15},0).wait(1).to({y:-5.95},0).wait(1).to({y:3.3},0).wait(1).to({y:12.5},0).wait(1).to({y:21.75},0).wait(1).to({y:30.95},0).wait(1).to({y:40.2},0).wait(1).to({y:49.4},0).wait(1).to({y:58.6},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-83,118.4,200.3);


(lib.Анимация4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Символ4();
	this.instance.setTransform(0.05,0,1,1,0,0,0,175.6,116.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.5,-116.8,351.1,233.6);


(lib.Символ5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Птичка();
	this.instance.setTransform(147.4,80.7,1.3774,1.3774,0,0,0,59.3,58.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AilB0QhFhEAAhhQAAhEAig2QArBuCRAUQCmACAriKQAmA4AABIQAABhhFBEQhFBGhhAAQhhAAhEhGgABsiTQgFgGAAgJQAAgKAFgHQAIgGAJAAQAJAAAHAGQAGAHAAAKQAAAJgGAGQgHAHgJAAQgJAAgIgHg");
	this.shape.setTransform(142.1636,224.9839,0.896,0.896);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8C0700").s().p("AnMiMIOZAAIgIAhIgmD4g");
	this.shape_1.setTransform(41.3003,246.9127,0.896,0.896);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BB2A0F").s().p("An3DKIPqmRIAFgDIhWGUg");
	this.shape_2.setTransform(45.1754,216.1363,0.896,0.896);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#463930").s().p("AgKB5QiRgUgrhtQA4hSA/gUQAdgKAcAAIADAAIAAAAQCGgDBUBtQgrCHihAAIgFAAgABugPQgFAHAAAIQAAAJAFAHQAIAGAJAAQAJAAAHgGQAGgHAAgJQAAgIgGgHQgHgGgJAAQgJAAgIAGg");
	this.shape_3.setTransform(141.9845,210.3537,0.896,0.896);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0A0502").s().p("Ax1bCMAFqgk9IAmj5IAHghIBXmVIgFACQAzhsBchcQDRjREoAAQEnAADRDRQDKDKAHEbMAGxArNgAiX0PQg+AUg5BSQgiA3AABEQAABhBFBEQBFBGBhAAQBgAABFhGQBFhEAAhhQAAhJglg4QhVhtiGADIAAAAIgCAAIgDAAQgcAAgbAKg");
	this.shape_4.setTransform(148.413,316.5292,0.896,0.896);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,250.7,471.6), null);


(lib.Лиса = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// птички
	this.instance = new lib.Символ5();
	this.instance.setTransform(556.05,641.8,1,1,0,0,0,125.4,235.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:178.6,y:577.5},0).wait(1).to({y:570.4},0).wait(1).to({y:563.35},0).wait(1).to({y:556.25},0).wait(1).to({y:549.2},0).wait(1).to({y:542.1},0).wait(1).to({y:535},0).wait(1).to({y:527.95},0).wait(1).to({y:520.85},0).wait(1).to({y:513.8},0).wait(1).to({y:506.7},0).wait(1).to({y:499.65},0).wait(1).to({y:492.55},0).wait(1).to({y:485.45},0).wait(1).to({y:478.4},0).wait(1).to({y:471.3},0).wait(1).to({y:464.25},0).wait(1).to({y:457.15},0).wait(1).to({y:450.1},0).wait(1).to({y:443},0).wait(1).to({y:435.9},0).wait(1).to({y:428.85},0).wait(1).to({y:421.75},0).wait(1).to({y:414.7},0).wait(1).to({y:407.6},0).wait(1).to({y:400.55},0).wait(1).to({y:393.45},0).wait(1).to({y:386.35},0).wait(1).to({y:379.3},0).wait(1).to({y:372.2},0).wait(1).to({y:365.15},0).wait(1).to({y:358.05},0).wait(1).to({y:351},0).wait(1).to({y:343.9},0).wait(1).to({y:336.8},0).wait(1).to({y:329.75},0).wait(1).to({y:322.65},0).wait(1).to({y:315.6},0).wait(1).to({y:308.5},0).wait(1).to({y:301.45},0).wait(1).to({y:294.35},0).wait(1).to({y:287.25},0).wait(1).to({y:280.2},0).wait(1).to({y:273.1},0).wait(1).to({y:266.05},0).wait(1).to({y:258.95},0).wait(1).to({y:251.9},0).wait(1).to({y:244.8},0).wait(1).to({y:237.7},0).wait(1).to({y:230.65},0).wait(1).to({y:223.55},0).wait(1).to({y:216.5},0).wait(1).to({y:209.4},0).wait(1).to({y:202.35},0).wait(1).to({y:195.25},0).wait(1).to({y:188.15},0).wait(1).to({y:181.1},0).wait(1).to({y:174.05},0).wait(1).to({y:167},0).wait(1).to({y:159.9},0).wait(1).to({y:152.85},0).wait(1).to({y:145.75},0).wait(1).to({y:138.65},0).wait(1).to({y:131.6},0).wait(1).to({y:124.5},0).wait(1).to({y:117.45},0).wait(1).to({y:110.35},0).wait(1).to({y:103.25},0).wait(91));

	// черепаха
	this.instance_1 = new lib.Анимация8("synched",0);
	this.instance_1.setTransform(-527.5,173.1,0.7379,0.652,-59.9985);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(62).to({_off:false},0).to({x:-448.5,y:138.6},24).to({regX:-0.1,regY:0.2,scaleX:1.114,scaleY:0.9843,rotation:0,x:-302.7,y:184.2},26).to({scaleX:1.6453,scaleY:1.4538,x:-76.85,y:320.7},32).to({regY:0.4,scaleX:1.9356,scaleY:1.7103,rotation:-9.2983,x:266.6,y:517.65},14).wait(1));

	// лиса
	this.instance_2 = new lib.Анимация4("synched",0);
	this.instance_2.setTransform(-577.4,-70.5,0.2228,0.2447);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40).to({_off:false},0).to({scaleX:0.7794,scaleY:0.8561,guide:{path:[-577.3,-70.4,-489.2,-63.5,-401.1,-56.6,-401.1,-54.7,-393.3,-46.9,-393.3,-30.2,-393.3,-13.6,-413.9,-13.6,-434.4,-13.6,-434.4,-2.8,-434.4,7.9,-396.3,-16.5,-330.7,-31.5,-298,-39,-272.5,-10.1,-247.1,18.9,-228.9,84.3,-228.9,79.4,-228.9,74.5,-225,74.5,-221,74.5,-214.1,75.9,-205.4,70.6,-49.2,-62.5,-17.3,57.6,-13.5,100.3,-9.6,142.9,-9.6,158.6,-9.6,174.2,-5.8,174.2,-1.9,174.2,11.8,159.6,25.5,144.9,62.2,37,136.1,26.9,173,21.9,211,74.9,248.9,127.9,287.8,238.8,299.5,227.1,311.3,215.3,316.2,215.3,321.1,215.3,321.1,211.4,321.1,207.5,326,207.5,330.9,207.5,330.9,204.6,330.9,201.6,325,195,341.3,168.7,357.7,142.3,396.3,96.3,434.8,50.2,476.2,85.4,517.6,120.6,561.9,237.1,551,264.6,554,297.6]},startPosition:17},78).to({_off:true},3).wait(38));

	// Слой_4
	this.instance_3 = new lib.Растровоеизображение8();
	this.instance_3.setTransform(-488,-363,0.9181,0.8035);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(159));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-616.5,-363,1413.8,1240.6);


// stage content:
(lib.Рисование = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Лиса();
	this.instance.setTransform(662.3,443.1,1,1,0,0,0,175.6,116.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(638.7,323.3,645.3,880.6000000000001);
// library properties:
lib.properties = {
	id: 'FFF01FB0AC276749850B4C49B375DFD3',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Рисование_atlas_1.png", id:"Рисование_atlas_1"}
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
an.compositions['FFF01FB0AC276749850B4C49B375DFD3'] = {
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