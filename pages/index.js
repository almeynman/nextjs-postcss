import stylesheet from "./index.css";
import Layout from "../components/Layout";

export default () =>
  <Layout>
    <div className="hello">
      <p>Hello World</p>
    </div>
    <style jsx>{stylesheet}</style>
  </Layout>;
