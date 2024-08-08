import ArticlesCard from "../../components/ArticlesCard/ArticlesCard";
import "./Articles.css";

const Articles = () => {
  return (
    <>
      <div className="articles relative py-10" id="articles">
        <h2 className="main-title">Cards</h2>
        <div className="container flex items-center gap-x-10 gap-y-4 md:flex-row flex-col">
          <ArticlesCard />
          <ArticlesCard />
          <ArticlesCard />
          <ArticlesCard />
        </div>
      </div>
      <div className="spikes"></div>
    </>
  );
};

export default Articles;
