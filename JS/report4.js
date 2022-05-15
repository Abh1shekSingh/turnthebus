// HIGH CHART BEGIN HERE
function getReportData(){

Highcharts.chart('containers', {

    title: {
      text: 'Count of Videos Watched Date Wise'
    },
  
    // subtitle: {
    //   text: 'Source: thesolarfoundation.com'
    // },
  
    yAxis: {
        title: {
            text: 'Count'
        }
    },
    
  
    xAxis: {
     
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
    ],
    },
  
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    credits: {
      enabled: false
  },
  
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        color: '#ed7087',
       
      }
    },
  
    series: [{
      name: 'Video Count',
      data: [65, 48, 57, 59, 40]
    }],
  
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  
  });

}