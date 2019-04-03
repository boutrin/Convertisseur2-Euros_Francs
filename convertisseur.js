
function cfe()
{

const tdc=6.55957;
var fr=document.getElementById("fr");var sfr=parseFloat(fr.value);
var eu=document.getElementById("eu");var seu=parseFloat(eu.value);

if (!isNaN(sfr)){
 eu.value=sfr/tdc;
}else
 {
  if(!isNaN(eu)){
   fr.value=seu*tdc;
  }
  else {alert("entrez au moins une somme");}
 }
}
