import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
import MessageForm from "./MessageForm";

const ChatFeed = (props) => {
  console.log(props);
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];

  const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
    <div
      key={`read_${index}`}
      className="read-receipt"
      style={{
        float: isMyMessage ? 'right' : 'left',
        backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
      }}
    />
  ));
  // console.log(chat, userName, messages);
  const renderMessages = () => {
    const keys = Object.keys(messages); //is a built-in JavaScript method that takes an object as an argument and returns an array containing all the enumerable property keys of that object.
    // console.log(keys);//[0: "2023-06-15 03:37:57.052687+00:00",1: "2023-06-15 05:08:20.700220+00:00"]
    return keys.map((key, index) => {
      const message = messages[key];
      const previousMessageKey = index === 0 ? null : keys[index - 1]; //message的上一条message
      console.log(" message", message);
      console.log("previous message", messages[previousMessageKey]);
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                previousMessage={messages[previousMessageKey]}
              />
            )}
          </div>
          <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };
  renderMessages();

  

  if (!chat) return "Loading...";
  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: '100px' }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
