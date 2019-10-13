function print(a,b,c) {console.log(a+","+b+","+c);}
function getlength(number) {
    return number.toString().length;
}
function getnumber(x)
{    let k=10;
    for(i=2;i<=x;i++)
    {k=k*10;}
    return k;
}
//Main Functions
function one(x)
{ 
if(x%2==0) console.log("Even")
else console.log("odd")
}
function two(x,y)
{ 
if(x>y && x%y==0)console.log("1")
else if( y%x==0)console.log("1")
else console.log("0")
}
function three(x)
{ 
   console.log(x+String(2*x)+3*x);
   
   
}
function four(x)
{  
     let  a=x%10;
       if(a==0)return;
       console.log(String(a)+Math.floor(x/10));
}
function five(a,b,c,d,e)
{
 console.log((a+b+c+d+e)/5);
}
function six(a,b,c)
{ 
      if(a<b)
      {
          if(b<c) print(a,b,c);
          else {
              if(a<c)print(a,c,b);
              else print(c,a,b);
          }
      }
      else
      {
          if(b<c)
          {
              if(c<a)print(b,c,a);
              else print(b,a,c);
          }
          else 
          {
              if(c<a)print(c,b,a);
              else print(b,a,c);
          }
      }


}
function seven(a,b,c)
{
    let i=0;
    if(a==0 || b==0 || c==0)
    {
        console.log("undefined");
        return;
    }
    if(a<0)i++;
    if(b<0)i++;
    if(c<0)i++;
    if(i%2==0)console.log("+");
    else console.log("-");
}
function eight(a,b,c)
{
    if(a==0 ){
        console.log("Enter Valid Constants");
        return;
    }
    else
    {  if(b*b-4*a*c>=0)
        {
       let x=(-b+Math.sqrt(b*b-4*a*c))/2*a;
       let y=(-b-Math.sqrt(b*b-4*a*c))/2*a;
        if(x=y) console.log("Solution is "+x);
        else console.log("The solutions are "+x+" and "+y);
        }
        else console.log("Solution does not exist");
        
        
    }

}
function nine()
{
    var n =+prompt();
    var i=0;
    var j=0;
    if(n%2===0 && !Math.floor(n/10))i+=1;
    if(n%3===0 && n%10===1)j+=1;
    
}
function ten(digit,number)
{
    var x=true;
 while(number!=0)
 {
     if(digit==number%10) 
     {  x=false;
         console.log("Yes");
     break;
     }
         number=Math.floor(number/10);
 }
 if(x)console.log("No");


}
function eleven(x)
{   if(Math.floor(x/10)==0)
    console.log(x);
          
        else
        {
  let  s="";
   let length=getlength(x);
 let    a=x;
  let    b=x;
    a=Math.floor(a/getnumber(length-1));
    s+=a;
    for(i=0;i<=length-3;i++)
    {   
       
       x=Math.floor(x/10);
       s=x%10+s;
    }
    s=b%10+s;
    console.log(s);
        }
   
}
function twelve(a,b)
{
    //var x =prompt();
    x=prompt();
    if(typeof(x)!="string")return;
   if(x=="triangle")console.log(a*b/2);
   if(x=="rectange")console.log(a*b);
}
function thirteen(x)
{  if(Math.floor(x/10)==0)
    {console.log("0");
return;}

     min=x%10,max=x%10;
    x=Math.floor(x/10);
  while(x!=0)    
  {
    if(x%10<min)min=x%10;
    if(x%10>max)max=x%10;
    x=Math.floor(x/10);
  } 


console.log(max-min);
}
