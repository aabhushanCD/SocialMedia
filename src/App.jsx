import "./App.css";
import Header from "./Components/header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/sidebar";
import Form from "./Components/form";
import PostList from "./Components/postList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="slider_header">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>

        <div className="content">
          <Header></Header>

          {selectedTab === "Home" ? <PostList></PostList> : <Form></Form>}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
