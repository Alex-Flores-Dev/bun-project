import React from 'react';
import { Avatar, Paper, Text } from '@mantine/core';

const WelcomeComponent = ({ userName, userPhoto, greeting, products }) => {
  return (
    <div className="welcome-container">
      <div className="centered-content">
        <Paper padding="md" shadow="xs" style={{ textAlign: 'center', display:'flex',flexDirection:'column', justifyContent:'center' }}>
          <Avatar size={80} src={userPhoto} alt="User Profile" radius="xl"/>
          <Text weight={700} size="xl" style={{ marginBottom: 5 }}>
            Welcome, {userName}!
          </Text>
          <Text size="lg">{greeting}</Text>
        </Paper>
      </div>
      <div className="product-list">
        <h2>Recommended Products</h2>
        <ul>
          {products.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WelcomeComponent;