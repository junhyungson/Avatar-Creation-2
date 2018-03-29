var prevDiv = document.getElementById("preview"),
    bgcolor = document.getElementById("bgcolor"),
    b1 = document.getElementById("button1"),
    b2 = document.getElementById("button2"),
    b3 = document.getElementById("button3"),
    b4 = document.getElementById("button4"),
    r1 = document.getElementById("range1"),
    r2 = document.getElementById("range2"),
    r3 = document.getElementById("range3"), 
    r4 = document.getElementById("range4"), 
    hair1 = document.getElementById("hair"),
    eyes1 = document.getElementById("eyes"),
    nose1 = document.getElementById("nose"),
    mouth1 = document.getElementById("mouth"),
	
    h1 = 0,
    e1 = 0,
    ImgSrc = null;

bgcolor.addEventListener("change", function(){
    prevDiv.style.backgroundColor = this.value;
});

b1.addEventListener("click", function(){
    r1.type = "number";
    r2.type = "number";
    r3.type = "number";
    r4.type = "number";
    b1.style.width = b1.value+"%";
});

b2.addEventListener("click", function(){
    r1.type = "range";
    r2.type = "range";
    r3.type = "range";
    r4.type = "range";
    b2.style.width = b2.value +"%";
    
});

r1.addEventListener("change", function(){
    
    hair1.style.width = r1.value+"%";
    
});

r2.addEventListener("change", function(){
    
    eyes1.style.width = r2.value +"%";
});

r3.addEventListener("change", function(){
    nose1.style.width = r3.value + "%";
});

r4.addEventListener("change", function(){
    mouth1.style.width = r4.value + "%";
});

prevDiv.addEventListener("click", function(){
    hair1.style.backgroundImage = "imgs/hair2.png";
});

var hhair1 = 1;
hair1.addEventListener("click", function(){
    hair1.src = "img/hair"+hhair1+".png";
        if(hhair1 >=3){
            hhair1 =0;
        }
        hhair1++;               
});

var eeyes = 1;
eyes1.addEventListener("click", function(){
	eyes1.src = "img/eyes"+eeyes+".png";
		if(eeyes >=3){
			eeyes =0;
		}
		eeyes ++;
});

var mnose = 1;
nose1.addEventListener("click", function(){
	nose1.src = "img/nose"+mnose+".png";
		if(mnose >= 3){
			mnose = 0;
		}
		mnose ++;
});

var mmouth = 1;
mouth1.addEventListener("click", function(){
	mouth1.src = "img/mouth"+mmouth+".png";
		if(mmouth >= 3){
			mmouth = 0;
		}
		mmouth ++;
});

b4.addEventListener("click", function(){
	var newPrev = document.createElement("div"),
		newbody = document.createElement("div"),
	    newImg = document.createElement("img");
		
		newPrev.appendChild(newImg);
		
});
