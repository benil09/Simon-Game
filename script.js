let gameSeq=[];
let userSeq=[];

let btns=["red","yellow","green","purple"];




let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }
   
});


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },100);


}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },100);


}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor((Math.random()*3 )+1);
    let randclr=btns[randIdx];
    let randbtn=document.querySelector(`.${randclr}` );
     gameSeq.push(randclr);
     console.log(gameSeq);
    btnFlash(randbtn);
}

function check(idx){
    // console.log("current level:",level);

    
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your Score was<b> ${level}</b> <br>Press any key to start`;

        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="#121212";

        },50)
        reset();
    }
}


function btnpress(){

   let btn=this;
   userFlash(btn);

   userClr=btn.getAttribute("id");
   userSeq.push(userClr);
   

   check(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}

function reset(){

    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
    
}

