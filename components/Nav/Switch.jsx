import React from "react";
import styled from "styled-components";
const SwitchCont = styled.div`
.switch
  --button-width:3.5em
  --button-height:2em
  --toggle-diameter:1.5em
  --button-toggle-offset:calc((var(--button-height) - var(--toggle-diameter)) / 2)
  --toggle-shadow-offset:10px
  --toggle-wider:3em
  --color-grey:#cccccc
  --color-green:#4296f4

.slider
  display: inline-block
  width: var(--button-width)
  height: var(--button-height)
  background-color: var(--color-grey)
  border-radius: calc(var(--button-height) / 2)
  position: relative
  transition: 0.3s all ease-in-out

  &::after
    content: ""
    display: inline-block
    width: var(--toggle-diameter)
    height: var(--toggle-diameter)
    background-color: #fff
    border-radius: calc(var(--toggle-diameter) / 2)
    position: absolute
    top: var(--button-toggle-offset)
    transform: translateX(var(--button-toggle-offset))
    box-shadow: var(--toggle-shadow-offset) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1)
    transition: 0.3s all ease-in-out

.switch input[type="checkbox"]
  &:checked + .slider
    background-color: var(--color-green)

    &::after
      transform: translateX(calc(var(--button-width) - var(--toggle-diameter) - var(--button-toggle-offset)))
      box-shadow: calc(var(--toggle-shadow-offset) * -1) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1)

  display: none

  &:active + .slider::after
    width: var(--toggle-wider)

  &:checked:active + .slider::after
    transform: translateX(calc(var(--button-width) - var(--toggle-wider) - var(--button-toggle-offset)))
`;
const Switch = () => {
  return (
    <SwitchCont>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
    </SwitchCont>
  );
};

export default Switch;
