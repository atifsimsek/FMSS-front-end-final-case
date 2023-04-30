import { useParams } from 'react-router-dom';
import Detail from '../components/Detail';

const DetailPage = () => {
  const { id } = useParams();

  return <Detail id={id} />;
};

export default DetailPage;
