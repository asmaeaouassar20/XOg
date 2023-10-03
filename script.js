var btnRed=document.getElementById('btnRed')
    btnGreen=document.getElementById('btnGreen');

var divTotalRed=document.getElementById('divTotalRed'),
    divTotalGreen=document.getElementById('divTotalGreen');


var title=document.getElementById('title');

var x=document.getElementById('x'),
    o=document.getElementById('o');

var addpoints=document.getElementById('addpoints');

var body=document.getElementById('body');

// ----------------------------------
addpoints.innerHTML='';//espace dédié à montrer le point ajouté pour le gagneur (rouge/vert)


// ---------------------------


 //les fonctions qui permettent d'afficher le total des points pour chaque joueurs
function displayREDtotal(){
    divTotalRed.style.display='block';
    btnRed.style.display='none'
}

function displayGREENtotal(){
    divTotalGreen.style.display='block';
    btnGreen.style.display='none';
}


var T=[];


var turn='x'; // par défaut, le tour est le tour de x

//la fonction qui permet de cocher les cases
function play(id,i){
    var caseClick=document.getElementById(id);
    if(turn=='x' && caseClick.innerHTML==''){
        caseClick.innerHTML='x';
        caseClick.style.color='rgb(189, 16, 16)';
        turn='o';
    }
    if(turn=='o' && caseClick.innerHTML==''){
        caseClick.innerHTML='o';
        caseClick.style.color='rgb(6, 133, 6)';
        turn='x';
    }
    T[i-1]=caseClick.innerHTML;
    winner();
}

//-----------------------------------------





var tabPoints=[0,0];




//-------------------------------------------


function winner(){
    var winner='';
    if(T[0]==T[1] && T[1]==T[2] && T[0]!=undefined){
        winner=T[0];
    }
    if(T[2]==T[5] && T[5]==T[8] && T[2]!=undefined){

        winner=T[2];

    }
    if(T[8]==T[7] && T[7]==T[6] && T[8]!=undefined){
        winner=T[8];
    }
    if(T[6]==T[3] && T[3]==T[0] && T[6]!=undefined){
        winner=T[6];

    }
    if(T[1]==T[4] && T[4]==T[7] && T[1]!=undefined){
        winner=T[1];

    }
    if(T[3]==T[4] && T[4]==T[5] && T[3]!=undefined){
        winner=T[3];
    }
    if(T[0]==T[4] && T[4]==T[8] && T[0]!=undefined){
        winner=T[0];
    }
    if(T[2]==T[4] && T[4]==T[6] && T[2]!=undefined){
        winner=T[2];
    }
    var t;
    if(winner==='x'){
        t=setInterval(function(){
            addpoints.innerHTML='+1';
            addpoints.style.color='#f00';
            body.style.backgroundColor= "rgb(255, 210, 210)";
        },20);
        setTimeout(function(){
            clearInterval(t);
            addpoints.innerHTML='';
            body.style.backgroundColor= "#2b2b2a53";
        },1000);
        tabPoints[0]+=1;
        divTotalRed.innerHTML=tabPoints[0];
    }
    if(winner==='o'){
        t= setInterval(()=>{
            addpoints.innerHTML='+1';
            addpoints.style.color='rgb(20, 141, 20)';
            body.style.backgroundColor='#d4fcd4';
        },20);
        setTimeout(()=>{
            clearInterval(t);
            addpoints.innerHTML='';
            body.style.backgroundColor= "#2b2b2a53";
        },1000);
        tabPoints[1]+=1;
        divTotalGreen.innerHTML=tabPoints[1];
    }
    localStorage.setItem('T',JSON.stringify(tabPoints));
}



function restartfct(){
    divTotalGreen.innerHTML='';
    divTotalRed.innerHTML='';
    document.getElementById('d1').innerHTML='';
    document.getElementById('d2').innerHTML='';
    document.getElementById('d3').innerHTML='';
    document.getElementById('d4').innerHTML='';
    document.getElementById('d5').innerHTML='';
    document.getElementById('d6').innerHTML='';
    document.getElementById('d7').innerHTML='';
    document.getElementById('d8').innerHTML='';
    document.getElementById('d9').innerHTML='';
}