/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import axios from 'axios';

function Category() {
  useEffect(async () => {
    const result = await axios(
      'http://technoquiz-env.eba-33dpsiuk.ap-south-1.elasticbeanstalk.com/api/category',
    );
    console.log(result);
  });
  return <div>Category</div>;
}

export default Category;
