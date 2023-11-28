// 'use client';

// style
import '../../globals.css';

// react/next stuff
// import { useState } from 'react';
import { notFound } from 'next/navigation';

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/roles/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

async function OneRole({ params }) {
  // function OneRole({ params }) {
  const data = await getData(params.id);

  // state for data of users
  // const [data, setData] = useState([]);
  // fatch that data and store it
  // async function fetchData() {
  //   try {
  //     const response = await fetch('http://localhost:3000/api/roles/${id}');
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     const data = await response.json();
  //     setData(data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }

  // fetchData();

  // if no data show message
  if (!data || data.length === 0) {
    return <div>Loading data from server, there is time...</div>;
  }
  return (
    <div>
      <p>{data.role_name}</p>
      <p>{data.description}</p>
    </div>
  );
}

export default OneRole;
