// HIGH CHART BEGIN HERE

function getReportData(){



    Highcharts.chart('containers', {
    
        title: {
          text: 'User Registration Date Wise'
        },
      
        // subtitle: {
        //   text: 'Source: thesolarfoundation.com'
        // },
      
        yAxis: {
            title: {
                text: 'User Registered'
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
        crosshair: true
        },
      
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
        },
      
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            },
           
          
          }
        },
      
        series: [{
            name: 'User Registration',
            data: [12, 52, 65, 19, 95,9,88],
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
    
    