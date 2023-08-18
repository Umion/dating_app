export const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold ">{children}</h2>
  );
};
