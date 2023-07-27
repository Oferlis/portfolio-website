export default function About() {
  return (
    <div id="about" className="div-ex row-div about-div">
      <div className="my-auto mx-auto py-4">
        <h1 className="md:text-4xl text-2xl mb-4 w-5/6">Hey, I'm Ofer. 👋 </h1>
        <p className="md:text-lg text-xs w-5/6">
          I am a passionate software developer, currently working at Kyndryl.
          <br />
          I believe in continuous learning and staying up-to-date with the
          latest industry trends,
          <br /> collaboration and effective communication are fundamental to my
          work.
          <br />
          <br />
          In my spare time I contribute to opensource projects and practice
          towards running half marathon 🏃 <br />
          <br />I would love to hear from you.
        </p>
      </div>
      <div className="w-1/6 my-auto mr-3">
        <p>find an image</p>
        <img src={process.env.PUBLIC_URL + "/images/ofer_pic.png"} alt="me" />
      </div>
    </div>
  );
}
