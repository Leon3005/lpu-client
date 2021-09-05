import MainCard from "../components/MainCard";

const HomePage = () => {
  const user = {
    username: "flewadam",
    imageUrl:
      "https://pbs.twimg.com/media/E9OaPOBXEAUWLd-?format=jpg&name=large",
    date: "04/09/2021",
  };

  return (
    <div>
      <MainCard
        username={user.username}
        shoeImage={user.imageUrl}
        date={user.date}
      />
    </div>
  );
};

export default HomePage;
