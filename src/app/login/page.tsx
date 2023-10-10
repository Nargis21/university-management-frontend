'use client'
import { Button, Col, Row } from 'antd';
import React from 'react';
import loginImage from '../../assets/login.png'
import Image from 'next/image';
import { SubmitHandler } from 'react-hook-form';
import Form from '@/components/forms/Form';
import FormInput from '@/components/forms/FormInput';

type FormValues = {
    id: string;
    password: string;
}

const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
}

const LoginPage = () => {
    return (
        <Row>
            <Col sm={12} md={16} lg={16}>
                <Image src={loginImage} alt='login Image' width={500} />
            </Col>
            <Col sm={12} md={8} lg={8}>
                <h1>First Login Your Account</h1>
                <div>
                    <Form submitHandler={onSubmit}>
                        <div>
                            <FormInput name='id' type='text' size='large' label='User Id' />
                        </div>
                        <div>
                            <FormInput name='password' type='password' size='large' label='User Password' />
                        </div>
                        <Button type='primary' htmlType='submit'>Submit</Button>
                    </Form>
                </div>
            </Col>
        </Row>
    );
};

export default LoginPage;