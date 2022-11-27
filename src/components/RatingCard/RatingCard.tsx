import { Rating, Stack, Avatar, Typography } from "@mui/material";
import { ColoredStack } from "../../theme/styledComponents";
import MenuButton from "../MenuButton/MenuButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

//Types
import type { Rating as RatingClass } from "../../api/employees.api";
type RatingCardProps = {
  rating: RatingClass;
  name: string;
};
function RatingCard({ rating, name }: RatingCardProps) {
  return (
    <ColoredStack spacing={0.5}>
      <Stack
        direction="row"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack direction="row" spacing={1} alignItems={"center"}>
          <Avatar>{name[0]}</Avatar>
          <div>{name}</div>
        </Stack>
        <MenuButton
          icon={<MoreVertIcon fontSize="small" />}
          items={[{ text: "report" }]}
        />
      </Stack>
      <Rating size="small" readOnly value={rating.value} />
      <Typography>{rating.comments}</Typography>
    </ColoredStack>
  );
}

export default RatingCard;
