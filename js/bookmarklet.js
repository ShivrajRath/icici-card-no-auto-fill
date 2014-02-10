var k={
    "Digit(1)":"00",
	"Digit(2)":"11",
	"Digit(13)":"22"
}
//Get all the text fields
var eles = [];
var inputs = document.getElementsByTagName("input");
for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].name.indexOf('Digit') == 0) {
        eles.push(inputs[i]);
    }
}

for(i=0;i<eles.length;i++){
	key=eles[i].name
	val=k[key];
	document.getElementsByName(key)[0].value=val;
}