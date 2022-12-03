import React, {PureComponent} from 'react'
import {Row, Col} from 'antd'
import * as echarts from 'echarts'

import { registerOption, loginOption, preOption, loanCntOption } from './datas'
import './realtime.css'






class RealTimeCompared extends PureComponent {

  echartRegRef = React.createRef()
  echartLogRef = React.createRef()
  echartPreRef = React.createRef()
  // echartLonRef = React.createRef()
  

  constructor(props) {
    super(props)    
  }
  
  componentDidMount() {
    const userRegisterChart = echarts.init(this.echartRegRef.current)
    const userLoginChart = echarts.init(this.echartLogRef.current)
    const userPreChart = echarts.init(this.echartPreRef.current)
    // const userLonChart = echarts.init(this.echartLonRef.current)


    userRegisterChart.setOption(registerOption)
    userLoginChart.setOption(loginOption)
    userPreChart.setOption(preOption)
    // userLonChart.setOption(loanCntOption)
  }
  
  render() {
    return (
      <div className="vis">
        <Row gutter={[0, 48]}>
          <Col span={10}>
            <div className="charts" ref={this.echartRegRef} />
          </Col>
          <Col span={14}>
            <div className="charts" ref={this.echartLogRef} />
          </Col>
        </Row>

        <Row gutter={[0, 70]}>
          <Col span={24}>
            <div className="charts" ref={this.echartPreRef} />
          </Col>
        </Row>
      </div>
    )
  }
}

export {
    RealTimeCompared
}