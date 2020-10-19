import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/Column';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.node,
        image: PropTypes.string,
    }
    static defaultProps = {
        children: <p>I can do all the things!!!</p>,
    }
    render() {
        return (
            <section className={styles.component}>
                <Hero titleText={this.props.title}
                image={this.props.image}>
                <div className={styles.description}>
                    {this.props.children}
                </div>
                </Hero>
                <div className={styles.columns}>
                    <Column one={'Animals'} />
                    <Column two={'Plants'} />
                    <Column three={'Minerals'} />
                </div>
            </section>
        )
    }
}

export default List;