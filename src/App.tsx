import Hero from "./Hero";
import Footer from "./Footer";
import FileUploadForm from "./FileUploadForm";

export default function App() {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden">
      <Hero />
      <FileUploadForm />
      <Footer />
    </div>
  );
};