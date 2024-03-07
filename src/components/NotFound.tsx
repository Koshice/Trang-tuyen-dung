import React from 'react';
import '../css/styles.css';

const NotFound = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '380px', marginTop: '-10px' }}>
        <p style={{ marginBottom: 0, color: '#929292' }}>Khi bạn đang tìm kiếm một công việc, có một số điều bạn có thể làm</p>
        <p style={{ marginTop: 0, color: '#929292' }}>để tận dụng tối đa tìm kiếm của bạn</p>

        <img
        alt='notFound'
        src={process.env.PUBLIC_URL + '/Image/NotFound.svg'}
        style={{ width: '70%' }}
        ></img>
    </div>
  );
};

export default NotFound;
