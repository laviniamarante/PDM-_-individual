import { Pressable, Text } from "react-native";

export default (props) => {
    let title = props.title || "Título";
    let onPress = props.onPress;
    let color = props.color || '#73b05f';
    let textColor = props.textColor || '#000000';
    let style = props.style;

    return(
        <Pressable
        //componente Pressable é usado para criar um botão que pode ser pressionado, e o estilo é definido usando as informações fornecidas abaixo
            onPress={onPress}
            //define a função onPress, que é chamada quando o botão é pressionado
            style={{
                backgroundColor: color,
                paddingVertical: 10,
                paddingHorizontal: 30,
                borderRadius: 18,
                ...style
                //esses tres pontos é pra receber o estilo definifo anteriormente 
            }}
        >
            <Text style={{color: textColor, ...style}}>{title}</Text>
        </Pressable>
    );

}