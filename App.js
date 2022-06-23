import { StatusBar } from 'expo-status-bar';
import Home from './components/Home';
import {React } from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Ioniicon from 'react-native-vector-icons/Ionicons';



export default function App() {
  return (
    <><View style={styles.root}>
      <Home />
    </View>
    
    
    <View style={styles.container}>
        <View style={styles.ImageContainer}>
          <View>
            <Image style={{ height: 300, width: 300, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} source={require('./assets/back.jpg')} />
            <AntIcon style={{ position: 'absolute', top: 15, color: 'white', left: 20 }} name="arrowleft" size={25} />
            <Ioniicon style={{ position: 'absolute', top: 15, color: 'white', right: 20 }} name="md-ellipsis-horizontal-sharp" size={25} />
          </View>


          <View style={styles.avatarContainer}>
            <Image style={{ height: 200, width: 200, borderRadius: 80 }} source={require('./assets/avatar.jpeg')} />
          </View>

          <View style={styles.textContainer} />
          <Text style={styles.text}>

            Hanaa Dany
          </Text>
        </View>


        <View style={styles.buttonContainer} />
        <TouchableOpacity style={{ height: 12, width: 110, borderRadius: 40, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>

          <Text style={{ fontSize: 14, color: 'white', lineHeight: 18, fontWeight: 'bold' }}>
            Add to My Friends
          </Text>
        </TouchableOpacity>



      </View></>
  
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#959711',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageContainer:{
    height: 340 ,
    width:320,
    backgroundColor: 'white',
    borderRadius:21,
    elevation:3

  },
  avatarContainer:{
    height: 100 ,
    width:100,
    top:80,
    alignSelf:'center',
    position:'center'

  },
  textContainer:{
    height: 300 ,
    width:169,
    position:'absolute',
    top:196,
    left:75,
    alignItems: 'center'

  },
  text:{
    color:'white',
    alignSelf:'center',
    fontSize:20,
    lineHeight: 28,
    fontWeight: 'bold'
  },

buttonContainer:{
    height:32 ,
    width:166,
    top:268,
    position:'absolute',
    alignSelf:'center',
    alignItems: 'center',
    flexDirection:'row'
  }
});
