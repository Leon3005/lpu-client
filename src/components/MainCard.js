const MainCard = ({
  id,
  username,
  shoeImage,
  date,
  onClickUpVote,
  onClickDownVote,
}) => {
  return (
    <div className="cardContainer">
      <div className="mainCard">
        <div>
          <img src={shoeImage} className="cardImage" />
        </div>
        <div className="cardDetails">
          <div className="cardUsername">
            <h3>@{username}</h3>
            <img
              src="https://yt3.ggpht.com/Z_Ky2cO1dodI88N0ofZvBs1Rw8iAVW58jWWzMQOZbV75dfz1MZZmxfSw4SF5H7gk0ynCjdJc_YQ=s108-c-k-c0x00ffffff-no-rj"
              alt="Avatar"
              class="avatar"
            />
          </div>
          <div className="cardArrowsContainer">
            <div className="downvoteContainer">
              <i
                className="bi bi-arrow-down-circle"
                onClick={() => onClickDownVote(id)}
              ></i>
            </div>
            <div className="upvoteContainer">
              <i
                className="bi bi-arrow-up-circle"
                onClick={() => onClickUpVote(id)}
              ></i>
            </div>
          </div>
          <div className="cardDate">
            <h3>{date}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
