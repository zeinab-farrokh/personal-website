import React, { useEffect, useState } from "react";
// import react-router-dom
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router";
// import functions
import { getCookie } from "../utils/cookie";
// import components
import Home from "../pages/Home";
import About from "../pages/About";
import News from "../pages/News";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import NewsDetails from "../components/NewsDetails";
import Admin from "../adminPanel/Admin";
import Message from "../adminPanel/message/Message";
import MessageDetails from "../adminPanel/message/MessageDetails";
import IsReplyMessage from "../adminPanel/message/IsReplyMessage";
import NewsPage from "../adminPanel/news/NewsPage";
import CreateNews from "../adminPanel/news/CreateNews";
import UpdateNews from "../adminPanel/news/UpdateNews";
import RelatedNews from "../adminPanel/news/RelatedNews";
import Photos from "../adminPanel/slider/Photos";
import CreatePhoto from "../adminPanel/slider/CreatePhoto";
import NotFound from "../pages/NotFound";
import Videos from "../adminPanel/videos/Videos";
import CreateVideo from "../adminPanel/videos/CreateVideo";
import Private from "../components/Private";

function Router(props) {
  const token = getCookie("auth");

  return (
    <Routes>
      {/* import pages route */}
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/news" element={<News />}></Route>
      <Route path="/news/:slug" element={<NewsDetails />}></Route>
      <Route path="/gallery" element={<Gallery />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="*" element={<NotFound />}></Route>
      {/* import adminPanel route */}
      <Route
        path="/admin"
        element={token ? <Navigate to="/dashboard/news" /> : <Admin />}
      ></Route>

      <Route element={<Private />}>
        <Route path="/dashboard/message" element={<Message />}></Route>
        <Route
          path="/dashboard/message/:id"
          element={<MessageDetails />}
        ></Route>
        <Route
          path="/dashboard/message/reply"
          element={<IsReplyMessage />}
        ></Route>
        <Route
          path="/dashboard/message/unreply"
          element={<IsReplyMessage />}
        ></Route>
        <Route path="/dashboard/news" element={<NewsPage />}></Route>
        <Route path="/dashboard/news/create" element={<CreateNews />}></Route>
        <Route
          path="/dashboard/news/update/:id"
          element={<UpdateNews />}
        ></Route>
        <Route path="/dashboard/related-news" element={<RelatedNews />}></Route>
        <Route path="/dashboard/Photos" element={<Photos />}></Route>
        <Route path="/dashboard/Photos/add" element={<CreatePhoto />}></Route>
        <Route path="/dashboard/videos" element={<Videos />}></Route>
        <Route path="/dashboard/videos/add" element={<CreateVideo />}></Route>
      </Route>
    </Routes>
  );
}

export default Router;
