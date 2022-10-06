import Navbar from "../components/navbar/Navbar";
import PostList from '../components/postList/PostList';

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <section className="mt-2 flex flex-col items-center mx-auto
      px-5 md:px-20 lg:px-40">
        <PostList />
      </section>
    </main>  
  );
};
