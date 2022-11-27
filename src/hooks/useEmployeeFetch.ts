import { useState, useEffect } from "react";
import API, { Employee } from "../api/employees.api";
function useEmployeeFetch(id: string) {
  const [employee, setEmployee] = useState(new Employee());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    API.fetchEmployee(id).then(setEmployee);
    setLoading(false);
  }, [id]);

  return { employee, loading };
}

export default useEmployeeFetch;
