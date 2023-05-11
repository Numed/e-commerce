import { useParams } from "react-router-dom";

import Layout from "../../components/Layout";
import CardContent from "../../features/CardContent";

const SingleCardPage = () => {
  const { cardId } = useParams();
  return (
    <Layout>
      <CardContent />
    </Layout>
  );
};

export default SingleCardPage;
