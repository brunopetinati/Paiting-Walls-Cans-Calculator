import { useState, useEffect } from "react";
import {
  CoreStyle,
  StyledButton,
  StyledRedButton,
  CoreForm,
  Title,
} from "../../pages/styles";

const Core = () => {
  const [height, setHeight] = useState(0);
  const [wall1, setWall1] = useState(1);
  const [wall2, setWall2] = useState(1);
  const [wall3, setWall3] = useState(1);
  const [wall4, setWall4] = useState(1);
  const [initialArea, setInitialArea] = useState(0);
  const [totalArea, setTotalArea] = useState(0);
  const [doors, setDoors] = useState(0);
  const [windows, setWindows] = useState(0);

  const [smallCan, setSmallCan] = useState(0);
  const [mediumCan, setMediumCan] = useState(0);
  const [largeCan, setLargeCan] = useState(0);
  const [giantCan, setGiantCan] = useState(0);

  const calculateTotalArea = (height, wall1, wall2, wall3, wall4) => {
    let a = height * wall1;
    let b = height * wall2;
    let c = height * wall3;
    let d = height * wall4;
    let totalArea = a + b + c + d;
    setInitialArea(totalArea);
    setTotalArea(totalArea);
  };

  useEffect(() => {
    if (totalArea <= initialArea / 2) {
      setDoors(0);
      setWindows(0);
      setTotalArea(0);
    }
    if (height < 2.2) {
      setHeight(2.2);
    }
    if (wall1 < 1 || wall1 > 15) {
      setWall1(1);
    }
    if (wall2 < 1 || wall2 > 15) {
      setWall2(1);
    }
    if (wall3 < 1 || wall3 > 15) {
      setWall3(1);
    }
    if (wall4 < 1 || wall4 > 15) {
      setWall4(1);
    }
  }, [totalArea, initialArea, wall1, wall2, wall3, wall4, height]);

  const addWindow = () => {
    const window = 2.4;
    setTotalArea(totalArea - window);
    setWindows(windows + 1);
  };

  const removeWindow = (windowStatus) => {
    if (windowStatus <= 0) {
      return;
    }
    const window = 2.4;
    setTotalArea(totalArea + window);
    setWindows(windows - 1);
  };

  const addDoor = () => {
    const door = 1.52;
    setTotalArea(totalArea - door);
    setDoors(doors + 1);
  };

  const removeDoor = (doorStatus) => {
    if (doorStatus <= 0) {
      return;
    }
    const door = 1.52;
    setTotalArea(totalArea + door);
    setDoors(doors - 1);
  };

  const calculatePaintCans = (totalArea) => {
    //1l = 5m
    let paintCan05 = 0;
    let paintCan25 = 0;
    let paintCan36 = 0;
    let paintCan180 = 0;
    let remainingArea = totalArea;
    while (remainingArea >= 90) {
      remainingArea -= 90;
      paintCan180++;
    }
    while (remainingArea >= 18) {
      remainingArea -= 18;
      paintCan36++;
    }
    while (remainingArea >= 12.5) {
      remainingArea -= 12.5;
      paintCan25++;
    }
    while (remainingArea >= 2.5) {
      remainingArea -= 2.5;
      paintCan05++;
    }
    setSmallCan(paintCan05);
    setMediumCan(paintCan25);
    setLargeCan(paintCan36);
    setGiantCan(paintCan180);
  };

  return (
    <CoreStyle>
      <div>
        <Title>Status</Title>
        <div>Height = {height}</div>
        <div>First wall width = {wall1}</div>
        <div>Second wall width = {wall2}</div>
        <div>Third wall width = {wall3}</div>
        <div>Fourth wall width = {wall4}</div>
      </div>
      <CoreForm>
        <input
          type="number"
          onChange={(e) => setHeight(Number(e.target.value))}
          placeholder="Height"
        />
        <input
          type="number"
          onChange={(e) => setWall1(Number(e.target.value))}
          placeholder="First wall width"
        />
        <input
          type="number"
          onChange={(e) => setWall2(Number(e.target.value))}
          placeholder="Second wall width"
        />
        <input
          type="number"
          onChange={(e) => setWall3(Number(e.target.value))}
          placeholder="Third wall width"
        />
        <input
          type="number"
          onChange={(e) => setWall4(Number(e.target.value))}
          placeholder="Fourth wall width"
        />
      </CoreForm>
      <div>
        <Title>Area Status</Title>
        <div>First wall area: {height * wall1}</div>
        <div>Second wall area: {height * wall2}</div>{" "}
        <div>Third wall area: {height * wall3}</div>
        <div>Fourth wall area: {height * wall4}</div>
      </div>
      <div>Total area: {totalArea}</div>
      <p />
      <StyledButton
        onClick={() => calculateTotalArea(height, wall1, wall2, wall3, wall4)}
      >
        Total Area
      </StyledButton>
      <p />
      <div>Total doors: {doors}</div>
      <StyledButton onClick={() => addDoor()}>Add door</StyledButton>
      <StyledRedButton onClick={() => removeDoor(doors)}>
        Remove door
      </StyledRedButton>
      <p />
      <div>Total windows: {windows}</div>

      <StyledButton onClick={() => addWindow()}>Add window</StyledButton>
      <StyledRedButton onClick={() => removeWindow(windows)}>
        Remove window
      </StyledRedButton>

      <Title>Cans</Title>
      <div> 18 L cans: {giantCan}</div>
      <div> 3,6 L cans: {largeCan}</div>
      <div> 2,5 L cans: {mediumCan}</div>
      <div> 0,5 L cans: {smallCan}</div>
      <p />
      <StyledButton onClick={() => calculatePaintCans(totalArea)}>
        Calculate Cans
      </StyledButton>
    </CoreStyle>
  );
};

export default Core;
