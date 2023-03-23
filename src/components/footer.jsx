const Footer = () => (
  <>
    <hr className="col-span-12 h-px my-2 bg-gray-200 border-0 dark:bg-gray-300" />
    <div className="col-span-12 text-center md:text-left md:flex md:justify-between text-xs">
      <p>© 2009 Tenacious Legal Support. All rights reserved.</p>
      <div className="text-center pt-2 md:pt-0 md:text-left">
        Member of{' '}
        <a
          href="http://www.napps.org/ProcessServers?id=5418"
          className="text-blue-500 underline"
        >
          National Association of Professional Process Servers (NAPPS)
        </a>
      </div>
    </div>
  </>
);

export default Footer;
