import Tumbnail from "./tumbnail";

function Movies(props) {
  const { results } = props;

  return (
    <div>
      {results.map((result) => (
        <Tumbnail key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Movies;
