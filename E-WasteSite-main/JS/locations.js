function update(){
    var selected = document.getElementById('locations');
    var value = selected.options[selected.selectedIndex].value;
    console.log(value);
    var title;
    var address;
    var openingTimes;
    var features;
    switch(value){
      case "manchester":
        title = "Manchester";
        address = "01 Placeholder Street, M4 1HQ, Manchester";
        openingTimes = "9am - 5pm, Closed Sundays";
        features = "Recycling, On-Site Store"; 
        break;
      case "nottingham":
        title = "Nottingham";
        address = "01 Placeholder Street, NG1 2ET, Nottingham";
        openingTimes = "9am - 5pm, Closed Sundays";
        features = "Recycling, Repairs"; 
        break;
      case "cambridge": 
        title = "Cambridge";
        address = "01 Placeholder Street, CB4 1NL, Cambridge";
        openingTimes = "9am - 5pm, Closed Sundays";
        features = "Recycling, Warehouse, Repairs";
        break;
      case "bristol":
        title = "Bristol";
        address = "01 Placeholder Street, BS1 2AT, Bristol";
        openingTimes = "9am - 5pm, Closed Sundays";
        features = "Recycling, On-Site Store"; 
        break;
      case "maidstone":
        title = "Maidstone";
        address = "01 Placeholder Street, ME14 1HJ, Maidstone";
        openingTimes = "9am - 5pm, Closed Sundays";
        features = "Recycling"; 
        break;
      default: 
          title = "No Location Selected";
          address = "";
          openingTimes = "";
          features = "";
        break;
    }

    document.getElementById("locationTitle").innerHTML = title;
    document.getElementById("locationAddress").innerHTML = address;
    document.getElementById("locationOpeningTimes").innerHTML = openingTimes;
    document.getElementById("locationFeatures").innerHTML = features;
  }