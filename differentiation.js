function differentiate(f) {
  console.log(f);
  if (f.indexOf("x") != -1){
    if (f.indexOf("^") != -1){
    index = f.indexOf("^");
    length_of_power =f.length - index;
    power ="";
    for(var i=index+1;i<(index+length_of_power);i++)
      power+=f[i];
    coe="";
    if (index-1 != 0){
    for(var j=0;j<index-1;j++)
      coe+=f[j];
    console.log(power);
    if (coe == "-")
    coe += "1"
    new_coe=coe+"1"
    new_coe = parseInt(coe)*parseInt(power);
    new_power = parseInt(power)-1;
    if(new_coe == 1) new_coe =""
    new_coe
    if(power =="2")
      return String(new_coe)+"x";
    else
      return String(new_coe)+"x^"+String(new_power);
      }
      
    else{
    new_power = parseInt(power)-1;
    
    if(power !="-1")
    new_coe = parseInt(power);
    else
    new_coe ="-";
    if(power =="2")
      return String(new_coe)+"x";
    else
      return String(new_coe)+"x^"+String(new_power);
    }
    }

    
    
    else{
    power ="0"
    x_index = f.indexOf("x");
    console.log(x_index);
    coe ="";
    for(var i=0;i<x_index;i++)
      coe+=f[i]
    if(coe == "-" || coe == "") coe+="1"
    return coe
    }
  }
  else{
  return "0"
  }
}

console.log(differentiate("2x^3"));