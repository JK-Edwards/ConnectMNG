import React from "react";

const month = {
    "padding": "70px 25px",
    "width": "100%",
    "background": "#0086E2",
    "text-align": "center"
};

const monthList = {
    "margin": "0",
    "padding": "0"
};

const monthInnerList = {
    "color": "white",
    "font-size": "20px",
    "text-transform": "uppercase",
    "letter-spacing": "3px"
};

const prev = {
    "float": "right",
    "padding-top": "10px"
};

const next = {
    "float": "right",
    "padding-top": "10px"
};

const weekdays = {
    "margin": "0",
    "padding": "10px 0",
    "background-color": "#ddd"
}

const weekdaysList = {
    "display": "inline-block",
    "width": "13.6%",
    "color": "#666",
    "text-align": "center"
};

const days = {
    "padding": "10px 0",
    "background": "#eee",
    "margin": "0"
};

const daysList = {
    "list-style-type": "none",
    "display": "inline-block",
    "width": "13.6%",
    "text-align": "center",
    "margin-bottom": "5px",
    "font-size": "12px",
    "color":" #777"
};

const font = {
    "font-size": "18px"
};

export default function Calendar() {
    return (
      <div>
        <div style={month}>
            <ul>
                {/* <li style={prev}>&#10094;</li>
                <li style={next}>&#10095;</li> */}
                <h1>
                    August<br></br>
                    <span style={font}>2021</span>
                </h1>
            </ul>
        </div>
        <ul style={weekdays}>
            <li style={weekdaysList}>Mo</li>
            <li style={weekdaysList}>Tu</li>
            <li style={weekdaysList}>We</li>
            <li style={weekdaysList}>Th</li>
            <li style={weekdaysList}>Fr</li>
            <li style={weekdaysList}>Sa</li>
            <li style={weekdaysList}>Su</li>
        </ul>
        <ul style={days}>
            <li style={daysList}>1</li>
            <li style={daysList}>2</li>
            <li style={daysList}>3</li>
            <li style={daysList}>4</li>
            <li style={daysList}>5</li>
            <li style={daysList}>6</li>
            <li style={daysList}>7</li>
            <li style={daysList}>8</li>
            <li style={daysList}>9</li>
            <li style={daysList}>10</li>
            <li style={daysList}>11</li>
            <li style={daysList}>12</li>
            <li style={daysList}>13</li>
            <li style={daysList}>14</li>
            <li style={daysList}>15</li>
            <li style={daysList}>16</li>
            <li style={daysList}>17</li>
            <li style={daysList}>18</li>
            <li style={daysList}>19</li>
            <li style={daysList}>20</li>
            <li style={daysList}>21</li>
            <li style={daysList}>22</li>
            <li style={daysList}>23</li>
            <li style={daysList}>24</li>
            <li style={daysList}>25</li>
            <li style={daysList}>26</li>
            <li style={daysList}>27</li>
            <li style={daysList}>28</li>
            <li style={daysList}>29</li>
            <li style={daysList}>30</li>
            <li style={daysList}>31</li>
        </ul>
      </div>
    );
};