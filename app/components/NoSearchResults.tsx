import React from 'react';

interface NoSearchResultProps {}

const NoSearchResult: React.FC<NoSearchResultProps> = () => {
  return (
    <section className="w-100 h-[30rem] flex justify-center align-center pt-20">
      Din sökning gav inget resultat!
    </section>
  );
};

export default NoSearchResult;
