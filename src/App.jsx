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
        <div className="lexr-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
          20,120 members
        </div>
        <form
          action="https://www.getrevue.co/profile/stephaniekarolinasanchez/add_subscriber"
          method="post"
          id="revue-form"
          name="revue-form"
          target="_blank"
        >
          <div className="flex flex-col md:flex-row justify-center mb-4">
            <input
              className="revue-form-field"
              placeholder="Your email address..."
              type="email"
              name="member[email]"
            />
            <input type="submit" value="Join today" name="member[subscribe]" />
          </div>
          <div className="opacity-75 italic">
            By subscribing, you agree with Revue's
            <a
              target="_blank"
              href="https://www.getrevue.co/terms"
              className="hover:opacity-80 duration-150"
            >
              Terms of Service
            </a>
            and
            <a
              target="_blank"
              href="https://www.getrevue.co/privacy"
              className="hover:opacity-80 duration-150"
            >
              Privacy Policy
            </a>
            .
          </div>
        </form>
      </main>
      <footer className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="mb-4 md:mb-0 md:text-xl">by Stephanie Sanchez</p>
          <div className="container -mx-6">
            <a href="#" className="mx-3 hover:opacity-80 duration-150">
              About us
            </a>
            |
            <a href="#" className="mx-3 hover:opacity-80 duration-150">
              Privacy
            </a>
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
