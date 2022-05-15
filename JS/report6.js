// HIGH CHART BEGIN HERE

function getReportData() {

Highcharts.chart('containers', {

    title: {
      text: 'Time Spent on Videos Date Wise'
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
        'Day 1',
        'Day 2',
        'Day 3',
        'Day 4',
        'Day 5',
        
    ],
    },
  
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },credits: {
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
      name: 'Time Spent',
      data: [130, 190, 120, 200, 100]
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


  