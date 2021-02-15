import React, { Component } from 'react';
import {
  ReactiveBase,
  CategorySearch,
  SingleRange,
  ReactiveList,
  ResultCard,
} from '@appbaseio/reactivesearch';

class App extends Component {
  render() {
    return (
      <ReactiveBase
        app="carstore-dataset"
        credentials="4HWI27QmA:58c731f7-79ab-4f55-a590-7e15c7e36721"
      >
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div
            style={{ display: 'flex', flexDirection: 'column', width: '40%' }}
          >
            <CategorySearch
              componentId="searchbox"
              dataField="model"
              categoryField="brand.keyword"
              placeholder="Search for cars"
              style={{
                padding: '5px',
                marginTop: '10px',
              }}
            />
            <SingleRange
              componentId="ratingsfilter"
              title="Filter by ratings"
              dataField="rating"
              data={[
                { start: '4', end: '5', label: '4 stars and up' },
                { start: '3', end: '5', label: '3 stars and up' },
                { start: '2', end: '5', label: '2 stars and up' },
                { start: '1', end: '5', label: 'see all ratings' },
              ]}
              defaultValue="4 stars and up"
              style={{
                padding: '5px',
                marginTop: '10px',
              }}
            />
          </div>
        </div>
      </ReactiveBase>
    );
  }
}

export default App;
