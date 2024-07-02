var image1=document.querySelector("#img1 img");
var image2=document.querySelector("#imge2 img");
var image3=document.querySelector("#img3 img");
var image4=document.querySelector("#img4 img");
var btn=document.querySelector("#main #blue");
var btn1=document.querySelector("#main #red");
var flag1=true;
btn.addEventListener("click",function(){
         if(flag1==true){
          btn.style.scale=(1.2);
          var temp=image1.src;
         image1.src=image2.src;
         image2.src=temp;

        var temp1=image3.src;
        image3.src=image4.src;
        image4.src=temp1;
         flag1=false;
         }
        else
        btn.style.scale=(1);
         flag1=true;
})
var flag=true;
btn1.addEventListener("click",function(){
   btn1.style.scale=(1.2);
      if(flag==true){
         image1.style.filter="grayscale(1)";
         image2.style.filter="grayscale(1)";
         image3.style.filter="grayscale(1)";
         image4.style.filter="grayscale(1)";
         flag=false;
      }
      else{
         btn1.style.scale=(1);
        image1.style.filter="grayscale(0)";
         image2.style.filter="grayscale(0)";
         image3.style.filter="grayscale(0)";
         image4.style.filter="grayscale(0)";
         flag=true;
      }
})




