import { useState } from "react";
import MainCard from "../components/MainCard";

const HomePage = () => {
  const users = [
    {
      id: 1,
      username: "flewadam",
      imageUrl:
        "https://pbs.twimg.com/media/E9OaPOBXEAUWLd-?format=jpg&name=large",
      date: "04/09/2021",
    },
    {
      id: 2,
      username: "leon",
      imageUrl:
        "https://pbs.twimg.com/media/E8Lz82lXMAU5xFM?format=jpg&name=large",
      date: "03/09/2021",
    },
  ];

  const [shoeCards, setShoeCards] = useState(users);
  const [likedShoes, setLikedShoes] = useState([]);

  const onClickUpVote = (id) => {
    setLikedShoes([...likedShoes, id]);
    setShoeCards(shoeCards.filter((user) => user.id !== id));
  };

  const onClickDownVote = (id) => {
    setShoeCards(shoeCards.filter((user) => user.id !== id));
  };

  console.log(likedShoes);

  return (
    <div>
      <MainCard
        id={shoeCards[0].id}
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
