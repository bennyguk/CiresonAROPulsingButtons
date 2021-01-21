# Cireson portal ARO Pulsing Buttons script
JavaScript to pulsate the Save / Next navigation buttons of the Cireson Service Manager (SCSM) portal.

## To use
Create a new folder under the CustomSpace directory (e.g. AROButtons) of your Cireson portal server(s) and copy the custom_PulseSaveNextBtn.js file in to the new folder.
If you do not already have a Script Loader function in your custom.js, you can copy the contents of the scriptloader.js file and paste in to your custom.js.

Call the script in your custom.js by using `loadScript("/CustomSpace/AROButtons/custom_PulseSaveNextBtn.js",["/RequestOffering/"]);`

More information on how to use the Script Loader can be found [here](https://cireson.com/blog/how-to-organize-your-customspace-with-a-script-loader/).

## More information
The code has been tested with the v10.1.1.2016 version of the Cireson portal and with IE11, Chrome 87 and Edge.

The original discussion about this code can be found [here](https://community.cireson.com/discussion/1851/pulsating-save-button-in-drawer-taskbar?).

A new discussion has been created to cover the modifications to the original code [here](https://community.cireson.com/discussion/5848/pulsating-save-next-aro-button-in-drawer-taskbar).
