import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Boton from '../components/Boton';
import { useEffect,useState }from 'react';
import JuegosListItem from '../components/JuegosListItem';
import axios from 'axios';
import Boton3 from '../components/Boton3';
  
const Preguntas =({navigation})=>{

  const [preguntas, setpreguntas] = useState([]);

  useEffect(() => {
    axios
        .get("http://localhost:5000/contenidos/preguntas")
        .then((response) => {
          console.log(response.data)
            setpreguntas(response.data);
        });
  }, [])
  
  navigation = useNavigation();

  return (
    <ImageBackground source={require("../assets/fondo.jpg")} resizeMode="cover"  style={styles.image} >
    <View style={styles.fondo}>
      <View style={styles.margen}>
      {preguntas.map(obj => <Boton3
          text={obj.pregunta}
          onPress={ () =>{
            console.log(obj.id_pregunta);
              navigation.navigate('DescripcionPreguntas',{id:obj.id_pregunta})
            }}></Boton3>)}

      </View>

    </View>
    </ImageBackground>
  );
}

  
  export default Preguntas;
  
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
      color: 'black',
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