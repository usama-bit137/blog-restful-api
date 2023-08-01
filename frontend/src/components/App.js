import Header from './Header';
import Link from './Link';
import BlogsList from './BlogsList';
import Footer from './Footer';

export default function App() {
  return (
    <div className="App">
      <Header title={'Quest of the Llama'}>
        <Link name="Home" to="/" />
        <Link name="About" to="/" />
        <Link name="Contact Me" to="/" />
      </Header>
      <BlogsList />
      <Footer />
    </div>
  );
}
