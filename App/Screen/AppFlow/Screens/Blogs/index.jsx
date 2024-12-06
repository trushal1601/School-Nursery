import React from 'react';
import HorizontalCard from '../../../../Components/BlogHorizontalCard';

const Blogs = ({route}) => {
  const {data} = route.params;
  return (
    <>
      <HorizontalCard data={data} />
    </>
  );
};

export default Blogs;
