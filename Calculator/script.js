function bclick(dig){
    console.log(dig)
    document.getElementById("output_label").value+=dig
}

function erase(){
    document.getElementById("output_label").value=''
}

function calculate(){
    var text=document.getElementById("output_label").value
    var result=eval(text)
    document.getElementById("output_label").value=result
}