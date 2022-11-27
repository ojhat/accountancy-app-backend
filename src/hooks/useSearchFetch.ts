import { useEffect, useState } from "react";
import API, { Employees } from "../api/employees.api";

const DELAY_IN_FETCH = 1000;
export default function useSearchFetch(searchTerm: string) {
  const [employees, setEmployees] = useState(new Employees());
  const [loading, setLoading] = useState(false);
  const [delayedSearchTerm, setDelayedSearchTerm] = useState("");

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setDelayedSearchTerm(searchTerm);
    }, DELAY_IN_FETCH);
    return () => clearTimeout(timer);
  }, [searchTerm]);
  useEffect(() => {
    if (!delayedSearchTerm) return;
    setLoading(true);
    fetchEmployees(delayedSearchTerm).then((employees) => {
      setEmployees(employees);
      setLoading(false);
    });
  }, [delayedSearchTerm]);
  async function fetchEmployees(name: string) {
    const employees = await API.fetchEmployees(name);
    return employees;
  }

  return { employees, loading };
}
