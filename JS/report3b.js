// HIGH CHART BEGIN HERE
function getReportData(){

    Highcharts.chart('containers', {

        chart: {
            type: 'column'
        },
    
        title: {
            text: 'Course Enrollment Gender Wise'
        },
    
        xAxis: {
            categories: ['January', 'February', 'Match', 'April', 'May']
        },
    
        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Gender'
            }
        },
    
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },
    
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
    
        series: [{
            name: 'Female',
            data: [40-36, 118-81, 80-30, 122-76, 61-36],
            stack: 'male',
            color: '#b8e7fd',
        }, {
            name: 'Male',
            data: [36, 81, 30, 76, 36],
            stack: 'male',
            
            color: '#fbd0d6',
        }]
    });
                
    
    }