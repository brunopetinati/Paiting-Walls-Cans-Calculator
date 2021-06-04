import { useState, useEffect } from "react";
import {
  WallStyle,
  StyledButton,
  StyledRedButton,
  WallForm,
  Title,
} from "../../pages/styles";

const Wall = () => {
  const [height, setHeight] = useState(0);
  const [wall1, setWall1] = useState(1);
  const [initialArea, setInitialArea] = useState(0);
  const [totalArea, setTotalArea] = useState(0);
  const [doors, setDoors] = useState(0);
  const [windows, setWindows] = useState(0);

  const [smallCan, setSmallCan] = useState(0);
  const [mediumCan, setMediumCan] = useState(0);
  const [largeCan, setLargeCan] = useState(0);
  const [giantCan, setGiantCan] = useState(0);

  const calculateTotalArea = (height, wall1) => {
    let totalArea = height * wall1;
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
    if (doors < 0) {
      setDoors(0);
    }
  }, [totalArea, initialArea, wall1, height, doors]);

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
    <WallStyle>
      <div>
        <Title>Status</Title>
        <div>Height = {height}</div>
        <div>Wall width = {wall1}</div>
      </div>
      <WallForm>
        <input
          type="number"
          onChange={(e) => setHeight(Number(e.target.value))}
          placeholder="Height"
        />
        <input
          type="number"
          onChange={(e) => setWall1(Number(e.target.value))}
          placeholder="Wall width"
        />
      </WallForm>
      <div> Wall area: {height * wall1}</div>
      <div>Total area: {totalArea}</div>
      <p />
      <StyledButton from onClick={() => calculateTotalArea(height, wall1)}>
        Total Area
      </StyledButton>
      <p />
      <div>Total doors: {doors}</div>
      <div />
      <StyledButton from onClick={() => addDoor()}>
        Add door
      </StyledButton>
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
    </WallStyle>
  );
};

export default Wall;
