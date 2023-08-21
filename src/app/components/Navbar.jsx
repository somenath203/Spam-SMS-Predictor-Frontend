const Navbar = ({ children }) => {
  return (
    <div>

        <nav className="flex items-center justify-between p-4">
            <p className="text-xl lg:text-2xl ml-8 text-violet-700 font-semibold tracking-wide">Spam SMS Classifier</p>
        </nav>

        {children}

    </div>
  )
};

export default Navbar