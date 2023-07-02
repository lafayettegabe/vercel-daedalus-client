'use client'
import { SyncOutlined } from '@ant-design/icons';
import { Space } from 'antd';

const LoadingPage = () => {
    return (
      <div className="loading w-screen h-screen flex justify-center items-center">
            <SyncOutlined spin style={{ fontSize: '5rem'}}  />
      </div>
    );
  };
  
  export default LoadingPage;