import stylesheet from "./Layout.css";

export default ({ children }) =>
  <div className="container">
    <div className="header">Header</div>
    {children}
    <div className="footer">Footer</div>
    <style jsx>{stylesheet}</style>
  </div>;
