import {Image, View, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import Colors from '../../../../assets/colors/Colors';
import Header from '../../../../Components/Header';
import MasonryList from '@react-native-seoul/masonry-list';
import {PhotoGalleryImg} from '../../../../Components/JsonData/JsonData';
import {PhotoGalleryStyle} from './PhotoGalleryStyle';
import Labels from '../../../../assets/Label/Labels';

const PhotoGallery = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const getImageSource = img => {
    if (typeof img === 'string') {
      return {uri: img};
    }
    return img;
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  const loadMoreData = () => {
    if (loadingMore) return;

    setLoadingMore(true);

    setTimeout(() => {
      const newData = PhotoGalleryImg.slice((page - 1) * 10, page * 10);
      setData(prevData => [...prevData, ...newData]);
      setPage(page + 1);
      setLoading(false);
      setLoadingMore(false);
    }, 1500);
  };

  const renderFooter = () => {
    return loadingMore ? (
      <ActivityIndicator size="large" color={Colors.Primary} />
    ) : null;
  };

  const renderItem = ({item}) => (
    <View style={PhotoGalleryStyle.imageContainer}>
      <Image
        source={getImageSource(item.img)}
        style={PhotoGalleryStyle.image}
      />
    </View>
  );

  return (
    <View style={PhotoGalleryStyle.container}>
      <Header header={Labels.photo_gallery} />
      {loading ? (
        <ActivityIndicator
          size="large"
          color={Colors.Primary}
          style={PhotoGalleryStyle.loader}
        />
      ) : (
        <MasonryList
          data={data}
          numColumns={2}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          onEndReached={loadMoreData}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
          contentContainerStyle={PhotoGalleryStyle.listContent}
        />
      )}
    </View>
  );
};

export default PhotoGallery;
