var countries= document.getElementById("myChart").getContext("2d");


var pieData = [
    {
        value: 300,
        color:"#000",
        highlight: "#000",
        label: "Html/CSS"
    },
    {
        value: 50,
        color: "#ddd",
        highlight: "#ddd",
        label: "js"
    },
    {
        value: 50,
        color: "#333",
        highlight: "#333",
        label: "photoshop"
    }
]

var pieOptions = {
  segmentShowStroke : false,
  // animateScale : true,
  responsive: true
}

new Chart(countries).Pie(pieData, pieOptions);
