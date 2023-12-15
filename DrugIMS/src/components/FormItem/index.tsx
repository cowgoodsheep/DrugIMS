import React, { useEffect,useRef,useState } from 'react'
import { Form,Input,InputNumber } from 'antd';
import { useModel } from '../../utils';
export default function FormItem({label,name,need=false,type=''}) {
 const {max} =  useModel()
 console.log(max,'in')
  return (
    <Form.Item
    label={label}
    name={name}
    rules={need?[
        {
          required: true,
        },
        {
          type:type,
          min:0
        },
      ]:undefined}
  >
   {type==='number'?<InputNumber max={max}></InputNumber>:<Input />} 
  </Form.Item>
  )
}
