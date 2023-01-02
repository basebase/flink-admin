import React, {PureComponent} from 'react';
// import china from './china.json';
import * as echarts from 'echarts';
import { Row, Col, Card } from 'antd';

import { orderLineConfig } from './orderLine'
import { logBarConfig } from './logBar'
import { orderMapConfig } from './orderMap'

import './sale.css';

class Sale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderChartRef: React.createRef(),
            logChartRef: React.createRef(),
            orderMapChartRef: React.createRef(),
        };
    }

    componentDidMount() {
        // echarts.registerMap("china", china);
        const orderChart = echarts.init(this.state.orderChartRef.current);
        const logChart = echarts.init(this.state.logChartRef.current);
        const orderMapChart = echarts.init(this.state.orderMapChartRef.current);

        orderChart.setOption(orderLineConfig);
        logChart.setOption(logBarConfig);
        orderMapChart.setOption(orderMapConfig);
    }

    render() {
        return (
            <div className="content">
                <Row gutter={10}>
                    <Col span={6}>
                        <Card className="card-box">
                            <Row>
                                <Col justify="center" span={16}>
                                    <span className="lt">注册人数</span>
                                </Col>
                                <Col span={3}>
                                    <span className="lt">1000</span>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                    <Col span={6}>
                        <Card className="card-box">
                            <Row>
                                <Col justify="center" span={16}>
                                    <span className="lt">激活人数</span>
                                </Col>
                                <Col span={3}>
                                    <span className="lt">900</span>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card className="card-box">
                            <Row>
                                <Col justify="center" span={16}>
                                    <span className="lt">订单人数</span>
                                </Col>
                                <Col span={3}>
                                    <span className="lt">200</span>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card className="card-box">
                            <Row>
                                <Col justify="center" span={16}>
                                    <span className="lt">退单人数</span>
                                </Col>
                                <Col span={3}>
                                    <span className="lt">80</span>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>


                <Row gutter={[10, 30]}>
                    <Col span={12}>
                        <Card title="订单数据">
                            <div className="charts" ref={this.state.orderChartRef}></div>
                        </Card>
                    </Col>

                    <Col span={12}>
                        <Card title="流量数据">
                            <div className="charts" ref={this.state.logChartRef}></div>
                        </Card>
                    </Col>
                </Row>

                <Row gutter={[0, 30]}>
                    <Col>
                        <Card title="订单地图">
                            <div className="charts" ref={this.state.orderMapChartRef}></div>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
    
}

export {
    Sale
}