import React from 'react';
import HorizontalCard from '../../../../Components/BlogHorizontalCard';

const ParentGuide = ({route}) => {
  const {data} = route.params;
  return (
    <>
      <HorizontalCard data={data} />
    </>
  );
};

export default ParentGuide;
