/*var a;
var b;
function forX(){

}
function forO(){

}*/
var x = new Array(9);

function zero() {
    var id = Math.floor(Math.random() * 9);
    if(x[id])
    {zero();}
    else{
        if(x[0]=='hero' && x[1]=='hero'){move(2,'zero');}
        if(x[0]=='hero' && x[3]=='hero'){move(6,'zero');}
        if(x[0]=='hero' && x[4]=='hero'){move(8,'zero');}
        if(x[2]=='hero' && x[1]=='hero'){move(0,'zero');}
        if(x[3]=='hero' && x[6]=='hero'){move(0,'zero');}
        if(x[8]=='hero' && x[5]=='hero'){move(0,'zero');}
        if(x[3]=='hero' && x[4]=='hero'){move(5,'zero');}
        if(x[4]=='hero' && x[5]=='hero'){move(3,'zero');}
        if(x[5]=='hero' && x[3]=='hero'){move(4,'zero');}
        if(x[0]=='hero' && x[6]=='hero'){move(3,'zero');}
        if(x[4]=='hero' && x[1]=='hero'){move(7,'zero');}
        if(x[2]=='hero' && x[5]=='hero'){move(8,'zero');}
        if(x[6]=='hero' && x[7]=='hero'){move(8,'zero');}
        if(x[6]=='hero' && x[4]=='hero'){move(2,'zero');}
        else{
            {move(id,'zero');}
        }
    }
}

function checkHero() {
    if (x[0]=='hero' && x[1]=='hero' && x[2]=='hero') return true;
    if (x[3]=='hero' && x[4]=='hero' && x[5]=='hero') return true;
    if (x[6]=='hero' && x[7]=='hero' && x[8]=='hero') return true;
    if (x[0]=='hero' && x[3]=='hero' && x[6]=='hero') return true;
    if (x[1]=='hero' && x[4]=='hero' && x[7]=='hero') return true;
    if (x[2]=='hero' && x[5]=='hero' && x[8]=='hero') return true;
    if (x[0]=='hero' && x[4]=='hero' && x[8]=='hero') return true;
    if (x[2]=='hero' && x[4]=='hero' && x[6]=='hero') return true;
    else {return false;}
    //if (x[0] && x[1] && x[2] && x[3] && x[4] && x[5] && x[6] && x[7] && x[8] ) return true;
}
function checkZero() {
    if (x[0]=='zero' && x[1]=='zero' && x[2]=='zero') return true;
    if (x[3]=='zero' && x[4]=='zero' && x[5]=='zero') return true;
    if (x[6]=='zero' && x[7]=='zero' && x[8]=='zero') return true;
    if (x[0]=='zero' && x[3]=='zero' && x[6]=='zero') return true;
    if (x[1]=='zero' && x[4]=='zero' && x[7]=='zero') return true;
    if (x[2]=='zero' && x[5]=='zero' && x[8]=='zero') return true;
    if (x[0]=='zero' && x[4]=='zero' && x[8]=='zero') return true;
    if (x[2]=='zero' && x[4]=='zero' && x[6]=='zero') return true;
    else{ return false;}
    //if (x[0] && x[1] && x[2] && x[3] && x[4] && x[5] && x[6] && x[7] && x[8] ) return true;
}
/*function non(){
    if (x[0]=='hero' && x[1]=='zero' && x[2]=='hero' && x[4]=='zero' && x[5]=='hero' && x[6]=='hero' && x[0]=='hero' && x[1]=='zero' && x[2]=='hero') return true;
    if (x[3]=='zero' && x[4]=='zero' && x[5]=='zero') return true;
    if (x[6]=='zero' && x[7]=='zero' && x[8]=='zero') return true;
    if (x[0]=='zero' && x[3]=='zero' && x[6]=='zero') return true;
    if (x[1]=='zero' && x[4]=='zero' && x[7]=='zero') return true;
    if (x[2]=='zero' && x[5]=='zero' && x[8]=='zero') return true;
    if (x[0]=='zero' && x[4]=='zero' && x[8]=='zero') return true;
    if (x[2]=='zero' && x[4]=='zero' && x[6]=='zero') return true;
}*/
function move(id, role) {
    if(x[id]){ return false;}
    x[id] = role;
    document.getElementById(id).className = 'cell ' + role;
    
    if(!checkHero()===true){
        if(role=='hero'){
            zero();
        }
        else{
            null;
        }
    }
    else{
        reset();
    }
    if(checkZero()===true){
        res();
    }
    
    /*if(checkZero()===false && checkHero()===false){
        if(x.indexOf(8)!==null)   {
            alert("none");
            location.reload();
        }
    }*/
}

function reset() {
    alert('WIN HERO');
    location.reload();
}
function res() {
    alert('WIN ZERO');
    location.reload();
}
/*function clear(){
    alert("clear");
    location.reload();
}*/