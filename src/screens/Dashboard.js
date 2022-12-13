import {StyleSheet, Text, View,useWindowDimensions,Dimensions,Pressable,ScrollView  } from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import BigBox from '../components/BigBox';
import SmallBox from '../components/SmallBox';
import Icons from '../constants/Icons';




const windowWidth = Dimensions.get('window').width;

const Dashboard = ({navigation}) => {
  const { height, width } = useWindowDimensions();
  const dash_nums = {                                  //dashboard numbers object
    GroupWeeklyTarget:"00000",
    GroupWeeklyTargetAchieved:"0000",
    GroupMonthlyTarget:"0",
    GroupMonthlyTargetAchieved:"0",
    WeeklyTarget:"0",
    WeeklyTargetAchieved:"0",
    MonthlyTarget:"0",
    MonthlyTargetAchieved:"9999999999",
    TotalLeads:"0",
    ActiveLeads:"0",
    LeadsAssignment:"0",
    LeadsCalled:"0",
    Scheduled:"0",
    Screened:"0",
    NoShowLeads:"9999999",
    DNQLeads:"0"
  }
  return (
    <ScrollView contentContainerStyle={styles.app}>
      <Pressable style={{zIndex:999,position:'absolute',top:25,left:15}} 
      onPress={()=>navigation.openDrawer()}                              //handle drawer openning
      >
        {Icons.hamBurger}
      </Pressable>
      <View style={{alignItems:'center',justifyContent:'center',width:windowWidth-40}}>
      {/* Row 1 */}
      <View style={styles.two_block_row}>
        {/* Box 1 */}
      <BigBox color={Colors.blue} text={"Group Weekly Target: "+dash_nums.GroupWeeklyTarget}/>
        {/* Box 2 */}
        <BigBox color={Colors.blue} text={"Group Weekly Target Achieved: "+dash_nums.GroupWeeklyTargetAchieved}/>
      </View>
      {/* Row 2 */}
      <View style={styles.two_block_row}>
        {/* Box 1 */}
        <BigBox color={Colors.blue}  text={"Group Monthly Target: "+dash_nums.GroupMonthlyTarget}/>
        {/* Box 2 */}
        <BigBox color={Colors.blue}  text={"Group Monthly Target Achieved: "+dash_nums.GroupMonthlyTargetAchieved}/>
      </View>
      {/* Row 3 */}
      <View style={styles.two_block_row}>
        {/* Box 1 */}
        <BigBox color={Colors.orange} text={"Weekly Target: "+dash_nums.WeeklyTarget}/>
        {/* Box 2 */}
        <BigBox color={Colors.orange} text={"Weekly Target Achieved: "+dash_nums.WeeklyTargetAchieved}/>
      </View>
      {/* Row 4 */}
      <View style={styles.two_block_row}>
        {/* Box 1 */}
        <BigBox color={Colors.orange} text={"Monthly Target: "+dash_nums.MonthlyTarget}/>
        {/* Box 2 */}
        <BigBox color={Colors.orange} text={"Monthly Target Achieved: "+dash_nums.MonthlyTargetAchieved}/>
      </View>
      {/* Row 5 */}
      <View style={styles.two_block_row}>
<SmallBox color={Colors.orange} text={"Total Leads: "+dash_nums.TotalLeads}/>
<SmallBox color={Colors.orange} text={"Active Leads: "+dash_nums.ActiveLeads}/>
<SmallBox color={Colors.orange} text={"Leads Assignment: "+dash_nums.LeadsAssignment}/>
      </View>
      {/* Row 6 */}
      <View style={styles.two_block_row}>
      <SmallBox color={Colors.orange} text={"Leads Called: "+dash_nums.LeadsCalled}/>
      <SmallBox color={Colors.orange} text={"Scheduled: "+dash_nums.Scheduled}/>
      <SmallBox color={Colors.orange} text={"Screened Leads: "+dash_nums.Screened}/>

      </View>
      {/* Row 7 */}
      <View style={[styles.two_block_row,{justifyContent:'space-evenly'}]}>
      <SmallBox color={Colors.orange} text={"No Show Leads: "+dash_nums.NoShowLeads}/>
      <SmallBox color={Colors.orange} text={"DNQ Leads: "+dash_nums.DNQLeads}/>

      </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;
const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  two_block_row:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:15,
    width:"100%"
  }
});
