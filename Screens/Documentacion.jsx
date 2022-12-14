import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Boton from '../components/Boton';
import { useEffect,useState }from 'react';
import axios from 'axios';
import { ImageBackground } from 'react-native-web';
import Boton3 from '../components/Boton3';

const Documentacion =({navigation})=>{

  const [documentacion, setdocumentacion] = useState([]);

  useEffect(() => {
    axios
        .get("http://localhost:5000/contenidos/contenido/documento")
        .then((response) => {
          console.log(response.data)
            setdocumentacion(response.data);
        });
  }, [])
  
  navigation = useNavigation();

  return (
    <ImageBackground source={require("../assets/fondo.jpg")} resizeMode="cover"  style={styles.image} >
    <View style={styles.fondo}>
      <View style={styles.margen}>
      {documentacion.map(obj => <Boton3
          text={obj.titulo}
          onPress={ () =>{
              navigation.navigate('DescripcionDocumentos',{id:obj.id_contenido})
            }}></Boton3>)}

      </View>
    </View>
    </ImageBackground>
  );
}
  
  export default Documentacion
  
  const styles = StyleSheet.create({
    logo: {
      width: '70%',
      height: '25%',
      position: 'absolute',
      top: '20%',
      left:'15%'
  },
    image: {
      height:'100%',
      alignItems: 'center',
    },
    titulo: {
      position: 'absolute',
      top: '45%',
      color: 'blue',
      fontSize: 20
    },
    fondo: {
      flex: 1,
    },
    margen:{
        marginTop: '25%',
        flexDirection:'row'
    }
  });