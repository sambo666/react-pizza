import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <div className="pizza-block">
      <ContentLoader
        speed={2}
        viewBox="0 0 400 440"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="156" y="341" rx="0" ry="0" width="0" height="1" />
        <rect x="0" y="245" rx="6" ry="6" width="400" height="30" />
        <circle cx="196" cy="114" r="114" />
        <rect x="0" y="285" rx="6" ry="6" width="400" height="80" />
        <rect x="0" y="383" rx="6" ry="6" width="100" height="30" />
        <rect x="266" y="380" rx="20" ry="20" width="134" height="40" />
      </ContentLoader>
    </div>
  );
}

export default LoadingBlock;
