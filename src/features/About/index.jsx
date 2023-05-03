import {
  AboutContainer,
  AboutImage,
  AboutText,
  AboutTextContainer,
} from "./styles";

const AboutContent = () => {
  return (
    <AboutContainer>
      <AboutImage />
      <AboutTextContainer>
        <AboutText>
          We'd like to thank <span>Mr and Mrs White</span> for letting us use
          their imagery in this demo. Here's a word from them:
        </AboutText>
        <AboutText>
          We got married young, some would say too young - but we didn't
          care...when you know...you just know. Six years later we have a
          business and two daughters - their names are Selah Grace and Oak
          Louise. When we got married we had no idea what we were doing or where
          we were heading but we just went ... went about life as if we did and
          figured it out as we went along. We figured out that home was
          something important to both of us. A place to hide, a place to gather,
          a place you can be as messy, or for Nathan, a place to be as neat and
          orderly as you would like...colour coordinated wardrobes and all. Home
          was ours.
        </AboutText>
        <AboutText>
          Nathan's eye for detail and his love for timber led him to the study
          of boat building where he completed a four year shipwright
          apprenticeship. Meanwhile, I studied at uni and completed a degree in
          design majoring in Graphic design. Life was busy yet something was
          missing. After uni I found myself meddling with a sewing machine and
          Nathan gave up boats for furniture and suddenly, everything seemed a
          little clearer. The smell of timber, the touch of linen, that giddy
          feeling from seeing a concept sketch become something tangible -
          something we can sit on, eat on, organise and store things and most
          importantly - something that gathers people - yes - this is what we
          were meant to do... together.
        </AboutText>
        <AboutText>
          So in short, Mr White makes the furniture and Mrs White makes the
          textiles. We are all about simple, honest, handmade design with a
          focus on the natural beauty of the material whether it be timber,
          linen or leather.
        </AboutText>
      </AboutTextContainer>
    </AboutContainer>
  );
};

export default AboutContent;
