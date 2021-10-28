export const createAll = (data) => {

    return {
        chart: {
            type: 'column'
        },
        title: {
            text: '2001至2021年',
            style:{
                'fontSize': '18px',
                'color': '#000000'
            }
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: [
                '2001年','2002年','2003年','2004年','2005年','2006年','2007年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: '到报率 (%)'
            }
        },
        legend:{
            enabled:false,
        },
        tooltip: {
            // head + 每个 point + footer 拼接成完整的 table
            headerFormat: '<span style="font-size:10px"></span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0"></td>' +
                '<td style="padding:0"><b></b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true,
            enabled: false,
        },
        plotOptions: {
            column: {
                borderWidth: 0
            }
        },
        series:data
    }
}