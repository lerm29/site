(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"звук_atlas_1", frames: [[575,702,269,360],[846,702,269,360],[0,702,573,441],[0,0,1000,700]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if((deltaFrame >= 0) && this.ignorePause){
					cjs.MovieClip.prototype.play.call(this);
					this.ignorePause = false;
				}
				else if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
				else if(deltaFrame <= -2){
					cjs.MovieClip.prototype.stop.call(this);
					this.ignorePause = true;
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(ss["звук_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["звук_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Ресурс1 = function() {
	this.initialize(ss["звук_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.VectorCarrotDownloadTransparentPNGImage = function() {
	this.initialize(ss["звук_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Анимация26 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.VectorCarrotDownloadTransparentPNGImage();
	this.instance.setTransform(-29.4,-53.45,0.1,0.1,26.2171);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.3,-53.4,120.6,106.9);


(lib.Анимация25 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.VectorCarrotDownloadTransparentPNGImage();
	this.instance.setTransform(-29.4,-53.45,0.1,0.1,26.2171);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.3,-53.4,120.6,106.9);


(lib.Анимация22 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-67.2,-90,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.2,-90,134.5,180);


(lib.Анимация21 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-67.25,-90,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.2,-90,134.5,180);


(lib.Анимация16 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#200028").s().p("ABzA1QgqAKgrADQhUAFgHgmQgGgmA+AEQAeABAgAJQABgMgWgMQgrgYhzAFQgegNgFgMQgLgZB5ACQgjgggnggQhOg/gWAEQgOADAIgLQAHgLAUgGQA7gQBDBFQAxAyAEAcQACAQBGAxQgWghgPgiQgehCAdAAQAeAAAfBcQALAkAJAkQgHgegDgdQgJhMAXAPQAUANAJA1QANBIAQAmQAmBVAlA6IAAAmg");
	this.shape.setTransform(-0.4142,-0.2848,2.2727,2.7088,85.9111);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.8,-56.7,119.69999999999999,113.30000000000001);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#200028").s().p("ABzA1QgqAKgrADQhUAFgHgmQgGgmA+AEQAeABAgAJQABgMgWgMQgrgYhzAFQgegNgFgMQgLgZB5ACQgjgggnggQhOg/gWAEQgOADAIgLQAHgLAUgGQA7gQBDBFQAxAyAEAcQACAQBGAxQgWghgPgiQgehCAdAAQAeAAAfBcQALAkAJAkQgHgegDgdQgJhMAXAPQAUANAJA1QANBIAQAmQAmBVAlA6IAAAmg");
	this.shape.setTransform(-3.4855,-1.3596,2.2727,2.7087,65.704);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.6,-72.5,79.2,145.1);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#20092A").s().p("AA5E5QgjgoglgxQhLhjgIgvQgJguA8A6QAdAdAfAmQAKgMgLgZQgUgyhohCQgLgQAAgRQAAggA3AEQgegdgcgmQg5hMANgpQANgoA/A+QAcAdAbAiQgng2geg8QhAh/A1giQA1giAiB5QAOA1AHA7QgDgiADgdQAJhHAuAiIAGAAQAGAEADATQAHA7gkC3IAcgtQAhgmAVAgQAVAgg2BaIg7BVIARA9QAOgrARgmQAihKAQAWQAPAYgnBXQgTAsgXAnIA5grQA6gnAGAVQAGAVgxBGIgyBCIAjCEg");
	this.shape.setTransform(-2.8358,-0.2603,1.4957,1.4957,19.2466);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.9,-67.4,41.9,134.9);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#20092A").s().p("AA5E5QgjgoglgxQhLhjgIgvQgJguA8A6QAdAdAfAmQAKgMgLgZQgUgyhohCQgLgQAAgRQAAggA3AEQgegdgcgmQg5hMANgpQANgoA/A+QAcAdAbAiQgng2geg8QhAh/A1giQA1giAiB5QAOA1AHA7QgDgiADgdQAJhHAuAiIAGAAQAGAEADATQAHA7gkC3IAcgtQAhgmAVAgQAVAgg2BaIg7BVIARA9QAOgrARgmQAihKAQAWQAPAYgnBXQgTAsgXAnIA5grQA6gnAGAVQAGAVgxBGIgyBCIAjCEg");
	this.shape.setTransform(-0.0086,-0.0123,1.4957,1.4957);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.9,-65.7,51.8,131.4);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#20092A").s().p("AitEnQgghHgWhPQgtifAsgsIAMABQAPAEAOAOQAtAsAYCCIADARIAphcQg5g8gqhFQhUiLBNgsIAPgHQASgFASAGQAbAJAUAhQgZhJgVhKQhGj5BCACQBMADAvBmQAqBfAGCUQAhhxArhkQBXjIA1A+QA1A+iDDlQg6BlhCBcQAcgmAhghQBVhXAgAmQAgAmiQCKQhIBFhNA9QggBPgOAfIAVgXQAkgmAmghQBvhaAQAyQAPAxicB+QhNBAhRA1IgpBgQA+hABKgzQCUhlBCBCQALAVgmAlQhNBMj2BXIhLCIg");
	this.shape.setTransform(2.8563,-0.3039,1.4473,1.3596,-6.7179);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.2,-89.1,66.4,178.2);


(lib.Анимация11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#20092A").s().p("AitEnQgghHgWhPQgtifAsgsIAMABQAPAEAOAOQAtAsAYCCIADARIAphcQg5g8gqhFQhUiLBNgsIAPgHQASgFASAGQAbAJAUAhQgZhJgVhKQhGj5BCACQBMADAvBmQAqBfAGCUQAhhxArhkQBXjIA1A+QA1A+iDDlQg6BlhCBcQAcgmAhghQBVhXAgAmQAgAmiQCKQhIBFhNA9QggBPgOAfIAVgXQAkgmAmghQBvhaAQAyQAPAxicB+QhNBAhRA1IgpBgQA+hABKgzQCUhlBCBCQALAVgmAlQhNBMj2BXIhLCIg");
	this.shape.setTransform(11.4075,-1.3118,1.4473,1.3596,-33.4414);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.3,-91.5,104.69999999999999,183);


(lib.Анимация10 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#20092A").s().p("AA5E5QgjgoglgxQhLhjgIgvQgJguA8A6QAdAdAfAmQAKgMgLgZQgUgyhohCQgLgQAAgRQAAggA3AEQgegdgcgmQg5hMANgpQANgoA/A+QAcAdAbAiQgng2geg8QhAh/A1giQA1giAiB5QAOA1AHA7QgDgiADgdQAJhHAuAiIAGAAQAGAEADATQAHA7gkC3IAcgtQAhgmAVAgQAVAgg2BaIg7BVIARA9QAOgrARgmQAihKAQAWQAPAYgnBXQgTAsgXAnIA5grQA6gnAGAVQAGAVgxBGIgyBCIAjCEg");
	this.shape.setTransform(0.7809,0.1958,1.4938,1.4938,-8.4921);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.9,-62.6,59.8,125.2);


(lib.Анимация9 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#20092A").s().p("AA5E5QgjgoglgxQhLhjgIgvQgJguA8A6QAdAdAfAmQAKgMgLgZQgUgyhohCQgLgQAAgRQAAggA3AEQgegdgcgmQg5hMANgpQANgoA/A+QAcAdAbAiQgng2geg8QhAh/A1giQA1giAiB5QAOA1AHA7QgDgiADgdQAJhHAuAiIAGAAQAGAEADATQAHA7gkC3IAcgtQAhgmAVAgQAVAgg2BaIg7BVIARA9QAOgrARgmQAihKAQAWQAPAYgnBXQgTAsgXAnIA5grQA6gnAGAVQAGAVgxBGIgyBCIAjCEg");
	this.shape.setTransform(0.2627,1.2246,1.4937,1.4937,-35.49);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.3,-44.6,104.69999999999999,89.30000000000001);


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
	this.shape.graphics.f("rgba(255,255,255,0.239)").s().p("AAYCbQgKgGgHgFQgLAJgTAIQguAUhCAAQgsAAgigIQgiAIgvAAQg4AAgngNQgogNAAgTQAAgTAogNQAngNA4AAIAJAAQALgMAVgLQgpgTAAgbQABgbAugTQAngRA1gDQAIg0AxglQA8gvBTAAQBVAAA7AvQA8AuAABBQAAAVgGARQAfgQArAAQAvAAAhAUQAhAUAAAcQAAAcghAUQghAUgvAAQgVAAgSgEQgMAMgSALQguAahCAAQhBAAgvgag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-18.1,86,36.2);


(lib.Анимация7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.239)").s().p("AAYCbQgKgGgHgFQgLAJgTAIQguAUhCAAQgsAAgigIQgiAIgvAAQg4AAgngNQgogNAAgTQAAgTAogNQAngNA4AAIAJAAQALgNAVgKQgpgTAAgbQAAgbAvgTQAngRA1gDQAIg0AxglQA8gvBTAAQBVAAA8AvQA7AuAABBQAAAVgGARQAfgQArAAQAvAAAhAUQAhAUAAAcQAAAcghAUQghAUgvAAQgVAAgSgEQgMAMgSALQgvAahBAAQhBAAgvgag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-18.1,86,36.2);


(lib.Анимация6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.239)").s().p("AakDEQgiAGgmABQh7AAhXhEQgggZgUgcQgdAEghAAIgeAAIgzAAQhwAAhPgQQgqgJgUgLIAAgqQAUgKAqgJQApgJAygDQAMgVAjgQQA4gaBOABIAjABQATg9A8gvQBXhEB7AAQB5AABXBDQApgIAvAAQCHgBBeBEQBBAuAVA9QAhAAAeAKQAcAHAZAPQA3AhAAAwQAAAxg3AhQgZAQgcAJQglAJgsABQgmgBghgHQheBCiEAAQiCAAhehBgEglpgDHQAAgTAfgRIAABHQgfgQAAgTg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-241,-26.1,482.1,52.2);


(lib.Анимация5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.239)").s().p("AakDEQgiAGgmAAQh7AAhXhDQgggZgUgcQgdAFghgBIgeAAIgzAAQhwAAhPgQQgqgJgUgLIAAgpQAUgLAqgJQApgJAygEQAMgUAjgQQA4gZBOgBIAjABQATg8A8gvQBXhEB7AAQB5AABXBDQApgJAvAAQCHABBeBEQBBAuAVA8QAhABAeAJQAcAIAZANQA3AjAAAvQAAAxg3AhQgZAQgcAIQglALgsgBQgmAAghgHQheBCiEAAQiCAAhehBgEglpgDHQAAgTAfgQIAABGQgfgQAAgTg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-241,-26.1,482.1,52.2);


// stage content:
(lib.звук = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,4,70];
	this.streamSoundSymbolsList[4] = [{id:"z_ukpryzhki",startFrame:4,endFrame:68,loop:1,offset:0}];
	this.streamSoundSymbolsList[70] = [{id:"chewing_carrot_02",startFrame:70,endFrame:109,loop:1,offset:0}];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
	}
	this.frame_4 = function() {
		var soundInstance = playSound("z_ukpryzhki",0);
		this.InsertIntoSoundStreamData(soundInstance,4,68,1);
	}
	this.frame_70 = function() {
		var soundInstance = playSound("chewing_carrot_02",0);
		this.InsertIntoSoundStreamData(soundInstance,70,109,1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(66).call(this.frame_70).wait(61));

	// заяц
	this._animationGuide_0 = new lib.Анимация21("synched",0);
	this._animationGuide_0.name = "_animationGuide_0";
	this._animationGuide_0.setTransform(-70.05,610,0.8926,0.8926,0,0,0,-0.1,0.2);

	this._animationGuide_1 = new lib.Анимация21("synched",0);
	this._animationGuide_1.name = "_animationGuide_1";
	this._animationGuide_1.setTransform(-70.15,596.05,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_2 = new lib.Анимация21("synched",0);
	this._animationGuide_2.name = "_animationGuide_2";
	this._animationGuide_2.setTransform(-70.2,582.05,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_3 = new lib.Анимация21("synched",0);
	this._animationGuide_3.name = "_animationGuide_3";
	this._animationGuide_3.setTransform(-70.2,568,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_4 = new lib.Анимация21("synched",0);
	this._animationGuide_4.name = "_animationGuide_4";
	this._animationGuide_4.setTransform(-70.2,554,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_5 = new lib.Анимация21("synched",0);
	this._animationGuide_5.name = "_animationGuide_5";
	this._animationGuide_5.setTransform(-70.2,540,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_6 = new lib.Анимация21("synched",0);
	this._animationGuide_6.name = "_animationGuide_6";
	this._animationGuide_6.setTransform(-70.2,525.95,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_7 = new lib.Анимация21("synched",0);
	this._animationGuide_7.name = "_animationGuide_7";
	this._animationGuide_7.setTransform(-70.1,511.95,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_8 = new lib.Анимация21("synched",0);
	this._animationGuide_8.name = "_animationGuide_8";
	this._animationGuide_8.setTransform(-69.8,497.95,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_9 = new lib.Анимация21("synched",0);
	this._animationGuide_9.name = "_animationGuide_9";
	this._animationGuide_9.setTransform(-67.25,484.25,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_10 = new lib.Анимация21("synched",0);
	this._animationGuide_10.name = "_animationGuide_10";
	this._animationGuide_10.setTransform(-62.8,471.05,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_11 = new lib.Анимация21("synched",0);
	this._animationGuide_11.name = "_animationGuide_11";
	this._animationGuide_11.setTransform(-56.25,458.65,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_12 = new lib.Анимация21("synched",0);
	this._animationGuide_12.name = "_animationGuide_12";
	this._animationGuide_12.setTransform(-47.7,447.55,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_13 = new lib.Анимация21("synched",0);
	this._animationGuide_13.name = "_animationGuide_13";
	this._animationGuide_13.setTransform(-38.7,437.3,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_14 = new lib.Анимация21("synched",0);
	this._animationGuide_14.name = "_animationGuide_14";
	this._animationGuide_14.setTransform(-31.25,444.55,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_15 = new lib.Анимация21("synched",0);
	this._animationGuide_15.name = "_animationGuide_15";
	this._animationGuide_15.setTransform(-28.4,458.35,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_16 = new lib.Анимация21("synched",0);
	this._animationGuide_16.name = "_animationGuide_16";
	this._animationGuide_16.setTransform(-25.6,471.2,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_17 = new lib.Анимация21("synched",0);
	this._animationGuide_17.name = "_animationGuide_17";
	this._animationGuide_17.setTransform(-22.55,483.95,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_18 = new lib.Анимация21("synched",0);
	this._animationGuide_18.name = "_animationGuide_18";
	this._animationGuide_18.setTransform(-19.15,496.55,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_19 = new lib.Анимация21("synched",0);
	this._animationGuide_19.name = "_animationGuide_19";
	this._animationGuide_19.setTransform(-15.15,509.1,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_20 = new lib.Анимация21("synched",0);
	this._animationGuide_20.name = "_animationGuide_20";
	this._animationGuide_20.setTransform(-10.2,521.35,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_21 = new lib.Анимация21("synched",0);
	this._animationGuide_21.name = "_animationGuide_21";
	this._animationGuide_21.setTransform(-3.4,532.4,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_22 = new lib.Анимация21("synched",0);
	this._animationGuide_22.name = "_animationGuide_22";
	this._animationGuide_22.setTransform(8.95,535.3,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_23 = new lib.Анимация21("synched",0);
	this._animationGuide_23.name = "_animationGuide_23";
	this._animationGuide_23.setTransform(18.8,522.25,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_24 = new lib.Анимация21("synched",0);
	this._animationGuide_24.name = "_animationGuide_24";
	this._animationGuide_24.setTransform(24.7,508.05,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_25 = new lib.Анимация21("synched",0);
	this._animationGuide_25.name = "_animationGuide_25";
	this._animationGuide_25.setTransform(29.2,494.05,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_26 = new lib.Анимация21("synched",0);
	this._animationGuide_26.name = "_animationGuide_26";
	this._animationGuide_26.setTransform(33,480.15,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_27 = new lib.Анимация21("synched",0);
	this._animationGuide_27.name = "_animationGuide_27";
	this._animationGuide_27.setTransform(36.35,466.3,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_28 = new lib.Анимация21("synched",0);
	this._animationGuide_28.name = "_animationGuide_28";
	this._animationGuide_28.setTransform(39.4,452.5,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_29 = new lib.Анимация21("synched",0);
	this._animationGuide_29.name = "_animationGuide_29";
	this._animationGuide_29.setTransform(50.7,447.3,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_30 = new lib.Анимация21("synched",0);
	this._animationGuide_30.name = "_animationGuide_30";
	this._animationGuide_30.setTransform(63.95,445.4,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_31 = new lib.Анимация21("synched",0);
	this._animationGuide_31.name = "_animationGuide_31";
	this._animationGuide_31.setTransform(77.45,446.25,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_32 = new lib.Анимация21("synched",0);
	this._animationGuide_32.name = "_animationGuide_32";
	this._animationGuide_32.setTransform(89.9,452.2,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_33 = new lib.Анимация21("synched",0);
	this._animationGuide_33.name = "_animationGuide_33";
	this._animationGuide_33.setTransform(97.75,464.1,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_34 = new lib.Анимация21("synched",0);
	this._animationGuide_34.name = "_animationGuide_34";
	this._animationGuide_34.setTransform(100.2,478.3,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_35 = new lib.Анимация21("synched",0);
	this._animationGuide_35.name = "_animationGuide_35";
	this._animationGuide_35.setTransform(100.3,492.45,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_36 = new lib.Анимация21("synched",0);
	this._animationGuide_36.name = "_animationGuide_36";
	this._animationGuide_36.setTransform(100.85,506.75,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_37 = new lib.Анимация21("synched",0);
	this._animationGuide_37.name = "_animationGuide_37";
	this._animationGuide_37.setTransform(100.35,519.35,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_38 = new lib.Анимация21("synched",0);
	this._animationGuide_38.name = "_animationGuide_38";
	this._animationGuide_38.setTransform(107.8,507.45,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_39 = new lib.Анимация21("synched",0);
	this._animationGuide_39.name = "_animationGuide_39";
	this._animationGuide_39.setTransform(115.25,495.5,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_40 = new lib.Анимация21("synched",0);
	this._animationGuide_40.name = "_animationGuide_40";
	this._animationGuide_40.setTransform(122.65,483.6,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_41 = new lib.Анимация21("synched",0);
	this._animationGuide_41.name = "_animationGuide_41";
	this._animationGuide_41.setTransform(130.1,471.7,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_42 = new lib.Анимация21("synched",0);
	this._animationGuide_42.name = "_animationGuide_42";
	this._animationGuide_42.setTransform(137.55,459.8,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_43 = new lib.Анимация21("synched",0);
	this._animationGuide_43.name = "_animationGuide_43";
	this._animationGuide_43.setTransform(145,447.9,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_44 = new lib.Анимация21("synched",0);
	this._animationGuide_44.name = "_animationGuide_44";
	this._animationGuide_44.setTransform(153.3,443.45,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_45 = new lib.Анимация21("synched",0);
	this._animationGuide_45.name = "_animationGuide_45";
	this._animationGuide_45.setTransform(161.75,454.35,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_46 = new lib.Анимация21("synched",0);
	this._animationGuide_46.name = "_animationGuide_46";
	this._animationGuide_46.setTransform(167.25,467.25,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_47 = new lib.Анимация21("synched",0);
	this._animationGuide_47.name = "_animationGuide_47";
	this._animationGuide_47.setTransform(172.8,480.15,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_48 = new lib.Анимация21("synched",0);
	this._animationGuide_48.name = "_animationGuide_48";
	this._animationGuide_48.setTransform(178.35,493.05,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_49 = new lib.Анимация21("synched",0);
	this._animationGuide_49.name = "_animationGuide_49";
	this._animationGuide_49.setTransform(183.85,505.95,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_50 = new lib.Анимация21("synched",0);
	this._animationGuide_50.name = "_animationGuide_50";
	this._animationGuide_50.setTransform(189.4,518.85,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_51 = new lib.Анимация21("synched",0);
	this._animationGuide_51.name = "_animationGuide_51";
	this._animationGuide_51.setTransform(194.35,508.15,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_52 = new lib.Анимация21("synched",0);
	this._animationGuide_52.name = "_animationGuide_52";
	this._animationGuide_52.setTransform(199.3,495,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_53 = new lib.Анимация21("synched",0);
	this._animationGuide_53.name = "_animationGuide_53";
	this._animationGuide_53.setTransform(204.25,481.85,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_54 = new lib.Анимация21("synched",0);
	this._animationGuide_54.name = "_animationGuide_54";
	this._animationGuide_54.setTransform(209.15,468.7,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_55 = new lib.Анимация21("synched",0);
	this._animationGuide_55.name = "_animationGuide_55";
	this._animationGuide_55.setTransform(214.1,455.55,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_56 = new lib.Анимация21("synched",0);
	this._animationGuide_56.name = "_animationGuide_56";
	this._animationGuide_56.setTransform(219,442.4,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_57 = new lib.Анимация21("synched",0);
	this._animationGuide_57.name = "_animationGuide_57";
	this._animationGuide_57.setTransform(231.4,440.05,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_58 = new lib.Анимация21("synched",0);
	this._animationGuide_58.name = "_animationGuide_58";
	this._animationGuide_58.setTransform(245.45,440.05,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_59 = new lib.Анимация21("synched",0);
	this._animationGuide_59.name = "_animationGuide_59";
	this._animationGuide_59.setTransform(258.45,444.1,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_60 = new lib.Анимация21("synched",0);
	this._animationGuide_60.name = "_animationGuide_60";
	this._animationGuide_60.setTransform(269.85,452.1,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_61 = new lib.Анимация21("synched",0);
	this._animationGuide_61.name = "_animationGuide_61";
	this._animationGuide_61.setTransform(279.2,462.55,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_62 = new lib.Анимация21("synched",0);
	this._animationGuide_62.name = "_animationGuide_62";
	this._animationGuide_62.setTransform(285.8,475,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_63 = new lib.Анимация21("synched",0);
	this._animationGuide_63.name = "_animationGuide_63";
	this._animationGuide_63.setTransform(289.65,488.6,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_64 = new lib.Анимация21("synched",0);
	this._animationGuide_64.name = "_animationGuide_64";
	this._animationGuide_64.setTransform(291.2,502.4,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_65 = new lib.Анимация21("synched",0);
	this._animationGuide_65.name = "_animationGuide_65";
	this._animationGuide_65.setTransform(291.45,516.25,0.8926,0.8926,0,0,0,-0.1,0.3);

	this._animationGuide_66 = new lib.Анимация22("synched",0);
	this._animationGuide_66.name = "_animationGuide_66";
	this._animationGuide_66.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_67 = new lib.Анимация22("synched",0);
	this._animationGuide_67.name = "_animationGuide_67";
	this._animationGuide_67.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_68 = new lib.Анимация22("synched",0);
	this._animationGuide_68.name = "_animationGuide_68";
	this._animationGuide_68.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_69 = new lib.Анимация22("synched",0);
	this._animationGuide_69.name = "_animationGuide_69";
	this._animationGuide_69.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_70 = new lib.Анимация22("synched",0);
	this._animationGuide_70.name = "_animationGuide_70";
	this._animationGuide_70.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_71 = new lib.Анимация22("synched",0);
	this._animationGuide_71.name = "_animationGuide_71";
	this._animationGuide_71.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_72 = new lib.Анимация22("synched",0);
	this._animationGuide_72.name = "_animationGuide_72";
	this._animationGuide_72.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_73 = new lib.Анимация22("synched",0);
	this._animationGuide_73.name = "_animationGuide_73";
	this._animationGuide_73.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_74 = new lib.Анимация22("synched",0);
	this._animationGuide_74.name = "_animationGuide_74";
	this._animationGuide_74.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_75 = new lib.Анимация22("synched",0);
	this._animationGuide_75.name = "_animationGuide_75";
	this._animationGuide_75.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_76 = new lib.Анимация22("synched",0);
	this._animationGuide_76.name = "_animationGuide_76";
	this._animationGuide_76.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_77 = new lib.Анимация22("synched",0);
	this._animationGuide_77.name = "_animationGuide_77";
	this._animationGuide_77.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_78 = new lib.Анимация22("synched",0);
	this._animationGuide_78.name = "_animationGuide_78";
	this._animationGuide_78.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_79 = new lib.Анимация22("synched",0);
	this._animationGuide_79.name = "_animationGuide_79";
	this._animationGuide_79.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_80 = new lib.Анимация22("synched",0);
	this._animationGuide_80.name = "_animationGuide_80";
	this._animationGuide_80.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_81 = new lib.Анимация22("synched",0);
	this._animationGuide_81.name = "_animationGuide_81";
	this._animationGuide_81.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_82 = new lib.Анимация22("synched",0);
	this._animationGuide_82.name = "_animationGuide_82";
	this._animationGuide_82.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_83 = new lib.Анимация22("synched",0);
	this._animationGuide_83.name = "_animationGuide_83";
	this._animationGuide_83.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_84 = new lib.Анимация22("synched",0);
	this._animationGuide_84.name = "_animationGuide_84";
	this._animationGuide_84.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_85 = new lib.Анимация22("synched",0);
	this._animationGuide_85.name = "_animationGuide_85";
	this._animationGuide_85.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_86 = new lib.Анимация22("synched",0);
	this._animationGuide_86.name = "_animationGuide_86";
	this._animationGuide_86.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_87 = new lib.Анимация22("synched",0);
	this._animationGuide_87.name = "_animationGuide_87";
	this._animationGuide_87.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_88 = new lib.Анимация22("synched",0);
	this._animationGuide_88.name = "_animationGuide_88";
	this._animationGuide_88.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_89 = new lib.Анимация22("synched",0);
	this._animationGuide_89.name = "_animationGuide_89";
	this._animationGuide_89.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_90 = new lib.Анимация22("synched",0);
	this._animationGuide_90.name = "_animationGuide_90";
	this._animationGuide_90.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_91 = new lib.Анимация22("synched",0);
	this._animationGuide_91.name = "_animationGuide_91";
	this._animationGuide_91.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_92 = new lib.Анимация22("synched",0);
	this._animationGuide_92.name = "_animationGuide_92";
	this._animationGuide_92.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_93 = new lib.Анимация22("synched",0);
	this._animationGuide_93.name = "_animationGuide_93";
	this._animationGuide_93.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_94 = new lib.Анимация22("synched",0);
	this._animationGuide_94.name = "_animationGuide_94";
	this._animationGuide_94.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_95 = new lib.Анимация22("synched",0);
	this._animationGuide_95.name = "_animationGuide_95";
	this._animationGuide_95.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_96 = new lib.Анимация22("synched",0);
	this._animationGuide_96.name = "_animationGuide_96";
	this._animationGuide_96.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_97 = new lib.Анимация22("synched",0);
	this._animationGuide_97.name = "_animationGuide_97";
	this._animationGuide_97.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_98 = new lib.Анимация22("synched",0);
	this._animationGuide_98.name = "_animationGuide_98";
	this._animationGuide_98.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_99 = new lib.Анимация22("synched",0);
	this._animationGuide_99.name = "_animationGuide_99";
	this._animationGuide_99.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_100 = new lib.Анимация22("synched",0);
	this._animationGuide_100.name = "_animationGuide_100";
	this._animationGuide_100.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_101 = new lib.Анимация22("synched",0);
	this._animationGuide_101.name = "_animationGuide_101";
	this._animationGuide_101.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_102 = new lib.Анимация22("synched",0);
	this._animationGuide_102.name = "_animationGuide_102";
	this._animationGuide_102.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_103 = new lib.Анимация22("synched",0);
	this._animationGuide_103.name = "_animationGuide_103";
	this._animationGuide_103.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_104 = new lib.Анимация22("synched",0);
	this._animationGuide_104.name = "_animationGuide_104";
	this._animationGuide_104.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_105 = new lib.Анимация22("synched",0);
	this._animationGuide_105.name = "_animationGuide_105";
	this._animationGuide_105.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_106 = new lib.Анимация22("synched",0);
	this._animationGuide_106.name = "_animationGuide_106";
	this._animationGuide_106.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_107 = new lib.Анимация22("synched",0);
	this._animationGuide_107.name = "_animationGuide_107";
	this._animationGuide_107.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_108 = new lib.Анимация22("synched",0);
	this._animationGuide_108.name = "_animationGuide_108";
	this._animationGuide_108.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_109 = new lib.Анимация22("synched",0);
	this._animationGuide_109.name = "_animationGuide_109";
	this._animationGuide_109.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_110 = new lib.Анимация22("synched",0);
	this._animationGuide_110.name = "_animationGuide_110";
	this._animationGuide_110.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_111 = new lib.Анимация22("synched",0);
	this._animationGuide_111.name = "_animationGuide_111";
	this._animationGuide_111.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_112 = new lib.Анимация22("synched",0);
	this._animationGuide_112.name = "_animationGuide_112";
	this._animationGuide_112.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_113 = new lib.Анимация22("synched",0);
	this._animationGuide_113.name = "_animationGuide_113";
	this._animationGuide_113.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_114 = new lib.Анимация22("synched",0);
	this._animationGuide_114.name = "_animationGuide_114";
	this._animationGuide_114.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_115 = new lib.Анимация22("synched",0);
	this._animationGuide_115.name = "_animationGuide_115";
	this._animationGuide_115.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_116 = new lib.Анимация22("synched",0);
	this._animationGuide_116.name = "_animationGuide_116";
	this._animationGuide_116.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_117 = new lib.Анимация22("synched",0);
	this._animationGuide_117.name = "_animationGuide_117";
	this._animationGuide_117.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_118 = new lib.Анимация22("synched",0);
	this._animationGuide_118.name = "_animationGuide_118";
	this._animationGuide_118.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_119 = new lib.Анимация22("synched",0);
	this._animationGuide_119.name = "_animationGuide_119";
	this._animationGuide_119.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_120 = new lib.Анимация22("synched",0);
	this._animationGuide_120.name = "_animationGuide_120";
	this._animationGuide_120.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_121 = new lib.Анимация22("synched",0);
	this._animationGuide_121.name = "_animationGuide_121";
	this._animationGuide_121.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_122 = new lib.Анимация22("synched",0);
	this._animationGuide_122.name = "_animationGuide_122";
	this._animationGuide_122.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_123 = new lib.Анимация22("synched",0);
	this._animationGuide_123.name = "_animationGuide_123";
	this._animationGuide_123.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_124 = new lib.Анимация22("synched",0);
	this._animationGuide_124.name = "_animationGuide_124";
	this._animationGuide_124.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_125 = new lib.Анимация22("synched",0);
	this._animationGuide_125.name = "_animationGuide_125";
	this._animationGuide_125.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_126 = new lib.Анимация22("synched",0);
	this._animationGuide_126.name = "_animationGuide_126";
	this._animationGuide_126.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_127 = new lib.Анимация22("synched",0);
	this._animationGuide_127.name = "_animationGuide_127";
	this._animationGuide_127.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_128 = new lib.Анимация22("synched",0);
	this._animationGuide_128.name = "_animationGuide_128";
	this._animationGuide_128.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_129 = new lib.Анимация22("synched",0);
	this._animationGuide_129.name = "_animationGuide_129";
	this._animationGuide_129.setTransform(290,530,0.5948,0.5948);

	this._animationGuide_130 = new lib.Анимация22("synched",0);
	this._animationGuide_130.name = "_animationGuide_130";
	this._animationGuide_130.setTransform(290,530,0.5948,0.5948);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this._animationGuide_0}]}).to({state:[{t:this._animationGuide_1}]},1).to({state:[{t:this._animationGuide_2}]},1).to({state:[{t:this._animationGuide_3}]},1).to({state:[{t:this._animationGuide_4}]},1).to({state:[{t:this._animationGuide_5}]},1).to({state:[{t:this._animationGuide_6}]},1).to({state:[{t:this._animationGuide_7}]},1).to({state:[{t:this._animationGuide_8}]},1).to({state:[{t:this._animationGuide_9}]},1).to({state:[{t:this._animationGuide_10}]},1).to({state:[{t:this._animationGuide_11}]},1).to({state:[{t:this._animationGuide_12}]},1).to({state:[{t:this._animationGuide_13}]},1).to({state:[{t:this._animationGuide_14}]},1).to({state:[{t:this._animationGuide_15}]},1).to({state:[{t:this._animationGuide_16}]},1).to({state:[{t:this._animationGuide_17}]},1).to({state:[{t:this._animationGuide_18}]},1).to({state:[{t:this._animationGuide_19}]},1).to({state:[{t:this._animationGuide_20}]},1).to({state:[{t:this._animationGuide_21}]},1).to({state:[{t:this._animationGuide_22}]},1).to({state:[{t:this._animationGuide_23}]},1).to({state:[{t:this._animationGuide_24}]},1).to({state:[{t:this._animationGuide_25}]},1).to({state:[{t:this._animationGuide_26}]},1).to({state:[{t:this._animationGuide_27}]},1).to({state:[{t:this._animationGuide_28}]},1).to({state:[{t:this._animationGuide_29}]},1).to({state:[{t:this._animationGuide_30}]},1).to({state:[{t:this._animationGuide_31}]},1).to({state:[{t:this._animationGuide_32}]},1).to({state:[{t:this._animationGuide_33}]},1).to({state:[{t:this._animationGuide_34}]},1).to({state:[{t:this._animationGuide_35}]},1).to({state:[{t:this._animationGuide_36}]},1).to({state:[{t:this._animationGuide_37}]},1).to({state:[{t:this._animationGuide_38}]},1).to({state:[{t:this._animationGuide_39}]},1).to({state:[{t:this._animationGuide_40}]},1).to({state:[{t:this._animationGuide_41}]},1).to({state:[{t:this._animationGuide_42}]},1).to({state:[{t:this._animationGuide_43}]},1).to({state:[{t:this._animationGuide_44}]},1).to({state:[{t:this._animationGuide_45}]},1).to({state:[{t:this._animationGuide_46}]},1).to({state:[{t:this._animationGuide_47}]},1).to({state:[{t:this._animationGuide_48}]},1).to({state:[{t:this._animationGuide_49}]},1).to({state:[{t:this._animationGuide_50}]},1).to({state:[{t:this._animationGuide_51}]},1).to({state:[{t:this._animationGuide_52}]},1).to({state:[{t:this._animationGuide_53}]},1).to({state:[{t:this._animationGuide_54}]},1).to({state:[{t:this._animationGuide_55}]},1).to({state:[{t:this._animationGuide_56}]},1).to({state:[{t:this._animationGuide_57}]},1).to({state:[{t:this._animationGuide_58}]},1).to({state:[{t:this._animationGuide_59}]},1).to({state:[{t:this._animationGuide_60}]},1).to({state:[{t:this._animationGuide_61}]},1).to({state:[{t:this._animationGuide_62}]},1).to({state:[{t:this._animationGuide_63}]},1).to({state:[{t:this._animationGuide_64}]},1).to({state:[{t:this._animationGuide_65}]},1).to({state:[{t:this._animationGuide_66}]},1).to({state:[{t:this._animationGuide_67}]},1).to({state:[{t:this._animationGuide_68}]},1).to({state:[{t:this._animationGuide_69}]},1).to({state:[{t:this._animationGuide_70}]},1).to({state:[{t:this._animationGuide_71}]},1).to({state:[{t:this._animationGuide_72}]},1).to({state:[{t:this._animationGuide_73}]},1).to({state:[{t:this._animationGuide_74}]},1).to({state:[{t:this._animationGuide_75}]},1).to({state:[{t:this._animationGuide_76}]},1).to({state:[{t:this._animationGuide_77}]},1).to({state:[{t:this._animationGuide_78}]},1).to({state:[{t:this._animationGuide_79}]},1).to({state:[{t:this._animationGuide_80}]},1).to({state:[{t:this._animationGuide_81}]},1).to({state:[{t:this._animationGuide_82}]},1).to({state:[{t:this._animationGuide_83}]},1).to({state:[{t:this._animationGuide_84}]},1).to({state:[{t:this._animationGuide_85}]},1).to({state:[{t:this._animationGuide_86}]},1).to({state:[{t:this._animationGuide_87}]},1).to({state:[{t:this._animationGuide_88}]},1).to({state:[{t:this._animationGuide_89}]},1).to({state:[{t:this._animationGuide_90}]},1).to({state:[{t:this._animationGuide_91}]},1).to({state:[{t:this._animationGuide_92}]},1).to({state:[{t:this._animationGuide_93}]},1).to({state:[{t:this._animationGuide_94}]},1).to({state:[{t:this._animationGuide_95}]},1).to({state:[{t:this._animationGuide_96}]},1).to({state:[{t:this._animationGuide_97}]},1).to({state:[{t:this._animationGuide_98}]},1).to({state:[{t:this._animationGuide_99}]},1).to({state:[{t:this._animationGuide_100}]},1).to({state:[{t:this._animationGuide_101}]},1).to({state:[{t:this._animationGuide_102}]},1).to({state:[{t:this._animationGuide_103}]},1).to({state:[{t:this._animationGuide_104}]},1).to({state:[{t:this._animationGuide_105}]},1).to({state:[{t:this._animationGuide_106}]},1).to({state:[{t:this._animationGuide_107}]},1).to({state:[{t:this._animationGuide_108}]},1).to({state:[{t:this._animationGuide_109}]},1).to({state:[{t:this._animationGuide_110}]},1).to({state:[{t:this._animationGuide_111}]},1).to({state:[{t:this._animationGuide_112}]},1).to({state:[{t:this._animationGuide_113}]},1).to({state:[{t:this._animationGuide_114}]},1).to({state:[{t:this._animationGuide_115}]},1).to({state:[{t:this._animationGuide_116}]},1).to({state:[{t:this._animationGuide_117}]},1).to({state:[{t:this._animationGuide_118}]},1).to({state:[{t:this._animationGuide_119}]},1).to({state:[{t:this._animationGuide_120}]},1).to({state:[{t:this._animationGuide_121}]},1).to({state:[{t:this._animationGuide_122}]},1).to({state:[{t:this._animationGuide_123}]},1).to({state:[{t:this._animationGuide_124}]},1).to({state:[{t:this._animationGuide_125}]},1).to({state:[{t:this._animationGuide_126}]},1).to({state:[{t:this._animationGuide_127}]},1).to({state:[{t:this._animationGuide_128}]},1).to({state:[{t:this._animationGuide_129}]},1).to({state:[{t:this._animationGuide_130}]},1).wait(1));

	// звезда9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZAZQgKgKAAgPQAAgOAKgLQALgLAOAAQAPAAALALQALALgBAOQABAPgLAKQgLAMgPgBQgOABgLgMg");
	this.shape.setTransform(263.65,283.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(131));

	// зыезда8
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAWQgIgJgBgNQABgMAIgKQAKgIAMgBQANABAJAIQAKAKgBAMQABANgKAJQgJAJgNAAQgMAAgKgJg");
	this.shape_1.setTransform(695.2,191);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(131));

	// звезда7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgEAFAAQAGAAAFAEQAEAFABAFQgBAHgEAEQgFAFgGgBQgFABgFgFg");
	this.shape_2.setTransform(481.55,388.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJALQgFgFAAgGQAAgFAFgFQADgEAGAAQAGAAAEAEQAFAFAAAFQAAAGgFAFQgEAEgGAAQgGAAgDgEg");
	this.shape_3.setTransform(481.55,388.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJALQgEgFgBgGQABgFAEgFQAEgDAFAAQAGAAAEADQAFAFAAAFQAAAGgFAFQgEADgGAAQgFAAgEgDg");
	this.shape_4.setTransform(481.55,388.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_5.setTransform(481.55,388.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIAKQgEgEAAgGQAAgFAEgEQADgEAFAAQAGAAADAEQAEAEABAFQgBAGgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_6.setTransform(481.55,388.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgFAEgEQADgDAFAAQAGAAADADQAEAEABAFQgBAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_7.setTransform(481.55,388.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_8.setTransform(481.55,388.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_9.setTransform(481.55,388.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIAIQgDgDAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgEAAgEgEg");
	this.shape_10.setTransform(481.55,388.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHAIQgEgDABgFQgBgEAEgDQADgDAEAAQAFAAADADQAEADgBAEQABAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_11.setTransform(481.55,388.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_12.setTransform(481.55,388.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGAIQgDgEAAgEQAAgDADgDQADgEADAAQAFAAADAEQACADAAADQAAAEgCAEQgDADgFAAQgDAAgDgDg");
	this.shape_13.setTransform(481.55,388.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_14.setTransform(481.55,388.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgGAHQgDgDABgEQgBgDADgDQADgDADAAQAEAAADADQACADAAADQAAAEgCADQgDADgEAAQgDAAgDgDg");
	this.shape_15.setTransform(481.55,388.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgEQAAgDADgCQACgDADAAQAEAAADADQACACAAADQAAAEgCADQgDACgEAAQgDAAgCgCg");
	this.shape_16.setTransform(481.55,388.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFAGQgDgDAAgDQAAgDADgCQACgDADAAQAEAAADADQACACAAADQAAADgCADQgDADgEAAQgDAAgCgDg");
	this.shape_17.setTransform(481.55,388.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgFAGQgDgDAAgDQAAgDADgCQADgCACgBQAEABACACQACACAAADQAAADgCADQgCADgEgBQgCABgDgDg");
	this.shape_18.setTransform(481.55,388.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgEAGQgDgDAAgDQAAgDADgBQACgDACAAQAEAAACADQACABAAADQAAADgCADQgCACgEAAQgCAAgCgCg");
	this.shape_19.setTransform(481.55,388.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgEAGQgCgDgBgDQABgCACgCQACgDACAAQADAAADADQACACAAACQAAADgCADQgDABgDABQgCgBgCgBg");
	this.shape_20.setTransform(481.55,388.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgDAFQgDgCAAgDQAAgCADgCQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_21.setTransform(481.55,388.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgDAFQgEgDAAgCQAAgCAEgCQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQADAAACACQACACABACQgBACgCADQgCACgDAAQgCAAgBgCg");
	this.shape_22.setTransform(481.55,388.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgEAGQgCgDgBgDQABgCACgCQACgDACAAQAEAAACADQACACAAACQAAADgCADQgCABgEABQgCgBgCgBg");
	this.shape_23.setTransform(481.55,388.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAFQgCgCgBgDQABgCACgDQACgCACAAQAEAAACACQACADAAACQAAADgCACQgCADgEAAQgCAAgCgDg");
	this.shape_24.setTransform(481.55,388.525);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgEAGQgDgDAAgDQAAgDADgCQACgCACAAQADAAADACQACACAAADQAAADgCADQgDACgDAAQgCAAgCgCg");
	this.shape_25.setTransform(481.575,388.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgFAGQgDgDAAgDQAAgDADgCQADgDACAAQAEAAACADQADACAAADQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_26.setTransform(481.55,388.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgEQAAgDADgCQADgDACAAQAEAAADADQACACAAADQAAAEgCADQgDACgEAAQgCAAgDgCg");
	this.shape_27.setTransform(481.55,388.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgFAHQgDgEAAgDQAAgDADgDQADgCACAAQAEAAADACQACADAAADQAAADgCAEQgDACgEAAQgCAAgDgCg");
	this.shape_28.setTransform(481.55,388.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgFAGQgDgDAAgDQAAgDADgDQADgCACAAQAEAAADACQACADAAADQAAADgCADQgDAEgEAAQgCAAgDgEg");
	this.shape_29.setTransform(481.55,388.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgFAHQgEgDAAgEQAAgDAEgDQACgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgCgDg");
	this.shape_30.setTransform(481.55,388.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgGAHQgDgEAAgDQAAgDADgDQAEgDACAAQAEAAADADQADADAAADQAAADgDAEQgDADgEAAQgCAAgEgDg");
	this.shape_31.setTransform(481.55,388.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQAEgDACAAQAFAAADADQACADAAADQAAAEgCADQgDADgFAAQgCAAgEgDg");
	this.shape_32.setTransform(481.55,388.525);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgGAIQgDgFAAgDQAAgDADgDQAEgDACAAQAFAAADADQACADAAADQAAADgCAFQgDADgFAAQgCAAgEgDg");
	this.shape_33.setTransform(481.55,388.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgGAIQgEgEAAgEQAAgDAEgDQADgEADAAQAFAAACAEQAEADAAADQAAAEgEAEQgCADgFAAQgDAAgDgDg");
	this.shape_34.setTransform(481.575,388.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgGAIQgEgEAAgEQAAgDAEgEQADgDADAAQAFAAADADQADAEAAADQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_35.setTransform(481.55,388.55);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgGAIQgFgEABgEQgBgEAFgDQADgDADAAQAFAAADADQAEADgBAEQABAEgEAEQgDADgFAAQgDAAgDgDg");
	this.shape_36.setTransform(481.55,388.525);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgGAIQgFgEABgEQgBgEAFgDQADgEADAAQAFAAADAEQAEADgBAEQABAEgEAEQgDADgFAAQgDAAgDgDg");
	this.shape_37.setTransform(481.55,388.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgHAJQgDgEAAgFQAAgEADgDQAEgEADAAQAGAAACAEQADADAAAEQAAAFgDAEQgCADgGAAQgDAAgEgDg");
	this.shape_38.setTransform(481.55,388.525);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgDQAEgEADAAQAGAAACAEQAEADAAAEQAAAFgEAEQgCADgGAAQgDAAgEgDg");
	this.shape_39.setTransform(481.55,388.55);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgGAJQgFgEABgFQgBgEAFgDQADgEADAAQAGAAACAEQADADAAAEQAAAFgDAEQgCACgGAAQgDAAgDgCg");
	this.shape_40.setTransform(481.55,388.55);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgGAIQgEgEAAgEQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_41.setTransform(481.575,388.575);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgGAIQgEgEAAgEQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_42.setTransform(481.55,388.55);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgGAIQgDgEAAgEQAAgDADgDQAEgDACAAQAFAAADADQACADAAADQAAAEgCAEQgDADgFAAQgCAAgEgDg");
	this.shape_43.setTransform(481.55,388.55);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgFAHQgEgDAAgEQAAgDAEgDQADgDACAAQAFAAACADQADADAAADQAAAEgDADQgCADgFAAQgCAAgDgDg");
	this.shape_44.setTransform(481.575,388.575);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgFAHQgEgDAAgEQAAgDAEgDQADgDACAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgCAAgDgDg");
	this.shape_45.setTransform(481.575,388.575);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgFAHQgEgDABgEQgBgDAEgDQADgCACAAQAEAAADACQACADAAADQAAAEgCADQgDACgEABQgCgBgDgCg");
	this.shape_46.setTransform(481.55,388.55);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgFAGQgDgDAAgDQAAgDADgDQADgCACAAQAEAAACACQADADAAADQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_47.setTransform(481.575,388.575);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgDACAAQAEAAACADQADADAAACQAAADgDADQgCADgEgBQgCABgDgDg");
	this.shape_48.setTransform(481.6,388.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgEAGQgDgDAAgDQAAgCADgDQACgCACAAQAEAAACACQACADAAACQAAADgCADQgCACgEAAQgCAAgCgCg");
	this.shape_49.setTransform(481.575,388.575);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgEAGQgDgDAAgDQAAgCADgCQADgDABAAQAEAAACADQACACAAACQAAADgCADQgCACgEAAQgBAAgDgCg");
	this.shape_50.setTransform(481.575,388.575);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgEAFQgDgDABgCQgBgCADgCQADgDABAAQAEAAABADQACACAAACQAAACgCADQgBADgEgBQgBABgDgDg");
	this.shape_51.setTransform(481.6,388.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgDAFQgDgCAAgDQAAgCADgCQACgCABAAQAEAAABACQACACAAACQAAADgCACQgBACgEAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_52.setTransform(481.575,388.575);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgDAFQgDgCAAgDQAAgCADgCQABAAAAgBQABAAAAAAQABgBAAAAQAAAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQACACAAACQAAABAAAAQgBABAAABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_53.setTransform(481.575,388.575);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgDAFQgDgCABgDQgBgBADgCQABgBAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_54.setTransform(481.6,388.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgDAEQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBACgCQABgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_55.setTransform(481.6,388.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgCAEQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQABAAAAgBQAAgBABAAQAAAAABgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAAAAAABQABABAAAAQAAAAAAAAIgCAEQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_56.setTransform(481.575,388.575);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgDAEQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBQAAAAABAAQAAAAAAgBQAAgBABAAQAAgBAAAAIADgBQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABQABAAAAABQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgDgCg");
	this.shape_57.setTransform(481.6,388.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgCAEQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAgBQABAAAAAAIACgCQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCgBg");
	this.shape_58.setTransform(481.6,388.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgCAEQgBgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAABAAQAAAAAAgBQAAgBABAAQAAgBABAAIACgBQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAIABADIgBAEQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgCgCg");
	this.shape_59.setTransform(481.6,388.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgDAEQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIADgCQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgDgCg");
	this.shape_60.setTransform(481.6,388.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgDAFQgCgCAAgDQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBABQAAAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAg");
	this.shape_61.setTransform(481.6,388.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgDAFQgDgCABgDQgBgBADgCQABgBAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_62.setTransform(481.6,388.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgDAFQgDgCAAgDQAAgBADgCQABgBAAgBQABAAAAAAQABgBAAAAQAAAAAAAAQAEAAABADQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAADgCACQgBACgEAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_63.setTransform(481.6,388.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgEAFQgCgCAAgDQAAgCACgCQADgDABAAQAEAAABADQACACAAACQAAADgCACQgBADgEgBQgBABgDgDg");
	this.shape_64.setTransform(481.6,388.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgEAGQgCgDAAgDQAAgCACgCQABgBABAAQAAgBABAAQAAAAABAAQAAgBAAAAQAEAAABADQACACAAACQAAADgCADQgBABgEAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAg");
	this.shape_65.setTransform(481.6,388.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgEAGQgDgDAAgDQAAgCADgCQADgDABAAQAEAAABADQADACAAACQAAADgDADQgBACgEAAQgBAAgDgCg");
	this.shape_66.setTransform(481.6,388.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgEAGQgEgDABgDQgBgCAEgCQADgEABAAQAEAAACAEQADACAAACQAAADgDADQgCADgEgBQgBABgDgDg");
	this.shape_67.setTransform(481.6,388.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgEAGQgEgDAAgDQAAgDAEgCQACgDACAAQAEAAACADQADACAAADQAAADgDADQgCADgEAAQgCAAgCgDg");
	this.shape_68.setTransform(481.625,388.625);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgFAGQgDgCAAgEQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_69.setTransform(481.6,388.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgEQAAgDADgCQADgEACAAQAFAAACAEQADACAAADQAAAEgDADQgCACgFAAQgCAAgDgCg");
	this.shape_70.setTransform(481.6,388.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgFAHQgEgDAAgEQAAgDAEgCQADgEACAAQAFAAACAEQADACAAADQAAAEgDADQgCADgFAAQgCAAgDgDg");
	this.shape_71.setTransform(481.6,388.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgFAHQgEgDAAgEQAAgDAEgDQADgDACAAQAGAAABADQADADAAADQAAAEgDADQgBADgGAAQgCAAgDgDg");
	this.shape_72.setTransform(481.6,388.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgFAHQgEgDgBgEQABgDAEgDQADgDACgBQAGABABADQAEADAAADQAAAEgEADQgBADgGAAQgCAAgDgDg");
	this.shape_73.setTransform(481.6,388.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgFAIQgFgEAAgEQAAgEAFgDQADgDACAAQAGAAACADQADADAAAEQAAAEgDAEQgCADgGAAQgCAAgDgDg");
	this.shape_74.setTransform(481.6,388.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgGAIQgFgEAAgEQAAgEAFgDQAEgDACgBQAGABACADQADADABAEQgBAEgDAEQgCAEgGAAQgCAAgEgEg");
	this.shape_75.setTransform(481.6,388.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgGAIQgFgEAAgEQAAgEAFgDQAEgDACgBQAGABADADQADADAAAEQAAAEgDAEQgDADgGABQgCgBgEgDg");
	this.shape_76.setTransform(481.6,388.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgGAIQgFgDAAgFQAAgEAFgDQAEgEACAAQAGAAADAEQADADAAAEQAAAFgDADQgDAEgGAAQgCAAgEgEg");
	this.shape_77.setTransform(481.6,388.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgGAJQgGgEAAgFQAAgEAGgEQAEgDACAAQAHAAACADQADAEABAEQgBAFgDAEQgCAEgHAAQgCAAgEgEg");
	this.shape_78.setTransform(481.6,388.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgGAIQgFgEAAgEQAAgEAFgDQAEgEACAAQAGAAACAEQAEADAAAEQAAAEgEAEQgCAEgGAAQgCAAgEgEg");
	this.shape_79.setTransform(481.625,388.625);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgGAIQgFgEAAgEQAAgEAFgDQAEgEACAAQAGAAADAEQADADAAAEQAAAEgDAEQgDADgGABQgCgBgEgDg");
	this.shape_80.setTransform(481.6,388.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgFAIQgFgEAAgEQAAgDAFgDQADgEACAAQAFAAADAEQADADAAADQAAAEgDAEQgDADgFAAQgCAAgDgDg");
	this.shape_81.setTransform(481.625,388.625);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgEQAAgCADgDQADgEACAAQAFAAACAEQADADAAACQAAAEgDADQgCACgFAAQgCAAgDgCg");
	this.shape_82.setTransform(481.6,388.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgEQAAgDADgCQADgDACAAQAFAAACADQACACAAADQAAAEgCADQgCACgFAAQgCAAgDgCg");
	this.shape_83.setTransform(481.625,388.625);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgEAGQgEgCAAgEQAAgCAEgDQADgDABAAQAFAAABADQADADAAACQAAAEgDACQgBADgFAAQgBAAgDgDg");
	this.shape_84.setTransform(481.625,388.625);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgEAGQgDgDAAgDQAAgCADgDQADgCABAAQAEAAACACQACADAAACQAAADgCADQgCACgEAAQgBAAgDgCg");
	this.shape_85.setTransform(481.625,388.625);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgEAFQgDgCAAgDQAAgDADgCQACgCACAAQAEAAACACQACACAAADQAAADgCACQgCADgEAAQgCAAgCgDg");
	this.shape_86.setTransform(481.65,388.65);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgDAFQgDgCAAgDQAAgCADgCQAAAAABgBQAAAAABAAQABgBAAAAQAAAAAAAAQADAAACACQACACAAACQAAACgCADQgCACgDAAQAAAAAAAAQAAAAgBgBQgBAAAAAAQgBAAAAgBg");
	this.shape_87.setTransform(481.65,388.65);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgDAEQgDgBAAgDQAAgCADgCQAAAAABAAQAAgBABAAQABAAAAAAQAAgBAAAAQABAAAAABQABAAABAAQAAAAABABQAAAAABAAQAAABAAABQABAAAAABQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQAAABgBAAQAAAAAAgBQAAAAgBAAQgBAAAAgBQgBAAAAgBg");
	this.shape_88.setTransform(481.65,388.65);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgCAEQgBAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgCADgCQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQABAAABAAQAAABAAAAQABAAAAAAQAAABABABQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_89.setTransform(481.65,388.65);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgCAEQgBAAAAgBQgBAAAAAAQAAgBgBgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAABAAQAAABABAAQAAAAABAAQAAABAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_90.setTransform(481.625,388.625);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgCAEQgBAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAABgBIACgCQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAIACADIgCAEQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgCgBg");
	this.shape_91.setTransform(481.65,388.65);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgCADQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBIACgBQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgCgCg");
	this.shape_92.setTransform(481.65,388.65);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgCAEQgBAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAABgBIACgCQABAAAAABQABAAABAAQAAAAAAAAQABABAAAAIACADIgCAEQAAAAgBABQAAAAAAAAQgBAAgBAAQAAAAgBAAIgCgBg");
	this.shape_93.setTransform(481.65,388.65);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgCAEQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIACgCQABAAAAABQABAAABAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAgBAAQAAAAgBAAIgCgBg");
	this.shape_94.setTransform(481.65,388.65);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgCAEQgBAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBABAAIACgCQABAAAAAAQABAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAgBAAQAAAAgBAAIgCgCg");
	this.shape_95.setTransform(481.65,388.65);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgCAEQgDgBAAgDQAAgCADgCQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABAAQAAABAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_96.setTransform(481.65,388.65);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgDAEQgDgBAAgDQAAgCADgCQAAAAABAAQAAgBABAAQABAAAAAAQAAgBAAAAQABAAABABQAAAAABAAQAAAAABABQAAAAABAAQAAABAAABQABAAAAABQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAAAgBQAAAAgBAAQgBAAAAgBQgBAAAAgBg");
	this.shape_97.setTransform(481.65,388.65);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgDAFQgDgCAAgDQAAgCADgCQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQADAAACACQAAABABAAQAAABAAAAQAAABABABQAAAAAAAAQAAADgCACQgCACgDAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_98.setTransform(481.675,388.675);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgDAFQgDgCAAgDQAAgCADgCQAAAAABgBQAAAAABAAQABgBAAAAQAAAAAAAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQAAAAAAAAQAAAAgBgBQgBAAAAAAQgBAAAAgBg");
	this.shape_99.setTransform(481.65,388.65);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgDAFQgEgCAAgDQAAgCAEgCQACgCABgBQAEABABACQACACAAACQAAADgCACQgBADgEAAQgBAAgCgDg");
	this.shape_100.setTransform(481.65,388.65);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgDAFQgEgCAAgDQAAgCAEgDQAAAAABAAQAAgBABAAQAAAAABAAQAAgBAAAAQAEAAACACQACADgBACQABADgCACQgCADgEAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_101.setTransform(481.65,388.65);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgDAFQgEgCAAgDQAAgCAEgDQABgCACAAQAEAAACACQACADAAACQAAADgCACQgCADgEAAQgCAAgBgDg");
	this.shape_102.setTransform(481.65,388.65);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgDAFQgEgBAAgEQAAgDAEgCQABgCACAAQAEAAACACQACACAAADQAAAEgCABQgCADgEAAQgCAAgBgDg");
	this.shape_103.setTransform(481.65,388.65);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgEAFQgDgBAAgEQAAgDADgCQACgCACAAQAFAAABACQACACAAADQAAAEgCABQgBADgFAAQgCAAgCgDg");
	this.shape_104.setTransform(481.65,388.65);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgEAGQgDgCgBgEQABgCADgDQACgDACABQAEgBACADQACADAAACQAAAEgCACQgCACgEABQgCgBgCgCg");
	this.shape_105.setTransform(481.65,388.65);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgEAGQgEgCAAgEQAAgCAEgDQACgDACAAQAEAAACADQADADAAACQAAAEgDACQgCADgEAAQgCAAgCgDg");
	this.shape_106.setTransform(481.675,388.65);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgEAHQgEgDAAgEQAAgDAEgDQACgCACAAQAFAAACACQACADAAADQAAAEgCADQgCACgFAAQgCAAgCgCg");
	this.shape_107.setTransform(481.65,388.65);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgEQAAgDADgDQADgCACAAQAFAAABACQADADAAADQAAAEgDADQgBADgFAAQgCAAgDgDg");
	this.shape_108.setTransform(481.675,388.65);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgFAHQgEgDAAgEQAAgDAEgDQADgCACAAQAFAAACACQADADAAADQAAAEgDADQgCACgFABQgCgBgDgCg");
	this.shape_109.setTransform(481.675,388.65);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgFAIQgEgEAAgEQAAgDAEgDQADgDACAAQAFAAACADQADADAAADQAAAEgDAEQgCACgFAAQgCAAgDgCg");
	this.shape_110.setTransform(481.675,388.65);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgFAIQgEgEAAgEQAAgDAEgEQADgCACAAQAGAAABACQADAEAAADQAAAEgDAEQgBACgGAAQgCAAgDgCg");
	this.shape_111.setTransform(481.675,388.65);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgFAIQgFgDAAgFQAAgDAFgEQADgCACAAQAGAAACACQADAEAAADQAAAFgDADQgCACgGAAQgCAAgDgCg");
	this.shape_112.setTransform(481.675,388.65);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_113.setTransform(481.7,388.65);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgGAJQgEgEAAgFQAAgDAEgEQAEgDACAAQAGAAACADQADAEAAADQAAAFgDAEQgCACgGAAQgCAAgEgCg");
	this.shape_114.setTransform(481.675,388.65);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgGAJQgFgEAAgFQAAgDAFgEQAEgDACAAQAGAAACADQADAEABADQgBAFgDAEQgCACgGAAQgCAAgEgCg");
	this.shape_115.setTransform(481.7,388.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_26,p:{x:481.55,y:388.525}}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44,p:{x:481.575,y:388.575}}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_26,p:{x:481.575,y:388.575}}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50,p:{x:481.575,y:388.575}}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52,p:{x:481.575,y:388.575}}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_44,p:{x:481.625,y:388.625}}]},1).to({state:[{t:this.shape_44,p:{x:481.625,y:388.625}}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_50,p:{x:481.625,y:388.625}}]},1).to({state:[{t:this.shape_52,p:{x:481.625,y:388.625}}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_44,p:{x:481.675,y:388.65}}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).wait(1));

	// звезда6
	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AAMAAQAAAFgDADQgEAEgFAAQgEAAgEgEQgDgDAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEg");
	this.shape_116.setTransform(579,378.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDADQgEAEgFAAQgEAAgDgEg");
	this.shape_117.setTransform(579,378.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgFADgDQANgEADAEQAEAMgEAEQgDADgFAAQgEAAgEgDQgDgEAAgEg");
	this.shape_118.setTransform(578.9125,378.8875);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgHAIQgDgEAAgEQAAgFADgDQANgEADAEQAEAMgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_119.setTransform(578.9125,378.8875);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgLAAQAAgFAEgEQANgDAEADQADANgDAEQgEAEgFAAQgEAAgEgEQgEgEAAgEg");
	this.shape_120.setTransform(578.9125,378.8875);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgHAIQgEgEAAgEQAAgFAEgEQANgDAEADQADANgDAEQgEAEgFAAQgEAAgEgEg");
	this.shape_121.setTransform(578.9125,378.8875);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgLAAQAAgFAEgEQANgEAEAEQAEAOgEADQgEAEgFAAQgFAAgDgEQgEgDAAgFg");
	this.shape_122.setTransform(578.925,378.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgHAIQgEgEAAgEQAAgGAEgDQANgEAEAEQAEAOgEADQgEAEgFAAQgFAAgDgEg");
	this.shape_123.setTransform(578.925,378.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgLAAQAAgFAEgEQANgEAEAEQAEAOgEAEQgEADgFAAQgFAAgDgDQgEgEAAgFg");
	this.shape_124.setTransform(578.9125,378.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgHAIQgEgEAAgEQAAgGAEgDQANgEAEAEQAEANgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_125.setTransform(578.9125,378.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgLAAQAAgFADgEQAOgEAEAEQAEAOgEAEQgEAEgFAAQgFAAgEgEQgDgEAAgFg");
	this.shape_126.setTransform(578.925,378.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgIAIQgDgEAAgEQAAgGADgEQAOgDAEADQAEAOgEAEQgEAFgFAAQgFAAgEgFg");
	this.shape_127.setTransform(578.925,378.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgMAAQAAgFAEgEQAOgEAEAEQAEAOgEAEQgEAEgFAAQgFAAgEgEQgEgEAAgFg");
	this.shape_128.setTransform(578.9,378.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgHAIQgFgEAAgEQAAgGAFgEQAOgDAEADQADAOgDAEQgEAFgGAAQgFAAgDgFg");
	this.shape_129.setTransform(578.9,378.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgMAAQAAgFAEgEQAPgEAEAEQADAOgDAEQgEAEgGAAQgFAAgEgEQgEgEAAgFg");
	this.shape_130.setTransform(578.9125,378.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgIAJQgEgFAAgEQAAgGAEgEQAPgDAEADQADAOgDAFQgEADgGABQgFgBgEgDg");
	this.shape_131.setTransform(578.9125,378.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgMAAQAAgGAEgEQAPgEAEAEQAEAOgEAFQgEAEgGAAQgFAAgEgEQgEgFAAgEg");
	this.shape_132.setTransform(578.925,378.9125);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgIAJQgEgFAAgEQAAgGAEgEQAPgEAEAEQAEAOgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_133.setTransform(578.925,378.9125);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgMAAQAAgGAEgEQAPgEAEAEQAEAPgEAEQgEAEgGAAQgFAAgEgEQgEgEAAgFg");
	this.shape_134.setTransform(578.9,378.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgGAEgEQAPgEAEAEQAEAPgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_135.setTransform(578.9,378.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgMAAQAAgGAEgEQAPgFAEAFQAEAPgEAEQgEAEgGAAQgFAAgEgEQgEgEAAgFg");
	this.shape_136.setTransform(578.9125,378.9125);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgGAEgEQAPgFAEAFQAEAPgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_137.setTransform(578.9125,378.9125);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgNAAQAAgGAFgEQAQgFADAFQAFAPgFAEQgDAEgHAAQgFAAgEgEQgFgEAAgFg");
	this.shape_138.setTransform(578.9,378.9125);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgIAJQgEgEgBgFQABgGAEgEQAPgFAEAFQAEAPgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_139.setTransform(578.9,378.9125);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgNAAQAAgGAEgFQAQgEAEAEQAFAQgFAEQgEAFgGAAQgFAAgFgFQgEgEAAgFg");
	this.shape_140.setTransform(578.9125,378.9125);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgJAJQgEgEAAgFQAAgGAEgFQAQgEAEAEQAFAQgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_141.setTransform(578.9125,378.9125);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgNAAQAAgGAFgFQAQgEAEAEQAEAQgEAFQgEAEgHAAQgFAAgEgEQgFgFAAgFg");
	this.shape_142.setTransform(578.9,378.9125);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgIAKQgFgFAAgFQAAgGAFgFQAPgEAFAEQAEAQgEAFQgFAEgFAAQgGAAgEgEg");
	this.shape_143.setTransform(578.9,378.9125);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgNAAQAAgHAEgEQAQgFAFAFQAEAQgEAFQgFAEgGAAQgGAAgEgEQgEgFAAgFg");
	this.shape_144.setTransform(578.9125,378.925);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgJAKQgEgFAAgFQAAgHAEgEQAQgFAFAFQAEAQgEAFQgFAEgGAAQgGAAgEgEg");
	this.shape_145.setTransform(578.9125,378.925);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgNAAQAAgHAEgEQARgFAEAFQAEAQgEAFQgEAEgHAAQgGAAgEgEQgEgFAAgFg");
	this.shape_146.setTransform(578.9125,378.925);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgJAKQgEgFAAgFQAAgHAEgEQARgFAEAFQAEAQgEAFQgEAEgHAAQgGAAgEgEg");
	this.shape_147.setTransform(578.9125,378.925);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgOAAQAAgHAFgEQARgFAEAFQAFAQgFAFQgEAFgHAAQgGAAgEgFQgFgFAAgFg");
	this.shape_148.setTransform(578.9125,378.925);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgJAKQgFgFAAgFQAAgHAFgEQARgFAEAFQAFAQgFAFQgEAFgHAAQgGAAgEgFg");
	this.shape_149.setTransform(578.9125,378.925);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AAQAAQAAAHgFAFQgEAEgHAAQgGAAgEgEQgFgFAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAFg");
	this.shape_150.setTransform(579.025,378.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgKAMQgFgGAAgGQAAgGAFgEQAEgFAGAAQAHAAAEAFQAFAEAAAGQAAAGgFAGQgEAEgHAAQgGAAgEgEg");
	this.shape_151.setTransform(579.025,378.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgNAAQAAgGAEgFQAQgEAFAEQAEAQgEAFQgFAEgGAAQgFAAgFgEQgEgFAAgFg");
	this.shape_152.setTransform(578.925,378.9125);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgJAKQgEgFAAgFQAAgGAEgFQAQgEAFAEQAEAQgEAFQgFAEgGAAQgFAAgFgEg");
	this.shape_153.setTransform(578.925,378.9125);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgMAAQAAgGAEgEQAPgFAEAFQAFAPgFAEQgEAFgGAAQgFAAgEgFQgEgEAAgFg");
	this.shape_154.setTransform(578.9375,378.9375);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgGAEgEQAPgFAEAFQAFAPgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape_155.setTransform(578.9375,378.9375);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgGAEgEQAPgEAEAEQAEAPgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_156.setTransform(578.925,378.9125);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgLAAQAAgGAEgDQAOgFADAFQAEANgEAFQgDADgGAAQgFAAgDgDQgEgFAAgEg");
	this.shape_157.setTransform(578.925,378.9125);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgHAJQgEgFAAgEQAAgGAEgDQAOgFADAFQAEANgEAFQgDADgGAAQgFAAgDgDg");
	this.shape_158.setTransform(578.925,378.9125);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgLAAQAAgFAEgEQAOgEADAEQAEAOgEAEQgDADgGAAQgFAAgDgDQgEgEAAgFg");
	this.shape_159.setTransform(578.9375,378.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgHAIQgEgEAAgEQAAgGAEgDQAOgEADAEQAEANgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_160.setTransform(578.9375,378.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgFADgEQANgEAEAEQAEANgEAEQgEAEgFAAQgEAAgEgEQgDgEAAgEg");
	this.shape_161.setTransform(578.95,378.925);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgHAIQgDgEgBgEQABgFADgEQANgEADAEQAFANgFAEQgDAEgFAAQgFAAgDgEg");
	this.shape_162.setTransform(578.95,378.925);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgFADgEQANgDADADQAEANgEAEQgDADgFAAQgFAAgDgDQgDgEAAgEg");
	this.shape_163.setTransform(578.9625,378.9125);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgHAIQgDgEAAgEQAAgFADgEQANgDADADQAEANgEAEQgDADgFAAQgFAAgDgDg");
	this.shape_164.setTransform(578.9625,378.9125);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgFADgDQANgEADAEQADAMgDAEQgDADgFAAQgEAAgEgDQgDgEAAgEg");
	this.shape_165.setTransform(578.9625,378.9125);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgHAIQgDgEAAgEQAAgFADgDQANgEADAEQADAMgDAEQgDADgFAAQgEAAgEgDg");
	this.shape_166.setTransform(578.9625,378.9125);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgEADgDQAMgFADAFQADALgDAEQgDADgFAAQgEAAgDgDQgDgEAAgEg");
	this.shape_167.setTransform(578.9375,378.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgEADgDQAMgFADAFQADALgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_168.setTransform(578.9375,378.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgEADgDQALgEADAEQADALgDADQgDADgEAAQgEAAgDgDQgDgDAAgEg");
	this.shape_169.setTransform(578.95,378.8875);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgEADgDQAMgEACAEQADALgDADQgDADgEAAQgEAAgDgDg");
	this.shape_170.setTransform(578.95,378.8875);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgEADgDQALgEADAEQADAKgDAEQgDADgEAAQgEAAgDgDQgDgEAAgDg");
	this.shape_171.setTransform(578.9625,378.9125);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgGAHQgDgEAAgDQAAgEADgDQALgEADAEQADAKgDAEQgDADgEAAQgEAAgDgDg");
	this.shape_172.setTransform(578.9625,378.9125);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgEACgDQALgDADADQADAKgDADQgDADgEAAQgEAAgDgDQgCgDAAgDg");
	this.shape_173.setTransform(578.975,378.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgGAGQgCgCAAgEQAAgEACgDQALgDADADQADALgDACQgDADgEABQgEgBgDgDg");
	this.shape_174.setTransform(578.975,378.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgEADgDQAKgCACACQADALgDADQgCACgEAAQgEAAgCgCQgDgDAAgEg");
	this.shape_175.setTransform(578.975,378.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgFAGQgDgCAAgEQAAgEADgCQAKgEACAEQADAJgDADQgCADgEAAQgEAAgCgDg");
	this.shape_176.setTransform(578.975,378.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgDACgDQAJgDADADQADAJgDADQgDADgDAAQgDAAgDgDQgCgDAAgDg");
	this.shape_177.setTransform(578.975,378.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgFAGQgCgDAAgDQAAgEACgCQAJgDADADQADAJgDADQgDACgDAAQgDAAgDgCg");
	this.shape_178.setTransform(578.975,378.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgDACgDQAJgDADADQACAJgCADQgDACgDAAQgDAAgDgCQgCgDAAgDg");
	this.shape_179.setTransform(578.9625,378.875);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgFAGQgCgDAAgDQAAgDACgDQAJgDADADQACAJgCADQgDACgDAAQgDAAgDgCg");
	this.shape_180.setTransform(578.9625,378.875);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgDADgCQAIgDACADQADAIgDADQgCACgDAAQgDAAgCgCQgDgDAAgDg");
	this.shape_181.setTransform(578.975,378.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgEAFQgDgCAAgDQAAgEADgBQAIgDACADQADAIgDACQgCADgDAAQgDAAgCgDg");
	this.shape_182.setTransform(578.975,378.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgGAAQAAgDACgCQAIgDACADQADAIgDADQgCACgDAAQgDAAgCgCQgCgDAAgDg");
	this.shape_183.setTransform(578.9875,378.8875);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgEAGQgCgDAAgDQAAgDACgCQAIgDACADQADAIgDADQgCACgDAAQgDAAgCgCg");
	this.shape_184.setTransform(578.9875,378.8875);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AAIAAQAAADgDADQgCACgDAAQgCAAgCgCQgDgDAAgDQAAgCADgCQACgDACAAQADAAACADQADACAAACg");
	this.shape_185.setTransform(579.05,378.825);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgEAGQgCgDAAgDQAAgCACgCQACgDACAAQADAAACADQADACgBACQABADgDADQgCACgDAAQgCAAgCgCg");
	this.shape_186.setTransform(579.05,378.825);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgEADgCQAMACAAAEQAAACgDACQgCADgDAAQgCAAgCgDQgDgCAAgCg");
	this.shape_187.setTransform(579.05,378.975);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgEAEQgCgCAAgCQAAgEACgCQAMACgBAEQABACgDACQgCADgDAAQgCAAgCgDg");
	this.shape_188.setTransform(579.05,378.975);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgDACgDQANADAAADQAAADgCACQgDACgDAAQgCAAgDgCQgCgCAAgDg");
	this.shape_189.setTransform(579.05,378.95);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgFAFQgCgCAAgDQAAgEACgCQANACAAAEQAAADgDACQgCACgDAAQgDAAgCgCg");
	this.shape_190.setTransform(579.05,378.95);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgDACgDQANADAAADQAAADgCACQgCACgEAAQgDAAgCgCQgCgCAAgDg");
	this.shape_191.setTransform(579.05,378.95);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgEACgCQAOACAAAEQAAACgDADQgCACgEAAQgDAAgCgCQgCgDAAgCg");
	this.shape_192.setTransform(579.05,378.975);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgFAFQgDgDAAgCQAAgEADgCQANACAAAEQAAACgDADQgCACgDAAQgDAAgCgCg");
	this.shape_193.setTransform(579.05,378.975);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgFACgCQAOACAAAFQAAACgDADQgCADgEAAQgDAAgCgDQgCgDAAgCg");
	this.shape_194.setTransform(579.05,379);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgFAFQgDgDAAgDQAAgEADgBQANABAAAEQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_195.setTransform(579.05,379);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgEACgDQAPADAAAEQAAADgDACQgDADgDAAQgDAAgDgDQgCgCAAgDg");
	this.shape_196.setTransform(579.075,378.975);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgGAFQgCgCAAgDQAAgEACgDQAPADAAAEQAAADgDACQgDADgDAAQgDAAgDgDg");
	this.shape_197.setTransform(579.075,378.975);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgFADgCQAOACAAAFQAAADgDADQgCACgEAAQgDAAgCgCQgDgDAAgDg");
	this.shape_198.setTransform(579.05,379);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgFAFQgDgCAAgEQAAgEADgCQAOACAAAEQAAAEgDACQgDADgDAAQgDAAgCgDg");
	this.shape_199.setTransform(579.05,379);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgFACgCQAPACAAAFQAAADgDADQgCACgEAAQgEAAgCgCQgCgDAAgDg");
	this.shape_200.setTransform(579.075,379);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgGAFQgCgCAAgEQAAgEACgCQAPACAAAEQAAAEgDACQgCADgEAAQgEAAgCgDg");
	this.shape_201.setTransform(579.075,379);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgFACgCQAQACAAAFQAAADgDADQgDACgEAAQgDAAgDgCQgCgDAAgDg");
	this.shape_202.setTransform(579.05,379);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgGAGQgDgDAAgEQAAgEADgCQAPACAAAEQAAAEgDADQgCACgEAAQgDAAgDgCg");
	this.shape_203.setTransform(579.05,379);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgFADgCQAQACAAAFQAAADgEADQgCACgEAAQgEAAgCgCQgDgDAAgDg");
	this.shape_204.setTransform(579.075,379.025);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgGAGQgDgDAAgDQAAgFADgCQAQACAAAFQAAADgEADQgCACgEAAQgEAAgCgCg");
	this.shape_205.setTransform(579.075,379.025);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgFADgDQAQADAAAFQAAADgEADQgCADgEAAQgEAAgCgDQgDgDAAgDg");
	this.shape_206.setTransform(579.075,379.025);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgGAGQgDgDAAgDQAAgFADgDQAQADAAAFQAAADgEADQgCADgEAAQgEAAgCgDg");
	this.shape_207.setTransform(579.075,379.025);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgFACgDQARADAAAFQAAADgDADQgDADgEAAQgDAAgEgDQgCgDAAgDg");
	this.shape_208.setTransform(579.05,379.025);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgGAGQgDgDAAgDQAAgFADgDQAQADAAAFQAAADgDADQgDADgEAAQgDAAgDgDg");
	this.shape_209.setTransform(579.05,379.025);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgFACgDQARADAAAFQAAADgDADQgDADgEAAQgEAAgDgDQgCgDAAgDg");
	this.shape_210.setTransform(579.075,379.025);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgHAGQgCgDAAgDQAAgFACgDQARADAAAFQAAADgDADQgDADgEAAQgEAAgDgDg");
	this.shape_211.setTransform(579.075,379.025);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgFACgDQASADAAAFQAAADgEAEQgCACgFAAQgEAAgDgCQgCgEAAgDg");
	this.shape_212.setTransform(579.05,379.05);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgGAHQgEgEAAgEQAAgEAEgDQARADAAAEQAAAEgEAEQgDACgEAAQgEAAgCgCg");
	this.shape_213.setTransform(579.05,379.05);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKgBQAAgFADgCQASACAAAFQAAAEgEADQgDADgEAAQgEAAgDgDQgDgDAAgEg");
	this.shape_214.setTransform(579.075,379.05);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgHAHQgDgEAAgEQAAgEADgEQASAEAAAEQAAAEgEAEQgDACgEAAQgEAAgDgCg");
	this.shape_215.setTransform(579.075,379.05);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKgBQAAgFADgDQASADAAAFQAAAEgEAEQgDADgEAAQgEAAgDgDQgDgEAAgEg");
	this.shape_216.setTransform(579.075,379.075);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgHAHQgDgEAAgEQAAgFADgDQASADAAAFQAAAEgEAEQgDADgEAAQgEAAgDgDg");
	this.shape_217.setTransform(579.075,379.075);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKgBQAAgFADgDQASADAAAFQAAAEgEAEQgCADgFAAQgFAAgCgDQgDgEAAgEg");
	this.shape_218.setTransform(579.075,379.075);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgHAHQgDgEAAgEQAAgFADgDQASADAAAFQAAAEgEAEQgCADgFAAQgFAAgCgDg");
	this.shape_219.setTransform(579.075,379.075);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgLgBQAAgFADgDQAUADAAAFQAAAEgEAFQgDACgFAAQgFAAgDgCQgDgFAAgEg");
	this.shape_220.setTransform(579.075,379.05);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgIAHQgDgEAAgEQAAgFADgDQAUADAAAFQAAAEgEAEQgDADgFAAQgFAAgDgDg");
	this.shape_221.setTransform(579.075,379.05);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AAMAAQAAAFgEAEQgDADgFAAQgFAAgDgDQgDgEAAgFQAAgEADgDQADgEAFAAQAFAAADAEQAEADAAAEg");
	this.shape_222.setTransform(579.075,378.875);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgDQADgEAFAAQAFAAADAEQAEADAAAEQAAAFgEAEQgDADgFAAQgFAAgDgDg");
	this.shape_223.setTransform(579.075,378.875);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKgBQAAgFACgDQATADAAAFQAAAEgDAFQgDACgFAAQgFAAgDgCQgCgFAAgEg");
	this.shape_224.setTransform(579.075,379.05);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgIAHQgCgEAAgEQAAgFACgDQATADAAAFQAAAEgDAEQgDADgFAAQgFAAgDgDg");
	this.shape_225.setTransform(579.075,379.05);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKgBQAAgFADgDQASADAAAFQAAAEgEAEQgCADgFAAQgEAAgDgDQgDgEAAgEg");
	this.shape_226.setTransform(579.075,379.075);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgHAHQgDgEAAgEQAAgFADgDQASADAAAFQAAAEgEAEQgCADgFAAQgEAAgDgDg");
	this.shape_227.setTransform(579.075,379.075);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKgBQAAgFACgCQATACAAAFQAAAEgEAEQgDACgEAAQgFAAgDgCQgCgEAAgEg");
	this.shape_228.setTransform(579.1,379.05);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgIAHQgCgEAAgEQAAgEACgEQATAEAAAEQAAAEgEAEQgDADgEgBQgEABgEgDg");
	this.shape_229.setTransform(579.1,379.05);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgFACgDQASADAAAFQAAADgEAEQgDACgEAAQgEAAgDgCQgCgEAAgDg");
	this.shape_230.setTransform(579.1,379.05);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgHAHQgDgEABgEQgBgEADgDQARADAAAEQAAAEgDAEQgDACgEAAQgEAAgDgCg");
	this.shape_231.setTransform(579.1,379.05);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgFACgDQARADAAAFQAAADgDAEQgDACgEAAQgEAAgDgCQgCgEAAgDg");
	this.shape_232.setTransform(579.075,379.05);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AgHAHQgCgEAAgEQAAgEACgDQARADAAAEQAAAEgDAEQgDACgEAAQgEAAgDgCg");
	this.shape_233.setTransform(579.075,379.05);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgFADgDQAQADAAAFQAAADgDADQgDADgEAAQgEAAgCgDQgDgDAAgDg");
	this.shape_234.setTransform(579.075,379.025);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgGAGQgDgDAAgDQAAgFADgDQAQADAAAFQAAADgDADQgDADgEAAQgEAAgCgDg");
	this.shape_235.setTransform(579.075,379.025);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgFADgCQAQACAAAFQAAADgDADQgDADgEAAQgEAAgCgDQgDgDAAgDg");
	this.shape_236.setTransform(579.075,379.05);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AgGAGQgDgEAAgDQAAgEADgDQAQADAAAEQAAADgDAEQgDACgEAAQgEABgCgDg");
	this.shape_237.setTransform(579.075,379.05);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgFACgCQAQACAAAFQAAADgEADQgCACgEAAQgDAAgDgCQgCgDAAgDg");
	this.shape_238.setTransform(579.1,379.025);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AgGAGQgDgDABgDQgBgFADgCQAPACAAAFQAAADgDADQgDACgDAAQgDAAgDgCg");
	this.shape_239.setTransform(579.1,379.025);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIgBQAAgEACgCQAPACAAAEQAAAEgDADQgCACgEAAQgEAAgCgCQgCgDAAgEg");
	this.shape_240.setTransform(579.1,379.05);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AgGAGQgCgDAAgEQAAgDACgDQAPADAAADQAAAEgDADQgCACgEAAQgDAAgDgCg");
	this.shape_241.setTransform(579.1,379.05);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgEACgDQAPADAAAEQAAACgDAEQgCACgEAAQgDAAgDgCQgCgEAAgCg");
	this.shape_242.setTransform(579.075,379.025);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AgGAGQgCgEAAgCQAAgEACgDQAPADAAAEQAAACgDAEQgCACgEAAQgDAAgDgCg");
	this.shape_243.setTransform(579.075,379.025);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgEADgDQAOADAAAEQAAADgEADQgBACgEAAQgDAAgCgCQgDgDAAgDg");
	this.shape_244.setTransform(579.1,379);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AgGAFQgCgDAAgCQAAgEACgCQAOACABAEQAAACgDADQgDACgDAAQgDAAgDgCg");
	this.shape_245.setTransform(579.1,379);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgEADgCQAOACAAAEQAAACgEADQgCACgDAAQgDAAgCgCQgDgDAAgCg");
	this.shape_246.setTransform(579.1,379.025);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgEACgCQANACAAAEQAAADgCACQgDACgDAAQgDAAgCgCQgCgCAAgDg");
	this.shape_247.setTransform(579.1,379);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgFAFQgCgDAAgCQAAgEACgCQANACAAAEQAAACgCADQgDACgDAAQgDAAgCgCg");
	this.shape_248.setTransform(579.1,379);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgDACgDQANADAAADQAAACgCADQgDACgDAAQgCAAgDgCQgCgDAAgCg");
	this.shape_249.setTransform(579.1,379);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgFAFQgCgDAAgCQAAgDACgDQANADAAADQAAACgCADQgDACgDAAQgDAAgCgCg");
	this.shape_250.setTransform(579.1,379);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgDACgCQANACAAADQAAACgDADQgCABgDAAQgDAAgCgBQgCgDAAgCg");
	this.shape_251.setTransform(579.1,379);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgFAFIgCgFQABgDABgCQANACAAADQgBACgCADQgCABgDAAQgDAAgCgBg");
	this.shape_252.setTransform(579.1,379);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgGAAQAAgDACgCQALACAAADQAAACgCACQgCACgDAAQgCAAgCgCQgCgCAAgCg");
	this.shape_253.setTransform(579.075,379);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AgEAEQgCgCAAgCQAAgDACgCQALACAAADQAAACgCACQgCACgDAAQgCAAgCgCg");
	this.shape_254.setTransform(579.075,379);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgGAAQAAgDACgCQALACAAADQAAACgCADQgCABgDAAQgCAAgCgBQgCgDAAgCg");
	this.shape_255.setTransform(579.1,378.975);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AgFAFQgBgDAAgCQAAgDABgCQAMACAAADQAAACgCADIgFABQgDAAgCgBg");
	this.shape_256.setTransform(579.1,378.975);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgGAAQAAgDACgCQALACAAADQAAABgCADQgCACgDAAQgCAAgCgCQgCgDAAgBg");
	this.shape_257.setTransform(579.1,379);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AgEAEQgCgDAAgBQAAgDACgCQALACAAADQAAABgDADQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_258.setTransform(579.1,379);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AAGAAQAAADgCACQgBACgDAAQgCAAgCgCQgBgCAAgDQAAgCABgCQACgCACAAQADAAABACQACACAAACg");
	this.shape_259.setTransform(579.1,378.875);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AgEAFIgCgFQAAgCACgCQACgCACAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQADACAAACQAAADgDACQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_260.setTransform(579.1,378.875);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgFAFQgBgDAAgCQAAgDABgCQAMACAAADQAAACgCADQgCABgDAAQgDAAgCgBg");
	this.shape_261.setTransform(579.1,378.975);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AgFAFQgCgDAAgCQAAgDACgCQAMACABADQgBACgCADQgCABgDAAQgDAAgCgBg");
	this.shape_262.setTransform(579.1,379);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgEACgCQANACAAAEQAAACgDADQgCACgDAAQgDAAgCgCQgCgDAAgCg");
	this.shape_263.setTransform(579.1,379.025);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgFAFIgCgFQABgEABgCQANACAAAEQAAACgCADQgDACgDAAQgDAAgCgCg");
	this.shape_264.setTransform(579.1,379.025);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgDACgDQANADAAADQAAADgCADQgDABgDAAQgCAAgDgBQgCgDAAgDg");
	this.shape_265.setTransform(579.1,379);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AgFAFQgCgCAAgDQAAgDACgDQANADAAADQAAADgCACQgDACgDAAQgDAAgCgCg");
	this.shape_266.setTransform(579.1,379);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AgFAFQgCgDAAgCQAAgEACgCQANACAAAEQAAACgDADQgCACgDAAQgDAAgCgCg");
	this.shape_267.setTransform(579.125,379.025);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgEADgDQAOADAAAEQAAACgDAEQgCACgEAAQgDAAgCgCQgDgEAAgCg");
	this.shape_268.setTransform(579.1,379.05);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AgGAGQgCgEAAgCQAAgEACgDQAOADABAEQgBACgCAEQgCABgEAAQgDAAgDgBg");
	this.shape_269.setTransform(579.1,379.05);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgEACgDQAPADAAAEQAAACgDAEQgDACgDAAQgDAAgDgCQgCgEAAgCg");
	this.shape_270.setTransform(579.125,379.025);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AgGAGQgCgEAAgCQAAgEACgDQAPADAAAEQAAACgDAEQgDACgDAAQgDAAgDgCg");
	this.shape_271.setTransform(579.125,379.025);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgEACgDQAPADAAAEQAAADgDADQgCACgEAAQgDAAgDgCQgCgDAAgDg");
	this.shape_272.setTransform(579.1,379.05);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AgGAGQgCgDAAgDQAAgEACgDQAPADAAAEQAAADgCADQgEACgDAAQgDAAgDgCg");
	this.shape_273.setTransform(579.1,379.05);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgEADgDQAQADAAAEQAAADgEAEQgCACgEAAQgEAAgCgCQgDgEAAgDg");
	this.shape_274.setTransform(579.125,379.05);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AgGAHQgDgEAAgDQAAgFADgDQAQADAAAFQAAADgEAEQgCABgEAAQgEAAgCgBg");
	this.shape_275.setTransform(579.125,379.05);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AgHAHQgCgEAAgDQAAgFACgDQARADAAAFQAAADgDAEQgDACgEAAQgEAAgDgCg");
	this.shape_276.setTransform(579.1,379.075);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgEACgEQARAEAAAEQAAADgDAEQgDACgEAAQgEAAgDgCQgCgEAAgDg");
	this.shape_277.setTransform(579.125,379.05);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgFACgDQASADAAAFQAAADgDAEQgEACgEAAQgDAAgEgCQgCgEAAgDg");
	this.shape_278.setTransform(579.1,379.075);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AgHAHQgDgEABgDQgBgFADgDQARADAAAFQAAADgCAEQgEACgEAAQgDAAgEgCg");
	this.shape_279.setTransform(579.1,379.075);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgFADgEQASAEAAAFQAAADgEAEQgDACgEAAQgEAAgDgCQgDgEAAgDg");
	this.shape_280.setTransform(579.125,379.1);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AgHAHQgDgEAAgDQAAgFADgDQASADAAAFQAAADgEAEQgDACgEABQgEgBgDgCg");
	this.shape_281.setTransform(579.125,379.1);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgFADgEQASAEAAAFQAAADgEAFQgDACgEAAQgEAAgDgCQgDgFAAgDg");
	this.shape_282.setTransform(579.125,379.075);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AgHAIQgDgFAAgDQAAgFADgEQASAEAAAFQAAADgEAFQgDACgEAAQgEAAgDgCg");
	this.shape_283.setTransform(579.125,379.075);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgGACgDQATADAAAGQAAADgDAFQgEACgEAAQgEAAgEgCQgCgFAAgDg");
	this.shape_284.setTransform(579.125,379.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AgIAIQgCgFAAgDQAAgFACgEQATAEAAAFQAAADgDAFQgEACgEAAQgEAAgEgCg");
	this.shape_285.setTransform(579.125,379.1);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgLAAQAAgGADgDQAUADAAAGQAAADgEAFQgEACgEAAQgEAAgEgCQgDgFAAgDg");
	this.shape_286.setTransform(579.125,379.125);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgIAIQgDgFAAgDQAAgGADgDQAUADAAAGQAAADgEAFQgEACgEAAQgEAAgEgCg");
	this.shape_287.setTransform(579.125,379.125);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgLAAQAAgGADgEQAUAEAAAGQAAADgEAFQgDACgFAAQgFAAgDgCQgDgFAAgDg");
	this.shape_288.setTransform(579.125,379.1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AgIAIQgDgFAAgDQAAgFADgEQAUAEAAAFQAAADgEAFQgDACgFABQgFgBgDgCg");
	this.shape_289.setTransform(579.125,379.1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AAMABQAAAEgEAFQgDADgFAAQgFAAgDgDQgDgFAAgEQAAgFADgEQADgEAFAAQAFAAADAEQAEAEAAAFg");
	this.shape_290.setTransform(579.125,378.95);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AgIAKQgDgFAAgFQAAgEADgEQADgEAFABQAFgBADAEQAEAEAAAEQAAAFgEAFQgDACgFAAQgFAAgDgCg");
	this.shape_291.setTransform(579.125,378.95);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AgIAJQgDgGAAgDQAAgFADgEQAUAEAAAFQAAADgEAGQgDACgFAAQgFAAgDgCg");
	this.shape_292.setTransform(579.125,379.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgLAAQAAgGADgDQAUADAAAGQAAADgEAFQgDACgFAAQgEAAgEgCQgDgFAAgDg");
	this.shape_293.setTransform(579.125,379.125);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AgIAIQgDgFAAgDQAAgGADgDQAUADAAAGQAAADgEAFQgDACgFAAQgEAAgEgCg");
	this.shape_294.setTransform(579.125,379.125);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgLAAQAAgFADgEQAUAEAAAFQAAADgEAFQgEACgEAAQgEAAgEgCQgDgFAAgDg");
	this.shape_295.setTransform(579.125,379.125);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AgIAIQgDgFAAgDQAAgFADgEQAUAEAAAFQAAADgEAFQgEACgEAAQgEAAgEgCg");
	this.shape_296.setTransform(579.125,379.125);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgFACgEQATAEAAAFQAAADgDAEQgEADgEAAQgEAAgEgDQgCgEAAgDg");
	this.shape_297.setTransform(579.125,379.125);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("AgIAHQgCgEAAgDQAAgFACgEQATAEAAAFQAAADgDAEQgEADgEAAQgEAAgEgDg");
	this.shape_298.setTransform(579.125,379.125);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgFACgEQATAEAAAFQAAADgEAEQgDADgEAAQgEAAgEgDQgCgEAAgDg");
	this.shape_299.setTransform(579.15,379.125);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AgHAHQgDgEAAgDQAAgFADgEQASAEAAAFQAAADgEAEQgDADgEAAQgEAAgDgDg");
	this.shape_300.setTransform(579.15,379.125);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgFADgEQASAEAAAFQAAADgEAFQgDABgEAAQgEAAgDgBQgDgFAAgDg");
	this.shape_301.setTransform(579.125,379.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AgHAIQgDgFAAgDQAAgFADgDQASADAAAFQAAADgEAFQgDACgEAAQgEAAgDgCg");
	this.shape_302.setTransform(579.125,379.1);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgFACgDQARADAAAFQAAACgDAEQgDADgEAAQgEAAgDgDQgCgEAAgCg");
	this.shape_303.setTransform(579.125,379.125);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AgHAGQgCgEAAgCQAAgFACgDQARADAAAFQAAACgDAEQgDADgEAAQgEAAgDgDg");
	this.shape_304.setTransform(579.125,379.125);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgFADgDQAQADAAAFQAAADgDADQgDACgEAAQgDAAgDgCQgDgDAAgDg");
	this.shape_305.setTransform(579.125,379.1);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AgGAGQgDgEAAgCQAAgEADgDQAQADAAAEQAAACgDAEQgDADgEAAQgDAAgDgDg");
	this.shape_306.setTransform(579.125,379.1);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgEACgDQAPADAAAEQAAADgDAEQgCABgEAAQgDAAgDgBQgCgEAAgDg");
	this.shape_307.setTransform(579.125,379.075);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AgGAHQgCgEAAgDQAAgEACgDQAPADAAAEQAAADgDAEQgCABgEAAQgDAAgDgBg");
	this.shape_308.setTransform(579.125,379.075);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgFACgCQAPACAAAFQAAADgDADQgCACgEAAQgDAAgDgCQgCgDAAgDg");
	this.shape_309.setTransform(579.125,379.1);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgEACgDQAPADAAAEQAAACgDADQgDADgDAAQgDAAgDgDQgCgDAAgCg");
	this.shape_310.setTransform(579.125,379.1);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AgGAFQgCgDAAgCQAAgEACgCQAPACAAAEQAAACgDADQgDACgDABQgDgBgDgCg");
	this.shape_311.setTransform(579.125,379.1);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AgGAFIgBgFQAAgEABgCQAOACAAAEQAAACgDADQgCACgDABQgDgBgDgCg");
	this.shape_312.setTransform(579.15,379.1);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgEACgCQANACAAAEQAAACgDAEQgCABgDAAQgDAAgCgBQgCgEAAgCg");
	this.shape_313.setTransform(579.125,379.075);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AgFAGQgCgEAAgCQAAgEACgCQANACAAAEQAAACgDAEQgCABgDAAQgDAAgCgBg");
	this.shape_314.setTransform(579.125,379.075);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("AgFAFIgCgFQAAgEACgCQANACAAAEQAAACgDADQgCACgDAAQgDAAgCgCg");
	this.shape_315.setTransform(579.125,379.075);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgDACgDQANADAAADQAAACgDADQgCACgDAAQgDAAgCgCQgCgDAAgCg");
	this.shape_316.setTransform(579.125,379.075);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AgFAFIgCgFQAAgDACgDQANADAAADQAAACgDADQgCACgDAAQgDAAgCgCg");
	this.shape_317.setTransform(579.125,379.075);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgEACgCQANACAAAEQAAABgDADQgCACgDAAQgCAAgDgCQgCgDAAgBg");
	this.shape_318.setTransform(579.125,379.1);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AgFAEQgCgDAAgBQAAgDACgDQANADAAADQAAABgDADQgCACgDAAQgCAAgDgCg");
	this.shape_319.setTransform(579.125,379.1);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AAHABQAAACgCADQgCACgDAAQgCAAgDgCQgBgDAAgCQAAgDABgCQADgDACAAQADAAACADQACACAAADg");
	this.shape_320.setTransform(579.125,378.95);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AgFAGIgBgGQAAgCABgCQADgCACgBQADABACACQACACAAACQAAADgCADQgCABgDABQgCgBgDgBg");
	this.shape_321.setTransform(579.125,378.95);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgGAAQAAgDABgCQAMACAAADQgEAGgDAAQgCAAgDgBQgBgDAAgCg");
	this.shape_322.setTransform(579.125,379.075);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AgFAFIgBgFQAAgDABgCQAMACAAADQgEAGgDAAQgCAAgDgBg");
	this.shape_323.setTransform(579.125,379.075);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgEACgCQANACAAAEQgFAGgDAAQgDAAgCgBQgCgEAAgBg");
	this.shape_324.setTransform(579.15,379.1);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AgFAFIgBgFQAAgDABgDQAMADAAADQgEAHgDgBQgCAAgDgBg");
	this.shape_325.setTransform(579.15,379.1);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgEACgCQANACAAAEQgFAGgDAAQgCAAgDgBQgCgDAAgCg");
	this.shape_326.setTransform(579.125,379.1);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AgFAFIgCgFQAAgDACgDQANADAAADQgFAHgDgBIgFgBg");
	this.shape_327.setTransform(579.125,379.1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgEACgCQANACAAAEQgFAHgDAAQgCAAgDgCQgCgDAAgCg");
	this.shape_328.setTransform(579.125,379.125);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AgFAFIgCgFQAAgEACgCQANACAAAEQgFAHgDAAQgCAAgDgCg");
	this.shape_329.setTransform(579.125,379.125);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgEABgCQAOACAAAEQgFAHgDAAQgDAAgDgCQgBgDAAgCg");
	this.shape_330.setTransform(579.15,379.1);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("AgFAFIgCgFQAAgDACgDQANADAAADQgFAHgDAAQgDAAgCgCg");
	this.shape_331.setTransform(579.15,379.1);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("AgFAFIgCgFQAAgEACgCQANACAAAEQgFAHgDAAQgDAAgCgCg");
	this.shape_332.setTransform(579.15,379.125);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgEABgCQAOACAAAEQgEAHgEAAQgDAAgDgCQgBgDAAgCg");
	this.shape_333.setTransform(579.125,379.125);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AgGAFIgBgFQAAgEABgCQAOACAAAEQgEAHgEAAQgDAAgDgCg");
	this.shape_334.setTransform(579.125,379.125);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgEACgDQAPADAAAEQgFAIgEAAQgDAAgDgCQgCgEAAgCg");
	this.shape_335.setTransform(579.15,379.15);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("AgGAGIgBgGQAAgEABgDQAOADAAAEQgEAHgEAAQgDAAgDgBg");
	this.shape_336.setTransform(579.15,379.15);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AAJABQAAADgDADQgCACgEAAQgDAAgDgCQgCgDAAgDQAAgEACgCQADgDADAAQAEAAACADQADACAAAEg");
	this.shape_337.setTransform(579.15,379);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("AgGAHIgBgGQAAgDABgDQADgDADAAQAEAAABADQADADAAADQAAADgDADQgBACgEAAQgDAAgDgCg");
	this.shape_338.setTransform(579.15,379);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_117},{t:this.shape_116}]}).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_129},{t:this.shape_128}]},1).to({state:[{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_135},{t:this.shape_134,p:{x:578.9,y:378.9}}]},1).to({state:[{t:this.shape_137,p:{x:578.9125}},{t:this.shape_136,p:{x:578.9125}}]},1).to({state:[{t:this.shape_137,p:{x:578.925}},{t:this.shape_136,p:{x:578.925}}]},1).to({state:[{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_141},{t:this.shape_140}]},1).to({state:[{t:this.shape_143},{t:this.shape_142}]},1).to({state:[{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_137,p:{x:578.925}},{t:this.shape_136,p:{x:578.925}}]},1).to({state:[{t:this.shape_156},{t:this.shape_134,p:{x:578.925,y:378.9125}}]},1).to({state:[{t:this.shape_158},{t:this.shape_157}]},1).to({state:[{t:this.shape_160},{t:this.shape_159}]},1).to({state:[{t:this.shape_162},{t:this.shape_161}]},1).to({state:[{t:this.shape_164},{t:this.shape_163}]},1).to({state:[{t:this.shape_166},{t:this.shape_165}]},1).to({state:[{t:this.shape_168},{t:this.shape_167}]},1).to({state:[{t:this.shape_170},{t:this.shape_169}]},1).to({state:[{t:this.shape_172},{t:this.shape_171}]},1).to({state:[{t:this.shape_174},{t:this.shape_173}]},1).to({state:[{t:this.shape_176},{t:this.shape_175}]},1).to({state:[{t:this.shape_178},{t:this.shape_177}]},1).to({state:[{t:this.shape_180},{t:this.shape_179}]},1).to({state:[{t:this.shape_182},{t:this.shape_181}]},1).to({state:[{t:this.shape_184},{t:this.shape_183}]},1).to({state:[{t:this.shape_186},{t:this.shape_185}]},1).to({state:[{t:this.shape_188},{t:this.shape_187}]},1).to({state:[{t:this.shape_190},{t:this.shape_189}]},1).to({state:[{t:this.shape_190},{t:this.shape_191}]},1).to({state:[{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_195},{t:this.shape_194}]},1).to({state:[{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_199},{t:this.shape_198}]},1).to({state:[{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_203},{t:this.shape_202}]},1).to({state:[{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_207},{t:this.shape_206}]},1).to({state:[{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_211},{t:this.shape_210}]},1).to({state:[{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_215},{t:this.shape_214}]},1).to({state:[{t:this.shape_215},{t:this.shape_214}]},1).to({state:[{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_219},{t:this.shape_218}]},1).to({state:[{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_223},{t:this.shape_222}]},1).to({state:[{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_227},{t:this.shape_226}]},1).to({state:[{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_215},{t:this.shape_214}]},1).to({state:[{t:this.shape_231},{t:this.shape_230}]},1).to({state:[{t:this.shape_233},{t:this.shape_232,p:{x:579.075,y:379.05}}]},1).to({state:[{t:this.shape_235},{t:this.shape_234}]},1).to({state:[{t:this.shape_237},{t:this.shape_236}]},1).to({state:[{t:this.shape_239},{t:this.shape_238}]},1).to({state:[{t:this.shape_241},{t:this.shape_240}]},1).to({state:[{t:this.shape_243,p:{x:579.075,y:379.025}},{t:this.shape_242,p:{x:579.075,y:379.025}}]},1).to({state:[{t:this.shape_245,p:{y:379}},{t:this.shape_244}]},1).to({state:[{t:this.shape_245,p:{y:379.025}},{t:this.shape_246}]},1).to({state:[{t:this.shape_248},{t:this.shape_247}]},1).to({state:[{t:this.shape_250},{t:this.shape_249}]},1).to({state:[{t:this.shape_252},{t:this.shape_251}]},1).to({state:[{t:this.shape_254},{t:this.shape_253}]},1).to({state:[{t:this.shape_256},{t:this.shape_255}]},1).to({state:[{t:this.shape_258},{t:this.shape_257}]},1).to({state:[{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_258},{t:this.shape_257}]},1).to({state:[{t:this.shape_261},{t:this.shape_255}]},1).to({state:[{t:this.shape_262},{t:this.shape_251}]},1).to({state:[{t:this.shape_264},{t:this.shape_263,p:{x:579.1,y:379.025}}]},1).to({state:[{t:this.shape_266},{t:this.shape_265}]},1).to({state:[{t:this.shape_267},{t:this.shape_263,p:{x:579.125,y:379.025}}]},1).to({state:[{t:this.shape_269},{t:this.shape_268}]},1).to({state:[{t:this.shape_271,p:{y:379.025}},{t:this.shape_270,p:{y:379.025}}]},1).to({state:[{t:this.shape_273},{t:this.shape_272}]},1).to({state:[{t:this.shape_243,p:{x:579.125,y:379.075}},{t:this.shape_242,p:{x:579.125,y:379.075}}]},1).to({state:[{t:this.shape_275},{t:this.shape_274}]},1).to({state:[{t:this.shape_276,p:{x:579.1,y:379.075}},{t:this.shape_232,p:{x:579.1,y:379.075}}]},1).to({state:[{t:this.shape_276,p:{x:579.125,y:379.05}},{t:this.shape_277}]},1).to({state:[{t:this.shape_279},{t:this.shape_278}]},1).to({state:[{t:this.shape_281},{t:this.shape_280}]},1).to({state:[{t:this.shape_283},{t:this.shape_282}]},1).to({state:[{t:this.shape_285},{t:this.shape_284}]},1).to({state:[{t:this.shape_287},{t:this.shape_286}]},1).to({state:[{t:this.shape_289},{t:this.shape_288}]},1).to({state:[{t:this.shape_291},{t:this.shape_290}]},1).to({state:[{t:this.shape_292},{t:this.shape_288}]},1).to({state:[{t:this.shape_294},{t:this.shape_293}]},1).to({state:[{t:this.shape_296},{t:this.shape_295}]},1).to({state:[{t:this.shape_298},{t:this.shape_297}]},1).to({state:[{t:this.shape_300},{t:this.shape_299}]},1).to({state:[{t:this.shape_302},{t:this.shape_301}]},1).to({state:[{t:this.shape_276,p:{x:579.125,y:379.1}},{t:this.shape_232,p:{x:579.125,y:379.1}}]},1).to({state:[{t:this.shape_276,p:{x:579.125,y:379.1}},{t:this.shape_232,p:{x:579.125,y:379.1}}]},1).to({state:[{t:this.shape_304},{t:this.shape_303}]},1).to({state:[{t:this.shape_306},{t:this.shape_305}]},1).to({state:[{t:this.shape_308},{t:this.shape_307}]},1).to({state:[{t:this.shape_243,p:{x:579.125,y:379.1}},{t:this.shape_309}]},1).to({state:[{t:this.shape_271,p:{y:379.1}},{t:this.shape_270,p:{y:379.1}}]},1).to({state:[{t:this.shape_311},{t:this.shape_310,p:{x:579.125}}]},1).to({state:[{t:this.shape_312},{t:this.shape_310,p:{x:579.15}}]},1).to({state:[{t:this.shape_314},{t:this.shape_313}]},1).to({state:[{t:this.shape_315},{t:this.shape_263,p:{x:579.125,y:379.075}}]},1).to({state:[{t:this.shape_317},{t:this.shape_316}]},1).to({state:[{t:this.shape_319},{t:this.shape_318}]},1).to({state:[{t:this.shape_321},{t:this.shape_320}]},1).to({state:[{t:this.shape_323},{t:this.shape_322}]},1).to({state:[{t:this.shape_325},{t:this.shape_324}]},1).to({state:[{t:this.shape_327},{t:this.shape_326}]},1).to({state:[{t:this.shape_327},{t:this.shape_326}]},1).to({state:[{t:this.shape_329},{t:this.shape_328}]},1).to({state:[{t:this.shape_331},{t:this.shape_330,p:{y:379.1}}]},1).to({state:[{t:this.shape_332},{t:this.shape_330,p:{y:379.125}}]},1).to({state:[{t:this.shape_332},{t:this.shape_330,p:{y:379.125}}]},1).to({state:[{t:this.shape_334},{t:this.shape_333}]},1).to({state:[{t:this.shape_336},{t:this.shape_335}]},1).to({state:[{t:this.shape_338},{t:this.shape_337}]},1).wait(1));

	// звезда5
	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AAGAAQAAADgCABQgBACgDAAQgCAAgCgCQgBgBAAgDQAAgCABgBQACgCACAAQADAAABACQACABAAACg");
	this.shape_339.setTransform(360.6,232.25);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFFFF").s().p("AgDAEQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_340.setTransform(360.6,232.25);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgFAAQAAgCABgCQAKACAAACQgDAFgDAAQgFgDAAgCg");
	this.shape_341.setTransform(360.6,232.325);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFFFF").s().p("AgFAAQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAJACAAACQgDAFgDAAQgFgDAAgCg");
	this.shape_342.setTransform(360.6,232.325);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgFAAQAAgDABgCQAKACAAADQgEAFgCAAQgFgEAAgBg");
	this.shape_343.setTransform(360.625,232.35);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FFFFFF").s().p("AgFAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAKABAAADQgEAFgCABQgFgFAAgBg");
	this.shape_344.setTransform(360.625,232.35);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgGAAQAAgDACgCQAKACAAADQgDAFgDAAQgGgDAAgCg");
	this.shape_345.setTransform(360.6,232.35);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFFFF").s().p("AgGAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAJABABADQgEAFgDABQgGgEAAgCg");
	this.shape_346.setTransform(360.6,232.35);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgGAAQAAgCACgDQAKADAAACQgDAGgDAAQgGgEAAgCg");
	this.shape_347.setTransform(360.6,232.325);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFFFF").s().p("AgGAAIACgFQALADAAACQgEAGgDAAQgGgEAAgCg");
	this.shape_348.setTransform(360.6,232.325);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgGAAQAAgCACgDQALADAAACQgEAGgDAAQgGgEAAgCg");
	this.shape_349.setTransform(360.625,232.35);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFFFF").s().p("AgGAAIACgFQALACAAADQgEAGgDAAQgGgEAAgCg");
	this.shape_350.setTransform(360.625,232.35);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgGAAQAAgDACgCQALACAAADQgEAGgDAAQgGgEAAgCg");
	this.shape_351.setTransform(360.625,232.375);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FFFFFF").s().p("AgGAAQAAgDACgCQALACAAADQgEAGgDAAQgGgEAAgCg");
	this.shape_352.setTransform(360.625,232.375);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgEADgCQAMACAAAEQgFAHgDAAQgHgFAAgCg");
	this.shape_353.setTransform(360.65,232.4);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FFFFFF").s().p("AgGAAQAAgDABgDQANADAAADQgGAHgCgBQgGgEAAgCg");
	this.shape_354.setTransform(360.65,232.4);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgDACgDQANADAAADQgFAHgDAAQgHgFAAgCg");
	this.shape_355.setTransform(360.65,232.375);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FFFFFF").s().p("AgGAAQgBgDACgDQANADAAADQgFAHgDAAQgGgFAAgCg");
	this.shape_356.setTransform(360.65,232.375);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgDACgDQANADAAADQgFAHgDAAQgHgEAAgDg");
	this.shape_357.setTransform(360.625,232.375);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFFFFF").s().p("AgHAAQAAgDACgDQANADAAADQgFAHgDAAQgHgEAAgDg");
	this.shape_358.setTransform(360.625,232.375);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AAIAAQAAADgDACQgCADgDAAQgCAAgDgDQgCgCAAgDQAAgDACgCQADgCACAAQADAAACACQADACAAADg");
	this.shape_359.setTransform(360.65,232.3);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FFFFFF").s().p("AgFAFQgCgBAAgEQAAgCACgDQADgCACAAQADAAACACQADADAAACQAAAEgDABQgCADgDAAQgCAAgDgDg");
	this.shape_360.setTransform(360.65,232.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgEACgCQANACAAAEQgFAHgDAAQgHgEAAgDg");
	this.shape_361.setTransform(360.675,232.4);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FFFFFF").s().p("AgHAAQAAgDACgDQANADAAADQgFAHgDgBQgHgEAAgCg");
	this.shape_362.setTransform(360.675,232.4);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgDADgDQAMADAAADQgFAHgDAAQgHgEAAgDg");
	this.shape_363.setTransform(360.65,232.4);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FFFFFF").s().p("AgGAAQAAgDABgDQANADAAADQgFAHgDgBQgGgEAAgCg");
	this.shape_364.setTransform(360.65,232.4);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgGAAQAAgDABgDQAMADAAADQgEAHgDAAQgGgEAAgDg");
	this.shape_365.setTransform(360.675,232.4);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFFFFF").s().p("AgGAAQAAgDABgDQAMADAAADQgEAHgDgBQgGgEAAgCg");
	this.shape_366.setTransform(360.675,232.4);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgGAAQAAgDABgCQAMACAAADQgEAGgDAAQgGgEAAgCg");
	this.shape_367.setTransform(360.7,232.4);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFFFF").s().p("AgGAAQAAgDACgCQALACAAADQgFAGgCAAQgGgEAAgCg");
	this.shape_368.setTransform(360.7,232.4);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgGAAQAAgCABgDQAMADAAACQgEAGgDAAQgGgEAAgCg");
	this.shape_369.setTransform(360.7,232.4);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgGAAQAAgCACgCQALACAAACQgEAGgDAAQgGgEAAgCg");
	this.shape_370.setTransform(360.675,232.4);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FFFFFF").s().p("AgGAAQAAgDACgCQALACAAADQgEAFgDAAQgGgDAAgCg");
	this.shape_371.setTransform(360.675,232.4);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgGAAQAAgCACgCQAKACAAACQgEAGgCAAQgGgEAAgCg");
	this.shape_372.setTransform(360.7,232.4);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFFFFF").s().p("AgFAAQAAgDABgCQAKACABADQgEAFgDAAQgGgDABgCg");
	this.shape_373.setTransform(360.7,232.4);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AAGAAQAAADgCABQgCACgCAAQgCAAgCgCQgCgBAAgDQAAgCACgCQACgBACAAQACAAACABQACACAAACg");
	this.shape_374.setTransform(360.7,232.325);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFFFFF").s().p("AgEAEQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQAAgCABgCQACgBACAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQACACABACQAAABgBAAQAAABAAABQAAAAgBAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_375.setTransform(360.7,232.325);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgGAAQAAgCACgCQAKACAAACQgEAGgCAAQgCAAgCgCQgCgCAAgCg");
	this.shape_376.setTransform(360.7,232.4);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFFFFF").s().p("AgEADQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgDABgCQAKACABADQgEAFgDAAQgCAAgCgCg");
	this.shape_377.setTransform(360.7,232.4);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgGAAQAAgCACgDQALADAAACQgEAGgDAAQgCAAgCgCQgCgCAAgCg");
	this.shape_378.setTransform(360.7,232.4);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFFFFF").s().p("AgEAEQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgDACgCQALACAAADQgFAGgCAAQgCAAgCgCg");
	this.shape_379.setTransform(360.7,232.4);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgGAAQAAgCABgDQAMADAAACQgEAGgDAAQgCAAgDgCQgBgCAAgCg");
	this.shape_380.setTransform(360.7,232.4);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgGAAQAAgDABgCQAMACAAADQgEAGgDAAQgCAAgDgCQgBgBAAgDg");
	this.shape_381.setTransform(360.725,232.4);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FFFFFF").s().p("AgFAEQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgDABgCQAMACAAADQgEAGgDAAQgCAAgDgCg");
	this.shape_382.setTransform(360.725,232.4);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgGAAQAAgDABgCQAMACAAADQgEAGgDAAQgCAAgDgCQgBgCAAgCg");
	this.shape_383.setTransform(360.725,232.425);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FFFFFF").s().p("AgFAEQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgDABgCQAMACAAADQgEAGgDAAQgCAAgDgCg");
	this.shape_384.setTransform(360.725,232.425);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgDACgDQANADAAADQgFAHgDAAQgCAAgDgDQgCgBAAgDg");
	this.shape_385.setTransform(360.7,232.4);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FFFFFF").s().p("AgEAEQgCgCgBgCQABgDACgDQAMADgBADQgEAGgDAAQgCAAgCgCg");
	this.shape_386.setTransform(360.7,232.4);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgDACgDQANADAAADQgFAHgDAAQgDAAgCgDQgCgBAAgDg");
	this.shape_387.setTransform(360.725,232.4);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FFFFFF").s().p("AgFAEQgCgCAAgCQAAgDACgDQANADAAADQgFAGgDAAQgDAAgCgCg");
	this.shape_388.setTransform(360.725,232.4);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgDACgDQANADAAADQgFAHgDAAQgDAAgCgDQgCgCAAgCg");
	this.shape_389.setTransform(360.725,232.425);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FFFFFF").s().p("AgFAEQgCgCAAgCQAAgDACgDQANADAAADQgFAHgDAAQgDAAgCgDg");
	this.shape_390.setTransform(360.725,232.425);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgDACgDQANADAAADQgFAHgDAAQgDAAgCgCQgCgCAAgDg");
	this.shape_391.setTransform(360.725,232.45);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FFFFFF").s().p("AgFAFQgCgDAAgCQAAgEACgCQANACAAAEQgFAHgDAAQgDAAgCgCg");
	this.shape_392.setTransform(360.725,232.45);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgEACgCQANACAAAEQgFAHgDAAQgDAAgCgCQgCgCAAgDg");
	this.shape_393.setTransform(360.725,232.425);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FFFFFF").s().p("AgFAFQgCgCAAgDQAAgEACgCQANACAAAEQgFAHgDAAQgDAAgCgCg");
	this.shape_394.setTransform(360.725,232.425);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgEADgCQAOACAAAEQgGAHgDAAQgDAAgCgCQgDgCAAgDg");
	this.shape_395.setTransform(360.725,232.425);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FFFFFF").s().p("AgFAFQgDgCAAgDQAAgEADgCQAOACAAAEQgGAHgDAAQgDAAgCgCg");
	this.shape_396.setTransform(360.725,232.425);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgEACgDQAPADAAAEQgGAIgDAAQgDAAgDgDQgCgCAAgDg");
	this.shape_397.setTransform(360.725,232.45);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FFFFFF").s().p("AgGAFQgCgDAAgCQAAgEACgDQAPADAAAEQgGAIgDgBQgDAAgDgCg");
	this.shape_398.setTransform(360.725,232.45);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FFFFFF").s().p("AgGAFQgCgCAAgDQAAgEACgDQAPADAAAEQgGAIgDAAQgDAAgDgDg");
	this.shape_399.setTransform(360.75,232.425);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FFFFFF").s().p("AgGAFQgCgDAAgCQAAgEACgDQAPADAAAEQgGAIgDAAQgDAAgDgDg");
	this.shape_400.setTransform(360.725,232.45);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgEACgDQAPADAAAEQgFAIgEAAQgDAAgDgDQgCgCAAgDg");
	this.shape_401.setTransform(360.75,232.45);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FFFFFF").s().p("AgGAFQgDgCABgDQgBgEADgDQAQADAAAEQgGAIgEAAQgDAAgDgDg");
	this.shape_402.setTransform(360.75,232.45);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgEABgDQAQADAAAEQgFAIgEAAQgDAAgEgDQgBgCAAgDg");
	this.shape_403.setTransform(360.75,232.45);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FFFFFF").s().p("AgHAFQgBgCAAgDQAAgEABgDQAQADABAEQgGAIgEAAQgEAAgDgDg");
	this.shape_404.setTransform(360.75,232.45);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgEACgDQARADAAAEQgGAJgEAAQgDAAgEgDQgCgDAAgDg");
	this.shape_405.setTransform(360.75,232.45);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FFFFFF").s().p("AgHAGQgCgDAAgDQAAgEACgEQARAEAAAEQgGAJgEgBQgEAAgDgCg");
	this.shape_406.setTransform(360.75,232.45);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AAKAAQAAAEgEACQgCADgEAAQgDAAgEgDQgCgCAAgEQAAgEACgDQAEgCADAAQAEAAACACQAEADAAAEg");
	this.shape_407.setTransform(360.75,232.35);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FFFFFF").s().p("AgHAHQgCgDAAgEQAAgDACgEQADgCAEAAQAEAAACACQAEAEAAADQAAAEgEADQgCACgEAAQgEAAgDgCg");
	this.shape_408.setTransform(360.75,232.35);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgEACgDQAPADAAAEQgFAIgEAAQgDAAgDgCQgCgDAAgDg");
	this.shape_409.setTransform(360.75,232.45);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FFFFFF").s().p("AgGAGQgDgDABgDQgBgEADgDQAQADAAAEQgGAIgEAAQgDAAgDgCg");
	this.shape_410.setTransform(360.75,232.45);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgEADgDQAOADAAAEQgGAIgDAAQgDAAgCgDQgDgCAAgDg");
	this.shape_411.setTransform(360.75,232.45);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FFFFFF").s().p("AgGAFQgCgDAAgCQAAgEACgDQAPADAAAEQgGAIgDgBQgDABgDgDg");
	this.shape_412.setTransform(360.75,232.45);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgDADgEQAOAEAAADQgGAIgDAAQgDAAgCgDQgDgCAAgDg");
	this.shape_413.setTransform(360.75,232.45);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FFFFFF").s().p("AgGAFQgCgDAAgCQAAgDACgEQAPAEAAADQgGAIgDgBQgDABgDgDg");
	this.shape_414.setTransform(360.75,232.45);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FFFFFF").s().p("AgGAFQgBgDAAgCQAAgDABgEQAOAEABADQgGAIgDgBQgDABgDgDg");
	this.shape_415.setTransform(360.75,232.45);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgEADgCQAOACAAAEQgGAHgDAAQgDAAgCgCQgDgDAAgCg");
	this.shape_416.setTransform(360.75,232.475);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FFFFFF").s().p("AgFAFQgDgDABgCQgBgEADgCQAOACAAAEQgGAHgDAAQgCAAgDgCg");
	this.shape_417.setTransform(360.75,232.475);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgDADgDQAOADAAADQgGAHgDAAQgDAAgCgCQgDgCAAgDg");
	this.shape_418.setTransform(360.75,232.45);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FFFFFF").s().p("AgFAFQgDgCABgDQgBgEADgCQAOACAAAEQgGAHgDAAQgCAAgDgCg");
	this.shape_419.setTransform(360.75,232.45);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FFFFFF").s().p("AgFAFQAAgBgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgEACgCQANACAAAEQgFAHgDAAQgCAAgDgCg");
	this.shape_420.setTransform(360.75,232.45);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FFFFFF").s().p("AgFAFQAAgBgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDACgDQANADAAADQgFAHgDAAQgCAAgDgCg");
	this.shape_421.setTransform(360.75,232.45);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgDACgCQANACAAADQgFAHgDAAQgDAAgCgCQgCgCAAgDg");
	this.shape_422.setTransform(360.775,232.45);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FFFFFF").s().p("AgFAFQAAgBgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgDACgCQANACAAADQgFAGgDAAQgDAAgCgBg");
	this.shape_423.setTransform(360.775,232.45);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgDACgCQANACAAADQgFAHgDAAQgDAAgCgCQgCgDAAgCg");
	this.shape_424.setTransform(360.75,232.45);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FFFFFF").s().p("AgFAFQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgDACgCQANACAAADQgGAGgCAAQgDAAgCgBg");
	this.shape_425.setTransform(360.75,232.45);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgDACgCQANACAAADQgFAHgDAAQgCAAgDgDQgCgCAAgCg");
	this.shape_426.setTransform(360.75,232.45);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FFFFFF").s().p("AgFAEQAAgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgDACgCQANACAAADQgGAGgCAAQgCAAgDgCg");
	this.shape_427.setTransform(360.75,232.45);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgCACgDQANADAAACQgFAHgDAAQgCAAgDgDQgCgCAAgCg");
	this.shape_428.setTransform(360.75,232.45);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#FFFFFF").s().p("AgFAEQAAgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgCACgDQANADAAACQgGAGgCAAQgCAAgDgCg");
	this.shape_429.setTransform(360.75,232.45);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#FFFFFF").s().p("AgEAEQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgCACgDQALADAAACQgFAGgCAAQgCAAgCgCg");
	this.shape_430.setTransform(360.75,232.45);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AAHAAQAAADgDABQgBADgDAAQgCAAgCgDQgCgBAAgDQAAgCACgDQACgBACAAQADAAABABQADADAAACg");
	this.shape_431.setTransform(360.75,232.4);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#FFFFFF").s().p("AgEAEQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgDACgDIAEgBIAEABQADADAAADQAAAAAAABQAAAAgBAAQAAABAAAAQgBABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgCAAgCgCg");
	this.shape_432.setTransform(360.75,232.4);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgCADgDQAMADAAACQgFAHgDAAQgCAAgCgCQgDgDAAgCg");
	this.shape_433.setTransform(360.75,232.45);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#FFFFFF").s().p("AgEAFQgCgDgBgCQABgCACgDQAMADAAACQgGAGgCAAQgCAAgCgBg");
	this.shape_434.setTransform(360.75,232.45);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgCACgDQANADAAACQgFAHgDAAQgCAAgDgCQgCgDAAgCg");
	this.shape_435.setTransform(360.75,232.45);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FFFFFF").s().p("AgFAFQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgCACgDQANADAAACQgGAGgCAAQgCAAgDgBg");
	this.shape_436.setTransform(360.75,232.45);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgDACgCQANACAAADQgFAHgDAAQgCAAgDgCQgCgCAAgDg");
	this.shape_437.setTransform(360.775,232.45);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FFFFFF").s().p("AgFAFQAAgBgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgDACgCQANACAAADQgFAGgDAAQgCAAgDgBg");
	this.shape_438.setTransform(360.775,232.45);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgDACgDQANADAAADQgFAHgDAAQgCAAgDgDQgCgCAAgCg");
	this.shape_439.setTransform(360.775,232.475);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FFFFFF").s().p("AgFAEQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgDACgDQANADAAADQgFAHgDAAQgCAAgDgDg");
	this.shape_440.setTransform(360.775,232.475);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FFFFFF").s().p("AgFAFQgCgDAAgCQAAgDACgDQANADAAADQgFAHgDAAQgDAAgCgCg");
	this.shape_441.setTransform(360.75,232.45);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgDACgDQANADAAADQgFAHgDAAQgDAAgCgCQgCgDAAgCg");
	this.shape_442.setTransform(360.775,232.475);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgDADgDQAOADAAADQgGAHgDAAQgDAAgCgCQgDgDAAgCg");
	this.shape_443.setTransform(360.775,232.475);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FFFFFF").s().p("AgFAFQgDgDAAgCQAAgDADgDQAOADAAADQgGAHgDAAQgDAAgCgCg");
	this.shape_444.setTransform(360.775,232.475);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FFFFFF").s().p("AgFAFQgDgCAAgDQAAgEADgDQAOADAAAEQgGAIgDAAQgDAAgCgDg");
	this.shape_445.setTransform(360.775,232.5);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FFFFFF").s().p("AgGAFQgDgCAAgDQAAgEADgDQAPADAAAEQgGAIgDAAQgDAAgDgDg");
	this.shape_446.setTransform(360.8,232.5);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgEACgDQAPADAAAEQgGAIgDAAQgDAAgDgCQgCgDAAgDg");
	this.shape_447.setTransform(360.8,232.475);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FFFFFF").s().p("AgGAGQgDgDAAgDQAAgEADgDQAPADAAAEQgGAIgDAAQgDAAgDgCg");
	this.shape_448.setTransform(360.8,232.475);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgEADgDQAQADAAAEQgHAIgDAAQgDAAgDgCQgDgDAAgDg");
	this.shape_449.setTransform(360.775,232.5);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#FFFFFF").s().p("AgGAFQgDgCAAgDQAAgEADgDQAQADAAAEQgHAJgDAAQgDAAgDgEg");
	this.shape_450.setTransform(360.775,232.5);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgFADgCQAQACAAAFQgHAIgDAAQgDAAgDgCQgDgDAAgDg");
	this.shape_451.setTransform(360.8,232.5);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FFFFFF").s().p("AgGAFQgDgCAAgDQAAgEADgDQAQADAAAEQgGAJgEAAQgDAAgDgEg");
	this.shape_452.setTransform(360.8,232.5);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgFACgCQARACAAAFQgHAIgDAAQgDAAgEgCQgCgDAAgDg");
	this.shape_453.setTransform(360.8,232.5);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgFADgDQASADAAAFQgIAJgDAAQgDAAgEgDQgDgDAAgDg");
	this.shape_454.setTransform(360.8,232.5);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FFFFFF").s().p("AgGAGQgEgDAAgDQAAgEAEgEQARAEAAAEQgIAJgDAAQgDAAgDgDg");
	this.shape_455.setTransform(360.8,232.5);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AALABQAAADgFADQgDADgDAAQgDAAgEgDQgDgDAAgDQAAgFADgDQAEgCADAAQADAAADACQAFADAAAFg");
	this.shape_456.setTransform(360.8,232.425);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FFFFFF").s().p("AgGAHQgEgDAAgDQAAgFAEgDQADgCADAAQADAAADACQAEADABAFQgBADgEADQgDADgDAAQgDAAgDgDg");
	this.shape_457.setTransform(360.8,232.425);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgFACgDQARADAAAFQgHAJgDAAQgEAAgDgDQgCgDAAgDg");
	this.shape_458.setTransform(360.825,232.5);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FFFFFF").s().p("AgHAGQgCgDAAgDQAAgEACgEQARAEAAAEQgHAJgDAAQgEAAgDgDg");
	this.shape_459.setTransform(360.825,232.5);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FFFFFF").s().p("AgGAGQgDgDAAgDQAAgEADgDQAQADAAAEQgGAJgEAAQgDgBgDgCg");
	this.shape_460.setTransform(360.8,232.5);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgEADgDQAQADAAAEQgHAIgDAAQgDAAgDgDQgDgCAAgDg");
	this.shape_461.setTransform(360.825,232.525);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FFFFFF").s().p("AgGAFQgDgCAAgDQAAgEADgDQAQADAAAEQgHAIgDAAQgDAAgDgDg");
	this.shape_462.setTransform(360.825,232.525);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FFFFFF").s().p("AgFAFQgEgCAAgDQAAgEAEgDQAOADAAAEQgGAIgDAAQgDAAgCgDg");
	this.shape_463.setTransform(360.8,232.5);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgDACgEQAPAEAAADQgGAIgDAAQgDAAgDgCQgCgDAAgDg");
	this.shape_464.setTransform(360.825,232.5);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#FFFFFF").s().p("AgGAFQgCgCAAgDQAAgDACgEQAPAEAAADQgGAIgDAAQgDAAgDgDg");
	this.shape_465.setTransform(360.825,232.5);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgDACgEQAPAEAAADQgGAIgDAAQgDAAgDgDQgCgCAAgDg");
	this.shape_466.setTransform(360.825,232.5);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgDADgEQAOAEAAADQgGAIgDAAQgCAAgDgDQgDgCAAgDg");
	this.shape_467.setTransform(360.8,232.5);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AAJABQAAACgEADQgCACgDAAQgDAAgCgCQgDgDAAgCQAAgEADgDQACgBADAAQADAAACABQAEADAAAEg");
	this.shape_468.setTransform(360.825,232.425);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FFFFFF").s().p("AgFAGQgDgDAAgCQAAgEADgDQACgBADAAQADAAACABQAEADAAAEQAAACgEADQgCACgDAAQgDAAgCgCg");
	this.shape_469.setTransform(360.825,232.425);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgDADgEQAOAEAAADQgGAIgDAAQgIgFAAgDg");
	this.shape_470.setTransform(360.825,232.5);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FFFFFF").s().p("AgIAAQAAgEADgDQAOADAAAEQgGAIgDAAQgIgFAAgDg");
	this.shape_471.setTransform(360.825,232.5);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgEACgDQAPADAAAEQgGAIgDAAQgIgGAAgCg");
	this.shape_472.setTransform(360.85,232.525);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#FFFFFF").s().p("AgIAAQAAgEACgDQAPADAAAEQgGAIgDAAQgIgGAAgCg");
	this.shape_473.setTransform(360.85,232.525);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgEADgDQAOADAAAEQgGAIgDAAQgIgFAAgDg");
	this.shape_474.setTransform(360.825,232.525);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgEADgDQAPADAAAEQgGAIgDAAQgJgFAAgDg");
	this.shape_475.setTransform(360.85,232.55);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#FFFFFF").s().p("AgIAAQAAgEACgDQAPADAAAEQgGAIgDAAQgJgGABgCg");
	this.shape_476.setTransform(360.85,232.55);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AAJABQAAACgEADQgCADgDAAQgDAAgDgDQgDgDAAgCQAAgEADgDQADgCADAAQADAAACACQAEADAAAEg");
	this.shape_477.setTransform(360.85,232.475);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#FFFFFF").s().p("AgGAGQgCgDAAgCQAAgEACgDQADgCADAAQADAAADACQADADAAAEQAAACgDADQgDADgDAAQgDAAgDgDg");
	this.shape_478.setTransform(360.85,232.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_340},{t:this.shape_339}]}).to({state:[{t:this.shape_342},{t:this.shape_341}]},1).to({state:[{t:this.shape_344},{t:this.shape_343}]},1).to({state:[{t:this.shape_344},{t:this.shape_343}]},1).to({state:[{t:this.shape_346},{t:this.shape_345}]},1).to({state:[{t:this.shape_348},{t:this.shape_347}]},1).to({state:[{t:this.shape_350},{t:this.shape_349,p:{x:360.625,y:232.35}}]},1).to({state:[{t:this.shape_350},{t:this.shape_349,p:{x:360.625,y:232.35}}]},1).to({state:[{t:this.shape_350},{t:this.shape_349,p:{x:360.625,y:232.35}}]},1).to({state:[{t:this.shape_350},{t:this.shape_349,p:{x:360.625,y:232.35}}]},1).to({state:[{t:this.shape_352,p:{x:360.625,y:232.375}},{t:this.shape_351,p:{x:360.625,y:232.375}}]},1).to({state:[{t:this.shape_352,p:{x:360.625,y:232.375}},{t:this.shape_351,p:{x:360.625,y:232.375}}]},1).to({state:[{t:this.shape_352,p:{x:360.625,y:232.375}},{t:this.shape_351,p:{x:360.625,y:232.375}}]},1).to({state:[{t:this.shape_352,p:{x:360.625,y:232.375}},{t:this.shape_351,p:{x:360.625,y:232.375}}]},1).to({state:[{t:this.shape_354},{t:this.shape_353}]},1).to({state:[{t:this.shape_356},{t:this.shape_355}]},1).to({state:[{t:this.shape_358,p:{x:360.625,y:232.375}},{t:this.shape_357,p:{x:360.625,y:232.375}}]},1).to({state:[{t:this.shape_358,p:{x:360.625,y:232.375}},{t:this.shape_357,p:{x:360.625,y:232.375}}]},1).to({state:[{t:this.shape_358,p:{x:360.65,y:232.4}},{t:this.shape_357,p:{x:360.65,y:232.4}}]},1).to({state:[{t:this.shape_360},{t:this.shape_359}]},1).to({state:[{t:this.shape_358,p:{x:360.65,y:232.4}},{t:this.shape_357,p:{x:360.65,y:232.4}}]},1).to({state:[{t:this.shape_358,p:{x:360.65,y:232.4}},{t:this.shape_357,p:{x:360.65,y:232.4}}]},1).to({state:[{t:this.shape_358,p:{x:360.675,y:232.4}},{t:this.shape_357,p:{x:360.675,y:232.4}}]},1).to({state:[{t:this.shape_362},{t:this.shape_361}]},1).to({state:[{t:this.shape_362},{t:this.shape_357,p:{x:360.675,y:232.4}}]},1).to({state:[{t:this.shape_364},{t:this.shape_363}]},1).to({state:[{t:this.shape_364},{t:this.shape_363}]},1).to({state:[{t:this.shape_366},{t:this.shape_365}]},1).to({state:[{t:this.shape_366},{t:this.shape_365}]},1).to({state:[{t:this.shape_352,p:{x:360.675,y:232.425}},{t:this.shape_351,p:{x:360.675,y:232.425}}]},1).to({state:[{t:this.shape_352,p:{x:360.675,y:232.4}},{t:this.shape_351,p:{x:360.675,y:232.4}}]},1).to({state:[{t:this.shape_352,p:{x:360.675,y:232.4}},{t:this.shape_351,p:{x:360.675,y:232.4}}]},1).to({state:[{t:this.shape_368},{t:this.shape_367}]},1).to({state:[{t:this.shape_368},{t:this.shape_367}]},1).to({state:[{t:this.shape_368},{t:this.shape_369}]},1).to({state:[{t:this.shape_352,p:{x:360.675,y:232.4}},{t:this.shape_349,p:{x:360.675,y:232.4}}]},1).to({state:[{t:this.shape_371},{t:this.shape_370}]},1).to({state:[{t:this.shape_373},{t:this.shape_372}]},1).to({state:[{t:this.shape_373},{t:this.shape_372}]},1).to({state:[{t:this.shape_375},{t:this.shape_374}]},1).to({state:[{t:this.shape_377},{t:this.shape_376}]},1).to({state:[{t:this.shape_379},{t:this.shape_378,p:{x:360.7,y:232.4}}]},1).to({state:[{t:this.shape_379},{t:this.shape_380}]},1).to({state:[{t:this.shape_382},{t:this.shape_381}]},1).to({state:[{t:this.shape_384},{t:this.shape_383}]},1).to({state:[{t:this.shape_386},{t:this.shape_385}]},1).to({state:[{t:this.shape_388},{t:this.shape_387}]},1).to({state:[{t:this.shape_390},{t:this.shape_389}]},1).to({state:[{t:this.shape_390},{t:this.shape_389}]},1).to({state:[{t:this.shape_392},{t:this.shape_391,p:{x:360.725}}]},1).to({state:[{t:this.shape_394},{t:this.shape_393}]},1).to({state:[{t:this.shape_396},{t:this.shape_395}]},1).to({state:[{t:this.shape_398,p:{x:360.725}},{t:this.shape_397,p:{x:360.725,y:232.45}}]},1).to({state:[{t:this.shape_398,p:{x:360.75}},{t:this.shape_397,p:{x:360.75,y:232.45}}]},1).to({state:[{t:this.shape_399,p:{x:360.75,y:232.425}},{t:this.shape_397,p:{x:360.75,y:232.425}}]},1).to({state:[{t:this.shape_400},{t:this.shape_397,p:{x:360.725,y:232.45}}]},1).to({state:[{t:this.shape_402},{t:this.shape_401}]},1).to({state:[{t:this.shape_404},{t:this.shape_403}]},1).to({state:[{t:this.shape_406},{t:this.shape_405}]},1).to({state:[{t:this.shape_408},{t:this.shape_407}]},1).to({state:[{t:this.shape_406},{t:this.shape_405}]},1).to({state:[{t:this.shape_410},{t:this.shape_409}]},1).to({state:[{t:this.shape_410},{t:this.shape_409}]},1).to({state:[{t:this.shape_402},{t:this.shape_401}]},1).to({state:[{t:this.shape_399,p:{x:360.775,y:232.45}},{t:this.shape_397,p:{x:360.775,y:232.45}}]},1).to({state:[{t:this.shape_412},{t:this.shape_411,p:{x:360.75,y:232.45}}]},1).to({state:[{t:this.shape_412},{t:this.shape_411,p:{x:360.75,y:232.45}}]},1).to({state:[{t:this.shape_414},{t:this.shape_413,p:{x:360.75,y:232.45}}]},1).to({state:[{t:this.shape_415},{t:this.shape_413,p:{x:360.75,y:232.45}}]},1).to({state:[{t:this.shape_417},{t:this.shape_416}]},1).to({state:[{t:this.shape_419},{t:this.shape_418}]},1).to({state:[{t:this.shape_420},{t:this.shape_391,p:{x:360.75}}]},1).to({state:[{t:this.shape_421},{t:this.shape_391,p:{x:360.75}}]},1).to({state:[{t:this.shape_421},{t:this.shape_391,p:{x:360.75}}]},1).to({state:[{t:this.shape_423},{t:this.shape_422}]},1).to({state:[{t:this.shape_425},{t:this.shape_424}]},1).to({state:[{t:this.shape_427},{t:this.shape_426}]},1).to({state:[{t:this.shape_429},{t:this.shape_428}]},1).to({state:[{t:this.shape_430},{t:this.shape_378,p:{x:360.75,y:232.45}}]},1).to({state:[{t:this.shape_432},{t:this.shape_431}]},1).to({state:[{t:this.shape_430},{t:this.shape_378,p:{x:360.75,y:232.45}}]},1).to({state:[{t:this.shape_434},{t:this.shape_433}]},1).to({state:[{t:this.shape_436},{t:this.shape_435}]},1).to({state:[{t:this.shape_438},{t:this.shape_437}]},1).to({state:[{t:this.shape_440},{t:this.shape_439}]},1).to({state:[{t:this.shape_441,p:{x:360.75,y:232.45}},{t:this.shape_391,p:{x:360.75}}]},1).to({state:[{t:this.shape_441,p:{x:360.775,y:232.45}},{t:this.shape_391,p:{x:360.775}}]},1).to({state:[{t:this.shape_441,p:{x:360.775,y:232.475}},{t:this.shape_442}]},1).to({state:[{t:this.shape_444},{t:this.shape_443}]},1).to({state:[{t:this.shape_445,p:{y:232.5,x:360.775}},{t:this.shape_413,p:{x:360.775,y:232.5}}]},1).to({state:[{t:this.shape_445,p:{y:232.475,x:360.775}},{t:this.shape_411,p:{x:360.775,y:232.475}}]},1).to({state:[{t:this.shape_445,p:{y:232.475,x:360.775}},{t:this.shape_411,p:{x:360.775,y:232.475}}]},1).to({state:[{t:this.shape_399,p:{x:360.775,y:232.5}},{t:this.shape_397,p:{x:360.775,y:232.5}}]},1).to({state:[{t:this.shape_446},{t:this.shape_397,p:{x:360.8,y:232.5}}]},1).to({state:[{t:this.shape_448},{t:this.shape_447,p:{y:232.475,x:360.8}}]},1).to({state:[{t:this.shape_450,p:{x:360.775}},{t:this.shape_449,p:{x:360.775}}]},1).to({state:[{t:this.shape_452},{t:this.shape_451}]},1).to({state:[{t:this.shape_452},{t:this.shape_453}]},1).to({state:[{t:this.shape_455},{t:this.shape_454}]},1).to({state:[{t:this.shape_457},{t:this.shape_456}]},1).to({state:[{t:this.shape_455},{t:this.shape_454}]},1).to({state:[{t:this.shape_455},{t:this.shape_454}]},1).to({state:[{t:this.shape_459},{t:this.shape_458}]},1).to({state:[{t:this.shape_460},{t:this.shape_451}]},1).to({state:[{t:this.shape_460},{t:this.shape_449,p:{x:360.8}}]},1).to({state:[{t:this.shape_452},{t:this.shape_449,p:{x:360.8}}]},1).to({state:[{t:this.shape_452},{t:this.shape_449,p:{x:360.8}}]},1).to({state:[{t:this.shape_450,p:{x:360.825}},{t:this.shape_449,p:{x:360.825}}]},1).to({state:[{t:this.shape_450,p:{x:360.825}},{t:this.shape_449,p:{x:360.825}}]},1).to({state:[{t:this.shape_462},{t:this.shape_461}]},1).to({state:[{t:this.shape_463},{t:this.shape_447,p:{y:232.5,x:360.8}}]},1).to({state:[{t:this.shape_463},{t:this.shape_447,p:{y:232.5,x:360.8}}]},1).to({state:[{t:this.shape_399,p:{x:360.825,y:232.5}},{t:this.shape_447,p:{y:232.5,x:360.825}}]},1).to({state:[{t:this.shape_399,p:{x:360.825,y:232.5}},{t:this.shape_447,p:{y:232.5,x:360.825}}]},1).to({state:[{t:this.shape_465},{t:this.shape_464}]},1).to({state:[{t:this.shape_465},{t:this.shape_466}]},1).to({state:[{t:this.shape_445,p:{y:232.5,x:360.8}},{t:this.shape_467}]},1).to({state:[{t:this.shape_445,p:{y:232.5,x:360.825}},{t:this.shape_413,p:{x:360.825,y:232.5}}]},1).to({state:[{t:this.shape_445,p:{y:232.5,x:360.825}},{t:this.shape_413,p:{x:360.825,y:232.5}}]},1).to({state:[{t:this.shape_469},{t:this.shape_468}]},1).to({state:[{t:this.shape_471,p:{y:232.5}},{t:this.shape_470}]},1).to({state:[{t:this.shape_471,p:{y:232.5}},{t:this.shape_470}]},1).to({state:[{t:this.shape_473},{t:this.shape_472}]},1).to({state:[{t:this.shape_473},{t:this.shape_472}]},1).to({state:[{t:this.shape_473},{t:this.shape_472}]},1).to({state:[{t:this.shape_471,p:{y:232.525}},{t:this.shape_474}]},1).to({state:[{t:this.shape_471,p:{y:232.525}},{t:this.shape_474}]},1).to({state:[{t:this.shape_471,p:{y:232.525}},{t:this.shape_474}]},1).to({state:[{t:this.shape_476},{t:this.shape_475}]},1).to({state:[{t:this.shape_476},{t:this.shape_475}]},1).to({state:[{t:this.shape_478},{t:this.shape_477}]},1).wait(1));

	// звезда4
	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AANAAQAAAGgEADQgDAEgGAAQgFAAgDgEQgEgDAAgGQAAgFAEgDQADgEAFAAQAGAAADAEQAEADAAAFg");
	this.shape_479.setTransform(256,371.3);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgFAEgDQADgEAFAAQAGAAADAEQAEADAAAFQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_480.setTransform(256,371.3);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgLAAQAAgFAEgEQAOgEADAEQAEAOgEADQgDAEgGAAQgFAAgDgEQgEgDAAgFg");
	this.shape_481.setTransform(255.9,371.3875);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgFAEgEQANgEAEAEQAEAOgEADQgDAEgGAAQgFAAgDgEg");
	this.shape_482.setTransform(255.9,371.3875);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgLAAQAAgFAEgEQAOgEAEAEQAEAOgEADQgEAFgGAAQgEAAgEgFQgEgDAAgFg");
	this.shape_483.setTransform(255.9,371.4);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FFFFFF").s().p("AgHAIQgEgEgBgEQABgGAEgDQAOgEADAEQAEANgEAEQgDAFgGAAQgFAAgDgFg");
	this.shape_484.setTransform(255.9,371.4);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgLAAQAAgFAEgFQAOgDAEADQAEAPgEAEQgEAEgGAAQgEAAgEgEQgEgEAAgFg");
	this.shape_485.setTransform(255.9,371.3875);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FFFFFF").s().p("AgHAJQgEgEgBgFQABgFAEgFQAOgDADADQAEAPgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_486.setTransform(255.9,371.3875);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgLAAQAAgFADgFQAPgDAEADQAEAPgEAEQgEAEgGAAQgEAAgFgEQgDgEAAgFg");
	this.shape_487.setTransform(255.9,371.3875);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgFAEgFQAPgDADADQAEAPgEAEQgDAEgGAAQgEAAgFgEg");
	this.shape_488.setTransform(255.9,371.3875);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgMAAQAAgGAEgEQAPgEADAEQAFAPgFAEQgDAEgGAAQgFAAgEgEQgEgEAAgFg");
	this.shape_489.setTransform(255.9125,371.4);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FFFFFF").s().p("AgIAIQgEgDAAgFQAAgGAEgEQAPgEADAEQAFAPgFADQgDAFgGAAQgFAAgEgFg");
	this.shape_490.setTransform(255.9125,371.4);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgMAAQAAgGAEgEQAPgEAEAEQAEAPgEAEQgEAEgGAAQgFAAgEgEQgEgEAAgFg");
	this.shape_491.setTransform(255.9,371.4);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#FFFFFF").s().p("AgIAIQgEgDAAgFQAAgGAEgEQAPgEAEAEQAEAPgEADQgEAFgGAAQgFAAgEgFg");
	this.shape_492.setTransform(255.9,371.4);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgMAAQAAgGAEgEQAPgEAEAEQAEAPgEAEQgEAFgGAAQgFAAgEgFQgEgEAAgFg");
	this.shape_493.setTransform(255.9125,371.4);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgGAEgEQAPgEAEAEQAEAPgEAEQgEAFgGAAQgFAAgEgFg");
	this.shape_494.setTransform(255.9125,371.4);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgNAAQAAgGAEgEQAQgEAEAEQAFAQgFADQgEAFgGAAQgFAAgFgFQgEgDAAgGg");
	this.shape_495.setTransform(255.9125,371.4);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#FFFFFF").s().p("AgJAJQgEgEAAgFQAAgGAEgEQAQgEAEAEQAFAPgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_496.setTransform(255.9125,371.4);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgNAAQAAgGAEgFQAQgEAEAEQAFARgFAEQgEAEgGAAQgFAAgFgEQgEgEAAgGg");
	this.shape_497.setTransform(255.9125,371.4);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#FFFFFF").s().p("AgJAJQgEgEAAgFQAAgGAEgFQAQgEAEAEQAFARgFADQgEAFgGAAQgFAAgFgFg");
	this.shape_498.setTransform(255.9125,371.4);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgNAAQAAgGAEgFQAQgEAFAEQAEARgEAEQgFAEgGAAQgFAAgFgEQgEgEAAgGg");
	this.shape_499.setTransform(255.9125,371.4);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#FFFFFF").s().p("AgJAJQgEgEAAgFQAAgGAEgFQAQgEAFAEQAEARgEADQgFAFgGAAQgFAAgFgFg");
	this.shape_500.setTransform(255.9125,371.4);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgNAAQAAgHAEgEQAQgFAFAFQAFAQgFAEQgFAFgGAAQgGAAgEgFQgEgEAAgFg");
	this.shape_501.setTransform(255.925,371.4125);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#FFFFFF").s().p("AgJAJQgEgEAAgFQAAgHAEgEQAQgFAFAFQAFAQgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_502.setTransform(255.925,371.4125);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgNAAQAAgHAEgEQARgFAEAFQAFARgFADQgEAFgHAAQgGAAgEgFQgEgDAAgGg");
	this.shape_503.setTransform(255.925,371.4125);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#FFFFFF").s().p("AgJAJQgEgDAAgGQAAgHAEgEQARgFAEAFQAFARgFADQgEAFgHAAQgGAAgEgFg");
	this.shape_504.setTransform(255.925,371.4125);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgNAAQAAgHAEgFQARgDAEADQAFASgFAEQgEAFgHAAQgGAAgEgFQgEgEAAgGg");
	this.shape_505.setTransform(255.925,371.4);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#FFFFFF").s().p("AgJAKQgEgEAAgGQAAgHAEgEQARgFAEAFQAFARgFAEQgEAEgHABQgGgBgEgEg");
	this.shape_506.setTransform(255.925,371.4);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgOAAQAAgHAFgFQARgEAEAEQAFASgFAEQgEAFgHAAQgGAAgEgFQgFgEAAgGg");
	this.shape_507.setTransform(255.925,371.4125);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#FFFFFF").s().p("AgJAKQgFgEAAgGQAAgHAFgFQARgEAEAEQAFASgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_508.setTransform(255.925,371.4125);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AAQAAQAAAHgFAEQgEAFgHAAQgGAAgEgFQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAFg");
	this.shape_509.setTransform(256.05,371.3);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#FFFFFF").s().p("AgLALQgEgEAAgHQAAgGAEgEQAFgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgFAFgGAAQgGAAgFgFg");
	this.shape_510.setTransform(256.05,371.3);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgNAAQAAgHAEgEQARgFAEAFQAFARgFAEQgEAEgHAAQgGAAgEgEQgEgEAAgGg");
	this.shape_511.setTransform(255.925,371.4125);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#FFFFFF").s().p("AgJAKQgEgEAAgGQAAgHAEgEQARgFAEAFQAFARgFAEQgEAEgHAAQgGAAgEgEg");
	this.shape_512.setTransform(255.925,371.4125);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgNAAQAAgGAEgFQAQgEAFAEQAFAQgFAEQgFAFgGAAQgGAAgEgFQgEgEAAgFg");
	this.shape_513.setTransform(255.95,371.425);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#FFFFFF").s().p("AgJAJQgEgEAAgFQAAgGAEgFQAQgEAFAEQAEAQgEAEQgFAFgGAAQgFAAgFgFg");
	this.shape_514.setTransform(255.95,371.425);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgNAAQAAgGAFgFQAPgEAFAEQAEAQgEAEQgFAFgGAAQgFAAgEgFQgFgEAAgFg");
	this.shape_515.setTransform(255.9375,371.4125);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#FFFFFF").s().p("AgIAJQgFgEAAgFQAAgGAFgFQAPgEAFAEQAEAQgEAEQgFAFgGAAQgFAAgEgFg");
	this.shape_516.setTransform(255.9375,371.4125);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgMAAQAAgGAEgEQAPgEAEAEQAFAQgFADQgEAFgGAAQgFAAgEgFQgEgDAAgGg");
	this.shape_517.setTransform(255.9375,371.4);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgGAEgEQAPgEAEAEQAFAPgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape_518.setTransform(255.9375,371.4);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgGAEgEQAPgEAEAEQAEAPgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_519.setTransform(255.9625,371.425);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgMAAQAAgGAEgEQAOgEAEAEQAFAPgFADQgEAFgFAAQgFAAgEgFQgEgDAAgFg");
	this.shape_520.setTransform(255.9625,371.4125);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#FFFFFF").s().p("AgIAIQgEgDAAgFQAAgGAEgEQAOgEAEAEQAFAPgFADQgEAFgFAAQgFAAgEgFg");
	this.shape_521.setTransform(255.9625,371.4125);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgLAAQAAgFAEgEQAOgEADAEQAFAOgFAEQgDAEgGAAQgFAAgDgEQgEgEAAgFg");
	this.shape_522.setTransform(255.9375,371.4);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgGAEgDQAOgEADAEQAFAOgFADQgDAEgGABQgFgBgDgEg");
	this.shape_523.setTransform(255.9375,371.4);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgLAAQAAgFAEgEQAOgEADAEQAEAOgEADQgDAEgGAAQgEAAgEgEQgEgDAAgFg");
	this.shape_524.setTransform(255.95,371.3875);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#FFFFFF").s().p("AgIAIQgDgDAAgFQAAgFADgEQAPgEADAEQAEAOgEADQgEAEgFAAQgEAAgFgEg");
	this.shape_525.setTransform(255.95,371.3875);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgLAAQAAgFAEgEQANgEAEAEQAEANgEAEQgEAEgFAAQgFAAgDgEQgEgEAAgEg");
	this.shape_526.setTransform(255.975,371.4125);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#FFFFFF").s().p("AgHAIQgEgEAAgEQAAgFAEgEQANgEAEAEQAEANgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_527.setTransform(255.975,371.4125);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgFADgEQANgDADADQAEANgEAEQgDADgFAAQgEAAgEgDQgDgEAAgEg");
	this.shape_528.setTransform(255.975,371.4125);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#FFFFFF").s().p("AgHAIQgDgEAAgEQAAgFADgEQANgDADADQAEANgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_529.setTransform(255.975,371.4125);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgEADgEQANgEADAEQAEANgEADQgDADgFAAQgEAAgEgDQgDgDAAgFg");
	this.shape_530.setTransform(255.95,371.3875);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#FFFFFF").s().p("AgGAIQgEgDAAgFQAAgEAEgEQAMgEADAEQAEANgEADQgDADgFAAQgEAAgDgDg");
	this.shape_531.setTransform(255.95,371.3875);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgFAEgDQALgEAEAEQAEAMgEADQgEAEgEAAQgEAAgDgEQgEgDAAgEg");
	this.shape_532.setTransform(255.975,371.4125);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#FFFFFF").s().p("AgGAHQgEgDAAgEQAAgFAEgDQALgEAEAEQAEAMgEADQgEAEgEAAQgEAAgDgEg");
	this.shape_533.setTransform(255.975,371.4125);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgEADgEQALgDAEADQADAMgDADQgEAEgEAAQgEAAgDgEQgDgDAAgEg");
	this.shape_534.setTransform(255.9875,371.4);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgEADgEQALgDAEADQADAMgDADQgEAEgEgBQgEABgDgEg");
	this.shape_535.setTransform(255.9875,371.4);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgEADgDQALgEADAEQAEALgEADQgDADgEAAQgEAAgDgDQgDgDAAgEg");
	this.shape_536.setTransform(255.9625,371.3875);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgEADgDQALgEADAEQAEALgEADQgDADgEAAQgEAAgDgDg");
	this.shape_537.setTransform(255.9625,371.3875);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgEADgDQALgDADADQAEALgEADQgDADgEAAQgEAAgDgDQgDgDAAgEg");
	this.shape_538.setTransform(255.9875,371.4);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgEADgEQALgCADACQAEAMgEADQgDADgEAAQgEAAgDgDg");
	this.shape_539.setTransform(255.9875,371.4);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgEADgDQAKgDADADQADAKgDADQgDADgEAAQgDAAgDgDQgDgDAAgDg");
	this.shape_540.setTransform(255.9875,371.4);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#FFFFFF").s().p("AgFAHQgDgEAAgDQAAgDADgEQAKgDADADQADALgDADQgDACgEAAQgDAAgDgCg");
	this.shape_541.setTransform(255.9875,371.4);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgDADgEQAKgCACACQAEALgEACQgCADgEAAQgDAAgDgDQgDgCAAgEg");
	this.shape_542.setTransform(255.9875,371.3875);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#FFFFFF").s().p("AgFAGQgDgCAAgEQAAgDADgEQAKgCACACQAEALgEACQgCADgEAAQgDAAgDgDg");
	this.shape_543.setTransform(255.9875,371.3875);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgDADgDQAKgDACADQADAKgDACQgCADgEAAQgDAAgDgDQgDgCAAgEg");
	this.shape_544.setTransform(255.975,371.375);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#FFFFFF").s().p("AgFAGQgDgCAAgEQAAgDADgDQAKgDACADQADAKgDACQgCADgEAAQgDAAgDgDg");
	this.shape_545.setTransform(255.975,371.375);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgHAAQAAgDACgDQAJgDADADQADAJgDADQgDADgDAAQgDAAgDgDQgCgDAAgDg");
	this.shape_546.setTransform(256,371.3875);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#FFFFFF").s().p("AgFAGQgCgDgBgDQABgDACgDQAJgDADADQADAJgDADQgDADgEAAQgCAAgDgDg");
	this.shape_547.setTransform(256,371.3875);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AAJAAQAAAEgDACQgDADgDAAQgDAAgCgDQgDgCAAgEQAAgCADgDQACgDADAAQADAAADADQADADAAACg");
	this.shape_548.setTransform(256.075,371.325);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#FFFFFF").s().p("AgFAGQgDgCAAgEQAAgCADgDQACgDADAAQADAAADADQADADAAACQAAAEgDACQgDADgDAAQgDAAgCgDg");
	this.shape_549.setTransform(256.075,371.325);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgDADgEQAOAEAAADQAAADgDACQgDADgDAAQgDAAgCgDQgDgCAAgDg");
	this.shape_550.setTransform(256.075,371.45);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#FFFFFF").s().p("AgFAFQgDgCAAgDQAAgDADgDQAOADAAADQAAADgDACQgDADgDAAQgDAAgCgDg");
	this.shape_551.setTransform(256.075,371.45);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgEADgDQAOADAAAEQAAACgDADQgDADgDAAQgDAAgCgDQgDgDAAgCg");
	this.shape_552.setTransform(256.075,371.475);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#FFFFFF").s().p("AgFAFQgDgDAAgCQAAgEADgDQAOADAAAEQAAACgDADQgDADgDAAQgDAAgCgDg");
	this.shape_553.setTransform(256.075,371.475);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgDACgEQAPAEAAADQAAADgDADQgDACgDAAQgDAAgDgCQgCgDAAgDg");
	this.shape_554.setTransform(256.075,371.45);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#FFFFFF").s().p("AgGAFQgCgCAAgDQAAgDACgEQAPAEAAADQAAADgDACQgDADgDAAQgDAAgDgDg");
	this.shape_555.setTransform(256.075,371.45);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgIAAQAAgEACgDQAPADAAAEQAAADgDACQgCADgEAAQgDAAgDgDQgCgCAAgDg");
	this.shape_556.setTransform(256.075,371.475);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#FFFFFF").s().p("AgGAFQgCgCAAgDQAAgEACgDQAPADAAAEQAAADgDACQgCADgEAAQgDAAgDgDg");
	this.shape_557.setTransform(256.075,371.475);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgEADgDQAQADAAAEQAAADgEACQgCADgEAAQgDAAgDgDQgDgCAAgDg");
	this.shape_558.setTransform(256.075,371.475);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#FFFFFF").s().p("AgGAFQgDgCAAgDQAAgEADgDQAQADAAAEQAAADgEACQgCADgEAAQgDAAgDgDg");
	this.shape_559.setTransform(256.075,371.475);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgEADgDQAQADAAAEQAAADgDADQgDACgEAAQgDAAgDgCQgDgDAAgDg");
	this.shape_560.setTransform(256.075,371.475);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#FFFFFF").s().p("AgGAGQgDgDAAgDQAAgEADgDQAQADAAAEQAAADgDADQgDACgEAAQgDAAgDgCg");
	this.shape_561.setTransform(256.075,371.475);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgEADgEQAQAEAAAEQAAADgDADQgDADgEAAQgDAAgDgDQgDgDAAgDg");
	this.shape_562.setTransform(256.075,371.5);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#FFFFFF").s().p("AgGAGQgDgEAAgDQAAgDADgEQAQAEAAADQAAADgDAEQgDACgEAAQgDAAgDgCg");
	this.shape_563.setTransform(256.075,371.5);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgEADgEQAQAEAAAEQAAADgEADQgDADgDAAQgEAAgCgDQgDgDAAgDg");
	this.shape_564.setTransform(256.1,371.5);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#FFFFFF").s().p("AgGAGQgDgDAAgDQAAgEADgEQAQAEAAAEQAAADgDADQgDACgEAAQgDAAgDgCg");
	this.shape_565.setTransform(256.1,371.5);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#FFFFFF").s().p("AgGAGQgDgDAAgDQAAgEADgEQAQAEAAAEQAAADgDADQgDADgEAAQgDAAgDgDg");
	this.shape_566.setTransform(256.075,371.475);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgJAAQAAgFADgDQAQADAAAFQAAADgDADQgDADgEAAQgDAAgDgDQgDgDAAgDg");
	this.shape_567.setTransform(256.075,371.5);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#FFFFFF").s().p("AgGAGQgDgDAAgDQAAgFADgDQAQADAAAFQAAADgDADQgDADgEAAQgDAAgDgDg");
	this.shape_568.setTransform(256.075,371.5);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgFAEgDQARADAAAFQAAADgEADQgDADgEAAQgDAAgDgDQgEgDAAgDg");
	this.shape_569.setTransform(256.075,371.525);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#FFFFFF").s().p("AgGAGQgEgDAAgDQAAgFAEgDQARADAAAFQAAADgEADQgDADgEAAQgDAAgDgDg");
	this.shape_570.setTransform(256.075,371.525);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgFAEgDQARADAAAFQAAADgEADQgDADgEAAQgEAAgCgDQgEgDAAgDg");
	this.shape_571.setTransform(256.075,371.525);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#FFFFFF").s().p("AgGAGQgEgDAAgDQAAgFAEgDQARADAAAFQAAADgEADQgDADgEAAQgEAAgCgDg");
	this.shape_572.setTransform(256.075,371.525);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgFADgDQASADAAAFQAAAEgEACQgDADgEAAQgEAAgDgDQgDgCAAgEg");
	this.shape_573.setTransform(256.075,371.5);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#FFFFFF").s().p("AgHAGQgDgDAAgDQAAgEADgFQASAEAAAFQAAADgEADQgDAEgEgBQgEABgDgEg");
	this.shape_574.setTransform(256.075,371.5);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgFADgDQASADAAAFQAAAEgDACQgEADgEAAQgEAAgDgDQgDgCAAgEg");
	this.shape_575.setTransform(256.075,371.5);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#FFFFFF").s().p("AgHAGQgDgCAAgEQAAgEADgFQASAEAAAFQAAAEgDACQgEADgEAAQgEAAgDgDg");
	this.shape_576.setTransform(256.075,371.5);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgFADgEQASAEAAAFQAAADgDADQgEAEgEAAQgEAAgDgEQgDgDAAgDg");
	this.shape_577.setTransform(256.075,371.525);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#FFFFFF").s().p("AgHAGQgDgDAAgDQAAgFADgEQASAEAAAFQAAADgDADQgEAEgEAAQgEAAgDgEg");
	this.shape_578.setTransform(256.075,371.525);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AALAAQAAAFgDADQgEADgEAAQgEAAgDgDQgDgDAAgFQAAgDADgEQADgDAEAAQAEAAAEADQADAEAAADg");
	this.shape_579.setTransform(256.075,371.375);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#FFFFFF").s().p("AgHAIQgDgDAAgFQAAgDADgEQADgDAEAAQAEAAAEADQADAEAAADQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_580.setTransform(256.075,371.375);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgEAEgEQALgEAEAEQAEAMgEADQgEAEgEAAQgEAAgDgEQgEgDAAgEg");
	this.shape_581.setTransform(255.9875,371.4625);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#FFFFFF").s().p("AgGAHQgEgDAAgEQAAgEAEgEQALgEAEAEQAEAMgEADQgEAEgEAAQgEAAgDgEg");
	this.shape_582.setTransform(255.9875,371.4625);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgEAEgFQAMgDADADQAEANgEADQgDAEgFAAQgEAAgDgEQgEgDAAgEg");
	this.shape_583.setTransform(255.9875,371.45);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#FFFFFF").s().p("AgGAIQgEgEAAgEQAAgEAEgEQAMgEADAEQAEAMgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_584.setTransform(255.9875,371.45);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgFAEgEQAMgDADADQAEANgEADQgDAEgFAAQgEAAgDgEQgEgDAAgEg");
	this.shape_585.setTransform(255.975,371.4625);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#FFFFFF").s().p("AgGAHQgEgDAAgEQAAgFAEgEQAMgDADADQAEANgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_586.setTransform(255.975,371.4625);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgLAAQAAgFAEgEQANgDADADQAFANgFAEQgDAEgFAAQgEAAgEgEQgEgEAAgEg");
	this.shape_587.setTransform(256,371.475);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#FFFFFF").s().p("AgHAIQgEgEABgEQgBgFAEgEQANgDADADQAEANgEAEQgEAEgFAAQgDAAgEgEg");
	this.shape_588.setTransform(256,371.475);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgLAAQAAgFAEgEQANgEAEAEQAEAOgEADQgEAEgFAAQgEAAgEgEQgEgDAAgFg");
	this.shape_589.setTransform(256,371.4625);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgFAEgEQANgEAEAEQAEAOgEADQgEAEgGAAQgDAAgEgEg");
	this.shape_590.setTransform(256,371.4625);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgLAAQAAgFAEgFQANgDAEADQAEAPgEADQgEAEgFAAQgFAAgDgEQgEgDAAgFg");
	this.shape_591.setTransform(255.975,371.4625);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgFAEgFQANgDAEADQAEAPgEADQgEAEgFAAQgFAAgDgEg");
	this.shape_592.setTransform(255.975,371.4625);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgMAAQAAgFAFgFQANgDAFADQADAPgDADQgFAFgFAAQgFAAgDgFQgFgDAAgFg");
	this.shape_593.setTransform(256,371.4875);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#FFFFFF").s().p("AgIAIQgDgDAAgFQAAgFADgFQAOgDAEADQAEAPgEADQgEAFgGAAQgEAAgEgFg");
	this.shape_594.setTransform(256,371.4875);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgMAAQAAgFAFgFQANgEAFAEQAEAPgEAEQgFAEgFAAQgFAAgDgEQgFgEAAgFg");
	this.shape_595.setTransform(255.9875,371.4625);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#FFFFFF").s().p("AgHAJQgFgEAAgFQAAgFAFgFQANgEAFAEQAEAPgEAEQgFAEgFAAQgFAAgDgEg");
	this.shape_596.setTransform(255.9875,371.4625);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgMAAQAAgFAEgFQAPgEAEAEQAEAPgEAEQgEAEgGAAQgFAAgEgEQgEgEAAgFg");
	this.shape_597.setTransform(255.9875,371.4875);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgFAEgFQAPgEAEAEQAEAPgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_598.setTransform(255.9875,371.4875);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgMAAQAAgFAEgFQAPgFAEAFQAFAPgFAEQgEAFgGAAQgFAAgEgFQgEgEAAgFg");
	this.shape_599.setTransform(255.9875,371.5);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgGAEgEQAPgEAEAEQAFAPgFAEQgEAEgGABQgFgBgEgEg");
	this.shape_600.setTransform(255.9875,371.5);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgNAAQAAgFAFgGQAPgEAFAEQAEAQgEAEQgFAFgGAAQgFAAgEgFQgFgEAAgFg");
	this.shape_601.setTransform(255.9875,371.475);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#FFFFFF").s().p("AgIAJQgFgEAAgFQAAgFAFgGQAPgEAFAEQAEAQgEAEQgFAFgGAAQgFAAgEgFg");
	this.shape_602.setTransform(255.9875,371.475);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgNAAQAAgFAFgGQAPgEAFAEQAEARgEADQgFAFgGAAQgFAAgEgFQgFgDAAgGg");
	this.shape_603.setTransform(255.9875,371.5);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgNAAQAAgGAFgFQAPgEAFAEQAFARgFAEQgFAEgGAAQgFAAgEgEQgFgEAAgGg");
	this.shape_604.setTransform(255.975,371.475);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#FFFFFF").s().p("AgIAKQgFgEAAgGQAAgGAFgFQAPgEAFAEQAFARgFAEQgFAEgGAAQgFAAgEgEg");
	this.shape_605.setTransform(255.975,371.475);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgNAAQAAgGAEgGQAQgDAFADQAFASgFADQgFAFgGAAQgGAAgEgFQgEgDAAgGg");
	this.shape_606.setTransform(256,371.5);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#FFFFFF").s().p("AgJAJQgFgDAAgGQAAgGAFgFQAQgEAFAEQAFAQgFAEQgFAGgHAAQgEAAgFgGg");
	this.shape_607.setTransform(256,371.5);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgOAAQAAgGAFgGQARgEAFAEQAFASgFAEQgFAFgHAAQgGAAgEgFQgFgEAAgGg");
	this.shape_608.setTransform(256,371.5);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#FFFFFF").s().p("AgJAKQgFgEAAgGQAAgGAFgGQARgEAEAEQAGASgGAEQgEAFgIAAQgFAAgEgFg");
	this.shape_609.setTransform(256,371.5);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#FFFFFF").s().p("AgJAKQgFgEAAgGQAAgGAFgGQARgEAFAEQAFASgFAEQgFAFgHAAQgGAAgEgFg");
	this.shape_610.setTransform(255.975,371.4875);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgPAAQAAgGAFgHQASgEAFAEQAFATgFAFQgFAFgHAAQgGAAgFgFQgFgFAAgGg");
	this.shape_611.setTransform(256,371.5);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#FFFFFF").s().p("AgJAKQgGgEAAgGQAAgGAGgGQAQgFAGAFQAFASgFAEQgGAGgHgBQgFABgEgGg");
	this.shape_612.setTransform(256,371.5);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgPAAQAAgHAGgGQARgEAFAEQAGATgGAEQgFAGgHAAQgGAAgEgGQgGgEAAgGg");
	this.shape_613.setTransform(255.9875,371.5125);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#FFFFFF").s().p("AgJAKQgGgEAAgGQAAgHAGgGQARgEAFAEQAGATgGAEQgFAGgHAAQgGAAgEgGg");
	this.shape_614.setTransform(255.9875,371.5125);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgPAAQAAgHAFgGQASgEAFAEQAGATgGAFQgFAFgHAAQgGAAgFgFQgFgFAAgGg");
	this.shape_615.setTransform(255.9875,371.5);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#FFFFFF").s().p("AgKALQgFgEAAgHQAAgGAFgHQASgEAFAEQAGAUgGAEQgFAFgHAAQgGAAgFgFg");
	this.shape_616.setTransform(255.9875,371.5);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AASABQAAAHgGAEQgFAGgHAAQgHAAgEgGQgGgEAAgHQAAgGAGgHQAEgFAHAAQAHAAAFAFQAGAHAAAGg");
	this.shape_617.setTransform(256.125,371.4);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#FFFFFF").s().p("AgLAMQgGgEAAgIQAAgFAGgHQAEgEAHgBQAHABAFAEQAGAHAAAFQAAAIgGAEQgFAFgHAAQgHAAgEgFg");
	this.shape_618.setTransform(256.125,371.4);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgPAAQAAgHAFgGQASgEAGAEQAFATgFAFQgGAFgHAAQgHAAgEgFQgFgFAAgGg");
	this.shape_619.setTransform(256,371.5125);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#FFFFFF").s().p("AgJALQgGgFAAgGQAAgHAGgGQARgEAFAEQAGATgGAFQgFAFgIAAQgGAAgDgFg");
	this.shape_620.setTransform(256,371.5125);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgPAAQAAgGAGgHQARgEAFAEQAGATgGAEQgFAGgHAAQgGAAgEgGQgGgEAAgGg");
	this.shape_621.setTransform(255.9875,371.5125);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#FFFFFF").s().p("AgJAKQgGgEAAgGQAAgGAGgHQARgEAFAEQAGATgGAEQgFAGgHAAQgGAAgEgGg");
	this.shape_622.setTransform(255.9875,371.5125);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgPAAQAAgGAFgGQASgFAFAFQAFASgFAEQgFAFgHAAQgGAAgFgFQgFgEAAgGg");
	this.shape_623.setTransform(256,371.5125);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#FFFFFF").s().p("AgJAKQgGgEAAgGQAAgGAGgGQAQgFAGAFQAFASgFAEQgGAFgHAAQgFAAgEgFg");
	this.shape_624.setTransform(256,371.5125);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgOAAQAAgGAFgGQAQgEAFAEQAFASgFAEQgFAFgHAAQgFAAgEgFQgFgEAAgGg");
	this.shape_625.setTransform(256.025,371.525);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#FFFFFF").s().p("AgJAKQgFgEAAgGQAAgGAFgGQAQgEAFAEQAFASgFAEQgFAFgHAAQgFAAgEgFg");
	this.shape_626.setTransform(256.025,371.525);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgNAAQAAgFAFgHQAPgDAFADQAFASgFADQgFAFgGAAQgGAAgDgFQgFgDAAgGg");
	this.shape_627.setTransform(256,371.5);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#FFFFFF").s().p("AgIAJQgFgDgBgGQABgGAFgFQAPgEAFAEQAFAQgFAEQgFAGgHAAQgEAAgEgGg");
	this.shape_628.setTransform(256,371.5);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgNAAQAAgFAFgGQAPgEAFAEQAEARgEADQgFAFgHAAQgFAAgDgFQgFgDAAgGg");
	this.shape_629.setTransform(256.0125,371.5);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#FFFFFF").s().p("AgIAJQgFgDAAgGQAAgFAFgGQAPgEAFAEQAEARgEADQgFAFgHAAQgFAAgDgFg");
	this.shape_630.setTransform(256.0125,371.5);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgNAAQAAgGAFgFQAPgEAEAEQAFAQgFAEQgEAFgHAAQgEAAgEgFQgFgEAAgFg");
	this.shape_631.setTransform(256.025,371.5125);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#FFFFFF").s().p("AgIAJQgFgEAAgFQAAgGAFgFQAPgEAEAEQAFAQgFAEQgEAFgHAAQgEAAgEgFg");
	this.shape_632.setTransform(256.025,371.5125);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgNAAQAAgFAFgFQAPgFAEAFQAFAPgFAEQgEAFgHAAQgEAAgEgFQgFgEAAgFg");
	this.shape_633.setTransform(256.0125,371.5);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#FFFFFF").s().p("AgIAJQgFgEAAgFQAAgGAFgEQAPgEAEAEQAFAPgFAEQgEAEgHABQgEgBgEgEg");
	this.shape_634.setTransform(256.0125,371.5);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgMAAQAAgFAEgFQAPgEAEAEQAFAPgFAEQgEAEgGAAQgFAAgEgEQgEgEAAgFg");
	this.shape_635.setTransform(256.0375,371.525);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgFAEgFQAPgEAEAEQAFAPgFAEQgEAEgGAAQgFAAgEgEg");
	this.shape_636.setTransform(256.0375,371.525);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgMAAQAAgFAFgFQANgEAFAEQAEAPgEADQgFAFgFAAQgFAAgDgFQgFgDAAgFg");
	this.shape_637.setTransform(256.0375,371.5125);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#FFFFFF").s().p("AgHAIQgFgDAAgFQAAgFAFgFQANgEAFAEQAEAPgEADQgFAFgFAAQgFAAgDgFg");
	this.shape_638.setTransform(256.0375,371.5125);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgMAAQAAgFAFgFQANgDAFADQAEAOgEAFQgFAEgFAAQgFAAgDgEQgFgFAAgEg");
	this.shape_639.setTransform(256.025,371.5);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#FFFFFF").s().p("AgHAIQgFgDAAgFQAAgFAFgFQANgDAFADQAEAOgEAEQgFAFgFAAQgFAAgDgFg");
	this.shape_640.setTransform(256.025,371.5);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgLAAQAAgFAEgFQANgDAEADQAFAOgFAEQgEAEgFAAQgEAAgEgEQgEgEAAgEg");
	this.shape_641.setTransform(256.0375,371.5125);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#FFFFFF").s().p("AgHAIQgEgEAAgEQAAgFAEgFQANgDAEADQAFAOgFAEQgEAEgFAAQgEAAgEgEg");
	this.shape_642.setTransform(256.0375,371.5125);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgLAAQAAgFAEgEQANgDADADQAEANgEAEQgDADgFAAQgFAAgDgDQgEgEAAgEg");
	this.shape_643.setTransform(256.05,371.5);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#FFFFFF").s().p("AgGAHQgFgCAAgFQAAgEAFgFQALgDAFADQADAOgDACQgFAEgEABQgFgBgCgEg");
	this.shape_644.setTransform(256.05,371.5);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgLAAQAAgFAEgEQANgDADADQAEANgEADQgDAEgFAAQgEAAgEgEQgEgDAAgEg");
	this.shape_645.setTransform(256.05,371.5125);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#FFFFFF").s().p("AgGAHQgFgDAAgEQAAgFAFgEQALgDAFADQADANgDADQgFAEgEAAQgEAAgDgEg");
	this.shape_646.setTransform(256.05,371.5125);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgFAEgDQAMgEADAEQAEAMgEADQgDAEgFAAQgEAAgDgEQgEgDAAgEg");
	this.shape_647.setTransform(256.05,371.5);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#FFFFFF").s().p("AgGAHQgEgDAAgEQAAgEAEgFQAMgCADACQAEANgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_648.setTransform(256.05,371.5);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgFAEgDQALgDAEADQADAMgDADQgEAEgFAAQgDAAgDgEQgEgDAAgEg");
	this.shape_649.setTransform(256.0625,371.5);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#FFFFFF").s().p("AgGAHQgEgDAAgEQAAgEAEgEQALgDAEADQADAMgDADQgEADgFAAQgDAAgDgDg");
	this.shape_650.setTransform(256.0625,371.5);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgEAEgEQALgDADADQAFAMgFACQgDAFgEAAQgEAAgDgFQgEgCAAgEg");
	this.shape_651.setTransform(256.05,371.5);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#FFFFFF").s().p("AgGAGQgEgCAAgEQAAgEAEgEQALgDADADQAFAMgFACQgDAEgEAAQgEAAgDgEg");
	this.shape_652.setTransform(256.05,371.5);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AALAAQAAAEgDADQgEAEgEAAQgDAAgDgEQgEgDAAgEQAAgDAEgEQADgDADAAQAEAAAEADQADAEAAADg");
	this.shape_653.setTransform(256.15,371.425);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#FFFFFF").s().p("AgGAHQgEgDAAgEQAAgDAEgEQACgDAEAAQAEAAADADQAEAEAAADQAAAEgEADQgDAEgEAAQgEAAgCgEg");
	this.shape_654.setTransform(256.15,371.425);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgEAEgEQALgDADADQAFALgFADQgDAEgEAAQgEAAgDgEQgEgDAAgDg");
	this.shape_655.setTransform(256.05,371.5125);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#FFFFFF").s().p("AgFAGQgFgDAAgDQAAgEAFgEQAKgDADADQAFALgFADQgDAEgEAAQgEAAgCgEg");
	this.shape_656.setTransform(256.05,371.5125);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgEAEgEQALgDAEADQADAMgDADQgEAEgFAAQgDAAgDgEQgEgDAAgEg");
	this.shape_657.setTransform(256.0625,371.5);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#FFFFFF").s().p("AgGAHQgEgDAAgEQAAgFAEgDQAMgEADAEQAEAMgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_658.setTransform(256.05,371.5125);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgFADgEQAMgDAEADQAEANgEADQgEAEgFAAQgDAAgEgEQgDgDAAgEg");
	this.shape_659.setTransform(256.075,371.525);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#FFFFFF").s().p("AgHAHQgDgDAAgEQAAgFADgEQAMgDAEADQAEANgEADQgEAEgFAAQgDAAgEgEg");
	this.shape_660.setTransform(256.075,371.525);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgLAAQAAgFAEgEQANgEAEAEQAEANgEAEQgEAEgFAAQgEAAgEgEQgEgEAAgEg");
	this.shape_661.setTransform(256.05,371.525);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#FFFFFF").s().p("AgGAIQgFgEAAgEQAAgFAFgEQAMgEAEAEQAEANgEAEQgEAEgFAAQgEAAgDgEg");
	this.shape_662.setTransform(256.05,371.525);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgLAAQAAgFAEgEQANgEAEAEQAEANgEAEQgEAEgGAAQgDAAgEgEQgEgEAAgEg");
	this.shape_663.setTransform(256.0625,371.5375);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#FFFFFF").s().p("AgHAIQgEgEAAgEQAAgFAEgEQANgEAEAEQAEANgEAEQgEAEgGAAQgDAAgEgEg");
	this.shape_664.setTransform(256.0625,371.5375);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgMAAQAAgFAFgEQANgEAFAEQADANgDAEQgFAEgFAAQgFAAgDgEQgFgEAAgEg");
	this.shape_665.setTransform(256.05,371.525);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#FFFFFF").s().p("AgHAIQgEgEgBgEQABgFAEgEQANgEAFAEQADANgDAEQgFAEgFAAQgFAAgDgEg");
	this.shape_666.setTransform(256.05,371.525);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgMAAQAAgFAEgFQAOgDAEADQAFAOgFAEQgEAFgGAAQgEAAgEgFQgEgEAAgEg");
	this.shape_667.setTransform(256.0625,371.5375);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#FFFFFF").s().p("AgIAIQgEgEAAgEQAAgFAEgFQAOgDAEADQAFAOgFAEQgEAFgGAAQgEAAgEgFg");
	this.shape_668.setTransform(256.0625,371.5375);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgMAAQAAgGAEgEQAOgEAFAEQAEAOgEAEQgFAFgGAAQgEAAgEgFQgEgEAAgEg");
	this.shape_669.setTransform(256.0625,371.55);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#FFFFFF").s().p("AgIAJQgEgFAAgEQAAgGAEgEQAOgEAFAEQAEAOgEAFQgFAEgGAAQgEAAgEgEg");
	this.shape_670.setTransform(256.0625,371.55);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgMAAQAAgFAFgFQAOgEAEAEQAFAPgFAEQgEAEgGAAQgEAAgEgEQgFgEAAgFg");
	this.shape_671.setTransform(256.0375,371.5375);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#FFFFFF").s().p("AgHAJQgFgEAAgFQAAgFAFgFQAOgEAEAEQAFAPgFAEQgEAEgGAAQgEAAgEgEg");
	this.shape_672.setTransform(256.0375,371.5375);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgMAAQAAgFAEgFQAPgEAEAEQAFAPgFAEQgEAFgGAAQgEAAgFgFQgEgEAAgFg");
	this.shape_673.setTransform(256.05,371.55);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#FFFFFF").s().p("AgIAJQgEgFgBgEQABgGAEgEQAPgFAEAFQAFAOgFAFQgEAEgGAAQgFAAgEgEg");
	this.shape_674.setTransform(256.05,371.55);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgNAAQAAgGAFgEQAPgFAFAFQAEAPgEAEQgFAFgGAAQgFAAgEgFQgFgEAAgFg");
	this.shape_675.setTransform(256.0375,371.5375);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#FFFFFF").s().p("AgIAJQgFgEAAgFQAAgGAFgEQAPgFAFAFQAEAPgEAEQgFAFgGAAQgFAAgEgFg");
	this.shape_676.setTransform(256.0375,371.5375);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgNAAQAAgGAEgFQAPgEAFAEQAFAQgFAEQgFAFgFAAQgFAAgFgFQgEgEAAgFg");
	this.shape_677.setTransform(256.05,371.55);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#FFFFFF").s().p("AgJAJQgEgFAAgEQAAgGAEgFQAQgEAFAEQAEAPgEAFQgGAFgFAAQgFAAgFgFg");
	this.shape_678.setTransform(256.05,371.55);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgOAAQAAgGAFgFQAQgFAFAFQAFAQgFAEQgFAFgGAAQgFAAgFgFQgFgEAAgFg");
	this.shape_679.setTransform(256.05,371.5625);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#FFFFFF").s().p("AgJAJQgEgEAAgFQAAgGAEgFQAQgFAFAFQAFAQgFAEQgFAFgGAAQgFAAgFgFg");
	this.shape_680.setTransform(256.05,371.5625);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgOAAQAAgGAGgFQAPgFAFAFQAFAQgFAEQgFAFgGAAQgFAAgEgFQgGgEAAgFg");
	this.shape_681.setTransform(256.025,371.55);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#FFFFFF").s().p("AgIAKQgGgFAAgFQAAgGAGgFQAPgFAFAFQAFAQgFAFQgFAEgGAAQgFAAgEgEg");
	this.shape_682.setTransform(256.025,371.55);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgOAAQAAgGAFgGQAQgEAGAEQAFARgFAFQgGAFgGAAQgFAAgFgFQgFgFAAgFg");
	this.shape_683.setTransform(256.05,371.5625);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#FFFFFF").s().p("AgJAKQgFgFAAgFQAAgGAFgGQAQgEAGAEQAEARgEAFQgGAFgGAAQgFAAgFgFg");
	this.shape_684.setTransform(256.05,371.5625);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgOAAQAAgHAFgFQAQgFAGAFQAFARgFAFQgGAFgGAAQgFAAgFgFQgFgFAAgFg");
	this.shape_685.setTransform(256.0375,371.575);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#FFFFFF").s().p("AgJAKQgFgFAAgFQAAgHAFgFQAQgFAGAFQAFARgFAFQgGAFgGAAQgFAAgFgFg");
	this.shape_686.setTransform(256.0375,371.575);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgPAAQAAgHAFgFQASgFAFAFQAFARgFAFQgFAFgHAAQgGAAgFgFQgFgFAAgFg");
	this.shape_687.setTransform(256.05,371.5625);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#FFFFFF").s().p("AgKAKQgEgFAAgFQAAgHAEgFQASgFAFAFQAFARgFAFQgGAFgGAAQgFAAgGgFg");
	this.shape_688.setTransform(256.05,371.5625);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AARABQAAAGgFAFQgGAFgGAAQgGAAgFgFQgFgFAAgGQAAgGAFgGQAFgFAGAAQAGAAAGAFQAFAGAAAGg");
	this.shape_689.setTransform(256.175,371.45);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgGQAAgHAFgFQAFgFAGAAQAGAAAGAFQAFAFAAAHQAAAGgFAFQgGAFgGAAQgGAAgFgFg");
	this.shape_690.setTransform(256.175,371.45);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgOAAQAAgHAFgFQARgFAFAFQAFARgFAFQgFAFgHAAQgFAAgFgFQgFgFAAgFg");
	this.shape_691.setTransform(256.0375,371.575);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#FFFFFF").s().p("AgJAKQgFgFAAgFQAAgHAFgFQARgFAFAFQAFARgFAFQgFAFgHAAQgFAAgFgFg");
	this.shape_692.setTransform(256.0375,371.575);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgOAAQAAgGAFgFQAQgFAGAFQAFAQgFAFQgGAFgGAAQgFAAgFgFQgFgFAAgFg");
	this.shape_693.setTransform(256.05,371.575);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#FFFFFF").s().p("AgJAKQgFgFAAgFQAAgGAFgFQAQgFAGAFQAEAQgEAFQgGAFgGAAQgFAAgFgFg");
	this.shape_694.setTransform(256.05,371.575);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgNAAQAAgGAFgFQAPgEAEAEQAFAQgFAEQgEAFgGAAQgFAAgEgFQgFgEAAgFg");
	this.shape_695.setTransform(256.05,371.5625);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgMAAQAAgGAFgEQAOgFAEAFQAFAOgFAFQgEAEgGAAQgEAAgEgEQgFgFAAgEg");
	this.shape_696.setTransform(256.05,371.5625);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#FFFFFF").s().p("AgHAJQgGgFAAgEQAAgGAGgEQAOgFAEAFQAFAOgFAFQgEAEgGAAQgFAAgDgEg");
	this.shape_697.setTransform(256.05,371.5625);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgMAAQAAgFAEgFQAOgEAFAEQAEAOgEAEQgFAFgFAAQgEAAgFgFQgEgEAAgEg");
	this.shape_698.setTransform(256.0875,371.575);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#FFFFFF").s().p("AgIAIQgEgEAAgEQAAgFAEgFQAOgEAFAEQAEAOgEAEQgFAFgFAAQgEAAgFgFg");
	this.shape_699.setTransform(256.0875,371.575);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgLAAQAAgFAEgEQANgEAEAEQAFANgFAEQgEAEgFAAQgEAAgEgEQgEgEAAgEg");
	this.shape_700.setTransform(256.0875,371.575);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#FFFFFF").s().p("AgHAIQgEgEAAgEQAAgFAEgEQANgEAEAEQAFANgFAEQgEAEgFAAQgEAAgEgEg");
	this.shape_701.setTransform(256.0875,371.575);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#FFFFFF").s().p("AgHAIQgEgEAAgEQAAgFAEgEQANgEAEAEQAEANgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_702.setTransform(256.0875,371.575);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgFAEgEQAMgDADADQAFANgFADQgDAEgFAAQgEAAgDgEQgEgDAAgEg");
	this.shape_703.setTransform(256.0875,371.5625);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#FFFFFF").s().p("AgGAHQgEgDAAgEQAAgFAEgEQAMgDADADQAFANgFADQgDAEgFAAQgEAAgDgEg");
	this.shape_704.setTransform(256.0875,371.5625);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgKAAQAAgEADgEQAMgEAEAEQAEALgEAEQgEAEgFAAQgDAAgEgEQgDgEAAgDg");
	this.shape_705.setTransform(256.1,371.5625);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#FFFFFF").s().p("AgHAHQgDgEAAgDQAAgEADgEQAMgEAEAEQAEALgEAEQgEAEgFAAQgCAAgFgEg");
	this.shape_706.setTransform(256.1,371.5625);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AALAAQAAAEgEAEQgDADgEAAQgEAAgDgDQgEgEAAgEQAAgDAEgEQADgDAEAAQAEAAADADQAEAEAAADg");
	this.shape_707.setTransform(256.2,371.475);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#FFFFFF").s().p("AgHAIQgDgEAAgEQAAgDADgEQAEgDADAAQAEAAADADQAEAEAAADQAAAEgEAEQgDADgEAAQgDAAgEgDg");
	this.shape_708.setTransform(256.2,371.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_480},{t:this.shape_479}]}).to({state:[{t:this.shape_482},{t:this.shape_481}]},1).to({state:[{t:this.shape_484},{t:this.shape_483}]},1).to({state:[{t:this.shape_486},{t:this.shape_485}]},1).to({state:[{t:this.shape_488},{t:this.shape_487}]},1).to({state:[{t:this.shape_490},{t:this.shape_489}]},1).to({state:[{t:this.shape_492,p:{x:255.9}},{t:this.shape_491,p:{x:255.9,y:371.4}}]},1).to({state:[{t:this.shape_492,p:{x:255.9125}},{t:this.shape_491,p:{x:255.9125,y:371.4}}]},1).to({state:[{t:this.shape_494},{t:this.shape_493}]},1).to({state:[{t:this.shape_494},{t:this.shape_493}]},1).to({state:[{t:this.shape_496},{t:this.shape_495}]},1).to({state:[{t:this.shape_496},{t:this.shape_495}]},1).to({state:[{t:this.shape_498,p:{x:255.9125}},{t:this.shape_497,p:{x:255.9125}}]},1).to({state:[{t:this.shape_498,p:{x:255.925}},{t:this.shape_497,p:{x:255.925}}]},1).to({state:[{t:this.shape_500},{t:this.shape_499}]},1).to({state:[{t:this.shape_502},{t:this.shape_501}]},1).to({state:[{t:this.shape_504},{t:this.shape_503}]},1).to({state:[{t:this.shape_506},{t:this.shape_505}]},1).to({state:[{t:this.shape_508},{t:this.shape_507}]},1).to({state:[{t:this.shape_510},{t:this.shape_509}]},1).to({state:[{t:this.shape_512},{t:this.shape_511}]},1).to({state:[{t:this.shape_514},{t:this.shape_513}]},1).to({state:[{t:this.shape_516,p:{x:255.9375,y:371.4125}},{t:this.shape_515}]},1).to({state:[{t:this.shape_518},{t:this.shape_517}]},1).to({state:[{t:this.shape_519},{t:this.shape_491,p:{x:255.9625,y:371.425}}]},1).to({state:[{t:this.shape_521},{t:this.shape_520}]},1).to({state:[{t:this.shape_523},{t:this.shape_522}]},1).to({state:[{t:this.shape_525},{t:this.shape_524}]},1).to({state:[{t:this.shape_527,p:{x:255.975,y:371.4125}},{t:this.shape_526,p:{x:255.975,y:371.4125}}]},1).to({state:[{t:this.shape_529},{t:this.shape_528}]},1).to({state:[{t:this.shape_531},{t:this.shape_530}]},1).to({state:[{t:this.shape_533},{t:this.shape_532}]},1).to({state:[{t:this.shape_535},{t:this.shape_534}]},1).to({state:[{t:this.shape_537},{t:this.shape_536}]},1).to({state:[{t:this.shape_539},{t:this.shape_538}]},1).to({state:[{t:this.shape_541},{t:this.shape_540}]},1).to({state:[{t:this.shape_543},{t:this.shape_542}]},1).to({state:[{t:this.shape_545},{t:this.shape_544}]},1).to({state:[{t:this.shape_547},{t:this.shape_546}]},1).to({state:[{t:this.shape_549},{t:this.shape_548}]},1).to({state:[{t:this.shape_551},{t:this.shape_550}]},1).to({state:[{t:this.shape_553},{t:this.shape_552}]},1).to({state:[{t:this.shape_553},{t:this.shape_552}]},1).to({state:[{t:this.shape_555},{t:this.shape_554}]},1).to({state:[{t:this.shape_557},{t:this.shape_556}]},1).to({state:[{t:this.shape_559},{t:this.shape_558}]},1).to({state:[{t:this.shape_559},{t:this.shape_558}]},1).to({state:[{t:this.shape_561},{t:this.shape_560}]},1).to({state:[{t:this.shape_563},{t:this.shape_562,p:{y:371.5}}]},1).to({state:[{t:this.shape_565},{t:this.shape_564}]},1).to({state:[{t:this.shape_566},{t:this.shape_562,p:{y:371.475}}]},1).to({state:[{t:this.shape_568},{t:this.shape_567}]},1).to({state:[{t:this.shape_568},{t:this.shape_567}]},1).to({state:[{t:this.shape_568},{t:this.shape_567}]},1).to({state:[{t:this.shape_570},{t:this.shape_569}]},1).to({state:[{t:this.shape_572},{t:this.shape_571}]},1).to({state:[{t:this.shape_574},{t:this.shape_573}]},1).to({state:[{t:this.shape_576},{t:this.shape_575}]},1).to({state:[{t:this.shape_578},{t:this.shape_577}]},1).to({state:[{t:this.shape_580},{t:this.shape_579}]},1).to({state:[{t:this.shape_582},{t:this.shape_581}]},1).to({state:[{t:this.shape_584},{t:this.shape_583}]},1).to({state:[{t:this.shape_586},{t:this.shape_585}]},1).to({state:[{t:this.shape_588},{t:this.shape_587}]},1).to({state:[{t:this.shape_590},{t:this.shape_589}]},1).to({state:[{t:this.shape_592},{t:this.shape_591}]},1).to({state:[{t:this.shape_594},{t:this.shape_593}]},1).to({state:[{t:this.shape_596},{t:this.shape_595}]},1).to({state:[{t:this.shape_598},{t:this.shape_597}]},1).to({state:[{t:this.shape_600},{t:this.shape_599}]},1).to({state:[{t:this.shape_602,p:{y:371.475}},{t:this.shape_601}]},1).to({state:[{t:this.shape_602,p:{y:371.5}},{t:this.shape_603}]},1).to({state:[{t:this.shape_605},{t:this.shape_604}]},1).to({state:[{t:this.shape_607},{t:this.shape_606}]},1).to({state:[{t:this.shape_609},{t:this.shape_608,p:{x:256,y:371.5}}]},1).to({state:[{t:this.shape_610},{t:this.shape_608,p:{x:255.975,y:371.4875}}]},1).to({state:[{t:this.shape_612},{t:this.shape_611}]},1).to({state:[{t:this.shape_614},{t:this.shape_613}]},1).to({state:[{t:this.shape_616},{t:this.shape_615}]},1).to({state:[{t:this.shape_618},{t:this.shape_617}]},1).to({state:[{t:this.shape_620},{t:this.shape_619}]},1).to({state:[{t:this.shape_622},{t:this.shape_621}]},1).to({state:[{t:this.shape_624},{t:this.shape_623}]},1).to({state:[{t:this.shape_609},{t:this.shape_608,p:{x:256,y:371.5}}]},1).to({state:[{t:this.shape_626},{t:this.shape_625}]},1).to({state:[{t:this.shape_628},{t:this.shape_627}]},1).to({state:[{t:this.shape_630},{t:this.shape_629}]},1).to({state:[{t:this.shape_632},{t:this.shape_631}]},1).to({state:[{t:this.shape_634},{t:this.shape_633}]},1).to({state:[{t:this.shape_636},{t:this.shape_635}]},1).to({state:[{t:this.shape_638},{t:this.shape_637}]},1).to({state:[{t:this.shape_640},{t:this.shape_639}]},1).to({state:[{t:this.shape_642},{t:this.shape_641}]},1).to({state:[{t:this.shape_527,p:{x:256.05,y:371.5125}},{t:this.shape_526,p:{x:256.05,y:371.5125}}]},1).to({state:[{t:this.shape_644},{t:this.shape_643}]},1).to({state:[{t:this.shape_646},{t:this.shape_645}]},1).to({state:[{t:this.shape_648},{t:this.shape_647,p:{y:371.5}}]},1).to({state:[{t:this.shape_650},{t:this.shape_649}]},1).to({state:[{t:this.shape_652},{t:this.shape_651}]},1).to({state:[{t:this.shape_654},{t:this.shape_653}]},1).to({state:[{t:this.shape_656},{t:this.shape_655}]},1).to({state:[{t:this.shape_650},{t:this.shape_657}]},1).to({state:[{t:this.shape_658},{t:this.shape_647,p:{y:371.5125}}]},1).to({state:[{t:this.shape_660},{t:this.shape_659}]},1).to({state:[{t:this.shape_646},{t:this.shape_645}]},1).to({state:[{t:this.shape_662},{t:this.shape_661,p:{x:256.05,y:371.525}}]},1).to({state:[{t:this.shape_664},{t:this.shape_663}]},1).to({state:[{t:this.shape_666},{t:this.shape_665}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_670},{t:this.shape_669}]},1).to({state:[{t:this.shape_672},{t:this.shape_671}]},1).to({state:[{t:this.shape_674},{t:this.shape_673}]},1).to({state:[{t:this.shape_676},{t:this.shape_675}]},1).to({state:[{t:this.shape_678},{t:this.shape_677}]},1).to({state:[{t:this.shape_680},{t:this.shape_679}]},1).to({state:[{t:this.shape_682},{t:this.shape_681}]},1).to({state:[{t:this.shape_684},{t:this.shape_683}]},1).to({state:[{t:this.shape_686},{t:this.shape_685}]},1).to({state:[{t:this.shape_688},{t:this.shape_687}]},1).to({state:[{t:this.shape_690},{t:this.shape_689}]},1).to({state:[{t:this.shape_692},{t:this.shape_691}]},1).to({state:[{t:this.shape_694},{t:this.shape_693}]},1).to({state:[{t:this.shape_680},{t:this.shape_679}]},1).to({state:[{t:this.shape_516,p:{x:256.05,y:371.5625}},{t:this.shape_695}]},1).to({state:[{t:this.shape_697},{t:this.shape_696}]},1).to({state:[{t:this.shape_699},{t:this.shape_698}]},1).to({state:[{t:this.shape_701},{t:this.shape_700}]},1).to({state:[{t:this.shape_702},{t:this.shape_661,p:{x:256.0875,y:371.575}}]},1).to({state:[{t:this.shape_704},{t:this.shape_703}]},1).to({state:[{t:this.shape_706},{t:this.shape_705}]},1).to({state:[{t:this.shape_708},{t:this.shape_707}]},1).wait(1));

	// звезда3
	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AAyAAQAAAVgPAOQgPAPgUAAQgTAAgQgPQgOgOAAgVQAAgUAOgPQAQgOATAAQAUAAAPAOQAPAPAAAUg");
	this.shape_709.setTransform(35,325);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#FFFFFF").s().p("AgjAjQgOgOAAgVQAAgTAOgPQAQgPATAAQAUAAAPAPQAPAPAAATQAAAVgPAOQgPAPgUAAQgTAAgQgPg");
	this.shape_710.setTransform(35,325);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgwAAQAAgTAPgOQAOgPATAAQAUAAAOAPQAPAOAAATQAAAUgPAOQgOAPgUAAQgTAAgOgPQgPgOAAgUg");
	this.shape_711.setTransform(35,325);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#FFFFFF").s().p("AghAiQgOgOgBgUQABgTAOgOQAOgOATgBQAUABAOAOQAPAOAAATQAAAUgPAOQgOAPgUAAQgTAAgOgPg");
	this.shape_712.setTransform(35,325);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgtAAQAAgSANgOQAOgNASAAQATAAAOANQANAOAAASQAAATgNAOQgOANgTAAQgSAAgOgNQgNgOAAgTg");
	this.shape_713.setTransform(35,325);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#FFFFFF").s().p("AggAgQgOgNAAgTQAAgSAOgOQAOgOASAAQATAAAOAOQAOAOAAASQAAATgOANQgOAOgTABQgSgBgOgOg");
	this.shape_714.setTransform(35,325);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgsAAQAAgSANgNQANgNASAAQATAAAMANQAOANAAASQAAATgOAMQgMAOgTAAQgSAAgNgOQgNgMAAgTg");
	this.shape_715.setTransform(35,325);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#FFFFFF").s().p("AgfAfQgNgNAAgSQAAgRANgOQAOgNARAAQASAAAOANQANAOAAARQAAASgNANQgOAOgSAAQgRAAgOgOg");
	this.shape_716.setTransform(35,325);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgrAAQAAgRANgNQANgNARAAQASAAAMANQAOANAAARQAAASgOANQgMANgSAAQgRAAgNgNQgNgNAAgSg");
	this.shape_717.setTransform(35,325);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#FFFFFF").s().p("AgeAeQgMgMAAgSQAAgRAMgNQAOgMAQAAQASAAANAMQANANgBARQABASgNAMQgNANgSAAQgQAAgOgNg");
	this.shape_718.setTransform(35,325);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgpAAQAAgQAMgNQANgMAQAAQARAAAMAMQANANAAAQQAAARgNAMQgMANgRAAQgQAAgNgNQgMgMAAgRg");
	this.shape_719.setTransform(35.025,325.025);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#FFFFFF").s().p("AgdAdQgMgMAAgRQAAgQAMgNQANgMAQAAQARAAAMAMQANANAAAQQAAARgNAMQgMANgRAAQgQAAgNgNg");
	this.shape_720.setTransform(35.025,325.025);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgnAAQAAgPALgNQANgLAPAAQAQAAAMALQAMANAAAPQAAAQgMAMQgMAMgQAAQgPAAgNgMQgLgMAAgQg");
	this.shape_721.setTransform(35,325);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#FFFFFF").s().p("AgcAcQgLgMAAgQQAAgQALgMQANgLAPAAQAQAAAMALQAMAMAAAQQAAAQgMAMQgMAMgQAAQgPAAgNgMg");
	this.shape_722.setTransform(35,325);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AglAAQAAgPALgLQALgMAPAAQAQAAALAMQALALAAAPQAAAQgLALQgLAMgQAAQgPAAgLgMQgLgLAAgQg");
	this.shape_723.setTransform(35.025,325);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#FFFFFF").s().p("AgaAbQgLgLAAgQQAAgOALgMQALgMAPAAQAQAAALAMQALAMAAAOQAAAQgLALQgLAMgQAAQgPAAgLgMg");
	this.shape_724.setTransform(35.025,325);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgkAAQAAgOALgLQALgLAOAAQAPAAALALQALALAAAOQAAAPgLALQgLALgPAAQgOAAgLgLQgLgLAAgPg");
	this.shape_725.setTransform(35.025,325.025);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#FFFFFF").s().p("AgZAaQgLgLAAgPQAAgOALgLQALgLAOAAQAPAAALALQALALAAAOQAAAPgLALQgLALgPAAQgOAAgLgLg");
	this.shape_726.setTransform(35.025,325.025);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgiAAQAAgOAKgKQALgKANAAQAOAAALAKQAKAKAAAOQAAAOgKALQgLAKgOAAQgNAAgLgKQgKgLAAgOg");
	this.shape_727.setTransform(35.025,325.025);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#FFFFFF").s().p("AgYAZQgKgLAAgOQAAgOAKgKQALgKANAAQAOAAALAKQAKAKAAAOQAAAOgKALQgLAKgOAAQgNAAgLgKg");
	this.shape_728.setTransform(35.025,325.025);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AggABQAAgOAJgKQAKgKANAAQAOAAAJAKQAKAKAAAOQAAANgKAKQgJAKgOAAQgNAAgKgKQgJgKAAgNg");
	this.shape_729.setTransform(35.025,325);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#FFFFFF").s().p("AgXAXQgJgJAAgNQAAgNAJgLQAKgKANABQAOgBAJAKQAKALAAANQAAANgKAJQgJAKgOAAQgNAAgKgKg");
	this.shape_730.setTransform(35.025,325);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgfABQAAgNAJgKQAKgJAMAAQANAAAJAJQAKAKAAANQAAANgKAJQgJAJgNAAQgMAAgKgJQgJgJAAgNg");
	this.shape_731.setTransform(35.025,325);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#FFFFFF").s().p("AgWAWQgJgJAAgMQAAgNAJgKQAKgJAMAAQANAAAJAJQAKAKAAANQAAAMgKAJQgJAKgNAAQgMAAgKgKg");
	this.shape_732.setTransform(35.025,325);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgdAAQAAgMAIgJQAKgIALAAQAMAAAJAIQAJAJAAAMQAAAMgJAJQgJAJgMAAQgLAAgKgJQgIgJAAgMg");
	this.shape_733.setTransform(35.025,325.025);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#FFFFFF").s().p("AgVAVQgIgJAAgMQAAgMAIgJQAKgIALAAQAMAAAJAIQAJAJAAAMQAAAMgJAJQgJAJgMAAQgLAAgKgJg");
	this.shape_734.setTransform(35.025,325.025);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgbAAQAAgLAIgIQAIgJALAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgLAAgIgJQgIgIAAgMg");
	this.shape_735.setTransform(35.05,325.025);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#FFFFFF").s().p("AgTAUQgJgIABgMQgBgLAJgIQAIgJALAAQALAAAJAJQAIAIAAALQAAAMgIAIQgJAJgLAAQgLAAgIgJg");
	this.shape_736.setTransform(35.05,325.025);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgaABQAAgLAIgIQAIgIAKAAQALAAAIAIQAIAIAAALQAAAKgIAIQgIAIgLAAQgKAAgIgIQgIgIAAgKg");
	this.shape_737.setTransform(35.025,325);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#FFFFFF").s().p("AgSATQgIgIAAgKQAAgLAIgIQAIgIAKAAQALAAAIAIQAIAIAAALQAAAKgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_738.setTransform(35.025,325);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgYAAQAAgJAHgIQAIgHAJAAQAKAAAIAHQAHAIAAAJQAAAKgHAIQgIAHgKAAQgJAAgIgHQgHgIAAgKg");
	this.shape_739.setTransform(35.05,325.025);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#FFFFFF").s().p("AgRASQgHgIAAgKQAAgJAHgIQAIgHAJAAQAKAAAIAHQAHAIAAAJQAAAKgHAIQgIAHgKAAQgJAAgIgHg");
	this.shape_740.setTransform(35.05,325.025);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgWAAQAAgJAGgHQAIgHAIAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgIAAgIgHQgGgHAAgKg");
	this.shape_741.setTransform(35.05,325.025);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#FFFFFF").s().p("AgQARQgHgHAAgKQAAgJAHgHQAIgHAIAAQAJAAAIAHQAGAHABAJQgBAKgGAHQgIAHgJAAQgIAAgIgHg");
	this.shape_742.setTransform(35.05,325.025);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgVAAQAAgIAGgHQAHgGAIAAQAJAAAHAGQAGAHAAAIQAAAJgGAHQgHAGgJAAQgIAAgHgGQgGgHAAgJg");
	this.shape_743.setTransform(35.05,325.025);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#FFFFFF").s().p("AgPAQQgGgHAAgJQAAgIAGgHQAHgGAIAAQAJAAAHAGQAGAHAAAIQAAAJgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape_744.setTransform(35.05,325.025);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgTAAQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGQgGgGAAgIg");
	this.shape_745.setTransform(35.05,325.025);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#FFFFFF").s().p("AgOAOQgFgGAAgIQAAgHAFgGQAHgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgHgGg");
	this.shape_746.setTransform(35.05,325.025);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AATAAQAAAIgGAFQgFAGgIAAQgHAAgFgGQgFgFAAgIQAAgHAFgFQAFgGAHAAQAIAAAFAGQAGAFAAAHg");
	this.shape_747.setTransform(35.05,325.025);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#FFFFFF").s().p("AgNANQgEgFAAgIQAAgHAEgFQAHgGAGAAQAHAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgHAAQgGAAgHgGg");
	this.shape_748.setTransform(35.05,325.025);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgSAAQAAgJAFgFQAVgGAGAGQAGAFAAAJQAAAHgGAGQgGAFgIAAQgHAAgGgFQgFgGAAgHg");
	this.shape_749.setTransform(35.05,325.175);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#FFFFFF").s().p("AgNANQgGgGABgHQgBgJAGgFQAVgGAFAGQAHAFgBAJQABAHgHAGQgFAFgIAAQgHAAgGgFg");
	this.shape_750.setTransform(35.05,325.175);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgTAAQAAgJAFgGQAXgGAGAGQAGAGAAAJQAAAHgGAGQgGAGgJAAQgHAAgHgGQgFgGAAgHg");
	this.shape_751.setTransform(35.05,325.175);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#FFFFFF").s().p("AgOANQgGgGABgHQgBgJAGgGQAXgGAGAGQAFAGAAAJQAAAHgFAGQgHAGgIAAQgIAAgGgGg");
	this.shape_752.setTransform(35.05,325.175);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgUAAQAAgJAGgHQAXgGAGAGQAHAHAAAJQAAAIgHAGQgGAGgJAAQgHAAgHgGQgGgGAAgIg");
	this.shape_753.setTransform(35.05,325.1875);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#FFFFFF").s().p("AgPAOQgFgGAAgIQAAgJAFgHQAYgGAGAGQAHAHgBAJQABAIgHAGQgGAGgJAAQgHAAgIgGg");
	this.shape_754.setTransform(35.05,325.1875);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgWAAQAAgKAHgHQAYgGAHAGQAHAHAAAKQAAAIgHAHQgHAGgJAAQgIAAgHgGQgHgHAAgIg");
	this.shape_755.setTransform(35.05,325.1875);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#FFFFFF").s().p("AgQAPQgFgHgBgIQABgKAFgHQAZgGAHAGQAHAHgBAKQABAIgHAHQgHAGgJAAQgIAAgIgGg");
	this.shape_756.setTransform(35.05,325.1875);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgWAAQAAgLAGgHQAagHAHAHQAHAHAAALQAAAIgHAHQgHAHgKAAQgIAAgIgHQgGgHAAgIg");
	this.shape_757.setTransform(35.05,325.225);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#FFFFFF").s().p("AgQAPQgHgHAAgIQAAgLAHgHQAZgHAIAHQAGAHABALQgBAIgGAHQgIAHgJAAQgIAAgIgHg");
	this.shape_758.setTransform(35.05,325.225);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgXAAQAAgLAGgHQAbgIAIAIQAHAHAAALQAAAIgHAIQgIAHgKAAQgJAAgIgHQgGgIAAgIg");
	this.shape_759.setTransform(35.05,325.2375);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#FFFFFF").s().p("AgRAQQgGgIgBgIQABgLAGgHQAbgIAIAIQAGAHABALQgBAIgGAIQgIAHgKAAQgJAAgIgHg");
	this.shape_760.setTransform(35.05,325.2375);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgYAAQAAgMAHgHQAcgIAHAIQAIAHAAAMQAAAJgIAIQgHAHgLAAQgJAAgIgHQgHgIAAgJg");
	this.shape_761.setTransform(35.05,325.2375);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#FFFFFF").s().p("AgRARQgIgIAAgJQAAgMAIgHQAcgIAHAIQAIAHAAAMQAAAJgIAIQgHAHgLAAQgKAAgHgHg");
	this.shape_762.setTransform(35.05,325.2375);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgZAAQAAgMAHgIQAdgIAIAIQAIAIAAAMQAAAJgIAIQgIAIgLAAQgJAAgJgIQgHgIAAgJg");
	this.shape_763.setTransform(35.05,325.25);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#FFFFFF").s().p("AgSARQgIgIAAgKQAAgLAIgIQAdgIAIAIQAHAIABALQgBAKgHAIQgIAIgLAAQgKAAgIgIg");
	this.shape_764.setTransform(35.05,325.25);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgbAAQAAgNAIgIQAfgIAIAIQAIAIAAANQAAAJgIAJQgIAIgMAAQgKAAgJgIQgIgJAAgJg");
	this.shape_765.setTransform(35.05,325.25);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#FFFFFF").s().p("AgTARQgHgHAAgLQAAgMAHgIQAfgIAHAIQAJAIgBAMQABALgJAHQgHAJgMAAQgKAAgJgJg");
	this.shape_766.setTransform(35.05,325.25);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgbgBQAAgMAIgJQAfgIAJAIQAIAJAAAMQAAALgIAIQgJAJgMAAQgKAAgJgJQgIgIAAgLg");
	this.shape_767.setTransform(35.05,325.275);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#FFFFFF").s().p("AgTASQgJgIABgLQgBgMAJgJQAfgIAIAIQAJAJgBAMQABALgJAIQgIAJgMAAQgKAAgJgJg");
	this.shape_768.setTransform(35.05,325.275);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgcgBQAAgNAIgIQAggJAJAJQAJAIAAANQAAALgJAJQgJAJgMAAQgLAAgJgJQgIgJAAgLg");
	this.shape_769.setTransform(35.05,325.2875);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#FFFFFF").s().p("AgUATQgIgJAAgLQAAgNAIgIQAggJAJAJQAIAIAAANQAAALgIAJQgJAJgMAAQgLAAgJgJg");
	this.shape_770.setTransform(35.05,325.2875);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgdgBQAAgNAIgJQAigJAJAJQAJAJAAANQAAAMgJAJQgJAJgNAAQgMAAgJgJQgIgJAAgMg");
	this.shape_771.setTransform(35.05,325.2875);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#FFFFFF").s().p("AgVAUQgJgJABgMQgBgNAJgJQAigJAIAJQAJAJAAANQAAAMgJAJQgIAJgNAAQgLAAgKgJg");
	this.shape_772.setTransform(35.05,325.2875);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgegBQAAgOAIgJQAjgJAKAJQAJAJAAAOQAAAMgJAJQgKAJgNAAQgMAAgKgJQgIgJAAgMg");
	this.shape_773.setTransform(35.05,325.3);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#FFFFFF").s().p("AgWAUQgJgJAAgMQAAgOAJgJQAjgJAJAJQAJAJAAAOQAAAMgJAJQgJAJgNAAQgLAAgLgJg");
	this.shape_774.setTransform(35.05,325.3);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgfgBQAAgOAJgKQAkgJAJAJQAKAKAAAOQAAAMgKAKQgJAKgOAAQgMAAgKgKQgJgKAAgMg");
	this.shape_775.setTransform(35.05,325.3);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#FFFFFF").s().p("AgXAVQgIgKgBgMQABgOAIgKQAkgJAKAJQAKAKAAAOQAAAMgKAKQgKAJgNAAQgMAAgLgJg");
	this.shape_776.setTransform(35.05,325.3);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgggBQAAgPAJgKQAlgJAKAJQAKAKAAAPQAAANgKAKQgKAKgOAAQgMAAgLgKQgJgKAAgNg");
	this.shape_777.setTransform(35.05,325.3375);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#FFFFFF").s().p("AgYAWQgIgKgBgNQABgPAIgKQAmgJAKAJQAKAKAAAPQAAANgKAKQgKAKgOAAQgNAAgLgKg");
	this.shape_778.setTransform(35.05,325.3375);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AghgBQAAgQAJgKQAngKAKAKQAKAKAAAQQAAAMgKALQgKALgPAAQgNAAgLgLQgJgLAAgMg");
	this.shape_779.setTransform(35.05,325.35);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#FFFFFF").s().p("AgYAWQgKgKAAgNQAAgPAKgLQAngJAKAJQAJALABAPQgBANgJAKQgKAKgPAAQgNAAgLgKg");
	this.shape_780.setTransform(35.05,325.35);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgigBQAAgQAJgLQAogKALAKQAKALAAAQQAAANgKALQgLAKgPAAQgNAAgMgKQgJgLAAgNg");
	this.shape_781.setTransform(35.05,325.35);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#FFFFFF").s().p("AgZAXQgJgLAAgNQAAgQAJgLQAogJALAJQAKALAAAQQAAANgKALQgLAKgPAAQgOAAgLgKg");
	this.shape_782.setTransform(35.05,325.35);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgjgBQAAgQAKgLQAogLALALQALALAAAQQAAANgLALQgLALgPAAQgNAAgMgLQgKgLAAgNg");
	this.shape_783.setTransform(35.05,325.3625);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#FFFFFF").s().p("AgaAXQgKgLABgNQgBgQAKgLQApgLALALQAKALABAQQgBANgKALQgLALgPAAQgOAAgMgLg");
	this.shape_784.setTransform(35.05,325.3625);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgkgBQAAgRAJgLQArgLALALQALALAAARQAAAOgLALQgLALgQAAQgOAAgNgLQgJgLAAgOg");
	this.shape_785.setTransform(35.05,325.3625);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#FFFFFF").s().p("AgaAYQgLgLABgOQgBgRALgLQAqgLALALQAKALAAARQAAAOgKALQgLALgQAAQgOAAgMgLg");
	this.shape_786.setTransform(35.05,325.3625);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AAnAAQAAAQgLAMQgMALgQAAQgOAAgNgLQgKgMAAgQQAAgQAKgLQANgLAOAAQAQAAAMALQALALAAAQg");
	this.shape_787.setTransform(35.05,325.1);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#FFFFFF").s().p("AgbAcQgKgMAAgPQAAgQAKgMQAMgLAPAAQAQAAALALQAMAMgBAQQABAPgMAMQgLALgQAAQgPAAgMgLg");
	this.shape_788.setTransform(35.05,325.1);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgigBQAAgQAJgLQAogKALAKQAKALAAAQQAAAOgKAKQgLAKgPAAQgNAAgMgKQgJgKAAgOg");
	this.shape_789.setTransform(35.05,325.35);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#FFFFFF").s().p("AgZAXQgJgKAAgOQAAgQAJgLQAogJALAJQAKALAAAQQAAAOgKAKQgLAKgPAAQgOAAgLgKg");
	this.shape_790.setTransform(35.05,325.35);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgigBQAAgPAKgLQAmgJALAJQAKALAAAPQAAANgKALQgLAKgOAAQgNAAgLgKQgKgLAAgNg");
	this.shape_791.setTransform(35.075,325.3375);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#FFFFFF").s().p("AgYAXQgKgLAAgNQAAgPAKgLQAmgJALAJQAKALAAAPQAAANgKALQgLAKgOAAQgNAAgLgKg");
	this.shape_792.setTransform(35.075,325.3375);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AghgBQAAgPAJgKQAmgKAKAKQAKAKAAAPQAAAMgKALQgKAKgOAAQgNAAgLgKQgJgLAAgMg");
	this.shape_793.setTransform(35.075,325.3625);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#FFFFFF").s().p("AgYAWQgJgLAAgMQAAgPAJgKQAmgKAKAKQAKAKAAAPQAAAMgKALQgKAKgOAAQgNAAgLgKg");
	this.shape_794.setTransform(35.075,325.3625);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgggBQAAgOAJgKQAlgKAKAKQAJAKAAAOQAAAMgJAKQgKAKgOAAQgMAAgLgKQgJgKAAgMg");
	this.shape_795.setTransform(35.05,325.3375);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#FFFFFF").s().p("AgXAVQgJgKAAgMQAAgOAJgKQAlgKAKAKQAJAKAAAOQAAAMgJAKQgLAKgNAAQgMAAgLgKg");
	this.shape_796.setTransform(35.05,325.3375);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgfgBQAAgOAJgKQAkgJAJAJQAJAKAAAOQAAAMgJAKQgJAJgOAAQgMAAgKgJQgJgKAAgMg");
	this.shape_797.setTransform(35.05,325.325);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#FFFFFF").s().p("AgWAVQgJgKAAgMQAAgOAJgKQAkgJAJAJQAJAKAAAOQAAAMgJAKQgKAJgNAAQgLAAgLgJg");
	this.shape_798.setTransform(35.05,325.325);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgegBQAAgOAIgJQAjgJAKAJQAIAJAAAOQAAAMgIAJQgKAJgNAAQgMAAgKgJQgIgJAAgMg");
	this.shape_799.setTransform(35.05,325.325);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#FFFFFF").s().p("AgWAUQgIgJAAgMQAAgOAIgJQAjgJAJAJQAJAJAAAOQAAAMgJAJQgJAJgNAAQgLAAgLgJg");
	this.shape_800.setTransform(35.05,325.325);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgdgBQAAgNAJgJQAhgJAJAJQAIAJAAANQAAALgIAJQgJAJgNAAQgLAAgJgJQgJgJAAgLg");
	this.shape_801.setTransform(35.05,325.3125);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#FFFFFF").s().p("AgUATQgJgJAAgLQAAgNAJgJQAhgJAIAJQAJAJAAANQAAALgJAJQgIAJgNAAQgLAAgJgJg");
	this.shape_802.setTransform(35.05,325.3125);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgcgBQAAgNAIgIQAggJAJAJQAIAIAAANQAAALgIAJQgJAIgMAAQgLAAgJgIQgIgJAAgLg");
	this.shape_803.setTransform(35.075,325.3125);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#FFFFFF").s().p("AgUATQgIgJAAgLQAAgNAIgIQAggJAJAJQAIAIAAANQAAALgIAJQgJAIgMAAQgLAAgJgIg");
	this.shape_804.setTransform(35.075,325.3125);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgbAAQAAgNAHgIQAggIAIAIQAIAIAAANQAAAKgIAJQgIAIgMAAQgKAAgKgIQgHgJAAgKg");
	this.shape_805.setTransform(35.075,325.3);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#FFFFFF").s().p("AgUASQgHgIAAgKQAAgNAHgJQAggHAIAHQAIAJAAANQAAAKgIAIQgIAJgMAAQgKAAgKgJg");
	this.shape_806.setTransform(35.075,325.3);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgaAAQAAgMAHgJQAegHAIAHQAIAJAAAMQAAAKgIAIQgIAIgLAAQgKAAgJgIQgHgIAAgKg");
	this.shape_807.setTransform(35.075,325.2875);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#FFFFFF").s().p("AgTASQgHgIAAgKQAAgMAHgJQAegHAIAHQAIAJAAAMQAAAKgIAIQgIAIgLAAQgKAAgJgIg");
	this.shape_808.setTransform(35.075,325.2875);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgZAAQAAgMAHgIQAdgHAIAHQAHAIAAAMQAAAJgHAIQgIAIgLAAQgKAAgIgIQgHgIAAgJg");
	this.shape_809.setTransform(35.075,325.2875);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#FFFFFF").s().p("AgSARQgHgIAAgJQAAgMAHgIQAdgHAIAHQAHAIAAAMQAAAJgHAIQgIAIgLAAQgKAAgIgIg");
	this.shape_810.setTransform(35.075,325.2875);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgYAAQAAgMAHgHQAcgHAHAHQAHAHAAAMQAAAJgHAIQgHAHgLAAQgJAAgIgHQgHgIAAgJg");
	this.shape_811.setTransform(35.075,325.275);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#FFFFFF").s().p("AgRARQgHgIAAgJQAAgMAHgHQAcgHAHAHQAHAHAAAMQAAAJgHAIQgHAHgLAAQgJAAgIgHg");
	this.shape_812.setTransform(35.075,325.275);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgXAAQAAgLAGgIQAbgGAIAGQAGAIAAALQAAAJgGAHQgIAHgKAAQgJAAgIgHQgGgHAAgJg");
	this.shape_813.setTransform(35.075,325.2875);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#FFFFFF").s().p("AgRAQQgGgHAAgJQAAgLAGgIQAbgGAIAGQAGAIAAALQAAAJgGAHQgIAHgKAAQgJAAgIgHg");
	this.shape_814.setTransform(35.075,325.2875);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgWAAQAAgLAGgHQAagHAHAHQAHAHAAALQAAAIgHAHQgHAHgJAAQgJAAgIgHQgGgHAAgIg");
	this.shape_815.setTransform(35.05,325.275);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#FFFFFF").s().p("AgQAPQgHgHAAgIQAAgLAHgHQAagHAHAHQAHAHAAALQAAAIgHAHQgHAHgKAAQgIAAgIgHg");
	this.shape_816.setTransform(35.05,325.275);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgWAAQAAgKAHgHQAYgHAHAHQAHAHAAAKQAAAIgHAHQgHAGgJAAQgIAAgHgGQgHgHAAgIg");
	this.shape_817.setTransform(35.075,325.2625);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#FFFFFF").s().p("AgPAPQgHgHAAgIQAAgKAHgHQAYgHAHAHQAHAHAAAKQAAAIgHAHQgHAGgJAAQgIAAgHgGg");
	this.shape_818.setTransform(35.075,325.2625);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgVAAQAAgKAGgHQAYgGAHAGQAGAHAAAKQAAAIgGAGQgHAHgJAAQgIAAgHgHQgGgGAAgIg");
	this.shape_819.setTransform(35.075,325.25);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#FFFFFF").s().p("AgPAOQgGgGAAgIQAAgKAGgHQAYgFAHAFQAGAHAAAKQAAAIgGAGQgHAGgJABQgIgBgHgGg");
	this.shape_820.setTransform(35.075,325.25);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgUAAQAAgKAGgFQAXgHAGAHQAGAFAAAKQAAAIgGAGQgGAFgJAAQgHAAgHgFQgGgGAAgIg");
	this.shape_821.setTransform(35.075,325.25);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#FFFFFF").s().p("AgOAOQgGgHAAgHQAAgKAGgFQAXgHAGAHQAGAFAAAKQAAAHgGAHQgGAFgJABQgHgBgHgFg");
	this.shape_822.setTransform(35.075,325.25);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AAUAAQAAAIgGAGQgGAGgIAAQgHAAgGgGQgGgGAAgIQAAgIAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAIg");
	this.shape_823.setTransform(35.075,325.1);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#FFFFFF").s().p("AgNAOQgGgGAAgHQAAgIAGgHQAGgFAHAAQAIAAAGAFQAGAHAAAIQAAAHgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_824.setTransform(35.075,325.1);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgVAAQAAgKAGgHQAYgGAHAGQAGAHAAAKQAAAIgGAGQgHAHgJAAQgHAAgIgHQgGgGAAgIg");
	this.shape_825.setTransform(35.075,325.25);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#FFFFFF").s().p("AgPAOQgGgGAAgIQAAgKAGgHQAYgFAHAFQAGAHAAAKQAAAIgGAGQgHAGgJABQgHgBgIgGg");
	this.shape_826.setTransform(35.075,325.25);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#FFFFFF").s().p("AgPAPQgHgHAAgIQAAgKAHgHQAYgHAHAHQAGAHAAAKQAAAIgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape_827.setTransform(35.1,325.2625);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgXAAQAAgLAHgHQAZgGAIAGQAHAHAAALQAAAIgHAIQgIAGgJAAQgJAAgHgGQgHgIAAgIg");
	this.shape_828.setTransform(35.1,325.2875);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#FFFFFF").s().p("AgQAQQgGgIAAgIQAAgLAGgHQAZgGAIAGQAGAHAAALQAAAIgGAIQgIAGgJAAQgIAAgIgGg");
	this.shape_829.setTransform(35.1,325.2875);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgXAAQAAgLAHgIQAagGAIAGQAHAIAAALQAAAJgHAHQgIAHgJAAQgJAAgIgHQgHgHAAgJg");
	this.shape_830.setTransform(35.1,325.2875);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#FFFFFF").s().p("AgQAQQgIgHABgJQgBgLAIgIQAagGAHAGQAIAIgBALQABAJgIAHQgHAHgJAAQgKAAgHgHg");
	this.shape_831.setTransform(35.1,325.2875);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgYAAQAAgMAHgHQAcgHAIAHQAHAHAAAMQAAAJgHAIQgIAHgKAAQgKAAgIgHQgHgIAAgJg");
	this.shape_832.setTransform(35.1,325.3);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#FFFFFF").s().p("AgSARQgGgIAAgJQAAgMAGgHQAdgIAIAIQAGAHAAAMQAAAJgGAIQgJAHgJAAQgKAAgJgHg");
	this.shape_833.setTransform(35.1,325.3);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgZAAQAAgMAHgIQAdgIAIAIQAHAIAAAMQAAAJgHAIQgIAIgLAAQgKAAgIgIQgHgIAAgJg");
	this.shape_834.setTransform(35.1,325.3125);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#FFFFFF").s().p("AgSARQgIgIABgJQgBgMAIgIQAdgIAIAIQAIAIgBAMQABAJgIAIQgIAIgKAAQgKAAgJgIg");
	this.shape_835.setTransform(35.1,325.3125);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgaAAQAAgNAHgIQAegIAJAIQAHAIAAANQAAAKgHAIQgJAIgLAAQgKAAgJgIQgHgIAAgKg");
	this.shape_836.setTransform(35.125,325.3125);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#FFFFFF").s().p("AgTASQgHgIAAgKQAAgNAHgIQAegIAJAIQAHAIAAANQAAAKgHAIQgJAIgLAAQgKAAgJgIg");
	this.shape_837.setTransform(35.125,325.3125);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgbAAQAAgNAHgJQAggIAIAIQAIAJAAANQAAAKgIAJQgIAIgMAAQgKAAgKgIQgHgJAAgKg");
	this.shape_838.setTransform(35.125,325.325);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#FFFFFF").s().p("AgUATQgHgJAAgKQAAgNAHgJQAggIAIAIQAIAJAAANQAAAKgIAJQgIAIgMAAQgKAAgKgIg");
	this.shape_839.setTransform(35.125,325.325);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgcgBQAAgNAIgJQAggIAJAIQAIAJAAANQAAALgIAJQgJAJgMAAQgKAAgKgJQgIgJAAgLg");
	this.shape_840.setTransform(35.125,325.35);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#FFFFFF").s().p("AgUAUQgIgKAAgLQAAgMAIgJQAggJAJAJQAIAJAAAMQAAALgIAKQgJAHgMABQgKgBgKgHg");
	this.shape_841.setTransform(35.125,325.35);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgdAAQAAgOAJgJQAhgIAJAIQAIAJAAAOQAAALgIAJQgJAIgNAAQgKAAgKgIQgJgJAAgLg");
	this.shape_842.setTransform(35.1,325.325);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#FFFFFF").s().p("AgVAUQgIgJAAgLQAAgOAIgJQAigIAJAIQAIAJAAAOQAAALgIAJQgKAIgLAAQgLAAgLgIg");
	this.shape_843.setTransform(35.1,325.325);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgeAAQAAgOAIgKQAjgIAKAIQAIAKAAAOQAAALgIAKQgKAIgNAAQgLAAgLgIQgIgKAAgLg");
	this.shape_844.setTransform(35.1,325.3375);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#FFFFFF").s().p("AgWAVQgIgKAAgLQAAgOAIgKQAjgIAJAIQAJAKAAAOQAAALgJAKQgJAIgMAAQgMAAgLgIg");
	this.shape_845.setTransform(35.1,325.3375);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgfAAQAAgPAJgKQAjgIAKAIQAJAKAAAPQAAAMgJAKQgKAIgNAAQgLAAgLgIQgJgKAAgMg");
	this.shape_846.setTransform(35.125,325.3375);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#FFFFFF").s().p("AgWAWQgJgKAAgMQAAgPAJgKQAjgIAKAIQAJAKAAAPQAAAMgJAKQgKAIgNAAQgLAAgLgIg");
	this.shape_847.setTransform(35.125,325.3375);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgggBQAAgOAJgLQAlgJAKAJQAJALAAAOQAAANgJAKQgKAJgOAAQgMAAgLgJQgJgKAAgNg");
	this.shape_848.setTransform(35.125,325.35);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#FFFFFF").s().p("AgXAWQgJgKAAgNQAAgOAJgKQAlgKAKAKQAJAKAAAOQAAANgJAKQgKAJgOAAQgMAAgLgJg");
	this.shape_849.setTransform(35.125,325.35);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AghAAQAAgQAKgKQAlgKALAKQAJAKAAAQQAAAMgJALQgLAJgNAAQgNAAgLgJQgKgLAAgMg");
	this.shape_850.setTransform(35.125,325.3625);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#FFFFFF").s().p("AgXAXQgKgLAAgMQAAgQAKgKQAlgKALAKQAJAKAAAQQAAAMgJALQgLAJgNAAQgNAAgLgJg");
	this.shape_851.setTransform(35.125,325.3625);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgiAAQAAgQAKgLQAngKAKAKQAKALAAAQQAAANgKAKQgKAKgOAAQgNAAgMgKQgKgKAAgNg");
	this.shape_852.setTransform(35.125,325.3625);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#FFFFFF").s().p("AgYAXQgKgKAAgNQAAgQAKgLQAngKAKAKQAKALAAAQQAAANgKAKQgKAKgOAAQgNAAgMgKg");
	this.shape_853.setTransform(35.125,325.3625);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgjAAQAAgRAKgLQAogJALAJQAKALAAARQAAANgKALQgLAKgOAAQgOAAgMgKQgKgLAAgNg");
	this.shape_854.setTransform(35.125,325.3875);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#FFFFFF").s().p("AgZAYQgKgLAAgNQAAgRAKgLQAogJALAJQAKALAAARQAAANgKALQgLAKgOAAQgOAAgMgKg");
	this.shape_855.setTransform(35.125,325.3875);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgjAAQAAgRAKgLQAogKALAKQAKALAAARQAAANgKAMQgLAKgOAAQgOAAgMgKQgKgMAAgNg");
	this.shape_856.setTransform(35.15,325.4);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#FFFFFF").s().p("AgaAZQgKgMABgNQgBgRAKgLQApgLALALQALALgBARQABANgLAMQgLAKgPAAQgNAAgNgKg");
	this.shape_857.setTransform(35.15,325.4);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AglAAQAAgRAKgMQArgKAMAKQAKAMAAARQAAAOgKAMQgMAKgPAAQgOAAgOgKQgKgMAAgOg");
	this.shape_858.setTransform(35.15,325.4);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#FFFFFF").s().p("AgbAaQgKgNABgNQgBgRAKgMQAqgLAMALQALAMgBARQABANgLANQgMAKgPgBQgNABgOgKg");
	this.shape_859.setTransform(35.15,325.4);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AAnABQAAAQgLAMQgMAKgPAAQgPAAgNgKQgKgMAAgQQAAgQAKgMQANgLAPAAQAPAAAMALQALAMAAAQg");
	this.shape_860.setTransform(35.15,325.15);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#FFFFFF").s().p("AgbAcQgKgLAAgQQAAgQAKgNQANgKAOAAQAQAAAMAKQAKANAAAQQAAAQgKALQgMALgQAAQgOAAgNgLg");
	this.shape_861.setTransform(35.15,325.15);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AglgBQAAgRAKgLQArgLAMALQAKALAAARQAAAOgKAMQgMAKgPAAQgOAAgOgKQgKgMAAgOg");
	this.shape_862.setTransform(35.15,325.4125);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#FFFFFF").s().p("AgbAZQgKgMABgOQgBgRAKgLQAqgLAMALQALALgBARQABAOgLAMQgMAKgPAAQgNAAgOgKg");
	this.shape_863.setTransform(35.15,325.4125);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgjAAQAAgQAKgMQAogJALAJQAJAMAAAQQAAANgJALQgLAKgPAAQgNAAgMgKQgKgLAAgNg");
	this.shape_864.setTransform(35.15,325.3875);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#FFFFFF").s().p("AgZAYQgKgLAAgNQAAgQAKgMQAogJALAJQAJAMABAQQgBANgJALQgLAKgPAAQgNAAgMgKg");
	this.shape_865.setTransform(35.15,325.3875);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AghAAQAAgQAJgLQAngJAKAJQAKALAAAQQAAANgKAKQgKAKgOAAQgOAAgLgKQgJgKAAgNg");
	this.shape_866.setTransform(35.15,325.3875);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#FFFFFF").s().p("AgYAXQgKgKAAgNQAAgQAKgLQAngJAKAJQAKALAAAQQAAANgKAKQgKAKgPAAQgMAAgMgKg");
	this.shape_867.setTransform(35.15,325.3875);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AggAAQAAgQAJgKQAlgJALAJQAJAKAAAQQAAAMgJALQgLAJgNAAQgNAAgLgJQgJgLAAgMg");
	this.shape_868.setTransform(35.15,325.3875);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#FFFFFF").s().p("AgYAXQgIgLgBgMQABgQAIgKQAmgJALAJQAIAKABAQQgBAMgIALQgLAJgOAAQgMAAgMgJg");
	this.shape_869.setTransform(35.15,325.3875);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AggAAQAAgPAJgKQAlgJAKAJQAJAKAAAPQAAAMgJAKQgKAJgNAAQgNAAgLgJQgJgKAAgMg");
	this.shape_870.setTransform(35.15,325.375);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#FFFFFF").s().p("AgXAWQgIgKgBgMQABgPAIgKQAkgJALAJQAIAKABAPQgBAMgIAKQgLAJgNAAQgMAAgLgJg");
	this.shape_871.setTransform(35.15,325.375);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgeAAQAAgPAIgJQAjgJAKAJQAIAJAAAPQAAALgIAKQgKAJgMAAQgMAAgLgJQgIgKAAgLg");
	this.shape_872.setTransform(35.15,325.375);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#FFFFFF").s().p("AgWAVQgJgKABgLQgBgPAJgJQAjgJAKAJQAJAJAAAPQAAALgJAKQgKAJgNAAQgLAAgLgJg");
	this.shape_873.setTransform(35.15,325.375);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgeAAQAAgOAJgKQAigIAJAIQAIAKAAAOQAAALgIAJQgJAJgNAAQgLAAgKgJQgJgJAAgLg");
	this.shape_874.setTransform(35.15,325.3625);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#FFFFFF").s().p("AgVAUQgJgJABgLQgBgOAJgKQAigIAJAIQAJAKgBAOQABALgJAJQgJAJgNAAQgLAAgKgJg");
	this.shape_875.setTransform(35.15,325.3625);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgdAAQAAgNAIgKQAhgIAJAIQAIAKAAANQAAALgIAJQgJAIgMAAQgLAAgKgIQgIgJAAgLg");
	this.shape_876.setTransform(35.15,325.35);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#FFFFFF").s().p("AgUAUQgJgJABgLQgBgNAJgKQAhgIAIAIQAIAKAAANQAAALgIAJQgIAIgNAAQgLAAgJgIg");
	this.shape_877.setTransform(35.15,325.35);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgcAAQAAgNAIgJQAggIAJAIQAIAJAAANQAAAKgIAJQgJAIgMAAQgKAAgKgIQgIgJAAgKg");
	this.shape_878.setTransform(35.175,325.3625);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#FFFFFF").s().p("AgUATQgIgJAAgKQAAgNAIgJQAggIAJAIQAIAJAAANQAAAKgIAJQgJAIgMAAQgKAAgKgIg");
	this.shape_879.setTransform(35.175,325.3625);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgbgBQAAgMAIgIQAegIAJAIQAIAIAAAMQAAALgIAIQgJAIgLAAQgKAAgJgIQgIgIAAgLg");
	this.shape_880.setTransform(35.175,325.3625);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#FFFFFF").s().p("AgTASQgIgIAAgLQAAgMAIgIQAegIAJAIQAIAIAAAMQAAALgIAIQgJAIgLAAQgKAAgJgIg");
	this.shape_881.setTransform(35.175,325.3625);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgagBQAAgMAHgIQAegHAIAHQAIAIAAAMQAAAKgIAJQgIAHgLAAQgJAAgKgHQgHgJAAgKg");
	this.shape_882.setTransform(35.175,325.35);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#FFFFFF").s().p("AgTASQgHgJAAgKQAAgMAHgIQAegGAIAGQAIAIAAAMQAAAKgIAJQgIAHgLAAQgJAAgKgHg");
	this.shape_883.setTransform(35.175,325.35);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgZAAQAAgMAHgIQAdgGAHAGQAIAIAAAMQAAAJgIAIQgHAHgLAAQgJAAgJgHQgHgIAAgJg");
	this.shape_884.setTransform(35.175,325.3375);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#FFFFFF").s().p("AgSARQgHgIAAgJQAAgMAHgIQAdgGAHAGQAIAIAAAMQAAAJgIAIQgHAHgLAAQgJAAgJgHg");
	this.shape_885.setTransform(35.175,325.3375);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgYAAQAAgLAHgIQAbgGAIAGQAHAIAAALQAAAJgHAIQgIAGgKAAQgJAAgIgGQgHgIAAgJg");
	this.shape_886.setTransform(35.175,325.3375);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#FFFFFF").s().p("AgRARQgHgIAAgJQAAgLAHgIQAbgGAIAGQAHAIAAALQAAAJgHAIQgIAGgKAAQgJAAgIgGg");
	this.shape_887.setTransform(35.175,325.3375);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgXAAQAAgLAHgHQAagGAHAGQAHAHAAALQAAAIgHAIQgHAGgKAAQgIAAgIgGQgHgIAAgIg");
	this.shape_888.setTransform(35.175,325.3375);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#FFFFFF").s().p("AgQAQQgHgIAAgIQAAgLAHgHQAagGAHAGQAHAHAAALQAAAIgHAIQgHAGgKAAQgIAAgIgGg");
	this.shape_889.setTransform(35.175,325.3375);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgWAAQAAgKAGgHQAZgGAHAGQAHAHAAAKQAAAIgHAHQgHAGgJAAQgIAAgIgGQgGgHAAgIg");
	this.shape_890.setTransform(35.175,325.325);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#FFFFFF").s().p("AgQAPQgGgHAAgIQAAgKAGgHQAZgGAHAGQAHAHAAAKQAAAIgHAHQgHAGgJAAQgIAAgIgGg");
	this.shape_891.setTransform(35.175,325.325);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgVAAQAAgKAGgGQAYgGAGAGQAHAGAAAKQAAAIgHAGQgGAGgJAAQgHAAgIgGQgGgGAAgIg");
	this.shape_892.setTransform(35.175,325.325);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#FFFFFF").s().p("AgPAOQgGgGAAgIQAAgKAGgGQAYgGAGAGQAHAGAAAKQAAAIgHAGQgGAGgJAAQgHAAgIgGg");
	this.shape_893.setTransform(35.175,325.325);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgUAAQAAgKAGgGQAXgFAGAFQAGAGAAAKQAAAHgGAHQgGAFgJAAQgHAAgHgFQgGgHAAgHg");
	this.shape_894.setTransform(35.175,325.3125);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#FFFFFF").s().p("AgOAOQgGgHAAgHQAAgKAGgGQAXgFAGAFQAGAGAAAKQAAAHgGAHQgGAFgJAAQgHAAgHgFg");
	this.shape_895.setTransform(35.175,325.3125);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgTAAQAAgJAGgGQAVgFAGAFQAGAGAAAJQAAAHgGAGQgGAGgIAAQgHAAgGgGQgGgGAAgHg");
	this.shape_896.setTransform(35.175,325.3);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#FFFFFF").s().p("AgNANQgGgGAAgHQAAgJAGgGQAVgFAGAFQAGAGAAAJQAAAHgGAGQgGAFgIAAQgHAAgGgFg");
	this.shape_897.setTransform(35.175,325.3);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AATAAQAAAIgGAGQgFAFgIAAQgGAAgHgFQgFgGAAgIQAAgHAFgGQAHgFAGAAQAIAAAFAFQAGAGAAAHg");
	this.shape_898.setTransform(35.175,325.175);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#FFFFFF").s().p("AgNAOQgFgGAAgIQAAgHAFgGQAHgFAGAAQAIAAAFAFQAGAGAAAHQAAAIgGAGQgFAFgIAAQgGAAgHgFg");
	this.shape_899.setTransform(35.175,325.175);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgTAAQAAgJAGgGQAVgFAGAFQAGAGAAAJQAAAHgGAGQgGAFgIAAQgHAAgGgFQgGgGAAgHg");
	this.shape_900.setTransform(35.175,325.3125);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgWgBQAAgKAGgGQAZgGAHAGQAHAGAAAKQAAAJgHAHQgHAGgJAAQgIAAgIgGQgGgHAAgJg");
	this.shape_901.setTransform(35.2,325.35);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#FFFFFF").s().p("AgPAPQgHgIAAgIQAAgJAHgHQAYgGAHAGQAGAHAAAJQAAAIgGAIQgHAGgJAAQgIAAgHgGg");
	this.shape_902.setTransform(35.2,325.35);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgXgBQAAgKAGgHQAagGAHAGQAHAHAAAKQAAAJgHAHQgHAHgJAAQgIAAgJgHQgGgHAAgJg");
	this.shape_903.setTransform(35.2,325.35);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#FFFFFF").s().p("AgQAPQgHgHAAgJQAAgKAHgHQAagGAGAGQAIAHgBAKQABAJgIAHQgHAHgIAAQgJAAgIgHg");
	this.shape_904.setTransform(35.2,325.35);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgYgBQAAgLAHgHQAbgGAHAGQAHAHAAALQAAAJgHAIQgHAHgKAAQgJAAgIgHQgHgIAAgJg");
	this.shape_905.setTransform(35.2,325.3625);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#FFFFFF").s().p("AgRAQQgGgIAAgJQAAgLAGgHQAbgGAHAGQAIAHgBALQABAJgIAIQgHAHgJAAQgJAAgJgHg");
	this.shape_906.setTransform(35.2,325.3625);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgZgBQAAgLAHgHQAcgHAIAHQAHAHAAALQAAAKgHAIQgIAHgKAAQgJAAgJgHQgHgIAAgKg");
	this.shape_907.setTransform(35.2,325.375);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#FFFFFF").s().p("AgRARQgIgIABgKQgBgLAIgHQAcgHAHAHQAIAHgBALQABAKgIAIQgIAHgJAAQgKAAgIgHg");
	this.shape_908.setTransform(35.2,325.375);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgagBQAAgLAHgIQAegHAHAHQAIAIAAALQAAAKgIAJQgHAHgLAAQgKAAgJgHQgHgJAAgKg");
	this.shape_909.setTransform(35.2,325.375);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#FFFFFF").s().p("AgTASQgGgJAAgKQAAgLAGgIQAegHAIAHQAHAIABALQgBAKgHAJQgIAHgKAAQgKAAgKgHg");
	this.shape_910.setTransform(35.2,325.375);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgbgBQAAgMAIgIQAegHAIAHQAJAIAAAMQAAALgJAIQgIAIgLAAQgKAAgJgIQgIgIAAgLg");
	this.shape_911.setTransform(35.2,325.3875);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#FFFFFF").s().p("AgTASQgIgIABgLQgBgMAIgIQAegHAJAHQAHAIABAMQgBALgHAIQgJAIgKAAQgKAAgKgIg");
	this.shape_912.setTransform(35.2,325.3875);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgbgBQAAgNAHgIQAggHAIAHQAIAIAAANQAAALgIAJQgIAHgMAAQgKAAgKgHQgHgJAAgLg");
	this.shape_913.setTransform(35.225,325.4125);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#FFFFFF").s().p("AgUATQgHgJAAgLQAAgNAHgIQAggHAIAHQAIAIAAANQAAALgIAJQgIAHgMAAQgKAAgKgHg");
	this.shape_914.setTransform(35.225,325.4125);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgcAAQAAgOAHgIQAhgIAIAIQAJAIAAAOQAAAKgJAKQgIAHgMAAQgLAAgKgHQgHgKAAgKg");
	this.shape_915.setTransform(35.2,325.3875);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#FFFFFF").s().p("AgVAUQgHgKAAgKQAAgOAHgIQAhgIAJAIQAIAIAAAOQAAAKgIAKQgJAHgLAAQgLAAgLgHg");
	this.shape_916.setTransform(35.2,325.3875);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgdAAQAAgOAIgJQAigIAIAIQAJAJAAAOQAAALgJAJQgIAIgNAAQgLAAgKgIQgIgJAAgLg");
	this.shape_917.setTransform(35.2,325.4);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#FFFFFF").s().p("AgVAUQgIgJAAgLQAAgOAIgJQAhgIAJAIQAJAJAAAOQAAALgJAJQgJAIgLAAQgMAAgKgIg");
	this.shape_918.setTransform(35.2,325.4);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgeAAQAAgOAIgKQAjgIAJAIQAJAKAAAOQAAALgJAKQgJAIgNAAQgLAAgLgIQgIgKAAgLg");
	this.shape_919.setTransform(35.2,325.4);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#FFFFFF").s().p("AgWAVQgIgKAAgLQAAgPAIgJQAjgIAJAIQAJAJAAAPQAAALgJAKQgJAIgMAAQgMAAgLgIg");
	this.shape_920.setTransform(35.2,325.4);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgfgBQAAgOAIgKQAkgIAKAIQAJAKAAAOQAAAMgJAKQgKAJgNAAQgMAAgLgJQgIgKAAgMg");
	this.shape_921.setTransform(35.2,325.4125);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#FFFFFF").s().p("AgXAVQgIgKAAgMQAAgOAIgKQAlgIAJAIQAJAKAAAOQAAAMgJAKQgJAJgNAAQgMAAgMgJg");
	this.shape_922.setTransform(35.2,325.4125);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgggBQAAgPAJgJQAlgJAJAJQAKAJAAAPQAAANgKAKQgJAJgNAAQgNAAgLgJQgJgKAAgNg");
	this.shape_923.setTransform(35.2,325.425);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#FFFFFF").s().p("AgXAWQgJgKAAgNQAAgPAJgJQAlgJAJAJQAKAJAAAPQAAANgKAKQgJAJgNAAQgNAAgLgJg");
	this.shape_924.setTransform(35.2,325.425);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AghgBQAAgPAJgKQAmgJAKAJQAKAKAAAPQAAANgKALQgKAJgNAAQgNAAgMgJQgJgLAAgNg");
	this.shape_925.setTransform(35.2,325.425);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#FFFFFF").s().p("AgYAXQgJgLAAgNQAAgPAJgKQAmgJAKAJQAKAKAAAPQAAANgKALQgKAJgNAAQgNAAgMgJg");
	this.shape_926.setTransform(35.2,325.425);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgigBQAAgQAJgKQAngJALAJQAKAKAAAQQAAANgKAMQgLAJgNAAQgOAAgMgJQgJgMAAgNg");
	this.shape_927.setTransform(35.225,325.45);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#FFFFFF").s().p("AgZAXQgJgLAAgNQAAgQAJgKQAngJALAJQAKAKAAAQQAAANgKALQgLAKgNgBQgOABgMgKg");
	this.shape_928.setTransform(35.225,325.45);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgjgBQAAgQAKgLQAogJAKAJQALALAAAQQAAANgLAMQgKAJgOAAQgOAAgMgJQgKgMAAgNg");
	this.shape_929.setTransform(35.225,325.4625);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#FFFFFF").s().p("AgZAYQgKgMAAgNQAAgQAKgLQAogJAKAJQALALAAAQQAAANgLAMQgKAJgOAAQgOAAgMgJg");
	this.shape_930.setTransform(35.225,325.4625);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgkgBQAAgRAKgLQApgJALAJQALALAAARQAAAOgLAMQgLAJgOAAQgOAAgNgJQgKgMAAgOg");
	this.shape_931.setTransform(35.225,325.4625);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#FFFFFF").s().p("AgaAZQgKgMAAgOQAAgRAKgLQApgJALAJQALALAAARQAAAOgLAMQgLAJgOAAQgOAAgNgJg");
	this.shape_932.setTransform(35.225,325.4625);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AAmAAQAAAQgLAMQgLAKgPAAQgPAAgNgKQgKgMAAgQQAAgQAKgLQANgKAPAAQAPAAALAKQALALAAAQg");
	this.shape_933.setTransform(35.225,325.225);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#FFFFFF").s().p("AgbAcQgKgMAAgQQAAgQAKgLQANgKAPAAQAPAAALAKQALALAAAQQAAAQgLAMQgLAKgPAAQgPAAgNgKg");
	this.shape_934.setTransform(35.225,325.225);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AghgBQAAgQAJgJQAmgKAKAKQAKAJAAAQQAAANgKALQgKAJgNAAQgNAAgMgJQgJgLAAgNg");
	this.shape_935.setTransform(35.225,325.4625);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#FFFFFF").s().p("AgYAXQgJgLAAgNQAAgQAJgJQAmgKAKAKQAKAJAAAQQAAANgKALQgKAJgNAAQgNAAgMgJg");
	this.shape_936.setTransform(35.225,325.4625);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgfgBQAAgOAIgKQAkgIAKAIQAJAKAAAOQAAAMgJALQgKAIgMAAQgNAAgLgIQgIgLAAgMg");
	this.shape_937.setTransform(35.225,325.4375);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#FFFFFF").s().p("AgXAWQgIgLAAgMQAAgOAIgKQAkgIAKAIQAJAKAAAOQAAAMgJALQgKAIgMAAQgNAAgLgIg");
	this.shape_938.setTransform(35.225,325.4375);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgdgBQAAgNAIgJQAigIAIAIQAJAJAAANQAAAMgJAJQgIAIgMAAQgMAAgKgIQgIgJAAgMg");
	this.shape_939.setTransform(35.225,325.425);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#FFFFFF").s().p("AgVAUQgIgJAAgMQAAgNAIgJQAigIAIAIQAJAJAAANQAAAMgJAJQgIAIgMAAQgMAAgKgIg");
	this.shape_940.setTransform(35.225,325.425);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgbgBQAAgMAHgJQAggHAIAHQAIAJAAAMQAAALgIAJQgIAHgLAAQgLAAgKgHQgHgJAAgLg");
	this.shape_941.setTransform(35.225,325.4125);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#FFFFFF").s().p("AgUATQgHgJAAgLQAAgMAHgJQAggHAIAHQAIAJAAAMQAAALgIAJQgIAHgLAAQgLAAgKgHg");
	this.shape_942.setTransform(35.225,325.4125);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgagBQAAgMAHgHQAegIAIAIQAIAHAAAMQAAAKgIAJQgIAHgLAAQgJAAgKgHQgHgJAAgKg");
	this.shape_943.setTransform(35.225,325.4125);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#FFFFFF").s().p("AgTASQgHgJAAgKQAAgMAHgHQAegIAIAIQAIAHAAAMQAAAKgIAJQgIAHgLAAQgJAAgKgHg");
	this.shape_944.setTransform(35.225,325.4125);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgYAAQAAgMAHgGQAbgHAIAHQAHAGAAAMQAAAJgHAIQgIAGgKAAQgJAAgIgGQgHgIAAgJg");
	this.shape_945.setTransform(35.225,325.4);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#FFFFFF").s().p("AgRARQgHgJAAgIQAAgMAHgGQAbgIAIAIQAHAGAAAMQAAAIgHAJQgIAGgKAAQgJAAgIgGg");
	this.shape_946.setTransform(35.225,325.4);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgWAAQAAgKAGgHQAagGAGAGQAHAHAAAKQAAAIgHAHQgGAGgKAAQgIAAgIgGQgGgHAAgIg");
	this.shape_947.setTransform(35.225,325.3875);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#FFFFFF").s().p("AgQAPQgGgHAAgIQAAgKAGgHQAagGAGAGQAHAHAAAKQAAAIgHAHQgGAGgKAAQgIAAgIgGg");
	this.shape_948.setTransform(35.225,325.3875);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgUAAQAAgJAGgHQAXgFAGAFQAGAHAAAJQAAAHgGAHQgGAFgJAAQgHAAgHgFQgGgHAAgHg");
	this.shape_949.setTransform(35.225,325.3625);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#FFFFFF").s().p("AgOAOQgGgHAAgHQAAgJAGgHQAXgFAGAFQAGAHAAAJQAAAHgGAHQgGAFgJAAQgHAAgHgFg");
	this.shape_950.setTransform(35.225,325.3625);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgSAAQAAgJAFgFQAVgGAGAGQAFAFAAAJQAAAHgFAGQgGAFgIAAQgGAAgHgFQgFgGAAgHg");
	this.shape_951.setTransform(35.225,325.3625);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#FFFFFF").s().p("AgNANQgFgGAAgHQAAgJAFgFQAVgGAGAGQAFAFAAAJQAAAHgFAGQgGAFgIAAQgGAAgHgFg");
	this.shape_952.setTransform(35.225,325.3625);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AARAAQAAAHgFAGQgFAEgHAAQgGAAgGgEQgEgGAAgHQAAgGAEgFQAGgFAGAAQAHAAAFAFQAFAFAAAGg");
	this.shape_953.setTransform(35.225,325.225);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#FFFFFF").s().p("AgMANQgEgGAAgHQAAgGAEgFQAGgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAGQgFAEgHAAQgGAAgGgEg");
	this.shape_954.setTransform(35.225,325.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_710},{t:this.shape_709}]}).to({state:[{t:this.shape_712},{t:this.shape_711}]},1).to({state:[{t:this.shape_714},{t:this.shape_713}]},1).to({state:[{t:this.shape_716},{t:this.shape_715}]},1).to({state:[{t:this.shape_718},{t:this.shape_717}]},1).to({state:[{t:this.shape_720},{t:this.shape_719}]},1).to({state:[{t:this.shape_722},{t:this.shape_721}]},1).to({state:[{t:this.shape_724},{t:this.shape_723}]},1).to({state:[{t:this.shape_726},{t:this.shape_725}]},1).to({state:[{t:this.shape_728},{t:this.shape_727}]},1).to({state:[{t:this.shape_730},{t:this.shape_729}]},1).to({state:[{t:this.shape_732},{t:this.shape_731}]},1).to({state:[{t:this.shape_734},{t:this.shape_733}]},1).to({state:[{t:this.shape_736},{t:this.shape_735}]},1).to({state:[{t:this.shape_738},{t:this.shape_737}]},1).to({state:[{t:this.shape_740},{t:this.shape_739}]},1).to({state:[{t:this.shape_742},{t:this.shape_741}]},1).to({state:[{t:this.shape_744},{t:this.shape_743}]},1).to({state:[{t:this.shape_746},{t:this.shape_745}]},1).to({state:[{t:this.shape_748},{t:this.shape_747}]},1).to({state:[{t:this.shape_750},{t:this.shape_749}]},1).to({state:[{t:this.shape_752},{t:this.shape_751}]},1).to({state:[{t:this.shape_754},{t:this.shape_753}]},1).to({state:[{t:this.shape_756},{t:this.shape_755}]},1).to({state:[{t:this.shape_758},{t:this.shape_757}]},1).to({state:[{t:this.shape_760},{t:this.shape_759}]},1).to({state:[{t:this.shape_762},{t:this.shape_761}]},1).to({state:[{t:this.shape_764},{t:this.shape_763}]},1).to({state:[{t:this.shape_766},{t:this.shape_765}]},1).to({state:[{t:this.shape_768},{t:this.shape_767}]},1).to({state:[{t:this.shape_770},{t:this.shape_769}]},1).to({state:[{t:this.shape_772},{t:this.shape_771}]},1).to({state:[{t:this.shape_774},{t:this.shape_773}]},1).to({state:[{t:this.shape_776},{t:this.shape_775}]},1).to({state:[{t:this.shape_778},{t:this.shape_777}]},1).to({state:[{t:this.shape_780},{t:this.shape_779}]},1).to({state:[{t:this.shape_782},{t:this.shape_781}]},1).to({state:[{t:this.shape_784},{t:this.shape_783}]},1).to({state:[{t:this.shape_786},{t:this.shape_785}]},1).to({state:[{t:this.shape_788},{t:this.shape_787}]},1).to({state:[{t:this.shape_786},{t:this.shape_785}]},1).to({state:[{t:this.shape_784},{t:this.shape_783}]},1).to({state:[{t:this.shape_790},{t:this.shape_789}]},1).to({state:[{t:this.shape_792},{t:this.shape_791}]},1).to({state:[{t:this.shape_794},{t:this.shape_793}]},1).to({state:[{t:this.shape_796},{t:this.shape_795}]},1).to({state:[{t:this.shape_798},{t:this.shape_797}]},1).to({state:[{t:this.shape_800},{t:this.shape_799}]},1).to({state:[{t:this.shape_802},{t:this.shape_801}]},1).to({state:[{t:this.shape_804},{t:this.shape_803}]},1).to({state:[{t:this.shape_806},{t:this.shape_805}]},1).to({state:[{t:this.shape_808},{t:this.shape_807}]},1).to({state:[{t:this.shape_810},{t:this.shape_809}]},1).to({state:[{t:this.shape_812},{t:this.shape_811}]},1).to({state:[{t:this.shape_814},{t:this.shape_813}]},1).to({state:[{t:this.shape_816},{t:this.shape_815}]},1).to({state:[{t:this.shape_818},{t:this.shape_817,p:{x:35.075}}]},1).to({state:[{t:this.shape_820},{t:this.shape_819}]},1).to({state:[{t:this.shape_822},{t:this.shape_821}]},1).to({state:[{t:this.shape_824},{t:this.shape_823}]},1).to({state:[{t:this.shape_822},{t:this.shape_821}]},1).to({state:[{t:this.shape_826},{t:this.shape_825}]},1).to({state:[{t:this.shape_827},{t:this.shape_817,p:{x:35.1}}]},1).to({state:[{t:this.shape_829},{t:this.shape_828}]},1).to({state:[{t:this.shape_831},{t:this.shape_830}]},1).to({state:[{t:this.shape_833},{t:this.shape_832}]},1).to({state:[{t:this.shape_835},{t:this.shape_834}]},1).to({state:[{t:this.shape_837},{t:this.shape_836}]},1).to({state:[{t:this.shape_839},{t:this.shape_838}]},1).to({state:[{t:this.shape_841},{t:this.shape_840}]},1).to({state:[{t:this.shape_843},{t:this.shape_842}]},1).to({state:[{t:this.shape_845},{t:this.shape_844}]},1).to({state:[{t:this.shape_847},{t:this.shape_846}]},1).to({state:[{t:this.shape_849},{t:this.shape_848}]},1).to({state:[{t:this.shape_851},{t:this.shape_850}]},1).to({state:[{t:this.shape_853},{t:this.shape_852}]},1).to({state:[{t:this.shape_855},{t:this.shape_854}]},1).to({state:[{t:this.shape_857},{t:this.shape_856}]},1).to({state:[{t:this.shape_859},{t:this.shape_858}]},1).to({state:[{t:this.shape_861},{t:this.shape_860}]},1).to({state:[{t:this.shape_863},{t:this.shape_862}]},1).to({state:[{t:this.shape_857},{t:this.shape_856}]},1).to({state:[{t:this.shape_865},{t:this.shape_864}]},1).to({state:[{t:this.shape_867},{t:this.shape_866}]},1).to({state:[{t:this.shape_869},{t:this.shape_868}]},1).to({state:[{t:this.shape_871},{t:this.shape_870}]},1).to({state:[{t:this.shape_873},{t:this.shape_872}]},1).to({state:[{t:this.shape_875},{t:this.shape_874}]},1).to({state:[{t:this.shape_877},{t:this.shape_876}]},1).to({state:[{t:this.shape_879},{t:this.shape_878}]},1).to({state:[{t:this.shape_881},{t:this.shape_880}]},1).to({state:[{t:this.shape_883},{t:this.shape_882}]},1).to({state:[{t:this.shape_885},{t:this.shape_884}]},1).to({state:[{t:this.shape_887},{t:this.shape_886}]},1).to({state:[{t:this.shape_889},{t:this.shape_888}]},1).to({state:[{t:this.shape_891},{t:this.shape_890}]},1).to({state:[{t:this.shape_893},{t:this.shape_892}]},1).to({state:[{t:this.shape_895},{t:this.shape_894}]},1).to({state:[{t:this.shape_897,p:{y:325.3}},{t:this.shape_896}]},1).to({state:[{t:this.shape_899},{t:this.shape_898}]},1).to({state:[{t:this.shape_897,p:{y:325.3125}},{t:this.shape_900}]},1).to({state:[{t:this.shape_895},{t:this.shape_894}]},1).to({state:[{t:this.shape_893},{t:this.shape_892}]},1).to({state:[{t:this.shape_902},{t:this.shape_901}]},1).to({state:[{t:this.shape_904},{t:this.shape_903}]},1).to({state:[{t:this.shape_906},{t:this.shape_905}]},1).to({state:[{t:this.shape_908},{t:this.shape_907}]},1).to({state:[{t:this.shape_910},{t:this.shape_909}]},1).to({state:[{t:this.shape_912},{t:this.shape_911}]},1).to({state:[{t:this.shape_914},{t:this.shape_913}]},1).to({state:[{t:this.shape_916},{t:this.shape_915}]},1).to({state:[{t:this.shape_918},{t:this.shape_917}]},1).to({state:[{t:this.shape_920},{t:this.shape_919}]},1).to({state:[{t:this.shape_922},{t:this.shape_921}]},1).to({state:[{t:this.shape_924},{t:this.shape_923}]},1).to({state:[{t:this.shape_926},{t:this.shape_925}]},1).to({state:[{t:this.shape_928},{t:this.shape_927}]},1).to({state:[{t:this.shape_930},{t:this.shape_929}]},1).to({state:[{t:this.shape_932},{t:this.shape_931}]},1).to({state:[{t:this.shape_934},{t:this.shape_933}]},1).to({state:[{t:this.shape_930},{t:this.shape_929}]},1).to({state:[{t:this.shape_936},{t:this.shape_935}]},1).to({state:[{t:this.shape_938},{t:this.shape_937}]},1).to({state:[{t:this.shape_940},{t:this.shape_939}]},1).to({state:[{t:this.shape_942},{t:this.shape_941}]},1).to({state:[{t:this.shape_944},{t:this.shape_943}]},1).to({state:[{t:this.shape_946},{t:this.shape_945}]},1).to({state:[{t:this.shape_948},{t:this.shape_947}]},1).to({state:[{t:this.shape_950},{t:this.shape_949}]},1).to({state:[{t:this.shape_952},{t:this.shape_951}]},1).to({state:[{t:this.shape_954},{t:this.shape_953}]},1).wait(1));

	// звезда2
	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AAyAAQAAAVgPAOQgOAPgVAAQgUAAgPgPQgOgOAAgVQAAgUAOgPQAPgOAUAAQAVAAAOAOQAPAPAAAUg");
	this.shape_955.setTransform(425,315);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#FFFFFF").s().p("AgiAjQgPgOAAgVQAAgUAPgOQAPgPATAAQAVAAAOAPQAPAOAAAUQAAAVgPAOQgOAPgVAAQgTAAgPgPg");
	this.shape_956.setTransform(425,315);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgyAAQAAgUAPgPQAPgPAUAAQAVAAAPAPQAPAPAAAUQAAAVgPAPQgPAPgVAAQgUAAgPgPQgPgPAAgVg");
	this.shape_957.setTransform(425,315);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#FFFFFF").s().p("AgjAjQgPgOAAgVQAAgUAPgPQAQgOATAAQAVAAAPAOQAOAPAAAUQAAAVgOAOQgPAQgVgBQgTABgQgQg");
	this.shape_958.setTransform(425,315);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#FFFFFF").s().p("AgjAjQgPgOAAgVQAAgUAPgPQAPgPAUAAQAVAAAPAPQAPAPAAAUQAAAVgPAOQgPAQgVAAQgUAAgPgQg");
	this.shape_959.setTransform(425,315);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgyAAQAAgUAOgQQAQgOAUAAQAVAAAPAOQAPAQAAAUQAAAVgPAPQgPAPgVAAQgUAAgQgPQgOgPAAgVg");
	this.shape_960.setTransform(425.025,315.025);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#FFFFFF").s().p("AgkAkQgOgPAAgVQAAgUAOgQQAQgOAUAAQAVAAAPAOQAPAQAAAUQAAAVgPAPQgPAPgVAAQgUAAgQgPg");
	this.shape_961.setTransform(425.025,315.025);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgzAAQAAgUAPgQQAQgPAUAAQAVAAAPAPQAQAQAAAUQAAAVgQAPQgPAQgVAAQgUAAgQgQQgPgPAAgVg");
	this.shape_962.setTransform(425.025,315.025);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#FFFFFF").s().p("AgkAkQgPgPAAgVQAAgUAPgQQAQgPAUAAQAVAAAPAPQAQAQAAAUQAAAVgQAPQgPAQgVAAQgUAAgQgQg");
	this.shape_963.setTransform(425.025,315.025);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#FFFFFF").s().p("AgkAlQgPgQAAgVQAAgVAPgPQAQgPAUAAQAWAAAPAPQAPAPAAAVQAAAVgPAQQgPAPgWAAQgUAAgQgPg");
	this.shape_964.setTransform(425,315);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag0AAQAAgUAQgQQAQgQAUAAQAWAAAPAQQAQAQAAAUQAAAWgQAPQgPAQgWAAQgUAAgQgQQgQgPAAgWg");
	this.shape_965.setTransform(425,315);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#FFFFFF").s().p("AgkAlQgPgPAAgWQAAgVAPgPQAQgPAUAAQAWAAAPAPQAPAPABAVQgBAWgPAPQgPAPgWAAQgUAAgQgPg");
	this.shape_966.setTransform(425,315);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag0AAQAAgUAPgRQARgPAUAAQAWAAAPAPQAQARAAAUQAAAWgQAPQgPAQgWAAQgUAAgRgQQgPgPAAgWg");
	this.shape_967.setTransform(425,315);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#FFFFFF").s().p("AgkAlQgQgPAAgWQAAgUAQgRQAQgPAUAAQAWAAAPAPQAQARAAAUQAAAWgQAPQgPAQgWAAQgUAAgQgQg");
	this.shape_968.setTransform(425,315);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag0AAQAAgVAPgQQAQgPAVAAQAWAAAPAPQAQAQAAAVQAAAWgQAPQgPAQgWAAQgVAAgQgQQgPgPAAgWg");
	this.shape_969.setTransform(425.025,315.025);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#FFFFFF").s().p("AglAlQgPgPAAgWQAAgVAPgQQAQgPAVAAQAWAAAPAPQAQAQAAAVQAAAWgQAPQgPAQgWAAQgVAAgQgQg");
	this.shape_970.setTransform(425.025,315.025);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag1AAQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQAAAVQAAAWgQAQQgQAQgWAAQgVAAgQgQQgQgQAAgWg");
	this.shape_971.setTransform(425.025,315.025);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#FFFFFF").s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQAAAVQAAAWgQAQQgQAQgWAAQgVAAgQgQg");
	this.shape_972.setTransform(425.025,315.025);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag1AAQAAgVAPgRQARgPAVAAQAWAAAQAPQAQARAAAVQAAAWgQAQQgQAQgWAAQgVAAgRgQQgPgQAAgWg");
	this.shape_973.setTransform(425.025,315.025);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#FFFFFF").s().p("AgmAmQgPgQAAgWQAAgVAPgRQARgPAVAAQAWAAAQAPQAQARAAAVQAAAWgQAQQgQAQgWAAQgVAAgRgQg");
	this.shape_974.setTransform(425.025,315.025);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag2AAQAAgVAQgRQARgQAVAAQAXAAAPAQQARARAAAVQAAAXgRAPQgPARgXAAQgVAAgRgRQgQgPAAgXg");
	this.shape_975.setTransform(425.025,315.025);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#FFFFFF").s().p("AgmAmQgQgPAAgXQAAgVAQgRQARgQAVAAQAXAAAPAQQARARAAAVQAAAXgRAPQgPARgXAAQgVAAgRgRg");
	this.shape_976.setTransform(425.025,315.025);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag2AAQAAgWAQgQQAQgQAWAAQAXAAAPAQQARAQAAAWQAAAXgRAPQgPARgXAAQgWAAgQgRQgQgPAAgXg");
	this.shape_977.setTransform(425.05,315.05);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#FFFFFF").s().p("AgmAmQgQgQAAgWQAAgWAQgQQAQgQAWAAQAWAAARAQQAQAQAAAWQAAAWgQAQQgRARgWAAQgWAAgQgRg");
	this.shape_978.setTransform(425.05,315.05);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag3AAQAAgWAQgRQARgQAWAAQAXAAAPAQQASARAAAWQAAAXgSAPQgPASgXAAQgWAAgRgSQgQgPAAgXg");
	this.shape_979.setTransform(425.05,315.05);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#FFFFFF").s().p("AgnAmQgQgQAAgWQAAgWAQgRQARgPAWAAQAWAAARAPQAQARAAAWQAAAWgQAQQgRASgWgBQgWABgRgSg");
	this.shape_980.setTransform(425.05,315.05);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag3AAQAAgWAQgRQARgQAWAAQAXAAAQAQQARARAAAWQAAAXgRAQQgQARgXAAQgWAAgRgRQgQgQAAgXg");
	this.shape_981.setTransform(425.05,315.05);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#FFFFFF").s().p("AgnAnQgQgQAAgXQAAgWAQgRQARgQAWAAQAXAAAQAQQARARAAAWQAAAXgRAQQgQARgXAAQgWAAgRgRg");
	this.shape_982.setTransform(425.05,315.05);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag4AAQAAgWARgRQARgRAWAAQAYAAAQARQARARAAAWQAAAYgRAQQgQARgYAAQgWAAgRgRQgRgQAAgYg");
	this.shape_983.setTransform(425.025,315.025);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#FFFFFF").s().p("AgnAoQgRgQAAgYQAAgWARgRQARgRAWAAQAYAAAQARQARARAAAWQAAAYgRAQQgQARgYAAQgWAAgRgRg");
	this.shape_984.setTransform(425.025,315.025);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag4AAQAAgXAQgRQARgQAXAAQAXAAARAQQARARAAAXQAAAXgRARQgRARgXAAQgXAAgRgRQgQgRAAgXg");
	this.shape_985.setTransform(425.05,315.05);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#FFFFFF").s().p("AgoAoQgQgRAAgXQAAgXAQgRQASgQAWAAQAYAAAQAQQARARAAAXQAAAXgRARQgQARgYAAQgWAAgSgRg");
	this.shape_986.setTransform(425.05,315.05);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag5AAQAAgXARgRQARgRAXAAQAYAAAQARQASARAAAXQAAAYgSAQQgQASgYAAQgXAAgRgSQgRgQAAgYg");
	this.shape_987.setTransform(425.05,315.05);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#FFFFFF").s().p("AgoAoQgQgQAAgYQAAgXAQgRQARgQAXAAQAYAAAQAQQASARAAAXQAAAYgSAQQgQARgYAAQgXAAgRgRg");
	this.shape_988.setTransform(425.05,315.05);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AA6AAQAAAYgRARQgRARgYAAQgXAAgSgRQgQgRAAgYQAAgXAQgSQASgQAXAAQAYAAARAQQARASAAAXg");
	this.shape_989.setTransform(425.05,315.05);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#FFFFFF").s().p("AgoApQgRgRAAgYQAAgXARgSQARgQAXAAQAYAAARAQQARASAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_990.setTransform(425.05,315.05);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag3AAQAAgWAQgRQARgQAWAAQAYAAAQAQQARARAAAWQAAAYgRAQQgQARgYAAQgWAAgRgRQgQgQAAgYg");
	this.shape_991.setTransform(425.05,315.05);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#FFFFFF").s().p("AgnAnQgQgQgBgXQABgWAQgRQAQgRAXABQAXgBARARQARARAAAWQAAAXgRAQQgRASgXgBQgXABgQgSg");
	this.shape_992.setTransform(425.05,315.05);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag1AAQAAgWAPgQQAQgPAWAAQAXAAAPAPQAQAQAAAWQAAAXgQAPQgPAQgXAAQgWAAgQgQQgPgPAAgXg");
	this.shape_993.setTransform(425.05,315.05);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#FFFFFF").s().p("AgmAmQgQgQAAgWQAAgWAQgQQARgQAVABQAWgBAQAQQAQAQAAAWQAAAWgQAQQgQAQgWAAQgVAAgRgQg");
	this.shape_994.setTransform(425.05,315.05);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgyAAQAAgUAPgPQAPgPAUAAQAWAAAOAPQAQAPAAAUQAAAWgQAOQgOAQgWAAQgUAAgPgQQgPgOAAgWg");
	this.shape_995.setTransform(425.05,315.05);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#FFFFFF").s().p("AgkAkQgOgPAAgVQAAgUAOgQQAQgPAUAAQAVAAAPAPQAPAQAAAUQAAAVgPAPQgPAQgVAAQgUAAgQgQg");
	this.shape_996.setTransform(425.05,315.05);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgxAAQAAgUAOgPQAPgOAUAAQAUAAAPAOQAPAPAAAUQAAAUgPAPQgPAPgUAAQgUAAgPgPQgOgPAAgUg");
	this.shape_997.setTransform(425.075,315.075);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#FFFFFF").s().p("AgjAjQgOgPAAgUQAAgUAOgPQAPgOAUAAQAUAAAPAOQAPAPAAAUQAAAUgPAPQgPAPgUAAQgUAAgPgPg");
	this.shape_998.setTransform(425.075,315.075);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgvAAQAAgTAOgOQAOgOATAAQAUAAANAOQAPAOAAATQAAAUgPANQgNAPgUAAQgTAAgOgPQgOgNAAgUg");
	this.shape_999.setTransform(425.05,315.05);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#FFFFFF").s().p("AgiAiQgNgOAAgUQAAgTANgPQAPgNATAAQAUAAANANQAPAPAAATQAAAUgPAOQgNAOgUAAQgTAAgPgOg");
	this.shape_1000.setTransform(425.05,315.05);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgtAAQAAgSANgOQAOgNASAAQAUAAANANQAOAOAAASQAAAUgOANQgNAOgUAAQgSAAgOgOQgNgNAAgUg");
	this.shape_1001.setTransform(425.05,315.05);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#FFFFFF").s().p("AggAhQgOgNAAgUQAAgSAOgOQAOgNASAAQATAAAOANQANAOAAASQAAAUgNANQgOAOgTgBQgSABgOgOg");
	this.shape_1002.setTransform(425.05,315.05);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgsAAQAAgSANgNQANgNASAAQASAAANANQAOANAAASQAAASgOANQgNAOgSAAQgSAAgNgOQgNgNAAgSg");
	this.shape_1003.setTransform(425.075,315.075);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#FFFFFF").s().p("AgfAfQgNgNAAgSQAAgSANgNQANgNASAAQASAAANANQAOANAAASQAAASgOANQgNAOgSAAQgSAAgNgOg");
	this.shape_1004.setTransform(425.075,315.075);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgqAAQAAgRAMgNQANgMARAAQASAAAMAMQANANAAARQAAASgNAMQgMANgSAAQgRAAgNgNQgMgMAAgSg");
	this.shape_1005.setTransform(425.05,315.05);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#FFFFFF").s().p("AgdAeQgNgMAAgSQAAgRANgMQAMgNARAAQASAAAMANQANAMAAARQAAASgNAMQgMANgSAAQgRAAgMgNg");
	this.shape_1006.setTransform(425.05,315.05);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgoAAQAAgQALgNQANgLAQAAQARAAAMALQAMANAAAQQAAARgMAMQgMAMgRAAQgQAAgNgMQgLgMAAgRg");
	this.shape_1007.setTransform(425.075,315.075);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#FFFFFF").s().p("AgdAdQgLgMAAgRQAAgQALgNQANgLAQAAQARAAAMALQAMANAAAQQAAARgMAMQgMAMgRAAQgQAAgNgMg");
	this.shape_1008.setTransform(425.075,315.075);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgnAAQAAgQALgMQAMgLAQAAQAQAAAMALQAMAMAAAQQAAAQgMAMQgMAMgQAAQgQAAgMgMQgLgMAAgQg");
	this.shape_1009.setTransform(425.075,315.075);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#FFFFFF").s().p("AgcAcQgLgMAAgQQAAgQALgMQAMgLAQAAQAQAAAMALQAMAMAAAQQAAAQgMAMQgMAMgQAAQgQAAgMgMg");
	this.shape_1010.setTransform(425.075,315.075);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AglAAQAAgPALgLQALgLAPAAQAQAAAKALQAMALAAAPQAAAQgMAKQgKAMgQAAQgPAAgLgMQgLgKAAgQg");
	this.shape_1011.setTransform(425.05,315.05);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#FFFFFF").s().p("AgaAaQgLgKAAgQQAAgPALgLQAMgLAOAAQAQAAAKALQAMALAAAPQAAAQgMAKQgKAMgQAAQgOAAgMgMg");
	this.shape_1012.setTransform(425.05,315.05);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgjAAQAAgOAKgLQALgKAOAAQAPAAAKAKQALALAAAOQAAAPgLAKQgKALgPAAQgOAAgLgLQgKgKAAgPg");
	this.shape_1013.setTransform(425.075,315.075);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#FFFFFF").s().p("AgZAZQgKgKAAgPQAAgOAKgLQALgKAOAAQAPAAAKAKQALALAAAOQAAAPgLAKQgKALgPAAQgOAAgLgLg");
	this.shape_1014.setTransform(425.075,315.075);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgiAAQAAgNAKgLQALgKANAAQAOAAAKAKQALALAAANQAAAOgLAKQgKALgOAAQgNAAgLgLQgKgKAAgOg");
	this.shape_1015.setTransform(425.075,315.075);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#FFFFFF").s().p("AgYAYQgKgKAAgOQAAgNAKgLQALgKANAAQAOAAAKAKQALALAAANQAAAOgLAKQgKALgOAAQgNAAgLgLg");
	this.shape_1016.setTransform(425.075,315.075);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AggAAQAAgNAJgKQAKgJANAAQAOAAAJAJQAKAKAAANQAAAOgKAJQgJAKgOAAQgNAAgKgKQgJgJAAgOg");
	this.shape_1017.setTransform(425.075,315.075);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#FFFFFF").s().p("AgXAXQgJgJAAgOQAAgNAJgKQAKgJANAAQAOAAAJAJQAKAKAAANQAAAOgKAJQgJAKgOAAQgNAAgKgKg");
	this.shape_1018.setTransform(425.075,315.075);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgeAAQAAgMAIgKQAKgIAMAAQANAAAJAIQAJAKAAAMQAAANgJAJQgJAJgNAAQgMAAgKgJQgIgJAAgNg");
	this.shape_1019.setTransform(425.075,315.075);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#FFFFFF").s().p("AgWAWQgIgJAAgNQAAgMAIgKQAKgIAMAAQANAAAJAIQAJAKAAAMQAAANgJAJQgJAJgNAAQgMAAgKgJg");
	this.shape_1020.setTransform(425.075,315.075);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgdAAQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJQgJgJAAgMg");
	this.shape_1021.setTransform(425.075,315.075);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#FFFFFF").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_1022.setTransform(425.075,315.075);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgbAAQAAgLAIgIQAIgIALAAQAMAAAIAIQAIAIAAALQAAAMgIAIQgIAIgMAAQgLAAgIgIQgIgIAAgMg");
	this.shape_1023.setTransform(425.075,315.075);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#FFFFFF").s().p("AgTAUQgIgIAAgMQAAgLAIgIQAIgIALAAQAMAAAIAIQAIAIAAALQAAAMgIAIQgIAIgMAAQgLAAgIgIg");
	this.shape_1024.setTransform(425.075,315.075);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgZAAQAAgKAHgIQAIgHAKAAQALAAAHAHQAIAIAAAKQAAALgIAHQgHAIgLAAQgKAAgIgIQgHgHAAgLg");
	this.shape_1025.setTransform(425.075,315.075);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#FFFFFF").s().p("AgSASQgHgHAAgLQAAgKAHgIQAIgHAKAAQALAAAHAHQAIAIAAAKQAAALgIAHQgHAIgLAAQgKAAgIgIg");
	this.shape_1026.setTransform(425.075,315.075);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AAZAAQAAAKgIAHQgHAIgKAAQgJAAgIgIQgHgHAAgKQAAgJAHgIQAIgHAJAAQAKAAAHAHQAIAIAAAJg");
	this.shape_1027.setTransform(425.075,315.075);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#FFFFFF").s().p("AgRARQgHgHAAgKQAAgJAHgIQAIgHAJAAQAKAAAHAHQAIAIAAAJQAAAKgIAHQgHAIgKAAQgJAAgIgIg");
	this.shape_1028.setTransform(425.075,315.075);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgZgBQAAgLAIgHQAcgIAHAIQAIAHAAALQAAAKgIAHQgHAIgLAAQgKAAgHgIQgIgHAAgKg");
	this.shape_1029.setTransform(425.075,315.2625);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#FFFFFF").s().p("AgRAQQgIgHAAgKQAAgLAIgHQAcgIAHAIQAIAHAAALQAAAKgIAHQgHAIgLAAQgKAAgHgIg");
	this.shape_1030.setTransform(425.075,315.2625);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgZgBQAAgLAHgIQAdgHAHAHQAIAIAAALQAAAKgIAHQgHAIgLAAQgKAAgIgIQgHgHAAgKg");
	this.shape_1031.setTransform(425.075,315.2625);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#FFFFFF").s().p("AgSAQQgHgHAAgKQAAgLAHgIQAdgHAHAHQAIAIAAALQAAAKgIAHQgHAIgLAAQgKAAgIgIg");
	this.shape_1032.setTransform(425.075,315.2625);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgagBQAAgLAIgIQAdgIAIAIQAIAIAAALQAAAKgIAIQgIAIgLAAQgKAAgIgIQgIgIAAgKg");
	this.shape_1033.setTransform(425.075,315.275);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#FFFFFF").s().p("AgSARQgIgIAAgKQAAgLAIgIQAdgIAIAIQAIAIAAALQAAAKgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_1034.setTransform(425.075,315.275);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgbgCQAAgLAIgIQAegIAIAIQAJAIAAALQAAALgJAJQgIAIgLAAQgLAAgIgIQgIgJAAgLg");
	this.shape_1035.setTransform(425.1,315.3);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("#FFFFFF").s().p("AgTASQgIgJAAgKQAAgMAIgIQAegIAIAIQAJAIAAAMQAAAKgJAJQgIAIgLAAQgKAAgJgIg");
	this.shape_1036.setTransform(425.1,315.3);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgcgBQAAgMAJgIQAfgJAIAJQAJAIAAAMQAAALgJAIQgIAJgMAAQgLAAgIgJQgJgIAAgLg");
	this.shape_1037.setTransform(425.075,315.2875);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("#FFFFFF").s().p("AgTASQgJgIAAgLQAAgMAJgIQAfgJAIAJQAJAIAAAMQAAALgJAIQgIAJgMAAQgLAAgIgJg");
	this.shape_1038.setTransform(425.075,315.2875);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgdgBQAAgMAIgJQAhgIAIAIQAJAJAAAMQAAALgJAJQgIAJgMAAQgMAAgJgJQgIgJAAgLg");
	this.shape_1039.setTransform(425.1,315.3);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#FFFFFF").s().p("AgVATQgHgJAAgLQAAgMAHgKQAhgHAIAHQAKAKgBAMQABALgKAJQgIAJgMAAQgLAAgKgJg");
	this.shape_1040.setTransform(425.1,315.3);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgegCQAAgMAJgJQAigJAIAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJQgJgJAAgMg");
	this.shape_1041.setTransform(425.1,315.3125);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("#FFFFFF").s().p("AgVATQgJgJAAgMQAAgMAJgJQAhgJAJAJQAJAJAAAMQAAAMgJAJQgIAJgNAAQgLAAgKgJg");
	this.shape_1042.setTransform(425.1,315.3125);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgegCQAAgMAIgKQAjgIAIAIQAKAKAAAMQAAANgKAIQgIAKgNAAQgMAAgKgKQgIgIAAgNg");
	this.shape_1043.setTransform(425.1,315.3125);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("#FFFFFF").s().p("AgWATQgIgIAAgNQAAgMAIgKQAjgIAIAIQAKAKAAAMQAAANgKAIQgIAKgNAAQgMAAgKgKg");
	this.shape_1044.setTransform(425.1,315.3125);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgfgCQAAgMAJgKQAjgJAJAJQAKAKAAAMQAAANgKAJQgJAKgNAAQgMAAgKgKQgJgJAAgNg");
	this.shape_1045.setTransform(425.1,315.325);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("#FFFFFF").s().p("AgWAUQgJgJAAgNQAAgMAJgKQAjgJAJAJQAKAKAAAMQAAANgKAJQgJAKgNAAQgMAAgKgKg");
	this.shape_1046.setTransform(425.1,315.325);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgggCQAAgNAJgKQAkgJAKAJQAKAKAAANQAAANgKAJQgKAKgNAAQgNAAgKgKQgJgJAAgNg");
	this.shape_1047.setTransform(425.125,315.35);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("#FFFFFF").s().p("AgXAVQgJgKAAgNQAAgNAJgKQAkgJAKAJQAKAKAAANQAAANgKAKQgKAJgNABQgNgBgKgJg");
	this.shape_1048.setTransform(425.125,315.35);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AghgBQAAgOAKgKQAlgKAJAKQAKAKAAAOQAAANgKAJQgJAKgOAAQgNAAgKgKQgKgJAAgNg");
	this.shape_1049.setTransform(425.1,315.3375);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("#FFFFFF").s().p("AgXAVQgKgJAAgNQAAgOAKgKQAlgKAJAKQALAKAAAOQAAANgLAJQgJAKgOAAQgNAAgKgKg");
	this.shape_1050.setTransform(425.1,315.3375);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgigCQAAgOAKgKQAmgKAKAKQAKAKAAAOQAAANgKAKQgKALgOAAQgNAAgLgLQgKgKAAgNg");
	this.shape_1051.setTransform(425.1,315.35);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("#FFFFFF").s().p("AgYAWQgKgLAAgNQAAgNAKgLQAmgKAKAKQALALAAANQAAANgLALQgKAKgOAAQgNAAgLgKg");
	this.shape_1052.setTransform(425.1,315.35);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgigCQAAgOAKgLQAmgKAKAKQALALAAAOQAAAOgLAKQgKALgOAAQgOAAgKgLQgKgKAAgOg");
	this.shape_1053.setTransform(425.1,315.35);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("#FFFFFF").s().p("AgYAWQgKgKAAgOQAAgOAKgLQAmgJALAJQAKALAAAOQAAAOgKAKQgLAKgOABQgOgBgKgKg");
	this.shape_1054.setTransform(425.1,315.35);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgjgCQAAgOAKgLQAogLAKALQALALAAAOQAAAOgLAKQgKALgPAAQgOAAgLgLQgKgKAAgOg");
	this.shape_1055.setTransform(425.1,315.3625);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("#FFFFFF").s().p("AgZAWQgKgKAAgOQAAgOAKgLQAogLAKALQALALAAAOQAAAOgLAKQgKALgPAAQgNAAgMgLg");
	this.shape_1056.setTransform(425.1,315.3625);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgkgCQAAgPALgLQAogKAKAKQAMALAAAPQAAAPgMAKQgKALgPAAQgOAAgLgLQgLgKAAgPg");
	this.shape_1057.setTransform(425.125,315.3875);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("#FFFFFF").s().p("AgZAXQgLgKAAgPQAAgPALgLQAogKAKAKQAMALAAAPQAAAPgMAKQgKALgPAAQgOAAgLgLg");
	this.shape_1058.setTransform(425.125,315.3875);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AglgCQAAgPALgMQApgKALAKQAMAMAAAPQAAAPgMAKQgLAMgPAAQgPAAgLgMQgLgKAAgPg");
	this.shape_1059.setTransform(425.1,315.3625);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("#FFFFFF").s().p("AgaAXQgKgKAAgPQAAgPAKgMQApgKALAKQALAMABAPQgBAPgLAKQgLAMgPAAQgPAAgLgMg");
	this.shape_1060.setTransform(425.1,315.3625);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AglgCQAAgPAKgMQArgLALALQALAMAAAPQAAAPgLALQgLAMgQAAQgPAAgMgMQgKgLAAgPg");
	this.shape_1061.setTransform(425.125,315.3875);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("#FFFFFF").s().p("AgbAYQgKgLAAgPQAAgPAKgMQArgLALALQALAMAAAPQAAAPgLALQgLAMgQAAQgPAAgMgMg");
	this.shape_1062.setTransform(425.125,315.3875);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgmgCQAAgQALgMQArgLALALQAMAMAAAQQAAAQgMALQgLAMgQAAQgPAAgMgMQgLgLAAgQg");
	this.shape_1063.setTransform(425.125,315.4);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("#FFFFFF").s().p("AgbAZQgLgMAAgPQAAgQALgMQArgLALALQAMAMAAAQQAAAPgMAMQgLAMgQgBQgPABgMgMg");
	this.shape_1064.setTransform(425.125,315.4);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgngCQAAgQALgMQAsgMAMAMQAMAMAAAQQAAAQgMALQgMAMgQAAQgPAAgNgMQgLgLAAgQg");
	this.shape_1065.setTransform(425.125,315.4);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#FFFFFF").s().p("AgcAZQgLgMAAgPQAAgQALgNQAsgKAMAKQAMANAAAQQAAAPgMAMQgMAMgQAAQgPAAgNgMg");
	this.shape_1066.setTransform(425.125,315.4);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AApAAQAAARgNALQgLANgRAAQgQAAgMgNQgMgLAAgRQAAgQAMgMQAMgMAQAAQARAAALAMQANAMAAAQg");
	this.shape_1067.setTransform(425.125,315.125);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("#FFFFFF").s().p("AgcAcQgMgLAAgRQAAgQAMgMQAMgMAQAAQARAAALAMQANAMAAAQQAAARgNALQgLANgRAAQgQAAgMgNg");
	this.shape_1068.setTransform(425.125,315.125);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgngCQAAgQALgNQAtgLALALQAMANAAAQQAAAQgMALQgLAMgRAAQgPAAgNgMQgLgLAAgQg");
	this.shape_1069.setTransform(425.125,315.4125);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f("#FFFFFF").s().p("AgcAZQgLgLAAgQQAAgQALgNQAtgLALALQAMANAAAQQAAAQgMALQgLAMgRAAQgPAAgNgMg");
	this.shape_1070.setTransform(425.125,315.4125);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgmgCQAAgQALgMQArgMALAMQANAMAAAQQAAAPgNALQgLANgQAAQgPAAgMgNQgLgLAAgPg");
	this.shape_1071.setTransform(425.15,315.4125);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("#FFFFFF").s().p("AgcAYQgLgLAAgPQAAgQALgMQAsgMALAMQANAMAAAQQAAAPgNALQgLANgQAAQgQAAgMgNg");
	this.shape_1072.setTransform(425.15,315.4125);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgmgCQAAgQALgLQArgLALALQAMALAAAQQAAAQgMALQgLALgQAAQgPAAgMgLQgLgLAAgQg");
	this.shape_1073.setTransform(425.15,315.4);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("#FFFFFF").s().p("AgbAZQgLgMAAgPQAAgQALgLQArgLALALQAMALAAAQQAAAPgMAMQgLALgQAAQgPAAgMgLg");
	this.shape_1074.setTransform(425.15,315.4);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AglgCQAAgPALgMQAqgLALALQALAMAAAPQAAAPgLALQgLAMgQAAQgPAAgLgMQgLgLAAgPg");
	this.shape_1075.setTransform(425.125,315.4);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("#FFFFFF").s().p("AgaAYQgLgLAAgPQAAgPALgMQAqgLALALQALAMAAAPQAAAPgLALQgLAMgQAAQgPAAgLgMg");
	this.shape_1076.setTransform(425.125,315.4);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AglgCQAAgPALgLQAqgLAKALQAMALAAAPQAAAPgMALQgKALgQAAQgOAAgMgLQgLgLAAgPg");
	this.shape_1077.setTransform(425.125,315.4);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("#FFFFFF").s().p("AgaAYQgLgLAAgPQAAgPALgLQAqgLAKALQAMALAAAPQAAAPgMALQgKALgQAAQgOAAgMgLg");
	this.shape_1078.setTransform(425.125,315.4);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgkgCQAAgPAKgLQApgLALALQALALAAAPQAAAPgLAKQgLAMgPAAQgOAAgMgMQgKgKAAgPg");
	this.shape_1079.setTransform(425.15,315.3875);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f("#FFFFFF").s().p("AgaAXQgKgKAAgPQAAgPAKgLQApgLAKALQAMALAAAPQAAAPgMAKQgKAMgPAAQgOAAgMgMg");
	this.shape_1080.setTransform(425.15,315.3875);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgjgCQAAgOAKgMQAogKAKAKQAMAMAAAOQAAAPgMAKQgKALgPAAQgOAAgLgLQgKgKAAgPg");
	this.shape_1081.setTransform(425.15,315.3875);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f("#FFFFFF").s().p("AgaAXQgJgKgBgPQABgOAJgMQApgKAKAKQALAMAAAOQAAAPgLAKQgKALgPAAQgOAAgMgLg");
	this.shape_1082.setTransform(425.15,315.3875);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgjgCQAAgOAKgLQAogKAKAKQALALAAAOQAAAOgLALQgKAKgPAAQgOAAgLgKQgKgLAAgOg");
	this.shape_1083.setTransform(425.15,315.375);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f("#FFFFFF").s().p("AgZAXQgKgLAAgOQAAgOAKgLQAogKAKAKQALALAAAOQAAAOgLALQgLAKgOAAQgOAAgLgKg");
	this.shape_1084.setTransform(425.15,315.375);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgigCQAAgOAKgLQAngKAKAKQALALAAAOQAAAOgLAKQgKALgPAAQgNAAgLgLQgKgKAAgOg");
	this.shape_1085.setTransform(425.15,315.375);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#FFFFFF").s().p("AgYAWQgLgKAAgOQAAgOALgLQAmgKAKAKQALALAAAOQAAAOgLAKQgKALgOAAQgOAAgKgLg");
	this.shape_1086.setTransform(425.15,315.375);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgigBQAAgPAKgKQAmgKAKAKQALAKAAAPQAAANgLAKQgKAKgOAAQgNAAgLgKQgKgKAAgNg");
	this.shape_1087.setTransform(425.175,315.375);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f("#FFFFFF").s().p("AgYAWQgKgKAAgNQAAgPAKgKQAmgKAKAKQALAKAAAPQAAANgLAKQgKAKgOAAQgNAAgLgKg");
	this.shape_1088.setTransform(425.175,315.375);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AghgBQAAgOAKgLQAlgKAKAKQAKALAAAOQAAANgKAJQgKALgOAAQgNAAgKgLQgKgJAAgNg");
	this.shape_1089.setTransform(425.15,315.375);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#FFFFFF").s().p("AgXAVQgKgJAAgNQAAgOAKgLQAlgKAKAKQAKALAAAOQAAANgKAJQgKALgOAAQgNAAgKgLg");
	this.shape_1090.setTransform(425.15,315.375);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgggBQAAgOAJgKQAlgKAJAKQALAKAAAOQAAANgLAJQgJAKgOAAQgMAAgLgKQgJgJAAgNg");
	this.shape_1091.setTransform(425.15,315.375);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#FFFFFF").s().p("AgXAVQgJgJAAgNQAAgOAJgKQAlgKAJAKQAKAKAAAOQAAANgKAJQgJAKgOAAQgMAAgLgKg");
	this.shape_1092.setTransform(425.15,315.375);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgggBQAAgOAKgKQAkgJAJAJQAKAKAAAOQAAAMgKAKQgJAJgOAAQgMAAgKgJQgKgKAAgMg");
	this.shape_1093.setTransform(425.15,315.3625);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#FFFFFF").s().p("AgWAVQgKgKAAgMQAAgOAKgKQAkgJAJAJQAKAKAAAOQAAAMgKAKQgJAJgOAAQgMAAgKgJg");
	this.shape_1094.setTransform(425.15,315.3625);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgggBQAAgOAKgJQAkgKAJAKQAKAJAAAOQAAAMgKAJQgJAKgOAAQgMAAgKgKQgKgJAAgMg");
	this.shape_1095.setTransform(425.15,315.3625);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f("#FFFFFF").s().p("AgWAUQgJgJAAgMQAAgOAJgJQAjgKAKAKQAKAJgBAOQABAMgKAJQgKAKgNAAQgMAAgKgKg");
	this.shape_1096.setTransform(425.15,315.3625);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgfgBQAAgNAJgKQAjgJAJAJQAKAKAAANQAAAMgKAJQgJAJgNAAQgMAAgKgJQgJgJAAgMg");
	this.shape_1097.setTransform(425.175,315.3625);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#FFFFFF").s().p("AgWAUQgJgJAAgMQAAgNAJgKQAjgJAJAJQAKAKAAANQAAAMgKAJQgJAJgNAAQgMAAgKgJg");
	this.shape_1098.setTransform(425.175,315.3625);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgegBQAAgNAIgKQAjgJAIAJQAKAKAAANQAAAMgKAIQgIAKgNAAQgMAAgKgKQgIgIAAgMg");
	this.shape_1099.setTransform(425.175,315.35);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#FFFFFF").s().p("AgWAUQgIgJAAgMQAAgNAIgJQAjgKAIAKQAKAJAAANQAAAMgKAJQgIAJgNAAQgMAAgKgJg");
	this.shape_1100.setTransform(425.175,315.35);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgdgBQAAgNAIgJQAigJAIAJQAKAJAAANQAAALgKAJQgIAJgNAAQgMAAgJgJQgIgJAAgLg");
	this.shape_1101.setTransform(425.15,315.35);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#FFFFFF").s().p("AgVATQgIgJAAgLQAAgMAIgKQAigJAIAJQAKAKAAAMQAAALgKAJQgIAKgNAAQgMAAgJgKg");
	this.shape_1102.setTransform(425.15,315.35);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgdgBQAAgMAJgJQAhgJAIAJQAJAJAAAMQAAAMgJAIQgIAJgNAAQgLAAgJgJQgJgIAAgMg");
	this.shape_1103.setTransform(425.15,315.3375);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f("#FFFFFF").s().p("AgUATQgJgIAAgMQAAgMAJgJQAhgJAIAJQAJAJAAAMQAAAMgJAIQgIAJgNAAQgLAAgJgJg");
	this.shape_1104.setTransform(425.15,315.3375);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgcgBQAAgMAIgJQAggIAIAIQAJAJAAAMQAAALgJAJQgIAIgMAAQgLAAgJgIQgIgJAAgLg");
	this.shape_1105.setTransform(425.175,315.3375);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f("#FFFFFF").s().p("AgUATQgIgJAAgLQAAgMAIgJQAggIAIAIQAJAJAAAMQAAALgJAJQgIAIgMAAQgLAAgJgIg");
	this.shape_1106.setTransform(425.175,315.3375);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AAdAAQAAAMgJAIQgIAJgMAAQgLAAgJgJQgIgIAAgMQAAgLAIgIQAJgJALAAQAMAAAIAJQAJAIAAALg");
	this.shape_1107.setTransform(425.175,315.125);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f("#FFFFFF").s().p("AgUAUQgIgIAAgMQAAgLAIgIQAJgJALAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgLAAgJgJg");
	this.shape_1108.setTransform(425.175,315.125);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgcgBQAAgMAIgJQAggIAIAIQAJAJAAAMQAAAMgJAIQgIAIgMAAQgLAAgJgIQgIgIAAgMg");
	this.shape_1109.setTransform(425.175,315.3375);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f("#FFFFFF").s().p("AgUATQgIgIAAgMQAAgMAIgJQAggIAIAIQAJAJAAAMQAAAMgJAIQgIAIgMAAQgLAAgJgIg");
	this.shape_1110.setTransform(425.175,315.3375);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgdgBQAAgNAIgJQAhgIAJAIQAJAJAAANQAAALgJAJQgJAJgMAAQgMAAgJgJQgIgJAAgLg");
	this.shape_1111.setTransform(425.2,315.3625);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f("#FFFFFF").s().p("AgVATQgIgJAAgLQAAgNAIgJQAhgIAIAIQAKAJAAANQAAALgKAJQgIAJgMAAQgLAAgKgJg");
	this.shape_1112.setTransform(425.2,315.3625);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgegBQAAgNAJgJQAhgJAJAJQAKAJAAANQAAAMgKAIQgJAJgMAAQgLAAgKgJQgJgIAAgMg");
	this.shape_1113.setTransform(425.175,315.3625);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f("#FFFFFF").s().p("AgVATQgJgIAAgMQAAgNAJgJQAhgJAJAJQAKAJAAANQAAAMgKAIQgJAJgMAAQgLAAgKgJg");
	this.shape_1114.setTransform(425.175,315.3625);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgegBQAAgNAJgJQAigKAIAKQAKAJAAANQAAAMgKAJQgIAJgNAAQgMAAgJgJQgJgJAAgMg");
	this.shape_1115.setTransform(425.175,315.3625);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f("#FFFFFF").s().p("AgVAUQgJgJAAgMQAAgNAJgJQAigKAIAKQAKAJAAANQAAAMgKAJQgIAJgNAAQgMAAgJgJg");
	this.shape_1116.setTransform(425.175,315.3625);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgggBQAAgOAKgJQAjgKAJAKQALAJAAAOQAAAMgLAJQgJAKgNAAQgMAAgKgKQgKgJAAgMg");
	this.shape_1117.setTransform(425.2,315.3875);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f("#FFFFFF").s().p("AgXAUQgIgJgBgMQABgOAIgJQAkgKAJAKQALAJAAAOQAAAMgLAJQgJAKgNAAQgMAAgLgKg");
	this.shape_1118.setTransform(425.2,315.3875);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgggBQAAgOAJgKQAlgJAJAJQAKAKAAAOQAAANgKAJQgJAKgOAAQgNAAgKgKQgJgJAAgNg");
	this.shape_1119.setTransform(425.2,315.3875);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f("#FFFFFF").s().p("AgXAVQgJgJAAgNQAAgOAJgKQAlgJAIAJQALAKAAAOQAAANgLAJQgIAKgOAAQgNAAgKgKg");
	this.shape_1120.setTransform(425.2,315.3875);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AghgBQAAgOAKgKQAlgKAJAKQALAKAAAOQAAANgLAJQgJAKgOAAQgNAAgKgKQgKgJAAgNg");
	this.shape_1121.setTransform(425.175,315.3875);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AghgBQAAgOAJgKQAmgLAKALQAKAKAAAOQAAANgKAKQgKAKgOAAQgNAAgLgKQgJgKAAgNg");
	this.shape_1122.setTransform(425.175,315.3875);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#FFFFFF").s().p("AgYAWQgJgKAAgNQAAgOAJgKQAmgLAKALQAKAKAAAOQAAANgKAKQgKAKgOAAQgNAAgLgKg");
	this.shape_1123.setTransform(425.175,315.3875);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgigBQAAgPAKgKQAmgLAKALQALAKAAAPQAAANgLAKQgKAKgOAAQgNAAgLgKQgKgKAAgNg");
	this.shape_1124.setTransform(425.2,315.4125);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#FFFFFF").s().p("AgYAWQgKgKAAgNQAAgPAKgKQAmgLAKALQALAKAAAPQAAANgLAKQgKAKgOAAQgOAAgKgKg");
	this.shape_1125.setTransform(425.2,315.4125);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgjgBQAAgPAKgLQAngKAKAKQAMALAAAPQAAANgMAKQgKALgOAAQgOAAgLgLQgKgKAAgNg");
	this.shape_1126.setTransform(425.2,315.4125);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#FFFFFF").s().p("AgZAWQgKgKAAgNQAAgPAKgLQAngKAKAKQAMALAAAPQAAANgMAKQgKALgOAAQgOAAgLgLg");
	this.shape_1127.setTransform(425.2,315.4125);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgjgBQAAgPAKgLQAngLAKALQAMALAAAPQAAAOgMAKQgKAKgOAAQgOAAgLgKQgKgKAAgOg");
	this.shape_1128.setTransform(425.2,315.4125);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#FFFFFF").s().p("AgZAXQgKgKAAgOQAAgPAKgLQAogLAKALQALALAAAPQAAAOgLAKQgLAKgOAAQgOAAgLgKg");
	this.shape_1129.setTransform(425.2,315.4125);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgkgBQAAgQALgKQAogMAKAMQAMAKAAAQQAAAOgMAKQgKALgPAAQgOAAgLgLQgLgKAAgOg");
	this.shape_1130.setTransform(425.175,315.4125);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#FFFFFF").s().p("AgZAXQgLgKAAgOQAAgQALgKQAogMAKAMQAMAKAAAQQAAAOgMAKQgKALgPAAQgOAAgLgLg");
	this.shape_1131.setTransform(425.175,315.4125);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgkgBQAAgQAKgLQApgLALALQALALAAAQQAAAOgLALQgLAKgPAAQgOAAgMgKQgKgLAAgOg");
	this.shape_1132.setTransform(425.175,315.4125);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#FFFFFF").s().p("AgaAYQgKgLAAgOQAAgQAKgLQApgLALALQALALAAAQQAAAOgLALQgLAKgPAAQgOAAgMgKg");
	this.shape_1133.setTransform(425.175,315.4125);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AglgBQAAgQAKgLQArgMAKAMQAMALAAAQQAAAOgMALQgKALgQAAQgPAAgMgLQgKgLAAgOg");
	this.shape_1134.setTransform(425.2,315.4375);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#FFFFFF").s().p("AgaAYQgLgLAAgOQAAgQALgLQAqgMAKAMQAMALAAAQQAAAOgMALQgKALgQAAQgOAAgMgLg");
	this.shape_1135.setTransform(425.2,315.4375);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgmgBQAAgQALgMQAqgLALALQAMAMAAAQQAAAPgMAKQgLAMgPAAQgPAAgMgMQgLgKAAgPg");
	this.shape_1136.setTransform(425.2,315.4375);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#FFFFFF").s().p("AgbAYQgKgKAAgPQAAgQAKgMQArgLALALQAMAMgBAQQABAPgMAKQgMAMgPAAQgPAAgMgMg");
	this.shape_1137.setTransform(425.2,315.4375);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgmgBQAAgRALgLQArgMAKAMQANALAAARQAAAPgNALQgKALgQAAQgQAAgLgLQgLgLAAgPg");
	this.shape_1138.setTransform(425.2,315.4375);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#FFFFFF").s().p("AgbAZQgLgLAAgPQAAgRALgLQArgMALAMQAMALAAARQAAAPgMALQgLALgQAAQgPAAgMgLg");
	this.shape_1139.setTransform(425.2,315.4375);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgngBQAAgRAMgLQArgNALANQANALAAARQAAAPgNALQgLAMgQAAQgPAAgMgMQgMgLAAgPg");
	this.shape_1140.setTransform(425.175,315.4375);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#FFFFFF").s().p("AgbAZQgMgLAAgPQAAgRAMgLQArgNALANQANALAAARQAAAPgNALQgLAMgQAAQgPAAgMgMg");
	this.shape_1141.setTransform(425.175,315.4375);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgogCQAAgRAMgLQAsgNAMANQANALAAARQAAAQgNALQgMAMgQAAQgPAAgNgMQgMgLAAgQg");
	this.shape_1142.setTransform(425.2,315.4625);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#FFFFFF").s().p("AgcAZQgMgLAAgQQAAgRAMgLQAsgNALANQANALAAARQAAAQgNALQgLAMgQAAQgPAAgNgMg");
	this.shape_1143.setTransform(425.2,315.4625);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AApABQAAARgNALQgMAMgQAAQgQAAgNgMQgLgLAAgRQAAgQALgMQANgNAQAAQAQAAAMANQANAMAAAQg");
	this.shape_1144.setTransform(425.2,315.15);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#FFFFFF").s().p("AgcAdQgMgMAAgRQAAgPAMgNQAMgMAQAAQAQAAAMAMQANANAAAPQAAARgNAMQgMAMgQAAQgQAAgMgMg");
	this.shape_1145.setTransform(425.2,315.15);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgogCQAAgQAMgMQAsgNAMANQANAMAAAQQAAAQgNALQgMAMgQAAQgPAAgNgMQgMgLAAgQg");
	this.shape_1146.setTransform(425.2,315.4625);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#FFFFFF").s().p("AgcAZQgMgLAAgQQAAgQAMgMQAsgNALANQANAMAAAQQAAAQgNALQgLAMgQAAQgPAAgNgMg");
	this.shape_1147.setTransform(425.2,315.4625);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgmgCQAAgQALgMQArgMALAMQAMAMAAAQQAAAQgMALQgLAMgQAAQgPAAgMgMQgLgLAAgQg");
	this.shape_1148.setTransform(425.2,315.45);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#FFFFFF").s().p("AgbAZQgLgLAAgQQAAgQALgMQArgMALAMQAMAMAAAQQAAAQgMALQgLAMgQAAQgPAAgMgMg");
	this.shape_1149.setTransform(425.2,315.45);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgmgCQAAgQALgLQAqgMALAMQANALAAAQQAAAPgNALQgLAMgPAAQgPAAgMgMQgLgLAAgPg");
	this.shape_1150.setTransform(425.2,315.45);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#FFFFFF").s().p("AgbAYQgLgLAAgPQAAgPALgMQArgMALAMQAMAMAAAPQAAAPgMALQgMAMgPAAQgPAAgMgMg");
	this.shape_1151.setTransform(425.2,315.45);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AglgCQAAgQAKgLQAqgLALALQAMALAAAQQAAAPgMALQgLALgPAAQgPAAgMgLQgKgLAAgPg");
	this.shape_1152.setTransform(425.225,315.4625);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#FFFFFF").s().p("AgbAYQgKgLAAgPQAAgQAKgLQAqgLALALQAMALAAAQQAAAPgMALQgLALgPAAQgPAAgMgLg");
	this.shape_1153.setTransform(425.225,315.4625);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AglgBQAAgQALgLQApgLALALQAMALAAAQQAAAOgMALQgLALgPAAQgPAAgLgLQgLgLAAgOg");
	this.shape_1154.setTransform(425.2,315.4375);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#FFFFFF").s().p("AgaAYQgKgLAAgOQAAgQAKgLQApgLALALQALALAAAQQAAAOgLALQgLALgPAAQgOAAgMgLg");
	this.shape_1155.setTransform(425.2,315.4375);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgkgBQAAgQALgKQAogMALAMQALAKAAAQQAAAOgLAKQgLALgPAAQgOAAgLgLQgLgKAAgOg");
	this.shape_1156.setTransform(425.2,315.4375);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#FFFFFF").s().p("AgaAXQgKgKAAgOQAAgQAKgKQApgMALAMQALAKAAAQQAAAOgLAKQgLALgPAAQgOAAgMgLg");
	this.shape_1157.setTransform(425.2,315.4375);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgjgCQAAgPAKgKQAngLALALQALAKAAAPQAAAOgLAKQgLALgOAAQgOAAgLgLQgKgKAAgOg");
	this.shape_1158.setTransform(425.225,315.45);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#FFFFFF").s().p("AgZAWQgKgKAAgOQAAgOAKgLQAngLALALQALALAAAOQAAAOgLAKQgLAMgOgBQgOABgLgMg");
	this.shape_1159.setTransform(425.225,315.45);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgjgBQAAgPAKgKQAngLAKALQAMAKAAAPQAAANgMAKQgKALgOAAQgNAAgMgLQgKgKAAgNg");
	this.shape_1160.setTransform(425.2,315.425);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#FFFFFF").s().p("AgZAWQgKgKAAgNQAAgPAKgKQAngLALALQAKAKABAPQgBANgKAKQgLALgOAAQgNAAgMgLg");
	this.shape_1161.setTransform(425.2,315.425);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgigBQAAgPAKgKQAmgKAKAKQALAKAAAPQAAANgLAKQgKAKgOAAQgOAAgKgKQgKgKAAgNg");
	this.shape_1162.setTransform(425.225,315.4375);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#FFFFFF").s().p("AgYAWQgKgKAAgNQAAgPAKgKQAmgKAKAKQALAKAAAPQAAANgLAKQgKAKgOAAQgOAAgKgKg");
	this.shape_1163.setTransform(425.225,315.4375);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AghgBQAAgOAJgKQAmgLAJALQALAKAAAOQAAANgLAKQgJAKgOAAQgNAAgLgKQgJgKAAgNg");
	this.shape_1164.setTransform(425.225,315.4375);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#FFFFFF").s().p("AgYAWQgJgKAAgNQAAgOAJgKQAmgLAJALQALAKAAAOQAAANgLAKQgJAKgOAAQgNAAgLgKg");
	this.shape_1165.setTransform(425.225,315.4375);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AghgBQAAgOAKgKQAkgKAKAKQAKAKAAAOQAAANgKAKQgKAJgNAAQgNAAgKgJQgKgKAAgNg");
	this.shape_1166.setTransform(425.2,315.4);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#FFFFFF").s().p("AgXAVQgKgJAAgNQAAgOAKgKQAlgKAJAKQALAKAAAOQAAANgLAJQgKAKgNAAQgMAAgLgKg");
	this.shape_1167.setTransform(425.2,315.4);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgggBQAAgOAJgKQAkgJAJAJQALAKAAAOQAAAMgLAKQgJAJgNAAQgNAAgKgJQgJgKAAgMg");
	this.shape_1168.setTransform(425.225,315.4125);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#FFFFFF").s().p("AgXAVQgJgKAAgMQAAgOAJgKQAkgJAJAJQALAKAAAOQAAAMgLAKQgJAJgNAAQgNAAgKgJg");
	this.shape_1169.setTransform(425.225,315.4125);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgfgBQAAgNAJgKQAjgJAJAJQAKAKAAANQAAAMgKAKQgJAJgNAAQgMAAgKgJQgJgKAAgMg");
	this.shape_1170.setTransform(425.2,315.3875);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#FFFFFF").s().p("AgWAVQgJgKAAgMQAAgNAJgKQAjgJAJAJQAKAKAAANQAAAMgKAKQgJAJgNAAQgMAAgKgJg");
	this.shape_1171.setTransform(425.2,315.3875);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgegBQAAgNAIgJQAigJAJAJQAKAJAAANQAAAMgKAJQgJAJgMAAQgMAAgKgJQgIgJAAgMg");
	this.shape_1172.setTransform(425.225,315.4);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f("#FFFFFF").s().p("AgWAUQgIgJAAgMQAAgNAIgKQAigIAJAIQAKAKAAANQAAAMgKAJQgJAJgMAAQgMAAgKgJg");
	this.shape_1173.setTransform(425.225,315.4);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgegBQAAgNAJgJQAhgJAJAJQAKAJAAANQAAAMgKAJQgJAJgMAAQgMAAgJgJQgJgJAAgMg");
	this.shape_1174.setTransform(425.225,315.4);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#FFFFFF").s().p("AgVATQgJgJAAgLQAAgNAJgJQAhgJAJAJQAKAJAAANQAAALgKAJQgJAKgMgBQgMABgJgKg");
	this.shape_1175.setTransform(425.225,315.4);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgdgBQAAgMAJgJQAggJAJAJQAJAJAAAMQAAALgJAJQgJAJgMAAQgLAAgJgJQgJgJAAgLg");
	this.shape_1176.setTransform(425.2,315.375);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#FFFFFF").s().p("AgUATQgJgJAAgLQAAgMAJgJQAggJAJAJQAJAJAAAMQAAALgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_1177.setTransform(425.2,315.375);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgcgBQAAgMAIgIQAfgJAJAJQAJAIAAAMQAAALgJAIQgJAJgLAAQgLAAgJgJQgIgIAAgLg");
	this.shape_1178.setTransform(425.225,315.3875);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#FFFFFF").s().p("AgUASQgIgIAAgLQAAgMAIgIQAfgJAJAJQAJAIAAAMQAAALgJAIQgJAJgLAAQgLAAgJgJg");
	this.shape_1179.setTransform(425.225,315.3875);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgbgBQAAgMAIgIQAegIAIAIQAJAIAAAMQAAALgJAIQgIAIgLAAQgLAAgIgIQgIgIAAgLg");
	this.shape_1180.setTransform(425.225,315.375);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#FFFFFF").s().p("AgTASQgIgIAAgLQAAgMAIgIQAegIAIAIQAJAIAAAMQAAALgJAIQgIAIgLAAQgLAAgIgIg");
	this.shape_1181.setTransform(425.225,315.375);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AAbAAQAAALgIAIQgIAIgLAAQgKAAgJgIQgHgIAAgLQAAgKAHgIQAJgIAKAAQALAAAIAIQAIAIAAAKg");
	this.shape_1182.setTransform(425.225,315.175);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f("#FFFFFF").s().p("AgTATQgHgIAAgLQAAgKAHgIQAJgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgJgIg");
	this.shape_1183.setTransform(425.225,315.175);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgbgBQAAgMAHgIQAfgIAJAIQAIAIAAAMQAAALgIAIQgJAIgLAAQgLAAgJgIQgHgIAAgLg");
	this.shape_1184.setTransform(425.225,315.375);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f("#FFFFFF").s().p("AgUASQgHgIAAgLQAAgMAHgIQAfgIAJAIQAIAIAAAMQAAALgIAIQgJAIgLAAQgLAAgJgIg");
	this.shape_1185.setTransform(425.225,315.375);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgdgBQAAgMAJgJQAggJAIAJQAKAJAAAMQAAALgKAJQgIAJgMAAQgLAAgJgJQgJgJAAgLg");
	this.shape_1186.setTransform(425.225,315.4);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f("#FFFFFF").s().p("AgUATQgJgJAAgLQAAgNAJgIQAggJAIAJQAKAIAAANQAAALgKAJQgIAJgMgBQgLABgJgJg");
	this.shape_1187.setTransform(425.225,315.4);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgfgBQAAgNAIgKQAkgJAJAJQAKAKAAANQAAAMgKAKQgJAJgNAAQgNAAgKgJQgIgKAAgMg");
	this.shape_1188.setTransform(425.25,315.4);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f("#FFFFFF").s().p("AgWAUQgJgJAAgMQAAgOAJgJQAjgJAJAJQAKAJAAAOQAAAMgKAJQgJAKgNgBQgNABgJgKg");
	this.shape_1189.setTransform(425.25,315.4);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgggBQAAgOAJgKQAkgKAKAKQAKAKAAAOQAAAMgKAKQgKAKgNAAQgNAAgKgKQgJgKAAgMg");
	this.shape_1190.setTransform(425.25,315.425);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f("#FFFFFF").s().p("AgXAVQgJgKAAgMQAAgOAJgKQAkgKAKAKQAKAKAAAOQAAAMgKAKQgKAKgNAAQgNAAgKgKg");
	this.shape_1191.setTransform(425.25,315.425);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AghgBQAAgOAJgLQAmgKAKAKQAKALAAAOQAAANgKAKQgKAKgOAAQgNAAgLgKQgJgKAAgNg");
	this.shape_1192.setTransform(425.25,315.425);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f("#FFFFFF").s().p("AgYAWQgJgKAAgNQAAgOAJgLQAlgKAKAKQALALAAAOQAAANgLAKQgKAKgNAAQgNAAgLgKg");
	this.shape_1193.setTransform(425.25,315.425);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgjgBQAAgPAKgLQAngKAKAKQAMALAAAPQAAANgMALQgKAKgOAAQgNAAgMgKQgKgLAAgNg");
	this.shape_1194.setTransform(425.25,315.45);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f("#FFFFFF").s().p("AgYAWQgKgKAAgNQAAgPAKgLQAmgKAKAKQALALAAAPQAAANgLAKQgKALgOAAQgOAAgKgLg");
	this.shape_1195.setTransform(425.25,315.45);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgkgBQAAgQAKgLQAogLALALQAMALAAAQQAAANgMALQgLALgOAAQgOAAgMgLQgKgLAAgNg");
	this.shape_1196.setTransform(425.275,315.45);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f("#FFFFFF").s().p("AgaAXQgKgLAAgNQAAgPAKgMQAogKALAKQAMAMAAAPQAAANgMALQgLALgOAAQgOAAgMgLg");
	this.shape_1197.setTransform(425.275,315.45);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AglgBQAAgQAKgLQAqgMALAMQAMALAAAQQAAAOgMALQgLALgPAAQgPAAgMgLQgKgLAAgOg");
	this.shape_1198.setTransform(425.275,315.45);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f("#FFFFFF").s().p("AgbAYQgKgLAAgOQAAgQAKgMQAqgLALALQAMAMAAAQQAAAOgMALQgLALgPAAQgPAAgMgLg");
	this.shape_1199.setTransform(425.275,315.45);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgmgBQAAgRALgLQAqgMAMAMQAMALAAARQAAAOgMAMQgMALgPAAQgPAAgMgLQgLgMAAgOg");
	this.shape_1200.setTransform(425.275,315.475);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f("#FFFFFF").s().p("AgbAZQgLgMAAgOQAAgRALgLQAqgMAMAMQAMALAAARQAAAOgMAMQgMALgPAAQgPAAgMgLg");
	this.shape_1201.setTransform(425.275,315.475);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AAoABQAAAQgMAMQgMALgQAAQgQAAgMgLQgLgMAAgQQAAgQALgMQAMgMAQAAQAQAAAMAMQAMAMAAAQg");
	this.shape_1202.setTransform(425.275,315.175);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f("#FFFFFF").s().p("AgcAdQgLgMAAgQQAAgQALgMQAMgMAQAAQAQAAAMAMQAMAMAAAQQAAAQgMAMQgMALgQAAQgQAAgMgLg");
	this.shape_1203.setTransform(425.275,315.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_956},{t:this.shape_955}]}).to({state:[{t:this.shape_958},{t:this.shape_957}]},1).to({state:[{t:this.shape_959},{t:this.shape_957}]},1).to({state:[{t:this.shape_961},{t:this.shape_960}]},1).to({state:[{t:this.shape_963},{t:this.shape_962,p:{x:425.025,y:315.025}}]},1).to({state:[{t:this.shape_964},{t:this.shape_962,p:{x:425,y:315}}]},1).to({state:[{t:this.shape_966},{t:this.shape_965}]},1).to({state:[{t:this.shape_968},{t:this.shape_967}]},1).to({state:[{t:this.shape_970,p:{x:425.025,y:315.025}},{t:this.shape_969,p:{x:425.025,y:315.025}}]},1).to({state:[{t:this.shape_972},{t:this.shape_971}]},1).to({state:[{t:this.shape_974},{t:this.shape_973}]},1).to({state:[{t:this.shape_976},{t:this.shape_975}]},1).to({state:[{t:this.shape_978},{t:this.shape_977}]},1).to({state:[{t:this.shape_980},{t:this.shape_979}]},1).to({state:[{t:this.shape_982,p:{x:425.05,y:315.05}},{t:this.shape_981,p:{x:425.05,y:315.05}}]},1).to({state:[{t:this.shape_982,p:{x:425.025,y:315.025}},{t:this.shape_981,p:{x:425.025,y:315.025}}]},1).to({state:[{t:this.shape_984},{t:this.shape_983}]},1).to({state:[{t:this.shape_986},{t:this.shape_985}]},1).to({state:[{t:this.shape_988},{t:this.shape_987}]},1).to({state:[{t:this.shape_990},{t:this.shape_989}]},1).to({state:[{t:this.shape_992},{t:this.shape_991}]},1).to({state:[{t:this.shape_994},{t:this.shape_993}]},1).to({state:[{t:this.shape_970,p:{x:425.05,y:315.05}},{t:this.shape_969,p:{x:425.05,y:315.05}}]},1).to({state:[{t:this.shape_996},{t:this.shape_995}]},1).to({state:[{t:this.shape_998},{t:this.shape_997}]},1).to({state:[{t:this.shape_1000},{t:this.shape_999}]},1).to({state:[{t:this.shape_1002},{t:this.shape_1001}]},1).to({state:[{t:this.shape_1004},{t:this.shape_1003}]},1).to({state:[{t:this.shape_1006},{t:this.shape_1005}]},1).to({state:[{t:this.shape_1008},{t:this.shape_1007}]},1).to({state:[{t:this.shape_1010},{t:this.shape_1009}]},1).to({state:[{t:this.shape_1012},{t:this.shape_1011}]},1).to({state:[{t:this.shape_1014},{t:this.shape_1013}]},1).to({state:[{t:this.shape_1016},{t:this.shape_1015}]},1).to({state:[{t:this.shape_1018},{t:this.shape_1017}]},1).to({state:[{t:this.shape_1020},{t:this.shape_1019}]},1).to({state:[{t:this.shape_1022},{t:this.shape_1021}]},1).to({state:[{t:this.shape_1024},{t:this.shape_1023}]},1).to({state:[{t:this.shape_1026},{t:this.shape_1025}]},1).to({state:[{t:this.shape_1028},{t:this.shape_1027}]},1).to({state:[{t:this.shape_1030},{t:this.shape_1029}]},1).to({state:[{t:this.shape_1032},{t:this.shape_1031}]},1).to({state:[{t:this.shape_1034},{t:this.shape_1033}]},1).to({state:[{t:this.shape_1036},{t:this.shape_1035}]},1).to({state:[{t:this.shape_1038},{t:this.shape_1037}]},1).to({state:[{t:this.shape_1040},{t:this.shape_1039}]},1).to({state:[{t:this.shape_1042},{t:this.shape_1041}]},1).to({state:[{t:this.shape_1044},{t:this.shape_1043}]},1).to({state:[{t:this.shape_1046},{t:this.shape_1045}]},1).to({state:[{t:this.shape_1048},{t:this.shape_1047}]},1).to({state:[{t:this.shape_1050,p:{x:425.1,y:315.3375}},{t:this.shape_1049}]},1).to({state:[{t:this.shape_1052},{t:this.shape_1051}]},1).to({state:[{t:this.shape_1054},{t:this.shape_1053}]},1).to({state:[{t:this.shape_1056},{t:this.shape_1055}]},1).to({state:[{t:this.shape_1058},{t:this.shape_1057}]},1).to({state:[{t:this.shape_1060},{t:this.shape_1059}]},1).to({state:[{t:this.shape_1062},{t:this.shape_1061}]},1).to({state:[{t:this.shape_1064},{t:this.shape_1063}]},1).to({state:[{t:this.shape_1066},{t:this.shape_1065}]},1).to({state:[{t:this.shape_1068},{t:this.shape_1067}]},1).to({state:[{t:this.shape_1070},{t:this.shape_1069}]},1).to({state:[{t:this.shape_1072},{t:this.shape_1071}]},1).to({state:[{t:this.shape_1074},{t:this.shape_1073}]},1).to({state:[{t:this.shape_1076},{t:this.shape_1075}]},1).to({state:[{t:this.shape_1078},{t:this.shape_1077}]},1).to({state:[{t:this.shape_1080},{t:this.shape_1079}]},1).to({state:[{t:this.shape_1082},{t:this.shape_1081}]},1).to({state:[{t:this.shape_1084},{t:this.shape_1083}]},1).to({state:[{t:this.shape_1086},{t:this.shape_1085}]},1).to({state:[{t:this.shape_1088},{t:this.shape_1087}]},1).to({state:[{t:this.shape_1090},{t:this.shape_1089}]},1).to({state:[{t:this.shape_1092},{t:this.shape_1091}]},1).to({state:[{t:this.shape_1094},{t:this.shape_1093}]},1).to({state:[{t:this.shape_1096},{t:this.shape_1095}]},1).to({state:[{t:this.shape_1098},{t:this.shape_1097}]},1).to({state:[{t:this.shape_1100},{t:this.shape_1099}]},1).to({state:[{t:this.shape_1102},{t:this.shape_1101}]},1).to({state:[{t:this.shape_1104},{t:this.shape_1103}]},1).to({state:[{t:this.shape_1106,p:{x:425.175,y:315.3375}},{t:this.shape_1105,p:{x:425.175,y:315.3375}}]},1).to({state:[{t:this.shape_1108},{t:this.shape_1107}]},1).to({state:[{t:this.shape_1110},{t:this.shape_1109}]},1).to({state:[{t:this.shape_1112},{t:this.shape_1111}]},1).to({state:[{t:this.shape_1114},{t:this.shape_1113}]},1).to({state:[{t:this.shape_1116},{t:this.shape_1115}]},1).to({state:[{t:this.shape_1098},{t:this.shape_1097}]},1).to({state:[{t:this.shape_1118},{t:this.shape_1117}]},1).to({state:[{t:this.shape_1120},{t:this.shape_1119}]},1).to({state:[{t:this.shape_1050,p:{x:425.175,y:315.3875}},{t:this.shape_1121}]},1).to({state:[{t:this.shape_1123},{t:this.shape_1122}]},1).to({state:[{t:this.shape_1125},{t:this.shape_1124}]},1).to({state:[{t:this.shape_1127},{t:this.shape_1126}]},1).to({state:[{t:this.shape_1129},{t:this.shape_1128}]},1).to({state:[{t:this.shape_1131},{t:this.shape_1130}]},1).to({state:[{t:this.shape_1133},{t:this.shape_1132}]},1).to({state:[{t:this.shape_1135},{t:this.shape_1134}]},1).to({state:[{t:this.shape_1137},{t:this.shape_1136}]},1).to({state:[{t:this.shape_1139},{t:this.shape_1138}]},1).to({state:[{t:this.shape_1141},{t:this.shape_1140}]},1).to({state:[{t:this.shape_1143},{t:this.shape_1142}]},1).to({state:[{t:this.shape_1145},{t:this.shape_1144}]},1).to({state:[{t:this.shape_1147},{t:this.shape_1146}]},1).to({state:[{t:this.shape_1149},{t:this.shape_1148}]},1).to({state:[{t:this.shape_1151},{t:this.shape_1150}]},1).to({state:[{t:this.shape_1153},{t:this.shape_1152}]},1).to({state:[{t:this.shape_1155},{t:this.shape_1154}]},1).to({state:[{t:this.shape_1157},{t:this.shape_1156}]},1).to({state:[{t:this.shape_1159},{t:this.shape_1158}]},1).to({state:[{t:this.shape_1161},{t:this.shape_1160}]},1).to({state:[{t:this.shape_1163},{t:this.shape_1162}]},1).to({state:[{t:this.shape_1165},{t:this.shape_1164}]},1).to({state:[{t:this.shape_1167},{t:this.shape_1166}]},1).to({state:[{t:this.shape_1169},{t:this.shape_1168}]},1).to({state:[{t:this.shape_1171},{t:this.shape_1170}]},1).to({state:[{t:this.shape_1173},{t:this.shape_1172}]},1).to({state:[{t:this.shape_1175},{t:this.shape_1174}]},1).to({state:[{t:this.shape_1177},{t:this.shape_1176}]},1).to({state:[{t:this.shape_1106,p:{x:425.225,y:315.3875}},{t:this.shape_1105,p:{x:425.225,y:315.3875}}]},1).to({state:[{t:this.shape_1179},{t:this.shape_1178}]},1).to({state:[{t:this.shape_1181},{t:this.shape_1180}]},1).to({state:[{t:this.shape_1183},{t:this.shape_1182}]},1).to({state:[{t:this.shape_1185},{t:this.shape_1184}]},1).to({state:[{t:this.shape_1187},{t:this.shape_1186}]},1).to({state:[{t:this.shape_1175},{t:this.shape_1174}]},1).to({state:[{t:this.shape_1189},{t:this.shape_1188}]},1).to({state:[{t:this.shape_1191},{t:this.shape_1190}]},1).to({state:[{t:this.shape_1193},{t:this.shape_1192}]},1).to({state:[{t:this.shape_1195},{t:this.shape_1194}]},1).to({state:[{t:this.shape_1197},{t:this.shape_1196}]},1).to({state:[{t:this.shape_1199},{t:this.shape_1198}]},1).to({state:[{t:this.shape_1201},{t:this.shape_1200}]},1).to({state:[{t:this.shape_1203},{t:this.shape_1202}]},1).wait(1));

	// звезда
	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AAfAAQAAANgJAJQgJAJgNAAQgMAAgJgJQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMg");
	this.shape_1204.setTransform(663.1,333.1);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f("#FFFFFF").s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape_1205.setTransform(663.1,333.1);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AggAAQAAgNAKgJQAJgKANAAQAOAAAJAKQAKAJAAANQAAANgKAKQgJAKgOAAQgNAAgJgKQgKgKAAgNg");
	this.shape_1206.setTransform(663.1,333.1);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f("#FFFFFF").s().p("AgWAXQgJgKAAgNQAAgNAJgJQAKgKAMABQAOgBAJAKQAKAJAAANQAAANgKAKQgJAJgOAAQgMAAgKgJg");
	this.shape_1207.setTransform(663.1,333.1);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AghAAQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKQgKgKAAgOg");
	this.shape_1208.setTransform(663.1,333.1);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f("#FFFFFF").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAPAAAJAKQAKAKAAANQAAAOgKAKQgJAKgPAAQgNAAgKgKg");
	this.shape_1209.setTransform(663.1,333.1);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgiAAQAAgOAKgKQAKgLAOAAQAPAAAKALQALAKAAAOQAAAPgLAKQgKAKgPAAQgOAAgKgKQgKgKAAgPg");
	this.shape_1210.setTransform(663.1,333.1);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f("#FFFFFF").s().p("AgYAZQgLgKAAgPQAAgOALgKQAKgKAOAAQAPAAAKAKQAKAKAAAOQAAAPgKAKQgKALgPAAQgOAAgKgLg");
	this.shape_1211.setTransform(663.1,333.1);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgkAAQAAgPALgKQALgLAOAAQAQAAALALQAKAKAAAPQAAAPgKALQgLALgQAAQgOAAgLgLQgLgLAAgPg");
	this.shape_1212.setTransform(663.1,333.1);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f("#FFFFFF").s().p("AgZAbQgLgMAAgPQAAgOALgLQALgLAOAAQAPAAALALQALALAAAOQAAAPgLAMQgLAKgPAAQgOAAgLgKg");
	this.shape_1213.setTransform(663.1,333.1);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgmAAQAAgPAMgLQALgMAPAAQAQAAAMAMQALALAAAPQAAAQgLAMQgMAKgQAAQgPAAgLgKQgMgMAAgQg");
	this.shape_1214.setTransform(663.1,333.1);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f("#FFFFFF").s().p("AgaAcQgMgMAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMAMQgLAKgQABQgPgBgLgKg");
	this.shape_1215.setTransform(663.1,333.1);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgnAAQAAgQAMgLQAMgMAPAAQARAAAMAMQALALAAAQQAAARgLALQgMAMgRAAQgPAAgMgMQgMgLAAgRg");
	this.shape_1216.setTransform(663.1,333.1);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f("#FFFFFF").s().p("AgbAdQgMgMAAgRQAAgPAMgMQALgMAQAAQARAAALAMQAMAMAAAPQAAARgMAMQgLALgRAAQgQAAgLgLg");
	this.shape_1217.setTransform(663.1,333.1);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgoAAQAAgQAMgMQAMgNAQAAQASAAALANQAMAMAAAQQAAASgMALQgLAMgSAAQgQAAgMgMQgMgLAAgSg");
	this.shape_1218.setTransform(663.1,333.1);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f("#FFFFFF").s().p("AgcAeQgMgNAAgRQAAgQAMgMQAMgNAQAAQASAAAMANQALAMABAQQgBARgLANQgMAMgSgBQgQABgMgMg");
	this.shape_1219.setTransform(663.1,333.1);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgqAAQAAgRANgMQAMgNARAAQATAAAMANQAMAMAAARQAAASgMAMQgMANgTAAQgRAAgMgNQgNgMAAgSg");
	this.shape_1220.setTransform(663.1,333.1);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f("#FFFFFF").s().p("AgdAeQgNgMAAgSQAAgRANgMQAMgNARAAQASAAANANQAMAMAAARQAAASgMAMQgNANgSAAQgRAAgMgNg");
	this.shape_1221.setTransform(663.1,333.1);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgrAAQAAgSANgMQANgOARAAQATAAANAOQANAMAAASQAAATgNAMQgNANgTAAQgRAAgNgNQgNgMAAgTg");
	this.shape_1222.setTransform(663.1,333.1);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f("#FFFFFF").s().p("AgeAfQgOgMAAgTQAAgRAOgNQAMgNASAAQATAAANANQANANgBARQABATgNAMQgNAOgTAAQgSAAgMgOg");
	this.shape_1223.setTransform(663.1,333.1);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgtAAQAAgSANgOQAOgNASAAQATAAAOANQANAOAAASQAAATgNAOQgOANgTAAQgSAAgOgNQgNgOAAgTg");
	this.shape_1224.setTransform(663.15,333.15);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f("#FFFFFF").s().p("AggAhQgNgOAAgTQAAgTANgNQAOgNASAAQATAAANANQAOANAAATQAAATgOAOQgNANgTAAQgSAAgOgNg");
	this.shape_1225.setTransform(663.15,333.15);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgvAAQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUg");
	this.shape_1226.setTransform(663.15,333.15);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f("#FFFFFF").s().p("AghAiQgNgPAAgTQAAgTANgOQAOgNATAAQATAAAPANQAOAOgBATQABATgOAPQgPANgTAAQgTAAgOgNg");
	this.shape_1227.setTransform(663.15,333.15);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgwAAQAAgUAOgOQAOgOAUAAQAVAAAOAOQAOAOAAAUQAAAVgOAOQgOAOgVAAQgUAAgOgOQgOgOAAgVg");
	this.shape_1228.setTransform(663.15,333.15);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f("#FFFFFF").s().p("AgiAjQgOgPAAgUQAAgUAOgOQAOgOAUAAQAVAAAOAOQAOAOAAAUQAAAUgOAPQgOAOgVAAQgUAAgOgOg");
	this.shape_1229.setTransform(663.15,333.15);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgyAAQAAgUAPgPQAOgOAVAAQAVAAAOAOQAPAPAAAUQAAAVgPAPQgOAPgVAAQgVAAgOgPQgPgPAAgVg");
	this.shape_1230.setTransform(663.15,333.15);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f("#FFFFFF").s().p("AgjAjQgPgOAAgVQAAgVAPgOQAPgOAUAAQAVAAAPAOQAOAOAAAVQAAAVgOAOQgPAPgVABQgUgBgPgPg");
	this.shape_1231.setTransform(663.15,333.15);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgzAAQAAgVAPgPQAPgPAVAAQAVAAAPAPQAQAPAAAVQAAAWgQAPQgPAPgVAAQgVAAgPgPQgPgPAAgWg");
	this.shape_1232.setTransform(663.15,333.15);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f("#FFFFFF").s().p("AgkAkQgPgPAAgVQAAgVAPgPQAPgPAVAAQAWAAAPAPQAPAPAAAVQAAAVgPAPQgPAQgWAAQgVAAgPgQg");
	this.shape_1233.setTransform(663.15,333.15);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag1AAQAAgWAQgPQAPgPAWAAQAXAAAPAPQAQAPAAAWQAAAXgQAPQgPAQgXAAQgWAAgPgQQgQgPAAgXg");
	this.shape_1234.setTransform(663.15,333.15);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f("#FFFFFF").s().p("AglAlQgPgPAAgWQAAgVAPgQQAQgQAVAAQAXAAAOAQQAQAQABAVQgBAWgQAPQgOARgXgBQgVABgQgRg");
	this.shape_1235.setTransform(663.15,333.15);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag2AAQAAgWAQgQQAQgQAWAAQAXAAAQAQQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQQgQgQAAgXg");
	this.shape_1236.setTransform(663.15,333.15);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f("#FFFFFF").s().p("AgmAnQgQgQAAgXQAAgWAQgQQAQgQAWAAQAXAAAQAQQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_1237.setTransform(663.15,333.15);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag3AAQAAgXAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAXQAAAYgQAQQgQARgYAAQgXAAgQgRQgQgQAAgYg");
	this.shape_1238.setTransform(663.15,333.15);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f("#FFFFFF").s().p("AgnAoQgQgRAAgXQAAgXAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAXQAAAXgQARQgQAQgYAAQgXAAgQgQg");
	this.shape_1239.setTransform(663.15,333.15);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag5AAQAAgXARgRQAQgRAYAAQAYAAARARQARARAAAXQAAAZgRAQQgRARgYAAQgYAAgQgRQgRgQAAgZg");
	this.shape_1240.setTransform(663.15,333.15);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f("#FFFFFF").s().p("AgoApQgRgRAAgYQAAgYARgQQAQgRAYAAQAZAAAQARQARAQAAAYQAAAYgRARQgQARgZAAQgYAAgQgRg");
	this.shape_1241.setTransform(663.15,333.15);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AA7AAQAAAZgRARQgRASgZAAQgYAAgRgSQgSgRAAgZQAAgYASgRQARgRAYAAQAZAAARARQARARAAAYg");
	this.shape_1242.setTransform(663.15,333.15);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f("#FFFFFF").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgRAYAAQAZAAARARQARARAAAYQAAAZgRARQgRASgZAAQgYAAgRgSg");
	this.shape_1243.setTransform(663.15,333.15);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag6AAQAAgXASgRQARgRAXAAQAZAAAQARQASARAAAXQAAAZgSARQgQARgZAAQgXAAgRgRQgSgRAAgZg");
	this.shape_1244.setTransform(663.15,333.15);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f("#FFFFFF").s().p("AgpAqQgRgSAAgYQAAgXARgRQARgSAYABQAYgBARASQASARgBAXQABAYgSASQgRARgYAAQgYAAgRgRg");
	this.shape_1245.setTransform(663.15,333.15);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag5AAQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRQgRgRAAgYg");
	this.shape_1246.setTransform(663.175,333.125);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f("#FFFFFF").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_1247.setTransform(663.175,333.125);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag4AAQAAgXARgQQAQgRAXAAQAYAAAQARQARAQAAAXQAAAYgRAQQgQARgYAAQgXAAgQgRQgRgQAAgYg");
	this.shape_1248.setTransform(663.15,333.125);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f("#FFFFFF").s().p("AgnAoQgRgQAAgYQAAgXARgQQAQgRAXAAQAYAAAQARQARAQAAAXQAAAYgRAQQgQARgYAAQgXAAgQgRg");
	this.shape_1249.setTransform(663.15,333.125);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag3AAQAAgXARgQQAPgQAXAAQAYAAAQAQQAQAQAAAXQAAAYgQAQQgQAQgYAAQgXAAgPgQQgRgQAAgYg");
	this.shape_1250.setTransform(663.15,333.125);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f("#FFFFFF").s().p("AgnAoQgQgQAAgYQAAgXAQgQQARgQAWAAQAYAAAPAQQARAQAAAXQAAAYgRAQQgPAQgYAAQgWAAgRgQg");
	this.shape_1251.setTransform(663.15,333.125);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag1AAQAAgWAQgQQAPgQAWAAQAXAAAPAQQAQAQAAAWQAAAXgQAPQgPAQgXAAQgWAAgPgQQgQgPAAgXg");
	this.shape_1252.setTransform(663.175,333.1);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f("#FFFFFF").s().p("AglAnQgQgQAAgXQAAgWAQgQQAPgPAWAAQAXAAAPAPQAQAQAAAWQAAAXgQAQQgPAQgXAAQgWAAgPgQg");
	this.shape_1253.setTransform(663.175,333.1);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag1AAQAAgWAQgPQAPgQAWAAQAXAAAPAQQAQAPAAAWQAAAXgQAPQgPAPgXAAQgWAAgPgPQgQgPAAgXg");
	this.shape_1254.setTransform(663.15,333.1);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f("#FFFFFF").s().p("AgkAmQgRgPABgXQgBgWARgPQAPgPAVAAQAWAAAQAPQAQAPAAAWQAAAXgQAPQgQAPgWABQgVgBgPgPg");
	this.shape_1255.setTransform(663.15,333.1);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag0AAQAAgVAQgPQAPgQAVAAQAWAAAPAQQAQAPAAAVQAAAWgQAPQgPAQgWAAQgVAAgPgQQgQgPAAgWg");
	this.shape_1256.setTransform(663.175,333.075);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f("#FFFFFF").s().p("AgkAlQgQgPAAgWQAAgVAQgPQAPgQAVAAQAWAAAPAQQAQAPAAAVQAAAWgQAPQgPAQgWAAQgVAAgPgQg");
	this.shape_1257.setTransform(663.175,333.075);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgzAAQAAgVAPgPQAPgPAVAAQAWAAAPAPQAPAPAAAVQAAAWgPAPQgPAPgWAAQgVAAgPgPQgPgPAAgWg");
	this.shape_1258.setTransform(663.175,333.075);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f("#FFFFFF").s().p("AgkAlQgPgPAAgWQAAgVAPgPQAPgPAVAAQAWAAAPAPQAPAPAAAVQAAAWgPAPQgPAPgWAAQgVAAgPgPg");
	this.shape_1259.setTransform(663.175,333.075);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgyAAQAAgVAPgOQAOgPAVAAQAVAAAPAPQAPAOAAAVQAAAVgPAPQgPAPgVAAQgVAAgOgPQgPgPAAgVg");
	this.shape_1260.setTransform(663.2,333.1);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f("#FFFFFF").s().p("AgjAkQgPgOAAgWQAAgVAPgOQAOgPAVAAQAVAAAPAPQAPAOAAAVQAAAWgPAOQgPAPgVAAQgVAAgOgPg");
	this.shape_1261.setTransform(663.2,333.1);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgxAAQAAgUAPgOQAOgPAUAAQAVAAAOAPQAPAOAAAUQAAAVgPAOQgOAPgVAAQgUAAgOgPQgPgOAAgVg");
	this.shape_1262.setTransform(663.175,333.075);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f("#FFFFFF").s().p("AgiAjQgPgOAAgVQAAgUAPgOQAOgPAUAAQAVAAAOAPQAPAOAAAUQAAAVgPAOQgOAPgVAAQgUAAgOgPg");
	this.shape_1263.setTransform(663.175,333.075);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f("#FFFFFF").s().p("AgiAjQgOgOAAgVQAAgUAOgOQAOgOAUAAQAVAAAOAOQAOAOAAAUQAAAVgOAOQgOAOgVAAQgUAAgOgOg");
	this.shape_1264.setTransform(663.175,333.075);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgwAAQAAgTAOgOQAOgOAUAAQAUAAAOAOQAOAOAAATQAAAVgOANQgOAPgUAAQgUAAgOgPQgOgNAAgVg");
	this.shape_1265.setTransform(663.2,333.05);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f("#FFFFFF").s().p("AghAiQgPgOAAgUQAAgUAPgNQANgOAUAAQAUAAAOAOQAPANAAAUQAAAUgPAOQgOAOgUAAQgUAAgNgOg");
	this.shape_1266.setTransform(663.2,333.05);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgvAAQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOANQgOAPgUAAQgTAAgOgPQgOgNAAgUg");
	this.shape_1267.setTransform(663.175,333.05);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f("#FFFFFF").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATABQAUgBAOAOQAOAOAAATQAAAUgOAOQgOANgUAAQgTAAgOgNg");
	this.shape_1268.setTransform(663.175,333.05);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AguAAQAAgTAOgNQANgOATAAQAUAAANAOQAOANAAATQAAAUgOANQgNAOgUAAQgTAAgNgOQgOgNAAgUg");
	this.shape_1269.setTransform(663.175,333.025);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f("#FFFFFF").s().p("AggAhQgOgNAAgUQAAgTAOgNQANgOATAAQAUAAANAOQAOANAAATQAAAUgOANQgNAOgUAAQgTAAgNgOg");
	this.shape_1270.setTransform(663.175,333.025);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgtAAQAAgSANgNQANgOATAAQATAAAOAOQANANAAASQAAATgNANQgOAOgTAAQgTAAgNgOQgNgNAAgTg");
	this.shape_1271.setTransform(663.2,333.025);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f("#FFFFFF").s().p("AgfAgQgOgNAAgTQAAgSAOgNQAMgOATAAQATAAAOAOQANANAAASQAAATgNANQgOAOgTAAQgTAAgMgOg");
	this.shape_1272.setTransform(663.2,333.025);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgsAAQAAgSANgNQANgNASAAQATAAAMANQAOANAAASQAAATgOANQgMANgTAAQgSAAgNgNQgNgNAAgTg");
	this.shape_1273.setTransform(663.2,333.025);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f("#FFFFFF").s().p("AgfAgQgNgNAAgTQAAgSANgNQANgNASAAQATAAANANQANANAAASQAAATgNANQgNANgTAAQgSAAgNgNg");
	this.shape_1274.setTransform(663.2,333.025);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgrAAQAAgSANgMQAMgNASAAQATAAAMANQANAMAAASQAAATgNAMQgMANgTAAQgSAAgMgNQgNgMAAgTg");
	this.shape_1275.setTransform(663.175,333.025);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f("#FFFFFF").s().p("AgeAfQgNgMAAgTQAAgSANgMQAMgNASAAQATAAAMANQANAMAAASQAAATgNAMQgMANgTAAQgSAAgMgNg");
	this.shape_1276.setTransform(663.175,333.025);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgrAAQAAgSANgMQAMgNASAAQASAAAMANQANAMAAASQAAATgNAMQgMANgSAAQgSAAgMgNQgNgMAAgTg");
	this.shape_1277.setTransform(663.2,333);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f("#FFFFFF").s().p("AgeAfQgMgNAAgSQAAgRAMgNQANgMARAAQASAAANAMQANANgBARQABASgNANQgNAMgSAAQgRAAgNgMg");
	this.shape_1278.setTransform(663.2,333);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AArAAQAAASgNAMQgMANgSAAQgRAAgMgNQgNgMAAgSQAAgRANgMQAMgNARAAQASAAAMANQANAMAAARg");
	this.shape_1279.setTransform(663.2,333);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f("#FFFFFF").s().p("AgdAeQgMgMAAgSQAAgRAMgMQAMgMARAAQASAAAMAMQAMAMAAARQAAASgMAMQgMAMgSAAQgRAAgMgMg");
	this.shape_1280.setTransform(663.2,333);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgsAAQAAgSANgMQANgNASAAQATAAAMANQANAMAAASQAAATgNAMQgMANgTAAQgSAAgNgNQgNgMAAgTg");
	this.shape_1281.setTransform(663.2,333);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f("#FFFFFF").s().p("AgeAfQgOgMAAgTQAAgSAOgMQAMgNASAAQATAAANANQAMAMAAASQAAATgMAMQgNANgTAAQgSAAgMgNg");
	this.shape_1282.setTransform(663.2,333);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgsAAQAAgSANgNQANgNASAAQATAAANANQANANAAASQAAATgNANQgNANgTAAQgSAAgNgNQgNgNAAgTg");
	this.shape_1283.setTransform(663.225,333.025);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgtAAQAAgSANgOQANgNATAAQATAAAOANQANAOAAASQAAATgNAOQgOANgTAAQgTAAgNgNQgNgOAAgTg");
	this.shape_1284.setTransform(663.2,333);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AguAAQAAgTAOgNQANgOATAAQAUAAANAOQAOANAAATQAAAUgOAOQgNANgUAAQgTAAgNgNQgOgOAAgUg");
	this.shape_1285.setTransform(663.2,333);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgvAAQAAgUAOgNQANgOAUAAQAUAAAOAOQAOANAAAUQAAAVgOANQgOAOgUAAQgUAAgNgOQgOgNAAgVg");
	this.shape_1286.setTransform(663.2,333);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f("#FFFFFF").s().p("AghAiQgOgNAAgVQAAgUAOgNQANgOAUAAQAUAAAOAOQAOANAAAUQAAAVgOANQgOAOgUAAQgUAAgNgOg");
	this.shape_1287.setTransform(663.2,333);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgwAAQAAgUAOgNQAOgPAUAAQAVAAANAPQAPANAAAUQAAAVgPANQgNAPgVAAQgUAAgOgPQgOgNAAgVg");
	this.shape_1288.setTransform(663.2,333);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f("#FFFFFF").s().p("AghAiQgPgNAAgVQAAgUAPgNQANgPAUAAQAVAAANAPQAPANAAAUQAAAVgPANQgNAPgVAAQgUAAgNgPg");
	this.shape_1289.setTransform(663.2,333);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f("#FFFFFF").s().p("AgjAkQgPgPAAgVQAAgVAPgOQAOgPAVAAQAVAAAPAPQAPAOAAAVQAAAVgPAPQgPAPgVAAQgVAAgOgPg");
	this.shape_1290.setTransform(663.225,333.025);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgzAAQAAgVAQgPQAOgPAVAAQAWAAAOAPQAQAPAAAVQAAAWgQAOQgOAQgWAAQgVAAgOgQQgQgOAAgWg");
	this.shape_1291.setTransform(663.225,333.025);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f("#FFFFFF").s().p("AgjAkQgQgOAAgWQAAgVAQgPQAOgPAVAAQAWAAAOAPQAQAPAAAVQAAAWgQAOQgOAQgWAAQgVAAgOgQg");
	this.shape_1292.setTransform(663.225,333.025);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag0AAQAAgVAQgPQAPgQAVAAQAXAAAOAQQAQAPAAAVQAAAXgQAOQgOAQgXAAQgVAAgPgQQgQgOAAgXg");
	this.shape_1293.setTransform(663.2,333);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f("#FFFFFF").s().p("AgkAlQgPgOAAgXQAAgVAPgPQAPgPAVAAQAXAAAOAPQAPAPAAAVQAAAXgPAOQgOAPgXAAQgVAAgPgPg");
	this.shape_1294.setTransform(663.2,333);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag1AAQAAgWAQgPQAPgQAWAAQAXAAAPAQQAPAPAAAWQAAAXgPAPQgPAQgXAAQgWAAgPgQQgQgPAAgXg");
	this.shape_1295.setTransform(663.2,333);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f("#FFFFFF").s().p("AglAmQgQgPAAgXQAAgWAQgPQAPgPAWAAQAXAAAPAPQAPAPAAAWQAAAXgPAPQgPAPgXAAQgWAAgPgPg");
	this.shape_1296.setTransform(663.2,333);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag1AAQAAgWAQgQQAPgPAWAAQAXAAAPAPQAQAQAAAWQAAAXgQAPQgPAQgXAAQgWAAgPgQQgQgPAAgXg");
	this.shape_1297.setTransform(663.225,333.025);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f("#FFFFFF").s().p("AglAmQgQgPAAgXQAAgWAQgQQAPgPAWAAQAXAAAPAPQAQAQAAAWQAAAXgQAPQgPAQgXAAQgWAAgPgQg");
	this.shape_1298.setTransform(663.225,333.025);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag3AAQAAgXAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAXQAAAYgQAQQgQAQgYAAQgXAAgQgQQgQgQAAgYg");
	this.shape_1299.setTransform(663.225,333.025);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f("#FFFFFF").s().p("AgnAoQgQgQAAgYQAAgXAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAXQAAAYgQAQQgQAQgYAAQgXAAgQgQg");
	this.shape_1300.setTransform(663.225,333.025);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag4AAQAAgXARgRQAQgQAXAAQAYAAAQAQQARARAAAXQAAAYgRAQQgQARgYAAQgXAAgQgRQgRgQAAgYg");
	this.shape_1301.setTransform(663.225,333.025);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f("#FFFFFF").s().p("AgnAoQgRgQAAgYQAAgXARgRQAQgQAXAAQAYAAAQAQQARARAAAXQAAAYgRAQQgQARgYAAQgXAAgQgRg");
	this.shape_1302.setTransform(663.225,333.025);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag5AAQAAgXARgRQAQgRAYAAQAZAAAQARQARARAAAXQAAAZgRAQQgQARgZAAQgYAAgQgRQgRgQAAgZg");
	this.shape_1303.setTransform(663.2,333);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f("#FFFFFF").s().p("AgnApQgSgQAAgZQAAgXASgRQAPgRAYAAQAZAAAQARQARARAAAXQAAAZgRAQQgQARgZAAQgYAAgPgRg");
	this.shape_1304.setTransform(663.2,333);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag6AAQAAgYASgRQAQgRAYAAQAZAAAQARQASARAAAYQAAAZgSAQQgQASgZAAQgYAAgQgSQgSgQAAgZg");
	this.shape_1305.setTransform(663.225,333.025);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f("#FFFFFF").s().p("AgoApQgSgQAAgZQAAgYASgRQAQgRAYAAQAZAAAQARQASARAAAYQAAAZgSAQQgQASgZAAQgYAAgQgSg");
	this.shape_1306.setTransform(663.225,333.025);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag7AAQAAgYASgSQARgRAYAAQAZAAARARQASASAAAYQAAAZgSARQgRASgZAAQgYAAgRgSQgSgRAAgZg");
	this.shape_1307.setTransform(663.225,333.025);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f("#FFFFFF").s().p("AgpAqQgSgRAAgZQAAgYASgSQARgRAYAAQAZAAARARQASASAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");
	this.shape_1308.setTransform(663.225,333.025);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AA9AAQAAAagSARQgRASgaAAQgZAAgRgSQgSgRAAgaQAAgZASgRQARgSAZAAQAaAAARASQASARAAAZg");
	this.shape_1309.setTransform(663.225,333.025);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f("#FFFFFF").s().p("AgqArQgSgRAAgaQAAgZASgRQARgSAZAAQAaAAARASQASARAAAZQAAAagSARQgRASgaAAQgZAAgRgSg");
	this.shape_1310.setTransform(663.225,333.025);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag7AAQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSQgSgRAAgZg");
	this.shape_1311.setTransform(663.225,333.025);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f("#FFFFFF").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");
	this.shape_1312.setTransform(663.225,333.025);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag5AAQAAgYARgRQAQgQAYAAQAZAAAQAQQARARAAAYQAAAZgRAQQgQARgZAAQgYAAgQgRQgRgQAAgZg");
	this.shape_1313.setTransform(663.225,333.025);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f("#FFFFFF").s().p("AgoApQgRgQAAgZQAAgYARgRQAQgQAYAAQAZAAAQAQQARARAAAYQAAAZgRAQQgQARgZAAQgYAAgQgRg");
	this.shape_1314.setTransform(663.225,333.025);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag3AAQAAgXAQgQQAQgQAXAAQAYAAAPAQQARAQAAAXQAAAYgRAPQgPARgYAAQgXAAgQgRQgQgPAAgYg");
	this.shape_1315.setTransform(663.25,333.025);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f("#FFFFFF").s().p("AgmAnQgRgPAAgYQAAgXARgQQAPgQAXAAQAYAAAPAQQARAQAAAXQAAAYgRAPQgPARgYAAQgXAAgPgRg");
	this.shape_1316.setTransform(663.25,333.025);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag2AAQAAgWARgQQAPgQAWAAQAXAAAQAQQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgPgQQgRgQAAgXg");
	this.shape_1317.setTransform(663.225,333.025);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f("#FFFFFF").s().p("AglAnQgRgQAAgXQAAgWARgQQAPgQAWAAQAXAAAQAQQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgPgQg");
	this.shape_1318.setTransform(663.225,333.025);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag1AAQAAgWAQgPQAPgQAWAAQAXAAAPAQQAQAPAAAWQAAAXgQAPQgPAQgXAAQgWAAgPgQQgQgPAAgXg");
	this.shape_1319.setTransform(663.225,333.025);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f("#FFFFFF").s().p("AglAmQgQgPAAgXQAAgWAQgPQAPgQAWAAQAXAAAPAQQAQAPAAAWQAAAXgQAPQgPAQgXAAQgWAAgPgQg");
	this.shape_1320.setTransform(663.225,333.025);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag0AAQAAgVAQgPQAOgPAWAAQAWAAAOAPQARAPAAAVQAAAWgRAPQgOAPgWAAQgWAAgOgPQgQgPAAgWg");
	this.shape_1321.setTransform(663.25,333.025);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f("#FFFFFF").s().p("AgkAlQgQgPAAgWQAAgVAQgPQAOgPAWAAQAWAAAOAPQAQAPABAVQgBAWgQAPQgOAPgWAAQgWAAgOgPg");
	this.shape_1322.setTransform(663.25,333.025);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgyAAQAAgVAPgOQAOgPAVAAQAWAAAOAPQAPAOAAAVQAAAWgPAOQgOAPgWAAQgVAAgOgPQgPgOAAgWg");
	this.shape_1323.setTransform(663.225,333.025);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f("#FFFFFF").s().p("AgjAkQgPgOAAgWQAAgVAPgOQAOgPAVAAQAWAAAOAPQAPAOAAAVQAAAWgPAOQgOAPgWAAQgVAAgOgPg");
	this.shape_1324.setTransform(663.225,333.025);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgxAAQAAgUAPgPQAOgOAUAAQAVAAAOAOQAPAPAAAUQAAAVgPAOQgOAPgVAAQgUAAgOgPQgPgOAAgVg");
	this.shape_1325.setTransform(663.25,333.025);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f("#FFFFFF").s().p("AgiAjQgPgOAAgVQAAgUAPgPQANgOAVAAQAVAAAOAOQAPAPAAAUQAAAVgPAOQgOAPgVAAQgVAAgNgPg");
	this.shape_1326.setTransform(663.25,333.025);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgwAAQAAgUAOgOQAPgOATAAQAUAAAPAOQAOAOAAAUQAAAVgOAOQgPAOgUAAQgTAAgPgOQgOgOAAgVg");
	this.shape_1327.setTransform(663.25,333.025);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f("#FFFFFF").s().p("AgiAjQgOgOAAgVQAAgUAOgOQAPgOATAAQAVAAAOAOQAOAOAAAUQAAAVgOAOQgOAOgVAAQgTAAgPgOg");
	this.shape_1328.setTransform(663.25,333.025);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgvAAQAAgTAPgOQANgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgNgOQgPgOAAgUg");
	this.shape_1329.setTransform(663.225,333.025);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f("#FFFFFF").s().p("AggAiQgPgOAAgUQAAgTAPgOQANgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgNgOg");
	this.shape_1330.setTransform(663.225,333.025);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgtAAQAAgTANgNQANgNATAAQAUAAANANQANANAAATQAAAUgNANQgNANgUAAQgTAAgNgNQgNgNAAgUg");
	this.shape_1331.setTransform(663.25,333.025);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f("#FFFFFF").s().p("AggAhQgNgNAAgUQAAgTANgNQAOgNASAAQAUAAANANQAOANgBATQABAUgOANQgNANgUAAQgSAAgOgNg");
	this.shape_1332.setTransform(663.25,333.025);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f("#FFFFFF").s().p("AgeAfQgNgMAAgTQAAgSANgMQANgNARAAQATAAAMANQANAMAAASQAAATgNAMQgMANgTAAQgRAAgNgNg");
	this.shape_1333.setTransform(663.25,333.025);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgqAAQAAgRANgMQAMgNARAAQASAAAMANQANAMAAARQAAASgNAMQgMANgSAAQgRAAgMgNQgNgMAAgSg");
	this.shape_1334.setTransform(663.25,333.025);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f("#FFFFFF").s().p("AgdAeQgNgMAAgSQAAgRANgMQAMgNARAAQASAAAMANQANAMAAARQAAASgNAMQgMANgSAAQgRAAgMgNg");
	this.shape_1335.setTransform(663.25,333.025);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgpAAQAAgRANgMQAMgMAQAAQASAAAMAMQAMAMAAARQAAASgMAMQgMAMgSAAQgQAAgMgMQgNgMAAgSg");
	this.shape_1336.setTransform(663.225,333.025);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f("#FFFFFF").s().p("AgcAeQgNgMAAgSQAAgRANgMQAMgMAQAAQASAAAMAMQAMAMAAARQAAASgMAMQgMAMgSAAQgQAAgMgMg");
	this.shape_1337.setTransform(663.225,333.025);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgnAAQAAgQALgMQAMgLAQAAQARAAAMALQALAMAAAQQAAARgLAMQgMALgRAAQgQAAgMgLQgLgMAAgRg");
	this.shape_1338.setTransform(663.25,333.025);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f("#FFFFFF").s().p("AgbAdQgNgMAAgRQAAgQANgMQALgLAQAAQARAAALALQAMAMAAAQQAAARgMAMQgLALgRAAQgQAAgLgLg");
	this.shape_1339.setTransform(663.25,333.025);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgnAAQAAgQAMgLQAMgLAPAAQAQAAAMALQAMALAAAQQAAARgMALQgMALgQAAQgPAAgMgLQgMgLAAgRg");
	this.shape_1340.setTransform(663.25,333.025);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f("#FFFFFF").s().p("AgaAcQgMgLAAgRQAAgQAMgLQALgLAPAAQARAAALALQALALAAAQQAAARgLALQgLALgRAAQgPAAgLgLg");
	this.shape_1341.setTransform(663.25,333.025);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AglAAQAAgPALgLQALgLAPAAQAQAAALALQALALAAAPQAAAQgLALQgLALgQAAQgPAAgLgLQgLgLAAgQg");
	this.shape_1342.setTransform(663.25,333.025);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f("#FFFFFF").s().p("AgaAbQgLgLAAgQQAAgPALgLQALgLAPAAQAQAAALALQALALAAAPQAAAQgLALQgLALgQAAQgPAAgLgLg");
	this.shape_1343.setTransform(663.25,333.025);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AAlAAQAAAQgLAKQgLALgPAAQgOAAgLgLQgLgKAAgQQAAgPALgKQALgLAOAAQAPAAALALQALAKAAAPg");
	this.shape_1344.setTransform(663.25,333.025);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f("#FFFFFF").s().p("AgZAaQgLgKAAgQQAAgPALgKQAKgLAPAAQAQAAAKALQALAKAAAPQAAAQgLAKQgKALgQAAQgPAAgKgLg");
	this.shape_1345.setTransform(663.25,333.025);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgmAAQAAgQALgLQALgLAQAAQAQAAALALQAMALAAAQQAAARgMALQgLALgQAAQgQAAgLgLQgLgLAAgRg");
	this.shape_1346.setTransform(663.275,333.05);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f("#FFFFFF").s().p("AgbAbQgLgLAAgQQAAgQALgLQALgLAQAAQAQAAALALQAMALAAAQQAAAQgMALQgLAMgQAAQgQAAgLgMg");
	this.shape_1347.setTransform(663.275,333.05);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgoAAQAAgRAMgLQALgMARAAQASAAALAMQAMALAAARQAAASgMAMQgLALgSAAQgRAAgLgLQgMgMAAgSg");
	this.shape_1348.setTransform(663.25,333.025);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f("#FFFFFF").s().p("AgcAeQgNgMAAgSQAAgRANgLQALgMARAAQASAAALAMQANALAAARQAAASgNAMQgLALgSAAQgRAAgLgLg");
	this.shape_1349.setTransform(663.25,333.025);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgqAAQAAgRANgNQAMgMARAAQASAAAMAMQANANAAARQAAASgNAMQgMANgSAAQgRAAgMgNQgNgMAAgSg");
	this.shape_1350.setTransform(663.275,333.05);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgrAAQAAgRANgNQANgMARAAQASAAANAMQANANAAARQAAATgNAMQgNANgSAAQgRAAgNgNQgNgMAAgTg");
	this.shape_1351.setTransform(663.275,333.05);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.f("#FFFFFF").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNg");
	this.shape_1352.setTransform(663.275,333.05);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgsAAQAAgSANgNQANgMASAAQATAAAMAMQAOANAAASQAAATgOANQgMAMgTAAQgSAAgNgMQgNgNAAgTg");
	this.shape_1353.setTransform(663.275,333.05);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.f("#FFFFFF").s().p("AgfAgQgNgNAAgTQAAgSANgNQANgNASAAQATAAAMANQAOANAAASQAAATgOANQgMAMgTAAQgSAAgNgMg");
	this.shape_1354.setTransform(663.275,333.05);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgtAAQAAgSAOgNQANgOASAAQAUAAANAOQANANAAASQAAAUgNANQgNANgUAAQgSAAgNgNQgOgNAAgUg");
	this.shape_1355.setTransform(663.25,333.025);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.f("#FFFFFF").s().p("AgfAhQgOgNAAgUQAAgSAOgNQANgOASAAQAUAAANAOQANANAAASQAAAUgNANQgNANgUAAQgSAAgNgNg");
	this.shape_1356.setTransform(663.25,333.025);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AguAAQAAgTAOgOQANgNATAAQAUAAANANQAOAOAAATQAAAUgOANQgNAOgUAAQgTAAgNgOQgOgNAAgUg");
	this.shape_1357.setTransform(663.275,333.05);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.f("#FFFFFF").s().p("AggAiQgOgOAAgUQAAgTAOgOQANgNATAAQAUAAANANQAOAOAAATQAAAUgOAOQgNANgUAAQgTAAgNgNg");
	this.shape_1358.setTransform(663.275,333.05);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgvAAQAAgUAOgNQAOgOATAAQAUAAAOAOQAOANAAAUQAAAVgOANQgOAOgUAAQgTAAgOgOQgOgNAAgVg");
	this.shape_1359.setTransform(663.275,333.05);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.f("#FFFFFF").s().p("AghAjQgOgPAAgUQAAgUAOgNQAOgOATAAQAUAAAOAOQAOANAAAUQAAAUgOAPQgOANgUAAQgTAAgOgNg");
	this.shape_1360.setTransform(663.275,333.05);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgxAAQAAgVAOgOQAPgOAUAAQAVAAAOAOQAQAOAAAVQAAAVgQAPQgOAOgVAAQgUAAgPgOQgOgPAAgVg");
	this.shape_1361.setTransform(663.3,333.075);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.f("#FFFFFF").s().p("AgjAkQgOgPAAgVQAAgVAOgOQAOgOAVAAQAVAAAOAOQAPAOAAAVQAAAVgPAPQgOAOgVAAQgVAAgOgOg");
	this.shape_1362.setTransform(663.3,333.075);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgzAAQAAgVAQgOQAOgPAVAAQAWAAAOAPQAQAOAAAVQAAAWgQAPQgOAPgWAAQgVAAgOgPQgQgPAAgWg");
	this.shape_1363.setTransform(663.275,333.05);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.f("#FFFFFF").s().p("AgjAkQgQgOAAgWQAAgVAQgPQAOgPAVAAQAWAAAOAPQAQAPAAAVQAAAWgQAOQgOAPgWABQgVgBgOgPg");
	this.shape_1364.setTransform(663.275,333.05);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag0AAQAAgWAQgPQAPgPAVAAQAWAAAPAPQAQAPAAAWQAAAXgQAPQgPAPgWAAQgVAAgPgPQgQgPAAgXg");
	this.shape_1365.setTransform(663.275,333.05);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.f("#FFFFFF").s().p("AgkAlQgQgPAAgWQAAgWAQgOQAPgPAVgBQAWABAPAPQAQAOAAAWQAAAWgQAPQgPAPgWABQgVgBgPgPg");
	this.shape_1366.setTransform(663.275,333.05);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag3AAQAAgXARgQQAQgQAWAAQAYAAAPAQQARAQAAAXQAAAYgRAQQgPAQgYAAQgWAAgQgQQgRgQAAgYg");
	this.shape_1367.setTransform(663.3,333.075);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.f("#FFFFFF").s().p("AgnAoQgQgQAAgYQAAgXAQgQQAQgQAXAAQAYAAAPAQQARAQAAAXQAAAYgRAQQgPAQgYAAQgXAAgQgQg");
	this.shape_1368.setTransform(663.3,333.075);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag4AAQAAgXARgRQAQgQAXAAQAYAAAQAQQARARAAAXQAAAYgRARQgQAQgYAAQgXAAgQgQQgRgRAAgYg");
	this.shape_1369.setTransform(663.275,333.05);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.f("#FFFFFF").s().p("AgnApQgRgRAAgYQAAgXARgQQAQgRAXAAQAYAAAQARQARAQAAAXQAAAYgRARQgQAQgYAAQgXAAgQgQg");
	this.shape_1370.setTransform(663.275,333.05);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag5AAQAAgYARgQQARgRAXAAQAZAAAQARQASAQAAAYQAAAZgSAQQgQARgZAAQgXAAgRgRQgRgQAAgZg");
	this.shape_1371.setTransform(663.3,333.075);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.f("#FFFFFF").s().p("AgoApQgRgQAAgZQAAgYARgQQARgRAXAAQAZAAAPARQASAQAAAYQAAAZgSAQQgPARgZAAQgXAAgRgRg");
	this.shape_1372.setTransform(663.3,333.075);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AA8AAQAAAZgSARQgRARgZAAQgYAAgRgRQgRgRAAgZQAAgYARgRQARgRAYAAQAZAAARARQASARAAAYg");
	this.shape_1373.setTransform(663.3,333.075);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f("#FFFFFF").s().p("AgpAqQgRgRAAgZQAAgYARgRQARgRAYAAQAZAAAQARQASARAAAYQAAAZgSARQgQARgZAAQgYAAgRgRg");
	this.shape_1374.setTransform(663.3,333.075);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag5AAQAAgYARgRQARgQAXAAQAZAAAQAQQASARAAAYQAAAZgSARQgQAQgZAAQgXAAgRgQQgRgRAAgZg");
	this.shape_1375.setTransform(663.3,333.075);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f("#FFFFFF").s().p("AgoAqQgRgRAAgZQAAgYARgRQAQgQAYAAQAYAAARAQQARARAAAYQAAAZgRARQgRAQgYAAQgYAAgQgQg");
	this.shape_1376.setTransform(663.3,333.075);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag5AAQAAgXASgRQAQgQAXAAQAYAAAQAQQASARAAAXQAAAYgSARQgQAQgYAAQgXAAgQgQQgSgRAAgYg");
	this.shape_1377.setTransform(663.3,333.075);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f("#FFFFFF").s().p("AgnApQgRgRgBgYQABgXARgRQAQgQAXAAQAYAAAQAQQASARAAAXQAAAYgSARQgQAQgYAAQgXAAgQgQg");
	this.shape_1378.setTransform(663.3,333.075);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag3AAQAAgXAQgQQARgQAWAAQAYAAAQAQQARAQAAAXQAAAYgRAQQgQAQgYAAQgWAAgRgQQgQgQAAgYg");
	this.shape_1379.setTransform(663.3,333.075);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f("#FFFFFF").s().p("AgnAoQgRgQAAgYQAAgXARgQQAQgQAXAAQAYAAAQAQQAQAQABAXQgBAYgQAQQgQAQgYAAQgXAAgQgQg");
	this.shape_1380.setTransform(663.3,333.075);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag3AAQAAgXAQgQQAQgQAXAAQAXAAAQAQQARAQAAAXQAAAXgRAQQgQAQgXAAQgXAAgQgQQgQgQAAgXg");
	this.shape_1381.setTransform(663.325,333.1);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f("#FFFFFF").s().p("AgnAnQgQgQAAgXQAAgXAQgQQAQgQAXAAQAXAAAQAQQARAQAAAXQAAAXgRAQQgQAQgXABQgXgBgQgQg");
	this.shape_1382.setTransform(663.325,333.1);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag2AAQAAgXAQgPQAQgQAWAAQAXAAAPAQQARAPAAAXQAAAXgRAQQgPAPgXAAQgWAAgQgPQgQgQAAgXg");
	this.shape_1383.setTransform(663.325,333.1);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f("#FFFFFF").s().p("AgmAnQgQgQAAgXQAAgXAQgPQAQgPAWAAQAXAAAPAPQARAPAAAXQAAAXgRAQQgPAQgXAAQgWAAgQgQg");
	this.shape_1384.setTransform(663.325,333.1);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag1AAQAAgWAQgPQAPgQAWAAQAWAAAPAQQARAPAAAWQAAAXgRAPQgPAQgWAAQgWAAgPgQQgQgPAAgXg");
	this.shape_1385.setTransform(663.325,333.075);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f("#FFFFFF").s().p("AglAmQgQgPAAgXQAAgWAQgPQAPgQAWAAQAWAAAPAQQARAPAAAWQAAAXgRAPQgPAQgWAAQgWAAgPgQg");
	this.shape_1386.setTransform(663.325,333.075);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag0AAQAAgVAPgPQAQgQAVAAQAWAAAPAQQAQAPAAAVQAAAXgQAPQgPAPgWAAQgVAAgQgPQgPgPAAgXg");
	this.shape_1387.setTransform(663.325,333.075);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f("#FFFFFF").s().p("AglAmQgPgPAAgXQAAgVAPgPQAQgQAVAAQAWAAAPAQQAQAPAAAVQAAAXgQAPQgPAPgWAAQgVAAgQgPg");
	this.shape_1388.setTransform(663.325,333.075);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgzAAQAAgVAPgPQAPgPAVAAQAWAAAOAPQAQAPAAAVQAAAWgQAPQgOAPgWAAQgVAAgPgPQgPgPAAgWg");
	this.shape_1389.setTransform(663.325,333.075);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f("#FFFFFF").s().p("AgkAlQgPgPAAgWQAAgVAPgPQAPgPAVAAQAWAAAOAPQAQAPAAAVQAAAWgQAPQgOAPgWAAQgVAAgPgPg");
	this.shape_1390.setTransform(663.325,333.075);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgyAAQAAgUAPgPQAPgPAUAAQAVAAAOAPQAQAPAAAUQAAAWgQAOQgOAPgVAAQgUAAgPgPQgPgOAAgWg");
	this.shape_1391.setTransform(663.325,333.075);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.f("#FFFFFF").s().p("AgjAkQgPgOAAgWQAAgUAPgPQAPgPAUAAQAVAAAOAPQAQAPAAAUQAAAWgQAOQgOAPgVAAQgUAAgPgPg");
	this.shape_1392.setTransform(663.325,333.075);

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgxAAQAAgUAOgPQAPgOAUAAQAVAAANAOQAQAPAAAUQAAAVgQAOQgNAPgVAAQgUAAgPgPQgOgOAAgVg");
	this.shape_1393.setTransform(663.35,333.1);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.f("#FFFFFF").s().p("AgjAkQgOgOAAgWQAAgUAOgOQAPgPAUAAQAVAAAOAPQAPAOAAAUQAAAWgPAOQgOAOgVAAQgUAAgPgOg");
	this.shape_1394.setTransform(663.35,333.1);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgwAAQAAgUAOgOQAOgOAUAAQAVAAANAOQAPAOAAAUQAAAVgPAOQgNAOgVAAQgUAAgOgOQgOgOAAgVg");
	this.shape_1395.setTransform(663.325,333.1);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.f("#FFFFFF").s().p("AgiAjQgOgOAAgVQAAgUAOgOQAOgOAUAAQAVAAANAOQAPAOAAAUQAAAVgPAOQgNAOgVAAQgUAAgOgOg");
	this.shape_1396.setTransform(663.325,333.1);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgvAAQAAgUAOgNQAOgOATAAQAUAAANAOQAPANAAAUQAAAUgPAOQgNAOgUAAQgTAAgOgOQgOgOAAgUg");
	this.shape_1397.setTransform(663.325,333.1);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.f("#FFFFFF").s().p("AghAiQgOgNAAgVQAAgTAOgOQAOgOATAAQAUAAANAOQAPAOAAATQAAAVgPANQgNAOgUAAQgTAAgOgOg");
	this.shape_1398.setTransform(663.325,333.1);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgtAAQAAgTANgNQAOgNASAAQAUAAAMANQAOANAAATQAAAUgOANQgMANgUAAQgSAAgOgNQgNgNAAgUg");
	this.shape_1399.setTransform(663.325,333.1);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.f("#FFFFFF").s().p("AggAhQgNgNAAgUQAAgSANgNQAOgOASAAQAUAAAMAOQAOANAAASQAAAUgOANQgMANgUAAQgSAAgOgNg");
	this.shape_1400.setTransform(663.325,333.1);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgsAAQAAgSANgNQANgNASAAQATAAANANQANANAAASQAAATgNAOQgNAMgTAAQgSAAgNgMQgNgOAAgTg");
	this.shape_1401.setTransform(663.325,333.1);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.f("#FFFFFF").s().p("AgfAgQgNgMAAgUQAAgSANgNQANgNASAAQATAAANANQANANAAASQAAAUgNAMQgNANgTAAQgSAAgNgNg");
	this.shape_1402.setTransform(663.325,333.1);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgrAAQAAgRANgNQANgNARAAQATAAAMANQANANAAARQAAATgNANQgMAMgTAAQgRAAgNgMQgNgNAAgTg");
	this.shape_1403.setTransform(663.325,333.075);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.f("#FFFFFF").s().p("AgeAgQgNgNAAgTQAAgRANgNQANgNARAAQATAAAMANQANANAAARQAAATgNANQgMAMgTAAQgRAAgNgMg");
	this.shape_1404.setTransform(663.325,333.075);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgrAAQAAgSANgMQAMgNASAAQASAAAMANQAOAMAAASQAAASgOANQgMAMgSAAQgSAAgMgMQgNgNAAgSg");
	this.shape_1405.setTransform(663.35,333.1);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.f("#FFFFFF").s().p("AgeAfQgNgNAAgSQAAgRANgNQAMgNASABQASgBAMANQAOANAAARQAAASgOANQgMAMgSAAQgSAAgMgMg");
	this.shape_1406.setTransform(663.35,333.1);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgqAAQAAgRAMgMQANgNARAAQASAAALANQAOAMAAARQAAASgOAMQgLANgSAAQgRAAgNgNQgMgMAAgSg");
	this.shape_1407.setTransform(663.35,333.1);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.f("#FFFFFF").s().p("AgdAeQgNgMAAgSQAAgRANgMQAMgMARAAQASAAALAMQANAMABARQgBASgNAMQgLAMgSAAQgRAAgMgMg");
	this.shape_1408.setTransform(663.35,333.1);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgoAAQAAgRALgLQAMgNARAAQASAAALANQAMALAAARQAAASgMALQgLAMgSAAQgRAAgMgMQgLgLAAgSg");
	this.shape_1409.setTransform(663.35,333.1);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.f("#FFFFFF").s().p("AgcAeQgNgMAAgSQAAgQANgMQALgNARAAQARAAALANQAOAMAAAQQAAASgOAMQgLAMgRgBQgRABgLgMg");
	this.shape_1410.setTransform(663.35,333.1);

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AApAAQAAASgNALQgLALgRAAQgQAAgMgLQgLgLAAgSQAAgQALgMQAMgMAQAAQARAAALAMQANAMAAAQg");
	this.shape_1411.setTransform(663.35,333.1);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.f("#FFFFFF").s().p("AgcAdQgMgMABgRQgBgQAMgMQAMgLAQgBQARABALALQANAMAAAQQAAARgNAMQgLALgRAAQgQAAgMgLg");
	this.shape_1412.setTransform(663.35,333.1);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgpAAQAAgRAMgMQANgMAQAAQASAAALAMQANAMAAARQAAASgNAMQgLAMgSAAQgQAAgNgMQgMgMAAgSg");
	this.shape_1413.setTransform(663.35,333.1);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.f("#FFFFFF").s().p("AgdAeQgMgLAAgTQAAgQAMgNQAMgMARAAQARAAAMAMQANANAAAQQAAATgNALQgMAMgRAAQgRAAgMgMg");
	this.shape_1414.setTransform(663.35,333.1);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgrAAQAAgSANgMQAMgNASAAQATAAALANQAOAMAAASQAAATgOAMQgLANgTAAQgSAAgMgNQgNgMAAgTg");
	this.shape_1415.setTransform(663.35,333.1);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.f("#FFFFFF").s().p("AgeAfQgNgMAAgTQAAgRANgNQAMgNASAAQATAAALANQAOANAAARQAAATgOAMQgLANgTAAQgSAAgMgNg");
	this.shape_1416.setTransform(663.35,333.1);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgsAAQAAgSANgNQANgOASAAQATAAANAOQAOANAAASQAAAUgOANQgNAMgTAAQgSAAgNgMQgNgNAAgUg");
	this.shape_1417.setTransform(663.35,333.1);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.f("#FFFFFF").s().p("AggAgQgNgMAAgUQAAgSANgNQAOgNASAAQATAAANANQAOANgBASQABAUgOAMQgNAOgTAAQgSAAgOgOg");
	this.shape_1418.setTransform(663.35,333.1);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AguAAQAAgTANgNQAOgOATAAQAUAAAMAOQAPANAAATQAAAUgPAOQgMANgUAAQgTAAgOgNQgNgOAAgUg");
	this.shape_1419.setTransform(663.375,333.125);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.f("#FFFFFF").s().p("AghAiQgNgOAAgUQAAgTANgNQAOgOATAAQAUAAAMAOQAPANAAATQAAAUgPAOQgMANgUAAQgTAAgOgNg");
	this.shape_1420.setTransform(663.375,333.125);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgwAAQAAgUAOgOQAOgOAUAAQAUAAAOAOQAPAOAAAUQAAAVgPAOQgOAOgUAAQgUAAgOgOQgOgOAAgVg");
	this.shape_1421.setTransform(663.35,333.1);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.f("#FFFFFF").s().p("AgiAjQgOgNAAgWQAAgTAOgOQAOgPAUAAQAUAAAOAPQAPAOAAATQAAAWgPANQgOAOgUAAQgUAAgOgOg");
	this.shape_1422.setTransform(663.35,333.1);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AgyAAQAAgUAOgPQAPgPAVAAQAVAAAOAPQAQAPAAAUQAAAWgQAOQgOAPgVAAQgVAAgPgPQgOgOAAgWg");
	this.shape_1423.setTransform(663.375,333.125);

	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.f("#FFFFFF").s().p("AgkAkQgOgOAAgWQAAgUAOgPQAPgPAVAAQAVAAAOAPQAQAPAAAUQAAAWgQAOQgOAPgVAAQgVAAgPgPg");
	this.shape_1424.setTransform(663.375,333.125);

	this.shape_1425 = new cjs.Shape();
	this.shape_1425.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag0AAQAAgVAPgPQAQgQAVAAQAWAAAOAQQARAPAAAVQAAAXgRAPQgOAPgWAAQgVAAgQgPQgPgPAAgXg");
	this.shape_1425.setTransform(663.35,333.1);

	this.shape_1426 = new cjs.Shape();
	this.shape_1426.graphics.f("#FFFFFF").s().p("AgkAmQgQgPAAgWQAAgWAQgPQAPgPAVAAQAWAAAOAPQAQAPABAWQgBAWgQAPQgOAOgWAAQgVAAgPgOg");
	this.shape_1426.setTransform(663.35,333.1);

	this.shape_1427 = new cjs.Shape();
	this.shape_1427.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag1AAQAAgWAPgPQAQgQAWAAQAXAAAOAQQARAPAAAWQAAAXgRAQQgOAPgXAAQgWAAgQgPQgPgQAAgXg");
	this.shape_1427.setTransform(663.375,333.125);

	this.shape_1428 = new cjs.Shape();
	this.shape_1428.graphics.f("#FFFFFF").s().p("AgmAnQgPgQAAgXQAAgWAPgPQAQgQAWAAQAXAAAOAQQARAPAAAWQAAAXgRAQQgOAPgXAAQgWAAgQgPg");
	this.shape_1428.setTransform(663.375,333.125);

	this.shape_1429 = new cjs.Shape();
	this.shape_1429.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag3AAQAAgWAQgQQAQgRAXAAQAXAAAPARQASAQAAAWQAAAYgSAQQgPAQgXAAQgXAAgQgQQgQgQAAgYg");
	this.shape_1429.setTransform(663.375,333.125);

	this.shape_1430 = new cjs.Shape();
	this.shape_1430.graphics.f("#FFFFFF").s().p("AgnAoQgQgQAAgYQAAgWAQgQQAQgRAXAAQAXAAAPARQASAQAAAWQAAAYgSAQQgPAQgXAAQgXAAgQgQg");
	this.shape_1430.setTransform(663.375,333.125);

	this.shape_1431 = new cjs.Shape();
	this.shape_1431.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("Ag5AAQAAgXAQgRQARgRAYAAQAYAAAQARQASARAAAXQAAAZgSAQQgQARgYAAQgYAAgRgRQgQgQAAgZg");
	this.shape_1431.setTransform(663.375,333.125);

	this.shape_1432 = new cjs.Shape();
	this.shape_1432.graphics.f("#FFFFFF").s().p("AgpApQgQgQAAgZQAAgXAQgRQARgRAYAAQAYAAAQARQASARAAAXQAAAZgSAQQgQARgYAAQgYAAgRgRg");
	this.shape_1432.setTransform(663.375,333.125);

	this.shape_1433 = new cjs.Shape();
	this.shape_1433.graphics.f().s("rgba(51,0,102,0.427)").ss(1,1,1).p("AA7AAQAAAagSAQQgQARgZAAQgYAAgSgRQgQgQAAgaQAAgYAQgRQASgRAYAAQAZAAAQARQASARAAAYg");
	this.shape_1433.setTransform(663.375,333.125);

	this.shape_1434 = new cjs.Shape();
	this.shape_1434.graphics.f("#FFFFFF").s().p("AgqAqQgQgQAAgaQAAgYAQgRQASgRAYAAQAZAAAQARQASARAAAYQAAAagSAQQgQARgZAAQgYAAgSgRg");
	this.shape_1434.setTransform(663.375,333.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1205},{t:this.shape_1204}]}).to({state:[{t:this.shape_1207},{t:this.shape_1206}]},1).to({state:[{t:this.shape_1209},{t:this.shape_1208}]},1).to({state:[{t:this.shape_1211},{t:this.shape_1210}]},1).to({state:[{t:this.shape_1213},{t:this.shape_1212}]},1).to({state:[{t:this.shape_1215},{t:this.shape_1214}]},1).to({state:[{t:this.shape_1217},{t:this.shape_1216}]},1).to({state:[{t:this.shape_1219},{t:this.shape_1218}]},1).to({state:[{t:this.shape_1221},{t:this.shape_1220}]},1).to({state:[{t:this.shape_1223},{t:this.shape_1222}]},1).to({state:[{t:this.shape_1225},{t:this.shape_1224}]},1).to({state:[{t:this.shape_1227},{t:this.shape_1226}]},1).to({state:[{t:this.shape_1229},{t:this.shape_1228,p:{x:663.15,y:333.15}}]},1).to({state:[{t:this.shape_1231},{t:this.shape_1230}]},1).to({state:[{t:this.shape_1233},{t:this.shape_1232}]},1).to({state:[{t:this.shape_1235},{t:this.shape_1234}]},1).to({state:[{t:this.shape_1237,p:{x:663.15,y:333.15}},{t:this.shape_1236,p:{x:663.15,y:333.15}}]},1).to({state:[{t:this.shape_1239},{t:this.shape_1238}]},1).to({state:[{t:this.shape_1241},{t:this.shape_1240}]},1).to({state:[{t:this.shape_1243},{t:this.shape_1242}]},1).to({state:[{t:this.shape_1245},{t:this.shape_1244}]},1).to({state:[{t:this.shape_1247},{t:this.shape_1246}]},1).to({state:[{t:this.shape_1249},{t:this.shape_1248}]},1).to({state:[{t:this.shape_1251},{t:this.shape_1250}]},1).to({state:[{t:this.shape_1237,p:{x:663.175,y:333.125}},{t:this.shape_1236,p:{x:663.175,y:333.125}}]},1).to({state:[{t:this.shape_1253},{t:this.shape_1252}]},1).to({state:[{t:this.shape_1255},{t:this.shape_1254}]},1).to({state:[{t:this.shape_1257},{t:this.shape_1256}]},1).to({state:[{t:this.shape_1259},{t:this.shape_1258}]},1).to({state:[{t:this.shape_1261},{t:this.shape_1260,p:{x:663.2,y:333.1}}]},1).to({state:[{t:this.shape_1263,p:{x:663.175,y:333.075}},{t:this.shape_1262,p:{x:663.175,y:333.075}}]},1).to({state:[{t:this.shape_1264,p:{x:663.175,y:333.075}},{t:this.shape_1228,p:{x:663.175,y:333.075}}]},1).to({state:[{t:this.shape_1266},{t:this.shape_1265}]},1).to({state:[{t:this.shape_1268},{t:this.shape_1267}]},1).to({state:[{t:this.shape_1270,p:{x:663.175,y:333.025}},{t:this.shape_1269}]},1).to({state:[{t:this.shape_1272,p:{y:333.025}},{t:this.shape_1271}]},1).to({state:[{t:this.shape_1274,p:{x:663.2}},{t:this.shape_1273}]},1).to({state:[{t:this.shape_1276},{t:this.shape_1275,p:{x:663.175}}]},1).to({state:[{t:this.shape_1278},{t:this.shape_1277}]},1).to({state:[{t:this.shape_1280},{t:this.shape_1279}]},1).to({state:[{t:this.shape_1278},{t:this.shape_1277}]},1).to({state:[{t:this.shape_1282},{t:this.shape_1281}]},1).to({state:[{t:this.shape_1274,p:{x:663.225}},{t:this.shape_1283}]},1).to({state:[{t:this.shape_1272,p:{y:333}},{t:this.shape_1284}]},1).to({state:[{t:this.shape_1270,p:{x:663.2,y:333}},{t:this.shape_1285}]},1).to({state:[{t:this.shape_1287},{t:this.shape_1286}]},1).to({state:[{t:this.shape_1289},{t:this.shape_1288}]},1).to({state:[{t:this.shape_1263,p:{x:663.225,y:333.025}},{t:this.shape_1262,p:{x:663.225,y:333.025}}]},1).to({state:[{t:this.shape_1290},{t:this.shape_1260,p:{x:663.225,y:333.025}}]},1).to({state:[{t:this.shape_1292},{t:this.shape_1291}]},1).to({state:[{t:this.shape_1294},{t:this.shape_1293}]},1).to({state:[{t:this.shape_1296},{t:this.shape_1295}]},1).to({state:[{t:this.shape_1298},{t:this.shape_1297}]},1).to({state:[{t:this.shape_1237,p:{x:663.225,y:333.025}},{t:this.shape_1236,p:{x:663.225,y:333.025}}]},1).to({state:[{t:this.shape_1300},{t:this.shape_1299}]},1).to({state:[{t:this.shape_1302},{t:this.shape_1301}]},1).to({state:[{t:this.shape_1304},{t:this.shape_1303}]},1).to({state:[{t:this.shape_1306},{t:this.shape_1305}]},1).to({state:[{t:this.shape_1308},{t:this.shape_1307}]},1).to({state:[{t:this.shape_1310},{t:this.shape_1309}]},1).to({state:[{t:this.shape_1312},{t:this.shape_1311}]},1).to({state:[{t:this.shape_1314},{t:this.shape_1313}]},1).to({state:[{t:this.shape_1302},{t:this.shape_1301}]},1).to({state:[{t:this.shape_1316},{t:this.shape_1315}]},1).to({state:[{t:this.shape_1318},{t:this.shape_1317}]},1).to({state:[{t:this.shape_1320,p:{x:663.225,y:333.025}},{t:this.shape_1319,p:{x:663.225,y:333.025}}]},1).to({state:[{t:this.shape_1322},{t:this.shape_1321}]},1).to({state:[{t:this.shape_1324},{t:this.shape_1323}]},1).to({state:[{t:this.shape_1326},{t:this.shape_1325}]},1).to({state:[{t:this.shape_1328},{t:this.shape_1327}]},1).to({state:[{t:this.shape_1330},{t:this.shape_1329}]},1).to({state:[{t:this.shape_1332},{t:this.shape_1331}]},1).to({state:[{t:this.shape_1274,p:{x:663.225}},{t:this.shape_1283}]},1).to({state:[{t:this.shape_1333},{t:this.shape_1275,p:{x:663.25}}]},1).to({state:[{t:this.shape_1335,p:{x:663.25,y:333.025}},{t:this.shape_1334}]},1).to({state:[{t:this.shape_1337},{t:this.shape_1336}]},1).to({state:[{t:this.shape_1339},{t:this.shape_1338}]},1).to({state:[{t:this.shape_1341},{t:this.shape_1340}]},1).to({state:[{t:this.shape_1343},{t:this.shape_1342}]},1).to({state:[{t:this.shape_1345},{t:this.shape_1344}]},1).to({state:[{t:this.shape_1343},{t:this.shape_1342}]},1).to({state:[{t:this.shape_1347},{t:this.shape_1346}]},1).to({state:[{t:this.shape_1339},{t:this.shape_1338}]},1).to({state:[{t:this.shape_1349},{t:this.shape_1348}]},1).to({state:[{t:this.shape_1335,p:{x:663.275,y:333.05}},{t:this.shape_1350}]},1).to({state:[{t:this.shape_1352},{t:this.shape_1351}]},1).to({state:[{t:this.shape_1354},{t:this.shape_1353}]},1).to({state:[{t:this.shape_1356},{t:this.shape_1355}]},1).to({state:[{t:this.shape_1358},{t:this.shape_1357,p:{x:663.275,y:333.05}}]},1).to({state:[{t:this.shape_1360},{t:this.shape_1359}]},1).to({state:[{t:this.shape_1264,p:{x:663.275,y:333.05}},{t:this.shape_1228,p:{x:663.275,y:333.05}}]},1).to({state:[{t:this.shape_1362},{t:this.shape_1361}]},1).to({state:[{t:this.shape_1364},{t:this.shape_1363}]},1).to({state:[{t:this.shape_1366},{t:this.shape_1365}]},1).to({state:[{t:this.shape_1320,p:{x:663.3,y:333.075}},{t:this.shape_1319,p:{x:663.3,y:333.075}}]},1).to({state:[{t:this.shape_1237,p:{x:663.3,y:333.075}},{t:this.shape_1236,p:{x:663.3,y:333.075}}]},1).to({state:[{t:this.shape_1368},{t:this.shape_1367}]},1).to({state:[{t:this.shape_1370},{t:this.shape_1369}]},1).to({state:[{t:this.shape_1372},{t:this.shape_1371}]},1).to({state:[{t:this.shape_1374},{t:this.shape_1373}]},1).to({state:[{t:this.shape_1376},{t:this.shape_1375}]},1).to({state:[{t:this.shape_1378},{t:this.shape_1377}]},1).to({state:[{t:this.shape_1380},{t:this.shape_1379}]},1).to({state:[{t:this.shape_1382},{t:this.shape_1381}]},1).to({state:[{t:this.shape_1384},{t:this.shape_1383}]},1).to({state:[{t:this.shape_1386},{t:this.shape_1385}]},1).to({state:[{t:this.shape_1388},{t:this.shape_1387}]},1).to({state:[{t:this.shape_1390},{t:this.shape_1389}]},1).to({state:[{t:this.shape_1392},{t:this.shape_1391}]},1).to({state:[{t:this.shape_1394},{t:this.shape_1393}]},1).to({state:[{t:this.shape_1396},{t:this.shape_1395}]},1).to({state:[{t:this.shape_1398},{t:this.shape_1397}]},1).to({state:[{t:this.shape_1270,p:{x:663.325,y:333.1}},{t:this.shape_1357,p:{x:663.325,y:333.1}}]},1).to({state:[{t:this.shape_1400},{t:this.shape_1399}]},1).to({state:[{t:this.shape_1402},{t:this.shape_1401}]},1).to({state:[{t:this.shape_1404},{t:this.shape_1403}]},1).to({state:[{t:this.shape_1406},{t:this.shape_1405}]},1).to({state:[{t:this.shape_1408},{t:this.shape_1407}]},1).to({state:[{t:this.shape_1410},{t:this.shape_1409}]},1).to({state:[{t:this.shape_1412},{t:this.shape_1411}]},1).to({state:[{t:this.shape_1414},{t:this.shape_1413}]},1).to({state:[{t:this.shape_1416},{t:this.shape_1415}]},1).to({state:[{t:this.shape_1418},{t:this.shape_1417}]},1).to({state:[{t:this.shape_1420},{t:this.shape_1419}]},1).to({state:[{t:this.shape_1422},{t:this.shape_1421}]},1).to({state:[{t:this.shape_1424},{t:this.shape_1423}]},1).to({state:[{t:this.shape_1426},{t:this.shape_1425}]},1).to({state:[{t:this.shape_1428},{t:this.shape_1427}]},1).to({state:[{t:this.shape_1430},{t:this.shape_1429}]},1).to({state:[{t:this.shape_1432},{t:this.shape_1431}]},1).to({state:[{t:this.shape_1434},{t:this.shape_1433}]},1).wait(1));

	// трава5
	this.instance = new lib.Анимация15("synched",0);
	this.instance.setTransform(105.95,561.7);

	this.instance_1 = new lib.Анимация16("synched",0);
	this.instance_1.setTransform(102.85,560.65);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:102.85,y:560.65},58).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},58).to({rotation:-62.73,x:102.9,y:560.7},72).wait(1));

	// трава4
	this.instance_2 = new lib.Анимация13("synched",0);
	this.instance_2.setTransform(701.85,494.85);

	this.instance_3 = new lib.Анимация14("synched",0);
	this.instance_3.setTransform(704.7,495.15);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,x:704.7,y:495.15},44).wait(87));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},44).to({rotation:-23.4587},31).to({rotation:6.0006},55).wait(1));

	// трава3
	this.shape_1435 = new cjs.Shape();
	this.shape_1435.graphics.f("#20092A").s().p("AhVL0Qhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIg3gbQBbgXCAAqQBAAWAvAaQAAiVh/iSQgogugugnIgogfQCbAoBLBSQAlAoAHAgQgciWg4h4Ig0haQA5AiBDBGQAgAkAXAcIAAU/g");
	this.shape_1435.setTransform(727.35,527.475);

	this.shape_1436 = new cjs.Shape();
	this.shape_1436.graphics.f("#20092A").s().p("AhVLzQhzg/gEjuQgBhKAKhUIALhDQBRBpBvByQA4A4ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIg3gaQBbgZCAArQBAAVAvAaQAAiUh/iTQgogugugnIgrggQCdApBMBSQAlAoAHAgQgciWg4h4Ig1hZQA6AhBDBHQAgAjAXAdIAAU+g");
	this.shape_1436.setTransform(727.35,527.55);

	this.shape_1437 = new cjs.Shape();
	this.shape_1437.graphics.f("#20092A").s().p("AhVLyQhzg/gEjuQgBhKAKhUIALhDQBRBpBvByQA4A4ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIg3gZQBbgaCAArQBAAVAvAaQAAiUh/iTQgogugugnIgtghQCfAqBMBSQAlAoAHAgQgciWg4h4Ig2hXQA7AfBDBHQAgAjAXAdIAAU+g");
	this.shape_1437.setTransform(727.35,527.65);

	this.shape_1438 = new cjs.Shape();
	this.shape_1438.graphics.f("#20092A").s().p("AhVLyQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIg3gXQBbgcCAArQBAAVAvAaQAAiUh/iSQgogugugoIgvgiQChArBMBTQAlAnAHAhQgciXg4h3Ig4hWQA9AdBDBHQAgAjAXAdIAAU/g");
	this.shape_1438.setTransform(727.35,527.725);

	this.shape_1439 = new cjs.Shape();
	this.shape_1439.graphics.f("#20092A").s().p("AhVLxQhzg/gEjvQgBhJAKhUIALhEQBRBpBvByQA4A5ApAkQgIjAiki5Qgzg7g+gxIgzgoQDFgjCBBDQBAAjAaAqQAAiKiuiBQg1gqhBgiIg4gVQBcgdCAAqQBAAVAvAbQAAiVh/iSQgogugugoIgygjQCkAsBMBTQAlAoAHAgQgciWg4h4Ig6hUQA/AbBDBHQAgAjAXAdIAAU/g");
	this.shape_1439.setTransform(727.35,527.8);

	this.shape_1440 = new cjs.Shape();
	this.shape_1440.graphics.f("#20092A").s().p("AhVLwQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIg4gUQBcgeCAAqQBAAWAvAaQAAiVh/iSQgogugugnIg1glQCoAuBLBSQAlAoAHAgQgciWg4h4Ig8hSQBBAaBDBGQAgAkAXAcIAAU/g");
	this.shape_1440.setTransform(727.35,527.875);

	this.shape_1441 = new cjs.Shape();
	this.shape_1441.graphics.f("#20092A").s().p("AhVLvQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIg4gSQBcggCAAqQBAAWAvAaQAAiVh/iSQgogugugnIg3gmQCpAvBMBSQAlAoAHAgQgciWg4h4Ig9hQQBCAYBDBGQAgAkAXAcIAAU/g");
	this.shape_1441.setTransform(727.35,527.975);

	this.shape_1442 = new cjs.Shape();
	this.shape_1442.graphics.f("#20092A").s().p("AhVLuQhzg/gEjuQgBhKAKhUIALhDQBRBpBvByQA4A4ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIg4gRQBcgiCAArQBAAVAvAaQAAiUh/iTQgogugugnIg5gmQCrAvBMBSQAlAoAHAgQgciWg4h4Ig/hPQBEAXBDBHQAgAjAXAdIAAU+g");
	this.shape_1442.setTransform(727.35,528.05);

	this.shape_1443 = new cjs.Shape();
	this.shape_1443.graphics.f("#20092A").s().p("AhVLuQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIg4gQQBcgjCAArQBAAVAvAaQAAiUh/iSQgogugugoIg8gnQCuAwBMBTQAlAnAHAhQgciXg4h3IhAhOQBFAVBDBHQAgAjAXAdIAAU/g");
	this.shape_1443.setTransform(727.35,528.125);

	this.shape_1444 = new cjs.Shape();
	this.shape_1444.graphics.f("#20092A").s().p("AhVLtQhzg/gEjvQgBhJAKhUIALhEQBRBpBvByQA4A5ApAkQgIjAiki5Qgzg7g+gxIgzgoQDFgjCBBDQBAAjAaAqQAAiKiuiBQg1gqhBgiIg4gOQBcgkCAAqQBAAVAvAbQAAiVh/iSQgogugugoIg/goQCxAyBMBSQAlAoAHAgQgciWg4h4IhChMQBHATBDBHQAgAjAXAdIAAU/g");
	this.shape_1444.setTransform(727.35,528.2);

	this.shape_1445 = new cjs.Shape();
	this.shape_1445.graphics.f("#20092A").s().p("AhVLsQhzg/gEjvQgBhJAKhUIALhEQBRBpBvByQA4A5ApAkQgIjAiki5Qgzg7g+gxIgzgoQDFgjCBBDQBAAjAaAqQAAiKiuiBQg1gqhBgiIg4gNQBcglCAAqQBAAVAvAbQAAiVh/iSQgogugugoIhBgpQC0AzBLBSQAlAoAHAgQgciWg4h4IhEhKQBJARBDBHQAgAjAXAdIAAU/g");
	this.shape_1445.setTransform(727.35,528.3);

	this.shape_1446 = new cjs.Shape();
	this.shape_1446.graphics.f("#20092A").s().p("AhVLrQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIg5gLQBdgnCAAqQBAAWAvAaQAAiVh/iSQgogugugnIhDgrQC1A0BMBSQAlAoAHAgQgciWg4h4IhGhIQBLAQBDBGQAgAkAXAcIAAU/g");
	this.shape_1446.setTransform(727.35,528.375);

	this.shape_1447 = new cjs.Shape();
	this.shape_1447.graphics.f("#20092A").s().p("AhVLqQhzg/gEjuQgBhKAKhUIALhDQBRBpBvByQA4A4ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaApQAAiJiuiCQg1gphBgiIg5gKQBdgpCAArQBAAVAvAaQAAiUh/iTQgogugugnIhGgsQC4A1BMBSQAlAoAHAgQgciWg4h4IhHhHQBMAPBDBHQAgAjAXAdIAAU+g");
	this.shape_1447.setTransform(727.35,528.45);

	this.shape_1448 = new cjs.Shape();
	this.shape_1448.graphics.f("#20092A").s().p("AhVLqQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIg5gJQBdgqCAArQBAAVAvAaQAAiUh/iSQgogugugoIhJgtQC7A2BMBTQAlAnAHAhQgciXg4h3IhIhGQBNANBDBHQAgAjAXAdIAAU/g");
	this.shape_1448.setTransform(727.35,528.525);

	this.shape_1449 = new cjs.Shape();
	this.shape_1449.graphics.f("#20092A").s().p("AhVLpQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIg5gHQBdgsCAArQBAAVAvAaQAAiUh/iSQgogugugoIhLguQC9A3BMBTQAlAnAHAhQgciXg4h3IhKhEQBPALBDBHQAgAjAXAdIAAU/g");
	this.shape_1449.setTransform(727.35,528.625);

	this.shape_1450 = new cjs.Shape();
	this.shape_1450.graphics.f("#20092A").s().p("AhVLoQhzg/gEjvQgBhJAKhUIALhEQBRBpBvByQA4A5ApAkQgIjAiki5Qgzg7g+gxIgzgoQDFgjCBBDQBAAjAaAqQAAiKiuiBQg1gqhBgiIg6gFQBeguCAArQBAAVAvAbQAAiVh/iSQgogugugoIhOgvQDBA5BLBSQAlAoAHAgQgciWg4h4IhMhCQBRAJBDBHQAgAjAXAdIAAU/g");
	this.shape_1450.setTransform(727.35,528.7);

	this.shape_1451 = new cjs.Shape();
	this.shape_1451.graphics.f("#20092A").s().p("AhVLnQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIg6gEQBeguCAAqQBAAWAvAaQAAiVh/iSQgogugugnIhQgxQDCA6BMBSQAlAoAHAgQgciWg4h4IhOhAQBTAIBDBGQAgAkAXAcIAAU/g");
	this.shape_1451.setTransform(727.35,528.775);

	this.shape_1452 = new cjs.Shape();
	this.shape_1452.graphics.f("#20092A").s().p("AhVLmQhzg/gEjuQgBhKAKhUIALhDQBRBpBvByQA4A4ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaApQAAiJiuiCQg1gphBgiIg6gEQBegvCAArQBAAVAvAaQAAiUh/iTQgogugugnIhSgyQDFA7BLBSQAlAoAHAgQgciWg4h4IhPg/QBUAHBDBHQAgAjAXAdIAAU+g");
	this.shape_1452.setTransform(727.35,528.85);

	this.shape_1453 = new cjs.Shape();
	this.shape_1453.graphics.f("#20092A").s().p("AhVLlQhzg/gEjuQgBhKAKhUIALhDQBRBpBvByQA4A4ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaApQAAiJiuiCQg1gphBgiIg6gCQBegxCAArQBAAVAvAaQAAiUh/iTQgogugugnIhVgzQDHA8BMBSQAlAoAHAgQgciWg4h4IhQg9QBVAFBDBHQAgAjAXAdIAAU+g");
	this.shape_1453.setTransform(727.35,528.95);

	this.shape_1454 = new cjs.Shape();
	this.shape_1454.graphics.f("#20092A").s().p("AhVLlQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIg6AAQBegzCAArQBAAVAvAaQAAiUh/iSQgogugugoIhYgzQDKA8BMBTQAlAnAHAhQgciXg4h3IhSg8QBXADBDBHQAgAjAXAdIAAU/g");
	this.shape_1454.setTransform(727.35,529.025);

	this.shape_1455 = new cjs.Shape();
	this.shape_1455.graphics.f("#20092A").s().p("AhVLkQhzg/gEjvQgBhJAKhUIALhEQBRBpBvByQA4A5ApAkQgIjAiki5Qgzg7g+gxIgzgoQDFgjCBBDQBAAjAaAqQAAiKiuiBQg1gqhBgiIg7ABQBfgzCAAqQBAAVAvAbQAAiVh/iSQgogugugoIhag0QDMA9BMBTQAlAoAHAgQgciWg4h4IhUg6QBZABBDBHQAgAjAXAdIAAU/g");
	this.shape_1455.setTransform(727.35,529.1);

	this.shape_1456 = new cjs.Shape();
	this.shape_1456.graphics.f("#20092A").s().p("AhVLjQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIg7ADQBfg1CAAqQBAAWAvAaQAAiVh/iSQgogugugnIhcg2QDOA/BMBSQAlAoAHAgQgciWg4h4IhWg4QBbAABDBGQAgAkAXAcIAAU/g");
	this.shape_1456.setTransform(727.35,529.175);

	this.shape_1457 = new cjs.Shape();
	this.shape_1457.graphics.f("#20092A").s().p("AhVLiQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIg7AEQBfg2CAAqQBAAWAvAaQAAiVh/iSQgogugugnIhfg3QDSBABLBSQAlAoAHAgQgciWg4h4IhXg2QBcgCBDBGQAgAkAXAcIAAU/g");
	this.shape_1457.setTransform(727.35,529.2722);

	this.shape_1458 = new cjs.Shape();
	this.shape_1458.graphics.f("#20092A").s().p("AhVLiQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgmQDFglCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIg7AFQBfg4CAArQBAAVAvAaQAAiUh/iSQgogugugoIhig4QDUBBBMBTQAlAnAHAhQgciXg4h3IhZg1QBegEBDBHQAgAjAXAdIAAU/g");
	this.shape_1458.setTransform(727.35,529.3417);

	this.shape_1459 = new cjs.Shape();
	this.shape_1459.graphics.f("#20092A").s().p("AhVLhQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgmQDFglCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIg8AHQBgg6CAArQBAAVAvAaQAAiUh/iSQgogugugoIhkg5QDWBCBMBTQAlAnAHAhQgciXg4h3Ihag0QBfgFBDBHQAgAjAXAdIAAU/g");
	this.shape_1459.setTransform(727.35,529.4084);

	this.shape_1460 = new cjs.Shape();
	this.shape_1460.graphics.f("#20092A").s().p("AhVLgQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIg8AJQBgg7CAAqQBAAWAvAaQAAiVh/iSQgogugugnIhmg6QDYBDBMBSQAlAoAHAgQgciWg4h4IhcgxQBhgHBDBGQAgAkAXAcIAAU/g");
	this.shape_1460.setTransform(727.35,529.4934);

	this.shape_1461 = new cjs.Shape();
	this.shape_1461.graphics.f("#20092A").s().p("AhVLfQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIg8AKQBgg8CAAqQBAAWAvAaQAAiVh/iSQgogugugnIhpg8QDcBFBLBSQAlAoAHAgQgciWg4h4IhegwQBjgIBDBGQAgAkAXAcIAAU/g");
	this.shape_1461.setTransform(727.35,529.5543);

	this.shape_1462 = new cjs.Shape();
	this.shape_1462.graphics.f("#20092A").s().p("AhVLfQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgmQDFglCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIg9ALQBig+B/ArQBAAVAvAaQAAiUh/iSQgogugugoIhrg8QDdBFBMBTQAlAnAHAhQgciXg4h3IhfgvQBkgKBDBHQAgAjAXAdIAAU/g");
	this.shape_1462.setTransform(727.35,529.6129);

	this.shape_1463 = new cjs.Shape();
	this.shape_1463.graphics.f("#20092A").s().p("AhVLeQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIg9ANQBig/B/AqQBAAWAvAaQAAiVh/iSQgogugugnIhtg+QDgBHBLBSQAlAoAHAgQgciWg4h4IhhgtQBmgLBDBGQAgAkAXAcIAAU/g");
	this.shape_1463.setTransform(727.35,529.6694);

	this.shape_1464 = new cjs.Shape();
	this.shape_1464.graphics.f("#20092A").s().p("AhVLeQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgmQDFglCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIg9AOQBhhBCAArQBAAVAvAaQAAiUh/iSQgogugugoIhwg+QDiBHBMBTQAlAnAHAhQgciXg4h3IhigrQBngOBDBHQAgAjAXAdIAAU/g");
	this.shape_1464.setTransform(727.35,529.7415);

	this.shape_1465 = new cjs.Shape();
	this.shape_1465.graphics.f("#20092A").s().p("AhVLdQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIg9AQQBhhCCAAqQBAAWAvAaQAAiVh/iSQgogugugnIhzhAQDlBJBMBSQAlAoAHAgQgciWg4h4IhkgpQBpgPBDBGQAgAkAXAcIAAU/g");
	this.shape_1465.setTransform(727.35,529.7934);

	this.shape_1466 = new cjs.Shape();
	this.shape_1466.graphics.f("#20092A").s().p("AhVLdQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgmQDFglCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIg+ARQBjhEB/ArQBAAVAvAaQAAiUh/iSQgogugugoIh1hBQDnBKBMBTQAlAnAHAhQgciXg4h3IhlgoQBqgRBDBHQAgAjAXAdIAAU/g");
	this.shape_1466.setTransform(727.35,529.8435);

	this.shape_1467 = new cjs.Shape();
	this.shape_1467.graphics.f("#20092A").s().p("AhVLcQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIg+ATQBjhFB/AqQBAAWAvAaQAAiVh/iSQgogugugnIh3hCQDpBLBMBSQAlAoAHAgQgciWg4h4IhogmQBtgSBDBGQAgAkAXAcIAAU/g");
	this.shape_1467.setTransform(727.35,529.8919);

	this.shape_1468 = new cjs.Shape();
	this.shape_1468.graphics.f("#20092A").s().p("AhVLbQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIg+AUQBihGCAAqQBAAWAvAaQAAiVh/iSQgogugugnIh6hDQDtBMBLBSQAlAoAHAgQgciWg4h4IhpgkQBugUBDBGQAgAkAXAcIAAU/g");
	this.shape_1468.setTransform(727.35,529.954);

	this.shape_1469 = new cjs.Shape();
	this.shape_1469.graphics.f("#20092A").s().p("AhVLbQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIg+AWQBihICAAqQBAAWAvAaQAAiVh/iSQgogugugnIh9hEQDvBNBMBSQAlAoAHAgQgciWg4h4IhpgjQBugVBDBGQAgAkAXAcIAAU/g");
	this.shape_1469.setTransform(727.35,529.9988);

	this.shape_1470 = new cjs.Shape();
	this.shape_1470.graphics.f("#20092A").s().p("AhVLbQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgmQDFglCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIg+AWQBihJCAArQBAAVAvAaQAAiUh/iSQgogugugoIh/hFQDxBOBMBTQAlAnAHAhQgciXg4h3IhrgiQBwgXBDBHQAgAjAXAdIAAU/g");
	this.shape_1470.setTransform(727.35,530.0421);

	this.shape_1471 = new cjs.Shape();
	this.shape_1471.graphics.f("#20092A").s().p("AhVLaQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIg/AYQBkhKB/AqQBAAWAvAaQAAiVh/iSQgogugugnIiBhGQDzBPBMBSQAlAoAHAgQgciWg4h4IhtggQBygYBDBGQAgAkAXAcIAAU/g");
	this.shape_1471.setTransform(727.35,530.0841);

	this.shape_1472 = new cjs.Shape();
	this.shape_1472.graphics.f("#20092A").s().p("AhVLaQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgmQDFglCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIg/AZQBkhMB/ArQBAAVAvAaQAAiUh/iSQgogugugoIiEhHQD2BQBMBTQAlAnAHAhQgciXg4h3IhvgeQB0gbBDBHQAgAjAXAdIAAU/g");
	this.shape_1472.setTransform(727.35,530.138);

	this.shape_1473 = new cjs.Shape();
	this.shape_1473.graphics.f("#20092A").s().p("AhVLZQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIg/AbQBjhNCAAqQBAAWAvAaQAAiVh/iSQgogugugnIiHhJQD6BSBLBSQAlAoAHAgQgciWg4h4IhwgcQB1gcBDBGQAgAkAXAcIAAU/g");
	this.shape_1473.setTransform(727.35,530.177);

	this.shape_1474 = new cjs.Shape();
	this.shape_1474.graphics.f("#20092A").s().p("AhVLZQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgmQDFglCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIg/AcQBjhPCAArQBAAVAvAaQAAiUh/iSQgogugugoIiJhJQD7BSBMBTQAlAnAHAhQgciXg4h3IhygbQB3geBDBHQAgAjAXAdIAAU/g");
	this.shape_1474.setTransform(727.35,530.2149);

	this.shape_1475 = new cjs.Shape();
	this.shape_1475.graphics.f("#20092A").s().p("AhVLYQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhAAeQBlhQB/AqQBAAWAvAaQAAiVh/iSQgogugugnIiLhLQD9BUBMBSQAlAoAHAgQgciWg4h4IhzgZQB4gfBDBGQAgAkAXAcIAAU/g");
	this.shape_1475.setTransform(727.35,530.2516);

	this.shape_1476 = new cjs.Shape();
	this.shape_1476.graphics.f("#20092A").s().p("AhVLYQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhAAfQBlhRB/AqQBAAWAvAaQAAiVh/iSQgogugugnIiOhMQEABVBMBSQAlAoAHAgQgciWg4h4Ih1gXQB6ghBDBGQAgAkAXAcIAAU/g");
	this.shape_1476.setTransform(727.35,530.2989);

	this.shape_1477 = new cjs.Shape();
	this.shape_1477.graphics.f("#20092A").s().p("AhVLYQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgmQDFglCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhAAgQBlhTB/ArQBAAVAvAaQAAiUh/iSQgogugugoIiRhNQEDBWBMBTQAlAnAHAhQgciXg4h3Ih2gWQB7gjBDBHQAgAjAXAdIAAU/g");
	this.shape_1477.setTransform(727.35,530.3332);

	this.shape_1478 = new cjs.Shape();
	this.shape_1478.graphics.f("#20092A").s().p("AhVLXQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhAAiQBkhUCAAqQBAAWAvAaQAAiVh/iSQgogugugnIiThOQEGBXBLBSQAlAoAHAgQgciWg4h4Ih4gUQB9gkBDBGQAgAkAXAcIAAU/g");
	this.shape_1478.setTransform(727.35,530.3665);

	this.shape_1479 = new cjs.Shape();
	this.shape_1479.graphics.f("#20092A").s().p("AhVLXQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhAAkQBkhWCAAqQBAAWAvAaQAAiVh/iSQgogugugnIiWhPQEIBYBMBSQAlAoAHAgQgciWg4h4Ih6gTQB/glBDBGQAgAkAXAcIAAU/g");
	this.shape_1479.setTransform(727.35,530.399);

	this.shape_1480 = new cjs.Shape();
	this.shape_1480.graphics.f("#20092A").s().p("AhVLXQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgmQDFglCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAlQBlhYCAArQBAAVAvAaQAAiUh/iSQgogugugoIiYhQQEKBZBMBTQAlAnAHAhQgciXg4h3Ih8gRQCBgoBDBHQAgAjAXAdIAAU/g");
	this.shape_1480.setTransform(727.35,530.4408);

	this.shape_1481 = new cjs.Shape();
	this.shape_1481.graphics.f("#20092A").s().p("AhVLWQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAnQBlhZCAAqQBAAWAvAaQAAiVh/iSQgogugugnIiahRQEMBaBMBSQAlAoAHAgQgciWg4h4Ih9gPQCCgpBDBGQAgAkAXAcIAAU/g");
	this.shape_1481.setTransform(727.35,530.4712);

	this.shape_1482 = new cjs.Shape();
	this.shape_1482.graphics.f("#20092A").s().p("AhVLWQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgmQDFglCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAnQBlhaCAArQBAAVAvAaQAAiUh/iSQgogugugoIidhSQEPBbBMBTQAlAnAHAhQgciXg4h3Ih+gOQCDgrBDBHQAgAjAXAdIAAU/g");
	this.shape_1482.setTransform(727.35,530.5008);

	this.shape_1483 = new cjs.Shape();
	this.shape_1483.graphics.f("#20092A").s().p("AhVLWQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgmQDFglCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBApQBlhcCAArQBAAVAvAaQAAiUh/iSQgogugugoIighTQETBcBLBTQAlAnAHAhQgciXg4h3IiBgNQCGgsBDBHQAgAjAXAdIAAU/g");
	this.shape_1483.setTransform(727.35,530.5296);

	this.shape_1484 = new cjs.Shape();
	this.shape_1484.graphics.f("#20092A").s().p("AhVLVQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBArQBlhdCAAqQBAAWAvAaQAAiVh/iSQgogugugnIiihVQEUBeBMBSQAlAoAHAgQgciWg4h4IiCgKQCHguBDBGQAgAkAXAcIAAU/g");
	this.shape_1484.setTransform(727.35,530.5668);

	this.shape_1485 = new cjs.Shape();
	this.shape_1485.graphics.f("#20092A").s().p("AhVLVQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQEXBfBLBSQAlAoAHAgQgciWg4h4IiEgJQCJgvBDBGQAgAkAXAcIAAU/g");
	this.shape_1485.setTransform(727.35,530.594);

	this.shape_1486 = new cjs.Shape();
	this.shape_1486.graphics.f("#20092A").s().p("AhVLVQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQEXBeBKBSQAmApAHAgQgciWg4h4IiDgKQCIguBDBGQAgAkAXAcIAAU/g");
	this.shape_1486.setTransform(727.35,530.576);

	this.shape_1487 = new cjs.Shape();
	this.shape_1487.graphics.f("#20092A").s().p("AhVLWQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgmQDFglCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iSQgogugugoIikhVQEWBcBLBTQAmApAHAhQgciXg4h3IiCgMQCHgtBDBHQAgAjAXAdIAAU/g");
	this.shape_1487.setTransform(727.35,530.5484);

	this.shape_1488 = new cjs.Shape();
	this.shape_1488.graphics.f("#20092A").s().p("AhVLWQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgmQDFglCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iSQgogugugoIikhVQEWBbBLBTQAmAqAHAhQgciXg4h3IiCgNQCHgsBDBHQAgAjAXAdIAAU/g");
	this.shape_1488.setTransform(727.35,530.5201);

	this.shape_1489 = new cjs.Shape();
	this.shape_1489.graphics.f("#20092A").s().p("AhVLWQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgmQDFglCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iSQgogugugoIikhVQEWBZBLBUQAmArAHAhQgciXg4h3IiBgOQCGgrBDBHQAgAjAXAdIAAU/g");
	this.shape_1489.setTransform(727.35,530.5008);

	this.shape_1490 = new cjs.Shape();
	this.shape_1490.graphics.f("#20092A").s().p("AhVLWQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQEWBZBKBUQAnAsAHAgQgciWg4h4IiAgPQCFgpBDBGQAgAkAXAcIAAU/g");
	this.shape_1490.setTransform(727.35,530.4811);

	this.shape_1491 = new cjs.Shape();
	this.shape_1491.graphics.f("#20092A").s().p("AhVLWQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQEVBXBLBVQAnAtAHAgQgciWg4h4Ih/gQQCEgoBDBGQAgAkAXAcIAAU/g");
	this.shape_1491.setTransform(727.35,530.451);

	this.shape_1492 = new cjs.Shape();
	this.shape_1492.graphics.f("#20092A").s().p("AhVLXQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgmQDFglCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iSQgogugugoIikhVQEVBWBLBVQAnAtAHAhQgciXg4h3Ih/gSQCEgnBDBHQAgAjAXAdIAAU/g");
	this.shape_1492.setTransform(727.35,530.4305);

	this.shape_1493 = new cjs.Shape();
	this.shape_1493.graphics.f("#20092A").s().p("AhVLXQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQEVBVBKBVQAoAvAHAgQgciWg4h4Ih+gTQCDglBDBGQAgAkAXAcIAAU/g");
	this.shape_1493.setTransform(727.35,530.399);

	this.shape_1494 = new cjs.Shape();
	this.shape_1494.graphics.f("#20092A").s().p("AhVLXQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQEVBUBKBVQAoAwAHAgQgciWg4h4Ih9gUQCCgkBDBGQAgAkAXAcIAAU/g");
	this.shape_1494.setTransform(727.35,530.3665);

	this.shape_1495 = new cjs.Shape();
	this.shape_1495.graphics.f("#20092A").s().p("AhVLYQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgmQDFglCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iSQgogugugoIikhVQEVBSBKBWQAoAwAHAhQgciXg4h3Ih8gWQCBgjBDBHQAgAjAXAdIAAU/g");
	this.shape_1495.setTransform(727.35,530.3444);

	this.shape_1496 = new cjs.Shape();
	this.shape_1496.graphics.f("#20092A").s().p("AhVLYQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgmQDFglCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iSQgogugugoIikhVQEVBRBKBWQAoAxAHAhQgciXg4h3Ih8gXQCBgiBDBHQAgAjAXAdIAAU/g");
	this.shape_1496.setTransform(727.35,530.3219);

	this.shape_1497 = new cjs.Shape();
	this.shape_1497.graphics.f("#20092A").s().p("AhVLYQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQEVBQBKBXQAoAyAHAgQgciWg4h4Ih8gYQCBggBDBGQAgAkAXAcIAAU/g");
	this.shape_1497.setTransform(727.35,530.2873);

	this.shape_1498 = new cjs.Shape();
	this.shape_1498.graphics.f("#20092A").s().p("AhVLYQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQEUBPBKBXQApAzAHAgQgciWg4h4Ih7gZQCAgfBDBGQAgAkAXAcIAAU/g");
	this.shape_1498.setTransform(727.35,530.2516);

	this.shape_1499 = new cjs.Shape();
	this.shape_1499.graphics.f("#20092A").s().p("AhVLZQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgmQDFglCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iSQgogugugoIikhVQEUBNBKBXQApA0AHAhQgciXg4h3Ih6gbQB/geBDBHQAgAjAXAdIAAU/g");
	this.shape_1499.setTransform(727.35,530.2272);

	this.shape_1500 = new cjs.Shape();
	this.shape_1500.graphics.f("#20092A").s().p("AhVLZQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgmQDFglCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iSQgogugugoIikhVQEUBMBKBYQApA0AHAhQgciXg4h3Ih6gcQB/gdBDBHQAgAjAXAdIAAU/g");
	this.shape_1500.setTransform(727.35,530.2024);

	this.shape_1501 = new cjs.Shape();
	this.shape_1501.graphics.f("#20092A").s().p("AhVLZQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQEUBLBJBYQAqA2AHAgQgciWg4h4Ih5gdQB+gbBDBGQAgAkAXAcIAAU/g");
	this.shape_1501.setTransform(727.35,530.1642);

	this.shape_1502 = new cjs.Shape();
	this.shape_1502.graphics.f("#20092A").s().p("AhVLaQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgmQDFglCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iSQgogugugoIikhVQEUBKBJBYQAqA2AHAhQgciXg4h3Ih4geQB9gbBDBHQAgAjAXAdIAAU/g");
	this.shape_1502.setTransform(727.35,530.138);

	this.shape_1503 = new cjs.Shape();
	this.shape_1503.graphics.f("#20092A").s().p("AhVLaQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQEUBJBJBYQAqA4AHAgQgciWg4h4Ih4gfQB9gZBDBGQAgAkAXAcIAAU/g");
	this.shape_1503.setTransform(727.35,530.0978);

	this.shape_1504 = new cjs.Shape();
	this.shape_1504.graphics.f("#20092A").s().p("AhVLaQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQEUBIBIBZQArA4AHAgQgciWg4h4Ih2ghQB7gXBDBGQAgAkAXAcIAAU/g");
	this.shape_1504.setTransform(727.35,530.0563);

	this.shape_1505 = new cjs.Shape();
	this.shape_1505.graphics.f("#20092A").s().p("AhVLbQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgmQDFglCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iSQgogugugoIikhVQEUBGBIBZQArA5AHAhQgciXg4h3Ih2giQB7gXBDBHQAgAjAXAdIAAU/g");
	this.shape_1505.setTransform(727.35,530.0278);

	this.shape_1506 = new cjs.Shape();
	this.shape_1506.graphics.f("#20092A").s().p("AhVLbQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQETBFBJBaQArA6AHAgQgciWg4h4Ih1gjQB6gVBDBGQAgAkAXAcIAAU/g");
	this.shape_1506.setTransform(727.35,529.9988);

	this.shape_1507 = new cjs.Shape();
	this.shape_1507.graphics.f("#20092A").s().p("AhVLbQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQETBEBJBaQArA7AHAgQgciWg4h4Ih0gkQB5gUBDBGQAgAkAXAcIAAU/g");
	this.shape_1507.setTransform(727.35,529.954);

	this.shape_1508 = new cjs.Shape();
	this.shape_1508.graphics.f("#20092A").s().p("AhVLcQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgmQDFglCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iSQgogugugoIikhVQETBCBIBbQAsA7AHAhQgciXg4h3Ih0gmQB5gTBDBHQAgAjAXAdIAAU/g");
	this.shape_1508.setTransform(727.35,529.9077);

	this.shape_1509 = new cjs.Shape();
	this.shape_1509.graphics.f("#20092A").s().p("AhVLcQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQETBCBHBaQAtA9AHAgQgciWg4h4IhzgnQB4gRBDBGQAgAkAXAcIAAU/g");
	this.shape_1509.setTransform(727.35,529.876);

	this.shape_1510 = new cjs.Shape();
	this.shape_1510.graphics.f("#20092A").s().p("AhVLdQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgmQDFglCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iSQgogugugoIikhVQETBABHBbQAtA9AHAhQgciXg4h3IhzgoQB4gRBDBHQAgAjAXAdIAAU/g");
	this.shape_1510.setTransform(727.35,529.8435);

	this.shape_1511 = new cjs.Shape();
	this.shape_1511.graphics.f("#20092A").s().p("AhVLdQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQETA/BHBcQAtA+AHAgQgciWg4h4IhygpQB3gPBDBGQAgAkAXAcIAAU/g");
	this.shape_1511.setTransform(727.35,529.7934);

	this.shape_1512 = new cjs.Shape();
	this.shape_1512.graphics.f("#20092A").s().p("AhVLdQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQETA+BGBcQAuA/AHAgQgciWg4h4IhygqQB3gOBDBGQAgAkAXAcIAAU/g");
	this.shape_1512.setTransform(727.35,529.759);

	this.shape_1513 = new cjs.Shape();
	this.shape_1513.graphics.f("#20092A").s().p("AhVLeQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgmQDFglCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iSQgogugugoIikhVQESA8BHBcQAuBAAHAhQgciXg4h3IhxgsQB2gNBDBHQAgAjAXAdIAAU/g");
	this.shape_1513.setTransform(727.35,529.7059);

	this.shape_1514 = new cjs.Shape();
	this.shape_1514.graphics.f("#20092A").s().p("AhVLeQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQETA8BGBcQAuBBAHAgQgciWg4h4IhwgtQB1gLBDBGQAgAkAXAcIAAU/g");
	this.shape_1514.setTransform(727.35,529.6508);

	this.shape_1515 = new cjs.Shape();
	this.shape_1515.graphics.f("#20092A").s().p("AhVLfQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgmQDFglCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iSQgogugugoIikhVQETA6BGBdQAuBBAHAhQgciXg4h3IhvgvQB0gKBDBHQAgAjAXAdIAAU/g");
	this.shape_1515.setTransform(727.35,529.6129);

	this.shape_1516 = new cjs.Shape();
	this.shape_1516.graphics.f("#20092A").s().p("AhVLfQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQESA5BGBdQAvBDAHAgQgciWg4h4IhvgvQB0gJBDBGQAgAkAXAcIAAU/g");
	this.shape_1516.setTransform(727.35,529.5741);

	this.shape_1517 = new cjs.Shape();
	this.shape_1517.graphics.f("#20092A").s().p("AhVLgQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgmQDFglCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iSQgogugugoIikhVQESA3BGBeQAvBDAHAhQgciXg4h3IhugxQBzgIBDBHQAgAjAXAdIAAU/g");
	this.shape_1517.setTransform(727.35,529.5139);

	this.shape_1518 = new cjs.Shape();
	this.shape_1518.graphics.f("#20092A").s().p("AhVLgQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQESA3BGBdQAvBFAHAgQgciWg4h4IhtgyQBygGBDBGQAgAkAXAcIAAU/g");
	this.shape_1518.setTransform(727.35,529.4515);

	this.shape_1519 = new cjs.Shape();
	this.shape_1519.graphics.f("#20092A").s().p("AhVLhQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgmQDFglCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iSQgogugugoIikhVQESA1BFBeQAwBFAHAhQgciXg4h3Ihsg0QBxgFBDBHQAgAjAXAdIAAU/g");
	this.shape_1519.setTransform(727.35,529.4084);

	this.shape_1520 = new cjs.Shape();
	this.shape_1520.graphics.f("#20092A").s().p("AhVLhQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQERA0BGBfQAwBGAHAgQgciWg4h4Ihsg0QBxgEBDBGQAgAkAXAcIAAU/g");
	this.shape_1520.setTransform(727.35,529.3643);

	this.shape_1521 = new cjs.Shape();
	this.shape_1521.graphics.f("#20092A").s().p("AhVLiQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgmQDFglCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQERAzBGBfQAwBHAHAgQgciWg4h4Ihrg2QBwgCBDBGQAgAkAXAcIAAU/g");
	this.shape_1521.setTransform(727.35,529.2957);

	this.shape_1522 = new cjs.Shape();
	this.shape_1522.graphics.f("#20092A").s().p("AhVLjQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgmQDFglCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iSQgogugugoIikhVQERAxBGBfQAwBIAHAhQgciXg4h3Ihqg3QBvgCBDBHQAgAjAXAdIAAU/g");
	this.shape_1522.setTransform(727.35,529.2484);

	this.shape_1523 = new cjs.Shape();
	this.shape_1523.graphics.f("#20092A").s().p("AhVLjQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQERAxBGBfQAwBJAHAgQgciWg4h4Ihqg4QBvAABDBGQAgAkAXAcIAAU/g");
	this.shape_1523.setTransform(727.35,529.175);

	this.shape_1524 = new cjs.Shape();
	this.shape_1524.graphics.f("#20092A").s().p("AhVLkQhzg/gEjvQgBhJAKhUIALhEQBRBpBvByQA4A5ApAkQgIjAiki5Qgzg7g+gxIgzgoQDFgjCBBDQBAAjAaAqQAAiKiuiBQg1gqhBgiIhBAsQBlheCAAqQBAAVAvAbQAAiVh/iSQgogugugoIikhVQERAvBFBgQAxBKAHAgQgciWg4h4Ihpg6QBuABBDBHQAgAjAXAdIAAU/g");
	this.shape_1524.setTransform(727.35,529.1);

	this.shape_1525 = new cjs.Shape();
	this.shape_1525.graphics.f("#20092A").s().p("AhVLkQhzg/gEjuQgBhKAKhUIALhDQBRBpBvByQA4A4ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iTQgogugugnIikhWQERAvBFBfQAxBLAHAgQgciWg4h4Ihpg6QBuACBDBHQAgAjAXAdIAAU+g");
	this.shape_1525.setTransform(727.35,529.05);

	this.shape_1526 = new cjs.Shape();
	this.shape_1526.graphics.f("#20092A").s().p("AhVLlQhzg/gEjvQgBhJAKhUIALhEQBRBpBvByQA4A5ApAkQgIjAiki5Qgzg7g+gxIgzgoQDFgjCBBDQBAAjAaAqQAAiKiuiBQg1gqhBgiIhBAsQBlheCAAqQBAAVAvAbQAAiVh/iSQgogugugoIikhVQERAtBFBgQAxBMAHAgQgciWg4h4Ihpg8QBuADBDBHQAgAjAXAdIAAU/g");
	this.shape_1526.setTransform(727.35,529);

	this.shape_1527 = new cjs.Shape();
	this.shape_1527.graphics.f("#20092A").s().p("AhVLmQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iSQgogugugoIikhVQEQArBFBhQAyBMAHAhQgciXg4h3Ihog+QBtAFBDBHQAgAjAXAdIAAU/g");
	this.shape_1527.setTransform(727.35,528.925);

	this.shape_1528 = new cjs.Shape();
	this.shape_1528.graphics.f("#20092A").s().p("AhVLmQhzg/gEjuQgBhKAKhUIALhDQBRBpBvByQA4A4ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaApQAAiJiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iTQgogugugnIikhWQEQArBFBhQAyBNAHAgQgciWg4h4Ihog/QBtAHBDBHQAgAjAXAdIAAU+g");
	this.shape_1528.setTransform(727.35,528.85);

	this.shape_1529 = new cjs.Shape();
	this.shape_1529.graphics.f("#20092A").s().p("AhVLnQhzg/gEjvQgBhJAKhUIALhEQBRBpBvByQA4A5ApAkQgIjAiki5Qgzg7g+gxIgzgoQDFgjCBBDQBAAjAaAqQAAiKiuiBQg1gqhBgiIhBAsQBlheCAAqQBAAVAvAbQAAiVh/iSQgogugugoIikhVQEQApBFBhQAyBPAHAgQgciWg4h4IhnhAQBsAHBDBHQAgAjAXAdIAAU/g");
	this.shape_1529.setTransform(727.35,528.8);

	this.shape_1530 = new cjs.Shape();
	this.shape_1530.graphics.f("#20092A").s().p("AhVLnQhzg/gEjuQgBhKAKhUIALhDQBRBpBvByQA4A4ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iTQgogugugnIikhWQEQAoBEBiQAzBPAHAgQgciWg4h4IhmhAQBrAIBDBHQAgAjAXAdIAAU+g");
	this.shape_1530.setTransform(727.35,528.75);

	this.shape_1531 = new cjs.Shape();
	this.shape_1531.graphics.f("#20092A").s().p("AhVLoQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQEQAnBEBiQAzBQAHAgQgciWg4h4IhlhCQBqAKBDBGQAgAkAXAcIAAU/g");
	this.shape_1531.setTransform(727.35,528.675);

	this.shape_1532 = new cjs.Shape();
	this.shape_1532.graphics.f("#20092A").s().p("AhVLpQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iSQgogugugoIikhVQEQAlBEBjQAzBQAHAhQgciXg4h3IhlhEQBqALBDBHQAgAjAXAdIAAU/g");
	this.shape_1532.setTransform(727.35,528.625);

	this.shape_1533 = new cjs.Shape();
	this.shape_1533.graphics.f("#20092A").s().p("AhVLpQhzg/gEjuQgBhKAKhUIALhDQBRBpBvByQA4A4ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iTQgogugugnIikhWQEQAlBEBiQAzBSAHAgQgciWg4h4IhkhFQBpANBDBHQAgAjAXAdIAAU+g");
	this.shape_1533.setTransform(727.35,528.55);

	this.shape_1534 = new cjs.Shape();
	this.shape_1534.graphics.f("#20092A").s().p("AhVLqQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQEQAjBDBjQA0BTAHAgQgciWg4h4IhjhGQBoAOBDBGQAgAkAXAcIAAU/g");
	this.shape_1534.setTransform(727.35,528.475);

	this.shape_1535 = new cjs.Shape();
	this.shape_1535.graphics.f("#20092A").s().p("AhVLrQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iSQgogugugoIikhVQEQAiBDBjQA0BTAHAhQgciXg4h3IhihIQBnAPBDBHQAgAjAXAdIAAU/g");
	this.shape_1535.setTransform(727.35,528.425);

	this.shape_1536 = new cjs.Shape();
	this.shape_1536.graphics.f("#20092A").s().p("AhVLrQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQEQAhBDBkQA0BUAHAgQgciWg4h4IhihIQBnAQBDBGQAgAkAXAcIAAU/g");
	this.shape_1536.setTransform(727.35,528.375);

	this.shape_1537 = new cjs.Shape();
	this.shape_1537.graphics.f("#20092A").s().p("AhVLsQhzg/gEjvQgBhJAKhUIALhEQBRBpBvByQA4A5ApAkQgIjAiki5Qgzg7g+gxIgzgoQDFgjCBBDQBAAjAaAqQAAiKiuiBQg1gqhBgiIhBAsQBlheCAAqQBAAVAvAbQAAiVh/iSQgogugugoIikhVQEPAgBDBkQA1BVAHAgQgciWg4h4IhihKQBnARBDBHQAgAjAXAdIAAU/g");
	this.shape_1537.setTransform(727.35,528.3);

	this.shape_1538 = new cjs.Shape();
	this.shape_1538.graphics.f("#20092A").s().p("AhVLtQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iSQgogugugoIikhVQEPAeBDBkQA1BWAHAhQgciXg4h3IhhhMQBmATBDBHQAgAjAXAdIAAU/g");
	this.shape_1538.setTransform(727.35,528.225);

	this.shape_1539 = new cjs.Shape();
	this.shape_1539.graphics.f("#20092A").s().p("AhVLtQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQEPAdBCBlQA2BXAHAgQgciWg4h4IhghMQBlAUBDBGQAgAkAXAcIAAU/g");
	this.shape_1539.setTransform(727.35,528.175);

	this.shape_1540 = new cjs.Shape();
	this.shape_1540.graphics.f("#20092A").s().p("AhVLuQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iSQgogugugoIikhVQEPAcBCBlQA2BXAHAhQgciXg4h3IhghOQBlAVBDBHQAgAjAXAdIAAU/g");
	this.shape_1540.setTransform(727.35,528.125);

	this.shape_1541 = new cjs.Shape();
	this.shape_1541.graphics.f("#20092A").s().p("AhVLuQhzg/gEjuQgBhKAKhUIALhDQBRBpBvByQA4A4ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iTQgogugugnIikhWQEPAbBCBmQA2BYAHAgQgciWg4h4IhfhPQBkAXBDBHQAgAjAXAdIAAU+g");
	this.shape_1541.setTransform(727.35,528.05);

	this.shape_1542 = new cjs.Shape();
	this.shape_1542.graphics.f("#20092A").s().p("AhVLvQhzg/gEjvQgBhJAKhUIALhEQBRBpBvByQA4A5ApAkQgIjAiki5Qgzg7g+gxIgzgoQDFgjCBBDQBAAjAaAqQAAiKiuiBQg1gqhBgiIhBAsQBlheCAAqQBAAVAvAbQAAiVh/iSQgogugugoIikhVQEOAZBCBmQA3BZAHAhQgciWg4h4IhehQQBjAXBDBHQAgAjAXAdIAAU/g");
	this.shape_1542.setTransform(727.35,528);

	this.shape_1543 = new cjs.Shape();
	this.shape_1543.graphics.f("#20092A").s().p("AhVLwQhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iSQgogugugoIikhVQEPAYBBBmQA3BaAHAhQgciXg4h3IhehSQBjAZBDBHQAgAjAXAdIAAU/g");
	this.shape_1543.setTransform(727.35,527.925);

	this.shape_1544 = new cjs.Shape();
	this.shape_1544.graphics.f("#20092A").s().p("AhVLwQhzg/gEjuQgBhKAKhUIALhDQBRBpBvByQA4A4ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaApQAAiJiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iTQgogugugnIikhWQEPAXBBBnQA3BbAHAgQgciWg4h4IhchSQBhAaBDBHQAgAjAXAdIAAU+g");
	this.shape_1544.setTransform(727.35,527.85);

	this.shape_1545 = new cjs.Shape();
	this.shape_1545.graphics.f("#20092A").s().p("AhVLxQhzg/gEjvQgBhJAKhUIALhEQBRBpBvByQA4A5ApAkQgIjAiki5Qgzg7g+gxIgzgoQDFgjCBBDQBAAjAaAqQAAiKiuiBQg1gqhBgiIhBAsQBlheCAAqQBAAVAvAbQAAiVh/iSQgogugugoIikhVQEOAWBBBnQA4BcAHAgQgciWg4h4IhchUQBhAbBDBHQAgAjAXAdIAAU/g");
	this.shape_1545.setTransform(727.35,527.8);

	this.shape_1546 = new cjs.Shape();
	this.shape_1546.graphics.f("#20092A").s().p("AhVLxQhzg/gEjuQgBhKAKhUIALhDQBRBpBvByQA4A4ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iTQgogugugnIikhWQEOAVBBBnQA4BdAHAgQgciWg4h4IhbhUQBgAcBDBHQAgAjAXAdIAAU+g");
	this.shape_1546.setTransform(727.35,527.75);

	this.shape_1547 = new cjs.Shape();
	this.shape_1547.graphics.f("#20092A").s().p("AhVLyQhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQEOAUBBBnQA4BeAHAgQgciWg4h4IhahWQBfAeBDBGQAgAkAXAcIAAU/g");
	this.shape_1547.setTransform(727.35,527.675);

	this.shape_1548 = new cjs.Shape();
	this.shape_1548.graphics.f("#20092A").s().p("AhVLzQhzg/gEjvQgBhJAKhUIALhEQBRBpBvByQA4A5ApAkQgIjAiki5Qgzg7g+gxIgzgoQDFgjCBBDQBAAjAaAqQAAiKiuiBQg1gqhBgiIhBAsQBlheCAAqQBAAVAvAbQAAiVh/iSQgogugugoIikhVQEOASBABoQA5BfAHAgQgciWg4h4IhahYQBfAfBDBHQAgAjAXAdIAAU/g");
	this.shape_1548.setTransform(727.35,527.6);

	this.shape_1549 = new cjs.Shape();
	this.shape_1549.graphics.f("#20092A").s().p("AhVLzQhzg/gEjuQgBhKAKhUIALhDQBRBpBvByQA4A4ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iTQgogugugnIikhWQENASBBBoQA5BfAHAgQgciWg4h4IhZhZQBeAhBDBHQAgAjAXAdIAAU+g");
	this.shape_1549.setTransform(727.35,527.55);

	this.shape_1550 = new cjs.Shape();
	this.shape_1550.graphics.f("#20092A").s().p("AhVL0Qhzg/gEjvQgBhJAKhUIALhEQBRBpBvByQA4A5ApAkQgIjAiki5Qgzg7g+gxIgzgoQDFgjCBBDQBAAjAaAqQAAiKiuiBQg1gqhBgiIhBAsQBlheCAAqQBAAVAvAbQAAiVh/iSQgogugugoIikhVQEOAQBABoQA5BhAHAgQgciWg4h4IhZhaQBeAhBDBHQAgAjAXAdIAAU/g");
	this.shape_1550.setTransform(727.35,527.5);

	this.shape_1551 = new cjs.Shape();
	this.shape_1551.graphics.f("#20092A").s().p("AhVL1Qhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iSQgogugugoIikhVQEOAOBABpQA5BhAHAhQgciXg4h3IhYhcQBdAjBDBHQAgAjAXAdIAAU/g");
	this.shape_1551.setTransform(727.35,527.425);

	this.shape_1552 = new cjs.Shape();
	this.shape_1552.graphics.f("#20092A").s().p("AhVL1Qhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQENAOBABpQA6BiAHAgQgciWg4h4IhYhcQBdAkBDBGQAgAkAXAcIAAU/g");
	this.shape_1552.setTransform(727.35,527.375);

	this.shape_1553 = new cjs.Shape();
	this.shape_1553.graphics.f("#20092A").s().p("AhVL2Qhzg/gEjvQgBhJAKhUIALhEQBRBpBvByQA4A5ApAkQgIjAiki5Qgzg7g+gxIgzgoQDFgjCBBDQBAAjAaAqQAAiKiuiBQg1gqhBgiIhBAsQBlheCAAqQBAAVAvAbQAAiVh/iSQgogugugoIikhVQENAMBABqQA6BiAHAhQgciWg4h4IhXheQBcAlBDBHQAgAjAXAdIAAU/g");
	this.shape_1553.setTransform(727.35,527.3);

	this.shape_1554 = new cjs.Shape();
	this.shape_1554.graphics.f("#20092A").s().p("AhVL3Qhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iSQgogugugoIikhVQENALBABpQA6BkAHAhQgciXg4h3IhWhgQBbAnBDBHQAgAjAXAdIAAU/g");
	this.shape_1554.setTransform(727.35,527.225);

	this.shape_1555 = new cjs.Shape();
	this.shape_1555.graphics.f("#20092A").s().p("AhVL3Qhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQENAKBABqQA6BlAHAgQgciWg4h4IhVhgQBaAoBDBGQAgAkAXAcIAAU/g");
	this.shape_1555.setTransform(727.35,527.175);

	this.shape_1556 = new cjs.Shape();
	this.shape_1556.graphics.f("#20092A").s().p("AhVL4Qhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iSQgogugugoIikhVQEMAIBBBrQA6BlAHAhQgciXg4h3IhVhiQBaApBDBHQAgAjAXAdIAAU/g");
	this.shape_1556.setTransform(727.35,527.125);

	this.shape_1557 = new cjs.Shape();
	this.shape_1557.graphics.f("#20092A").s().p("AhVL4Qhzg/gEjuQgBhKAKhUIALhDQBRBpBvByQA4A4ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iTQgogugugnIikhWQENAIA/BqQA7BnAHAgQgciWg4h4IhUhjQBZArBDBHQAgAjAXAdIAAU+g");
	this.shape_1557.setTransform(727.35,527.05);

	this.shape_1558 = new cjs.Shape();
	this.shape_1558.graphics.f("#20092A").s().p("AhVL5Qhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQEMAGBABrQA7BoAHAgQgciWg4h4IhThkQBYAsBDBGQAgAkAXAcIAAU/g");
	this.shape_1558.setTransform(727.35,526.975);

	this.shape_1559 = new cjs.Shape();
	this.shape_1559.graphics.f("#20092A").s().p("AhVL6Qhzg/gEjvQgBhKAKhTIALhEQBRBpBvByQA4A5ApAjQgIi/iki6Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iSQgogugugoIikhVQEMAFBABrQA7BoAHAhQgciXg4h3IhShmQBXAtBDBHQAgAjAXAdIAAU/g");
	this.shape_1559.setTransform(727.35,526.925);

	this.shape_1560 = new cjs.Shape();
	this.shape_1560.graphics.f("#20092A").s().p("AhVL6Qhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQEMAEA/BsQA8BpAHAgQgciWg4h4IhShmQBXAuBDBGQAgAkAXAcIAAU/g");
	this.shape_1560.setTransform(727.35,526.875);

	this.shape_1561 = new cjs.Shape();
	this.shape_1561.graphics.f("#20092A").s().p("AhVL7Qhzg/gEjvQgBhJAKhUIALhEQBRBpBvByQA4A5ApAkQgIjAiki5Qgzg7g+gxIgzgoQDFgjCBBDQBAAjAaAqQAAiKiuiBQg1gqhBgiIhBAsQBlheCAAqQBAAVAvAbQAAiVh/iSQgogugugoIikhVQEMADA/BrQA8BrAHAgQgciWg4h4IhRhoQBWAvBDBHQAgAjAXAdIAAU/g");
	this.shape_1561.setTransform(727.35,526.8);

	this.shape_1562 = new cjs.Shape();
	this.shape_1562.graphics.f("#20092A").s().p("AhVL7Qhzg/gEjuQgBhKAKhUIALhDQBRBpBvByQA4A4ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iTQgogugugnIikhWQEMACA/BsQA8BrAHAgQgciWg4h4IhQhpQBVAxBDBHQAgAjAXAdIAAU+g");
	this.shape_1562.setTransform(727.35,526.75);

	this.shape_1563 = new cjs.Shape();
	this.shape_1563.graphics.f("#20092A").s().p("AhVL8Qhzg/gEjuQgBhKAKhUIALhEQBRBqBvBxQA4A5ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAiAaAqQAAiJiuiCQg1gphBgjIhBAsQBlheCAAqQBAAWAvAaQAAiVh/iSQgogugugnIikhWQEMAAA+BtQA9BsAHAgQgciWg4h4IhQhqQBVAyBDBGQAgAkAXAcIAAU/g");
	this.shape_1563.setTransform(727.35,526.675);

	this.shape_1564 = new cjs.Shape();
	this.shape_1564.graphics.f("#20092A").s().p("AhVL9Qhzg/gEjvQgBhJAKhUIALhEQBRBpBvByQA4A5ApAkQgIjAiki5Qgzg7g+gxIgzgoQDFgjCBBDQBAAjAaAqQAAiKiuiBQg1gqhBgiIhBAsQBlheCAAqQBAAVAvAbQAAiVh/iSQgogugugoIikhVQELgCA/BuQA9BsAHAhQgciWg4h4IhPhsQBUAzBDBHQAgAjAXAdIAAU/g");
	this.shape_1564.setTransform(727.35,526.6);

	this.shape_1565 = new cjs.Shape();
	this.shape_1565.graphics.f("#20092A").s().p("AhVL9Qhzg/gEjuQgBhKAKhUIALhDQBRBpBvByQA4A4ApAkQgIjAiki5Qgzg6g+gyIgzgnQDFgkCBBEQBAAjAaAqQAAiKiuiCQg1gphBgiIhBAsQBlhfCAArQBAAVAvAaQAAiUh/iTQgogugugnIikhWQEMgCA9BtQA+BuAHAgQgciWg4h4IhPhsQBUA0BDBHQAgAjAXAdIAAU+g");
	this.shape_1565.setTransform(727.35,526.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1435}]}).to({state:[{t:this.shape_1436}]},1).to({state:[{t:this.shape_1437}]},1).to({state:[{t:this.shape_1438}]},1).to({state:[{t:this.shape_1439}]},1).to({state:[{t:this.shape_1440}]},1).to({state:[{t:this.shape_1441}]},1).to({state:[{t:this.shape_1442}]},1).to({state:[{t:this.shape_1443}]},1).to({state:[{t:this.shape_1444}]},1).to({state:[{t:this.shape_1445}]},1).to({state:[{t:this.shape_1446}]},1).to({state:[{t:this.shape_1447}]},1).to({state:[{t:this.shape_1448}]},1).to({state:[{t:this.shape_1449}]},1).to({state:[{t:this.shape_1450}]},1).to({state:[{t:this.shape_1451}]},1).to({state:[{t:this.shape_1452}]},1).to({state:[{t:this.shape_1453}]},1).to({state:[{t:this.shape_1454}]},1).to({state:[{t:this.shape_1455}]},1).to({state:[{t:this.shape_1456}]},1).to({state:[{t:this.shape_1457}]},1).to({state:[{t:this.shape_1458}]},1).to({state:[{t:this.shape_1459}]},1).to({state:[{t:this.shape_1460}]},1).to({state:[{t:this.shape_1461}]},1).to({state:[{t:this.shape_1462}]},1).to({state:[{t:this.shape_1463}]},1).to({state:[{t:this.shape_1464}]},1).to({state:[{t:this.shape_1465}]},1).to({state:[{t:this.shape_1466}]},1).to({state:[{t:this.shape_1467}]},1).to({state:[{t:this.shape_1468}]},1).to({state:[{t:this.shape_1469}]},1).to({state:[{t:this.shape_1470}]},1).to({state:[{t:this.shape_1471}]},1).to({state:[{t:this.shape_1472}]},1).to({state:[{t:this.shape_1473}]},1).to({state:[{t:this.shape_1474}]},1).to({state:[{t:this.shape_1475}]},1).to({state:[{t:this.shape_1476}]},1).to({state:[{t:this.shape_1477}]},1).to({state:[{t:this.shape_1478}]},1).to({state:[{t:this.shape_1479}]},1).to({state:[{t:this.shape_1480}]},1).to({state:[{t:this.shape_1481}]},1).to({state:[{t:this.shape_1482}]},1).to({state:[{t:this.shape_1483}]},1).to({state:[{t:this.shape_1484}]},1).to({state:[{t:this.shape_1485}]},1).to({state:[{t:this.shape_1486}]},1).to({state:[{t:this.shape_1487}]},1).to({state:[{t:this.shape_1488}]},1).to({state:[{t:this.shape_1489}]},1).to({state:[{t:this.shape_1490}]},1).to({state:[{t:this.shape_1491}]},1).to({state:[{t:this.shape_1492}]},1).to({state:[{t:this.shape_1493}]},1).to({state:[{t:this.shape_1494}]},1).to({state:[{t:this.shape_1495}]},1).to({state:[{t:this.shape_1496}]},1).to({state:[{t:this.shape_1497}]},1).to({state:[{t:this.shape_1498}]},1).to({state:[{t:this.shape_1499}]},1).to({state:[{t:this.shape_1500}]},1).to({state:[{t:this.shape_1501}]},1).to({state:[{t:this.shape_1502}]},1).to({state:[{t:this.shape_1503}]},1).to({state:[{t:this.shape_1504}]},1).to({state:[{t:this.shape_1505}]},1).to({state:[{t:this.shape_1506}]},1).to({state:[{t:this.shape_1507}]},1).to({state:[{t:this.shape_1508}]},1).to({state:[{t:this.shape_1509}]},1).to({state:[{t:this.shape_1510}]},1).to({state:[{t:this.shape_1511}]},1).to({state:[{t:this.shape_1512}]},1).to({state:[{t:this.shape_1513}]},1).to({state:[{t:this.shape_1514}]},1).to({state:[{t:this.shape_1515}]},1).to({state:[{t:this.shape_1516}]},1).to({state:[{t:this.shape_1517}]},1).to({state:[{t:this.shape_1518}]},1).to({state:[{t:this.shape_1519}]},1).to({state:[{t:this.shape_1520}]},1).to({state:[{t:this.shape_1521}]},1).to({state:[{t:this.shape_1522}]},1).to({state:[{t:this.shape_1523}]},1).to({state:[{t:this.shape_1524}]},1).to({state:[{t:this.shape_1525}]},1).to({state:[{t:this.shape_1526}]},1).to({state:[{t:this.shape_1527}]},1).to({state:[{t:this.shape_1528}]},1).to({state:[{t:this.shape_1529}]},1).to({state:[{t:this.shape_1530}]},1).to({state:[{t:this.shape_1531}]},1).to({state:[{t:this.shape_1532}]},1).to({state:[{t:this.shape_1533}]},1).to({state:[{t:this.shape_1534}]},1).to({state:[{t:this.shape_1535}]},1).to({state:[{t:this.shape_1536}]},1).to({state:[{t:this.shape_1537}]},1).to({state:[{t:this.shape_1538}]},1).to({state:[{t:this.shape_1539}]},1).to({state:[{t:this.shape_1540}]},1).to({state:[{t:this.shape_1541}]},1).to({state:[{t:this.shape_1542}]},1).to({state:[{t:this.shape_1543}]},1).to({state:[{t:this.shape_1544}]},1).to({state:[{t:this.shape_1545}]},1).to({state:[{t:this.shape_1546}]},1).to({state:[{t:this.shape_1547}]},1).to({state:[{t:this.shape_1548}]},1).to({state:[{t:this.shape_1549}]},1).to({state:[{t:this.shape_1550}]},1).to({state:[{t:this.shape_1551}]},1).to({state:[{t:this.shape_1552}]},1).to({state:[{t:this.shape_1553}]},1).to({state:[{t:this.shape_1554}]},1).to({state:[{t:this.shape_1555}]},1).to({state:[{t:this.shape_1556}]},1).to({state:[{t:this.shape_1557}]},1).to({state:[{t:this.shape_1558}]},1).to({state:[{t:this.shape_1559}]},1).to({state:[{t:this.shape_1560}]},1).to({state:[{t:this.shape_1561}]},1).to({state:[{t:this.shape_1562}]},1).to({state:[{t:this.shape_1563}]},1).to({state:[{t:this.shape_1564}]},1).to({state:[{t:this.shape_1565}]},1).wait(1));

	// трава2
	this.instance_4 = new lib.Анимация11("synched",0);
	this.instance_4.setTransform(35.35,526.2);

	this.instance_5 = new lib.Анимация12("synched",0);
	this.instance_5.setTransform(43.9,525.25,1,1,-24.4728);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_5}]},70).to({state:[{t:this.instance_5}]},37).to({state:[{t:this.instance_5}]},19).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({rotation:9.0382},70).to({rotation:-12.9096,x:43.85,y:525.3},37).to({regX:0.1,regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-24.3581,x:43.95,y:525.35},19).wait(1));

	// куст
	this.shape_1566 = new cjs.Shape();
	this.shape_1566.graphics.f("#1B0730").s().p("ArcCZIAPgbQAVggAcgXQBbhJCGAoIAXgeQAegfAigQQBwgyB5CJQAFgSAJgYQATgvAYgfQBMhkBoBmIANgUQARgWAVgKQBAgeBJBtIAngiQAyglA0gTQCng9B7CQIAADLg");
	this.shape_1566.setTransform(610.6158,568.7626,1.9672,1.9672);

	this.timeline.addTween(cjs.Tween.get(this.shape_1566).wait(131));

	// трава
	this.instance_6 = new lib.Анимация9("synched",0);
	this.instance_6.setTransform(615.4,535.05);

	this.instance_7 = new lib.Анимация10("synched",0);
	this.instance_7.setTransform(614.95,536.05);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},32).to({state:[{t:this.instance_7}]},39).to({state:[{t:this.instance_7}]},38).to({state:[{t:this.instance_7}]},21).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(32).to({_off:false},0).to({rotation:-29.4686},39).to({regY:0.1,rotation:4.2222,x:615.05,y:536.1},38).to({regX:0.1,rotation:-10.7191,x:615.15},21).wait(1));

	// облако2
	this.instance_8 = new lib.Анимация7("synched",0);
	this.instance_8.setTransform(787,100);

	this.instance_9 = new lib.Анимация8("synched",0);
	this.instance_9.setTransform(437,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},130).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true,x:437,y:200},130).wait(1));

	// облако
	this.instance_10 = new lib.Анимация5("synched",0);
	this.instance_10.setTransform(78.95,300);

	this.instance_11 = new lib.Анимация6("synched",0);
	this.instance_11.setTransform(658.95,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11}]},130).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true,x:658.95,y:240},130).wait(1));

	// морковка
	this.instance_12 = new lib.VectorCarrotDownloadTransparentPNGImage();
	this.instance_12.setTransform(320.6,486.55,0.1,0.1,26.217);

	this.instance_13 = new lib.Анимация25("synched",0);
	this.instance_13.setTransform(350,540);
	this.instance_13._off = true;

	this.instance_14 = new lib.Анимация26("synched",0);
	this.instance_14.setTransform(330,520);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_12}]},49).to({state:[{t:this.instance_13}]},20).to({state:[{t:this.instance_14}]},41).to({state:[]},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(69).to({_off:false},0).to({_off:true,x:330,y:520},41).wait(21));

	// фон
	this.instance_15 = new lib.Ресурс1();
	this.instance_15.setTransform(-66,-62,1.6164,1.6171);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(131));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(213,238,687,452.1);
// library properties:
lib.properties = {
	id: '41C95A3C0FB5804EACA1ADDCBBE09D11',
	width: 750,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/звук_atlas_1.png", id:"звук_atlas_1"},
		{src:"sounds/chewing_carrot_02.mp3", id:"chewing_carrot_02"},
		{src:"sounds/z_ukpryzhki.mp3", id:"z_ukpryzhki"}
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
an.compositions['41C95A3C0FB5804EACA1ADDCBBE09D11'] = {
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