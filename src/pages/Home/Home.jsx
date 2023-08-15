import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Row from "../../components/row/Row";
import requests from "../../constants/requests";
import SearchForm from "../../components/searchform/SearchForm";
import { useState } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Banner />
      <Row title={"Trending"} getMovies={requests.getTrendingMovies} />
      <Row title={"Action"} getMovies={requests.getActionMovies} />
      <Row title={"Comedy"} getMovies={requests.getComedyMovies} />
      <Row title={"Horror"} getMovies={requests.getHorrorMovies} />
      <Row title={"Romance"} getMovies={requests.getRomanceMovies} />
      <Row title={"Documentary"} getMovies={requests.getDocumentaries} />
      <SearchForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Home;
