import React from 'react';

interface SectionHeaderProps {
  title: string;
  span: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, span }) => {
  return (
    <>
      <h3 className="pb-1 text-center text-xl md:text-2xl">{title}</h3>
      <span className="text-xs md:text-sm text-center pb-14">{span}</span>
    </>
  );
};

export default SectionHeader;
