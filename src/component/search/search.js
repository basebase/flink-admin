import React from 'react'
import {Row, Col, Form, Input, Button, Icon, DatePicker, InputNumber, Select, Table} from 'antd'
import locale from 'antd/es/date-picker/locale/zh_CN'
import './search.css'


const { Option } = Select
const { MonthPicker, RangePicker, WeekPicker } = DatePicker


const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Cash Assets',
      className: 'column-money',
      dataIndex: 'money',
      footer: (data) => {
          console.log("data: ", data)
      }
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ]
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      money: 30,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      money: 90,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      money: 10,
      address: 'Sidney No. 1 Lake Park',
    },
  ]

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expand: false
        }
    }

    nodes = () => {
        console.log("props", this.props.form)
        const count = this.state.expand ? 10 : 6
        const { getFieldDecorator } = this.props.form
        const childs = []

        for (let i = 0; i < 10; i ++) {
            childs.push(
                <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
                    <Form.Item label={`Field ${i}`}>
                        {
                            getFieldDecorator(`Field-${i}`, {
                                rules: [{
                                    required: true,
                                    message: 'Input something!',
                                }]
                            })(<Input placeholder="placeholder" />)
                        }
                    </Form.Item>
                </Col>
            )
        }

        return childs
    }

    render() {
        return (
            <div>
                <Row className="wrap">
                    <Form className="ant-advanced-search-form">
                        <Row gutter={16}>
                            <Col span={16}>
                                <Form.Item labelCol={{ span: 3 }} wrapperCol={{ span: 12 }} label="key8">
                                    {/* <Input placeholder="placeholder" /> */}
                                    <RangePicker locale={locale}  />
                                </Form.Item>
                            </Col>
                            
                            <Col span={8}>
                                <Form.Item labelCol={{ span: 6 }} wrapperCol={{ span: 8, offset: 10 }} label="key1">
                                    <InputNumber defaultValue={3} />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} label="key2">
                                    <Input placeholder="placeholder" />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} label="key3">
                                    <Select
                                        mode="multiple"
                                        // style={{ width: '100%' }}
                                        placeholder="请选择"
                                    >
                                        <Option key="key1">key1</Option>
                                        <Option key="key2">key2</Option>
                                        <Option key="key3">key3</Option>
                                        <Option key="key4">key4</Option>
                                        <Option key="key5">key5</Option>
                                    </Select>,
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} label="key9">
                                    <Input placeholder="placeholder" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row>
                            <Col offset={18} span={6} >
                                <Button type="primary" htmlType="submit">
                                    Search
                                </Button>
                                <Button style={{ marginLeft: 8 }}>
                                    Clear
                                </Button>
                                <a style={{ marginLeft: 8, fontSize: 12 }}>
                                    Collapse 
                                    <Icon type={this.state.expand ? 'up' : 'down'} />
                                </a>
                            </Col>
                        </Row>
                    </Form>
                </Row>

                <Row className='vis'>
                    <Table
                        columns={columns}
                        dataSource={data}
                        bordered
                        // title={() => 'Header'}
                        // footer={pageData => {
                        //     console.log("pageData: ", pageData)
                        //     let moneyTotal = 0
                        //     pageData.forEach(({key, name, money, address}) => {
                        //         moneyTotal += money
                        //     })

                        //     return (
                        //         <Row>
                        //             <Col span={4}> 
                        //                 合计
                        //             </Col>
                        //             <Col span={4}>
                        //                 {moneyTotal}
                        //             </Col>
                        //             <Col span={4}>
                        //                 {moneyTotal}
                        //             </Col>
                        //         </Row>
                        //     )
                        // }}
                    />
                </Row>
            </div>
        )
    }
}

const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(Search);


export {
    WrappedAdvancedSearchForm
}