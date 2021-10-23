
var user_turn="X"
const gameWrapper=document.getElementById("gameWrapper");


document.getElementById("b1").addEventListener("mousedown",turn);
document.getElementById("b1").addEventListener("mouseup",checkwinner);
document.getElementById("b2").addEventListener("mousedown",turn);
document.getElementById("b2").addEventListener("mouseup",checkwinner);
document.getElementById("b3").addEventListener("mousedown",turn);
document.getElementById("b3").addEventListener("mouseup",checkwinner);
document.getElementById("b4").addEventListener("mousedown",turn);
document.getElementById("b4").addEventListener("mouseup",checkwinner);
document.getElementById("b5").addEventListener("mousedown",turn);
document.getElementById("b5").addEventListener("mouseup",checkwinner);
document.getElementById("b6").addEventListener("mousedown",turn);
document.getElementById("b6").addEventListener("mouseup",checkwinner);
document.getElementById("b7").addEventListener("mousedown",turn);
document.getElementById("b7").addEventListener("mouseup",checkwinner);
document.getElementById("b8").addEventListener("mousedown",turn);
document.getElementById("b8").addEventListener("mouseup",checkwinner);
document.getElementById("b9").addEventListener("mousedown",turn);
document.getElementById("b9").addEventListener("mouseup",checkwinner);

document.getElementById("button_id").addEventListener("click",reset_game);



function turn(e){        
    if(user_turn==="X"){
        document.getElementById(e.target.id).value="X";
        //document.getElementById(e.target.id).disabled = true;  //this will disable the button        
        user_turn="O";        
    }
    else if(user_turn==="O"){        
        document.getElementById(e.target.id).value="O";
        //document.getElementById(e.target.id).disabled = true; //this will disable the button                
        user_turn="X";        
    }
    //checkwinner();
}

function checkwinner(e){    
    document.getElementById(e.target.id).disabled = true; //this will disable the button                

    let b1=document.getElementById("b1").value
    let b2=document.getElementById("b2").value
    let b3=document.getElementById("b3").value
    let b4=document.getElementById("b4").value
    let b5=document.getElementById("b5").value
    let b6=document.getElementById("b6").value
    let b7=document.getElementById("b7").value
    let b8=document.getElementById("b8").value
    let b9=document.getElementById("b9").value
    if (b1){
        if ((b1===b4)&&(b1==b7)){
            window.alert('Player '+ document.getElementById("b1").value +' won');
            disable_all();
            return 1;
        }
        if ((b1===b5)&&(b1==b9)){
            window.alert('Player '+ document.getElementById("b1").value +' won');
            disable_all();
            return 1;
        }
        if ((b1===b2)&&(b1==b3)){
            window.alert('Player '+ document.getElementById("b1").value +' won');
            disable_all();
            return 1;
        }
    }
    if (b2){
        if ((b2===b5)&&(b2==b8)){
            window.alert('Player '+ document.getElementById("b2").value +' won');
            disable_all();
            return 1;
        }
        if ((b2===b5)&&(b2==b8)){
            window.alert('Player '+ document.getElementById("b2").value +' won');
            disable_all();
            return 1;
        }
    }
    if (b3){
        if ((b3===b5)&&(b3==b7)){
            window.alert('Player '+ document.getElementById("b3").value +' won');
            disable_all();
            return 1;
        }
        if ((b3===b6)&&(b3==b9)){
            window.alert('Player '+ document.getElementById("b3").value +' won');
            disable_all();
            return 1;
        }
    }
    if (b6){
        if ((b6===b5)&&(b6==b4)){
            window.alert('Player '+ document.getElementById("b6").value +' won');
            disable_all();
            return 1;
        }
        else{
            if(b1&&b2&&b3&&b4&&b5&&b6&&b7&&b8&&b9){
                window.alert("CATS GAME");
            }
        }
    }    



} 

function disable_all(){
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
}


function reset_game(){
    //location.reload()
    console.log("reset game")
    document.getElementById("b1").disabled = false;
    document.getElementById("b2").disabled = false;
    document.getElementById("b3").disabled = false;
    document.getElementById("b4").disabled = false;
    document.getElementById("b5").disabled = false;
    document.getElementById("b6").disabled = false;
    document.getElementById("b7").disabled = false;
    document.getElementById("b8").disabled = false;
    document.getElementById("b9").disabled = false;

    document.getElementById('b1').value = "";
    document.getElementById("b2").value = "";
    document.getElementById("b3").value = "";
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = '';

    /* console.log(document.getElementById('b1'))
    console.log(document.getElementById('b2')) */
 
}