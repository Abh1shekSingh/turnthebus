// HIGH CHART BEGIN HERE
function getReportData(){

    Highcharts.chart('containers', {

        chart: {
            type: 'column'
        },
    
        title: {
            text: 'Quiz Attempted and Completions Date Wise'
        },
    
        xAxis: {
            categories: ['January', 'February', 'March', 'April', 'May','June','July']
        },
    
        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Quiz Attempted and Completions'
            }
        },
    
        
    
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
    
        series: [{
            name: 'Attempted',
            data: [40, 118-81, 80-30, 122-76, 61-36, 150-90, 100-45],
            stack: 'male',
            color: '#b8e7fd',
        }, {
            name: 'Completed',
            data: [36, 81, 30, 76, 36, 90,45],
            stack: 'female',
            
            color: '#fbd0d6',
        }]
    });
                
    
    }