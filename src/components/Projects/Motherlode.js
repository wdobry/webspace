import React from "react";
import { useEffect } from "react";
import * as S from "./styles";

import i_hero from "assets/motherlode/i_hero.png";
import challange from "assets/motherlode/challange.jpg";
import i_process01 from "assets/motherlode/i_process01.jpg";
import i_process02 from "assets/motherlode/i_process02.jpg";
import i_process01b from "assets/motherlode/i_process01b.jpg";
import i_process02b from "assets/motherlode/i_process02b.jpg";
import i_process03 from "assets/motherlode/i_process03.jpg";
import i_process04 from "assets/motherlode/i_process04.jpg";
import i_process05 from "assets/motherlode/i_process05.jpg";
import last from "assets/motherlode/last.jpg";

export const Motherlode = () => {
  const B = "0, 0%, 93%";
  const F = "221, 0%, 15%";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Wrapper foreground={F} background={B}>
      <S.Center>
        <S.Date>January 2020 - January 2021</S.Date>
        <S.Heading>
          High Fashion
          <br />
          Driven by Gen Z
        </S.Heading>
        <S.Intro>
          Motherlode is an exclusive hub for high fashion enthusiasts. A
          relatively small group of people can buy-sell or exchange apparel. In
          addition, it is made for sharing ideas, outfits, and events.
        </S.Intro>
        <S.Img rad={0.25} src={i_hero} width={100}></S.Img>
      </S.Center>
      <S.SectionTitle>The Challenge</S.SectionTitle>
      <S.Paragraph>
        The streetwear community has been struggling with counterfeits and trust
        issues for far too long, yet no one tried to create something that is
        really tailored for its needs.
      </S.Paragraph>
      <S.Spacer s={4} />
      <S.Img rad={0.25} src={challange} width={100}></S.Img>
      <S.SectionTitle>Process</S.SectionTitle>
      <S.Paragraph>
        To confirm product functionality and find early errors, I facilitated
        conversations among stakeholders through online meetings. High-fidelity
        wireframes and prototyping allowed me to test the product before
        stylized interface design began. I used Figma’s prototyping features,
        producing a functional prototype of the app for testing.
      </S.Paragraph>
      <S.Spacer s={4} />
      <S.ImgRow col="1fr 1fr" width={80}>
        <S.ImgCol>
          <S.Img rad={0.25} src={i_process01} width={100}></S.Img>
        </S.ImgCol>
        <S.ImgCol>
          <S.Img rad={0.25} src={i_process03} width={100}></S.Img>
        </S.ImgCol>
      </S.ImgRow>
      <S.Spacer s={1} />
      <S.ImgRow col="1fr 1fr" width={80}>
        <S.ImgCol>
          <S.Img rad={0.25} src={i_process02} width={100}></S.Img>
        </S.ImgCol>
        <S.ImgCol>
          <S.Img rad={0.25} src={i_process04} width={100}></S.Img>
        </S.ImgCol>
      </S.ImgRow>
      <S.Spacer s={4} />
      <S.Paragraph>
        Multi-purpose components allow the design hierarchy to remain stable. I
        designed a complete set of these components that display similar content
        across the product and give the user an immediate sense of familiarity
        with each encounter.
      </S.Paragraph>
      <S.Spacer s={2} />
      <S.Paragraph>
        To ensure the scalability of the design system, I created modular
        components using product variables applied to the 12pt grid spacing. I
        produced dozens of such entities that together allowed the interface to
        scale as needed.
      </S.Paragraph>
      <S.Spacer s={4} />
      <S.ImgRow col="1fr 1fr" width={80}>
        <S.ImgCol>
          <S.Img rad={0.25} src={i_process01b} width={100}></S.Img>
        </S.ImgCol>
        <S.ImgCol>
          <S.Img rad={0.25} src={i_process02b} width={100}></S.Img>
        </S.ImgCol>
      </S.ImgRow>
      <S.Spacer s={4} />
      <S.Paragraph>
        By handpicking and editing dozens of free stock images, I could build up
        an image set that matches the brand identity. The processes of
        desaturation, denoising, color balancing, and other techniques that I
        used resulted in a consistent and diverse collection of images.
      </S.Paragraph>
      <S.Spacer s={4} />
      <S.Img rad={0.25} src={i_process05} width={50}></S.Img>
      <S.Spacer s={1} />
      <S.SectionTitle>About Motherlode</S.SectionTitle>
      <S.Paragraph>
        Motherlode allows users to share photos, thoughts, reviews, and more.
        Then they can link it to anything else within: items, drop release
        notes, events.
      </S.Paragraph>
      <S.Spacer s={2} />
      <S.Paragraph>
        Sneakerheads can finally stay up to date and never miss the release date
        of your favorite shoes and fashion events. In addition, we established
        collaboration with dozens of brands and stores, so users can follow up
        with everything in one app. We designed the entire experience
        specifically for high fashion resale purposes.
      </S.Paragraph>
      <S.Spacer s={2} />
      <S.Img rad={0.25} src={last} width={100}></S.Img>
    </S.Wrapper>
  );
};

export default Motherlode;
