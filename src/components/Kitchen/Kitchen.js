import React from "react";

import * as G from "components/global";

const lipsum = (length = 1) => {
  let text =
    "Nulla neque tortor, sollicitudin et gravida et, euismod eu neque. Nulla sit amet pretium enim. Donec maximus arcu sollicitudin enim ornare, ac tempor tortor auctor. Fusce sem felis, gravida imperdiet cursus at, convallis auctor neque. Donec non metus elementum, dapibus tortor vel, rutrum est. Nullam at interdum orci. Donec placerat odio non lacus ultricies maximuG. Integer volutpat viverra enim eget malesuada. ";
  return text.substring(0, 32 * length);
};

export const Kitchen = () => {
  return (
    <G.LayVertical center>
      <G.LayVertical col={12} background={"bgd"} space={2}>
        <G.LaySpaceV s={8} />
        <G.UtilityText>Heading 1</G.UtilityText>
        <G.TypoH1>{lipsum(2)}</G.TypoH1>
        <G.LaySpaceV s={2} />
        <G.UtilityText>Heading 2</G.UtilityText>
        <G.TypoH2>{lipsum(2)}</G.TypoH2>
        <G.LaySpaceV s={2} />
        <G.UtilityText>Heading 3</G.UtilityText>
        <G.TypoH3>{lipsum(2)}</G.TypoH3>
        <G.LaySpaceV s={2} />
        <G.UtilityText>Body</G.UtilityText>
        <G.TypoBody>
          "Nulla neque tortor, sollicitudin et gravida et, euismod eu neque.
          Nulla sit amet pretium enim. Donec{" "}
          <G.InlineLink>maximus</G.InlineLink> arcu sollicitudin enim ornare, ac
          tempor tortor auctor. Fusce sem felis, gravida imperdiet cursus at,
          convallis auctor neque. Donec non metus elementum, dapibus tortor vel,
          rutrum est. Nullam at <G.InlineLink>interdum orci.</G.InlineLink>{" "}
          Donec placerat odio non lacus ultricies maximuG. Integer volutpat
          viverra enim eget malesuada.
        </G.TypoBody>
        <G.LaySpaceV s={2} />
        <G.UtilityText>Deocoration</G.UtilityText>
        <G.TypoInfo>Decoration Title</G.TypoInfo>
        <G.TypoInfo bold>Decoration Text</G.TypoInfo>
        <G.LaySpaceV s={2} />
        <G.LayHorizontal col={8} noSpread>
          <G.LayVertical auto>
            <G.UtilityText>Primary Button</G.UtilityText>
            <G.ButtonPrimary bold>Click Me</G.ButtonPrimary>
          </G.LayVertical>
          <G.LaySpaceH s={2} />
          <G.LayVertical auto>
            <G.UtilityText>Secondary Button</G.UtilityText>
            <G.SecondaryButton bold>Click Me</G.SecondaryButton>
          </G.LayVertical>
        </G.LayHorizontal>
        <G.LaySpaceV s={2} />
        <G.LayHorizontal col={8} noSpread>
          <G.LayVertical auto>
            <G.UtilityText>Inline Link</G.UtilityText>
            <G.InlineLink>Clicky Go</G.InlineLink>
          </G.LayVertical>
          <G.LaySpaceH s={2} />
          <G.LayVertical auto>
            <G.UtilityText>Nav Link</G.UtilityText>
            <G.ALink>Clicky Go</G.ALink>
          </G.LayVertical>
        </G.LayHorizontal>
        <G.LaySpaceV s={2} />
      </G.LayVertical>
    </G.LayVertical>
  );
};

export default Kitchen;
