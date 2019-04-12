<template>
  <div class="design">
      <!-- 左侧菜单 用来上传图片svg 或文字-->
	<div class="sidebar-upload">	
		
		<ul class="add-element">
			<li class="add-text">
				<p>文字</p>
			</li>
			<li class="add-img">
				<p>图片</p>
				<input type="file" class="add-img-input" accept="image/png,image/jpeg,image/gif">
			</li>
		
		</ul>
	</div>
    <!-- 最重要的内容编辑框 -->
    <div class="content-main-upload">
		<div class="mains-wrapper">
			<div class="TextEditingBox" v-if="transformerstyle.display === 'block' && transformerstyle.type === 'textArray' ">
				文字编辑框{{transformerstyle.index}}
				<div class="copypictures" @click="copypictures">复制</div>
				<div class="copypictures" @click="Hierarchicalmobility('text','max')">置顶</div>
				<div class="copypictures" @click="Hierarchicalmobility('text','min')">置低</div>
				<div class="copypictures" @click="Hierarchicalmobility('text','up')">上移一层</div>
				<div class="copypictures" @click="Hierarchicalmobility('text','down')">下移一层</div>
				<div class="copypictures" @click="removes">删除</div>
				<div class="copypictures" @click="fixed">固定</div>
				<div @click="changtext('fontWeight')">加粗</div>
				<div @click="changtext('fontStyle')">斜体</div>
				<div @click="ledgerline('underline')">下划线</div>
				<div @click="ledgerline('line-through')">删除线</div>
				<div @click="align"></div>
			</div>
			<div class="PhotoEditingBox" v-if="transformerstyle.display === 'block'  && transformerstyle.type === 'pictureArr'">
				图片编辑框{{transformerstyle.index}}
				<div class="replacepictures">
					替换图片
					<input type="file" @change="addImg($event,'replace')"  accept="image/png,image/jpeg,image/gif" >
				</div>
				<div class="block" style="width:80%;marginLeft:15px;">
					<span class="demonstration">透明度</span>
					<el-slider v-model="pictureArr[transformerstyle.index].opacityval" @change="opacitypic"></el-slider>
				</div>
				<div class="copypictures" @click="copypictures">复制</div>
				<div class="copypictures" @click="Hierarchicalmobility('pic','max')">置顶</div>
				<div class="copypictures" @click="Hierarchicalmobility('pic','min')">置低</div>
				<div class="copypictures" @click="Hierarchicalmobility('pic','up')">上移一层</div>
				<div class="copypictures" @click="Hierarchicalmobility('pic','down')">下移一层</div>
				<div class="copypictures" @click="removes">删除</div>
				<div class="copypictures" @click="fixed">固定</div>
			</div>
		</div>

		<!-- 画布 -->
		<div class="canvas-wrapper" >
			<div class="edit-canvas">
				<div class="side-front"  ref="father">
					<div  v-for="(item,index) in textArray" :key="JSON.stringify(item)"  @click="showtransformer($event,'text',index)" @blur="blues($event,index)"  @input="changeText($event,index)"  :style="item.style"  class="edit-elem edit-text default-text" contenteditable="true">
						 <div v-html="item.text"></div>
					</div>
					<div v-for="(item,index) in pictureArr" :key="JSON.stringify(item)" @click="showtransformer($event,'picture',index)"   :style="item.style" class="edit-elem edit-image default-image"></div>
				</div>
			</div>
			
	
	
	
			
		
			<!-- 变换框 -->
			<div class="edit-transformer" ref="transformsdiv" @mousedown.stop="Dragging" :style="transformerstyle">
				<div class="move" @mousedown.stop>
				    移
				</div>
				<div class="rotate" @mousedown.stop="rotatediv" >
					<!-- <i class="fa fa-repeat"></i> -->转
				</div>
				<div class="scale" @mousedown.stop="zooms">
					<!-- <i class="fa fa-arrows-alt"></i> -->缩
				</div>
				<div class="cancel" @mousedown.stop @click="transformerdisnone">
					<!-- <i class="fa fa-close"></i> -->删
				</div>

			</div>
		
		
		</div>
		
	</div>


  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'design',
  data () {
    return {
        transformerstyle:{
			display:"none",
			transform:"",
            top:"",
            left:"",
            width:"",
            height:"",
			type:'',
			index:0
		},
		textArray:[{
			style:{
				zIndex:1
			},
			portability:true,
			opacityval:100,
			text:"aaa"
		}],
        pictureArr:[{
			style:{
				zIndex:2,
				backgroundImage:'url('+require('../assets/index/p1.png')+')',
				opacity:1
			},
			portability:true,
			opacityval:100
		}]
    }
  },
  methods:{
		align(){  //改变对其方式
			var index = this.transformerstyle.index
			var arr = this.textArray[index]
			var align = arr[index].style.textAlign?arr[index].style.textAlign:"left"
			
		},
		changtext(style){  //改变文字
			var index = this.transformerstyle.index
			var arr = this.textArray[index]
			var styleValue = style == "fontWeight"?{
				active:"bold",
				noactive:"none"
			}:{
				active:"italic",
				noactive:"normal"
			}
			var bold = arr.style[style]?arr.style[style]:styleValue.noactive
			var mbold = bold == styleValue.active?styleValue.noactive:styleValue.active
			arr.style[style] = mbold
			Vue.set(this.textArray,index,arr);
		},
		ledgerline(str){
				var index = this.transformerstyle.index
				var arr = this.textArray[index]
				arr.style.textDecoration = str
				Vue.set(this.textArray,index,arr);
		},
		fixed(){  //固定图片
			var index = this.transformerstyle.index
			var arr = this[this.transformerstyle.type]
			arr[index].portability = 	arr[index].portability?false:true
			this[this.transformerstyle.type] = arr
		
		},
		Hierarchicalmobility(str,direction){  //层级移动
					var len = this.textArray.length + this.pictureArr.length
					var mergedarr = this.textArray.concat(this.pictureArr)
					var str1 = str == 'text'?"pictureArr":"textArray"
					var index = this.transformerstyle.index
					str = str == 'text'?"textArray":"pictureArr"
					if(direction == "up"){
						if(this[str][index].style.zIndex === len){
							alert("已经是最上层了")
							return
						}
						this.transposition(str,str1,this[str][index].style.zIndex+1)   
					}
					if(direction == "down"){
						 if(this[str][index].style.zIndex === 1){
							alert("已经是最下层了")
							return
						}
						this.transposition(str,str1,this[str][index].style.zIndex-1)  
					}
					if(direction == "max"){
						 if(this[str][index].style.zIndex === len){
							alert("已经是最上层了")
							return
						}
						this.transposition(str,str1,len)   
					}
						if(direction == "min"){
						 if(this[str][index].style.zIndex === 1){
							alert("已经是最下层了")
							return
						}
						this.transposition(str,str1,1)   
					}
		},
		transposition(str,str1,Hierarchy){ //换位函数 要换到的层级
				var arr,arr1
				var index = this.transformerstyle.index
				arr = this[str]
				arr1 = this[str1]
				if(this[str][index].style.zIndex<Hierarchy){
						arr1.forEach(item => {
							if(item.style.zIndex > arr[index].style.zIndex && item.style.zIndex <= Hierarchy){
								item.style.zIndex = item.style.zIndex-1 
							}
							
						});
						arr.forEach(item => {
							if(item.style.zIndex > arr[index].style.zIndex && item.style.zIndex <= Hierarchy){
								item.style.zIndex = item.style.zIndex-1 
							}	
						})
				}
				if(this[str][index].style.zIndex>Hierarchy){
						arr1.forEach(item => {
							if(item.style.zIndex < arr[index].style.zIndex && item.style.zIndex >= Hierarchy){
								item.style.zIndex = item.style.zIndex+1
							}
							
						});
						arr.forEach(item => {
							if(item.style.zIndex < arr[index].style.zIndex && item.style.zIndex >= Hierarchy){
								item.style.zIndex = item.style.zIndex+1
							}	
						})
				}
			arr[index].style.zIndex = Hierarchy
			this.transformerstyle.zIndex = Hierarchy+1
			this[str] = arr
			this[str1] = arr1
		},
		removes(){ //删除
		this[this.transformerstyle.type].splice(this.transformerstyle.index,1)
		this.transformerstyle.display = "none"
	  },
	 opacitypic(e){  //图片透明度改变
				var arr = this.pictureArr
				arr[this.transformerstyle.index].opacityval= e
			   arr[this.transformerstyle.index].style.opacity = e/100 
			  

			   this.pictureArr = arr
	 },
	 copypictures(){  //复制
		var arr  = this[this.transformerstyle.type][this.transformerstyle.index]
		arr = JSON.stringify(arr)
		var obj = JSON.parse(arr)
	 	var len = this.textArray.length + this.pictureArr.length
		obj.style.zIndex = len + 1
		this.transformerstyle.index = this[this.transformerstyle.type].length
		console.log(this.transformerstyle.index)
		this.transformerstyle.zIndex = obj.style.zIndex +1
		this.transformerstyle.left = parseFloat(this.transformerstyle.left)+parseFloat(this.transformerstyle.width)+20+"px"
		obj.style.left = this.transformerstyle.left 
		obj.portability= true
		this[this.transformerstyle.type].push(obj)
	 },
	  addImg(e,str){  //替换或增加图片
		  var file = e.target.files;
		  if(file.length>1){
			  alert("只能上传一张哦")
			  return false
		  }
		var reader = new FileReader();
		var self = this
		reader.readAsDataURL(file[0]);
		 reader.onloadend = function () {
            // 图片的 base64 格式, 可以直接当成 img 的 src 属性值        
		   var dataURL = reader.result;//base64
           if(str == 'replace'){
			   var arr = self.pictureArr
			   arr[self.transformerstyle.index].style.backgroundImage ='url('+dataURL+')' 
			   self.pictureArr = arr
		  }
      	};
		  
	  },
	  showtransformer(e,type,index){  //出现外围的操作框  type为类型 index为第几个
          var w = e.currentTarget.clientWidth
		  var h = e.currentTarget.clientHeight
          var top = e.currentTarget.offsetTop
		  var left = e.currentTarget.offsetLeft
		  var types =  type === "picture"?"pictureArr":"textArray"
          this.transformerstyle = {
			  	zIndex:this[types][index].style.zIndex?this[types][index].style.zIndex+1:9999,
				display:"block",
				transform:this[types][index].style.transform?this[types][index].style.transform:"",
                top:top+"px",
                left:left+"px",
                width:w+"px",
                height:h+"px",
                type:types,
                index:index
		  }
		  document.addEventListener("keydown",this.keyboard)
		  
		  
	  },
	  keyboard(e){
		  let arr = this[this.transformerstyle.type]
			  switch(e.keyCode){
					case 38 :
						this.transformerstyle.top  = arr[this.transformerstyle.index].style.top = parseFloat(this.transformerstyle.top)- 1 + 'px';	
						break;
					case 39 :
						this.transformerstyle.left = arr[this.transformerstyle.index].style.left = parseFloat(this.transformerstyle.left) + 1 + 'px';
						break;
					case 40 :
						this.transformerstyle.top =arr[this.transformerstyle.index].style.top = parseFloat(this.transformerstyle.top)+ 1 + 'px';
						break;
					case 37 :
						this.transformerstyle.left = arr[this.transformerstyle.index].style.left = parseFloat(this.transformerstyle.left)- 1 + 'px';
						break;
				}
				this[this.transformerstyle.type] = arr 
	  },
    Dragging(e){   //拖拽操作
				if(!this[this.transformerstyle.type][this.transformerstyle.index].portability){
					return
				}
        let disX = e.clientX - e.target.offsetLeft;
        let disY = e.clientY - e.target.offsetTop;
        var self = this
        document.onmousemove = function (e){
            let l = e.clientX - disX;
            let t = e.clientY - disY;
            self.transformerstyle.top = t+"px"
            self.transformerstyle.left = l+"px"
			let arr = self[self.transformerstyle.type]
            arr[self.transformerstyle.index].style.top = t+'px'
			arr[self.transformerstyle.index].style.left = l+"px"
            self[self.transformerstyle.type] = arr  
        }
        
           //移动当前元素 
        
        document.onmouseup = function (e) {
            document.onmousemove = null;
            document.onmouseup = null;
        };
    },
    transformerdisnone(){   //隐去操作框
        this.transformerstyle.display = "none"
	},
	rotatediv(e){     //旋转操作
			var	selectedElemRect = this.$refs.transformsdiv.getBoundingClientRect();
			
			var centerX ,centerY,angleRotateControl,tMouseX,tMouseY,angle;
			var rotating = true;
		
				centerX = selectedElemRect.left + selectedElemRect.width / 2;
				centerY = selectedElemRect.top + selectedElemRect.height / 2;
				angleRotateControl = Math.atan((selectedElemRect.height / 2) / (selectedElemRect.width / 2)) * 180 / Math.PI;
			
			document.addEventListener('mouseup', (e)=> {
				rotating = false;
		
			});
			document.addEventListener('mousemove', (e)=> {
			if (rotating) {
				tMouseX = e.clientX - centerX;
				tMouseY = e.clientY - centerY;
				angle = Math.abs(Math.atan(tMouseY / tMouseX) * 180 / Math.PI);

				/**
				 *象限判断 从右上角开始 顺时针
				 */
				if (tMouseX >= 0 && tMouseY <= 0) {
					if (angle > angleRotateControl) {
						angle = 360 - (angle - angleRotateControl);
					} else if (angle <= angleRotateControl) {
						angle = angleRotateControl - angle;
					}
				}
				if (tMouseX >= 0 && tMouseY > 0) {
					angle = angle + angleRotateControl;
				}
				if (tMouseX <= 0 && tMouseY >= 0) {
					angle = 180 + angleRotateControl - angle;
				}
				if (tMouseX <= 0 && tMouseY < 0) {
					angle = 180 + angleRotateControl + angle;
				}
				
				this.transformerstyle.transform = 'rotate(' + angle + 'deg)'
				let arr = this[this.transformerstyle.type]
				arr[this.transformerstyle.index].style.transform = 'rotate(' + angle + 'deg)'
				
				this[this.transformerstyle.type] = arr 
			

			}
		});
	},
	zooms(e){  //缩放逻辑
				e.stopPropagation();
				  e.preventDefault();
				var  box = this.$refs.transformsdiv
				var self = this
				var pos = {
					'w': box.offsetWidth,
					'h': box.offsetHeight,
					'x': e.clientX,
					'y': e.clientY
				};
			  document.onmousemove = function (ev) {
            	ev.preventDefault();
				// 设置图片的最小缩放为30*30
				var w = Math.max(30, ev.clientX - pos.x + pos.w)
				var h = Math.max(30,ev.clientY - pos.y + pos.h)
				let arr = self[self.transformerstyle.type]
				arr[self.transformerstyle.index].style.width = w+"px"
				arr[self.transformerstyle.index].style.height = h+"px"
				self[self.transformerstyle.type] = arr  
            	self.transformerstyle.width = w+"px"
            	self.transformerstyle.height = h+"px"
          	}
          document.onmouseleave = function () {
            document.onmousemove=null;
            document.onmouseup=null;
          }
          document.onmouseup=function() {
            document.onmousemove=null;
            document.onmouseup=null;
          } 
	},
	changeText(e,index){  //改变文字内容
			document.removeEventListener("keydown",this.keyboard)
			var w = e.currentTarget.clientWidth
			var h = e.currentTarget.clientHeight
			let arr = this[this.transformerstyle.type]
			arr[this.transformerstyle.index].style.width = w+"px"
			arr[this.transformerstyle.index].style.height = h+"px"
			self[this.transformerstyle.type] = arr  
			this.transformerstyle.width = w+"px" //考虑优化
      this.transformerstyle.height = h+"px"

	},
	blues(e,index){        //失去焦点的时候
		document.addEventListener("keydown",this.keyboard)
		let arr = this.textArray
		arr[index].text = e.currentTarget.innerText
		this.textArray = arr  
		console.log(arr[index].text)
	}
  }
}
</script>
<style scoped>
.button-green{
	box-sizing: border-box;
	color: white;
	border: none;
	background-color: #04981a;
	border-radius: 4px;
	cursor: pointer;
}
.button-green:hover{
	background-color: #037714;
}
/*灰色空心按钮*/
.button-grey{
	box-sizing: border-box;
	color: #232323;
	border: 1px solid #e0e0e0;
	background-color: white;
	border-radius: 4px;
	cursor: pointer;
}
.button-grey:hover{
	background-color: #f8f8f8;
}
input[type = "file"]{
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
opacity: 0;
cursor: pointer;
}
/* 左侧菜单 用来上传图片svg 或文字 */
.sidebar-upload{
float: left;
position: absolute;
width: 70px;
min-height: 600px;
top: 0;
bottom: 0;

display: -webkit-box;

display: -ms-flexbox;

display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
    -ms-flex-direction: column;
        flex-direction: column;
background-color: #222222;
color: rgba(255,255,255,0.6);
font-size:16px;
text-align: center;

box-shadow: 0px 0px 15px rgba(0,0,0,0.6);
}
.add-element>li{
position: relative;
display: block;
width: 70px;
margin: 25px auto 50px;
cursor: pointer;
}
.add-element>li>p{
margin-top: 16px;
}
/* 最重要的编辑区域 框的样式*/
.content-main-upload,.content-main-user{
min-width: 800px;
min-height: 600px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
    -ms-flex-direction: column;
        flex-direction: column;
-webkit-box-pack: justify;
    -ms-flex-pack: justify;
        justify-content: space-between;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
position: absolute;
top: 0;
bottom: 0;
}
.content-main-upload{
width: calc(100% - 70px);
left: 70px;
}
/*edit-canvas样式*/
.canvas-wrapper{
	width: 740px; 
	height: 457px;
	margin-top:100px; 
	position: relative;
	border:1px solid #e0e0e0;
	box-shadow: 0px 0px 10px rgba(0,0,0,0.1);

}
.edit-canvas{
	position: relative;
	background-color: #fff;
	width: 100%;
	height: 100%;
	overflow: hidden;
	
}
.side-front, .side-back{
	position: absolute;
	width: 100%;
	height: 100%;
	background-color:#fff;
}
.side-back{
	display: none;
}
/* 默认图片默认字体 */
.edit-elem{
	position: absolute;
	overflow:hidden;
}
.default-text{
	font-size: 30px;
	position: absolute;

	left: 310px;
	top: 270px;
}
.default-image{
	
	background-repeat:no-repeat;  
	background-size: 100% 100%;
	width: 100px;
	height: 100px;
	left: 320px;
	top: 130px;
}
/*tooltip样式*/
.edit-toolbar>div[data-tooltip]:after{
	content: attr(data-tooltip);
	display: none;
	position: absolute;
	width: 60px;
	background-color: rgba(0, 0, 0, 0.8);
	border-radius: 4px;
	text-align: justify-all;
	padding: 2px 0;
	left: 50%;
	margin-left: -30px;
	top: -48px;
	color: white;
	font-size: 12px;
}
/*变换框样式*/
.edit-transformer, .align-active{
	/* display: none; */
	width: 100px;
	height: 100px;
	border: 1px solid;
	border-color: rgba(255,255,255,0.8);
	position: absolute;
	cursor: move;
}
.edit-transformer:before, .align-active:before{
	content: '';
	top: -1px;
	left: -1px;
	width: 100%;
	height: 100%;
	position: absolute;
	border: 1px dashed black;
}
.edit-transformer>div{
	width: 16px;
	height: 16px;
	background-color: white;
	position: absolute;
	border: 1px solid #232323;
	border-radius: 2px;
	font-size: 10px;
	text-align: center;
}
.edit-transformer>div>i{
	display: block;
	line-height: 16px;
}
.move{
	left: -8px;
	top: -8px;
	cursor: move;
}
.rotate{
	right: -8px;
	top: -8px;
	cursor: pointer;
}
.cancel{
	left: -8px;
	bottom: -8px;
	cursor: pointer;
}
.scale{
	right: -8px;
	bottom: -8px;
	cursor: se-resize
}


.mains-wrapper{
	width: 200px;
	height: 500px;
	position: absolute;
	top: 70px;
	right: 0px;
	border: 1px solid red;
}
.mains-wrapper>div{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
}
.replacepictures{
	width: 100px;
	height: 100px;
	position: relative;
}
.replacepictures input{
	width: 100%;
	height: 100%;
	display: block;
}
</style>