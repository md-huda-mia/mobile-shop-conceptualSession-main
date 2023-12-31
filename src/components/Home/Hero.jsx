import React, { useRef } from "react";

const Hero = ({ phones, setPhones }) => {
  const searchref = useRef();
  const handleSubmit = () => {
    const search = searchref?.current?.value.toLowerCase();
    const filterData = phones.filter((item) =>
      item.phone_name.toLowerCase().includes(search)
    );
    if (filterData.length > 0) {
      console.log(filterData);
      setPhones(filterData);
    } else {
      alert("inVaalid search");
    }
  };
  return (
    <div
      className="hero min-h-screen bg-top"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}>
      <div className="hero-overlay bg-white bg-opacity-70 "></div>
      <div className="hero-content text-center ">
        <div className="max-w-9/12">
          <h1 className="mb-5 text-5xl font-bold">Welcome To Mobile Bazar</h1>
          <p className="mb-5">
            This Mobile Edition of The Practical Reiki Symbol Primer from Earth
            Lodge delivers over 40 reiki <br /> symbols to your mobile device so
            you can always have them at your fingertips
          </p>
          <div className="relative">
            <input
              ref={searchref}
              defaultValue={""}
              type="text"
              placeholder="Search  by your favorite Phone Name"
              className="input input-bordered w-full pr-16"
            />
            <button
              onClick={handleSubmit}
              className="btn btn-primary absolute top-0 right-0 rounded-l-none">
              Search Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
