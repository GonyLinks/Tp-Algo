var hanoi = function(disc,src,aux,dest)
{
  if(disc > 0)
  {
    hanoi(disc -1,src,dest,aux);
    console.log('Move disc '+disc+' from '+src+' to '+dest);
    hanoi(disc -1,aux,src,dest);
  }
};

hanoi(4,'Pilier 1','Pilier 2','Pilier 3');