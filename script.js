let diversity = document.getElementById("diversity").getContext("2d")
let data = {
  labels: ["White", "Asian", "African American", "Hispanic/Latino", "Other"],
  datasets: [{
    label: 'Racial Populations',
    data: [3159658, 2020872, 487456, 1983454, 294943],
    backgroundColor: [
      '#FFC300',
      '#FF5733',
      '#C70039',
      '#900C3F',
      '#CD6155',
    ]
  }]
};
let options = {
  title: {
    display: true, text: "Racial Populations 2020"
  }
}
let chart = new Chart(diversity, {
  type: 'pie',
  data: data,
  options: options,
});



let ageInfo = document.getElementById("ageInfo").getContext("2d")
let ageData = {
  labels: ["0-9", "10-19", "20-29", "30-39", "40-49", "50-59", "60-69", "70-79", "80+"],
  datasets: [{
    label: 'Age Demographics',
    data: [8, 7, 17, 21, 13, 12, 10, 7, 4],
    backgroundColor: [
      '#5dbce9',
      '#80c4b5',
      '#30cfcf',
      '#18c9a0',
      '#8aa1db',
      '#195e83',
      '#cce7e8',
      '#7f5d91',
      '#3c7a6c']
  }]
};
let ageOptions = {
  title: {
    display: true, text: "Age Populations 2020"
  }
  // scales: {
  //   yAxes: [{
  //     ticks: {
  //       beginAtZero: true
  //     
  //   }]
  // }
}
let ageChart = new Chart(ageInfo, {
  type: 'pie',
  data: ageData,
  options: ageOptions,
});



let educationInfo = document.getElementById("educationInfo").getContext("2d")
let educationData = {
  labels: ["No Degree", "High School", "Some College", "Bachelor's Degree", "Post-Grad"],
  datasets: [{
    label: 'Education Demographics',
    data: [81539, 83279, 121337, 245885, 169239],
    backgroundColor: [
      '#c3add9', 
      '#c3add9',
      '#c3add9',
      '#c3add9',
      '#c3add9',]   
  }]
};
let educationOptions = {
  title: {
    display: true, text: "Education in SF Population 2020"
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
}
let educationChart = new Chart(educationInfo, {
  type: 'bar',
  data: educationData,
  options: educationOptions,
});



let transportationToWorkInfo = document.getElementById("transportationToWorkInfo").getContext("2d")
let transportationToWorkData = {
  labels: ["Drove Alone", "Carpooled", "Public Transit", "Bicycle", "Walked","Worked at Home","Other"],
  datasets: [{
    label: 'Transportation to Work Demographics',
    data: [29 , 6, 36, 4,13,7,5],
    backgroundColor: [
      '#c3add9', 
      '#195e83',
      '#cce7e8',
      '#7f5d91',
      '#3c7a6c',
      '#5dbce9',
      '#80c4b5',
      '#30cfcf',
    ]
  }]
};
let transportationToWorkOptions = {
  title: {
    display: true, text: "Transportation To Work Info 2019"
  }
  // scales: {
  //   yAxes: [{
  //     ticks: {
  //       beginAtZero: true
  //     
  //   }]
  // }
}
let transportationToWorkChart = new Chart(transportationToWorkInfo, {
  type: 'pie',
  data: transportationToWorkData,
  options: transportationToWorkOptions,
});