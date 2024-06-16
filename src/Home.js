import 'bootstrap/dist/css/bootstrap.min.css';
import HomeHero from "./Hero/HomeHero.js";
import { wyns, mission1, mission2, support, philanthropy, advocacy, recruitment, knowledge } from "./assets/data.js";
import HorizontalCard from "./Cards/HorizontalCard.js";

function Home() {
  const titleStyle = {
    fontFamily: "League Spartan",
    textTransform: "uppercase",
    fontSize: "2.5rem",
    textAlign: "center",
    paddingTop: "6rem"
  };

  const hcBackground = {
    background: "linear-gradient(#FCA5D9, #E3F0E4)"
  }

  return (
    <>
      <HomeHero
      mission1={mission1}
      mission2={mission2}
      title={wyns}
      href="#spark"
      buttonText="Read more"/>
      <div style={hcBackground}>
        <h2 style={titleStyle} id="spark">Our Mission</h2>
        <div className="container col-9 pb-5">
          <HorizontalCard alt="the letter s" title="Support" bodyText={support} />
          <HorizontalCard alt="the letter p" title="Philanthropy" bodyText={philanthropy} />
          <HorizontalCard alt="the letter a" title="Advocacy" bodyText={advocacy} />
          <HorizontalCard alt="the letter r" title="Recruitment" bodyText={recruitment} />
          <HorizontalCard alt="the letter k" title="Knowledge" bodyText={knowledge} />
        </div>
      </div>
    </>
  )
}

export default Home;