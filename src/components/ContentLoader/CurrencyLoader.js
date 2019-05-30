import React, { Component } from 'react';
import ContentLoader from 'react-content-loader';

class CurrencyLoader extends Component {
  render() {
    return (
      <ContentLoader
        height={27}
        width={300}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
      >
        <rect x="0" y="0" rx="3" ry="3" width="70" height="6" />
        <rect x="0" y="10" rx="3" ry="3" width="120" height="6" />
        <rect x="0" y="20" rx="3" ry="3" width="170" height="6" />
        <rect x="200" y="0" rx="3" ry="3" width="100" height="6" />
      </ContentLoader>
    );
  }
}

export default CurrencyLoader;