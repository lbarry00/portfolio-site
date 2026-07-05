function Index() {
  return (
    <div className="flex-1 bg-base-200 flex flex-col lg:flex-row justify-center items-center gap-10 m-10">
      <img
        src="./img/tianmen.jpg"
        className="lg:max-w-lg max-w-2/3 rounded-lg shadow-lg shadow-black"
      />
      <div className="lg:text-left text-center">
        <h1 className="text-8xl font-bold">Hello! 👋</h1>
        <p className="py-6 lg:text-2xl text-4xl">I'm Leo, a software engineer from Seattle, WA.</p>
      </div>
    </div>
  );
}

export default Index;
