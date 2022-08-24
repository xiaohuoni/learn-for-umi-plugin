import React from "react";
import { Outlet } from "umi";
import { Page, Content, Header, Footer } from "@alita/flow";

const Layout = ({}) => {
  return (
    <Page>
      <Header>
        掘金专栏:{" "}
        <a href="https://juejin.cn/column/7129853986781265933" target="_blank">
          Umi 插件开发
        </a>
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>
        Created by{" "}
        <a href="https://juejin.cn/user/1838039174227006" target="_blank">
          聪小陈
        </a>{" "}
        github ID：xiaohuoni
      </Footer>
    </Page>
  );
};

export default Layout;
