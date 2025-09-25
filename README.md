Rome: Total War Modding App was created to enable fast and reliable modification of RTW unit roster stats.

The main problem game modders face is working with a massive wall of text, where even a single typo can cause the game to crash on loading. Considering the large number of RTW units and their many stat parameters, modifying units becomes an incredibly frustrating and cumbersome process.

This app provides a clean and simple form-based interface, an error-free workflow, and generates a ready-to-use text file that can replace the original export_descr_unit.txt file in the game directory.

> [!TIP]
> It also includes the ability to save your work midway to avoid losing progress (e.g., if you accidentally close the app).



You can either run it as a localhost JavaScript app (any VS Code Live Server extension will do) or access it via a hosted version Rome: Total War Modding App — [Live Demo](https://rtwmoddingtools.netlify.app/)

It is built purely with vanilla JavaScript, requiring no installation and no external dependencies.

The idea was to create an app that could be easily adapted to other Creative Assembly games using a similar file format. To achieve this, I minimized hardcoding and ensured most of the content is dynamically parsed and generated.
