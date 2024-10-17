import ContactInfo from "@/components/ContactInfo"; // Ensure the import path is correct
import ContactForm from "@/components/ContactForm";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact"
}
export default function ContactPage() {
  return (
    <div>
      {/* Full-width Box with gray background starting from the top */}
      <div className="w-full bg-gray-300 h-80 md:h-96 flex items-center justify-center">
        <div className="flex flex-col items-center w-full max-w-5xl px-4">
          <div className="flex items-center justify-center w-full">
            {/* Visible lines on all screens */}
            <hr className="w-1/4 sm:w-1/6 border-t border-secondary" /> {/* Shorter line on the left */}
            <h1 className="mx-4 text-4xl sm:text-5xl font-bold text-primary text-center">Sheba Coffee</h1> {/* Responsive font size */}
            <hr className="w-1/4 sm:w-1/6 border-t border-secondary" /> {/* Shorter line on the right */}
          </div>
          <p className="text-lg md:text-xl text-gray-700 text-center mt-4"> {/* Responsive font size */}
            Stay connected with the Sheba family—where every cup brings us closer together!
          </p>
        </div>
      </div>

      {/* Vertical line and Contact Us Title */}
      <div className="flex items-center justify-center mt-8"> {/* Increased margin-top for more gap */}
        <div className="border-l-2 border-primary h-12 mr-4" /> {/* Vertical line */}
        <h2 className="text-3xl md:text-4xl font-bold text-center">Contact Us</h2> {/* Responsive font size */}
      </div>

      {/* Flex container for Contact Info and Contact Form */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-8 justify-center items-center mx-auto p-4"> {/* Responsive padding */}
        <div className="flex-1 w-full md:w-1/2">
          <ContactInfo />
        </div>
        <div className="flex-1 w-full md:w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
