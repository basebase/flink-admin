import React, {PureComponent} from 'react'
import {Row, Col, Card} from 'antd'
import * as echarts from 'echarts'

import { registerOption, loginOption, preOption, loanCntOption } from './datas'
import './realtime.css'






class RealTimeCompared extends PureComponent {

  echartRegRef = React.createRef()
  echartLogRef = React.createRef()
  echartPreRef = React.createRef()
  echartLonRef1 = React.createRef()
  echartLonRef2 = React.createRef()
  echartLonRef3 = React.createRef()
  

  constructor(props) {
    super(props)    
  }
  
  componentDidMount() {
    const userRegisterChart = echarts.init(this.echartRegRef.current)
    const userLoginChart = echarts.init(this.echartLogRef.current)
    const userPreChart = echarts.init(this.echartPreRef.current)
    const userLonChart1 = echarts.init(this.echartLonRef1.current)
    const userLonChart2 = echarts.init(this.echartLonRef2.current)
    const userLonChart3 = echarts.init(this.echartLonRef3.current)


    userRegisterChart.setOption(registerOption)
    userLoginChart.setOption(loginOption)
    userPreChart.setOption(preOption)
    userLonChart1.setOption(loanCntOption)
    userLonChart2.setOption(loanCntOption)
    userLonChart3.setOption(loanCntOption)
  }
  
  render() {
    return (
      <div className="vis">
        <Row gutter={[20, 48]}>
          <Col span={10}>
            <Card title="实时收入">
              <div className="charts" ref={this.echartRegRef} />
            </Card>
          </Col>
          <Col span={14}>
            <Card title="API收入">
              <div className="charts" ref={this.echartLogRef} />
            </Card>
          </Col>
        </Row>

        <Row gutter={[0, 70]}>
          <Col span={24}>
            <Card title="世界人口">
              <div className="charts" ref={this.echartPreRef} />
            </Card>
          </Col>
        </Row>

        <Row gutter={[15, 70]}>
          <Col span={8}>
            <Card title="人口占比">
              <div className="charts" ref={this.echartLonRef1} />
            </Card>
            
          </Col>
          <Col span={8}>
            <Card title="性别占比">
              <div className="charts" ref={this.echartLonRef2} />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="年龄占比">
              <div className="charts" ref={this.echartLonRef3} />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export {
    RealTimeCompared
}