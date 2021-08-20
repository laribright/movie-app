import FlipMove from 'react-flip-move';
import Tumbnail from "./tumbnail";

function Movies(props) {
  const { results } = props;

  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <Tumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
}

export default Movies;
