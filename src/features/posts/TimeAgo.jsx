import { parseISO, formatDistanceToNow } from "date-fns";
import React from 'react';

const TimeAgo = ({ timestamp }) => {
  let TimeAgo = '';
  
  if (timestamp) {
    const date = parseISO(timestamp);  
    const timeperiod = formatDistanceToNow(date);  
    TimeAgo = `${timeperiod} ago`;  
  }

  return (
    <div>
      <span title={timestamp}>
        &nbsp; <i>{TimeAgo}</i> 
      </span>
    </div>
  );
}

export default TimeAgo;
