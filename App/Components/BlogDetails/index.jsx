import {Dimensions, Image, Text, View} from 'react-native';
import React from 'react';
import Fonts from '../../assets/fonts/Fonts';
import Colors from '../../assets/colors/Colors';
import Header from '../Header';
import RenderHtml from 'react-native-render-html';
import {BlogDetailsStyle} from './BlogDetailsStyle';

const BlogDetails = ({route}) => {
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
            source={require('../../assets/images/blog.png')}
            style={BlogDetailsStyle.blogImage}
          />
        ) : (
          <Image
            source={require('../../assets/images/Parent.png')}
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
