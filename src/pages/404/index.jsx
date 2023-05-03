import { Link } from "react-router-dom";
import Layout from "../../features/Layout";
import { ErrorContainer, ErrorText } from "./styles";

const ErrorPage = () => {
  return (
    <Layout navTitle="Error">
      <ErrorContainer>
        <ErrorText>
          We can't find the page you are looking for. Please{" "}
          <Link to="/products">click here</Link> to continue shopping.
        </ErrorText>
      </ErrorContainer>
    </Layout>
  );
};

export default ErrorPage;
