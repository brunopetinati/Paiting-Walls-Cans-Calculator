# Painting Walls Cans Calculator

**Version 1.0.0**

This is a small project, firstly created to achieve the requirements for a test, so it's a prototype.
The app aims to calculate how many cans of paintings would be necessary to paint specified walls.
There were some rules in which logic had to be established, such as minimum and maximum width of walls, and minimum wall height.

The app has two main features,

### 1-Wall Module

This calculates the area of one wall only, adding as many walls or windows intended within the limit of 50% of the total area.

### Room Module

This calculates the area of four walls. It's possible to discount doors and windows from the total area within the limit of 50% of the total area.


After defining the total area, the button "Calculate Cans" is used to determine the numbers of each type of can.

---

## Details

1. The walls can't be more than 15 meters or less than 1-meter in width. The input area doesn't accept values out of range.
2. When including doors and windows, the area left should be more than 50% of the total area.
3. The wall height must be 30cm more than the door, that's why it's initialized as 2.2 meters.
4. Each window is 2,00 x 1,20 meters, therefore 2.4m² as a result.
5. Each door is 0,80 x 1,90 meters, therefore 1.52m² as a result.
6. One litter of panting can cover 5m².
7. We don't consider ceiling or floor.
8. The painting cans sizes are respectively: 0,5L, 2,5L, 3,6L, 18L

## Installation

After downloading, it's necessary to run the following commands on the terminal:

* yarn add react-router-dom
* yarn add styled-components
* yarn add framer-motion
* yarn add @material-ui/core
* yarn start

however, the application can also be viewed on the following website
not requiring installation

https://painting-walls-cans.vercel.app/
