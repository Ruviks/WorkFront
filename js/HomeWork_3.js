function one(n)
{   var rows=2*n-2;
  
    for( var i=0;i<=rows;i++)
    {   s="";
      for(var j=0;j<=rows;j++)
      {
        if(j==i||j==rows-i)s+="*";
        else s+=" ";
      }      
        
        console.log(s);
    }
}
function two(arr)
{ fixed=arr.length
  while(arr.length!=0)
  {  var ref=arr[0],c=0;
    for(let i=0;i<arr.length;i++)
  {  
      if(ref==arr[i])
    {
      c++;
      arr.splice(i,1);
      i--;
    }
 
  }
   console.log(ref,c/fixed)
  }
  
}  
function three(arr)
{  var i=0,s=0;
  for(let k=0;k<arr.length;k++)
  {
    if(parseInt(arr[k]))
    {
      i++;
    }
    else s++;
  }
  console.log("Integers="+i);
  console.log("Strings="+s);
    
}
function four(string)
{ var reg= /[ ,-]+/g;
  var x =string.split(reg);
  console.log(x);
  var max =0,maxlength=0;

  for(let i=0;i<x.length;i++)
  {
   if(x[i].length>=maxlength)
   {
     max=i;
     maxlength=x[i].length;
  }
  }
return x[max];
}
function five(string)
{  let arr=[],maxindex=0,maxlength=0;
  for(let i=1;i<string.length;i++)
  {if(string[i]==" ")i++;
    for(let j=0;j<i;j++)
    {  
      if(string[j]==string[i])
      {
        arr.push(string.substring(0,i));
        string=string.substring(j+1);
        i=1;
        
      }
    }
  }
    arr.push(string);
    for(let i=1;i<arr.length;i++)
    {
       if(arr[i].length>=maxlength)
       {maxlength=arr[i].length;
       maxindex=i;
      }
      }
    console.log(arr)
    console.log(arr[maxindex])
  }  
function six(s)
{    str ="",
      arr=[],
      d=s.length%3;
if(d!=0)
  for(i=0;i<d;i++)
    arr[i]=s[s.length-d+i];

   while(s.length>=3)
   {   
      
     str+=s[1];
     str+=s[2];
     str+=s[0];
     s=s.substring(3);
     
   }
   for(let i=0;i<d;i++)
   str+=arr[i];

   return str;
    }
function seven(arr)
{ if(arr==0 || arr[1][0]==null || arr==null  )return "Invalid Argument";
  let negative_array=[],maxnegatives=[],product=1;
   arr.forEach(element => {
   negative_array.push((element.filter(x=> x<0)));
  });
  
  negative_array.forEach(element => {
    maxnegatives.push(Math.max(...element))
  });
  
  maxnegatives=maxnegatives.filter(element=>element>-Infinity);
  if(maxnegatives.length==0)return 'No Negatives';
  for(let i=0;i<maxnegatives.length;i++)product*=maxnegatives[i];
  return product;
}
function eight(arr)
{ let result=[];
  for(let i=0;i<=arr.length-3;i++)  
    for(let j=i+1;j<arr.length;j++)
      for(let k=j+1;k<arr.length;k++)
     result.push([arr[i],arr[j],arr[k]]);
  
  return result;
}