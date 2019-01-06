# Print On Demand
A collection of checklists, tools and resources related to the creation and printing of maps.

# Contents
## Scripts
### PsConvertPdf2Tiff.js
A javascript for batch conversion of PDFs in PhotoShop. The script processes the first page of a PDF and assigns the Adobe RGB (1998) color profile before saving the file as tif.
<br/>**_CAUTION:_ Do not use this script if the PDF is already tagged as Adobe RGB (1998). Photoshop treats all PDF imports as a convert to sRGB and the RGB values will be altered.**

## Tools
### ColorConversion.xlsm
Excel spreadsheet with macros for converting colors between LAB, Adobe RGB (1998) and sRGB color values. There are also a sheet for calculating the difference between two different LAB colors.

## Standards
### Colorsample M517 2017.02
To be able to compare the performance of different settings during printing it is beneficial to always use the same set of colors for testing. The current standard is given below. The colors are chosen from frequently used RGB values in the map *M517 air* interpreted as Adobe RGB (1998).
![Colorsample M517 2017.02](https://github.com/arildj78/PrintOnDemand/raw/master/webresources/M517%202017.02.png)

# Other resources

### Defining gamut and color
[![Defining gamut and color space](https://github.com/arildj78/PrintOnDemand/raw/master/webresources/screenshotGamut.png)](https://youtu.be/jVkjaUCkMps "Defining gamut and color space")

### Rendering Intent & BlackPoint
[![Rendering Intent & BlackPoint](https://github.com/arildj78/PrintOnDemand/raw/master/webresources/screenshotBlackPoint.png)](https://youtu.be/ixLrXsTvHyI "Rendering Intent & BlackPoint")
