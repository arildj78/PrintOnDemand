# Print On Demand
A collection of checklists, tools and resources related to the creation and printing of maps.


| Checklist | Title                                                                    |
|-----------|--------------------------------------------------------------------------|
| 1.3       | [Oppsett av HP DesignJet Z6810][cl1.3]                                   |
| 1.4       | [Konfigurer ny papirtype på HP DesignJet Z6810][cl1.4]                   |
| 2.1.2     | [Installasjon av drivere for HP Designjet Z6810][cl2.1.2]                |
| 2.5       | [Oppretting av Print Preset for HP DesignJet Z6200 web interface][cl2.5] |
| 3.5	      |	[Utskrift av kart fra Z6200 Web Interface][cl3.5]                        |
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

The red diagonal through four of the colors indicate that this color is out of gamut for PP-200 paper on the Z6810 with the settings I have been using.

All measurements have been done with the [i1Pro 2 spectrophotometer][i1Pro2] from [x-rite][x-rite].

#### Test_Stripmap_sRGB.tif
![sRGB.tif measured result](https://github.com/arildj78/PrintOnDemand/raw/master/webresources/dE_M517_2017.02-sRGB_print.png)
For this print the Average ∆E was 3.0 for the six colors in gamut.

#### Test_Stripmap_AdobeRGB.tif
![AdobeRGB.tif measured result](https://github.com/arildj78/PrintOnDemand/raw/master/webresources/dE_M517_2017.02-AdobeRGB_print.png)
For this print the Average ∆E was 1.5 for the six colors in gamut.

#### Test_Stripmap_sRGB.tif compared to Test_Stripmap_AdobeRGB.tif
![AdobeRGB.tif compared to AdobeRGB measured result](https://github.com/arildj78/PrintOnDemand/raw/master/webresources/dE_AdobeRGB-sRGB_print.png)
White and black are pretty similiar while green, magenta, cyan and brown are noticable different. Greatest ∆E between the to prints is 7.9


# Other resources
### Defining gamut and color
[![Defining gamut and color space](https://github.com/arildj78/PrintOnDemand/raw/master/webresources/screenshotGamut.png)](https://youtu.be/jVkjaUCkMps "Defining gamut and color space")

### Rendering Intent & BlackPoint
[![Rendering Intent & BlackPoint](https://github.com/arildj78/PrintOnDemand/raw/master/webresources/screenshotBlackPoint.png)](https://youtu.be/ixLrXsTvHyI "Rendering Intent & BlackPoint")




[i1Pro2]: https://www.xrite.com/categories/calibration-profiling/i1publish-pro-2
[x-rite]: https://www.xrite.com
[cl1.3]:   /Checklists/PDF/1.3%20-%20Oppsett%20av%20HP%20DesignJet%20Z6810.pdf
[cl1.4]:   /Checklists/PDF/1.4%20-%20Konfigurer%20ny%20papirtype%20på%20HP%20DesignJet%20Z6810.pdf
[cl2.1.2]: /Checklists/PDF/2.1.2%20-%20Installasjon%20av%20drivere%20for%20HP%20Designjet%20Z6810.pdf
[cl2.5]:   /Checklists/PDF/2.5%20-%20Oppretting%20av%20Print%20Preset%20for%20HP%20DesignJet%20Z6200%20web%20interface.pdf
[cl3.5]:   /Checklists/PDF/3.5%20–%20Utskrift%20av%20kart%20fra%20Z6200%20Web%20Interface.pdf
