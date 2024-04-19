import React from 'react';

interface SearchBarProps {
  onInputChange: (value: string) => void;
  inputValue: string;
  handleSearchEvent: (inputValue: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onInputChange,
  inputValue,
  handleSearchEvent,
}) => {
  return (
    <section className="w-full flex h-10 mb-10">
      <input
        onChange={(event) => onInputChange(event.target.value)}
        value={inputValue}
        className="w-auto flex-grow pl-4 border"
        type="search"
        name="search"
        id="search"
        placeholder="Sök tex. på förnamn, efternamn, födelse, fader eller plats"
      />
      <button
        id="search"
        className="w-20 border"
        onClick={(event) => {
          event.preventDefault();
          handleSearchEvent(inputValue);
        }}>
        Sök
      </button>
    </section>
  );
};

export default SearchBar;
