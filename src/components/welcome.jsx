import logo from '../images/shoshone.jpg';

const Welcome = () => (
  <>
    <div className="col-span-12 md:col-span-7 text-black px-3 my-3 mr-5">
      <p className="font-bold mb-5 text-xl">
        Welcome to Tenacious Legal Support
      </p>
      <p className="mb-5">
        We are here to meet all of your legal support needs for the entire Magic
        Valley. We provide the fastest and most reliable process serving in the
        area with over 10 years of experience. We are former employees of and
        were trained at Tri-County Process Serving in Boise, Idaho, and have
        worked in conjunction with them in the Magic Valley since 2005. We are
        proud to bring our knowledge, support, and resources to the Magic
        Valley.
      </p>
    </div>
    <div className="col-span-12 md:col-span-5 pt-2 my-auto">
      <img
        className="rounded shadow-xl"
        src={logo}
        alt="Tenacious Legal Support"
      />
    </div>
  </>
);

export default Welcome;
