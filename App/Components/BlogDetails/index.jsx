import {Dimensions, Image, Text, View} from 'react-native';
import React from 'react';
import Fonts from '../../assets/fonts/Fonts';
import Header from '../Header';
import RenderHtml from 'react-native-render-html';
import {BlogDetailsStyle} from './BlogDetailsStyle';
import { Images } from '../../assets/Assests';

const BlogDetails = ({route}) => {
  const getImageSource = img => {
    if (typeof img === 'string') {
      return {uri: img};
    }
    return img;
  };
  const source = {
    html: `
  <p style='text-align:center;'>
    Hello World!
  </p>`,
  };
  const {blog, header} = route.params;
  return (
    <View style={BlogDetailsStyle.container}>
      {header !== 'Blogs' ? (
        <Header header={blog.header} />
      ) : (
        <Header header={[header, ' Details']} />
      )}
      <View style={BlogDetailsStyle.contentContainer}>
        {header == 'Blogs' ? (
          <Image
            source={getImageSource(Images.blog_img)}
            style={BlogDetailsStyle.blogImage}
          />
        ) : (
          <Image
            source={getImageSource(Images.parent_img)}
            style={BlogDetailsStyle.blogImage}
          />
        )}

        <Text style={BlogDetailsStyle.publishDateText}>{blog.publishDate}</Text>
        <RenderHtml contentWidth={'100%'} source={source} />
      </View>
    </View>
  );
};

export default BlogDetails;
