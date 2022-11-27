import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Employees } from "../../api/employees.api";
import { CenteredSpinner, RoundedButton } from "../../theme/styledComponents";

import SearchResultItem from "../SearchResultItem/SearchResultItem";

type SearchResultsProps = {
  employees: Employees;
  loading: boolean;
  searchTerm: string;
};
const NUMBER_OF_RESULTS_AT_A_TIME = 15;
function SearchResults({ employees, loading, searchTerm }: SearchResultsProps) {
  const navigator = useNavigate();

  const [currentResults, setCurrentResults] = useState(
    employees.results.slice(0, NUMBER_OF_RESULTS_AT_A_TIME)
  );
  const handleLoadMore = () => {
    setCurrentResults((prevResults) => [
      ...prevResults,
      ...employees.results.slice(
        prevResults.length,
        prevResults.length + NUMBER_OF_RESULTS_AT_A_TIME
      ),
    ]);
  };
  useEffect(() => {
    setCurrentResults(employees.results.slice(0, NUMBER_OF_RESULTS_AT_A_TIME));
  }, [searchTerm, employees]);

  if (loading) return <CenteredSpinner />;
  return (
    <div style={{ padding: "10px" }}>
      {currentResults.map((employee) => (
        <SearchResultItem
          key={employee.empId}
          employee={employee}
          onClickHandler={() => {
            navigator(`/employee/${employee._id}`, { replace: true });
          }}
        />
      ))}
      {currentResults.length < employees.results.length && (
        <RoundedButton onClick={handleLoadMore}>Load More</RoundedButton>
      )}
    </div>
  );
}

export default SearchResults;
