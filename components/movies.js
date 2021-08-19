import Tumbnail from './tumbnail'

function Movies(props) {
  const { results } = props;

  return <div>{results.map(result => <Tumbnail />)}</div>;
}

export default Movies;
