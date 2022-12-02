import React, {PureComponent} from 'react'
import * as echarts from 'echarts'
import './realtime.css'

const option = {
    title: {
        text: '注册用户数'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['2022-11-01', '2022-11-02', '2022-11-03', '2022-11-04', '2022-11-05']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['00', '01', '02', '03', '04', '05', '06']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '2022-11-01',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '2022-11-02',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '2022-11-03',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: '2022-11-04',
          type: 'line',
          stack: 'Total',
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '2022-11-05',
          type: 'line',
          stack: 'Total',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
}

class RealTimeCompared extends PureComponent {

    echartRef = React.createRef()
    constructor(props) {
        super(props)    
    }

    

    componentDidMount() {
        const myChart = echarts.init(this.echartRef.current);
        console.log("myChart", myChart)
        myChart.setOption(option)
    }
    


    render() {

    
        return (
            <div className="real">
                <div ref={this.echartRef}>
                </div>
            </div>
        )
    }

    
}

export {
    RealTimeCompared
}