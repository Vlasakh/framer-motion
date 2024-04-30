const Comments = ({ entities = [] }) => {
  return (
    <ul>
      {entities.map((comment, idx) => (
        <li key={comment.id}>
          <h2>
            {entities.length - idx} {comment.name}
          </h2>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
};

export { Comments };
