import React from "react";
import moment from "moment/moment";

export default function DateTimePretty(Component) {
  return class extends React.Component {
    state = {};

    componentDidMount() {
      if (Number(moment().diff(this.props.date, "minutes")) < 60) {
        this.setState({
          date: `${moment().diff(this.props.date, "minutes")} минут назад`,
        });
      } else if (Number(moment().diff(this.props.date, "hours")) < 24) {
        this.setState({
          date: `${moment().diff(this.props.date, "hours")} часов назад`,
        });
      } else {
        this.setState({
          date: `${moment().diff(this.props.date, "day")} дней назад`,
        });
      }
    }
    render() {
      console.log(this.props.date);
      return <Component {...this.props} {...this.state} />;
    }
  };
}
