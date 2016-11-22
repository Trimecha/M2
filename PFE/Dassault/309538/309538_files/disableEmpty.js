var allContainers = document.getElementsByTagName('div');
var i,div,textDetails;

function hasCSS(className, elementID)
{
 var node = typeof elementID == 'string' ? document.getElementById(elementID) : elementID;
 if ( node && node.className && node.className.split(' ').indexOf(className) != -1 ) { return true; }
 return false;
}

function getInnerText(E/*lementID*/)
{
  var
   n/*ode*/ = typeof E == 'string' ? document.getElementById(E) : E,
   r/*etour*/ = [],
   i = 0;
  if ( !n ) { return ''; }
  if ( n.data && n.nodeType == 3 /*document.TEXT_NODE*/ ) { return n.data; }
  if ( n.textContent ) { return n.textContent; }
  if ( n.innerText ) { return n.innerText; }
  if ( n.childNodes )
  {
   while ( n.childNodes[i] )
   {
    r.push( getInnerText(n.childNodes[i]) );
    i++;
   }
  }
  return r.join('');
}




for (i=allContainers.length; i--; ) 
{
 div = allContainers[i];
 if (hasCSS('container',div))
 {
  textDetails = getInnerText(div.lastChild).replace(/^\s+|\s+$/g, "");
  if (!textDetails)
  {
   div.parentNode.removeChild(div);
  }
 }
}





