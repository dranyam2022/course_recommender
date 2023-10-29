function showUniversities() {
  const locationSelect = document.getElementById("location");
  const selectedLocation = locationSelect.value;
  const universitiesList = universitiesData[selectedLocation];
  const universitiesDropdown = document.getElementById("universities-dropdown");

  universitiesDropdown.innerHTML = "";

  const defaultOption = document.createElement("option");
  defaultOption.value = "none";
  defaultOption.textContent = "All Universities available:";
  universitiesDropdown.appendChild(defaultOption);

  if (universitiesList) {
    for (const university of universitiesList) {
      const option = document.createElement("option");
      option.value = university;
      option.textContent = university;
      universitiesDropdown.appendChild(option);
    }
  }

  const modal = document.getElementById("course-modal");
  modal.style.display = "block";
}

const universitiesData = {
  Albay: [
    "University of Santo Tomas - Legazpi",
    "Bicol University",
    "Bicol University - Main Campus - Legazpi City",
    "Bicol University - College of Engineering - Legazpi City",
    "Bicol University - College of Business, Economics, and Management - Legazpi City",
    "Bicol University - College of Education - Legazpi City",
    "Bicol University - College of Nursing - Legazpi City",
    "Bicol University - College of Science - Legazpi City",
    "Bicol University - College of Social Sciences and Philosophy - Legazpi City",
    "Bicol University - Polangui Campus - Polangui",
    "Bicol University - Tabaco Campus - Tabaco City",
    "Bicol University - Guinobatan Campus - Guinobatan",
    "Divine Word College of Legazpi - Legazpi City",
    "Bicol College - Daraga",
    "Ligao Community College - Ligao City",
    "Mariners' Polytechnic Colleges Foundation - Legazpi City",
    "STI College - Legazpi - Legazpi City",
    "Tabaco College - Tabaco City",
    "AMA Computer College - Legazpi - Legazpi City",
    "University of Northeastern Philippines (UNEP) - Iriga City, Camarines Sur (serving parts of Albay)",
  ],
  Camarines_Sur: [
    "Ateneo de Naga University",
    "University of Nueva Caceres",
    "Camarines Sur Polytechnic Colleges",
    "Polytechnic University of the Philippines - Ragay Branch",
    "Alfelor Sr. Memorial College",
    "Central Bicol State University Of Agriculture",
  ],
  Camarines_Norte: [
    "Camarines Norte State College - Labo Campus",
    "AMA Computer College",
    "Bicol Merchant Marine College",
    "Camarines Norte College",
    "Golden West Colleges",
  ],
  Catanduanes: [
    "Catanduanes State University (CSU)",
    "Catanduanes Colleges",
    "Bato Institute of Science and Technology (BIST)",
    "West Catanduanes College",
  ],
  Masbate: [
    "Bicol University College of Fisheries and Aquatic Sciences",
    "Northwestern University Masbate",
  ],
  Sorsogon: [
    "Bicol University College of Agriculture and Forestry",
    "Bicol University College of Education",
    "Bicol University Sorsogon Campus",
    "Divine Word College of Legazpi - Sorsogon Campus",
    "Sorsogon State College",
  ],
};
