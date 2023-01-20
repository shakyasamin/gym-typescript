import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum eos
            ex maiores quam distinctio harum incidunt tenetur similique. Totam
            placeat ea a dolores ducimus, soluta est similique saepe. Minus
            possimus iusto tenetur fugit ducimus voluptates totam maxime, autem
            numquam saepe exercitationem vitae et corrupti in. Hic, debitis
            corporis. Expedita, accusantium?
          </p>
          <p>© Evogym All Rights Reserves</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5"> Massa orci senectus</p>
          <p className="my-5"> Et gravida id et etiam</p>
          <p>Ulaamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5"> tempus metus mattis risus volutpat egestas</p>
          <p>(+977)452-1456</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
