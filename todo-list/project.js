function goto_dashboard(){
    console.log("in console log")
    console.log(localStorage.getItem('activeuser'));
    //create the header
    const formsgoeshere=document.getElementById("forms_here");        
    formsgoeshere.style.display = "inherit";
    formsgoeshere.classList.add("header_list");    
    //formsgoeshere.classList="header_list";
    let h2_element=document.createElement("h2");
    h2_element.innerText="My To Do Lists";
    let input_element=document.createElement("input");
    input_element.setAttribute.type="text";
    input_element.id="myInput";
    //input_element.classList.add("Input_class");
    input_element.setAttribute.placeholder="Title...";
    let btn_element=document.createElement("span");
    btn_element.classList="addBtn";
    btn_element.innerText="Add";
    btn_element.addEventListener("click",new_list);
    //Create the unordered list <ul id="myUL">    
    let ul_element=document.createElement("ul");
    ul_element.id="UL_Lists";                
    //add the subelements to the header
    formsgoeshere.appendChild(h2_element);
    formsgoeshere.appendChild(input_element);
    formsgoeshere.appendChild(btn_element);        
    document.body.appendChild(ul_element);

    // Add a "checked" symbol when clicking on a list item
    let list_var = document.getElementById('UL_Lists');
    console.log(list_var);
    list_var.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);

    load_initial_elements_todo();

}

function load_initial_elements_todo(){
    //localStorage.getItem('listitem_'+localStorage.getItem('activeuser')+'_'+inputValue);
    // iterate localStorage
    console.log("loading initial elements, localstorage lenght:"+localStorage.length);
    for (let i = 0; i < localStorage.length; i++) {
        // set iteration key name
        var key = localStorage.key(i);
        // use key name to retrieve the corresponding value
        var value = localStorage.getItem(key);
        // console.log the iteration key and value   
        //console.log('Key: ' + key + ', Value: ' + value);    
        if(key==='listitem_'+localStorage.getItem('activeuser')+'_'+value){
           //console.log("inside the if:"+key+' '+'listitem_'+localStorage.getItem('activeuser')+'_'+value);            
            let li = document.createElement("li");            
            let t = document.createTextNode(value);
            li.appendChild(t);
            document.getElementById("UL_Lists").appendChild(li);
            
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            li.appendChild(span);
            //here we insert the function into every span x
            var close = document.getElementsByClassName("close");            
            for (let j = 0; j < close.length; j++) {                    
                close[j].onclick = function() {
                    var div = this.parentElement;        
                    document.getElementById("UL_Lists").removeChild(div);
                    //here we remove from the storage
                    console.log('listitem_'+localStorage.getItem('activeuser')+'_'+div.innerText.substring(0,div.innerText.length-1));
                    localStorage.removeItem('listitem_'+localStorage.getItem('activeuser')+'_'+div.innerText.substring(0,div.innerText.length-1));
                    div.style.display = "none";
                } 
            }  
        }
    }
}


function new_list(){
    console.log("In new list function");
    // Create a new list item when clicking on the "Add" button
    
    let inputValue = document.getElementById("myInput").value;
    
    if (inputValue === '') {
    //let's get out of here
      alert("You must write something!");
      return 1;
    } 


    let li = document.createElement("li");
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("UL_Lists").appendChild(li);

    
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    //here we save into the local storage
    localStorage.setItem('listitem_'+localStorage.getItem('activeuser')+'_'+inputValue,inputValue);

    //here we insert the function into every span x
    var close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;        
        document.getElementById("UL_Lists").removeChild(div);
        //let toremove=div.innerText.split('\n');
        //console.log(div.innerText.split('\n'));
        //console.log(toremove);
        //console.log(div.innerText.substring(0,div.innerText.length-1))
        //here we remove from the storage
        console.log('listitem_'+localStorage.getItem('activeuser')+'_'+div.innerText.substring(0,div.innerText.length-1));
        localStorage.removeItem('listitem_'+localStorage.getItem('activeuser')+'_'+div.innerText.substring(0,div.innerText.length-1));
        div.style.display = "none";
      }
    }
    
}



