import Introduction from "../components/introduction";
import Loading from "../components/loading";

export default function Home() {
  return (
    <main className="mt-20">
      <section
        id="generate"
        className="h-[calc(100vh_-_80px)] flex justify-center items-center"
      >
        <Loading></Loading>
      </section>
    </main>
  );
}
