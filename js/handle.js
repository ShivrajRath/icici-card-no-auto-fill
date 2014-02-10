$("#doneBtn").click(function(){
    var atmJSON=new Object();
    var eles=$('input[id*="Digit"]');
    for(var i=0;i<eles.length;i++){
        var key=eles[i].id;
    	var val=document.getElementById(key).value;
    	atmJSON[key]=val;
    }
    
	var url="<a class='btn btn-large btn-primary' href=javascript:(function(){k="+JSON.stringify(atmJSON)+";eles=[];inputs=document.getElementsByTagName('input');for(i=0;i<inputs.length;i++){if(inputs[i].name.indexOf('Digit')==0){eles.push(inputs[i]);}}for(i=0;i<eles.length;i++){key=eles[i].name;val=k[key];document.getElementsByName(key)[0].value=val;}"+"})()><i class='icon-white icon-move'></i>ICICI Auto Fill</a>";
	$("#generatedBM").append(url);
});

$("#digitTable").keypress(function(e){
    var id=e.target.id;
    if(!(e.keyCode>=48 && e.keyCode<=57) || document.getElementById(id).value.length>=2){
        return false;
    }
});

$("#clrBtn").click(function(){
    var eles=$('input[id*="Digit"]');
    for(var i=0;i<eles.length;i++){
        var key=eles[i].id
        document.getElementById(key).value="";
    }
});