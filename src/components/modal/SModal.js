import React from 'react';
import {
  Modal, Form, Select, DatePicker, Button
}
from 'antd';
import {
  browserHistory
}
from 'react-router';
const Option = Select.Option;
const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;

class SModal extends React.Component {
  state = {
    visible: true
  }
  handleOk = (e) => {
    this.setState({
      visible: false,
    });
    browserHistory.push(`/countreport:${''}`);
  }
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
    browserHistory.push('/');
  }
  handleSubmit = (e) => {
    debugger
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      const rangeValue = fieldsValue['range-picker'];
      const values = {
        ...fieldsValue,
        'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
      };
      console.log('Received values of form: ', values);
    });
  }
  render() {
    const {
      getFieldDecorator
    } = this.props.form;
    const rangeConfig = {
      rules: [{
        type: 'array',
        required: true,
        message: '请选择时间！'
      }],
    };
    return (
      <div>
        <Modal title = "参数"    visible = {
            this.state.visible
          }
          onOk={this.handleOk} onCancel={this.handleCancel}
        >
          <Form onSubmit={this.handleSubmit}>
             <FormItem
                label="选择时间范围"
              >
                {getFieldDecorator('range-picker', rangeConfig)(
                  <RangePicker />
                )}
                <Select
                  value={''}
                  style={{ width: '32%' }}
                >
                <Option value="rmb">RMB</Option>
                <Option value="dollar">Dollar</Option>
              </Select>
              </FormItem>                   
            </Form>
        </Modal>
      </div>
    );
  }
}

SModal = Form.create()(SModal);
export default SModal;