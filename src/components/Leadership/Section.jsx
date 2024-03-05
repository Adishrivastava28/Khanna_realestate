import React from "react";
import Scroll from "./Scroll";
import a from "./a.jpg";
import b from "./b.jpg";
import Fotter from "../Footer/Footer"
const Section = () => {
  return (
    <div>
      <Scroll></Scroll>
      <div
        id="section-1"
        className="mt-10 flex flex-col md:flex-row  sm:h-[600px]  bg-lightblue"
      >
        <div className="md:w-1/2 sm:w-1/2  mx-auto flex justify-center md:justify-center ">
          <img
            src={a}
            alt="Image"
            className="sm:mx-16 sm:w-3/5 sm:h-fit h-[400px] md:h-[500px]  md:ml-20 rounded-2xl hover:scale-105 duration-150"
          />
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 md:pl-4 ml-5 ">
          <div className="text-3xl flex justify-center font-semi-bold font-serif">
            ABOUT OUR FOUNDER
          </div>
          <div className="scrollable-text overflow-auto max-h-80 md:mt-6 md:mx-6">
            <p className="px-0 ">
              SOBHA epitomizes “passion at work” in totality. For us it is not
              only a catch phrase which sounds just right, rather we all strive
              to live it daily. It serves as our compass which guides us towards
              creating world class quality products and workmanship. It guides
              us to be transparent in all our dealings and adhere to delivery on
              time, each time. We draw heavily from the innate qualities of our
              founder, Mr. PNC Menon in imbibing and actually living the brand.
              Simply put, this means that we do not cut corners towards making
              best <br /> in – class products. Our work revolves around creating
              ‘quality’ with immense passion like Mr. Menon himself – the
              builder extraordinaire, who revolutionized the way people perceive
              quality in realty sector. Our track record of being the most
              reliable and trustworthy builder with a repertoire of award
              winning properties across India speaks for itself. We changed the
              skyline in Bangalore, created landmark developments in Kerala and
              have stepped into Delhi <br /> NCR, Chennai, Coimbatore, Mysore,
              Pune and many more to follow. As we peep into the future, we
              remain firmly committed towards creating urban living spaces where
              people can live, work and play smart. We are acutely conscious of
              the fact that due to rapid urbanization, there are huge challenges
              and as responsible real estate player we shall continue to provide
              intelligent solutions in a manner which is sustainable. We rely on
              our people, their capacities to innovate and use of technology to
              create immense value for all our stakeholders. We will continue to
              raise the bar and set new standards in the industry to strengthen
              this goal of ours.{" "}
            </p>
          </div>
        </div>
      </div>

      <div
        id="section-2"
        className="flex flex-col md:flex-row h-screen bg-lightgreen mt-[120px] md:mt-14"
      >
        <div className="md:w-1/2 flex justify-center md:order-2 h-3/4 ">
          <img
            src={b}
            alt="Image"
            className="sm:w-2/3 rounded-3xl hover:scale-95  duration-150 w-full h-full scale-90 "
          />
        </div>
        {/* Text */}
        <div className="md:w-1/2 md:order-1 md:pl-4 ">
          <div className="text-2xl flex justify-center md:mt-10">
            {" "}
            MESSAGE FROM OUR CHAIRMAN
          </div>
          <p className="scrollable-text overflow-auto max-h-80 md:mt-6 md:mx-6">
            Backward integration is what drives the organisation's turnkey
            projects. In a turnkey scenario, we bring the expertise of all our
            divisions to focus on every single aspect of a project. In other
            words, everything from precision engineering to aesthetic design and
            from quality metal glazing to high-class interiors is done
            in-house.br
            <br />
            This allows for stringent control on quality, which in turn gives
            our customers a fine combination of precision and aesthetics.
            <br /> The Infosys centres in Bangalore, Mysore and several other
            cities are fine examples of our expertise in turnkey construction.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            <div></div> Voluptatum in atque libero dignissimos dolorum quis
            architecto, nulla tempora aspernatur autem veritatis hic perferendis
            cupiditate quisquam iusto. Est maxime quas exercitationem.
          </p>
        </div>
      </div>
     {/*  <div
        id="section-3"
        className="h-screen mt-10 bg-lightpink  mx-auto  relative w-full"
      >
        Section 3
      </div> */}
      <div><Fotter></Fotter></div>
    </div>
  );
};

export default Section;
