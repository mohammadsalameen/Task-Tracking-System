import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900   text-white py-6 text-center w-full ">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg font-semibold">Task Manager</p>
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} All Rights Reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link href="#" className="text-gray-400 hover:text-blue-400 transition">
            Privacy Policy
          </Link>
          <Link href="#" className="text-gray-400 hover:text-blue-400 transition">
            Terms of Service
          </Link>
          <Link href="#" className="text-gray-400 hover:text-blue-400 transition">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
