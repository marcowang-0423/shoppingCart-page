import { useContext } from "react";
import { Layout } from "antd";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import { StoreContext } from "../store";
import AppCheckOut from "../components/CheckOut";

const { Header, Content, Footer } = Layout;

function ShoppingCart() {
  const {
    state: {
      page: { title },
    },
  } = useContext(StoreContext);

  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader title={title} />{" "}
      </Header>{" "}
      <Content className="layout-content">
        <AppCheckOut />
      </Content>{" "}
      <Footer className="layout-footer">
        <AppFooter />
      </Footer>{" "}
    </Layout>
  );
}
export default ShoppingCart;
