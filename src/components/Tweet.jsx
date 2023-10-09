import "./ProfileImage";
import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  const user = props.user,
    name = props.tweet.user.name,
    image = props.tweet.user.image,
    handle = props.tweet.user.handle,
    timestamp = props.tweet.timestamp,
    message = props.tweet.message;
  console.log(props);
  return (
    <div className="tweet">
      {/* <img src={image} className="profile" alt="profile" /> */}
      <ProfileImage image={props.tweet.user.image} />
      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />

          <Timestamp time={props.tweet.timestamp} />
          {/* <span className="timestamp">{timestamp}</span> */}
        </div>
        <Message message={props.tweet.message} />
        {/* <p className="message">{message}</p> */}

        {/* Font Awesome icons */}
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
