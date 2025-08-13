import React from 'react';

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <div className="main-content scrollbar">
      {children}
    </div>
  );
};

export default MainContent;