import React, { Component } from 'react'
import Styles from './styles'

import {
	Platform, ListView, StyleSheet, StatusBar, TouchableHighlight,
	View,
	Text,
} from 'react-native';
import PropTypes from 'prop-types';

class WatchFace1 extends Component {
	static propTypes = {
		sectionTime: PropTypes.string,
		totalTime: PropTypes.string,
	}
	render() {
		return (
			<View style={Styles.watchFaceContainer}>
				<Text style={Styles.sectionTime}>{this.propTypes.sectionTime}</Text>
				<Text style={Styles.totalTime}>{this.propTypes.totalTime}</Text>
			</View>
		)
	}
}

class WatchControl extends Component {
	static propTypes = {
		stopWatch: PropTypes.func,
		clearRecord: PropTypes.func,
		startWatch: PropTypes.func,
		addRecord: PropTypes.func,
	};

	constructor(props) {
		super(props);
		this.state = {
			watchOn: false,
			startBtnText: '启动',
			startBtnColor: '#60B644',
			stopBtnText: "计次",
			underlayColor: "#fff",
		}
	}

	_startWatch() {
		if (!this.state.watchOn) {
			this.props.startWatch()
			this.setState({
				startBtnText: "停止",
				startBtnColor: "#ff0044",
				stopBtnText: "计次",
				underlayColor: "#eee",
				watchOn: true
			})
		} else {
			this.props.stopWatch()
			this.setState({
				startBtnText: "启动",
				startBtnColor: "#60B644",
				stopBtnText: "复位",
				underlayColor: "#eee",
				watchOn: false
			})
		}
	}

	_addRecord() {
		if (this.state.watchOn) {
			this.props.addRecord()
		} else {
			this.props.clearRecord()
			this.setState({
				stopBtnText: "计次"
			})
		}
	}

	render() {
		return (
			<View style={Styles.watchControlContainer}>
				<View style={{ flex: 1, alignItems: "flex-start" }}>
					<TouchableHighlight style={Styles.btnStop} underlayColor={this.state.underlayColor} onPress={() => this._addRecord()}>
						<Text style={Styles.btnStopText}>{this.state.stopBtnText}</Text>
					</TouchableHighlight>
				</View>
				<View style={{ flex: 1, alignItems: 'flex-end' }}>
					<TouchableHighlight style={Styles.btnStart} underlayColor="#eee" onPress={() => this._startWatch()}>
						<Text style={[Styles.btnStartText, { color: this.state.startBtnColor }]}>{this.state.startBtnText}</Text>
					</TouchableHighlight>
				</View>
			</View>
		)
	}
}

class WatchRecord extends Component {
	static propTypes = {
		record: PropTypes.array,
	};

	render() {
		let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
			theDataSource = ds.cloneWithRows(this.props.record);

		return (
			<ListView
				style={Styles.recordList}
				dataSource={theDataSource}
				renderRow= {(rowData) =>
					<View style={Styles.recordItem}>
						<Text style={Styles.recordItemTitle}>{rowData.title}</Text>
						<View style={{ alignItems: "center" }}>
							<Text style={Styles.recordItemTime}>{rowData.time}</Text>
						</View>
					</View>
				}
			/>
		)
	}
}

class WatchFace extends Component {
	constructor() {
		super();
		this.state = {
			stopWatch: false,
			resetWatch: true,
			intialTime: 0,
			currentTime: 0,
			recordTime: 0,
			timeAccumulation: 0,
			totalTime: "00:00.00",
			sectionTime: "00:00.00",
			recordCounter: 0,
			record: [
				{ title: "", time: "" },
				{ title: "", time: "" },
				{ title: "", time: "" },
				{ title: "", time: "" },
				{ title: "", time: "" },
				{ title: "", time: "" },
				{ title: "", time: "" }
			],
		}
	}

	componentWillUnmount() {
		this._stopWatch();
		this._clearRecord();
	}

	componentDidMount() {
		if (Platform.OS === 'ios') {
			StatusBar.setBarStyle(0);
		}
	}

	_startWatch() {
		if (this.state.resetWatch) {
			this.setState({
				stopWatch: false,
				resetWatch: false,
				timeAccumulation: 0,
				intialTime: (new Date()).getTime()
			})
		} else {
			this.setState({
				stopWatch: false,
				intialTime: (new Date()).getTime()
			})
		}
		let milSecond, second, minute, countingTime, secmilSecond, secsecond, secminute, seccountingTime;
		let interval = setInterval(
			() => {
				this.setState({
					currentTime: (new Date()).getTime()
				})
				countingTime = this.state.timeAccumulation + this.state.currentTime - this.state.initialTime;
				minute = Math.floor(countingTime / (60 * 1000));
				second = Math.floor((countingTime - 6000 * minute) / 1000);
				milSecond = Math.floor((countingTime % 1000) / 10);
				seccountingTime = countingTime - this.state.recordTime;
				secminute = Math.floor(seccountingTime / (60 * 1000));
				secsecond = Math.floor((seccountingTime - 6000 * secminute) / 1000);
				secmilSecond = Math.floor((seccountingTime % 1000) / 10);
				this.setState({
					totalTime: (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second) + "." + (milSecond < 10 ? "0" + milSecond : milSecond),
					sectionTime: (secminute < 10 ? "0" + secminute : secminute) + ":" + (secsecond < 10 ? "0" + secsecond : secsecond) + "." + (secmilSecond < 10 ? "0" + secmilSecond : secmilSecond),
				})
				if (this.state.stopWatch) {
					this.setState({
						timeAccumulation: countingTime
					})
					clearInterval(interval)
				};
			}, 10);
	}

	_stopWatch() {
		this.setState({
			stopWatch: true
		})
	}

	_addRecord() {
		let { recordCounter, record } = this.state;
		recordCounter++;
		if (recordCounter < 8) {
			record.pop();
		}
		record.unshift({ title: "计次" + recordCounter, time: this.state.sectionTime });
		this.setState({
			recordTime: this.state.timeAccumulation + this.state.currentTime - this.state.initialTime,
			recordCounter: recordCounter,
			record: record
		})
		//use refs to call functions within other sub component
		//can force to update the states
		// this.refs.record._updateData();
	}

	_clearRecord() {
		this.setState({
			stopWatch: false,
			resetWatch: true,
			intialTime: 0,
			currentTime: 0,
			recordTime: 0,
			timeAccumulation: 0,
			totalTime: "00:00.00",
			sectionTime: "00:00.00",
			recordCounter: 0,
			record: [
				{ title: "", time: "" },
				{ title: "", time: "" },
				{ title: "", time: "" },
				{ title: "", time: "" },
				{ title: "", time: "" },
				{ title: "", time: "" },
				{ title: "", time: "" }
			],
		});
	}

	render() {
		return (
			<View style={Styles.watchContainer}>
				<WatchFace1 totalTime={this.state.totalTime} sectionTime={this.state.sectionTime}></WatchFace1>
				<WatchControl addRecord={() => this._addRecord()} clearRecord={() => this._clearRecord()} startWatch={() => this._startWatch()} stopWatch={() => this._stopWatch()}></WatchControl>
				<WatchRecord record={this.state.record}></WatchRecord>
			</View>
		)
	}
}


export default WatchFace