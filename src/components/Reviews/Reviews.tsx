//Types
import type { Employee } from "../../api/employees.api";
type ReviewsProps = {
  employee: Employee;
};
function Reviews({ employee }: ReviewsProps) {
  return <div>{`${employee.name}'s Reviews`}</div>;
}

export default Reviews;
