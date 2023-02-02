import DefaultImage from "../../assets/images/panel-default-image.png";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import { CardImageContainer, CardsList, CardWrapper } from "./Card.styles";

type Cards = {
  cards: string[];
};

const Card = ({ cards }: Cards) => {
  return (
    <CardsList>
      {cards.map((_, index) => {
        return (
          <CardWrapper key={index}>
            <CardImageContainer>
              <img src={DefaultImage} alt="" />
              <div>
                <CalendarTodayRoundedIcon /> 2min atrás
              </div>
            </CardImageContainer>

            <h4>
              Lorem Ipsum is simply dummy text of the printing and typesettin...
            </h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesettin.
            </p>
          </CardWrapper>
        );
      })}
    </CardsList>
  );
};

export default Card;
