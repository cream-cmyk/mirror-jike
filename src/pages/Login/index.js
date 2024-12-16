import './index.scss'
import { Card, Form, Input, Button } from 'antd'
import logo from '@/assets/logo.png'

const Login = () => {
  const onFinish = (values)=>{
    console.log(values)
  }
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}

        <Form onFinish={onFinish}
              validateTrigger="onBlur">{/*validateTrigger="onBlur"失焦校验*/}
          <Form.Item
            name="phone"
            //校验逻辑：先校验第一条逻辑，通过再校验第二条
            rules={[
              {
                //非空必填项
                required: true,
                message: '请输入手机号!',
              },
              {
                //1开头；第二位3-9之间的数字；第三位随机匹配\d，并且{9}重复9次；共11位，$精确匹配11位
                pattern: /^1[3-9]\d{9}$/,
                message:"请输入正确手机号格式"
              }
            ]}>
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>

          <Form.Item
            name="code"
            rules={[
              {
                required: true,
                message: '请输入验证码!',
              },
            ]}>
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login