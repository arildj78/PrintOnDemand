# Print On Demand
A collection of checklists, tools and resources related to the creation and printing of maps at my organization. Some of the discussion is directly related to internal decisions taken. Because of this, not all of the content can be generalized and applied in every other setting.

## Correct and consistent
The goal of this collection of information is to enable you to reproduce graphical products with the help of your HP DesignJet Z6810 printer with a high degree of color accuracy. Even if you have never seen a hardcopy of the original artwork, this should be possible by the use of a colormanaged workflow.

Even though printing should be as easy as hitting Ctrl-P there are a few important settings in the print options dialog that will influence the result. Depending on how these are set, your print can end up quite different from what the artist original envisioned.

### Checklist
Checklists and the use of presets can minimize the risk of getting an unpredictable result. Below are examples of such checklists.

| Checklist | Title                                                                    |
|-----------|--------------------------------------------------------------------------|
| 1.3       | [Oppsett av HP DesignJet Z6810][cl1.3]                                   |
| 1.4       | [Konfigurer ny papirtype på HP DesignJet Z6810][cl1.4]                   |
| 2.1.2     | [Installasjon av drivere for HP Designjet Z6810][cl2.1.2]                |
| 2.5       | [Oppretting av Print Preset for HP DesignJet Z6200 web interface][cl2.5] |
| 3.5	      |	[Utskrift av kart fra Z6200 Web Interface][cl3.5]                        |

## Quality control of maps
After a map is printed, the following items should be checked if applicable

* Printed with correct projection.
* Printed with correct scale.
*	All intended layers are included.
* There are no missing raster blocks
*	There is no unintentional cropping.
* Nothing is missing from the map frame.
*	You have printed the correct map edition.
*	The colors should be compared to a known good print.

# Advanced users
## Printing with the PostScript driver
Most of the users will only print prefabricated PDFs or TIFFs via the web interface. This is the quickest method, with the least variables and the highest chance of achieving a perfect result every time.

For those with access to mapping software or photography software there might be a need to print directly from the software. If so, the [HP DesignJet Z-Series PS3 Driver][PS3driver] is the driver to use. As of early 2019 the latest driver is v61.183.21507.200. If you have installed a windows driver and see only a bare minimum of settings in the print settings dialog, it is likely that you are using a generic driver and need to replace this with the proper driver.

The PostScript (PS-) driver should also be set up with a preset in just like the web interface. A checklist for this is however not ready at this time and contributions are welcome. The most important parts of the print settings (both PS-driver and web interface) will however be discussed below.

## Choosing a good paper size in the PS-driver
If you need a print to match an exact paper size, the correct paper needs to be selected and the margins set accordingly.

However, it is more likely that you will print something and just want to trim away the unused paper afterward. A good setup for this is to define a paper as wide as possible, but not greater than your loaded roll. Then you define an unusual large height. My favorite paper size is 90cm x 300cm. I always set up the paper as portrait (as opposed to landscape) and enables **Remove top/bottom blank areas**. This setup ensures that you have the entire width of the paper available and practically no limitation vertically. However you will one day deselect the *Remove blank areas* option and the printer will waste 300cm of paper on each print. This is the reason to not going ballistic and defining a 91 meter long paper.

## Color Models
* [RGB color][RGB]
* [CMYK color][CMYK]
* [LAB color][LAB]

