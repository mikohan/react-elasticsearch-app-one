import { Elasticsearch, Results } from 'react-elasticsearch';
import { url } from '../config';

export default function ElasticOne() {
  return (
    <Elasticsearch url={url}>
      <Results
        id="result"
        items={(data) => {
          console.log(data);
          return data.map((item) => <>{JSON.stringify(item._source)}</>);
        }}
      />
    </Elasticsearch>
  );
}
