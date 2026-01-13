const Suggestions = ({ data, handleClick }) => {
  return (
    <div className="wrapper">
      <div className="sug">
        {data?.length ? (
          <div className="bb">
            {data.map((item, idx) => (
              <li onClick={handleClick} key={idx}>
                {item}
              </li>
            ))}
          </div>
        ) : (
          <div>No Results Found</div>
        )}
      </div>
    </div>
  );
};

export default Suggestions;
