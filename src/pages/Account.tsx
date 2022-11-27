import { useAppSelector, useAppDispatch } from "../app/hooks";
import { selectUser } from "../components/User/userSlice";
import { openAccountVerification } from "../components/Dialog/dialogSlice";
import useProfileFetch from "../hooks/useProfileFetch";
import TabView from "../components/TabView/TabView";
import type { RatingGivenByUser } from "../api/employees.api";
import RatingCard from "../components/RatingCard/RatingCard";
//Mui
import { RoundedButton, Wrapper } from "../theme/styledComponents";
import { Stack } from "@mui/material";
function Account() {
  const user = useAppSelector((state) => selectUser(state));
  const dispatch = useAppDispatch();
  const { allRatings } = useProfileFetch(user._id);
  return (
    <Wrapper>
      {!user.isEmailVerified && (
        <>
          {`${user.name}'s account verification is still pending`}
          <RoundedButton
            onClick={() => {
              dispatch(openAccountVerification());
            }}
          >
            Verify Account
          </RoundedButton>
        </>
      )}
      <TabView
        tabs={["Activity"]}
        panels={[<RatingActivity allRatings={allRatings} />]}
      />
    </Wrapper>
  );
}

function RatingActivity({ allRatings }: { allRatings: RatingGivenByUser[] }) {
  return (
    <Stack spacing={1}>
      {allRatings.length === 0 && "No Ratings yet"}
      {allRatings.map((ratingGivenToEmployee) => (
        <RatingCard
          rating={ratingGivenToEmployee.rating}
          name={ratingGivenToEmployee.name}
        />
      ))}
    </Stack>
  );
}

export default Account;
