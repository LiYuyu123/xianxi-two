export const createDay = (data, date, dateName) => {
    let findData = []
    let surplusData=[]
    for (let i = 0; i < data.length; i++) {
        const d = data[i]
        findData.push({
            y: d,
            color: d < 100 ? '#F57D65' : '#4FC88C'
        })
    }
    for(let i=0;i<data.length;i++){
        const s=100-data[i]
        surplusData.push({
            y:s===0 ? undefined : s,
            color:'#ebebeb'
        })
    }
    return {
        chart: {
            type: 'column',
            spacing: [10, 40, 15, 10],
        },
        title: {
            text: `${dateName ? dateName : '2021年8月1日至2021年8月31日'}`,
            style: {
                'fontSize': '18px',
                'color': '#000000',
                'fontFamily': 'PingFangSC-Regular, PingFang SC',
            }
        },
        subtitle: {
            text: `<div style="padding-top: 5px;padding-bottom: 10px"><div style="font-size: 14px;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;line-height: 24px;color: #000000;">${dateName ? dateName : '2021年8月1日至2021年8月31日'}有1200条记录，缺失条数200条记录，缺失数据站点如下:</div><div style="font-size: 14px;font-family: PingFangSC-Regular, PingFang SC;font-weight: 600;line-height: 24px;color: #000000;">浦江、兰溪、金华、义乌、东阳、磐安、武义、永康、金华应急车、源东、三江街道</div></div>`,
            useHTML: true,
        },
        xAxis: {
            max:date[1] -1,
            min:date[0]-1,
            categories: ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日', '11日', '12日', '13日', '14日', '15日', '16日', '17日', '18日', '19日', '20日', '21日', '22日', '23日',
                '24日', '25日', '26日', '27日', '28日', '29日', '30日', '31日'],
            crosshair: true,
            labels: {
                style: {
                    color: 'rgba(0, 0, 0, 0.45)',
                    'fontFamily': 'Helvetica'
                }
            }
        },
        yAxis: {
            max:100,
            min: 0,
            title: {
                text: '到报率 (条)',
                y: -145,
                rotation: 0,
                x:20,
            },
        },
        credits: { //除去水印
            enabled: false,
        },
        legend: {
            enabled: false,
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor:  'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
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
                borderWidth: 0,
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color:  '#525252',
                    fontSize: '12px',
                    style: {
                        textOutline: 'none'
                    }
                }
            }
        },
        series: [{
            data: surplusData
        },{
            data: findData
        }]
    }
}