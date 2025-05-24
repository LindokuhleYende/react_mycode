import React, { Component } from 'react';

class Task extends Component {
    names = ["Ethan", "David", "Lindo"];
    render() {
        const listNames = this.names.map((name) =>
            <li key={name.toString()}>{name}</li>
        );
        return (
            <div style={styles.nameStyle}>
                <h1>The names of people:</h1>
                {this.names.length > 0 && <ul>{listNames}</ul>}
                {this.names.length === 0 && <ul>No names to display</ul>}
            </div>
        )

    }
}

export default Task;

const styles = {
    nameStyle: {
        backgroundColor: "beige",
        color: "purple"
    }
}