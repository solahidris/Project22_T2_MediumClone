// Header.tsx

import MediumLogo from "../assets/medium.png";

const Header: React.FC = () => {
  return (
    <div className="border-b border-black pb-4 bg-[#ffc017]">
      {/* Components */}
      <div className="header flex justify-between mx-28 text-sm pt-5">
        {/* Left Side Header */}
        <img src={MediumLogo} alt="mediumlogo" className="w-44 h-auto" />
        {/* Right Side Header */}
        <div className="flex gap-8">
          {/* Hide on Mobile */}
          <div className="invisible lg:visible self-center flex gap-6">
            <button>Our Story</button>
            <button>Membership</button>
            <button>Write</button>
            <button>Sign In</button>
          </div>
          {/* Always Visible */}
          <button className="bg-black text-white rounded-full px-4 my-[2px]">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
