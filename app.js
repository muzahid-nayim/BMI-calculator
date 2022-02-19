function measureBMI () {
    // (A1) GET HTML ELEMENTS
    let unit = document.getElementById("bmi-imperial").checked,
        weightu = document.getElementById("bmi-weight-unit"),
        feet=document.getElementById("feet"), 
        form_label=document.getElementById("lf"),      
        heightu = document.getElementById("bmi-height-unit");

  
    
    if (unit) {
      weightu.innerHTML = "(LBS)";
      heightu.innerHTML = "Inch";
      feet.disabled=false;
      form_label.style.visibility="visible";
    } else {
        weightu.innerHTML = "(KG)";
        heightu.innerHTML = "CM";
        feet.disabled=true;
        form_label.style.visibility="hidden";
    }
  }

  function calcBMI () {
    // (B1) GET HTML ELEMENTS
   
         let bmi=null,
        unit = document.getElementById("bmi-imperial").checked,
        weight_get = parseInt(document.getElementById("weight").value),
        height_inch_cm= parseInt(document.getElementById("height-inch-cm").value),
        feet=parseInt(document.getElementById("feet").value),
        results = document.getElementById("bmi-results");
       
        var weight=0+weight_get;
        
        
// -----------------------------------------------------------------
    if (unit) {
         var height=(feet*12)+height_inch_cm;
    }
    else{
            height =height_inch_cm;
    }
         
    
    if (unit) {
      bmi = 703 * (weight / (height * height));
    }
    
    else {
        height = height / 100;
        bmi = weight / (height * height);
    }
    
    bmi = Math.round(bmi * 100) / 100; 
  
    //  SHOW RESULTS
    if (bmi < 18.5) {
      results.innerHTML = bmi + " - Underweight";
    } else if (bmi < 25) {
      results.innerHTML = bmi + " - Normal weight";
    } else if (bmi < 30) {
      results.innerHTML = bmi + " - Pre-obesity";
    } else if (bmi < 35) {
      results.innerHTML = bmi + " - Obesity class I";
    } else if (bmi < 40) {
      results.innerHTML = bmi + " - Obesity class II";
    } else {
      results.innerHTML = bmi + " - Obesity class III";
    }
    return false;
  }
  
  
  
//   var bmi=null,
//       radio=document.getElementById("bmi-imperial"),
//       weight=parseInt(document.getElementById("weight").value),
//       height_feet=parseInt(document.getElementById("feet").value),
//       height_inch_cm=parseInt(document.getElementById("height-inch-cm").value);
//       var height=height_feet*12+height_inch_cm;