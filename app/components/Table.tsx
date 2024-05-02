'use client';

import React, {
  useState,
  useEffect,
  Suspense,
  useCallback,
  useRef,
} from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

import { supabase } from '../lib/supabaseClient';
import NoSearchResult from './NoSearchResults';
import { ListOfPersons } from '@/types/types';
import SearchBar from './SearchBar';
import TableView from './TableView';
import Pagination from './Pagination';

interface TableProps {}

const Table: React.FC<TableProps> = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pageParam: string | null = searchParams.get('page');
  const searchParam: string | null = searchParams.get('search');
  const currentPage: number = Number(pageParam);

  const pageSize: number = 25;

  const [paginationPages, setPaginationsPages] = useState<number>(0);
  const [records, setRecords] = useState<ListOfPersons[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>('');

  const firstLoad = useRef(false);
  const paginationWasRun = useRef(false);

  const currentPages = paginationPages;

  useEffect(() => {
    if (firstLoad.current === false) {
      if (currentPage === 0 || (currentPage === null && searchParam === null)) {
        getData(1, '');
      } else {
        if (searchParam === null) getData(currentPage, '');
        else getData(currentPage, searchParam);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (paginationWasRun.current === false && firstLoad.current === true) {
      if (searchParam === null) return;
      firstLoad.current = false;
      getData(currentPage, searchParam!);
    } else return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageParam, searchParam]);

  const getData = useCallback(
    async (page: number, search: string) => {
      if (firstLoad.current === false) {
        setLoading(true);
        const indexOfLastItem = page * pageSize;
        const indexOfFirstItem = indexOfLastItem - pageSize;
        router.push(`${pathname}?page=${page}&search=${search}`);

        const { data, count, error } = await supabase
          .from('travellers')
          .select(
            'id, first_name, last_name, year_of_birth,age_when_emigration,age_when_immigration, emigration_from, emigration_date, immigration_date',
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
        firstLoad.current = true;
        paginationWasRun.current = false;
        return;
      } else return;
    },
    [pathname, router]
  );

  const handlePagination = useCallback(
    (page: number) => {
      paginationWasRun.current = true;
      if (page + 1 === 0) return getData(page + 1, searchParam!);
      else {
        firstLoad.current = false;
        getData(page + 1, searchParam!);
        return;
      }
    },
    [getData, searchParam]
  );

  const handleSearchEvent = useCallback(
    (inputValue: string) => {
      firstLoad.current = false;
      getData(1, inputValue);
      setSearchValue('');
    },
    [getData]
  );

  const resetSearch = useCallback(() => {
    firstLoad.current = false;
    getData(1, '');
  }, [getData]);

  return (
    <section className="max-w-[1400px] flex flex-col m-auto py-10 bg-basic-white px-2 sm:px-12">
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
            <TableView records={records} />
          ) : (
            <NoSearchResult />
          )}
          <Pagination
            currentPages={currentPages}
            currentPage={currentPage}
            handlePagination={handlePagination}
          />
        </Suspense>
      )}
    </section>
  );
};

export default Table;