function create_form_login() {
    
    //console.log(localStorage.getItem('activeuser'));
    if(localStorage.getItem('activeuser')){
        window.alert("there is an active user:"+localStorage.getItem('activeuser')+".Logout first")
        return 1;
    }



    const formsgoeshere=document.getElementById("forms_here");        
    formsgoeshere.style.display = "inherit";
    formsgoeshere.classList.add("header_list");
    
    //this instruction is to avoid duplicated forms.
    if(formsgoeshere.children.length>0){
        console.log(formsgoeshere.children.length)
        formsgoeshere.removeChild(formsgoeshere.children[0]);
        formsgoeshere.removeChild(formsgoeshere.children[0]);
    }
    formsgoeshere.appendChild(br);         
    // Create a form dynamically
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");
    form.id="register_id";
    // Create an input element for email
    var FN = document.createElement("input");
    FN.setAttribute("type", "text");
    FN.setAttribute("name", "email");
    FN.setAttribute("placeholder", "enter email");
    // Create an input element for password
    var PWD = document.createElement("input");
    PWD.setAttribute("type", "password");
    PWD.setAttribute("name", "password");
    PWD.setAttribute("placeholder", "Password");
    // create a submit button
    var s = document.createElement("button");
    s.type="button"
    s.value="Submit"
    s.innerText="Submit"
    s.id="register_id_button";
    s.addEventListener("click",validate_login);
    // Append the full name input to the form
    form.appendChild(FN);         
    // Inserting a line break
    form.appendChild(br.cloneNode()); 
    // Append the Password to the form
    form.appendChild(PWD); 
    form.appendChild(br.cloneNode()); 
    form.appendChild(s); 

    formsgoeshere.appendChild(form);

}

function validate_login(e){
    console.log("in validate login");
/*     console.log(e.path[1][0].value);
    console.log(e.path[1][1].value); */
    //validate first name
    if (e.path[1][0].value==="" ||e.path[1][1].value===""){
        window.alert("One or more fields are in blank");
        return 1;
    }    
    if (!e.path[1][0].value.includes("@")){
        window.alert("Please enter a valid email address");
        return 1;        
    }
/*     for(let key in window.localStorage){        
        console.log(key+":"+window.localStorage[key]);
    } */

    /* for(let key in window.localStorage){        
        if (key==='user_email'){
            if(window.localStorage['user_email']===e.path[1][1].value){
                if(window.localStorage)
                
                console.log("the email and password are correct")    
            }
        }
    } */

    if(localStorage.getItem('useremail_'+e.path[1][0].value)){
        if(localStorage.getItem('password_'+e.path[1][0].value)===e.path[1][1].value){
            console.log("the email and password are correct");    
            localStorage.setItem('activeuser',e.path[1][0].value);
            const formsgoeshere=document.getElementById("forms_here");    
            formsgoeshere.removeChild(formsgoeshere.children[0]);
            formsgoeshere.removeChild(formsgoeshere.children[0]);             
            add_logout_settings_button();
            goto_dashboard();
            return 1;        
        }
    }

/*     for(let key in window.localStorage){          
        if (key==='useremail_'+e.path[1][0].value){
            if(window.localStorage[key]===e.path[1][1].value){
                console.log("the email and password are correct");    
                return 1;
            }
        }
    } */


    /* const formsgoeshere=document.getElementById("forms_here");    
    formsgoeshere.removeChild(formsgoeshere.children[0]);
    formsgoeshere.removeChild(formsgoeshere.children[0]);        
    goto_dashboard(); */
}

function add_logout_settings_button(){
    //in this part we add the Log Out button
    let top_menu=document.getElementById("top_menu");
    li_element=document.createElement("li");
    li_element.innerText="Log Out";
    li_element.id="logout"
    top_menu.appendChild(li_element);
    document.getElementById("logout").addEventListener("click",logout_function);
    //in this part we add the settings button    
    li_element2=document.createElement("li");
    li_element2.innerText="Settings";
    li_element2.id="settings"
    top_menu.appendChild(li_element2);
    document.getElementById("settings").addEventListener("click",settings_function);

}

function logout_function(){
    localStorage.removeItem('activeuser');
    const formsgoeshere=document.getElementById("forms_here");                
    if(formsgoeshere.children.length>0){        
        let max=formsgoeshere.children.length
        for (let i=0;i<max;i++){
            formsgoeshere.removeChild(formsgoeshere.children[0]);        
        }
    }

    let list_elements= document.getElementById("UL_Lists");
    if(list_elements.children.length>0){
        let max=list_elements.children.length
        for (let i=0;i<max;i++){
            list_elements.removeChild(list_elements.children[0]);        
        }
    }
    //This is to remove the logout option itself and the Settings button in the top menu
    let top_menu=document.getElementById("top_menu");    
    top_menu.removeChild(top_menu.children[2]); 
    top_menu.removeChild(top_menu.children[2]); 
    
    
    //body.removeChild("forms_here");
    formsgoeshere.style.display = "none";
}

