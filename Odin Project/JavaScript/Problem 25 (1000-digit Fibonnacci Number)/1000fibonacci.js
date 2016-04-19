var max=500;     //Sets the maximum loop iterations
var maxdigits=100; //Sets the largest number that can be included
var lngth=0;          //initializes lngth variable to 0
var f=[];           //initializes array to store values
var i=1;
f[0]=0;             //sets first two values to 0 and 1 needed for fibonacci formula
f[1]=1;


do{
    i+=1;
    f[i]=f[i-1]+f[i-2];
    lngth=f[i].toString().length;
} while (lngth<maxdigits);
console.log(i,f[i],lngth); 
    //code
//memory allocation error...