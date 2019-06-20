import React, { PropTypes } from 'react';
import { Form, Input, Tooltip, Icon, Button } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 5,
        },
      },
    };

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="Name"
        >
          {getFieldDecorator('name', {
            rules: [{
              required: true, message: 'Please input your Name!',
            }],
          })(<Input />)}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Company"
        >
          {getFieldDecorator('company', {
            rules: [],
          })(<Input />)}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="E-mail"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(<Input />)}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Message"
        >
          {getFieldDecorator('message', {
            rules: [{
              required: true, message: 'Please input your message!',
            }],
          })(<TextArea rows={4} />)}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  form: PropTypes.object,
};

ContactForm.defaultProps = {
  form: undefined,
};
export default Form.create()(ContactForm);
