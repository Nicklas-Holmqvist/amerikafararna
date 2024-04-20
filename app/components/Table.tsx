'use client';

import React, { useState, useEffect, Suspense, useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

import { supabase } from '../lib/supabaseClient';
import NoSearchResult from './NoSearchResults';
import { ListOfPersons } from '../page';
import SearchBar from './SearchBar';

interface TableProps {}

const titles = [
  'Förnamn',
  'Efternamn',
  'Födelsedatum',
  'Utfl datum',
  'Utfl plats',
  'Infl datum',
];

const Table: React.FC<TableProps> = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pageParam: string | null = searchParams.get('page');
  const searchParam: string | null = searchParams.get('search');
  const currentPage: number = Number(pageParam);

  const pageSize: number = 25;

  const [paginationPages, setPaginationsPages] = useState<number>(20);
  const [records, setRecords] = useState<ListOfPersons[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>('');

  const currentPages = paginationPages;

  useEffect(() => {
    if (currentPage === 0 || (currentPage === null && searchParam === null)) {
      getData(1, '');
    } else {
      if (searchParam === null) getData(currentPage, '');
      else getData(currentPage, searchParam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageParam, searchParam]);

  async function getData(page: number, search: string) {
    setLoading(true);
    const indexOfLastItem = page * pageSize;
    const indexOfFirstItem = indexOfLastItem - pageSize;
    router.push(`${pathname}?page=${page}&search=${search}`);

    const { data, count, error } = await supabase
      .from('travellers')
      .select(
        'id, first_name, last_name, year_of_birth, emigration_from, emigration_date, immigration_date',
        { count: 'exact' }
      )
      .or(
        `first_name.ilike.%${search}%,last_name.ilike.%${search}%,year_of_birth.ilike.%${search}%,father.ilike.%${search}%,emigration_from.ilike.%${search}%,other.ilike.%${search}%`
      )
      .order('first_name', { ascending: true })
      .order('last_name')
      .limit(pageSize)
      .range(indexOfFirstItem, indexOfLastItem);
    if (error) {
      setRecords([]);
    }
    setPaginationsPages(Math.ceil(count! / pageSize));
    setRecords(data!);
    setLoading(false);
  }

  const handlePagination = (page: number) => {
    if (page === 0) return getData(page + 1, searchParam!);
    getData(page + 1, searchParam!);
  };

  const handleSearchEvent = (inputValue: string) => {
    getData(1, inputValue);
    setSearchValue('');
  };

  const resetSearch = () => {
    getData(1, '');
  };
  return (
    <section className="max-w-[1200px] flex flex-col m-auto px-12 lg:px-0">
      {loading ? (
        ''
      ) : (
        <Suspense fallback={<div></div>}>
          <SearchBar
            onInputChange={setSearchValue}
            inputValue={searchValue}
            handleSearchEvent={handleSearchEvent}
            searchParam={searchParam!}
            resetSearch={resetSearch}
          />
          {records.length !== 0 ? (
            <table className="mb-4 table-auto text-sm">
              <tr>
                {titles.map((title, index) => (
                  <th className="text-start px-2 pb-2" key={index}>
                    {title}
                  </th>
                ))}
              </tr>
              {records!.map((person, index) => (
                <tr
                  className="border hover:bg-gray-100 hover:cursor-pointer"
                  key={index}
                  onClick={() =>
                    router.push(`${window.location.origin}/record/${person.id}`)
                  }>
                  <td className="px-2 py-2">{person.first_name}</td>
                  <td className="px-2 py-2">{person.last_name}</td>
                  <td className="px-2 py-2">{person.year_of_birth}</td>
                  <td className="px-2 py-2">{person.emigration_date}</td>
                  <td className="px-2 py-2">{person.emigration_from}</td>
                  <td className="px-2 py-2">{person.immigration_date}</td>
                </tr>
              ))}
            </table>
          ) : (
            <NoSearchResult />
          )}
          <nav className="flex flex-row justify-center text-sm">
            {Array.from({ length: currentPages }, (v, index: number) => (
              <button
                key={index}
                className={`p-2 w-10 h-10 m-1 border hover:bg-gray-200 ${
                  Number(currentPage) === index + 1 ? 'bg-gray-300' : ''
                }`}
                onClick={() => handlePagination(index)}>
                {index + 1}
              </button>
            ))}
          </nav>
        </Suspense>
      )}
    </section>
  );
};

export default Table;
