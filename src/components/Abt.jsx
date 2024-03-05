import React from "react";
import abtimg from "../assets/abtimg.jpg";
import "./Abt.css";

function Abt() {
  return (
    /*  <div className="p-4 m-4  container flex flex-1  ">
      <div className="w-96">
        <img src={abtimg} alt="img not found" className="w-96 " />
      </div>
      <div className="p-8 mx-16">
        <h2 className="head">PASSION AT WORK</h2>
        <div>
          {" "}
          <p className="text my-6 py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            non dignissimos et dolores eveniet necessitatibus atque error cumque
            ullam iusto quaerat nam mollitia suscipit eum quod molestias
            adipisci, possimus quo, reprehenderit alias quam ea dolore expedita
            at! Omnis exercitationem dolores voluptatem culpa. Laboriosam, quod
            eos? <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            a quibusdam odio asperiores hic, quo sunt veniam excepturi id
            necessitatibus aliquam quia ad, eligendi aspernatur unde illum, illo
            autem impedit repellat enim officiis!
          </p>
        </div>
        <div className="-mb-12 ">
          <button
            class="w-36 my-4 py-2 bg-transparent hover:bg-slate-600 text-gray-700 font-semibold hover:text-white px-4 border border-black hover:border-transparent rounded"
            id="btn"
          >
            Read More
          </button>
        </div>
      </div>
    </div> */
    <div className="flex h-[500px] my-[70px]">
      <div className="w-2/4 lg:h-full flex justify-center  m-3">
        <img
          className="border rounded-3xl sm:w-full md:w-[700px] h-[500px]"
          src={abtimg}
          alt=""
        />
      </div>
      <div className="w-2/4 md:w-[500px] mx-6 flex flex-col justify-evenly ">
        <div className=" ">
          <h2 className="head ">PASSION AT WORK</h2>
        </div>
        <div className=" container max-w-sm h-80 overflow-auto ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          non dignissimos et dolores eveniet necessitatibus atque error cumque
          ullam iusto quaerat nam mollitia suscipit eum quod molestias adipisci,
          possimus quo, reprehenderit alias quam ea dolore expedita at! Omnis
          exercitationem dolores voluptatem culpa. Laboriosam, quod eos?
        
      
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam a
          quibusdam odio asperiores hic, quo sunt veniam excepturi id
          necessitatibus aliquam quia ad, eligendi aspernatur unde illum, illo
          autem impedit repellat enim officiis!
        </div>
        <div className=" ">
          <button
            class="w-36 my-4 py-2 bg-transparent hover:bg-slate-600 text-gray-700 font-semibold hover:text-white px-4 border border-black hover:border-transparent rounded"
            id="btn"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Abt;
