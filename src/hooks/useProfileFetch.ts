import { useEffect, useState } from "react";
import API, { RatingGivenByUser } from "../api/employees.api";

function useProfileFetch(userid: string) {
  const [allRatings, setAllRatings] = useState<RatingGivenByUser[]>([]);
  useEffect(() => {
    if (userid) {
      API.getRatingsGivenByUser(userid).then((fetchedRatings) =>
        setAllRatings(fetchedRatings)
      );
    }
  }, [userid]);
  return { allRatings };
}

export default useProfileFetch;
