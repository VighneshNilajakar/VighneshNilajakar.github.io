---
title: "Screen Mirroring" # apperared on a card component
description: "Screen Mirroring made easier !"
date: 2022-12-17
---
<h3 id="introduction">Introduction</h3>
<p align= "left" style="font-size:20px; padding: 10px;"><a href="https://github.com/Genymobile/scrcpy" target="_blank" style="color : white">Scrcpy</a>, Abberivated from "Screen Copy" is an application that provides Mirroring and Controlling capabilities to an Android Device via USB or over A Network. It is a Multi-Platform, Open Source, and Free Application. Your Android needs to be at least Android 5.0, also you need to enable USB or ADB debugging on your Android. Some Users might need to enable additional settings to control Mouse and Keyboard.</p>
<h3 id="installation">Installation</h3>
<p align= "left" style="font-size:20px; padding: 10px;">You can view Scrcpy's Github to read its <a href="https://github.com/Genymobile/scrcpy#get-the-app" target="_blank" style="color : white">Installation</a> and <a href="https://github.com/Genymobile/scrcpy/#run" target="_blank" style="color : white">Usage Guide</a>.
<br>
Installation Commands : Using <a href="https://vighneshnilajakar.github.io/blogs/package_management/#chocolatey" target="_blank" style="color : white">choco</a>,
<br>
<br>
<code style="padding: 10px; font-size: 90%">choco install adb</code> 
<br>
<code style="padding: 10px; font-size: 90%">choco install scrcpy </code></p>
<h3 id="features">Features :</h3>
<ul>
    <li>
    <h4 id="recording">Recording</h4>
    <p align= "left" style="font-size:20px; padding: 10px;">It features Recording of Mirrored Android Screen, It will be a great tool to record Games, without degrading Device Performance. As Video is recorded on Computer. It can also add Buffering to the Device. This might increase Latency but reduces jitter. <a href="https://github.com/Genymobile/scrcpy#recording" target="_blank" style="color : white">Read More</a> about Recording via Scrcpy.</p>
    </li>
    <li>
    <h4 id="connectivity">Connectivity</h4>
    <p align= "left" style="font-size:20px; padding: 10px;">As Scrcpy uses <a href="https://developer.android.com/studio/command-line/adb" target="_blank" style="color : white">ADB</a> to communicate with the Device, We can also Mirror Screens over the same Network with TCP/IP. If your Device is Android 11+ you can just use <a href="https://developer.android.com/studio/command-line/adb#connect-to-a-device-over-wi-fi" target="_blank" style="color : white">Wireless Debugging</a>. If Wireless Connections aren't Stable you can decrease the bit rate and the resolution. Also, you can Connect your Device to Remote Devices by tunneling the Connections. <a href="https://github.com/Genymobile/scrcpy#connection" target="_blank" style="color : white">Read More</a> about Scrcpy's Connectivity.</p>
    </li>
    <li>
    <h4 id="window_configuration">Window Cnfiguration</h4>
    <p align= "left" style="font-size:20px; padding: 10px;">We can also configure, How Windows are displayed while Screens are Mirrored. You can configure the Title of the Window, Window Size, Borders, Device Rotation,  Touches, Stay-Awake, Fullscreen, etc.
    It also supports Input Controls, Where it syncs the Android's Clipboard and PC's Clipboard. Which can be useful for Editing     Documents. Gestures like Pich to Zoom are also Supported. You can simulate your Keyboard or Mouse as physically connected to your Android. <a href="https://github.com/Genymobile/scrcpy#window-configuration" target="_blank" style="color : white">Read More</a> about Window Configuration.</p>
    </li>
    <li>
    <h4 id="input_control">Input Control</h4>
    <p align= "left" style="font-size:20px; padding: 10px;">Input Controls, Lets you choose How to Control your Android from Computer using scrcpy. <a href="https://github.com/Genymobile/scrcpy#otg" target="_blank" style="color : white">OTG Mode</a> also exists, Where you can simulate your PC's Mouse and Keyboard connected to the Android. But, while your device is in OTG mode, It is unable to support Screen Mirroring. It can help a lot in Gaming on Android, As supported games also support in-game Keyboard controls Similar to Gaming on a PC.  Here is a little Video of me trying to play Minecraft, Where I ran <code style="padding: 10px; font-size: 90%">scrcpy --otg</code> on The Command Prompt. Which will prompt a Scrcpy-Iconed Window, by clicking on that Window a Cursor will appear on your Connected Android. The Keyboard will be automatically configured according to the Game. <a href="https://github.com/Genymobile/scrcpy#input-control" target="_blank" style="color : white">Read More</a> about Input Controls<a href="https://github.com/Genymobile/scrcpy#input-control" target="_blank" style="color : white">Read More</a> about Input Controls.</p>
    </li>
    <li>
    <h4 id="file_drop">File Drop</h4>
    <p align= "left" style="font-size:20px; padding: 10px;"> Scrcpy, Also supports a File Drop feature, Where you can Install Applications on your Android just by Dropping apk Files from the Computer in the Screen Mirroring Window. There will be No Visual Feedback on the Android or the Mirrored Screen, But a Log will be Printed on the Terminal. You can also Send Files by Dragging files to the Mirrored Screen Window. <a href="https://github.com/Genymobile/scrcpy#file-drop" target="_blank" style="color : white">Read More</a> about File Drop.</p>
    <li>
    <h4 id="keyboard_shortcuts">Keyboard Shortcuts</h4>
    <p align= "left" style="font-size:20px; padding: 10px;">Scrcpy also supports these Keyboard Shortcuts, If you don't want to use Terminal. but, if you want to keep things simple and want to use a GUI to control scrcpy. <a href="https://github.com/Genymobile/scrcpy#shortcuts" target="_blank" style="color : white">Read More</a> about Keyboard Shortcuts.</p>
    </li>
</ul>
<h3 id="guiscrcpy">GUIscrcpy</h3>
<p align= "left" style="font-size:20px; padding: 10px;">You can use <a href="https://guiscrcpy.srev.in/" target="_blank" style="color : white">guiscrcpy</a>, It is a Simple, Pluggable, Multi-Platform, Graphical User Interface for scrcpy. It is written entirely in Python, You can check its <a href="https://github.com/srevinsaju/guiscrcpy#-guiscrcpy" target="_blank" style="color : white">GitHub Page</a> for more Instructions. You can Install it with <a href="https://vighneshnilajakar.github.io/blogs/package_management/#scoop" target="_blank" style="color : white">Scoop Package Manager</a>.
<br>
<br>
<code style="padding: 10px; font-size: 90%">scoop bucket add extras</code> 
<br>
<code style="padding: 10px; font-size: 90%">scoop install guiscrcpy</code></p>
<h3 id="conclusion">Conclusion</h3>
<p align= "left" style="font-size:20px; padding: 10px;">All in All, scrcpy is an Award Winning Screen Mirroring Tool. It's a great alternative to those Propritrary Screen Mirroring Software. I think there are really great Projects you can do with Screen Mirroring. It just takes your Old Smartphone and Machine to reuse. Find the Beauty of using your Hardware to the Limits with me.</p>