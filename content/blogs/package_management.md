---
title: "Package Management" # apperared on a card component
description: Package Management in Windows ! # apperared on a card component
date: 2022-11-27
---
<h3 id="introduction">Introduction</h3>
<p align= "left" style="font-size:20px; padding: 10px;">Installing Applications in Windows isn't Secure. We either download executable files from some Websites or from The Microsoft Store where many Applications are Paid or Unavailable. Also, Installing Executables from some Random Websites, Makes updating them a pain in the ass and nor these Executable Files Verified. Also with The Microsoft Store, You don't get the entire fleet of Applications to Install. So, What is the Solution?</p>
<h3 id="package_managers">Package Managers</h3>
<p align= "left" style="font-size:20px; padding: 10px;">Package Managers are Primarily Software to Manage your Applications, Just like The Proprietary Microsoft Store in Windows. On the other hand, Linux uses Package Managers like apt, yum, DNF, Pacman, etc. But, Following the FOSS Ideology, We will be using a Free and Open Source Package Manager for Windows. Which can Install, Uninstall or Update Applications for free.
<br>
These Package Managers basically, Have a Huge Repository of Executable Files and, When we ask our Package Manager to Install an Application, They Download the Executable File and Install it. Similarly, They can Update and Uninstall the Packages too.</p>
<h3 id="winget">Winget</h3>
<p align= "left" style="font-size:20px; padding: 10px;">Now, Microsoft has created an Open Source Tool that is a Replacement for The Microsoft Store which is also known as <a href="https://learn.microsoft.com/en-us/windows/package-manager/" target="_blank" style="color : white">Winget (Windows Package Manager)</a>, Microsoft Store has a Huge Repository of Applications and this Utility helps a lot in managing packages in Windows. Kudos to Microsoft for that !
<br>
Its Installation Process is really easy, and Here is its <a href="https://learn.microsoft.com/en-us/windows/package-manager/winget/#install-winget" target="_blank" style="color : white">Installation Guide</a> and, its <a href="https://learn.microsoft.com/en-us/windows/package-manager/winget/#use-winget" target="_blank" style="color : white">Usage Guide</a> by Microsoft. You can also use <a href="https://winget.run/" target="_blank" style="color : white">winget.run</a> to Find Packages and their Install Commands. Here is a little GIF of the Installation Process of yt-dlp with winget.</p>
<img style="padding: 15px 15px 15px 15px" align="centre" src="" title="Installing yt-dlp with winget" width="auto" hieght="auto">
<h3 id="chocolatey">Chocolatey</h3>
<p align= "left" style="font-size:20px; padding: 10px;">Now, Some Applications aren't supported by Winget. So, We can use Chocolatey which is similar to Winget but supports more open-source packages. You can visit this website's Install Page and Usage Page. They also have a Find Packages Page Section, which can be used to find Applications and their details. Another GIF of Uninstalling sharex with Choco</p>
<img style="padding: 15px 15px 15px 15px" align="centre" src="" title="Uninstalling ShareX with choco" width="auto" hieght="auto">
<h3 id="conclusion">Conclusion</h3>
<p align= "left" style="font-size:20px; padding: 10px;">Again, Installing and Using these Package Managers is really easy. So, I suggest you use these Package Managers. There are many more Package Managers like Scoop, Ninite, and Yarn. Personally, I use Chocolatey and Winget. So, I don't know about them, but you can Explore more Package Managers according to your needs.</p>