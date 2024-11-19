// Exercise 1
// import React from 'react';
// import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
//
// const datasource = [
//     {key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'},
//     {key: 'f'}, {key: 'g'}, {key: 'h'}, {key: 'i'}, {key: 'j'},
//     {key: 'k'}, {key: 'l'}, {key: 'm'}, {key: 'n'}, {key: 'o'},
//     {key: 'p'}, {key: 'q'}, {key: 'r'}, {key: 's'}, {key: 't'},
//     {key: 'u'}, {key: 'v'}, {key: 'w'}, {key: 'x'}, {key: 'y'},
//     {key: 'z'},
// ];
//
// const styles = StyleSheet.create({
//     opacityStyle:{
//         borderWidth: 1,
//     },
//     textStyle:{
//         fontSize: 15,
//         margin: 10,
//         textAlign: 'left',
//     },
// })
// const renderItem = ({item}) => {
//     return (
//         <TouchableOpacity style={styles.opacityStyle}>
//             <Text style={styles.textStyle}>{item.key}</Text>
//         </TouchableOpacity>
//     );
// };
//
// const MyApp = () =>{
// return (
//     <View style={{marginTop: 30}}>
//     <FlatList data={datasource} renderItem={renderItem} />
//     </View>
// )
// }
//
// export default MyApp;

// Exercise 2
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, StatusBar, SectionList} from 'react-native';

const datasource = [
    {data:[
            {key: 'a'}, {key: 'e'}, {key: 'i'}, {key: 'o'}, {key: 'u'},
        ],
        title:"Vowels", bgColor:"skyblue"},
    {data:[
            {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'f'}, {key: 'g'},
            {key: 'h'}, {key: 'j'}, {key: 'k'}, {key: 'l'}, {key: 'm'},
            {key: 'n'}, {key: 'p'}, {key: 'q'}, {key: 'r'}, {key: 's'},
            {key: 't'}, {key: 'v'}, {key: 'w'}, {key: 'x'}, {key: 'z'},
        ],
        title:"Consonants", bgColor:"yellow"}
];


const styles = StyleSheet.create({
    opacityStyle:{
        borderWidth: 1,
    },
    textStyle:{
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
    },
    headerText:{
        fontSize: 30,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})
const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <Text style={styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>
    );
};

const MyApp = () =>{
    return (
        <View style={{marginTop: 30}}>
            <SectionList sections={datasource} renderItem={renderItem}
               renderSectionHeader={({section:{title, bgColor}})=>(
               <Text style={[styles.headerText, {backgroundColor: bgColor}]}>{title}</Text>)}/>
        </View>
    )
}

export default MyApp;


