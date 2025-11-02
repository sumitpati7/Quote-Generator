import Introduction from "../components/introduction";

export default function Home() {
  return (
    <main className="mt-20">
      <section
        id="home"
        className="h-[calc(100vh_-_80px)] flex justify-center items-center bg-frame"
      >
        <Introduction></Introduction>
      </section>
      <section id="generate" className="h-screen"></section>
    </main>
  );
}
