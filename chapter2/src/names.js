import React, { Component, useLayoutEffect } from 'react';

class Names extends Component {
    render() {
        let regularNames = [
            "Busi",
            "Zano",
            "Minkie",
            "Kat",
            "Happy",
            "Naye"
        ];
        const listNames = regularNames.map((name) =>
            <li key={name.toString()}>{name}</li>
        );

        return (
            <div>
                <h1>Names of People</h1>
                <ul>
                    {listNames}
                </ul>
            </div>

        );

    };

};

export default Names;