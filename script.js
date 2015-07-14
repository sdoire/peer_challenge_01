
//step 1

var value=52;

//step 2
if (value>=2){
	value+=8;
}
else {
	value-=47;
}

//step 3

var a="52";

value+=a;

//step 4

var array=[];

for (var i=0; i<value.length; i++){
	array[i]=value.charAt(i);
}
//step 5
array.shift();
array.pop();

//step 6
var string = "";
for (i=array.length-1; i>=0; i--) {
	string+=array[i];
}

//step 7
value = parseInt(value);
string = parseInt(string);

//step 8
value += string;

//step 9
if (value>7352) {
	value = 4;
} else if (value == 6102) {
	value = 54;
} else {
	value = 28;
}

//step 10
i = 5;
while (i>0) {
	value++;
	i--;
}
//step 11
function rockin(val) {
	val = val.toString();
	if (val.length>=2) {
	val = val.slice(1, val.length);
	return val;
		}
	value = val;
	} 

console.log(rockin(value));