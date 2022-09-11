# Daily Planner

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

I was tasked with creating a daily planner. This planner allows you to enter events in hour time-blocks, save those events so they persist if you refresh the page, and the page provides visual cues so you can quickly understand which events are current, in the past, and in he future. 

When making this project I learned the importance of understanding APIs like jQuery and Bootstrap. These tools are very powerful and allow you to create functional apps much more efficiently.

## Usage

To access this app, follow this link: https://nolacoder.github.io/05-Module-Challenge/

This app allows you to enter text directly into the timeblocks found on the table. When you click the Save button for a row, that value is stored in local storage and will be immediately rendered to the page upon reload. The timeblocks are synced with the current time at page load, and will display text areas as red if the block is the current hour, grey if the block is a prior hour, and green if the block is a future hour. You can also remove a stored value by saving an empty text area.

![Screenshot of Daily Planner app](./Assets/images/Module%205%20screenshot.png)
