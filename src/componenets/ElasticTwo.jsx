import React from 'react';

import elasticsearch from 'elasticsearch';

const client = new elasticsearch.Client({
  host: 'http://127.0.0.1:9200/',
});

client
  .search({
    index: 'movies', // Your index name for example crud
    //type: 'doc', // Your index name for example doc
  })
  .then(
    function (resp) {
      console.log(resp.hits.hits);
    },
    function (err) {
      console.log(err.message);
    }
  );

export default function ElasticTwo() {
  return (
    <div>
      <h1>Elastic two</h1>
    </div>
  );
}
