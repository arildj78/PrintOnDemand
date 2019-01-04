//---------------------------------------------------------------
//              Batch convert PDFs to TIFFs v1.0
//---------------------------------------------------------------
//  A javascript for batch conversion of PDFs in PhotoShop.
//  Page 1 of each PDF will be rendered at 400dpi,
//  Adobe RGB (1998) profile will be assigned before saving to a
//  TIFF file with ZIP compression. No other images should be
//  open i PhotoShop while running this script.
//
//  Version 1.0 of the script is written by Arild M Johannessen,
//  4 JAN 2019 for the conversion of PDF maps prior to printing.
//
//  Scripting language reference can be found at
//  https://www.adobe.com/devnet/photoshop/scripting.html
//---------------------------------------------------------------

#target Photoshop; //Set the script so it can be run from outside Photoshop if ExtendScript Toolkit is installed
app.bringToFront;  //Brings PhotoShop to the foreground


//Define some constants
const sRGB = "sRGB IEC61966-2.1"
const AdobeRGB = "Adobe RGB (1998)"

//Set the options for opening PDFs
var pdfOpenOptions = new PDFOpenOptions         //Create the object that will contain the settings
pdfOpenOptions.antiAlias = true                 //Render vector graphics with antialiasing turned on
pdfOpenOptions.cropPage = CropToType.MEDIABOX   //Crop to the size of the printmedia. This will include any added margins as well as bleed.
pdfOpenOptions.mode = OpenDocumentMode.RGB      //The PDF is rendered to a RGB file
pdfOpenOptions.resolution = 400                 //Rendering to 400dpi.
pdfOpenOptions.suppressWarnings = false         //Suppress any warnings that might come during opening.
pdfOpenOptions.usePageNumber = true             //Page property is treated as page (as opposed to an image number)
pdfOpenOptions.page = 1;                        //Set the pagenumber to be opened

var executeScript = true; //Holds the result of prerequisite checks 


// Run prerequisite checks
// -----------------------------------------------------
// If there are any open files, they need to be closed
var msg = "Close all open files without saving them?";
if (app.documents.length > 0) {                                 //Check how many open documents there are
    executeScript = confirm(msg)                                //Ask the user if he wants to close all files
    if (executeScript) {                                        //Proceed if the user accepts to close all documents
        while (app.documents.length > 0) {
            activeDocument.close(SaveOptions.DONOTSAVECHANGES); //Close open documents without saving them
        }
    }
}

// Get the list of files to be processed
if (executeScript) {
    var fileList = File.openDialog("Select files to convert", true);  //Shows the file selection dialog - multiselect is enabled
    if (fileList == null) { executeScript = false; }                  //The user pressed cancel while selecting files, abort the execution
}


// Perform the main part of the script only if prerequisite checks completed with success
if (executeScript) {
    //Extract the folder info from the first selected file
    var Filepath = fileList[0].toString();
    var InFolder = Filepath.substr(0, Filepath.lastIndexOf('/'));

    //Set output folder name and create it if it does not exist
    var OutFolderString = InFolder + "/TIFF"
    var outfolder = new Folder(OutFolderString); //Create a Folder object named outfolder

    if (outfolder.exists == false) { outfolder.create(); }  //If outfolder does not exist on the disk, create it.

    //Cycle through all files from the selection made in the file selection dialog
    for (var a = 0; a < fileList.length; a++) {
        if (fileList[a] instanceof File) { //Check that fileList[a] is a file object (and not a folder)
            
            var doc = open(fileList[a], pdfOpenOptions);  //Open the PDF

            while (app.documents.length > 0) {    //Work while the number of open documents are >0
                var docname = fileList[a].name.slice(0, -4);                             //Get the filename without the .pdf extension
                var saveFile = new File(decodeURI(outfolder) + "/" + docname + ".tif");  //Create a File object that later will be passed to the save method.

                doc.colorProfileName = AdobeRGB;                                         //Assign AdobeRGB as the Color profile
                SaveTiff_zip(saveFile);                                                  //Save file as a .tif with zip compression

                activeDocument.close(SaveOptions.DONOTSAVECHANGES);  //Close the file before processing the next one.
            }
        }
    }
}




 
//--------------------------------------------------//
//   method to save the tiff with ZIP compression   //
//--------------------------------------------------//
//   During initial testing this was the lossless   //
//   method that resultetin the smallest filesiz    //
//--------------------------------------------------//
function SaveTiff_zip(saveFile) {
    tiffSaveOptions = new TiffSaveOptions();                 //Create an object to hold the different saveoptions
    tiffSaveOptions.embedColorProfile = true;                //Save the file WITH information on which colorprofile to use
    tiffSaveOptions.imageCompression = TIFFEncoding.TIFFZIP; //Set compression to ZIP
    tiffSaveOptions.alphaChannels = false;                   //Do  not include a fourth colorchannel with transparancy information
    tiffSaveOptions.byteOrder = ByteOrder.IBM;               //File is stored as little endian (as opposed to big endian used on Mac)
    tiffSaveOptions.layers = false;                          //Flatten the image before saving

    //Save the file. (Parameters: Fileobject, SaveOptionsObject, asCopy, ExtensionCase)
    activeDocument.saveAs(saveFile, tiffSaveOptions, true, Extension.LOWERCASE);
}



//method to save the tiff with LZW compression - Included for future testing
function SaveTiff_lzw(saveFile) {
    tiffSaveOptions = new TiffSaveOptions();                 //Create an object to hold the different saveoptions
    tiffSaveOptions.embedColorProfile = true;                //Save the file WITH information on which colorprofile to use
    tiffSaveOptions.imageCompression = TIFFEncoding.TIFFLZW; //Set compression to LZW
    tiffSaveOptions.alphaChannels = false;                   //Do  not include a fourth colorchannel with transparancy information
    tiffSaveOptions.byteOrder = ByteOrder.IBM;               //File is stored as little endian (as opposed to big endian used on Mac)
    tiffSaveOptions.layers = false;                          //Flatten the image before saving

    //Save the file. (Parameters: Fileobject, SaveOptionsObject, asCopy, ExtensionCase)
    activeDocument.saveAs(saveFile, tiffSaveOptions, true, Extension.LOWERCASE); 
}

//method to save the tiff with JPG compression - Included for future testing
function SaveTiff_jpg(saveFile) {
    tiffSaveOptions = new TiffSaveOptions();              //Create an object to hold the different saveoptions
    tiffSaveOptions.embedColorProfile = true;             //Save the file WITH information on which colorprofile to use
    tiffSaveOptions.imageCompression = TIFFEncoding.JPEG; //Set compression to LZW
    tiffSaveOptions.jpegQuality = 9;                      //JPG quality is set to 9 on a scale from 0 to 12
    tiffSaveOptions.alphaChannels = false;                //Do  not include a fourth colorchannel with transparancy information
    tiffSaveOptions.byteOrder = ByteOrder.IBM;            //File is stored as little endian (as opposed to big endian used on Mac)
    tiffSaveOptions.layers = false;                       //Flatten the image before saving

    //Save the file. (Parameters: Fileobject, SaveOptionsObject, asCopy, ExtensionCase)
    activeDocument.saveAs(saveFile, tiffSaveOptions, true, Extension.LOWERCASE);
}