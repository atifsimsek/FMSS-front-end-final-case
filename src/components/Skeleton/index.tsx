import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={360}
    height={320}
    viewBox="0 0 360 320"
    backgroundColor="#cfcfcf"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="5" ry="5" width="350" height="320" />
  </ContentLoader>
);

export default Skeleton;
