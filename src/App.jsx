function App() {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <main className="container mx-auto px-6 pt-16 flex-1 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
          Welcome to
        </h2>
        <h1 className="text-3xl md:text-6xl lg:text-8xl font-black uppercase mb-8">
          The coding club
        </h1>
      </main>
      <footer className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="mb-4 md:mb-0 md:text-xl">by Stephanie Sanchez</p>
          <div className="container -mx-6">
            <a href="#" className="mx-3 hover:opacity-80 duration-150">
              About us
            </a>{" "}
            |
            <a href="#" className="mx-3 hover:opacity-80 duration-150">
              Privacy
            </a>{" "}
            |
            <a href="#" className="mx-3 hover:opacity-80 duration-150">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
