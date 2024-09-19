Rome Total War modding app is created to allow fast and reliable modding of RTW unit roster stats.

The main problem game modder faces, is that he has to work with a wall of text, where even a single mistake or a typo will make game crash on loading.
Considering the amount of RTW units and their stat parameters, this makes attempts to modify units incredibly frustrating and cumbersome process.

This app allows you to have a nice and simple form interface, error free workflow and ready to use text file,
that you just need to throw into game directory and replace original export_descr_unit.txt file.

> [!TIP]
> It also features ability to save your work midway, to prevent losing your progress (by accidentally closing app etc).



You can either visit a website where it is hosted (currently not hosted! But it is planned in near future),
or just run it as localhost JS app. Any VSC live-server extension will do.

It is build purely with vanilla JavaScript, no installation needed and there are no dependencies. 

The idea was to create an app that would be relatively easy to adjust for other Creative Assembly games, where this kind of file format was used.
Therefore, I tried to limit hardcoding to the minimum, and most of the content is dynamically parsed and generated.  
