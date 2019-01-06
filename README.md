# Print On Demand
A collection of checklists, tools and resources related to the creation and printing of maps.

# Printing
## From  PDF
The HP DesignJet Z6810 with firmware PX8_04_00_06.2 does not process the ICC profile embedded in the PDF. All color management options are set during submission of the print job.

## From TIFF
The *HP DesignJet Z6810* with firmware *PX8_04_00_06.2* ignores the color profile specified during job submission from web interface. Instead, the profile stored in the tif-file is used. This is only tested with *Color management* set to **ICC color management**.

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

### Testresults
M517 2017.02 printed on PolyPropylene Banner 200µm with a HP DesignJet Z6810 resulted in the following ∆E when compared to the *M517 2017.02* standard. The print job was submitted from the web-interface with the preset named *Flykart*.

sRGB.tif
![sRGB.tif measured result](https://github.com/arildj78/PrintOnDemand/raw/master/webresources/dE_M517_2017.02-sRGB_print.png)
For this print the Average ∆E was 3.0 for the six colors in gamut.

Test_Stripmap_AdobeRGB.tif
![AdobeRGB.tif measured result](https://github.com/arildj78/PrintOnDemand/raw/master/webresources/dE_M517_2017.02-AdobeRGB_print.png)
For this print the Average ∆E was 1.5 for the six colors in gamut.

Test_Stripmap_sRGB.tif compared to Test_Stripmap_AdobeRGB.tif
![AdobeRGB.tif compared to AdobeRGB measured result](https://github.com/arildj78/PrintOnDemand/raw/master/webresources/dE_AdobeRGB-sRGB_print.png)


# Other resources
### Defining gamut and color
[![Defining gamut and color space](https://github.com/arildj78/PrintOnDemand/raw/master/webresources/screenshotGamut.png)](https://youtu.be/jVkjaUCkMps "Defining gamut and color space")

### Rendering Intent & BlackPoint
[![Rendering Intent & BlackPoint](https://github.com/arildj78/PrintOnDemand/raw/master/webresources/screenshotBlackPoint.png)](https://youtu.be/ixLrXsTvHyI "Rendering Intent & BlackPoint")
