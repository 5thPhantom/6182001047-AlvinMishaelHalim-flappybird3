System.register("chunks:///_virtual/Background.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){var t,e,s,a,r,o,h,n,p,d,l,c;return{setters:[function(i){t=i.applyDecoratedDescriptor,e=i.inheritsLoose,s=i.initializerDefineProperty,a=i.assertThisInitialized},function(i){r=i.cclegacy,o=i._decorator,h=i.Label,n=i.Node,p=i.Prefab,d=i.instantiate,l=i.randomRangeInt,c=i.Component}],execute:function(){var m,g,u,x,f,P,C,y,B,b,v,N,A,I,k,T,S,z,w;r._RF.push({},"7ead6mtv8dJ7qKlLYWq6xoN","Background",void 0);var H=o.ccclass,D=o.property;i("Background",(m=H("Background"),g=D({type:h}),u=D({type:n}),x=D({type:p}),f=D({type:p}),P=D({type:p}),C=D({type:p}),y=D({type:p}),B=D({type:p}),m((N=t((v=function(i){function t(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return t=i.call.apply(i,[this].concat(r))||this,s(t,"score",N,a(t)),s(t,"parentBackground",A,a(t)),s(t,"prefabPipaTop",I,a(t)),s(t,"prefabPipaBot",k,a(t)),s(t,"scoreBoard",T,a(t)),s(t,"pauseBoard",S,a(t)),s(t,"settingsBoard",z,a(t)),s(t,"coin",w,a(t)),t.pipaArr=[[]],t.currScore=0,t.idx=[],t.flag=[],t.currTime=0,t.metaIdx=0,t.shake=[[]],t.shakeScreen=0,t.shakeDuration=0,t.mode=void 0,t.coinTime=0,t.boolCoin=!1,t.aCoin=!1,t.coinNode=void 0,t.mult=!0,t}e(t,i);var r=t.prototype;return r.start=function(){this.mode=this.node.parent.parent.getChildByName("Mode");var i=d(this.prefabPipaTop),t=d(this.prefabPipaBot),e=d(this.pauseBoard),s=d(this.settingsBoard);this.node.parent.addChild(s),this.node.parent.addChild(e),this.node.parent.getChildByName("PipeBot").addChild(t),this.node.parent.getChildByName("PipeTop").addChild(i),this.pipaArr[0][0]=i,this.pipaArr[0][1]=t;var a=this.pipaArr[0][0].getPosition();this.pipaArr[0][0].name="PipeTop1",a.x=288,this.pipaArr[0][0].setPosition(a);var r=this.pipaArr[0][1].getPosition();this.pipaArr[0][1].name="PipeBot1",r.x=288,this.pipaArr[0][1].setPosition(r),this.score.string="",this.idx.push(l(0,2)),this.flag.push(!0),this.shake[0][0]=5,this.shake[0][1]=5,this.shake.push([]),this.shake[1][0]=-10,this.shake[1][1]=0,this.shake.push([0,-10]),this.shake.push([10,0]),this.shake.push([-5,5])},r.update=function(i){if(0==this.node.parent.getChildByName("Button").active){this.node.parent.getChildByName("CoinBoard").active=!0,this.node.parent.getChildByName("SettingsButton").active=!1,this.node.parent.getChildByName("SettingsBoard").active=!1;var t=this.node.parent.getChildByName("Pause");t.active=!0;var e=t.getComponentInChildren(h);this.score.string=this.currScore.toString();var s=this.node.parent.getChildByName("GameOver");if(0==s.active&&"Pause"===e.string){if(this.currTime+=i,this.currTime>1&&(i+=this.currTime/1e3),"0"==this.mode.getComponent(h).string){if(i>3&&(i=3),Math.floor(this.currTime/3)>this.metaIdx&&this.metaIdx<=3){this.metaIdx++;var a=d(this.prefabPipaTop),r=d(this.prefabPipaBot);this.pipaArr.push([]),this.pipaArr[this.metaIdx].push(a),this.pipaArr[this.metaIdx].push(r);var o=this.pipaArr[this.metaIdx][0].getPosition();this.pipaArr[this.metaIdx][0].name="PipeTop"+this.metaIdx,o.x=288,this.pipaArr[this.metaIdx][0].setPosition(o);var n=this.pipaArr[this.metaIdx][1].getPosition();this.pipaArr[this.metaIdx][1].name="PipeTop"+this.metaIdx,n.x=288,this.pipaArr[this.metaIdx][1].setPosition(n),this.node.parent.getChildByName("PipeBot").addChild(r),this.node.parent.getChildByName("PipeTop").addChild(a),this.idx.push(l(0,2)),this.flag.push(!1)}}else if(i>5&&(i=5),Math.floor(this.currTime/3)>this.metaIdx&&this.metaIdx<=5){this.metaIdx++;var p=d(this.prefabPipaTop),c=d(this.prefabPipaBot);this.pipaArr.push([]),this.pipaArr[this.metaIdx].push(p),this.pipaArr[this.metaIdx].push(c);var m=this.pipaArr[this.metaIdx][0].getPosition();this.pipaArr[this.metaIdx][0].name="PipeTop"+this.metaIdx,m.x=288,this.pipaArr[this.metaIdx][0].setPosition(m);var g=this.pipaArr[this.metaIdx][1].getPosition();this.pipaArr[this.metaIdx][1].name="PipeTop"+this.metaIdx,g.x=288,this.pipaArr[this.metaIdx][1].setPosition(g),this.node.parent.getChildByName("PipeBot").addChild(c),this.node.parent.getChildByName("PipeTop").addChild(p),this.idx.push(l(0,2)),this.flag.push(!1)}if(0==this.aCoin&&0==this.boolCoin&&(this.coinTime+=i,this.coinTime>5&&(this.boolCoin=!0,this.coinTime=0)),this.boolCoin&&0==this.aCoin){this.coinTime+=i;var u=l(0,10);if(this.coinTime>u){var x=d(this.coin);this.coinNode=x;var f=this.coinNode.getPosition();f.x=170,f.y=l(-150,170),this.coinNode.setPosition(f),this.node.getParent().getChildByName("CoinNode").addChild(this.coinNode),this.aCoin=!0,this.boolCoin=!1}}if(this.aCoin&&this.coinNode.active){var P=this.coinNode.getPosition();P.x-=96*i,this.coinNode.setPosition(P),P.x<-180&&(this.coinNode.active=!1)}null!=this.coinNode&&0==this.coinNode.active&&(this.aCoin=!1);var C=this.node.getPosition();C.x-=72*i,C.x<=-288&&(C.x+=288),this.node.setPosition(C),this.currScore=Math.floor(this.currTime/3),this.setHighScore(this.currScore);for(var y=0;y<=this.metaIdx;y++){var B=this.pipaArr[y][this.idx[y]].getPosition();0!=y?(B.x-this.pipaArr[y-1][this.idx[y-1]].getPosition().x>=100||this.flag[y])&&(B.x-=96*i,this.flag[y]=!0):(B.x-this.pipaArr[this.metaIdx][this.idx[this.metaIdx]].getPosition().x>=100||this.flag[y])&&(B.x-=96*i,this.flag[y]=!0),B.x<=-200?(B.x=288,B.y=l(-20,130),this.pipaArr[y][0].setPosition(B),B.y=l(-70,40),this.pipaArr[y][1].setPosition(B),this.idx[y]=l(0,2),this.flag[y]=!1):this.pipaArr[y][this.idx[y]].setPosition(B)}}else if(1==s.active){if(this.mult){var b=this.node.parent.getChildByName("CoinScore").getComponent(h);this.currScore*=+b.string+1,this.mult=!1}if(this.setHighScore(this.currScore),this.shakeDuration<.25||0!=this.shakeScreen){if(this.shakeScreen<this.shake.length){var v=this.node.parent.getChildByName("Camera"),N=v.getPosition();N.x+=this.shake[this.shakeScreen][0],N.y+=this.shake[this.shakeScreen][1],v.setPosition(N),this.shakeScreen++}else this.shakeScreen==this.shake.length&&(this.shakeScreen=0);this.shakeDuration+=i}}}},r.setHighScore=function(i){if("0"==this.node.parent.parent.getChildByName("Mode").getComponent(h).string){var t=this.node.parent.parent.getChildByName("HighScore");i>Number(t.getComponent(h).string)&&(t.getComponent(h).string=i.toString())}else{var e=this.node.parent.parent.getChildByName("HighScoreHard");i>Number(e.getComponent(h).string)&&(e.getComponent(h).string=i.toString())}},t}(c)).prototype,"score",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=t(v.prototype,"parentBackground",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=t(v.prototype,"prefabPipaTop",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=t(v.prototype,"prefabPipaBot",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=t(v.prototype,"scoreBoard",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=t(v.prototype,"pauseBoard",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=t(v.prototype,"settingsBoard",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=t(v.prototype,"coin",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=v))||b));r._RF.pop()}}}));

System.register("chunks:///_virtual/base.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,r,n,o,a,s,c,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,s=e.Node,c=e.Label,u=e.Component}],execute:function(){var p,l,d,h,m;o._RF.push({},"7e5f7WhlIJMy6byeCYnL0/T","base",void 0);var g=a.ccclass,y=a.property;e("base",(p=g("base"),l=y({type:s}),p((m=t((h=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o))||this,r(t,"parentBackground",m,n(t)),t.currTime=0,t.mode=void 0,t}i(t,e);var o=t.prototype;return o.start=function(){},o.update=function(e){this.mode=this.node.parent.parent.getChildByName("Mode");var t=this.node.parent.getChildByName("GameOver"),i=this.node.parent.getChildByName("Pause").getComponentInChildren(c);if(0==this.node.parent.getChildByName("Button").active&&0==t.active&&"Pause"===i.string){this.currTime+=e,this.currTime>1&&(e+=this.currTime/1e3),"0"==this.mode.getComponent(c).string?e>3&&(e=3):e>5&&(e=5);var r=this.node.getPosition();r.x-=168*e,r.x<=-336&&(r.x+=336),this.node.setPosition(r)}},t}(u)).prototype,"parentBackground",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=h))||d));o._RF.pop()}}}));

System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Sfx.ts"],(function(e){var t,i,n,o,s,r,h,a,d,p,u,l,c;return{setters:[function(e){t=e.inheritsLoose},function(e){i=e.cclegacy,n=e._decorator,o=e.Label,s=e.input,r=e.Input,h=e.Collider2D,a=e.Contact2DType,d=e.RigidBody2D,p=e.Sprite,u=e.color,l=e.Component},function(e){c=e.Sfx}],execute:function(){var m;i._RF.push({},"38206peJopAJ7ZbAdaBh/YO","Bird",void 0);var g=n.ccclass;n.property,e("Bird",g("Bird")(m=function(e){function i(){for(var t,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).currTime=0,t.speedTurun=150,t.mode=void 0,t.lifeL=void 0,t.life=void 0,t.hit=!1,t.timer=0,t.alpha=255,t}t(i,e);var n=i.prototype;return n.start=function(){this.lifeL=this.node.parent.getChildByName("Life").getComponent(o),this.mode=this.node.parent.parent.getChildByName("Mode"),s.on(r.EventType.TOUCH_START,this.onInputReceived,this),this.node.getComponent(h).on(a.BEGIN_CONTACT,this.onCollide,this)},n.onInputReceived=function(e){var t=this.node.parent.getChildByName("GameOver"),i=this.node.parent.getChildByName("Pause").getComponentInChildren(o);0==t.active&&"Pause"==i.string&&(c.Instance.playSfx(1),this.speedTurun=225)},n.onCollide=function(e,t){if(0==t.tag){var i=this.life-1;if(this.lifeL.string=i.toString(),0==i){var n=this.node.parent.getChildByName("GameOver");0==n.active&&(c.Instance.playSfx(0),n.active=!0)}else this.node.getComponent(d).enabledContactListener=!1}},n.update=function(e){if(0==this.node.parent.getChildByName("Button").active){this.life=parseInt(this.lifeL.string);var t=this.node.parent.getChildByName("Pause").getComponentInChildren(o);if(1==this.node.parent.getChildByName("GameOver").active){this.currTime+=e,this.currTime>1&&(e+=this.currTime/1e3),"0"==this.mode.getComponent(o).string?e>3&&(e=3):e>5&&(e=5);var i=this.node.getPosition();if(i.y>=-180)this.speedTurun-=250*e,i.y+=this.speedTurun*e,-114!=i.x&&(i.x=-114),i.y<=-184&&(i.y=-184),this.node.setPosition(i),(n=this.speedTurun)>=30&&(n=30),n<=-90&&(n=-90),this.node.setRotationFromEuler(0,0,n)}else if("Continue"===t.string);else if("Pause"===t.string){this.currTime+=e,0==this.node.getComponent(d).enabledContactListener&&(this.hit=!0),this.hit?(this.timer+=e,this.timer<2?(this.alpha=255-this.alpha,this.node.getComponent(p).color=u(255,255,255,this.alpha)):(this.hit=!1,this.node.getComponent(d).enabledContactListener=!0)):(this.timer=0,this.node.getComponent(p).color=u(255,255,255,255)),this.currTime>1&&(e+=this.currTime/1e3),"0"==this.mode.getComponent(o).string?e>3&&(e=3):e>5&&(e=5);var n,s=this.node.getPosition();this.speedTurun-=250*e,s.y+=this.speedTurun*e,s.y>=244&&(s.y=244),-114!=s.x&&(s.x=-114),s.y<=-188&&(s.y=-188),this.node.setPosition(s),(n=this.speedTurun)>=30&&(n=30),n<=-90&&(n=-90),s.y<=-180&&(n=0),this.node.setRotationFromEuler(0,0,n)}}},i}(l))||m);i._RF.pop()}}}));

System.register("chunks:///_virtual/Button.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,o,e,r,u;return{setters:[function(t){n=t.inheritsLoose},function(t){o=t.cclegacy,e=t._decorator,r=t.NodeEventType,u=t.Component}],execute:function(){var i;o._RF.push({},"11530quKYJJNIurMvluhv8v","Button",void 0);var s=e.ccclass;e.property,t("Button",s("Button")(i=function(t){function o(){return t.apply(this,arguments)||this}n(o,t);var e=o.prototype;return e.start=function(){this.node.on(r.TOUCH_END,this.startGame,this)},e.startGame=function(){this.node.active=!1},e.update=function(t){},o}(u))||i);o._RF.pop()}}}));

System.register("chunks:///_virtual/Coin.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Sfx.ts"],(function(t){var n,e,o,i,r,s;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,o=t._decorator,i=t.Label,r=t.Component},function(t){s=t.Sfx}],execute:function(){var a;e._RF.push({},"2eaab6UXAlF95+0dLg77KlW","Coin",void 0);var p=o.ccclass;o.property,t("Coin",p("Coin")(a=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var o=e.prototype;return o.start=function(){},o.update=function(t){var n=this.node.parent.parent.getChildByName("Pause").getComponentInChildren(i),e=this.node.parent.parent.getChildByName("Bird");if("Pause"===n.string){var o=e.getPosition();if(o.x>this.node.position.x-15&&o.x<this.node.position.x+15&&o.y>this.node.position.y-15&&o.y<this.node.position.y+15){s.Instance.playSfx(2),this.node.active=!1;var r=this.node.parent.parent.getChildByName("CoinScore"),a=+r.getComponent(i).string+1;r.getComponent(i).string=a.toString()}}},e}(r))||a);e._RF.pop()}}}));

