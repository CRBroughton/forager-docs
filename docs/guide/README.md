# Forager Guide

[Forager](https://forager.crbroughton.me/) is a web based application for mapping publicly accessible foods.

Please be aware that [Forager](https://forager.crbroughton.me/) stores mapping data on your device, and can exceed over 1GB. [Forager](https://forager.crbroughton.me/) can also use your GPS to get your current location.

If you find [Forager](https://forager.crbroughton.me/) to be of use, please consider donating using the donation button.

## Installation

[Forager](https://forager.crbroughton.me/) can be installed via any modern web browser that supports PWA installation. Simply click the install button, usually located either in the top-right of the URL bar, or located in the browser menu while [Forager](https://forager.crbroughton.me/) is running.

<img :src="$withBase('/install-menu.jpg')" alt="install-menu" style="width: 360px">

Certain mobile web browsers will present a popup indicating that [Forager](https://forager.crbroughton.me/) can be installed.

<img :src="$withBase('/install-popup.jpg')" alt="install-popup" style="width: 360px">

Forager can also be used without installation through any modern web browser.

## Selecting Your Home Location

Upon first launch, [Forager](https://forager.crbroughton.me/) will ask you to select a home location. If your devices GPS is on, [Forager](https://forager.crbroughton.me/) will attempt to locate your position for you to more easily select your home location. 

If turned off, the application will require you to scroll to the desired location.

![forager](../.vuepress/public/home-selection.png)

You can return to your home location at any time by simply clicking the Return Home icon in the drop down menu.

## Marker Management

### Adding Markers

To add a newly found foragable food to [Forager](https://forager.crbroughton.me/), simmply press the location on the map. [Forager](https://forager.crbroughton.me/) will then ask you to name the item.

### Updating Markers

Markers can be updated simply by clicking the given marker. Currently [Forager](https://forager.crbroughton.me/) supports modifying the amount of times a marker has been foraged, as well as deleting the marker.

![marker-options](../.vuepress/public/marker-options.png)

### Tooltips

Tooltips show above each marker and show the markers names, as well as the last time that food was foraged. Marker tooltips can be toggled via the tooltip toggle button in the drop down menu.

### Search

The search function allows you to filter your markers via the input box. Each filtered item can then be clicked on, moving you to that filtered marker.

### Distance Calculator

The distance calculator can be activated via the drop down menu. Doing so will cause the calculator to appear on the bottom of the screen and highlight the distance calculator button with a red border. Simply click any marker, followed by another to get the distance in both Kilometres and Miles.

Selecting more than two markers will calculate the distance for the entire journey.

To turn off the distance calculator, either click the distance calculator button in the drop down menu, or click the distance calculator at the bottom of the screen.

![distance-calculator](../.vuepress/public/distance-calculator.png)

## Settings Menu

### Exporting Markers

Markers can be exported via the settings menu and using the "Export Markers" button. This will download all your markers to a .JSON file to your downloads folder.

### Importing Markers

Markers can be imported back into [Forager](https://forager.crbroughton.me/) using the "Import Markers" button in the settings menu, and then selecting your previous exported .JSON file. Please note that importing markers currently overrides all existing markers.

### Delete Home

Your stored home location can be deleted by simply pressing the "Delete Home" button, doing so will restart [Forager](https://forager.crbroughton.me/) and return you to the home selection screen. 

All stored markers will be kept.

### Delete markers

All stored markers will be deleted, however your home location will be kept.

### Clear cache

Clears the cached map data. All other data will be kept.