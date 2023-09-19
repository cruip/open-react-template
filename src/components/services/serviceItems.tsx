const Item = ({ imgsrc, heading, content }: any) => {
  return (
    <div className="w-[30%] bg-[#ffffff12] rounded-xl flex flex-col gap-5 mb-[100px] items-center pb-9 px-9">
      <img className="w-64 mt-[-100px]" src={`/static/images/${imgsrc}`} />
      <p className="text-2xl font-bold text-white">{heading}</p>
      <p className="text-xl font-bold text-gray-200 text-center">{content}</p>
    </div>
  );
};

const items = [
  {
    imgsrc: "digital-service.png",
    heading: "Digital marketing",
    content:
      "Get more traffic and generate more leads. Meet your business goals with us!",
  },
  {
    imgsrc: "uiux-service.png",
    heading: "UI/UX Design",
    content:
      "Get more traffic and generate more leads. Meet your business goals with us!",
  },
  {
    imgsrc: "app-service.png",
    heading: "App Development",
    content:
      "Get more traffic and generate more leads. Meet your business goals with us!",
  },
  {
    imgsrc: "devops-service.png",
    heading: "DevOps",
    content:
      "Get more traffic and generate more leads. Meet your business goals with us!",
  },
  {
    imgsrc: "commerce-service.png",
    heading: "Digital Commerce",
    content:
      "Get more traffic and generate more leads. Meet your business goals with us!",
  },
  {
    imgsrc: "qa-service.png",
    heading: "QA & Testing",
    content:
      "Get more traffic and generate more leads. Meet your business goals with us!",
  },
];

const Serviceitems = () => {
  return (
    <section className="flex flex-col items-center px-40 pt-24">
      <p className="text-4xl font-semibold text-white mb-5">
        Where Passion Meets Creativity!
      </p>
      <p className="text-sm font-black text-gray-100 mb-40">
        We’ll bring creative and effective strategies to fasten your growth
        methodology. Our team always goes the extra mile for your success.
      </p>
      <div className="flex flex-wrap justify-center gap-9">
        {items.map((item: any, index: number) => {
          return <Item {...item} key={`service-item-${index}`} />;
        })}
      </div>
    </section>
  );
};

export default Serviceitems;
