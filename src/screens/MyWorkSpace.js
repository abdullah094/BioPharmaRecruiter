import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import Icons from '../constants/Icons';
import Colors from '../constants/Colors';
import Bar from '../components/Bar';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

const {height, width} = Dimensions.get('window');
const MyWorkSpace = ({navigation}) => {
  const leads = 9
  const map = [
    {id:1,
    name:"Sally Enriques",
  recruitmnetStatus: "Assigned"},
  {id:2,
    name:"Max Test",
  recruitmnetStatus: "Not Assigned"},
  {id:3,
    name:"Navaid Test",
  recruitmnetStatus: "Not Assigned"},
  {id:4,
    name:"None",
  recruitmnetStatus: " Assigned"},
  {id:5,
    name:"None",
  recruitmnetStatus: "Not Assigned"},
  {id:6,
    name:"None",
  recruitmnetStatus: "Not Assigned"},
  {id:7,
    name:"None",
  recruitmnetStatus: "Not Assigned"},
  {id:8,
    name:"None",
  recruitmnetStatus: "Assigned"},
  {id:9,
    name:"None",
  recruitmnetStatus: "Not Assigned"
},
]
  return (
    <ScrollView style={{flex:1}} contentContainerStyle={styles.app}>
      <Pressable
        style={{zIndex: 999, top: 25, marginBottom: 30, left: -width / 2 + 40}}
        onPress={() => navigation.openDrawer()} //handle drawer openning
      >
        {Icons.hamBurger}
      </Pressable>
      <Bar heading={'My Work Desk'} leads={leads} _leads={true} />
      <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 5}}>
        <Text>Show</Text>
        <View style={styles.input_box}>
          <Menu>
            <MenuTrigger text="Select action" />
            <MenuOptions>
              <MenuOption
                onSelect={() => alert(`Save`)}
                text="Lead name/Recruitment status"
              />
            </MenuOptions>
          </Menu>
        </View>
      </View>
      <View style={{marginVertical:10}}>
      <View
        style={{flexDirection: 'row', width: width - 10,}}>
        <View style={[styles.chart_topbox, {borderRightWidth: 0}]}>
          <Text>Lead name</Text>
        </View>
        <View style={[styles.chart_topbox]}>
          <Text>Recruitment status</Text>
        </View>
      </View>
   {map.map((items,index)=>   <View key={index}
        style={{flexDirection: 'row', width: width - 10}}>
        <View style={[styles.chart_topbox, {borderRightWidth: 0}]}>
          <Pressable onPress={()=>navigation.navigate('LeadsReport')}>
          <Text  style={{textDecorationLine: 'underline'}}>{items.name}</Text>
          </Pressable>
        </View>
        <View style={[styles.chart_topbox]}>
          <Text>{items.recruitmnetStatus}</Text>
        </View>
      </View>)
      }
      </View>
    </ScrollView>
  );
};

export default MyWorkSpace;

const styles = StyleSheet.create({
  app: {

    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  input_box: {
    borderWidth: 1,
    width: 155,
    height: 30,
    borderRadius: 5,
    marginLeft: 5,
    borderColor: '#D3D3D3',
    padding: 1,
    paddingHorizontal: 5,
    marginRight: 5,
    justifyContent: 'center',
  },
  chart_topbox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: 70,
    borderWidth: 1,
    borderColor: Colors.gray,
  },
});
