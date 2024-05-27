function LeftPane({ children }) {
  return (
    <div className="2xl:w-2/5 xl:w-5/12 lg:w-3/6 w-full flex items-center p-2 flex-col ">
      {children}
    </div>
  );
}

function RightPane({ children }) {
  return (
    <div className="2xl:w-1/4 xl:w-3/12 lg:w-2/6 w-full dashboard text-black dark:text-white flex flex-col justify-center align-middle">
      {children}
    </div>
  );
}

function Layout({ children }) {
  return (
    <>
      <div className="flex flex-row justify-center gap-5 w-full h-full flex-wrap md:flex-nowrap bg-gray-300 p-2  dark:bg-gray-700 box-border text-white">
        {children}
      </div>
    </>
  );
}

Layout.LeftPane = LeftPane;
Layout.RightPane = RightPane;

export default Layout;
