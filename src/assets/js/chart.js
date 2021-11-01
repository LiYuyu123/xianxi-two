import dayjs from "dayjs";


export const createAll = (data,date,dateName) => {
    let findData=[]
    for(let i=0;i<data.length;i++){
       const d=data[i]
       findData.push({
           y:d,
           color:d<100 ? '#F57D65':'#4FC88C'
       })
    }
    const year1=dayjs(date[1]).subtract(2000, 'year')
    const year2=dayjs(date[0]).subtract(2000, 'year')
    return {
        chart: {
            type: 'column',
            spacing:[10, 40, 15, 10],
        },
        title: {
            text: `<div style="padding-top:5px; padding-bottom: 24px">${dateName ? dateName: '2001年至2021年'}</div>`,
            style:{
                'fontSize': '18px',
                'color': '#000000',
                'fontFamily': 'PingFangSC-Regular, PingFang SC',
            },
            useHTML: true,

        },
        subtitle: {
            text: ''
        },
        xAxis: {
            max:year1.$y ,
            min:year2.$y -1,
            categories: [
                '2001年','2002年','2003年','2004年','2005年','2006年','2007年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年','2018年','2019年','2020年','2021年'
            ],
            crosshair: true,
            labels:{
                style:{
                    color:'rgba(0, 0, 0, 0.45)',
                    'fontFamily': 'Helvetica'
                }
            }
        },
        yAxis: {
            max:100,
            min: 0,
            title: {
                text: '到报率 (%)',
                y:-165,
                x:20,
                rotation:0,
            },
        },
        credits: { //除去水印
            enabled: false,
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
        series:[{
            data:findData
        }]
    }
}

