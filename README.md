# An Example of Drag and Drop on Photoshop UXP

This is an exmpla of drag-and-drop code for the UXP system.
It demostrates dragging an element onto another element and dropping local files onto 
the panel.

UXP has slight different system from a typycal browser environment, so I made this 
plugin as an example.

### Test environment

- macOS
- Photoshop 2026(27.4.0)
- UXP 7.2.0

## Current UXP update
According to [the update log](https://developer.adobe.com/photoshop/uxp/2022/ps_reference/changelog/), drag-and-drop functionality was updated in UXP 7.1.0, enabling to accept drops from anywhere, bypassing UXP.
I checked it and noticed that dragging from Panel side onto webview works on the environment.

## Note
I checked other applications, but as of March 2026, only Photoshop appears to support this feature.

