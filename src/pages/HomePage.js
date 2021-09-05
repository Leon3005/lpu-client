import { useState } from "react";
import MainCard from "../components/MainCard";

const HomePage = () => {
  const users = [
    {
      username: "flewadam",
      imageUrl:
        "https://pbs.twimg.com/media/E9OaPOBXEAUWLd-?format=jpg&name=large",
      date: "04/09/2021",
    },
    {
      username: "leon",
      imageUrl:
        "https://pbs.twimg.com/media/E8Lz82lXMAU5xFM?format=jpg&name=large",
      date: "03/09/2021",
    },
  ];

  const [shoeCards, setShoeCards] = useState(users);

  const onClickUpVote = (username) => {
    setShoeCards(shoeCards.filter((user) => user.username !== username));
  };

  const onClickDownVote = (username) => {
    setShoeCards(shoeCards.filter((user) => user.username !== username));
  };

  return (
    <div>
      <MainCard
        username={shoeCards[0].username}
        shoeImage={shoeCards[0].imageUrl}
        date={shoeCards[0].date}
        onClickUpVote={onClickUpVote}
        onClickDownVote={onClickDownVote}
      />
    </div>
  );
};

export default HomePage;
