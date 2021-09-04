const MainCard = () => {
  return (
    <div className="cardContainer">
      <div className="mainCard">
        <div>
          <img src="assets/images/adamshoe.png" className="cardImage" />
        </div>
        <div className="cardDetails">
          <div className="cardUsername">
            <h3>@flewadam</h3>
            <img
              src="https://yt3.ggpht.com/Z_Ky2cO1dodI88N0ofZvBs1Rw8iAVW58jWWzMQOZbV75dfz1MZZmxfSw4SF5H7gk0ynCjdJc_YQ=s108-c-k-c0x00ffffff-no-rj"
              alt="Avatar"
              class="avatar"
            />
          </div>
          <div className="cardArrowsContainer">
            <div>
              <i className="bi bi-arrow-down-circle"></i>
            </div>
            <div>
              <i className="bi bi-arrow-up-circle"></i>
            </div>
          </div>
          <div className="cardDate">
            <h3>03/09/2021</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
