// BelowHeader.tsx

const BelowHeader: React.FC = () => {
  return (
    <div className="bg-[#ffc017] border-y border-black">
      <div className="max-w-[550px] lg:max-w-full lg:my-[57px] my-[70px] lg:mx-16 mx-6 flex flex-col">
        <div className="lg:pb-[9px] pb-[20px]">
          <span className="text-[70px] lg:text-[106px] font-serif tracking-tighter">
            Stay curious.
          </span>
        </div>
        <div className="pb-[47px] lg:max-w-[440px]">
          <span className="text-[24px] leading-4">
          Discover stories, thinking, and expertise from writers on any topic.
          </span>
        </div>
        <div className="pb-8">
          <button className="bg-black text-[20px] text-white rounded-full py-[6px] px-12">
            Start reading
          </button>
        </div>
      </div>
    </div>
  );
};

export default BelowHeader;
