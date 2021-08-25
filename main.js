var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
     block_Img_Object = Img;

     block_Img_Object.scaleToWidth(700);
     block_Img_Object.scaleToHeight(510);
     block_Img_Object.set({
     top:0,
     left:0
     });
     canvas.add(block_Img_Object);
    });
    	
}

function playSound(){
	x.play();
}
