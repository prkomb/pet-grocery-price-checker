const Container = ({ children }) => {
  return (
    <div className="container w-1/2 mx-auto border">
      <h1 className="font-bold">{children}</h1>
    </div>
  );
};

export default Container;