System.register("chunks:///_virtual/CoinBoard.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(r){var e,t,i,o,n,s,c,a,u,l,p,h;return{setters:[function(r){e=r.applyDecoratedDescriptor,t=r.inheritsLoose,i=r.initializerDefineProperty,o=r.assertThisInitialized},function(r){n=r.cclegacy,s=r._decorator,c=r.SpriteFrame,a=r.Prefab,u=r.Label,l=r.instantiate,p=r.Sprite,h=r.Component}],execute:function(){var d,f,g,v,y,m,C;n._RF.push({},"6eeed8CvlNKKYsy7GRhfMCJ","CoinBoard",void 0);var L=s.ccclass,S=s.property;r("CoinBoard",(d=L("CoinBoard"),f=S({type:c}),g=S({type:a}),d((m=e((y=function(r){function e(){for(var e,t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return e=r.call.apply(r,[this].concat(n))||this,i(e,"arrSprite",m,o(e)),i(e,"img",C,o(e)),e.scoreL=void 0,e.currLen=1,e.currScore=void 0,e}t(e,r);var n=e.prototype;return n.start=function(){this.node.active=!1,this.scoreL=this.node.parent.getChildByName("CoinScore").getComponent(u),this.currScore=""},n.update=function(r){if(this.currScore!==this.scoreL.string){this.currScore=this.scoreL.string,this.scoreL.string.length>this.currLen&&this.currLen++,this.node.removeAllChildren();for(var e=0;e<this.currLen;e++){var t=l(this.img),i=+this.currScore[e];t.getComponent(p).spriteFrame=this.arrSprite[i],t.setPosition(-this.currLen/2*30+30*e,0,0),this.node.addChild(t)}}},e}(h)).prototype,"arrSprite",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),C=e(y.prototype,"img",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=y))||v));n._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/GameOver.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,r,n,o;return{setters:[function(e){t=e.inheritsLoose},function(e){r=e.cclegacy,n=e._decorator,o=e.Component}],execute:function(){var c;r._RF.push({},"20bc9jWcqFDx5UzBwWUOCqi","GameOver",void 0);var i=n.ccclass;n.property,e("GameOver",i("GameOver")(c=function(e){function r(){return e.apply(this,arguments)||this}t(r,e);var n=r.prototype;return n.start=function(){this.node.active=!1},n.update=function(e){},r}(o))||c);r._RF.pop()}}}));

System.register("chunks:///_virtual/HyperVar.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,r,o,i,n;return{setters:[function(e){t=e.inheritsLoose},function(e){r=e.cclegacy,o=e._decorator,i=e.director,n=e.Component}],execute:function(){var a;r._RF.push({},"de558ZvBtxL54eNODswiArD","HyperVar",void 0);var s=o.ccclass;o.property,e("HyperVar",s("HyperVar")(a=function(e){function r(){return e.apply(this,arguments)||this}t(r,e);var o=r.prototype;return o.start=function(){i.addPersistRootNode(this.node.parent.getChildByName("HighScore")),i.addPersistRootNode(this.node.parent.getChildByName("HighScoreHard")),i.addPersistRootNode(this.node.parent.getChildByName("Mode")),i.addPersistRootNode(this.node.parent.getChildByName("Color"))},o.update=function(e){},r}(n))||a);r._RF.pop()}}}));

System.register("chunks:///_virtual/LifeBoard.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,r,n,a,o,s,l,p,c,f,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){a=e.cclegacy,o=e._decorator,s=e.SpriteFrame,l=e.Prefab,p=e.Label,c=e.instantiate,f=e.Sprite,h=e.Component}],execute:function(){var u,d,g,L,m,y,v;a._RF.push({},"0aa7cXVVqdFmJo+ePg4Rka1","LifeBoard",void 0);var b=o.ccclass,B=o.property;e("LifeBoard",(u=b("LifeBoard"),d=B({type:s}),g=B({type:l}),u((y=t((m=function(e){function t(){for(var t,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,r(t,"arrSprite",y,n(t)),r(t,"img",v,n(t)),t.lifeL=void 0,t.currLife="0",t.set=!1,t}i(t,e);var a=t.prototype;return a.start=function(){this.lifeL=this.node.parent.getChildByName("Life").getComponent(p)},a.update=function(e){if(0==this.node.parent.getChildByName("Button").active&&(0==this.set&&(this.set=!0,"0"==this.node.parent.parent.getChildByName("Mode").getComponent(p).string?this.lifeL.string="3":this.lifeL.string="1"),this.set&&this.currLife!=this.lifeL.string)){this.currLife=this.lifeL.string;var t=parseInt(this.lifeL.string);this.node.removeAllChildren();for(var i=0;i<t;i++){var r=c(this.img);r.getComponent(f).spriteFrame=this.arrSprite[0],r.scale.set(.1,.1,0),r.setPosition(-t/2*15+15*i,0,0),this.node.addChild(r)}}},t}(h)).prototype,"arrSprite",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),v=t(m.prototype,"img",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=m))||L));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./Background.ts","./Bird.ts","./Button.ts","./Coin.ts","./CoinBoard.ts","./GameOver.ts","./HyperVar.ts","./LifeBoard.ts","./PBoard.ts","./Pause.ts","./PipaBot.ts","./PipaTop.ts","./ScoreBoard.ts","./Settings.ts","./SettingsButton.ts","./Sfx.ts","./base.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Pause.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,i,s,o,r,a;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,i=t._decorator,s=t.NodeEventType,o=t.Label,r=t.director,a=t.Component}],execute:function(){var c;n._RF.push({},"df50625dLFNebZMbL+j6k9f","Pause",void 0);var d=i.ccclass;i.property,t("Pause",d("Pause")(c=function(t){function n(){for(var e,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))||this).board=void 0,e.timer=!1,e.cd=0,e}e(n,t);var i=n.prototype;return i.start=function(){this.board=this.node.parent.getChildByName("PauseBoard"),this.node.active=!1,this.node.on(s.TOUCH_END,this.pauseGame,this)},i.pauseGame=function(){var t=this.node.getComponentInChildren(o);"Pause"===t.string?(t.string="Continue",this.board.active=!0):"Continue"===t.string?(this.timer=!0,this.board.active=!1):"Reset"===t.string&&(r.loadScene("scene"),t.string="Pause")},i.update=function(t){if(1==this.node.parent.getChildByName("GameOver").active)this.node.getComponentInChildren(o).string="Reset";else if(1==this.timer){this.cd+=t;var e=this.node.getComponentInChildren(o);e.string=Math.floor(4-this.cd).toString(),e.isBold=!0,Math.floor(4-this.cd)<=0&&(e.isBold=!1,this.timer=!1,e.string="Pause",this.cd=0)}},n}(a))||c);n._RF.pop()}}}));

System.register("chunks:///_virtual/PBoard.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,r,o,n,a;return{setters:[function(e){t=e.inheritsLoose},function(e){r=e.cclegacy,o=e._decorator,n=e.Label,a=e.Component}],execute:function(){var i;r._RF.push({},"f897cQK/eRKvZlDEc9WEGgH","PBoard",void 0);var c=o.ccclass;o.property,e("PBoard",c("PBoard")(i=function(e){function r(){for(var t,r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return(t=e.call.apply(e,[this].concat(o))||this).easyScore=void 0,t.hardScore=void 0,t}t(r,e);var o=r.prototype;return o.start=function(){this.easyScore=this.node.getChildByName("ScoreNum"),this.hardScore=this.node.getChildByName("ScoreNumHard"),this.node.active=!1},o.update=function(e){this.easyScore.getComponent(n).string=this.node.parent.parent.getChildByName("HighScore").getComponent(n).string,this.hardScore.getComponent(n).string=this.node.parent.parent.getChildByName("HighScoreHard").getComponent(n).string},r}(a))||i);r._RF.pop()}}}));

System.register("chunks:///_virtual/PipaBot.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,r,i,o,n,a,p,c,s,l;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){n=t.cclegacy,a=t._decorator,p=t.SpriteFrame,c=t.Sprite,s=t.Label,l=t.Component}],execute:function(){var u,h,d,f,y;n._RF.push({},"3debfAmv6BMubSKO4uKuaYv","PipaBot",void 0);var g=a.ccclass,m=a.property;t("PipaBot",(u=g("PipaBot"),h=m({type:p}),u((y=e((f=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return e=t.call.apply(t,[this].concat(n))||this,i(e,"arrSprite",y,o(e)),e.color=void 0,e}r(e,t);var n=e.prototype;return n.start=function(){this.color=this.node.parent.parent.parent.getChildByName("Color")},n.update=function(t){this.node.getChildByName("pipe-red").getComponent(c).spriteFrame=this.arrSprite[parseInt(this.color.getComponent(s).string)]},e}(l)).prototype,"arrSprite",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),d=f))||d));n._RF.pop()}}}));

System.register("chunks:///_virtual/PipaTop.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,r,i,o,n,p,a,c,s,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){n=e.cclegacy,p=e._decorator,a=e.SpriteFrame,c=e.Sprite,s=e.Label,l=e.Component}],execute:function(){var u,h,d,f,y;n._RF.push({},"00116zjv7lBzYbV3DDbSMWX","PipaTop",void 0);var g=p.ccclass,m=p.property;e("PipaTop",(u=g("PipaTop"),h=m({type:a}),u((y=t((f=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),p=0;p<r;p++)n[p]=arguments[p];return t=e.call.apply(e,[this].concat(n))||this,i(t,"arrSprite",y,o(t)),t.color=void 0,t}r(t,e);var n=t.prototype;return n.start=function(){this.color=this.node.parent.parent.parent.getChildByName("Color")},n.update=function(e){this.node.getChildByName("pipe-red").getComponent(c).spriteFrame=this.arrSprite[parseInt(this.color.getComponent(s).string)]},t}(l)).prototype,"arrSprite",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),d=f))||d));n._RF.pop()}}}));

System.register("chunks:///_virtual/ScoreBoard.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(r){var e,t,i,o,n,c,s,a,u,p,l,h;return{setters:[function(r){e=r.applyDecoratedDescriptor,t=r.inheritsLoose,i=r.initializerDefineProperty,o=r.assertThisInitialized},function(r){n=r.cclegacy,c=r._decorator,s=r.SpriteFrame,a=r.Prefab,u=r.Label,p=r.instantiate,l=r.Sprite,h=r.Component}],execute:function(){var d,f,g,S,m,L,y;n._RF.push({},"f133dsLQtlFp7m0F4fpFOaB","ScoreBoard",void 0);var v=c.ccclass,b=c.property;r("ScoreBoard",(d=v("ScoreBoard"),f=b({type:s}),g=b({type:a}),d((L=e((m=function(r){function e(){for(var e,t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];return e=r.call.apply(r,[this].concat(n))||this,i(e,"arrSprite",L,o(e)),i(e,"img",y,o(e)),e.scoreL=void 0,e.currLen=1,e.currScore=void 0,e}t(e,r);var n=e.prototype;return n.start=function(){this.scoreL=this.node.parent.getChildByName("Score").getComponent(u),this.currScore=""},n.update=function(r){if(this.currScore!==this.scoreL.string){this.currScore=this.scoreL.string,this.scoreL.string.length>this.currLen&&this.currLen++,this.node.removeAllChildren();for(var e=0;e<this.currLen;e++){var t=p(this.img),i=+this.currScore[e];t.getComponent(l).spriteFrame=this.arrSprite[i],t.setPosition(-this.currLen/2*30+30*e,0,0),this.node.addChild(t)}}},e}(h)).prototype,"arrSprite",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),y=e(m.prototype,"img",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=m))||S));n._RF.pop()}}}));

System.register("chunks:///_virtual/Settings.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,s,i,h,o,c;return{setters:[function(t){e=t.inheritsLoose},function(t){s=t.cclegacy,i=t._decorator,h=t.Toggle,o=t.Label,c=t.Component}],execute:function(){var r;s._RF.push({},"3d37d0/me1Hp5xczPSXCHrJ","Settings",void 0);var n=i.ccclass;i.property,t("Settings",n("Settings")(r=function(t){function s(){for(var e,s=arguments.length,i=new Array(s),h=0;h<s;h++)i[h]=arguments[h];return(e=t.call.apply(t,[this].concat(i))||this).checkList=[],e.checkListColor=[],e.easy=void 0,e.hard=void 0,e.red=void 0,e.green=void 0,e.flag=void 0,e.color=void 0,e}e(s,t);var i=s.prototype;return i.start=function(){this.flag=this.node.parent.parent.getChildByName("Mode"),this.color=this.node.parent.parent.getChildByName("Color"),this.easy=this.node.getChildByName("EasyMode").getComponent(h),this.hard=this.node.getChildByName("HardMode").getComponent(h),this.red=this.node.getChildByName("RedMode").getComponent(h),this.green=this.node.getChildByName("GreenMode").getComponent(h),"0"==this.flag.getComponent(o).string?(this.easy.isChecked=!0,this.hard.isChecked=!1,this.checkList.push(!0),this.checkList.push(!1)):(this.easy.isChecked=!1,this.hard.isChecked=!0,this.checkList.push(!1),this.checkList.push(!0)),"0"==this.color.getComponent(o).string?(this.red.isChecked=!0,this.green.isChecked=!1,this.checkListColor.push(!0),this.checkListColor.push(!1)):(this.red.isChecked=!1,this.green.isChecked=!0,this.checkListColor.push(!1),this.checkListColor.push(!0)),this.node.active=!1},i.update=function(t){this.hard.isChecked!=this.checkList[1]&&(this.checkList[0]?(this.easy.isChecked=!1,this.checkList[0]=!1,this.checkList[1]=!0,this.flag.getComponent(o).string="1"):(this.easy.isChecked=!0,this.checkList[0]=!0,this.checkList[1]=!1,this.flag.getComponent(o).string="0")),this.easy.isChecked!=this.checkList[0]&&(this.checkList[1]?(this.hard.isChecked=!1,this.checkList[0]=!0,this.checkList[1]=!1,this.flag.getComponent(o).string="0"):(this.hard.isChecked=!0,this.checkList[0]=!1,this.checkList[1]=!0,this.flag.getComponent(o).string="1")),this.green.isChecked!=this.checkListColor[1]&&(this.checkListColor[0]?(this.red.isChecked=!1,this.checkListColor[0]=!1,this.checkListColor[1]=!0,this.color.getComponent(o).string="1"):(this.red.isChecked=!0,this.checkListColor[0]=!0,this.checkListColor[1]=!1,this.color.getComponent(o).string="0")),this.red.isChecked!=this.checkListColor[0]&&(this.checkListColor[1]?(this.green.isChecked=!1,this.checkListColor[0]=!0,this.checkListColor[1]=!1,this.color.getComponent(o).string="0"):(this.green.isChecked=!0,this.checkListColor[0]=!1,this.checkListColor[1]=!0,this.color.getComponent(o).string="1"))},s}(c))||r);s._RF.pop()}}}));

System.register("chunks:///_virtual/SettingsButton.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,o,i,r;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,i=t.NodeEventType,r=t.Component}],execute:function(){var s;n._RF.push({},"e7eb7z/MdROtqkxu0m3xtme","SettingsButton",void 0);var a=o.ccclass;o.property,t("SettingsButton",a("SettingsButton")(s=function(t){function n(){for(var e,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))||this).board=void 0,e}e(n,t);var o=n.prototype;return o.start=function(){this.board=this.node.parent.getChildByName("SettingsBoard"),this.node.on(i.TOUCH_END,this.settingsUp,this)},o.settingsUp=function(){this.board.active?this.board.active=!1:this.board.active=!0},o.update=function(t){},n}(r))||s);n._RF.pop()}}}));

System.register("chunks:///_virtual/Sfx.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,n,r,o,s,c,u,a;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){o=t.cclegacy,s=t._decorator,c=t.AudioClip,u=t.AudioSource,a=t.Component}],execute:function(){var l,p,f,h,y,x;o._RF.push({},"b02beT3LXZPAIERZ3SOW253","Sfx",void 0);var d=s.ccclass,S=s.property;t("Sfx",(l=d("Sfx"),p=S({type:[c]}),l(((x=function(t){function e(){for(var e,i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return e=t.call.apply(t,[this].concat(o))||this,n(e,"listsfx",y,r(e)),e.source=void 0,e}i(e,t);var o=e.prototype;return o.start=function(){e.Instance=this,this.source=this.getComponent(u)},o.playSfx=function(t){t<0||t>=this.listsfx.length||this.source.playOneShot(this.listsfx[t])},o.update=function(t){},e}(a)).Instance=null,y=e((h=x).prototype,"listsfx",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),f=h))||f));o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});