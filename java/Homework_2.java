class Chess{
   public static String[] OccupiedCells =new String[64];
  public static int i=0;
   public static void main(String[] args)
   {  
      for(int i=0;i<OccupiedCells.length;i++)OccupiedCells[i]="";

      //Make Pieces here and use the move command to move them 
       Pawn pawn = new Pawn("A1");
      
   }
   public static String getcell(Piece piece)
   {
      return piece.Cell;
   }
   public static boolean move(Piece piece,String cell)
   {   
     boolean last=false;
     boolean check=true;
     String[] moves=piece.moves();
     for(int i=0;i<OccupiedCells.length;i++)
     {
        if(OccupiedCells[i].equals(cell))
        {check=false;break;}
     }
if(check)
{
   for(int i=0;i<moves.length;i++)
   { 
     if(moves[i].equals(cell))
     {
        last=true;
        
        break;
     }
   }

}
if(last)
{Chess.OccupiedCells[piece.index]=cell;
   piece.Cell=cell;
}

    return last;
   }
}

abstract class Piece{
   String Cell="";
   int index=Chess.i;
   String[] moves() {return null;}
   public Piece(String Cell)
   {
      Chess.OccupiedCells[index]=Cell;
      Chess.i++;
      
   }

   
}

class Pawn extends Piece

{
   public Pawn(String Cell){
      super(Cell);
      this.Cell=Cell;
   

   }
   @Override
   String[] moves()
   {
      //Algorithm that returns avaliable moves,not cosidering other objects,it is a matter of making a public list of occupied cells otherwise.
   
      String s=String.valueOf(Cell.charAt(0))+String.valueOf(Character.getNumericValue(Cell.charAt(1))+1);
      return new String[]{s};
   }
}

class Rook extends Piece
{
   public Rook(String Cell)
   {   super(Cell);
      this.Cell=Cell;
   }
   @Override
   String[] moves()
   { 
      String[] charset =new String[]{"A","B","C","D","E","F","G","H"};
      String[] moves = new String[16];
      for(int i=1;i<=8;i++)
      {   
         moves[i-1]=Cell.charAt(0)+String.valueOf(i);
      }
      for(int i=8;i<=15;i++)
      {
         moves[i]=charset[i-8]+Cell.charAt(1);
      }
      return moves;


   }
}