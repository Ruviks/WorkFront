class solutions
{
 /*  public static void main(String[] args)
    {
       //test any function here
        solutions solutions = new solutions();
        
    }
    */
//helper functions
    void print(int a,int b,int c) {System.out.println(a+","+b+","+c);}
int getlength(int number) {
    return  String.valueOf(number).length();
}
int getnumber(int x)
{   int  k=10;
    for(int i=2;i<=x;i++)
    {k=k*10;}
    return k;
}
//Main functions
void one(int x)
{ 
if(x%2==0) System.out.println("Even");
else System.out.println("odd");
}
void two(int x,int y)
{ 
if(x>y && x%y==0)System.out.println("1");
else if( y%x==0)System.out.println("1");
else System.out.println("0");
}
void three(int x)
{ 
   System.out.println(x+String.valueOf(2*x)+3*x);
   
   
}
void four(int x)
{  
      int  a=x%10;
       if(a==0)return;
       System.out.println(String.valueOf(a)+Math.floor(x/10));
}
void five(int a,int b,int c,int d,int e)
{
 System.out.println((a+b+c+d+e)/5);
}
void six(int a,int b,int c)
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
void seven(int a,int b,int c)
{
    int i=0;
    if(a==0 || b==0 || c==0)
    {
        System.out.println("undefined");
        return;
    }
    if(a<0)i++;
    if(b<0)i++;
    if(c<0)i++;
    if(i%2==0)System.out.println("+");
    else System.out.println("-");
}
void eight(int a,int b,int c)
{
    if(a==0 ){
        System.out.println("Enter Valid Constants");
        return;
    }
    else
    {  if(b*b-4*a*c>=0)
        {
       double x=(-b+Math.sqrt(b*b-4*a*c))/2*a;
        double y=(-b-Math.sqrt(b*b-4*a*c))/2*a;
        if(x==y) System.out.println("Solution is "+x);
        else System.out.println("The solutions are "+x+" and "+y);
        }
        else System.out.println("Solution does not exist");
        
        
    }

}

void nine()
{
    var n =System.in.read();
    int i=0;
    int j=0;
    if(n%2==0 && !Math.floor(n/10))i+=1;
    if(n%3==0 && n%10==1)j+=1;
    
}
void ten(int digit,int number)
{
    boolean x=true;
 while(number!=0)
 {
     if(digit==number%10) 
     {  x=false;
         System.out.println("Yes");
     break;
     }
         number=Math.floor(number/10);
 }
 if(x)System.out.println("No");


}
void eleven(int x)
{   if(Math.floor(x/10)==0)
    System.out.println(x);
          
        else
        {
   String s="";
   int length=getlength(x), a=x,b=x;
    a=Math.floor(a/getnumber(length-1));
    s+=a;
    for(i=0;i<=length-3;i++)
    {   
       
       x=Math.floor(x/10);
       s=x%10+s;
    }
    s=b%10+s;
    System.out.println(s);
        }
   
}
void twelve(int a,int b)
{
    
   String x=System.in.read();
    if(typeof(x)!="string")return;
   if(x=="triangle")System.out.println(a*b/2);
   if(x=="rectange")System.out.println(a*b);
}
void thirteen(int x)
{  if(Math.floor(x/10)==0)
    {System.out.println("0");
return;}

     int min=x%10,max=x%10;
    x=Math.floor(x/10);
  while(x!=0)    
  {
    if(x%10<min)min=x%10;
    if(x%10>max)max=x%10;
    x=Math.floor(x/10);
  } 


System.out.println(max-min);
}

}
