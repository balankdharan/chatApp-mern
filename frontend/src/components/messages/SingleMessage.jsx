const SingleMessage = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/instagram-food-1536589581.jpg"
            alt="user profile"
          />
        </div>
      </div>

      <div className={`chat-bubble text-white bg-blue-500`}>
        Hi! What are you
      </div>
      <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>
        13:51
      </div>
    </div>
  );
};

export default SingleMessage;
