function populate(s1, s2) {
  var s1 = document.getElementById("slct1");
  var s2 = document.getElementById("slct2");
  s2.innerHTML = "";
  if (s1.value == "Audi") {
    var optionArray = [
      "|--Model--",
      "a3|A3",
      "e-tron|E-tron",
      "q2|Q2",
      "q3|Q3",
      "q4 tron|Q4 tron",
      "q5|Q5",
      "q7|Q7",
      "q8|Q8,",
    ];
  } else if (s1.value == "BMW") {
    var optionArray = [
      "|--Model--",
      "i4|I4",
      "ix|iX",
      "x1|X1",
      "x1|X2",
      "x1|X3",
      "x1|X4",
      "x1|X5",
      "x1|X6",
      "x1|X7",
    ];
  } else if (s1.value == "Dacia") {
    var optionArray = ["|--Model--", "duster|Duster"];
  } else if (s1.value == "Dodge") {
    var optionArray = [
      "|--Model--",
      "avenger|Avenger",
      "challenger|Challenger",
      "charger|Charger",
    ];
  } else if (s1.value == "Ford") {
    var optionArray = [
      "|--Model--",
      "explorer|Explorer",
      "f-150|F-150",
      "ranger|Ranger",
    ];
  } else if (s1.value == "Jaguar") {
    var optionArray = ["|--Model--", "f-pace|F-pace", "xf|XF"];
  } else if (s1.value == "Jeep") {
    var optionArray = ["|--Model--", "wrangler|Wrangler"];
  } else if (s1.value == "Land Rover") {
    var optionArray = [
      "|--Model--",
      "defender|defender",
      "discovery|Discovery",
      "discovery sport|Discovery Sport",
      "ranger rover evoque|Ranger Rover Evoque",
      "velar|Velar",
    ];
  } else if (s1.value == "Mercedes") {
    var optionArray = [
      "|--Model--",
      "g-class|G-Class",
      "glc-class|GLC-Class",
      "gle-class|GLE-Class",
      "v-class|V-Class",
      "vito|Vito",
    ];
  } else if (s1.value == "MINI") {
    var optionArray = [
      "|--Model--",
      "clubman|Clubman",
      "Countryman|Countryman",
    ];
  } else if (s1.value == "Opel") {
    var optionArray = ["|--Model--", "grandland|Grandland"];
  } else if (s1.value == "Peugeot") {
    var optionArray = ["|--Model--", "3008|3008"];
  } else if (s1.value == "Porsche") {
    var optionArray = [
      "|--Model--",
      "991|991",
      "cayenne|Cayenne",
      "macan|Macan",
      "panamera|Panamera",
      "taycan|Taycan",
    ];
  } else if (s1.value == "Seat") {
    var optionArray = ["|--Model--", "leon|Leon"];
  } else if (s1.value == "Skoda") {
    var optionArray = ["|--Model--", "octavia|Octavia"];
  } else if (s1.value == "Subaru") {
    var optionArray = ["|--Model--", "impreza|Impreza", "outback|Outback"];
  } else if (s1.value == "Tesla") {
    var optionArray = ["|--Model--", "model 3|Model 3", "model y|Model Y"];
  } else if (s1.value == "Toyota") {
    var optionArray = ["|--Model--", "rav4|RAV4"];
  } else if (s1.value == "Wolkswagen") {
    var optionArray = [
      "|--Model--",
      "golf|Golf",
      "id.4|ID.4",
      "t-roc|T-roc",
      "tiguan|Tiguan",
    ];
  } else if (s1.value == "Volvo") {
    var optionArray = ["|--Model--", "xc40|XC40", "xc60|XC60", "xc90|xc90"];
  }

  for (var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    s2.options.add(newOption);
  }
}

function update() {
  var make = document.getElementById("slct1");
  var optionMake = make.options[make.selectedIndex];

  var model = document.getElementById("slct2");
  var optionModel = model.options[model.selectedIndex];

  var year = document.getElementById("year");
  var optionYear = year.options[year.selectedIndex];

  document.getElementById("text").value =
    optionMake.text + " " + optionModel.text + " " + optionYear.text;
}