function settings_function(){    
    clean_canvas(); //first we clean up the canvas
    create_form_blank("settings_id_button","settings_form");//then we create a standard submit form
    let button_var=document.getElementById("settings_id_button");
    button_var.addEventListener("click",save_settings); 
    //we load the data for the active user
    form_var=document.getElementById("settings_form")
    form_var.elements[0].value=localStorage.getItem('firstname_'+localStorage.getItem('activeuser'));     
    form_var.elements[1].value=localStorage.getItem('lastname_'+localStorage.getItem('activeuser'));         
    form_var.elements[2].value=localStorage.getItem('activeuser');   
    form_var.elements[2].disabled=true;  //we disable the email user as we don't want to be modify it
    
}

function clean_canvas(){    
    const formsgoeshere=document.getElementById("forms_here");                
    if(formsgoeshere.children.length>0){        
        let max=formsgoeshere.children.length
        for (let i=0;i<max;i++){
            formsgoeshere.removeChild(formsgoeshere.children[0]);        
        }
    }

    let list_elements= document.getElementById("UL_Lists");
    if(list_elements.children.length>0){
        let max=list_elements.children.length
        for (let i=0;i<max;i++){
            list_elements.removeChild(list_elements.children[0]);        
        }
    }    
    
    //body.removeChild("forms_here");
    formsgoeshere.style.display = "none";
}

function save_settings(e){
    
    if(!validate_form_data(e)){        
        localStorage.setItem('firstname_'+localStorage.getItem('activeuser'),e.path[1][0].value);
        localStorage.setItem('lastname_'+localStorage.getItem('activeuser'),e.path[1][1].value);        
        localStorage.setItem('password_'+localStorage.getItem('activeuser'),e.path[1][3].value);
        window.alert("Information modified successfully");
        clean_canvas();
        goto_dashboard();
    }
}

function validate_form_data(e){
    //validate first name
    if (e.path[1][0].value==="" ||e.path[1][1].value===""||e.path[1][2].value===""||e.path[1][3].value===""||e.path[1][4].value===""){
        window.alert("One or more fields are in blank");
        return 1;
    }    
    if (e.path[1][3].value!==e.path[1][4].value){
        window.alert("the entered passwords don't match");
        return 1;
    }
    return 0; //all good
}

function create_form_blank(button_id_name,form_name){

    const formsgoeshere=document.getElementById("forms_here"); 
    formsgoeshere.style.display = "inherit";           
    formsgoeshere.classList.add("header_list");

    //this instruction is to avoid duplicated forms if the user click more than 2 times in the same form
    if(formsgoeshere.children.length>0){
        //return 1;
        console.log(formsgoeshere.children.length)
        formsgoeshere.removeChild(formsgoeshere.children[0]);
        formsgoeshere.removeChild(formsgoeshere.children[0]);
    }
    formsgoeshere.appendChild(br);         
    // Create a form dynamically
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");
    form.id=form_name;
    // Create an input element for Full Name
    var FN = document.createElement("input");
    FN.setAttribute("type", "text");
    FN.setAttribute("name", "FirstName");
    FN.setAttribute("placeholder", "First Name");
    // Create an input element for date of birth
    var DOB = document.createElement("input");
    DOB.setAttribute("type", "text");
    DOB.setAttribute("name", "LastName");
    DOB.setAttribute("placeholder", "Last Name");
    // Create an input element for emailID
    var EID = document.createElement("input");
    EID.setAttribute("type", "text");
    EID.setAttribute("name", "emailID");
    EID.setAttribute("placeholder", "E-Mail ID");
    // Create an input element for password
    var PWD = document.createElement("input");
    PWD.setAttribute("type", "password");
    PWD.setAttribute("name", "password");
    PWD.setAttribute("placeholder", "Password");
    // Create an input element for retype-password
    var RPWD = document.createElement("input");
    RPWD.setAttribute("type", "password");
    RPWD.setAttribute("name", "reTypePassword");
    RPWD.setAttribute("placeholder", "ReEnter Password");
    // create a submit button
    var s = document.createElement("button");

    s.type="button"
    s.value="Submit"
    s.innerText="Submit"
    s.id=button_id_name;
             
    // Append the full name input to the form
    form.appendChild(FN); 
    // Inserting a line break
    form.appendChild(br.cloneNode()); 
    // Append the DOB to the form
    form.appendChild(DOB); 
    form.appendChild(br.cloneNode()); 
    // Append the emailID to the form
    form.appendChild(EID); 
    form.appendChild(br.cloneNode()); 
    // Append the Password to the form
    form.appendChild(PWD); 
    form.appendChild(br.cloneNode()); 
    // Append the ReEnterPassword to the form
    form.appendChild(RPWD); 
    form.appendChild(br.cloneNode()); 
    // Append the submit button to the form
    form.appendChild(s); 
    formsgoeshere.appendChild(form);      


}

