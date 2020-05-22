import React from 'react';
import styles from './Portfolios.module.css';
import Portfolio from "./Portfolio/Portfolio";

class Portfolios extends React.Component {

  render = () => {
    let portfoliosArray = [];

    this.props.state.portfolios.forEach(portfolio => {
      this.props.state.specializations.forEach((specialization, index) => {
        if (specialization.isDone === true) {
          let checked = specialization.skills.some(skill => skill.isDone);
          portfolio.specializations.forEach(spec => {
            if (spec.specialization === index) {
              spec.skills.map(skill => {
                if (specialization.skills[skill].isDone === true) {
                  console.log(3);
                  if (!portfoliosArray.includes(portfolio)) {
                    portfoliosArray.push(portfolio);
                  }
                } else {
                  if (!portfoliosArray.includes(portfolio) && !checked) {
                    portfoliosArray.push(portfolio);
                  }
                }
              })
            }
          })
        }
      })
    })

    let portfolios = this.props.isChoose
        ? portfoliosArray.map(portfolio => <Portfolio portfolio={portfolio} specializations={this.props.state.specializations} key={portfolio.name}/>)
        : this.props.state.portfolios.map(portfolio =>
        <Portfolio portfolio={portfolio} specializations={this.props.state.specializations} key={portfolio.id}/>);

    return (
        <div className={styles.mainBlock}>
          {portfolios}
        </div>
    );
  }
}

export default Portfolios;
