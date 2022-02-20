import React from 'react'
import styled from "styled-components";

function ToggleSwitch() {
    return (
        <Container>
            <ToggleButton>
                <input
                    className="react-switch-checkbox"
                    id={`react-switch-new`}
                    type="checkbox"
                />
                <label
                    className="react-switch-label"
                    htmlFor={`react-switch-new`}
                >
                    <span className={`react-switch-button`} />
                </label>
            </ToggleButton>
        </Container>
    )
}

const Container = styled.div`
`

const ToggleButton = styled.div`
.react-switch-checkbox {
    height: 0;
    width: 0;
    visibility: hidden;
}

.react-switch-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 40px;
    height: 24px;
    background: #FF6600;
    border-radius: 100px;
    position: relative;
    transition: background-color .9s;
}

.react-switch-label .react-switch-button {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
}

.react-switch-checkbox:checked + .react-switch-label .react-switch-button {
    left: calc(100% - 2px);
    transform: translateX(-100%);
}

.react-switch-label:active .react-switch-button {
    width: 20px;
}
`

export default ToggleSwitch
