import {nanoid} from 'nanoid';
import './Card.css';
import React, {useState} from 'react';

export default function Card() {
  const [colorState, setColorState] = useState('#ffffff');
  const [colors, setColor] = useState([]);
  return (
    <>
      <form
        onSubmit={event => {
          event.preventDefault();

          setColor([
            ...colors,
            {
              id: nanoid(),
              hexCode: colorState,
            },
          ]);
        }}
      >
        <input
          type="color"
          value={colorState}
          onChange={event => {
            setColorState(event.target.value);
          }}
        ></input>
        <input
          type="text"
          value={colorState}
          onChange={event => {
            setColorState(event.target.value);
          }}
        ></input>
        <button type="submit">submit</button>
      </form>

      <ul className="card-list">
        {colors.map(color => {
          return (
            <li key={color.id}>
              <div
                className="Card"
                style={{background: color.hexCode}}
                onClick={() => {
                  navigator.clipboard.writeText(color.hexCode);
                }}
              >
                <input
                  type="color"
                  defaultValue={color.hexCode}
                  onChange={event => {
                    setColor(
                      colors.map(colors => {
                        if (
                          colors.id === color.id &&
                          event.target.value.length === 7
                        ) {
                          return {...color, hexCode: event.target.value};
                        } else return colors;
                      }),
                    );
                  }}
                ></input>
                <button
                  onClick={() => {
                    setColor(colors.filter(colors => colors.id !== color.id));
                  }}
                >
                  X
                </button>
                <div className="code-box">{color.hexCode}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
