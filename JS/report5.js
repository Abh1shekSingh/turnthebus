// HIGH CHART BEGIN HERE

function getReportData(){



Highcharts.chart('containers', {

    title: {
      text: 'Average Video Views Date Wise'
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
    },credits: {
      enabled: false
  },
  
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
       
       
      }
    },
  
    series: [{
      name: 'Total User View',
      data: [7, 90, 82, 50, 75,69,50],
      color: '#ed7087'
    },{
        name: 'Unique User View',
        data: [0, 48, 28, 46, 28,47],
        color: "#54A2E5",
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

