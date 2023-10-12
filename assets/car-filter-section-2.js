const searchBtn = document.getElementById("search-btn");
const currentUrl = document.location;

function populate(s1, s2) {
  var s1 = document.getElementById("slct1");
  var s2 = document.getElementById("slct2");
  s2.removeAttribute("disabled");
  year.removeAttribute("disabled");
  removeBtn();
  s2.innerHTML = "";
  if (s1.value == "Audi") {
    var optionArray = [
      "|--Model--",
      "A3|A3",
      "e-tron|e-tron",
      "Q2|Q2",
      "Q3|Q3",
      "Q4 e-tron|Q4 e-tron",
      "Q5|Q5",
      "Q7|Q7",
      "Q8|Q8,",
    ];
  } else if (s1.value == "BMW") {
    var optionArray = [
      "|--Model--",
      "i4|i4",
      "iX|iX",
      "X1|X1",
      "X1|X2",
      "X1|X3",
      "X1|X4",
      "X1|X5",
      "X1|X6",
      "X1|X7",
    ];
  } else if (s1.value == "Dacia") {
    var optionArray = ["|--Model--", "Duster|Duster"];
  } else if (s1.value == "Dodge") {
    var optionArray = ["|--Model--", "Durango|Durango"];
  } else if (s1.value == "Ford") {
    var optionArray = [
      "|--Model--",
      "Explorer|Explorer",
      "F-150|F-150",
      "Ranger|Ranger",
    ];
  } else if (s1.value == "Hyundai") {
    var optionArray = ["|--Model--", "Tucson|Tucson"];
  } else if (s1.value == "Jaguar") {
    var optionArray = ["|--Model--", "XF|XF"];
  } else if (s1.value == "Jeep") {
    var optionArray = ["|--Model--", "Wrangler|Wrangler"];
  } else if (s1.value == "Land-Rover") {
    var optionArray = [
      "|--Model--",
      "Defender|Defender",
      "Discovery|Discovery",
      "Discovery Sport|Discovery Sport",
      "Ranger Rover Evoque|Ranger Rover Evoque",
      "Velar|Velar",
    ];
  } else if (s1.value == "Mercedes-Benz") {
    var optionArray = [
      "|--Model--",
      "G-Class|G-Class",
      "GLC-Class|GLC-Class",
      "GLE-Class|GLE-Class",
      "V-Class|V-Class",
      "Vito|Vito",
    ];
  } else if (s1.value == "MINI") {
    var optionArray = ["|--Model--", "Countryman|Countryman"];
  } else if (s1.value == "Opel") {
    var optionArray = ["|--Model--", "Grandland|Grandland"];
  } else if (s1.value == "Peugeot") {
    var optionArray = ["|--Model--", "3008|3008"];
  } else if (s1.value == "Porsche") {
    var optionArray = [
      "|--Model--",
      "911 (991)|911 (991)",
      "991 (992)|991 (992)",
      "Cayenne|Cayenne",
      "Macan|Macan",
      "Panamera|Panamera",
      "Taycan|Taycan",
    ];
  } else if (s1.value == "RAM") {
    var optionArray = ["|--Model--", "1500|1500"];
  } else if (s1.value == "Seat") {
    var optionArray = ["|--Model--", "Leon|Leon"];
  } else if (s1.value == "Skoda") {
    var optionArray = ["|--Model--", "Octavia|Octavia"];
  } else if (s1.value == "Subaru") {
    var optionArray = ["|--Model--", "Impreza|Impreza", "Outback|Outback"];
  } else if (s1.value == "Tesla") {
    var optionArray = [
      "|--Model--",
      "Model 3|Model 3",
      "Model Y|Model Y",
      "Model X|Model X",
    ];
  } else if (s1.value == "Toyota") {
    var optionArray = ["|--Model--", "RAV4|RAV4"];
  } else if (s1.value == "Volkswagen") {
    var optionArray = [
      "|--Model--",
      "Golf|Golf",
      "ID.4|ID.4",
      "T-Roc|T-Roc",
      "Tiguan|Tiguan",
    ];
  } else if (s1.value == "Volvo") {
    var optionArray = ["|--Model--", "XC40|XC40", "XC60|XC60", "XC90|XC90"];
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
  searchBtn.href = "";

  var model = document.getElementById("slct2");
  var optionModel = model.options[model.selectedIndex];

  var year = document.getElementById("year");
  var optionYear = year.options[year.selectedIndex];

  document.getElementById("text").value =
    optionMake.text + " " + optionModel.text + " " + optionYear.text;
}

function buildLink() {
  const searchUrl = `https://${currentUrl}/search?filter.p.m.car.make=${slct1.value}&filter.p.m.car.model=${slct2.value}&filter.p.m.car.year=${year.value}&q=${slct1.value}+${slct2.value}+${year.value}`;
  const pathName = currentUrl.pathName;
  const completeUrl = currentUrl + pathName;
  console.log(currentUrl);
  // console.log(
  //   `${currentUrl}+${pathName}/search?filter.p.m.car.make=${slct1.value}&filter.p.m.car.model=${slct2.value}&filter.p.m.car.year=${year.value}&q=${slct1.value}+${slct2.value}+${year.value}`
  // );

  searchBtn.classList.remove("filter-btn-visually-hidden");
  searchBtn.href = searchUrl;
}

function removeBtn() {
  searchBtn.classList.add("filter-btn-visually-hidden");
}
