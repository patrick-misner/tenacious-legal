import logo from '../images/shoshone.jpg';

const Welcome = () => (
  <>
    <div className="col-span-12 md:col-span-7 md:text-left text-center px-3 my-3 mr-5">
      <p className="font-bold mb-5 text-xl dark:text-white text-center">
        Welcome to Tenacious Legal Support
      </p>
      <p className="mb-7">
        Tenacious Legal Support is a trusted source for professional legal
        process serving in the Magic Valley. With our extensive experience
        serving papers since 2005, we understand the importance of prompt and
        reliable service.
      </p>
      <p className="mb-5">
        Our team is dedicated to providing exceptional support to law firms and
        private individuals in need of legal document delivery. We pride
        ourselves on our speed, accuracy, and commitment to exceeding our
        clients' expectations. Discover how we can assist you with your legal
        needs today.
      </p>
    </div>
    <div className="col-span-12 md:col-span-5 pt-2 my-auto hover:scale-105 transition duration-300">
      <img
        className="rounded shadow-xl"
        src={logo}
        alt="Tenacious Legal Support"
      />
    </div>
  </>
);

export default Welcome;
