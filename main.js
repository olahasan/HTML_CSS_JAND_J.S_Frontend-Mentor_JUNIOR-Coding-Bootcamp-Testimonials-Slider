let prev = document.getElementById("prev");
let next = document.getElementById("next");
let mainpic = document.getElementById("mainpic");
let info = document.getElementById("info");
let name = document.getElementById("name");
let jop = document.getElementById("jop");
// console.log(prev);
// console.log(next);
// console.log(mainpic);
// console.log(info);
// console.log(name);
// console.log(jop);


// pic
let i = 0;
let slideImage = ["images/image-tanya.jpg", "images/image-john.jpg"];


// p
let p = 0;

let ps = [`“ I’ve been interested in coding for a while but never taken the jump, until now. 
I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
excited about the future. ”`, `“ If you want to lay the best foundation possible I’d recommend taking this course. 
The depth the instructors go into is incredible. I now feel so confident about 
starting up as a professional developer. ”` ];


// name
let n = 0;
let slideName = ["Tanya Sinclair", "John Tarkpor"];


// jop
let j = 0;
let slideJop = ["UX Engineer", "Junior Front-end Developer"];




mainpic.src = slideImage[0]
info.innerHTML = ps[0];
name.innerHTML = slideName[0];
jop.innerHTML = slideJop[0];

next.onclick = function(){
    i++;
    p++;
    n++;
    j++;

    if(i > slideImage.length -1){
       i= slideImage.length -1;
    }
    mainpic.src = slideImage[i]

    if(p > ps.length -1){
        p= ps.length -1;
     }
     info.innerHTML = ps[p];
    

     if(n > slideName.length -1){
        n= slideName.length -1;
     }
     name.innerHTML = slideName[n];


     if(j > slideName.length -1){
        j= slideName.length -1;
     }
     jop.innerHTML = slideJop[j];

}


prev.onclick = function(){

    i--;
    p--;
    n--;
    j--;
    if(i < 0){
        i= 0;
    }
    mainpic.src = slideImage[i]


    if(p < 0){
        p= 0;
    }
    info.innerHTML = ps[p];


    if(n < 0){
        n= 0;
    }
    name.innerHTML = slideName[n];


    if(j < 0){
        j= 0;
    }
    jop.innerHTML = slideJop[j];
    

}