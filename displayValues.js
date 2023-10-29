function displaySelectedValues() {
  var genderSelect = document.getElementById("gender");
  var highSchoolAchievementSelect = document.getElementById("achievement");
  var healthStatusSelect = document.getElementById("health-status");
  var socioeconomicStatusSelect = document.getElementById(
    "socioeconomic-status"
  );
  var shsStrandSelect = document.getElementById("shs-strand");
  var peerInfluenceSelect = document.getElementById("peer-influence");
  var locationSelect = document.getElementById("location");
  var careerAspirationSelect = document.getElementById("career-aspiration");
  var academicTermSelect = document.getElementById("academic-term");
  var learningStylePreferenceSelect = document.getElementById(
    "learning-style-preference"
  );
  var skillsHobiesSelect = document.getElementById("skills-hobbies");
  var financialAidOrScholarshipSelect = document.getElementById(
    "financial-aid-or-scholarship"
  );
  var industryRelevanceSelect = document.getElementById("industry-relevance");

  var gender = genderSelect.value;
  var highSchoolAchievement = highSchoolAchievementSelect.value;
  var healthStatus = healthStatusSelect.value;
  var socioeconomicStatus = socioeconomicStatusSelect.value;
  var shsStrand = shsStrandSelect.value;
  var peerInfluence = peerInfluenceSelect.value;
  var location = locationSelect.value;
  var careerAspiration = careerAspirationSelect.value;
  var academicTerm = academicTermSelect.value;
  var learningStylePreference = learningStylePreferenceSelect.value;
  var skillsHobies = skillsHobiesSelect.value;
  var financialAidOrScholarship = financialAidOrScholarshipSelect.value;
  var industryRelevance = industryRelevanceSelect.value;
  var courseRecommendations = {
    "BAH - Bachelor of Arts in History": 0,
    "BAP - Bachelor of Arts in Philosophy": 0,
    "BFA (ID) - Bachelor of Fine Arts Major in Industrial Design": 0,
    "BFA (Painting) - Bachelor of Fine Arts Major in Painting": 0,
    "BFA (Sculpture) - Bachelor of Fine Arts Major in Sculpture": 0,
    "BFA (Visual Comm) - Bachelor of Fine Arts Major in Visual Communication": 0,
    "BAE - Bachelor of Arts in Economics": 0,
    "BSE - Bachelor of Science in Economics": 0,
    "BAPsych - Bachelor of Arts in Psychology": 0,
    "BSPsych - Bachelor of Science in Psychology": 0,
    "BSCrim - Bachelor of Science in Criminology": 0,
    "BSPolSci - Bachelor of Science in Political Science": 0,
    "BAEng - Bachelor of Arts in English": 0,
    "BALing - Bachelor of Arts in Linguistics": 0,
    "BALit - Bachelor of Arts in Literature": 0,
    "BSForensic - Bachelor of Science in Forensic Science": 0,
    "BAIS - Bachelor of Arts in Islamic Studies": 0,
    "BSEnvSci - Bachelor of Science in Environmental Science": 0,
    "BSForestry - Bachelor of Science in Forestry": 0,
    "BSFisheries - Bachelor of Science in Fisheries": 0,
    "BSGeology - Bachelor of Science in Geology": 0,
    "BSBio - Bachelor of Science in Biology": 0,
    "BSMBio - Bachelor of Science in Molecular Biology": 0,
    "BSP - Bachelor of Science in Physics": 0,
    "BSChem - Bachelor of Science in Chemistry": 0,
    "BSCS - Bachelor of Science in Computer Science": 0,
    "BSIT - Bachelor of Science in Information Technology": 0,
    "BSIS - Bachelor of Science in Information Systems": 0,
    "BSMath - Bachelor of Science in Mathematics": 0,
    "BSAMath - Bachelor of Science in Applied Mathematics": 0,
    "BSStat - Bachelor of Science in Statistics": 0,
    "BSAgri - Bachelor of Science in Agriculture": 0,
    "BSAgribus - Bachelor of Science in Agribusiness": 0,
    "BSAgro - Bachelor of Science in Agroforestry": 0,
    "BSArch - Bachelor of Science in Architecture": 0,
    "BSID - Bachelor of Science in Interior Design": 0,
    "BLA - Bachelor in Landscape Architecture": 0,
    "BSA - Bachelor of Science in Accountancy": 0,
    "BSHRM - Bachelor of Science in Human Resource Management": 0,
    "BSAT - Bachelor of Science in Accounting Technology": 0,
    "BSBA - Bachelor of Science in Business Administration": 0,
    "BSBA (BusEcon) - Bachelor of Science in Business Administration Major in Business Economics": 0,
    "BSBA (FinMan) - Bachelor of Science in Business Administration Major in Financial Management": 0,
    "BSBA (HRD) - Bachelor of Science in Business Administration Major in Human Resource Development": 0,
    "BSBA (Mktg) - Bachelor of Science in Business Administration Major in Marketing Management": 0,
    "BSBA (Ops) - Bachelor of Science in Business Administration Major in Operation Management": 0,
    "BSBA (HRM) - Bachelor of Science in Business Administration Major in Hotel and Restaurant Management": 0,
    "BSEntrep - Bachelor of Science in Entrepreneurship": 0,
    "BSOA - Bachelor of Science in Office Administration": 0,
    "BSREM - Bachelor of Science in Real Estate Management": 0,
    "BSTM - Bachelor of Science in Tourism Management": 0,
    "BSMT - Bachelor of Science in Medical Technology": 0,
    "BSMid - Bachelor of Science in Midwifery": 0,
    "BSN - Bachelor of Science in Nursing": 0,
    "BSOT - Bachelor of Science in Occupational Therapy": 0,
    "BSP - Bachelor of Science in Pharmacy": 0,
    "BSPT - Bachelor of Science in Physical Therapy": 0,
    "BSRadTech - Bachelor of Science in Radiologic Technology": 0,
    "BSRT - Bachelor of Science in Respiratory Therapy": 0,
    "BSSLP - Bachelor of Science in Speech Language Pathology": 0,
    "BSSS - Bachelor of Science in Sports Science": 0,
    "BSEd - Bachelor of Science in Secondary Education": 0,
    "BEEd - Bachelor of Elementary Education": 0,
    "BSEd (TLE) - Bachelor of Science in Secondary Education Major in Technology Livelihood Education": 0,
    "BSEd (BioSci) - Bachelor of Science in Secondary Education Major in Biological Sciences": 0,
    "BSEd (English) - Bachelor of Science in Secondary Education Major in English": 0,
    "BSEd (Filipino) - Bachelor of Science in Secondary Education Major in Filipino": 0,
    "BSEd (Math) - Bachelor of Science in Secondary Education Major in Mathematics": 0,
    "BSEd (IS) - Bachelor of Science in Secondary Education Major in Islamic Studies": 0,
    "BSEd (MAPEH) - Bachelor of Science in Secondary Education Major in Music, Arts, Physical and Health Education": 0,
    "BSEd (Physical Sci) - Bachelor of Science in Secondary Education Major in Physical Sciences": 0,
    "BSEd (Social Studies) - Bachelor of Science in Secondary Education Major in Social Studies": 0,
    "BSEd (Values Ed) - Bachelor of Science in Secondary Education Major in Values Education": 0,
    "BEEd (Preschool) - Bachelor of Elementary Education Major in Preschool Education": 0,
    "BLIS - Bachelor of Library and Information Science in the Philippines": 0,
    "BPE - Bachelor of Physical Education": 0,
    "BSAeroE - Bachelor of Science in Aeronautical Engineering": 0,
    "BSCerE - Bachelor of Science in Ceramic Engineering": 0,
    "BSChE - Bachelor of Science in Chemical Engineering": 0,
    "BSCE - Bachelor of Science in Civil Engineering": 0,
    "BSCoE - Bachelor of Science in Computer Engineering": 0,
    "BSECE - Bachelor of Science in Electrical Engineering": 0,
    "BSECE - Bachelor of Science in Electronics and Communication Engineering": 0,
    "BSGE - Bachelor of Science in Geodetic Engineering": 0,
    "BSGeoE - Bachelor of Science in Geological Engineering": 0,
    "BSIE - Bachelor of Science in Industrial Engineering": 0,
    "BSMA - Bachelor of Science in Management Accounting (BSMA)": 0,
    "BSMarE - Bachelor of Science in Marine Engineering": 0,
    "BSMatE - Bachelor of Science in Materials Engineering": 0,
    "BSME - Bachelor of Science in Mechanical Engineering": 0,
    "BSMetE - Bachelor of Science in Metallurgical Engineering": 0,
    "BSMinE - Bachelor of Science in Mining Engineering": 0,
    "BSPetE - Bachelor of Science in Petroleum Engineering": 0,
    "BSSanE - Bachelor of Science in Sanitary Engineering": 0,
    "BABroadcast - Bachelor of Arts in Broadcasting": 0,
    "BAComm - Bachelor of Arts in Communication": 0,
    "BADevComm - Bachelor of Arts in Development Communication": 0,
    "BAMassComm - Bachelor of Arts in Mass Communication": 0,
    "BAJourn - Bachelor of Arts in Journalism": 0,
    "BSCD - Bachelor of Science in Community Development": 0,
    "BSCustoms - Bachelor of Science in Customs Administration": 0,
    "BSFS - Bachelor of Science in Foreign Service": 0,
    "BSIS - Bachelor of Science in International Studies": 0,
    "BSPublicSafety - Bachelor of Science in Public Safety": 0,
    "BSSW - Bachelor of Science in Social Work": 0,
    "BPA - Bachelor of Public Administration": 0,
    "BSMT - Bachelor of Science in Marine Transportation": 0,
    "BSFoodTech - Bachelor of Science in Food Technology": 0,
    "BSNutriDiet - Bachelor of Science in Nutrition and Dietetics": 0,
  };

  if (gender === "male" || gender === "female") {
    for (var course in courseRecommendations) {
      courseRecommendations[course] += 3.8;
    }
  }

  if (
    highSchoolAchievement === "whhonor" ||
    highSchoolAchievement === "hhonor" ||
    highSchoolAchievement === "honor" ||
    highSchoolAchievement === "Nhonor"
  ) {
    for (var course in courseRecommendations) {
      courseRecommendations[course] += 3.8;
    }
  }

  if (
    healthStatus === "excellent" ||
    healthStatus === "good" ||
    healthStatus === "fair" ||
    healthStatus === "poor" ||
    healthStatus === "critical"
  ) {
    for (var course in courseRecommendations) {
      courseRecommendations[course] += 3.8;
    }
  }

  if (
    socioeconomicStatus === "Upper" ||
    socioeconomicStatus === "Upper Middle" ||
    socioeconomicStatus === "Lower Middle" ||
    socioeconomicStatus === "Upper Lower" ||
    socioeconomicStatus === "Lower"
  ) {
    for (var course in courseRecommendations) {
      courseRecommendations[course] += 3.8;
    }
  }

  if (shsStrand === "GAS") {
    for (var course in courseRecommendations) {
      courseRecommendations[course] += 7.9;
    }
  } else if (shsStrand === "ABM") {
    courseRecommendations["BSA - Bachelor of Science in Accountancy"] += 7.9;
    courseRecommendations[
      "BSBA - Bachelor of Science in Business Administration"
    ] += 7.9;
    courseRecommendations[
      "BSBA (FinMan) - Bachelor of Science in Business Administration Major in Financial Management"
    ] += 7.9;
    courseRecommendations[
      "BSMA - Bachelor of Science in Management Accounting (BSMA)"
    ] += 7.9;
    courseRecommendations["BSE - Bachelor of Science in Economics"] += 7.9;
    courseRecommendations[
      "BSEntrep - Bachelor of Science in Entrepreneurship"
    ] += 7.9;
    courseRecommendations[
      "BSBA (Mktg) - Bachelor of Science in Business Administration Major in Marketing Management"
    ] += 7.9;
    courseRecommendations[
      "BSHRM - Bachelor of Science in Human Resource Management"
    ] += 7.9;
    courseRecommendations[
      "BSIT - Bachelor of Science in Information Technology"
    ] += 7.9;
    courseRecommendations[
      "BSIS - Bachelor of Science in Information Systems"
    ] += 7.9;
    courseRecommendations[
      "BSCS - Bachelor of Science in Computer Science"
    ] += 7.9;
    courseRecommendations["BPA - Bachelor of Public Administration"] += 7.9;
    courseRecommendations[
      "BSCustoms - Bachelor of Science in Customs Administration"
    ] += 7.9;
    courseRecommendations[
      "BSFoodTech - Bachelor of Science in Food Technology"
    ] += 7.9;
  } else if (shsStrand === "STEM") {
    courseRecommendations[
      "BSAeroE - Bachelor of Science in Aeronautical Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSCerE - Bachelor of Science in Ceramic Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSChE - Bachelor of Science in Chemical Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSCE - Bachelor of Science in Civil Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSCoE - Bachelor of Science in Computer Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSECE - Bachelor of Science in Electrical Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSECE - Bachelor of Science in Electronics and Communication Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSGE - Bachelor of Science in Geodetic Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSGeoE - Bachelor of Science in Geological Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSIE - Bachelor of Science in Industrial Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSMA - Bachelor of Science in Management Accounting (BSMA)"
    ] += 7.9;
    courseRecommendations[
      "BSMarE - Bachelor of Science in Marine Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSMatE - Bachelor of Science in Materials Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSME - Bachelor of Science in Mechanical Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSMetE - Bachelor of Science in Metallurgical Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSMinE - Bachelor of Science in Mining Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSPetE - Bachelor of Science in Petroleum Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSSanE - Bachelor of Science in Sanitary Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSCS - Bachelor of Science in Computer Science"
    ] += 7.9;
    courseRecommendations[
      "BSIT - Bachelor of Science in Information Technology"
    ] += 7.9;
    courseRecommendations["BSP - Bachelor of Science in Physics"] += 7.9;
    courseRecommendations["BSChem - Bachelor of Science in Chemistry"] += 7.9;
    courseRecommendations[
      "BSEnvSci - Bachelor of Science in Environmental Science"
    ] += 7.9;
  } else if (shsStrand === "HUMMS") {
    courseRecommendations["BAPsych - Bachelor of Arts in Psychology"] += 7.9;
    courseRecommendations["BSPsych - Bachelor of Science in Psychology"] += 7.9;
    courseRecommendations["BAP - Bachelor of Arts in Philosophy"] += 7.9;
    courseRecommendations[
      "BSPolSci - Bachelor of Science in Political Science"
    ] += 7.9;
    courseRecommendations["BAH - Bachelor of Arts in History"] += 7.9;
    courseRecommendations[
      "BAMassComm - Bachelor of Arts in Mass Communication"
    ] += 7.9;
    courseRecommendations["BSSW - Bachelor of Science in Social Work"] += 7.9;
  } else if (shsStrand === "TVL-AF") {
    courseRecommendations[
      "BSFisheries - Bachelor of Science in Fisheries"
    ] += 7.9;
    courseRecommendations[
      "BSEnvSci - Bachelor of Science in Environmental Science"
    ] += 7.9;
    courseRecommendations[
      "BSFoodTech - Bachelor of Science in Food Technology"
    ] += 7.9;
    courseRecommendations[
      "BSForestry - Bachelor of Science in Forestry"
    ] += 7.9;
  } else if (shsStrand === "TVL-HE") {
    courseRecommendations[
      "BSFoodTech - Bachelor of Science in Food Technology"
    ] += 7.9;
    courseRecommendations[
      "BSNutriDiet - Bachelor of Science in Nutrition and Dietetics"
    ] += 7.9;
    courseRecommendations[
      "BSBA (HRM) - Bachelor of Science in Business Administration Major in Hotel and Restaurant Management"
    ] += 7.9;
    courseRecommendations[
      "BSID - Bachelor of Science in Interior Design"
    ] += 7.9;
  } else if (shsStrand === "TVL-ICT") {
    courseRecommendations[
      "BSIT - Bachelor of Science in Information Technology"
    ] += 7.9;
    courseRecommendations[
      "BSCS - Bachelor of Science in Computer Science"
    ] += 7.9;
    courseRecommendations[
      "BSIS - Bachelor of Science in Information Systems"
    ] += 7.9;
    courseRecommendations[
      "BSCoE - Bachelor of Science in Computer Engineering"
    ] += 7.9;
  }
  if (
    peerInfluence === "positive" ||
    peerInfluence === "neutral" ||
    peerInfluence === "negative"
  ) {
    for (var course in courseRecommendations) {
      courseRecommendations[course] += 3.8;
    }
  }

  if (location === "Albay") {
    courseRecommendations[
      "BSBA - Bachelor of Science in Business Administration"
    ] += 39.4;
    courseRecommendations[
      "BSBA (BusEcon) - Bachelor of Science in Business Administration Major in Business Economics"
    ] += 39.4;
    courseRecommendations[
      "BSBA (FinMan) - Bachelor of Science in Business Administration Major in Financial Management"
    ] += 39.4;
    courseRecommendations[
      "BSBA (HRD) - Bachelor of Science in Business Administration Major in Human Resource Development"
    ] += 39.4;
    courseRecommendations[
      "BSBA (Mktg) - Bachelor of Science in Business Administration Major in Marketing Management"
    ] += 39.4;
    courseRecommendations[
      "BSBA (Ops) - Bachelor of Science in Business Administration Major in Operation Management"
    ] += 4;
    courseRecommendations[
      "BSBA (HRM) - Bachelor of Science in Business Administration Major in Hotel and Restaurant Management"
    ] += 39.4;
    courseRecommendations["BEEd - Bachelor of Elementary Education"] += 39.4;
    courseRecommendations[
      "BEEd (Preschool) - Bachelor of Elementary Education Major in Preschool Education"
    ] += 39.4;
    courseRecommendations[
      "BSEd - Bachelor of Science in Secondary Education"
    ] += 39.4;
    courseRecommendations[
      "BSEd (TLE) - Bachelor of Science in Secondary Education Major in Technology Livelihood Education"
    ] += 39.4;
    courseRecommendations[
      "BSEd (BioSci) - Bachelor of Science in Secondary Education Major in Biological Sciences"
    ] += 39.4;
    courseRecommendations[
      "BSEd (English) - Bachelor of Science in Secondary Education Major in English"
    ] += 39.4;
    courseRecommendations[
      "BSEd (Filipino) - Bachelor of Science in Secondary Education Major in Filipino"
    ] += 39.4;
    courseRecommendations[
      "BSEd (Math) - Bachelor of Science in Secondary Education Major in Mathematics"
    ] += 39.4;
    courseRecommendations[
      "BSEd (IS) - Bachelor of Science in Secondary Education Major in Islamic Studies"
    ] += 39.4;
    courseRecommendations[
      "BSEd (MAPEH) - Bachelor of Science in Secondary Education Major in Music, Arts, Physical and Health Education"
    ] += 39.4;
    courseRecommendations[
      "BSEd (Physical Sci) - Bachelor of Science in Secondary Education Major in Physical Sciences"
    ] += 39.4;
    courseRecommendations[
      "BSEd (Social Studies) - Bachelor of Science in Secondary Education Major in Social Studies"
    ] += 39.4;
    courseRecommendations[
      "BSEd (Values Ed) - Bachelor of Science in Secondary Education Major in Values Education"
    ] += 39.4;
    courseRecommendations["BSN - Bachelor of Science in Nursing"] += 39.4;
    courseRecommendations[
      "BSCE - Bachelor of Science in Civil Engineering"
    ] += 39.4;
    courseRecommendations[
      "BSME - Bachelor of Science in Mechanical Engineering"
    ] += 39.4;
    courseRecommendations[
      "BSECE - Bachelor of Science in Electrical Engineering"
    ] += 39.4;
    courseRecommendations[
      "BSIT - Bachelor of Science in Information Technology"
    ] += 39.4;
    courseRecommendations[
      "BSCS - Bachelor of Science in Computer Science"
    ] += 39.4;
    courseRecommendations[
      "BSCrim - Bachelor of Science in Criminology"
    ] += 39.4;
    courseRecommendations["BSA - Bachelor of Science in Accountancy"] += 39.4;
    courseRecommendations["BAPsych - Bachelor of Arts in Psychology"] += 39.4;
    courseRecommendations[
      "BSAgri - Bachelor of Science in Agriculture"
    ] += 39.4;
    courseRecommendations[
      "BSFisheries - Bachelor of Science in Fisheries"
    ] += 39.4;
    courseRecommendations[
      "BFA (ID) - Bachelor of Fine Arts Major in Industrial Design"
    ] += 39.4;
    courseRecommendations[
      "BFA (Painting) - Bachelor of Fine Arts Major in Painting"
    ] += 39.4;
    courseRecommendations[
      "BFA (Sculpture) - Bachelor of Fine Arts Major in Sculpture"
    ] += 39.4;
    courseRecommendations[
      "BFA (Visual Comm) - Bachelor of Fine Arts Major in Visual Communication"
    ] += 39.4;
    courseRecommendations["BAComm - Bachelor of Arts in Communication"] += 39.4;
  } else if (location === "Camarines_Sur") {
    courseRecommendations["BSA - Bachelor of Science in Accountancy"] += 39.4;
    courseRecommendations[
      "BSBA - Bachelor of Science in Business Administration"
    ] += 39.4;
    courseRecommendations[
      "BSBA (BusEcon) - Bachelor of Science in Business Administration Major in Business Economics"
    ] += 39.4;
    courseRecommendations[
      "BSBA (FinMan) - Bachelor of Science in Business Administration Major in Financial Management"
    ] += 39.4;
    courseRecommendations[
      "BSBA (HRD) - Bachelor of Science in Business Administration Major in Human Resource Development"
    ] += 39.4;
    courseRecommendations[
      "BSBA (Mktg) - Bachelor of Science in Business Administration Major in Marketing Management"
    ] += 39.4;
    courseRecommendations[
      "BSBA (Ops) - Bachelor of Science in Business Administration Major in Operation Management"
    ] += 4;
    courseRecommendations[
      "BSBA (HRM) - Bachelor of Science in Business Administration Major in Hotel and Restaurant Management"
    ] += 39.4;
    courseRecommendations["BPE - Bachelor of Physical Education"] += 39.4;
    courseRecommendations["BEEd - Bachelor of Elementary Education"] += 39.4;
    courseRecommendations[
      "BEEd (Preschool) - Bachelor of Elementary Education Major in Preschool Education"
    ] += 39.4;
    courseRecommendations[
      "BSEd - Bachelor of Science in Secondary Education"
    ] += 39.4;
    courseRecommendations[
      "BSEd (TLE) - Bachelor of Science in Secondary Education Major in Technology Livelihood Education"
    ] += 39.4;
    courseRecommendations[
      "BSEd (BioSci) - Bachelor of Science in Secondary Education Major in Biological Sciences"
    ] += 39.4;
    courseRecommendations[
      "BSEd (English) - Bachelor of Science in Secondary Education Major in English"
    ] += 39.4;
    courseRecommendations[
      "BSEd (Filipino) - Bachelor of Science in Secondary Education Major in Filipino"
    ] += 39.4;
    courseRecommendations[
      "BSEd (Math) - Bachelor of Science in Secondary Education Major in Mathematics"
    ] += 39.4;
    courseRecommendations[
      "BSEd (IS) - Bachelor of Science in Secondary Education Major in Islamic Studies"
    ] += 39.4;
    courseRecommendations[
      "BSEd (MAPEH) - Bachelor of Science in Secondary Education Major in Music, Arts, Physical and Health Education"
    ] += 39.4;
    courseRecommendations[
      "BSEd (Physical Sci) - Bachelor of Science in Secondary Education Major in Physical Sciences"
    ] += 39.4;
    courseRecommendations[
      "BSEd (Social Studies) - Bachelor of Science in Secondary Education Major in Social Studies"
    ] += 39.4;
    courseRecommendations[
      "BSEd (Values Ed) - Bachelor of Science in Secondary Education Major in Values Education"
    ] += 39.4;
    courseRecommendations["BSN - Bachelor of Science in Nursing"] += 39.4;
    courseRecommendations[
      "BSIT - Bachelor of Science in Information Technology"
    ] += 39.4;
    courseRecommendations[
      "BSCS - Bachelor of Science in Computer Science"
    ] += 39.4;
    courseRecommendations[
      "BSCrim - Bachelor of Science in Criminology"
    ] += 39.4;
    courseRecommendations["BAPsych - Bachelor of Arts in Psychology"] += 39.4;
    courseRecommendations[
      "BSCE - Bachelor of Science in Civil Engineering"
    ] += 39.4;
    courseRecommendations["BAComm - Bachelor of Arts in Communication"] += 39.4;
    courseRecommendations[
      "BSOA - Bachelor of Science in Office Administration"
    ] += 39.4;
  } else if (location === "Camarines_Norte") {
    courseRecommendations[
      "BSBA - Bachelor of Science in Business Administration"
    ] += 39.4;
    courseRecommendations[
      "BSBA (BusEcon) - Bachelor of Science in Business Administration Major in Business Economics"
    ] += 39.4;
    courseRecommendations[
      "BSBA (FinMan) - Bachelor of Science in Business Administration Major in Financial Management"
    ] += 39.4;
    courseRecommendations[
      "BSBA (HRD) - Bachelor of Science in Business Administration Major in Human Resource Development"
    ] += 39.4;
    courseRecommendations[
      "BSBA (Mktg) - Bachelor of Science in Business Administration Major in Marketing Management"
    ] += 39.4;
    courseRecommendations[
      "BSBA (Ops) - Bachelor of Science in Business Administration Major in Operation Management"
    ] += 4;
    courseRecommendations[
      "BSBA (HRM) - Bachelor of Science in Business Administration Major in Hotel and Restaurant Management"
    ] += 39.4;
    courseRecommendations[
      "BSIT - Bachelor of Science in Information Technology"
    ] += 39.4;
    courseRecommendations["BSA - Bachelor of Science in Accountancy"] += 39.4;
    courseRecommendations[
      "BSCE - Bachelor of Science in Civil Engineering"
    ] += 39.4;
    courseRecommendations[
      "BSECE - Bachelor of Science in Electrical Engineering"
    ] += 39.4;
    courseRecommendations[
      "BSME - Bachelor of Science in Mechanical Engineering"
    ] += 39.4;
    courseRecommendations[
      "BSOA - Bachelor of Science in Office Administration"
    ] += 39.4;
    courseRecommendations[
      "BSEntrep - Bachelor of Science in Entrepreneurship"
    ] += 39.4;
    courseRecommendations[
      "BSAgri - Bachelor of Science in Agriculture"
    ] += 39.4;
    courseRecommendations["BEEd - Bachelor of Elementary Education"] += 39.4;
    courseRecommendations[
      "BSEd - Bachelor of Science in Secondary Education"
    ] += 39.4;
    courseRecommendations[
      "BSFisheries - Bachelor of Science in Fisheries"
    ] += 39.4;
  } else if (location === "Catanduanes") {
    courseRecommendations[
      "BSBA - Bachelor of Science in Business Administration"
    ] += 39.4;
    courseRecommendations[
      "BSIT - Bachelor of Science in Information Technology"
    ] += 39.4;
    courseRecommendations["BEEd - Bachelor of Elementary Education"] += 39.4;
    courseRecommendations[
      "BSEd - Bachelor of Science in Secondary Education"
    ] += 39.4;
    courseRecommendations["BSA - Bachelor of Science in Accountancy"] += 39.4;
    courseRecommendations[
      "BSCE - Bachelor of Science in Civil Engineering"
    ] += 39.4;
    courseRecommendations["BSN - Bachelor of Science in Nursing"] += 39.4;
    courseRecommendations[
      "BSAgri - Bachelor of Science in Agriculture"
    ] += 39.4;
    courseRecommendations[
      "BEEd (Preschool) - Bachelor of Elementary Education Major in Preschool Education"
    ] += 39.4;
  } else if (location === "Masbate") {
    courseRecommendations["BEEd - Bachelor of Elementary Education"] += 39.4;
    courseRecommendations[
      "BEEd (Preschool) - Bachelor of Elementary Education Major in Preschool Education"
    ] += 39.4;
    courseRecommendations[
      "BSEd - Bachelor of Science in Secondary Education"
    ] += 39.4;
    courseRecommendations[
      "BSCrim - Bachelor of Science in Criminology"
    ] += 39.4;
    courseRecommendations[
      "BSCS - Bachelor of Science in Computer Science"
    ] += 39.4;
    courseRecommendations["BSA - Bachelor of Science in Accountancy"] += 39.4;
    courseRecommendations[
      "BSECE - Bachelor of Science in Electronics and Communication Engineering"
    ] += 39.4;
    courseRecommendations[
      "BSAgri - Bachelor of Science in Agriculture"
    ] += 39.4;
  } else if (location === "Sorsogon") {
    courseRecommendations[
      "BSIT - Bachelor of Science in Information Technology"
    ] += 39.4;
    courseRecommendations["BEEd - Bachelor of Elementary Education"] += 39.4;
    courseRecommendations[
      "BEEd (Preschool) - Bachelor of Elementary Education Major in Preschool Education"
    ] += 39.4;
    courseRecommendations[
      "BSCS - Bachelor of Science in Computer Science"
    ] += 39.4;
    courseRecommendations[
      "BSECE - Bachelor of Science in Electronics and Communication Engineering"
    ] += 39.4;
    courseRecommendations[
      "BSOA - Bachelor of Science in Office Administration"
    ] += 39.4;
    courseRecommendations[
      "BSPolSci - Bachelor of Science in Political Science"
    ] += 39.4;
    courseRecommendations["BSA - Bachelor of Science in Accountancy"] += 39.4;
    courseRecommendations[
      "BSCE - Bachelor of Science in Civil Engineering"
    ] += 39.4;
    courseRecommendations[
      "BSECE - Bachelor of Science in Electrical Engineering"
    ] += 39.4;
    courseRecommendations[
      "BSME - Bachelor of Science in Mechanical Engineering"
    ] += 39.4;
    courseRecommendations[
      "BSArch - Bachelor of Science in Architecture"
    ] += 39.4;
    courseRecommendations[
      "BSFoodTech - Bachelor of Science in Food Technology"
    ] += 39.4;
    courseRecommendations[
      "BSAT - Bachelor of Science in Accounting Technology"
    ] += 39.4;
    courseRecommendations[
      "BSMT - Bachelor of Science in Medical Technology"
    ] += 39.4;
    courseRecommendations[
      "BSRadTech - Bachelor of Science in Radiologic Technology"
    ] += 39.4;
    courseRecommendations[
      "BSEntrep - Bachelor of Science in Entrepreneurship"
    ] += 39.4;
    courseRecommendations["BPA - Bachelor of Public Administration"] += 39.4;
    courseRecommendations[
      "BSFisheries - Bachelor of Science in Fisheries"
    ] += 39.4;
  }

  if (careerAspiration === "engineering") {
    courseRecommendations[
      "BSAeroE - Bachelor of Science in Aeronautical Engineering"
    ] += 7.1;
    courseRecommendations[
      "BSCerE - Bachelor of Science in Ceramic Engineering"
    ] += 7.1;
    courseRecommendations[
      "BSChE - Bachelor of Science in Chemical Engineering"
    ] += 7.1;
    courseRecommendations[
      "BSCE - Bachelor of Science in Civil Engineering"
    ] += 7.1;
    courseRecommendations[
      "BSCoE - Bachelor of Science in Computer Engineering"
    ] += 7.1;
    courseRecommendations[
      "BSECE - Bachelor of Science in Electrical Engineering"
    ] += 7.1;
    courseRecommendations[
      "BSECE - Bachelor of Science in Electronics and Communication Engineering"
    ] += 7.1;
    courseRecommendations[
      "BSGE - Bachelor of Science in Geodetic Engineering"
    ] += 7.1;
    courseRecommendations[
      "BSGeoE - Bachelor of Science in Geological Engineering"
    ] += 7.1;
    courseRecommendations[
      "BSIE - Bachelor of Science in Industrial Engineering"
    ] += 7.1;
    courseRecommendations[
      "BSMA - Bachelor of Science in Management Accounting (BSMA)"
    ] += 7.1;
    courseRecommendations[
      "BSMarE - Bachelor of Science in Marine Engineering"
    ] += 7.1;
    courseRecommendations[
      "BSMatE - Bachelor of Science in Materials Engineering"
    ] += 7.1;
    courseRecommendations[
      "BSME - Bachelor of Science in Mechanical Engineering"
    ] += 7.1;
    courseRecommendations[
      "BSMetE - Bachelor of Science in Metallurgical Engineering"
    ] += 7.1;
    courseRecommendations[
      "BSMinE - Bachelor of Science in Mining Engineering"
    ] += 7.1;
    courseRecommendations[
      "BSPetE - Bachelor of Science in Petroleum Engineering"
    ] += 7.1;
    courseRecommendations[
      "BSSanE - Bachelor of Science in Sanitary Engineering"
    ] += 7.1;
  } else if (careerAspiration === "education") {
    courseRecommendations["BPE - Bachelor of Physical Education"] += 7.1;
    courseRecommendations["BEEd - Bachelor of Elementary Education"] += 7.1;
    courseRecommendations[
      "BEEd (Preschool) - Bachelor of Elementary Education Major in Preschool Education"
    ] += 7.1;
    courseRecommendations[
      "BSEd - Bachelor of Science in Secondary Education"
    ] += 7.1;
    courseRecommendations[
      "BSEd (TLE) - Bachelor of Science in Secondary Education Major in Technology Livelihood Education"
    ] += 7.1;
    courseRecommendations[
      "BSEd (BioSci) - Bachelor of Science in Secondary Education Major in Biological Sciences"
    ] += 7.1;
    courseRecommendations[
      "BSEd (English) - Bachelor of Science in Secondary Education Major in English"
    ] += 7.1;
    courseRecommendations[
      "BSEd (Filipino) - Bachelor of Science in Secondary Education Major in Filipino"
    ] += 7.1;
    courseRecommendations[
      "BSEd (Math) - Bachelor of Science in Secondary Education Major in Mathematics"
    ] += 7.1;
    courseRecommendations[
      "BSEd (IS) - Bachelor of Science in Secondary Education Major in Islamic Studies"
    ] += 7.1;
    courseRecommendations[
      "BSEd (MAPEH) - Bachelor of Science in Secondary Education Major in Music, Arts, Physical and Health Education"
    ] += 7.1;
    courseRecommendations[
      "BSEd (Physical Sci) - Bachelor of Science in Secondary Education Major in Physical Sciences"
    ] += 7.1;
    courseRecommendations[
      "BSEd (Social Studies) - Bachelor of Science in Secondary Education Major in Social Studies"
    ] += 7.1;
    courseRecommendations[
      "BSEd (Values Ed) - Bachelor of Science in Secondary Education Major in Values Education"
    ] += 7.1;
  } else if (careerAspiration === "technology") {
    courseRecommendations[
      "BSCS - Bachelor of Science in Computer Science"
    ] += 7.1;
    courseRecommendations[
      "BSIT - Bachelor of Science in Information Technology"
    ] += 7.1;
    courseRecommendations[
      "BSECE - Bachelor of Science in Electronics and Communication Engineering"
    ] += 7.1;
    courseRecommendations[
      "BSCoE - Bachelor of Science in Computer Engineering"
    ] += 7.1;
    courseRecommendations[
      "BSSE - Bachelor of Science in Software Engineering"
    ] += 7.1;
    courseRecommendations[
      "BSDataSci - Bachelor of Science in Data Science"
    ] += 7.1;
  } else if (careerAspiration === "business") {
    courseRecommendations[
      "BSBA - Bachelor of Science in Business Administration"
    ] += 7.1;
    courseRecommendations[
      "BSBA (BusEcon) - Bachelor of Science in Business Administration Major in Business Economics"
    ] += 7.1;
    courseRecommendations[
      "BSBA (FinMan) - Bachelor of Science in Business Administration Major in Financial Management"
    ] += 7.1;
    courseRecommendations[
      "BSBA (HRD) - Bachelor of Science in Business Administration Major in Human Resource Development"
    ] += 7.1;
    courseRecommendations[
      "BSBA (Mktg) - Bachelor of Science in Business Administration Major in Marketing Management"
    ] += 7.1;
    courseRecommendations[
      "BSBA (Ops) - Bachelor of Science in Business Administration Major in Operation Management"
    ] += 7.1;
    courseRecommendations[
      "BSBA (HRM) - Bachelor of Science in Business Administration Major in Hotel and Restaurant Management"
    ] += 7.1;
    courseRecommendations[
      "BSEntrep - Bachelor of Science in Entrepreneurship"
    ] += 7.1;
  } else if (careerAspiration === "arts") {
    courseRecommendations["BAH - Bachelor of Arts in History"] += 7.1;
    courseRecommendations["BAP - Bachelor of Arts in Philosophy"] += 7.1;
    courseRecommendations[
      "BFA (ID) - Bachelor of Fine Arts Major in Industrial Design"
    ] += 7.1;
    courseRecommendations[
      "BFA (Painting) - Bachelor of Fine Arts Major in Painting"
    ] += 7.1;
    courseRecommendations[
      "BFA (Sculpture) - Bachelor of Fine Arts Major in Sculpture"
    ] += 7.1;
    courseRecommendations[
      "BFA (Visual Comm) - Bachelor of Fine Arts Major in Visual Communication"
    ] += 7.1;
  } else if (careerAspiration === "medicine") {
    courseRecommendations[
      "BSMT - Bachelor of Science in Medical Technology"
    ] += 7.1;
    courseRecommendations["BSMid - Bachelor of Science in Midwifery"] += 7.1;
    courseRecommendations["BSN - Bachelor of Science in Nursing"] += 7.1;
    courseRecommendations[
      "BSOT - Bachelor of Science in Occupational Therapy"
    ] += 7.1;
    courseRecommendations["BSP - Bachelor of Science in Pharmacy"] += 7.1;
    courseRecommendations[
      "BSPT - Bachelor of Science in Physical Therapy"
    ] += 7.1;
    courseRecommendations[
      "BSRadTech - Bachelor of Science in Radiologic Technology"
    ] += 7.1;
    courseRecommendations[
      "BSRT - Bachelor of Science in Respiratory Therapy"
    ] += 7.1;
    courseRecommendations[
      "BSSLP - Bachelor of Science in Speech Language Pathology"
    ] += 7.1;
  }

  if (
    academicTerm === "2years" ||
    academicTerm === "3years" ||
    academicTerm === "4years" ||
    academicTerm === "5years"
  ) {
    for (var course in courseRecommendations) {
      courseRecommendations[course] += 3.8;
    }
  }

  if (
    learningStylePreference === "visual" ||
    learningStylePreference === "auditory" ||
    learningStylePreference === "reading-writing" ||
    learningStylePreference === "kinesthetic"
  ) {
    for (var course in courseRecommendations) {
      courseRecommendations[course] += 3.8;
    }
  }

  if (skillsHobies === "technical-skills") {
    courseRecommendations[
      "BSCS - Bachelor of Science in Computer Science"
    ] += 7.9;
    courseRecommendations[
      "BSIT - Bachelor of Science in Information Technology"
    ] += 7.9;
    courseRecommendations[
      "BSSE - Bachelor of Science in Software Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSIS - Bachelor of Science in Information Systems"
    ] += 7.9;
    courseRecommendations[
      "BSAeroE - Bachelor of Science in Aeronautical Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSCerE - Bachelor of Science in Ceramic Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSChE - Bachelor of Science in Chemical Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSCE - Bachelor of Science in Civil Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSCoE - Bachelor of Science in Computer Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSECE - Bachelor of Science in Electrical Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSECE - Bachelor of Science in Electronics and Communication Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSGE - Bachelor of Science in Geodetic Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSGeoE - Bachelor of Science in Geological Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSIE - Bachelor of Science in Industrial Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSMarE - Bachelor of Science in Marine Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSMatE - Bachelor of Science in Materials Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSME - Bachelor of Science in Mechanical Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSMetE - Bachelor of Science in Metallurgical Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSMinE - Bachelor of Science in Mining Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSPetE - Bachelor of Science in Petroleum Engineering"
    ] += 7.9;
    courseRecommendations[
      "BSSanE - Bachelor of Science in Sanitary Engineering"
    ] += 7.9;
  } else if (skillsHobies === "creative-skills") {
    courseRecommendations[
      "BFA (Painting) - Bachelor of Fine Arts Major in Painting"
    ] += 7.9;
    courseRecommendations["BALit - Bachelor of Arts in Literature"] += 7.9;
    courseRecommendations["BAEng - Bachelor of Arts in English"] += 7.9;
    courseRecommendations["BAJourn - Bachelor of Arts in Journalism"] += 7.9;
    courseRecommendations[
      "BABroadcast - Bachelor of Arts in Broadcasting"
    ] += 7.9;
    courseRecommendations["BAComm - Bachelor of Arts in Communication"] += 7.9;
    courseRecommendations[
      "BADevComm - Bachelor of Arts in Development Communication"
    ] += 7.9;
    courseRecommendations[
      "BAMassComm - Bachelor of Arts in Mass Communication"
    ] += 7.9;
    courseRecommendations[
      "BLIS - Bachelor of Library and Information Science"
    ] += 7.9;
    courseRecommendations[
      "BSEd (MAPEH) - Bachelor of Science in Secondary Education Major in Music, Arts, Physical and Health Education"
    ] += 7.9;
    courseRecommendations["BPE - Bachelor of Physical Education"] += 7.9;
  } else if (skillsHobies === "sports") {
    courseRecommendations[
      "BSSS - Bachelor of Science in Sports Science"
    ] += 7.9;
    courseRecommendations["BPE - Bachelor of Physical Education"] += 7.9;
    courseRecommendations[
      "BSCD - Bachelor of Science in Community Development"
    ] += 7.9;
    courseRecommendations[
      "BSMT - Bachelor of Science in Marine Transportation"
    ] += 7.9;
    courseRecommendations[
      "BSCustoms - Bachelor of Science in Customs Administration"
    ] += 7.9;
    courseRecommendations[
      "BSFS - Bachelor of Science in Foreign Service"
    ] += 7.9;
    courseRecommendations[
      "BSPublicSafety - Bachelor of Science in Public Safety"
    ] += 7.9;
    courseRecommendations["BSCrim - Bachelor of Science in Criminology"] += 7.9;
    courseRecommendations["BSSW - Bachelor of Science in Social Work"] += 7.9;
  } else if (skillsHobies === "musical-talents") {
    courseRecommendations["BAJourn - Bachelor of Arts in Journalism"] += 7.9;
    courseRecommendations["BAComm - Bachelor of Arts in Communication"] += 7.9;
    courseRecommendations["BAJourn - Bachelor of Arts in Journalism"] += 7.9;
    courseRecommendations["BAEng - Bachelor of Arts in English"] += 7.9;
    courseRecommendations[
      "BSEd (MAPEH) - Bachelor of Science in Secondary Education Major in Music, Arts, Physical and Health Education"
    ] += 7.9;
    courseRecommendations[
      "BSSLP - Bachelor of Science in Speech Language Pathology"
    ] += 7.9;
    courseRecommendations["BPA - Bachelor of Public Administration"] += 7.9;
  } else if (skillsHobies === "communication-skills") {
    courseRecommendations["BAComm - Bachelor of Arts in Communication"] += 7.9;
    courseRecommendations["BAJourn - Bachelor of Arts in Journalism"] += 7.9;
    courseRecommendations[
      "BADevComm - Bachelor of Arts in Development Communication"
    ] += 7.9;
    courseRecommendations[
      "BAMassComm - Bachelor of Arts in Mass Communication"
    ] += 7.9;
    courseRecommendations["BAEng - Bachelor of Arts in English"] += 7.9;
    courseRecommendations[
      "BSPublicSafety - Bachelor of Science in Public Safety"
    ] += 7.9;
    courseRecommendations[
      "BSCD - Bachelor of Science in Community Development"
    ] += 7.9;
    courseRecommendations["BSSW - Bachelor of Science in Social Work"] += 7.9;
    courseRecommendations["BPA - Bachelor of Public Administration"] += 7.9;
  } else if (skillsHobies === "leadership-abilities") {
    courseRecommendations["BPA - Bachelor of Public Administration"] += 7.9;
    courseRecommendations[
      "BSBA - Bachelor of Science in Business Administration"
    ] += 7.9;
    courseRecommendations[
      "BSBA (HRD) - Bachelor of Science in Business Administration Major in Human Resource Development"
    ] += 7.9;
    courseRecommendations[
      "BSEntrep - Bachelor of Science in Entrepreneurship"
    ] += 7.9;
    courseRecommendations[
      "BSHRM - Bachelor of Science in Human Resource Management"
    ] += 7.9;
    courseRecommendations[
      "BSPublicSafety - Bachelor of Science in Public Safety"
    ] += 7.9;
    courseRecommendations["BSSW - Bachelor of Science in Social Work"] += 7.9;
    courseRecommendations[
      "BSMT - Bachelor of Science in Marine Transportation"
    ] += 7.9;
    courseRecommendations[
      "BSPolSci - Bachelor of Science in Political Science"
    ] += 7.9;
    courseRecommendations["BSCrim - Bachelor of Science in Criminology"] += 7.9;
  }
  if (
    financialAidOrScholarship === "full" ||
    financialAidOrScholarship === "partial" ||
    financialAidOrScholarship === "need" ||
    financialAidOrScholarship === "merit"
  ) {
    for (var course in courseRecommendations) {
      courseRecommendations[course] += 3.8;
    }
  }

  if (
    industryRelevance === "high" ||
    industryRelevance === "stable" ||
    industryRelevance === "niche"
  ) {
    for (var course in courseRecommendations) {
      courseRecommendations[course] += 3.8;
    }
  } //dropdown empty

  var dropdowns = document.querySelectorAll("select");
  var isAnyDropdownEmpty = false;

  dropdowns.forEach(function (dropdown) {
    var selectedValue = dropdown.value;
    if (selectedValue === "none") {
      isAnyDropdownEmpty = true;
      dropdown.style.border = "1px solid red";
    } else {
      dropdown.style.border = "";
    }
  });

  if (isAnyDropdownEmpty) {
    alert("Please fill out all the required dropdowns.");
    return;
  } //display top 5 courses

  var locationDisplay = document.getElementById("location-display");
  locationDisplay.textContent = "Selected Location: " + location;
  const sortedCourses = Object.entries(courseRecommendations).sort(
    (a, b) => b[1] - a[1]
  );
  const top5Courses = sortedCourses.slice(0, 5);
  var courseList = document.getElementById("course-list");
  courseList.innerHTML = "";

  for (var i = 0; i < top5Courses.length; i++) {
    var course = top5Courses[i];
    var courseName = course[0];
    var progressValue = course[1]; //progress bar

    var progressBarContainer = document.createElement("div");
    progressBarContainer.className = "progress-container";
    var progressBar = document.createElement("div");
    progressBar.className = "progress-bar";
    progressBar.style.width = progressValue + "%"; //percentage label

    var percentageElement = document.createElement("div");
    percentageElement.className = "percentage-label";
    percentageElement.textContent = progressValue.toFixed(2) + "%";

    progressBarContainer.appendChild(progressBar);
    progressBarContainer.appendChild(percentageElement); //course label
    var courseElement = document.createElement("div");
    courseElement.className = "course-label";
    courseElement.textContent = courseName + ":";

    courseList.appendChild(courseElement);
    courseList.appendChild(progressBarContainer);
  }

  var modal = document.getElementById("course-modal");
  modal.style.display = "block";
}

// close modal function
function closeModal() {
  var modal = document.getElementById("course-modal");
  modal.style.display = "none";

  var dropdowns = document.querySelectorAll("select");
  dropdowns.forEach(function (dropdown) {
    dropdown.value = "none";

    var associatedInput = document.getElementById(
      dropdown.dataset.associatedInput
    );
    if (associatedInput) {
      associatedInput.style.display = "none";
    }
  });
}
