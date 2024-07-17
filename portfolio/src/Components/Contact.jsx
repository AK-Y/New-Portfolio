const Contact = () => {
  return (
    <div
      id="Contact"
      className="contact p-4 lg:p-20 flex-col flex items-center justify-center"
    >
      <h1
        data-aos="fade-down"
        className="text-[52px] text-center font-semibold mb-5 leading-normal uppercase text-teal-600 flex flex-col justify-center items-center"
      >
        <div>
          {" "}
          Contact <span className="text-black opacity-50">Me</span>
        </div>
        <span className="h-2 w-10 rounded-full bg-black opacity-50"></span>
      </h1>
      <p className="mb-10 text-center text-xl text-white font-normal">
        {" "}
        Contact me by submitting the form below and I will get back to you as
        soon as possible
      </p>
      <form
        action="https://formspree.io/f/xjkbvkjz"
        method="POST"
        className="flex flex-col gap-2 sm:w-1/2"
      >
        <div data-aos="fade-up" className="lg:flex gap-6 ">
          <input
            name="username"
            className="w-full lg:my3 my-4 rounded-lg bg-transparent p-4 border-2 border-teal-700 b_glow text-xl text-slate-500"
            placeholder="Enter Your Name"
            type="text"
          />
          <input
            name="Email"
            className="w-full lg:my-3 my-4  rounded-lg bg-transparent p-4 border-2 border-teal-700 b_glow text-xl text-slate-500"
            placeholder="Enter Your Email"
            type="text"
          />
        </div>
        <textarea
          data-aos="fade-up"
          className="w-full my-3 rounded-lg bg-transparent p-4 border-2 border-teal-700 b_glow text-xl text-slate-500"
          placeholder="Write Your Massage..."
          name="message"
          id=""
          cols="20"
          rows="10"
        ></textarea>
        <button
          className="nano-button shadow-xl hover:shadow-teal-800/50 text-white border-2 border-teal-700 bg-transparent hover:bg-teal-700 rounded-lg duration-150 py-4 px-8 uppercase relative overflow-hidden b_glow text-xl text-bold mb-10 my-6"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
