// Modules
import { useCallback, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

// Components
import Header from "../organisms/Header/Header";
import Headline from "../atoms/Headline/Headline";
import TableWithPagination from "../molecules/TableWithPagination/TableWithPagination";

// Services
import { getResults } from "../../services/api";

function Page() {
  // Hooks

  // Query
  const [searchParams, setSearchParams] = useSearchParams("broadband");
  const [query, setQuery] = useState(searchParams.get("query"));
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["query", searchParams.get("query")],
    queryFn: () => getResults(searchParams.get("query")),
    keepPreviousData: true,
  });

  // Pagination
  const [page, setPage] = useState(1);

  // Detect back action
  useEffect(() => {
    if (searchParams.get("query") !== query) {
      setQuery(searchParams.get("query"));
    }
    // We don't need to listen the "query" changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const onSubmit = useCallback(() => {
    setSearchParams({ query });
  }, [query, setSearchParams]);

  const onChange = useCallback((value) => {
    setQuery(value);
  }, []);

  const onPaginationChange = useCallback((value) => {
    setPage(value);
  }, []);

  // Query Loading
  if (isLoading) return <div> Loading..</div>;

  // Query Error
  if (isError) return <div> Error: {error}</div>;

  // Query Successful
  return (
    <div>
      <Header
        title="Header"
        searchbar={{
          input: { value: query, onChange, onSubmit },
          button: { title: "Submit", onSubmit },
        }}
      />
      <Headline title="Enter a word in the search bar, below you can see your results!" />
      <TableWithPagination
        data={data?.results || []}
        page={page}
        perPage={10}
        onChange={onPaginationChange}
      />
    </div>
  );
}

export default Page;
