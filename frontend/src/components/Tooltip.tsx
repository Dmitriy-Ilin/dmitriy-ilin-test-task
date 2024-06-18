import React, { useState } from 'react';

type Props = {
  children: React.ReactNode;
  title: string;
};

const CustomTooltip: React.FC<Props> = ({ children, title }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className='custom-tooltip'
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && <div className='custom-tooltip__content'>{title}</div>}
    </div>
  );
};

export default CustomTooltip;
