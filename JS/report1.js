// HIGH CHART BEGIN HERE
function getReportData(){

    Highcharts.chart('containers', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Course Completion Data Date Wise'
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
        yAxis: {
            min: 0,
            title: {
                text: 'Course Completion'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0,
                borderWidth: 0
            },
            
        },
        series: [{
            name: 'Course Completed',
            data: [99, 89, 2,9 , 81, 42, 85,],
            color: '#ed7087'
        }]
    });
    
    }