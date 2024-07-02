// import React from 'react'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  incrementAsync,
  selectCount,
} from '../features/counter/counterSlice';


export default function ProductList() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();



  return (
    <div>
      test
      
    </div>
  );
};


