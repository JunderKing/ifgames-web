import { Route, Routes } from "react-router-dom";
import HomeFooter from "../components/HomeFooter";
import HomeHeader from "../components/HomeHeader";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";

export default function HomeLayout() {
  return (
    <div>
      <HomeHeader/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/blog" Component={Blog}/>
        <Route path="/blog/detail" Component={BlogDetail}/>
      </Routes>
      <HomeFooter/>
    </div>
  )
}