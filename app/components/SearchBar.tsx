import React from 'react';

interface SearchBarProps {
  onInputChange: (value: string) => void;
  inputValue: string;
  handleSearchEvent: (inputValue: string) => void;
  searchParam: string;
  resetSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onInputChange,
  inputValue,
  handleSearchEvent,
  searchParam,
  resetSearch,
}) => {
  return (
    <section className="flex flex-col pb-10 w-full max-w-[40rem] m-auto">
      <div className="flex w-100 h-10 mb-1">
        <input
          onChange={(event) => onInputChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && inputValue !== '') {
              handleSearchEvent(event.currentTarget.value);
            } else return;
          }}
          value={inputValue}
          className="w-auto flex-grow pl-4 pt-1 bg-basic-white border text-sm border text-black placeholder-black"
          type="text"
          name="search"
          id="search"
          placeholder="För-, efternamn, födelse, fader eller utfl plats"
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
      </div>
      <div>
        {searchParam ? (
          <span
            className="text-sm cursor-pointer pl-2"
            onClick={() => resetSearch()}>
            Rensa sökning
          </span>
        ) : undefined}
      </div>
    </section>
  );
};

export default SearchBar;
