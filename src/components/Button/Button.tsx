import React from 'react';
import { Button as ButtonUI, ButtonProps } from 'antd';

export const Button = (props: ButtonProps) => <ButtonUI {...props}>{props.children}</ButtonUI>;
