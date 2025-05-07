
export default function Home() {
  return (
    <section className="flex max-md:flex-col items-center text-black/80 dark:text-white bg-white dark:bg-gray-800 px-10 min-h-[100vh] max-md:text-center my-10 md:-mt-16">
      <div className="flex-1/2 flex flex-col gap-5">
        <h1 className="text-4xl md:text-5xl font-semibold leading-12 md:leading-15">Royal College Science Association</h1>
        <p className="mt-4 text-base leading-7 text-black/60 dark:text-white/60">
          Explore the mysteries of science with the Royal College Science Association, join us now and expand your knowledge
        </p>
      </div>
      <div className="flex-1/2"></div>
    </section>
  );
}
