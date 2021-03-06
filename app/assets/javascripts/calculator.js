function setRadius(){
  var fd = document.getElementById("fd").value;
  var pd = document.getElementById("pd").value;
  var lt = document.getElementById("lt").value;
  var st = document.getElementById("st").value;
  var r;

  //Convert inputs to numbers
  fd = new Number(fd);
  pd = new Number(pd);
  lt = new Number(lt);
  st = new Number(st);

  //calculate desired radius from parameters
  { if(pd>fd)
    document.getElementById("status").innerHTML = "Problem: Partial Draw can't be more than Full Draw";
    else
    { r = (pd/fd)*lt*st;
      if(isNaN(fd) || isNaN(pd) || isNaN(lt) || isNaN(st))
         document.getElementById("status").innerHTML = "Problem: Inputs must be numbers";
      else
         document.getElementById("r").value = r;
    }
    return;
  }
}
function calculate()
{ document.getElementById("status").innerHTML ="";
  document.activeElement.blur();  //make ipad keyboard close now.

  var w = document.getElementById("w").value;
  var h = document.getElementById("h").value;
  var r = document.getElementById("r").value;
  var l;

  //make sure we have 2 inputs
  var count = 0;
  if(h.length>0) count++;
  if(w.length>0) count++;
  if(r.length>0) count++;

  if(count !=2)
  { document.getElementById("status").innerHTML = "Enter any two values";
    return;
  }

  //Convert inputs to numbers
  w = new Number(w);
  h = new Number(h);
  r = new Number(r);
  l = w/2;

  if(w==0)  //calc chord length
  { if(h>r)
    document.getElementById("status").innerHTML = "Problem:: Arc too tall";
    else
    { w = 2*Math.sqrt(2*h*r - h*h);
      if(isNaN(w))
         document.getElementById("status").innerHTML = "Problem: Inputs must be numbers";
      else
         document.getElementById("w").value = w;
    }
    return;
  }


  if(r==0)  //calc radius
  { if(h>l)
    { document.getElementById("status").innerHTML = "Height must be less than half width";
      return;
    }

    r = (h/2)+(w*w / (8*h));
    if(isNaN(r))
     document.getElementById("status").innerHTML = "Problem: Inputs must be numbers";
    else
     document.getElementById("r").value = r;
    return;
  }



  if(h==0)  //calc height (sagitta)
  { if(l>r)
    document.getElementById("status").innerHTML = "ERROR: Width exceeds diameter ";
    else
    { h = r-Math.sqrt(r*r-l*l);
      if(isNaN(h))
         document.getElementById("status").innerHTML = "Problem: Inputs must be numbers";
      else
         document.getElementById("h").value = h;
    }
    return;
  }
}

function clear(id)
{ document.getElementById(id).value = "";
}


function keyPress(inputField, e)
{
  if(e.keyCode==13) calculate();
}

function clearAll()
{ document.getElementById("status").innerHTML = "";
  var inputs = document.getElementsByClassName("inp");
  for (var i=0; i<inputs.length ;i++ )
    { inputs[i].value = "";
    }
}
