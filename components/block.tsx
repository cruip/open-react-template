/**
 * example child element: <p className="text-lg text-gray-400 text-center"></p>
 */

export const Block = ({
  children,
  icon,
  title,
}: {
  children: React.ReactNode;
  icon: JSX.Element;
  title: string;
}) => (
  <div
    className="relative flex flex-col items-center"
    data-aos="fade-up"
    data-aos-anchor="[data-aos-id-blocks]"
  >
    {icon}
    <h4 className="h4 mb-2">{title}</h4>
    {children}
  </div>
);

