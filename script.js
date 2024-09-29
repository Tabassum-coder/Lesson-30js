function clearScreen(){
    document.getElementById("result").value='';
}

function setScreenValue(value){
    document.getElementById("result").value+=value;
}

function calculateResult(){
    const resultexp=document.getElementById("result");
    const exp=resultexp.value.trim();
    if (exp==''){
       resultexp.value="Enter valid expression";
       return;
    }
    try{
        resultexp.value=eval(exp);
    }
    catch(e){
        resultexp.value="Invalid expression";
    }
}