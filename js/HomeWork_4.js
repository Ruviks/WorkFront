function len(x){ var len = Math.ceil(Math.log(x + 1) / Math.LN10);return len;}
function digits(x)
{  var arr=[];
    var len = Math.ceil(Math.log(x + 1) / Math.LN10);

    for(i=0;i<len;i++)
    {
        arr[len-1-i]=x%10;
        x=Math.floor(x/10);
    }
    return arr;

}
function one(array,x)
{   var a=[];
    array.forEach(element => {
        if(element>=x)a.push(element)
    });
    if(a.length!=0)
    console.log(a);
    else 
    console.log("No such number exists")
}
function two(a,b)
{   var arr=[];
    
    
    
     while(a<=b)
     { var check= true, da=digits(a), l = len(a);
        for(i=0;i<l;i++)
        {
            if(da[i]%2!=0)check=false;
        }
        if(check)arr.push(a);
        a++;
    }
    if(arr.length!=0)
  return arr;
  else
 return ("Such number does not exist")
}
function three(a)
{  if(a==0){console.log("true");return ;}
    
 if((a%10)%2==0){console.log("false") ;return;}
else 
{
 three(Math.floor(a/10));
}   
}
function four(arr) {
   x=arr.pop();
   
    if (arr.length == 0  ) {
        if(x>=0)
        {
        return x;
        }
        else return Infinity;
    }
 

    if(x<0) return four(arr);
    
    return Math.min(x, four(arr));
    
}
function five(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) return i + 1;
    }
    return -1;
}
