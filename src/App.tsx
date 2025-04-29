import "./App.css";
import Article from "./components/Article.tsx";
import Header from "./components/Header.tsx";
import Nav from "./components/Nav.tsx";
import blogs from "./assets/blogData.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <main>
      <Header />
      <Nav />
      {blogs.map((blog) => {
        return <Article {...blog} />;
      })}
      <Footer />
    </main>
  );
}

export default App;
