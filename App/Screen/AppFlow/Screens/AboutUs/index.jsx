import {Text, View} from 'react-native';
import React from 'react';
import Header from '../../../../Components/Header';
import {AboutUsStyle} from './AboutUsStyle';

const AboutUs = () => {
  return (
    <View style={AboutUsStyle.container}>
      <Header header={'About Us'} />
      <View style={AboutUsStyle.contentContainer}>
        <Text style={AboutUsStyle.paragraph}>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attribu ted
          to an unknown typesetter in the 15th cent ury who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book. The purpose of lorem ipsum is to create a natural
          looking block of text (sentence, paragraph, page, etc.) that doesn't
          distract from the layout. Practice not without controversy, laying out
          pages with meaningless filler text can be very useful when the focus
          is meant to be on design, not content. The passage experienced a surge
          in popularity during the 1960s when Letraset used it on their
          dry-transfer sheets, and again during the 90s as desktop publishers
          bundled the text with their software. Today it's seen all around the
          web; on templates, websites, and stock designs. Use our generator to
          get your own, or read on for the authoritative history of lorem ipsum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Text style={[AboutUsStyle.paragraph, AboutUsStyle.secondParagraph]}>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attribu ted
          to an unknown typesetter in the 15th cent ury who is thought to have
          scrambled parts of Cicero's.
        </Text>
      </View>
    </View>
  );
};

export default AboutUs;