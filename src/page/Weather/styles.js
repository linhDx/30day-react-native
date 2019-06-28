import { StyleSheet, Dimensions } from 'react-native';
import Util from '../../utils';

export default Styles = StyleSheet.create({
	container: {
		flex: 1
	  },
	  wrapper:{

	  },
	pageContainer:{
		backgroundColor:"transparent",
		position: "absolute",
		width: Util.size.width,
		left:0,
		top: 20,
		height: Util.size.height - 53
	  },
	  headInfo:{
		paddingTop:70,
		alignItems:"center",
		paddingBottom:60,
	  },
	  city:{
		fontSize: 25,
		color:"#fff",
		paddingBottom: 5,
		backgroundColor:"transparent"
	  },
	  abs:{
		fontSize:15,
		color:"#fff",
		backgroundColor:"transparent"
	  },
	  degree:{
		fontSize:85,
		color:"#fff",
		fontWeight: "100",
	  },
	  circle:{
		fontSize:35,
		color:"#fff",
		fontWeight: "300",
		position:"absolute",
		top:130,
		right:Util.size.width/2-55,
	  },
	  withinDayGeneral:{
		flexDirection:"row",
		width: Util.size.width,
	  },
	  withinDayHead:{
		flex:1,
		flexDirection:"row",
		justifyContent: 'flex-start',
		paddingLeft: 20,
	  },
	  withinDayTail:{
		flex:1,
		flexDirection:"row",
		justifyContent: 'flex-end',
		paddingRight: 10,
	  },
	  withinDayWeek:{
		fontSize:15,
		color: "#fff",
		fontWeight: "400",
		width:50,
	  },
	  withinDayDay:{
		fontSize:15,
		color: "#fff",
		fontWeight: "300",
		width:50,
	  },
	  withinDayHigh:{
		fontSize:16,
		color: "#fff",
		fontWeight: "200",
		width:30,
	  },
	  withinDayLow:{
		fontSize:16,
		color: "#eee",
		fontWeight: "200",
		width:30,
	  },
	  withinDayLowNight:{
		fontSize:16,
		color: "#aaa",
		fontWeight: "200",
		width:30,
	  },
	  withinDayHoursBox:{
		width:55,
	  },
	  withinDayHoursContainer:{
		marginTop:3,
		borderTopColor:"rgba(255,255,255,0.7)",borderTopWidth:Util.pixel,
		borderBottomColor:"rgba(255,255,255,0.7)",borderBottomWidth:Util.pixel
	  },
	  withinDayHours:{
		paddingLeft:7,paddingTop:10,paddingBottom:10,paddingRight:10,
		flexDirection:"row",
		flexWrap:"nowrap"
	  },
	  withinDayHoursTime:{
		color:"#fff",
		fontSize:12,
		textAlign:"center"
	  },
	  withinDayHoursTimeBold:{
		color:"#fff",
		fontSize:13,
		textAlign:"center",   
		fontWeight:"500",
	  },
	  withinDayHoursIcon:{
		textAlign:"center",
		paddingTop:5,
	  },
	  withinDayHoursDegree:{
		color:"#fff",
		fontSize:14,
		paddingTop:5,
		textAlign:"center"
	  },
	  withinDayHoursDegreeBold:{
		color:"#fff",
		fontSize:15,
		textAlign:"center",
		paddingTop:5,
		fontWeight:"500"
	  },
	  withinWeek:{
		paddingTop:5
	  },
	  withinWeekLine:{
		flexDirection:"row",
		height: 28
	  },
	  withinWeekDay:{
		justifyContent:"center",
		alignItems:"flex-start",
		flex:1,
	  },
	  withinWeekIcon:{
		justifyContent:"center",
		alignItems:"center",
		flex:1, 
	  },
	  withinWeekDegree:{
		justifyContent:"flex-end",
		alignItems:"center",
		flex:1,
		flexDirection:"row",
		paddingRight:25,
	  },
	  withinWeekHigh:{
		color:"#fff",
		width:35,
		fontSize:16,
		textAlign:"right"
	  },
	  withinWeekIconIcon:{
		color:"#fff"
	  },
	  withinWeekLow:{
		color:"#eee",
		width:35,
		fontSize:16,
		textAlign:"right"
	  },
	  withinWeekLowNight:{
		color:"#aaa",
		width:35,
		fontSize:16,
		textAlign:"right"
	  },
	  withinWeekDayText:{
		color:"#fff",
		paddingLeft:20,
		fontSize:15,
	  },
	  weatherInfo:{
		marginTop:5,
		borderTopColor:"rgba(255,255,255,0.7)", borderTopWidth:Util.pixel,
		borderBottomColor:"rgba(255,255,255,0.7)", borderBottomWidth:Util.pixel
	  },
	  weatherInfoText:{
		color:"#fff",
		fontSize:15,
		paddingTop:10,paddingLeft:20,paddingBottom:10,paddingRight:20,
	  },
	  weatherOther:{
		paddingTop:10
	  },
	  weatherOtherSection:{
		paddingBottom:10
	  },
	  weatherOtherLine:{
		flexDirection:"row",
		flexWrap:"nowrap"
	  },
	  weatherOtherTitle:{
		width: Util.size.width/2-15,
		color:"#fff",
		textAlign:"right",
		fontSize: 15,
	  },
	  weatherOtherValue:{
		width: Util.size.width/2,
		paddingLeft:15,
		flex:1,
		fontSize: 15,
		color:"#fff",
	  },
	  backBtn:{
		position:"absolute", 
		right:20,bottom:7
	  },
	  backBtnIcon:{
		color:"#fff"
	  },
})