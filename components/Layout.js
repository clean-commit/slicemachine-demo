export const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <footer className='bg-black py-6 text-center text-white'>
        Created by clean commit
      </footer>
    </>
  );
};
