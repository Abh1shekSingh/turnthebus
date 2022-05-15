// HIGH CHART BEGIN HERE
function getReportData(){

    Highcharts.chart('containers', {
    
        title: {
          text: 'Course Enrollment Date Wise'
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
          accessibility: {
            rangeDescription: 'Range: 2010 to 2017'
          },
          title: {
              text: 'Months'
          }
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
            color: '#ed7087',
            pointStart: 1
          }
        },
      
        series: [{
          name: 'Course Enrolled',
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