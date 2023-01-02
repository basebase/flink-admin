const orderLineConfig = {
    title: {
        text: '一周订单数据'
    },

    tooltip: {
        trigger: 'axis'
    },

    legend: {},

    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {}
        }
    },

    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },

    yAxis: {
        type: 'value'
    },

    series: [
        {
            name: '本周',
            type: 'line',
            data: [10, 11, 13, 11, 12, 12, 9],
            markPoint: {
                data: [
                    { type: 'max', name: '最高' },
                    { type: 'min', name: '最低' }
                ]
            },
          
            markLine: {
                ata: [{ type: 'average', name: 'Avg' }]
            }
        },
        
        {
            name: '上周',
            type: 'line',
            data: [1, -2, 2, 5, 3, 2, 0],
            markPoint: {
                data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
            },
          
            markLine: {
                data: [
                    { type: 'average', name: 'Avg' },
                    
                    [
                        {
                            symbol: 'none',
                            x: '90%',
                            yAxis: 'max'
                        },
                
                        {
                            symbol: 'circle',
                            label: {
                                position: 'start',
                                formatter: 'Max'
                            },
                            type: 'max',
                            name: '最高点'
                        }
                    ]
                ]
            }
        }
    ]
}


export { orderLineConfig }