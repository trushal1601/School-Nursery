import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import logo from '../../assets/Logo1.png';
import saved from '../../assets/saved.png';
import notification from '../../assets/notification.png';
import news1 from '../../assets/news1.jpeg';
import news2 from '../../assets/news2.jpeg';

const HomeScreen = ({navigation}) => {
  const [selected, setSelected] = useState(null);
  const data = [
    {
      id: 1,
      name: 'All',
    },
    {
      id: 2,
      name: 'India',
    },
    {
      id: 3,
      name: 'Sports',
    },
    {
      id: 4,
      name: 'Technology',
    },
    {
      id: 5,
      name: 'Business',
    },
    {
      id: 6,
      name: 'Politician',
    },
    {
      id: 7,
      name: 'Crime',
    },
  ];
  const newsData = [
    {
      id: 224767206,
      title: 'Jury to Begin Deliberations In Trump Trial',
      text: '...',
      summary: '...',
      url: 'https://politicalwire.com/2024/05/28/jury-to-begin-deliberations-in-trump-trial/',
      image: news1,
      video: null,
      publish_date: '2024-05-29 00:10:48',
      author: 'Taegan Goddard',
      authors: ['Taegan Goddard'],
    },
    {
      id: 224839780,
      title: "Jury in Donald Trump's hush money case to begin deliberations",
      text: '...',
      summary: '...',
      url: 'https://apnews.com/article/trump-trial-deliberations-jury-judge-verdict-390f045e9e8a37f069e82576edd7a842',
      image: news2,
      video: null,
      publish_date: '2024-05-29 04:30:08',
      author: 'Taegan Goddard',
      authors: [],
    },
  ];
  const renderItem = ({item}) => {
    const isSelected = selected === item.id;
    return (
      <View onTouchEnd={() => setSelected(item.id)}>
        <Text
          style={{
            backgroundColor: isSelected ? '#53b3fc' : 'white',
            padding: 10,
            marginHorizontal: 10,
            borderRadius: 20,
            fontSize: 17,
            color: isSelected ? 'white' : '#53b3fc',
          }}>
          {item.name}
        </Text>
      </View>
    );
  };
  const renderNews = ({item}) => {
    return (
      <TouchableOpacity
      onPress={()=> navigation.navigate('details',{
        news:item
      })}
        style={{
          marginTop: 30,
          backgroundColor: 'white',
          marginHorizontal: 20,
          borderRadius: 29,
          width: 330,
          paddingBottom: 20,
        }}>
        <Image
          source={item.image}
          style={{
            height: 190,
            width: '100%',
            borderTopLeftRadius: 19,
            borderTopRightRadius: 19,
          }}
        />
        <Text
          style={{
            fontSize: 18,
            paddingTop: 20,
            paddingHorizontal: 10,
            paddingBottom: 20,
            fontWeight: '600',
          }}>
          {item.title}
        </Text>
        <Text style={{paddingHorizontal: 10}}>{item.publish_date}</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 20,
            alignItems: 'center',
          }}>
          <Text style={{paddingLeft: 10, fontSize: 16, fontWeight: '300'}}>
            {item.author}
          </Text>
          <Image source={saved} style={{height: 20, width: 20}} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView style={styles.mainView}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo1} />
        <View style={styles.subHeader}>
          <Image source={saved} style={styles.icon} />
          <Image source={notification} style={styles.icon} />
        </View>
      </View>
      <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 10,
          }}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>Trending News</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 17, color: '#53b3fc'}}>View All</Text>
            <Text style={{fontSize: 20, color: '#53b3fc'}}>{'>>'}</Text>
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <FlatList
            data={data}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
          />
          <FlatList
            data={newsData}
            renderItem={renderNews}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
      <View>
      <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 10,
          }}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>Global Stories!</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 17, color: '#53b3fc'}}>View All</Text>
            <Text style={{fontSize: 20, color: '#53b3fc'}}>{'>>'}</Text>
          </View>
        </View>
        {/* <View style={styles.listContainer}> */}
        <FlatList
          data={newsData}
          keyExtractor={(item) => item.title}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{padding:10}}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemContainer}
            >
              <Image source={item.image} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                {/* <Text style={styles.subtitle}>{itemtitle2}</Text>
                <Text style={styles.description}>{item.productdesc.desc}</Text> */}
              </View>
            </TouchableOpacity>
          )}
        />
      {/* </View> */}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainView: {flex: 1},
  header: {
    padding: 10,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    // alignItems:'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  logo1: {
    height: 90,
    width: 160,
    resizeMode: 'contain',
  },
  icon: {
    height: 25,
    width: 25,
  },
  subHeader: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    marginTop: 7,
  },
  listContainer: {
    padding: 15,
  },
  itemContainer: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 135,
    width: 130,
    borderRadius:15,
    flex: 0.52,
  },
  textContainer: {
    flex: 0.48,
    paddingLeft: 10,
  },
  title: {
    fontSize: 17,
    fontFamily: "outfit",
  },
  subtitle: {
    fontSize: 13,
    color: 'black',
    fontFamily: "outfit",
  },
  description: {
    fontSize: 9.8,
    color:'gray',
    fontFamily: "outfit",
  },
});