function create_form() {    
    if(localStorage.getItem('activeuser')){
        window.alert("there is an active user:"+localStorage.getItem('activeuser')+" .Logout first")
        return 1;
    }
    const formsgoeshere=document.getElementById("forms_here"); 
    formsgoeshere.style.display = "inherit";           
    formsgoeshere.classList.add("header_list");

    //this instruction is to avoid duplicated forms if the user click more than 2 times in the same form
    if(formsgoeshere.children.length>0){
        //return 1;
        console.log(formsgoeshere.children.length)
        formsgoeshere.removeChild(formsgoeshere.children[0]);
        formsgoeshere.removeChild(formsgoeshere.children[0]);
    }
    formsgoeshere.appendChild(br);         
    // Create a form dynamically
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");
    form.id="register_id";
    // Create an input element for Full Name
    var FN = document.createElement("input");
    FN.setAttribute("type", "text");
    FN.setAttribute("name", "FirstName");
    FN.setAttribute("placeholder", "First Name");
    // Create an input element for date of birth
    var DOB = document.createElement("input");
    DOB.setAttribute("type", "text");
    DOB.setAttribute("name", "LastName");
    DOB.setAttribute("placeholder", "Last Name");
    // Create an input element for emailID
    var EID = document.createElement("input");
    EID.setAttribute("type", "text");
    EID.setAttribute("name", "emailID");
    EID.setAttribute("placeholder", "E-Mail ID");
    // Create an input element for password
    var PWD = document.createElement("input");
    PWD.setAttribute("type", "password");
    PWD.setAttribute("name", "password");
    PWD.setAttribute("placeholder", "Password");
    // Create an input element for retype-password
    var RPWD = document.createElement("input");
    RPWD.setAttribute("type", "password");
    RPWD.setAttribute("name", "reTypePassword");
    RPWD.setAttribute("placeholder", "ReEnter Password");
    // create a submit button
    var s = document.createElement("button");
    //s.setAttribute("type", "submit");
    //s.setAttribute("value", "Submit");
    s.type="button"
    s.value="Submit"
    s.innerText="Submit"
    s.id="register_id_button";
    s.addEventListener("click",save_sign_up);              
    // Append the full name input to the form
    form.appendChild(FN); 
    // Inserting a line break
    form.appendChild(br.cloneNode()); 
    // Append the DOB to the form
    form.appendChild(DOB); 
    form.appendChild(br.cloneNode()); 
    // Append the emailID to the form
    form.appendChild(EID); 
    form.appendChild(br.cloneNode()); 
    // Append the Password to the form
    form.appendChild(PWD); 
    form.appendChild(br.cloneNode()); 
    // Append the ReEnterPassword to the form
    form.appendChild(RPWD); 
    form.appendChild(br.cloneNode()); 
    // Append the submit button to the form
    form.appendChild(s); 
    formsgoeshere.appendChild(form);      
}


function save_sign_up(e){
    //validate first name
    if (e.path[1][0].value==="" ||e.path[1][1].value===""||e.path[1][2].value===""||e.path[1][3].value===""||e.path[1][4].value===""){
        window.alert("One or more fields are in blank");
        return 1;
    }    
    if (!e.path[1][2].value.includes("@")){
        window.alert("Please enter a valid email address");
        return 1;        
    }

    if (e.path[1][3].value!==e.path[1][4].value){
        window.alert("the entered passwords don't match");
        return 1;
    }

    for(let test in window.localStorage){            
        console.log(test);
    }
/* 
    for(let key in window.localStorage){          
        if (key==='useremail_'+e.path[1][2].value){
            if(window.localStorage[key]===e.path[1][2].value){
                window.alert("that email already exists, please modify the email text box");
                return 1;
            }
        }
    } */
    if(localStorage.getItem('useremail_'+e.path[1][2].value)){
        window.alert("that email already exists, please modify the email text box");
        return 1;
    }

    localStorage.setItem('firstname_'+e.path[1][2].value,e.path[1][0].value);
    localStorage.setItem('lastname_'+e.path[1][2].value,e.path[1][1].value);
    localStorage.setItem('useremail_'+e.path[1][2].value,e.path[1][2].value);
    localStorage.setItem('password_'+e.path[1][2].value,e.path[1][3].value);
    localStorage.setItem('activeuser',e.path[1][2].value);

    const formsgoeshere=document.getElementById("forms_here");    
    formsgoeshere.removeChild(formsgoeshere.children[0]);
    formsgoeshere.removeChild(formsgoeshere.children[0]);        
    add_logout_settings_button();
    goto_dashboard();
}


//adding click even to the signup menu option

document.getElementById("signup").addEventListener("click",create_form);
document.getElementById("login").addEventListener("click",create_form_login);

localStorage.removeItem('activeuser');

// Create a break line element
var br = document.createElement("br"); 