### Defining gamut and color
[![Defining gamut and color space](https://github.com/arildj78/PrintOnDemand/raw/master/webresources/screenshotGamut.png)](https://youtu.be/jVkjaUCkMps "Defining gamut and color space")

When printing maps we assume that all RGB values should be interpreted as Adobe RGB (1998). This is because during testing, the maps that were printed as if the data was Adobe RGB was slightly easier to read in low light conditions. Both *Adobe RGB* and *sRGB* are viable color spaces for printing maps. It just depends on the definition of the map symbology. This can however change in the future.

### Rendering Intent & BlackPoint compensation
[![Rendering Intent & BlackPoint](https://github.com/arildj78/PrintOnDemand/raw/master/webresources/screenshotBlackPoint.png)](https://youtu.be/ixLrXsTvHyI "Rendering Intent & BlackPoint")

For maps, there are a finite number of colors in the definition. Because of this the printer should be set up to reproduce as many as possible of these colors at their exact color value. To achieve this, the rendering intent should be set to **Relative Colorimetric** and the **Black Point Compensation should be set to disabled.** To see the effect of Black Point Compensation, try printing the file [BlackPointCompensation.tif][BPC]. For experimenting with Rendering Intent, try the file [RenderingIntent.tif][RI]. Photographs will often look better when printed with a perceptual rendering intent. This will shift all colors to recreate the general look of an image rather than hitting an exact color value.


# Pitfalls during printing
## Ignores color profile in PDF file
The *HP DesignJet Z6810* with firmware *PX8_04_00_06.2* does not process the ICC profile embedded in the PDF. The color profile set during submission of the print job is used.

## Forced use of embedded profile in TIFF
The *HP DesignJet Z6810* with firmware *PX8_04_00_06.2* ignores the color profile specified during job submission from web interface. Instead, the profile stored in the tif-file is used. This is only tested in the web interface with *Color management* set to *ICC color management*.




## Measuring color
### Colorsample M517 2017.02
To be able to compare the performance of different settings during printing it is beneficial to always use the same set of colors for testing. The current standard is given below. The colors are chosen from frequently used RGB values in the map *M517 air* interpreted as Adobe RGB (1998).

Average [∆E][DE2000] for the samples in gamut shall be 3.0 or less. No samples shall have a ∆E greater than 5.0. For colors out of gamut, maximum ∆E is defined individually in the table below.

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



## Print quality
For this discussion we define the following print qualities.

### Web Interface, Print quality: Custom
| Quality | Quality level | Additional setting |
|---------|---------------|--------------------|
| A1      | Fast          | EconoMode:On       |
| A2      | Fast          | EconoMode:Off      |
| A3      | Normal        |                    |
| A4      | Best          | Maximum detail:Off |
| A5      | Best          | Maximum detail:On  |

### Web Interface, Print quality: Standard
| Quality | Setting   |
|---------|-----------|
|  -      |   -       |
| B2      | Speed     |
|   -     |   -       |
| B4      | Quality   |
|   -     |  -        |

### PostScript driver, Print quality Standard options
| Quality | Setting       |
|---------|---------------|
| C1      | Far left      |
| C2      | 2 from left   |
| C3      | 2 from right  |
| C4      | Far right     |

# Printing resolution
![ResolutionCheck2400](/ExampleFiles/ResolutionCheck2400.tif)
When printing [ResolutionCheck2400.pdf][ResCheck2400] shown here, the image was resized to the these resolutions by the printer. The number of printing passes are also shown.

| Quality | Printing passes | dpi |
|---------|-----------------|-----|
| A1      |               4 | 300 |
| A2      |               6 | 600 |
| A3      |               8 | 600 |
| A4      |              10 | 600 |
| A5      |              10 |1200 |

| Quality | Printing passes | dpi |
|---------|-----------------|-----|
| C1      |               6 | 600 |
| C2      |               8 | 600 |
| C3      |               8 | 600 |
| C4      |               8 | 600 |



## Printing speed
### Startup
Startup from standby takes about 50 seconds before status message *Ready*. During the startup *Initializing Mechanics* is shown on the display. The advantage with standy is the short startup time and that the printer is accessible from the network. The disadvantage is a low hum from the fan and possible early aging of this.

Time can be saved on future prints by saving the job onboard the printer.
![PrintingTimes](/webresources/PrintingTimes.png)

| Quality | Printhead speed |
|---------|-----------------|
| A1      |        625 mm/s |
| A2      |        850 mm/s |
| A3      |        625 mm/s |
| A4      |        625 mm/s |
| A5      |        625 mm/s |

The difference between A2 and A3 due to increased horizontal speed. A2 have more blurry vertical edges. This is probably due to the increased speed.
![ResolutionCheck2400](/webresources/printqualityA2_A3.gif)

### Filetype vs speed
Of the filetypes tested so far, the TIFF has the quickest turnaround from pressing print on the computer to a finished map is ready. At the latest test, 2 copies of 15 different maps (62cm x 90cm) took exactly 2 hours to print.

PDFs with very much vectorgraphics take a very long time to render before printing commences.

## Recommended quality
The recommended quality is A3 for operational maps. Some users might find other setting that better fits their needs.



## When creating maps
### The difference between vector and RasterVsVector
The map zoomed out

![ResolutionCheck2400](/webresources/map.png)

The same map zoomed in. You can see the pixelation on the raster, while the vector graphics stay sharp.

![ResolutionCheck2400](/webresources/RasterVsVector.png)

### Working with raster and small features
During resizing or rotations a method needs to be set for handling pixels that don't match perfectly to a new spot. On top we see **Bilinear** while at the bottom we see the method **Nearest Neighbour**

![ResolutionCheck2400](/webresources/resizeBilinear.png)

![ResolutionCheck2400](/webresources/resizeNearestNeighbour.png)

In this image you see the effect of rotating the same feature back and forth. The Nearest Neighour method is used and you can see that what was a clean R, ended up with jagged edges.

![ResolutionCheck2400](/webresources/rotation.png)

## The effect of compressing images
![ResolutionCheck2400](/webresources/jpgQuality.png)


## Tools
### PsConvertPdf2Tiff.js
A javascript for batch conversion of PDFs in PhotoShop. The script processes the first page of a PDF and assigns the Adobe RGB (1998) color profile before saving the file as tif.
<br/>**_CAUTION:_ Do not use this script if the PDF is already tagged as Adobe RGB (1998). Photoshop treats all PDF imports as a convert to sRGB and the RGB values will be altered.**

### ColorConversion.xlsm
Excel spreadsheet with macros for converting colors between LAB, Adobe RGB (1998) and sRGB color values. There are also a sheet for calculating the difference between two different LAB colors.



[i1Pro2]: https://www.xrite.com/categories/calibration-profiling/i1publish-pro-2
[x-rite]: https://www.xrite.com
[cl1.3]:   /Checklists/PDF/1.3%20-%20Oppsett%20av%20HP%20DesignJet%20Z6810.pdf
[cl1.4]:   /Checklists/PDF/1.4%20-%20Konfigurer%20ny%20papirtype%20på%20HP%20DesignJet%20Z6810.pdf
[cl2.1.2]: /Checklists/PDF/2.1.2%20-%20Installasjon%20av%20drivere%20for%20HP%20Designjet%20Z6810.pdf
[cl2.5]:   /Checklists/PDF/2.5%20-%20Oppretting%20av%20Print%20Preset%20for%20HP%20DesignJet%20Z6200%20web%20interface.pdf
[cl3.5]:   /Checklists/PDF/3.5%20–%20Utskrift%20av%20kart%20fra%20Z6200%20Web%20Interface.pdf
[PS3driver]: https://support.hp.com/th-en/drivers/selfservice/HP-DesignJet-Z6810-Production-Printer/21355100
[RGB]: https://en.wikipedia.org/wiki/RGB_color_model
[CMYK]:https://en.wikipedia.org/wiki/CMYK_color_model
[LAB]: https://en.wikipedia.org/wiki/CIELAB_color_space
[BPC]: /ExampleFiles/BlackPointCompensation.tif
[RI]:  /ExampleFiles/RenderingIntent.tif
[DE2000]: https://en.wikipedia.org/wiki/Color_difference#CIEDE2000
[ResCheck2400]: /ExampleFiles/ResolutionCheck2400.tif
