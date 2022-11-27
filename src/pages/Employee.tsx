import { useParams } from "react-router";
//Mui
import { CenteredSpinner, Wrapper } from "../theme/styledComponents";
import useEmployeeFetch from "../hooks/useEmployeeFetch";
import EmployeeInfo from "../components/EmployeeInfo/EmployeeInfo";
import Reviews from "../components/Reviews/Reviews";
import EmployeeRatings from "../components/EmployeeRatings/EmployeeRatings";
import TabView from "../components/TabView/TabView";
function Employee() {
  const { id } = useParams();
  const { employee, loading } = useEmployeeFetch(id!);

  if (loading || !employee._id) return <CenteredSpinner />;
  return (
    <Wrapper>
      <EmployeeInfo employee={employee} />
      <TabView
        tabs={["Ratings", "Reviews"]}
        panels={[
          <EmployeeRatings employee={employee} />,
          <Reviews employee={employee} />,
        ]}
      />
    </Wrapper>
  );
}

export default Employee;
