import Header from "./Header";
import Hero from "./Hero";
import FileUploadForm from "./FileUploadForm";
import Results from "./Results";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <FileUploadForm />
      <Results />
      <Footer />
    </div>
  );
};