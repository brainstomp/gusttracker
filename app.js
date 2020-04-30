$(document).ready(function(){
 $.ajax({
  url: "https://<YourURLHostingThis>/awos/data.php",
  method: "GET",
  success: function(data) {
   console.log(data);
   var gust_speed = [];
   var timestamp_stored = [];

   for(var i in data) {
    timestamp_stored.push(data[i].timestamp_stored);
    gust_speed.push(data[i].gust_speed);
  }

  var chartdata = {
    labels: timestamp_stored,
    datasets : [
    {
      label: 'Wind Gust',
      backgroundColor: 'rgba(200, 200, 200, 0.75)',
      borderColor: 'rgba(200, 200, 200, 0.75)',
      hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
      hoverBorderColor: 'rgba(200, 200, 200, 1)',
      data: gust_speed
    }
    ]
  };

  var ctx = $("#mycanvas");
  Chart.pluginService.register({
    afterDraw: function(chart) {
      if (typeof chart.config.options.lineAtStudent != 'undefined') {
       var lineAtStudent = chart.config.options.lineAtStudent;
       var ctxPlugin = chart.chart.ctx;
       var xAxe = chart.scales[chart.config.options.scales.xAxes[0].id];
       var yAxe = chart.scales[chart.config.options.scales.yAxes[0].id];

            // I'm not good at maths
            // So I couldn't find a way to make it work ...
            // ... without having the `min` property set to 0
            if(yAxe.min != 0) return;

            ctxPlugin.strokeStyle = "red";
            ctxPlugin.beginPath();
            lineAtStudent = (lineAtStudent - yAxe.min) * (100 / yAxe.max);
            lineAtStudent = (100 - lineAtStudent) / 100 * (yAxe.height) + yAxe.top;
            ctxPlugin.moveTo(xAxe.left, lineAtStudent);
            ctxPlugin.lineTo(xAxe.right, lineAtStudent);
            ctxPlugin.stroke();
          }
        }
      });

  Chart.pluginService.register({
    afterDraw: function(chart) {
      if (typeof chart.config.options.lineAtA != 'undefined') {
       var lineAtA = chart.config.options.lineAtA;
       var ctxPlugin = chart.chart.ctx;
       var xAxe = chart.scales[chart.config.options.scales.xAxes[0].id];
       var yAxe = chart.scales[chart.config.options.scales.yAxes[0].id];

            // I'm not good at maths
            // So I couldn't find a way to make it work ...
            // ... without having the `min` property set to 0
            if(yAxe.min != 0) return;

            ctxPlugin.strokeStyle = "red";
            ctxPlugin.beginPath();
            lineAtA = (lineAtA - yAxe.min) * (100 / yAxe.max);
            lineAtA = (100 - lineAtA) / 100 * (yAxe.height) + yAxe.top;
            ctxPlugin.moveTo(xAxe.left, lineAtA);
            ctxPlugin.lineTo(xAxe.right, lineAtA);
            ctxPlugin.stroke();
          }
        }
      });

  var ctx = $("#mycanvas");
  Chart.pluginService.register({
    afterDraw: function(chart) {
      if (typeof chart.config.options.lineAtB != 'undefined') {
       var lineAtB = chart.config.options.lineAtB;
       var ctxPlugin = chart.chart.ctx;
       var xAxe = chart.scales[chart.config.options.scales.xAxes[0].id];
       var yAxe = chart.scales[chart.config.options.scales.yAxes[0].id];

            // I'm not good at maths
            // So I couldn't find a way to make it work ...
            // ... without having the `min` property set to 0
            if(yAxe.min != 0) return;

            ctxPlugin.strokeStyle = "red";
            ctxPlugin.beginPath();
            lineAtB = (lineAtB - yAxe.min) * (100 / yAxe.max);
            lineAtB = (100 - lineAtB) / 100 * (yAxe.height) + yAxe.top;
            ctxPlugin.moveTo(xAxe.left, lineAtB);
            ctxPlugin.lineTo(xAxe.right, lineAtB);
            ctxPlugin.stroke();
          }
        }
      });

var ctx = $("#mycanvas");
  Chart.pluginService.register({
    afterDraw: function(chart) {
      if (typeof chart.config.options.lineAtC != 'undefined') {
       var lineAtC = chart.config.options.lineAtC;
       var ctxPlugin = chart.chart.ctx;
       var xAxe = chart.scales[chart.config.options.scales.xAxes[0].id];
       var yAxe = chart.scales[chart.config.options.scales.yAxes[0].id];

            // I'm not good at maths
            // So I couldn't find a way to make it work ...
            // ... without having the `min` property set to 0
            if(yAxe.min != 0) return;

            ctxPlugin.strokeStyle = "red";
            ctxPlugin.beginPath();
            lineAtC = (lineAtC - yAxe.min) * (100 / yAxe.max);
            lineAtC = (100 - lineAtC) / 100 * (yAxe.height) + yAxe.top;
            ctxPlugin.moveTo(xAxe.left, lineAtC);
            ctxPlugin.lineTo(xAxe.right, lineAtC);
            ctxPlugin.stroke();
          }
        }
      });

var ctx = $("#mycanvas");
  Chart.pluginService.register({
    afterDraw: function(chart) {
      if (typeof chart.config.options.lineAtD != 'undefined') {
       var lineAtD = chart.config.options.lineAtD;
       var ctxPlugin = chart.chart.ctx;
       var xAxe = chart.scales[chart.config.options.scales.xAxes[0].id];
       var yAxe = chart.scales[chart.config.options.scales.yAxes[0].id];

            // I'm not good at maths
            // So I couldn't find a way to make it work ...
            // ... without having the `min` property set to 0
            if(yAxe.min != 0) return;

            ctxPlugin.strokeStyle = "red";
            ctxPlugin.beginPath();
            lineAtD = (lineAtD - yAxe.min) * (100 / yAxe.max);
            lineAtD = (100 - lineAtD) / 100 * (yAxe.height) + yAxe.top;
            ctxPlugin.moveTo(xAxe.left, lineAtD);
            ctxPlugin.lineTo(xAxe.right, lineAtD);
            ctxPlugin.stroke();
          }
        }
      });

  var lineGraph = new Chart(ctx, {
    type: 'line',
    data: chartdata,
    options: {
     scales : {
      yAxes : [{
        ticks : {
         beginAtZero : true
       }
     }]
   },
   lineAtStudent: 15,
   lineAtA: 17,
   lineAtB: 19,
   lineAtC: 21,
   lineAtD: 26
 }
});
},
error: function(data) {
 console.log(data);
}
});
});
