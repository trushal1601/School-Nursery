import React from 'react';
import EventHorizontalCard from '../../../../Components/EventHorizontalCard';

const RecentEvents = ({route}) => {
  const {data} = route.params;
  return <EventHorizontalCard data={data} />;
};

export default RecentEvents;
