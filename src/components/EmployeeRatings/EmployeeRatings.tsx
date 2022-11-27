import { Stack } from "@mui/material";

import RatingCard from "../RatingCard/RatingCard";

//Types
import type { Employee } from "../../api/employees.api";
type EmployeeInfoProps = {
  employee: Employee;
};
function EmployeeRatings({ employee }: EmployeeInfoProps) {
  return (
    <div>
      {employee.ratings.length === 0 && "No Ratings yet"}
      <Stack spacing={1}>
        {employee.ratings.map((rating) => (
          <RatingCard rating={rating} name={rating.user.name} />
        ))}
      </Stack>
    </div>
  );
}

export default EmployeeRatings;
