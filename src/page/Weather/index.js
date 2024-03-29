import React, { Component } from 'react'
import Styles from './styles'
import {
	View,
	Text,
	StatusBar,
	Platform,
	Image,
	ScrollView,
	TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import Util from '../../utils';

const weatherData = [{ key: 0, city: "\u798f\u5dde", night: !0, bg: require("../../img/w2.png"), abs: "\u5927\u90e8\u6674\u6717", degree: 15, today: { week: "\u661f\u671f\u516d", day: "\u4eca\u5929", high: 16, low: 14 }, hours: [{ key: 101, time: "\u73b0\u5728", icon: "ios-moon", degree: "15\xb0", color: "rgba(255,255,255,1)" }, { key: 102, time: "3\u65f6", icon: "ios-cloudy-night", degree: "15\xb0", color: "rgba(255,255,255,0.8)" }, { key: 103, time: "4\u65f6", icon: "ios-cloudy-night", degree: "16\xb0", color: "rgba(255,255,255,0.8)" }, { key: 104, time: "5\u65f6", icon: "ios-cloudy-night", degree: "16\xb0", color: "rgba(255,255,255,0.8)" }, { key: 105, time: "6\u65f6", icon: "ios-cloudy-night", degree: "16\xb0", color: "rgba(255,255,255,0.8)" }, { key: 106, time: "06:21", icon: "ios-sunny", degree: "\u65e5\u51fa", color: "#fedf32" }, { key: 107, time: "7\u65f6", icon: "ios-partly-sunny", degree: "16\xb0", color: "rgba(255,255,255,0.9)" }, { key: 108, time: "8\u65f6", icon: "ios-partly-sunny", degree: "18\xb0", color: "rgba(255,255,255,0.9)" }, { key: 109, time: "9\u65f6", icon: "ios-sunny", degree: "19\xb0", color: "#fedf32" }, { key: 110, time: "10\u65f6", icon: "ios-sunny", degree: "122\xb0", color: "#fedf32" }, { key: 111, time: "11\u65f6", icon: "ios-sunny", degree: "23\xb0", color: "#fedf32" }, { key: 112, time: "13\u65f6", icon: "ios-sunny", degree: "22\xb0", color: "#fedf32" }, { key: 113, time: "13\u65f6", icon: "ios-sunny", degree: "22\xb0", color: "#fedf32" }, { key: 114, time: "14\u65f6", icon: "ios-partly-sunny", degree: "16\xb0", color: "rgba(255,255,255,0.9)" }, { key: 115, time: "15\u65f6", icon: "ios-partly-sunny", degree: "22\xb0", color: "rgba(255,255,255,0.9)" }, { key: 116, time: "16\u65f6", icon: "ios-partly-sunny", degree: "21\xb0", color: "rgba(255,255,255,0.9)" }, { key: 117, time: "17\u65f6", icon: "ios-partly-sunny", degree: "19\xb0", color: "rgba(255,255,255,0.9)" }, { key: 118, time: "18\u65f6", icon: "ios-partly-sunny", degree: "18\xb0", color: "rgba(255,255,255,0.9)" }, { key: 119, time: "18:06", icon: "ios-partly-sunny", degree: "\u65e5\u843d", color: "rgba(255,255,255,0.9)" }, { key: 120, time: "19\u65f6", icon: "ios-cloudy-night", degree: "18\xb0", color: "rgba(255,255,255,0.8)" }, { key: 121, time: "20\u65f6", icon: "ios-cloudy-night", degree: "18\xb0", color: "rgba(255,255,255,0.8)" }, { key: 122, time: "21\u65f6", icon: "ios-cloudy-night", degree: "18\xb0", color: "rgba(255,255,255,0.8)" }, { key: 123, time: "22\u65f6", icon: "ios-cloudy-night", degree: "17\xb0", color: "rgba(255,255,255,0.8)" }, { key: 124, time: "23\u65f6", icon: "ios-cloudy", degree: "17\xb0", color: "rgba(255,255,255,0.8)" }, { key: 125, time: "0\u65f6", icon: "ios-cloudy", degree: "17\xb0", color: "rgba(255,255,255,0.8)" }, { key: 126, time: "1\u65f6", icon: "ios-cloudy", degree: "17\xb0", color: "rgba(255,255,255,0.8)" }, { key: 127, time: "2\u65f6", icon: "ios-cloudy", degree: "17\xb0", color: "rgba(255,255,255,0.8)" }], days: [{ key: 21, day: "\u661f\u671f\u4e00", icon: "ios-partly-sunny", high: 21, low: 16 }, { key: 22, day: "\u661f\u671f\u4e8c", icon: "ios-rainy", high: 22, low: 14 }, { key: 23, day: "\u661f\u671f\u4e09", icon: "ios-rainy", high: 21, low: 11 }, { key: 24, day: "\u661f\u671f\u56db", icon: "ios-rainy", high: 12, low: 8 }, { key: 25, day: "\u661f\u671f\u4e94", icon: "ios-rainy", high: 9, low: 7 }, { key: 26, day: "\u661f\u671f\u516d", icon: "ios-partly-sunny", high: 13, low: 9 }, { key: 27, day: "\u661f\u671f\u65e5", icon: "ios-rainy", high: 17, low: 13 }, { key: 28, day: "\u661f\u671f\u4e00", icon: "ios-partly-sunny", high: 18, low: 14 }, { key: 29, day: "\u661f\u671f\u4e8c", icon: "ios-partly-sunny", high: 22, low: 17 }], info: "\u4eca\u5929\uff1a\u4eca\u5929\u5927\u90e8\u591a\u4e91\u3002\u73b0\u5728\u6c14\u6e29 15\xb0\uff1b\u6700\u9ad8\u6c14\u6e2923\xb0\u3002", rise: "06:21", down: "18:06", prop: "10%", humi: "94%", dir: "\u4e1c\u5317\u504f\u5317", speed: "3\u5343\u7c73\uff0f\u5c0f\u65f6", feel: "15\xb0", rain: "0.0 \u5398\u7c73", pres: "1,016 \u767e\u5e15", sight: "5.0 \u516c\u91cc", uv: "0" }, { key: 1, city: "\u5361\u5c14\u52a0\u91cc", night: !1, bg: require("../../img/w3.png"), abs: "\u5927\u90e8\u6674\u6717", degree: 15, today: { week: "\u661f\u671f\u516d", day: "\u4eca\u5929", high: 16, low: 14 }, hours: [{ key: 101, time: "\u73b0\u5728", icon: "ios-moon", degree: "15\xb0", color: "rgba(255,255,255,1)" }, { key: 102, time: "3\u65f6", icon: "ios-cloudy-night", degree: "15\xb0", color: "rgba(255,255,255,0.8)" }, { key: 103, time: "4\u65f6", icon: "ios-cloudy-night", degree: "16\xb0", color: "rgba(255,255,255,0.8)" }, { key: 104, time: "5\u65f6", icon: "ios-cloudy-night", degree: "16\xb0", color: "rgba(255,255,255,0.8)" }, { key: 105, time: "6\u65f6", icon: "ios-cloudy-night", degree: "16\xb0", color: "rgba(255,255,255,0.8)" }, { key: 106, time: "06:21", icon: "ios-sunny", degree: "\u65e5\u51fa", color: "#fedf32" }, { key: 107, time: "7\u65f6", icon: "ios-partly-sunny", degree: "16\xb0", color: "rgba(255,255,255,0.9)" }, { key: 108, time: "8\u65f6", icon: "ios-partly-sunny", degree: "18\xb0", color: "rgba(255,255,255,0.9)" }, { key: 109, time: "9\u65f6", icon: "ios-sunny", degree: "19\xb0", color: "#fedf32" }, { key: 110, time: "10\u65f6", icon: "ios-sunny", degree: "122\xb0", color: "#fedf32" }, { key: 111, time: "11\u65f6", icon: "ios-sunny", degree: "23\xb0", color: "#fedf32" }, { key: 112, time: "13\u65f6", icon: "ios-sunny", degree: "22\xb0", color: "#fedf32" }, { key: 113, time: "13\u65f6", icon: "ios-sunny", degree: "22\xb0", color: "#fedf32" }, { key: 114, time: "14\u65f6", icon: "ios-partly-sunny", degree: "16\xb0", color: "rgba(255,255,255,0.9)" }, { key: 115, time: "15\u65f6", icon: "ios-partly-sunny", degree: "22\xb0", color: "rgba(255,255,255,0.9)" }, { key: 116, time: "16\u65f6", icon: "ios-partly-sunny", degree: "21\xb0", color: "rgba(255,255,255,0.9)" }, { key: 117, time: "17\u65f6", icon: "ios-partly-sunny", degree: "19\xb0", color: "rgba(255,255,255,0.9)" }, { key: 118, time: "18\u65f6", icon: "ios-partly-sunny", degree: "18\xb0", color: "rgba(255,255,255,0.9)" }, { key: 119, time: "18:06", icon: "ios-partly-sunny", degree: "\u65e5\u843d", color: "rgba(255,255,255,0.9)" }, { key: 120, time: "19\u65f6", icon: "ios-cloudy-night", degree: "18\xb0", color: "rgba(255,255,255,0.8)" }, { key: 121, time: "20\u65f6", icon: "ios-cloudy-night", degree: "18\xb0", color: "rgba(255,255,255,0.8)" }, { key: 122, time: "21\u65f6", icon: "ios-cloudy-night", degree: "18\xb0", color: "rgba(255,255,255,0.8)" }, { key: 123, time: "22\u65f6", icon: "ios-cloudy-night", degree: "17\xb0", color: "rgba(255,255,255,0.8)" }, { key: 124, time: "23\u65f6", icon: "ios-cloudy", degree: "17\xb0", color: "rgba(255,255,255,0.8)" }, { key: 125, time: "0\u65f6", icon: "ios-cloudy", degree: "17\xb0", color: "rgba(255,255,255,0.8)" }, { key: 126, time: "1\u65f6", icon: "ios-cloudy", degree: "17\xb0", color: "rgba(255,255,255,0.8)" }, { key: 127, time: "2\u65f6", icon: "ios-cloudy", degree: "17\xb0", color: "rgba(255,255,255,0.8)" }], days: [{ key: 21, day: "\u661f\u671f\u4e00", icon: "ios-partly-sunny", high: 21, low: 16 }, { key: 22, day: "\u661f\u671f\u4e8c", icon: "ios-rainy", high: 22, low: 14 }, { key: 23, day: "\u661f\u671f\u4e09", icon: "ios-rainy", high: 21, low: 11 }, { key: 24, day: "\u661f\u671f\u56db", icon: "ios-rainy", high: 12, low: 8 }, { key: 25, day: "\u661f\u671f\u4e94", icon: "ios-rainy", high: 9, low: 7 }, { key: 26, day: "\u661f\u671f\u516d", icon: "ios-partly-sunny", high: 13, low: 9 }, { key: 27, day: "\u661f\u671f\u65e5", icon: "ios-rainy", high: 17, low: 13 }, { key: 28, day: "\u661f\u671f\u4e00", icon: "ios-partly-sunny", high: 18, low: 14 }, { key: 29, day: "\u661f\u671f\u4e8c", icon: "ios-partly-sunny", high: 22, low: 17 }], info: "\u4eca\u5929\uff1a\u4eca\u5929\u5927\u90e8\u591a\u4e91\u3002\u73b0\u5728\u6c14\u6e29 15\xb0\uff1b\u6700\u9ad8\u6c14\u6e2923\xb0\u3002", rise: "06:21", down: "18:06", prop: "10%", humi: "94%", dir: "\u4e1c\u5317\u504f\u5317", speed: "3\u5343\u7c73\uff0f\u5c0f\u65f6", feel: "15\xb0", rain: "0.0 \u5398\u7c73", pres: "1,016 \u767e\u5e15", sight: "5.0 \u516c\u91cc", uv: "0" }];

class Weather1 extends Component {
	static propTypes = {
		back: PropTypes.func,
	}

	constructor(props) {
		super(props)
		this.state = {
			weather: weatherData,
		}
	}

	componentDidMount() {
		if (Platform.OS === "ios") {
			StatusBar.setBarStyle(1);
		}
	}

	_back() {
		this.props.back();
	}

	render() {
		const slides = this.state.weather.map((elem, index) => {
			const hourView = elem.hours.map((hourElem, hourIndex) => {
				return (
					<View key={hourElem.key} style={Styles.withinDayHoursBox}>
						<Text style={hourIndex == 0 ? Styles.withinDayHoursTimeBold : Styles.withinDayHoursTime}>{hourElem.time}</Text>
						<Icon name={hourElem.icon} size={25} style={[Styles.withinDayHoursIcon, { color: hourElem.color }]}></Icon>
						<Text style={hourIndex == 0 ? Styles.withinDayHoursDegreeBold : Styles.withinDayHoursDegree}>{hourElem.degree}</Text>
					</View>
				);
			});

			const dayView = elem.days.map((dayElem, dayIndex) => {
				return (
					<View key={dayElem.key} style={Styles.withinWeekLine}>
						<View style={Styles.withinWeekDay}>
							<Text style={Styles.withinWeekDayText}>{dayElem.day}</Text>
						</View>
						<View style={Styles.withinWeekIcon}>
							<Icon name={dayElem.icon} style={Styles.withinWeekIconIcon} size={25}></Icon>
						</View>
						<View style={Styles.withinWeekDegree}>
							<Text style={Styles.withinWeekHigh}>{dayElem.high}</Text>
							<Text style={elem.night ? Styles.withinWeekLowNight : Styles.withinWeekLow}>{dayElem.low}</Text>
						</View>
					</View>
				);
			});

			return (
				<View key={elem.key}>
					<Image style={Styles.image} source={elem.bg}></Image>
					<ScrollView style={Styles.pageContainer} showsVerticalScrollIndicator={false}>
						<View style={Styles.headInfo}>
							<Text style={Styles.city}>{elem.city}</Text>
							<Text style={Styles.abs}>{elem.abs}</Text>
							<Text style={Styles.degree}>{elem.degree}</Text>
							<Text style={Styles.circle}>°</Text>
						</View>
						<View style={Styles.withinDay}>
							<View style={Styles.withinDayGeneral}>
								<View style={Styles.withinDayHead}>
									<Text style={Styles.withinDayWeek}>{elem.today.week}</Text>
									<Text style={Styles.withinDayDay}>{elem.today.day}</Text>
								</View>
								<View style={Styles.withinDayTail}>
									<Text style={Styles.withinDayHigh}>{elem.today.high}</Text>
									<Text style={elem.night ? Styles.withinDayLowNight : Styles.withinDayLow}>{elem.today.low}</Text>
								</View>
							</View>
							<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={Styles.withinDayHoursContainer}>
								<View style={Styles.withinDayHours}>
									{hourView}
								</View>
							</ScrollView>
							<View style={Styles.withinWeek}>
								{dayView}
							</View>
							<View style={Styles.weatherInfo}>
								<Text style={Styles.weatherInfoText}>{elem.info}</Text>
							</View>
							<View style={Styles.weatherOther}>
								<View style={Styles.weatherOtherSection}>
									<View style={Styles.weatherOtherLine}>
										<Text style={Styles.weatherOtherTitle}>日出：</Text>
										<Text style={Styles.weatherOtherValue}>{elem.rise}</Text>
									</View>
									<View style={Styles.weatherOtherLine}>
										<Text style={Styles.weatherOtherTitle}>日落：</Text>
										<Text style={Styles.weatherOtherValue}>{elem.down}</Text>
									</View>
								</View>
								<View style={Styles.weatherOtherSection}>
									<View style={Styles.weatherOtherLine}>
										<Text style={Styles.weatherOtherTitle}>降雨概率：</Text>
										<Text style={Styles.weatherOtherValue}>{elem.prop}</Text>
									</View>
									<View style={Styles.weatherOtherLine}>
										<Text style={Styles.weatherOtherTitle}>湿度：</Text>
										<Text style={Styles.weatherOtherValue}>{elem.humi}</Text>
									</View>
								</View>
								<View style={Styles.weatherOtherSection}>
									<View style={Styles.weatherOtherLine}>
										<Text style={Styles.weatherOtherTitle}>风速：</Text>
										<Text style={Styles.weatherOtherValue}><Text style={{ fontSize: 10 }}>{elem.dir}</Text>{elem.speed}</Text>
									</View>
									<View style={Styles.weatherOtherLine}>
										<Text style={Styles.weatherOtherTitle}>体感温度：</Text>
										<Text style={Styles.weatherOtherValue}>{elem.feel}</Text>
									</View>
								</View>
								<View style={Styles.weatherOtherSection}>
									<View style={Styles.weatherOtherLine}>
										<Text style={Styles.weatherOtherTitle}>降水量：</Text>
										<Text style={Styles.weatherOtherValue}>{elem.rain}</Text>
									</View>
									<View style={Styles.weatherOtherLine}>
										<Text style={Styles.weatherOtherTitle}>气压：</Text>
										<Text style={Styles.weatherOtherValue}>{elem.pres}</Text>
									</View>
								</View>
								<View style={Styles.weatherOtherSection}>
									<View style={Styles.weatherOtherLine}>
										<Text style={Styles.weatherOtherTitle}>能见度：</Text>
										<Text style={Styles.weatherOtherValue}>{elem.sight}</Text>
									</View>
									<View style={Styles.weatherOtherLine}>
										<Text style={Styles.weatherOtherTitle}>紫外线指数：</Text>
										<Text style={Styles.weatherOtherValue}>{elem.uv}</Text>
									</View>
								</View>
							</View>
						</View>
					</ScrollView>
				</View>
			);
		});

		return (
			<View style={Styles.container}>
				<Swiper
					style={Styles.wrapper}
					showsButtons={false}
					paginationStyle={{ bottom: 10, paddingTop: 10, borderTopColor: "rgba(255,255,255,0.7)", borderTopWidth: Util.pixel }}
					dot={<View style={{ backgroundColor: 'rgba(255,255,255,0.2)', width: 6, height: 6, borderRadius: 3, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />}
					activeDot={<View style={{ backgroundColor: 'rgba(255,255,255,0.5)', width: 6, height: 6, borderRadius: 3, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />}>
					{slides}
				</Swiper>
				<TouchableHighlight onPress={() => this._back()} style={Styles.backBtn}>
					<Icon size={17} name="ios-list-outline" style={Styles.backBtnIcon}></Icon>
				</TouchableHighlight>
			</View>
		)
	}
}

class Weather extends Component {
	_back() {
		this.props.navigator.pop();
		StatusBar.setBarStyle(0);
	}

	render() {
		return (
			<View style={Styles.container}>
				<Weather1 back={() => this._back()}></Weather1>
			</View>
		)
	}
}
export default Weather