'use client'
import React from 'react';
import Image from 'next/image';
import { Button, Form, Input } from 'antd';
import { useTheme } from "next-themes";


import './contact.css'

export default function Contact() {
    //open email msgr
    function handleEmail(email: string): void {
        const mailtoLink = `mailto:${email}`;
        window.location.href = mailtoLink;
    }
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'undefined' ? systemTheme : theme;
    console.log(systemTheme, theme, currentTheme)
    // const headerHeight = document.querySelector('header')?.clientHeight

    // validate messages for forms
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    //finish fucntion for form
    const onFinish = (values: any) => {
        console.log(values);
    };

    //form style
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    //forms style
    const FormStyle = {
        background: 'transparent',
        color: 'white !important',
        border: '0',
        borderBottom: '1px white outset',
        borderRadius: '0',
        height: '75px',
        fontSize: '1.55rem',
    }

    return (
        <main>
            <div className={`h-screen ${currentTheme} section`}>
                <div className='container flex flex-row justify-between conteiner-fluid h-full' style={{ paddingTop: '100px' }}>
                    <div className='w-1/2 h-[800px] flex flex-col justify-start justify-between p-8'>
                        <h1 className={`animate-content animate-once ${currentTheme} main-text`}>
                            Contact Us
                        </h1>
                        <h4 className={`uppercase ${currentTheme} main-txt`}>
                            For business inquiries
                        </h4>
                        <h3
                            className={`cursor-pointer hover-underline-animation w-fit ${currentTheme} main-txt`}
                            onClick={() => { handleEmail('contact@deadelus-institute.com') }}
                        >
                            contact@deadelus-institute.com
                        </h3>
                        <h3 className={`hover-underline-animation w-fit ${currentTheme} main-txt'}`}>
                            +5551 99524-5504
                        </h3>
                        <h4 className={`${currentTheme} main-txt`}>
                            To join our team
                        </h4>
                        <h3
                            className={`cursor-pointer hover-underline-animation w-fit ${currentTheme} main-txt`}
                            onClick={() => { handleEmail('contact@deadelus-institute.com') }}
                        >
                            hiring@deadelus-institute.com
                        </h3>
                    </div>
                    <div className={`w-1/2 h-[800px] flex flex-col justify-between p-8 ${currentTheme} contact-cont`}>
                        <h2 className={`mb-8 ${currentTheme} inverse-main-txt`}>
                            Get started right now
                        </h2>
                        <h4 className={`${currentTheme} inverse-main-txt`}>
                            The sooner you start, the quicker you&apos;ll have it ready
                        </h4>

                        <Form
                            {...layout}
                            name="nest-messages"
                            onFinish={onFinish}
                            validateMessages={validateMessages}
                        >
                            <Form.Item name={['user', 'Name']} rules={[{ required: true }]}>
                                <Input placeholder="Full Name" style={FormStyle} />
                            </Form.Item>
                            <Form.Item name={['user', 'Email']} rules={[{ type: 'email', required: true }]}>
                                <Input placeholder="Email" style={FormStyle} />
                            </Form.Item>
                            <Form.Item name={['user', 'WEbsite']}>
                                <Input placeholder="Website (optional)" style={FormStyle} />
                            </Form.Item>
                            <Form.Item name={['user', 'Message']}>
                                <Input.TextArea placeholder="Message" style={{ ...FormStyle, height: '5500px !important' }} />
                            </Form.Item>
                        </Form>
                        <Button type="primary" htmlType="submit" style={{ width: '100%', backgroundColor: 'transparent', height: '75px', border: '3px white solid', borderRadius: '0' }}>
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
