import React from 'react';
import { Input as InputUI, InputProps } from 'antd';
import './Input.css';

export const Input = (props: InputProps) => (
    <InputUI className={`${props.className} .input.ant-input-disabled`} {...props} />
);
