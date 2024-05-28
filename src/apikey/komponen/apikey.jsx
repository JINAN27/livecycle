import React from 'react';

class Apikey extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <h1 className="mb-4">Cari Berita</h1>
        <h2 className="mt-4">Pencarian</h2>
        <div className="mb-3">
          <input type="text" className="form-control" id="searchInput" placeholder="Cari..." />
        </div>
        <div id="newsList"></div>
        <hr />
      </div>
    );
  }
}

export default Apikey;
